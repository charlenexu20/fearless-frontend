function createCard(name, description, pictureUrl, starts, ends) {
    return `
    <div class="col-sm">
        <div class="card shadow-lg mt-3">
            <img src="${pictureUrl}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
            </div>
        </div>
        <div class="card-footer text-muted">
        ${starts} - ${ends}
        </div>
    </div>
`;
  }

  window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences/';

    try {
      const response = await fetch(url);

      if (!response.ok) {
        // Figure out what to do when the response is bad
        throw new Error('Response not ok');
      } else {

        const data = await response.json();

        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);
          if (detailResponse.ok) {
            const details = await detailResponse.json();

            const title = details.conference.name;
            const description = details.conference.description;
            const pictureUrl = details.conference.location.picture_url;
            const starts = new Date(details.conference.starts);
            const ends = new Date(details.conference.ends);
            const html = createCard(title, description, pictureUrl,
            starts.toLocaleDateString('en-US'), ends.toLocaleDateString('en-US'));
            console.log(html);

            const row = document.querySelector('.row');
            row.innerHTML += html;
          }
        }
      }
    } catch (e) {
      // Figure out what to do if an error is raised
      console.error('error', e);
    }
  });
