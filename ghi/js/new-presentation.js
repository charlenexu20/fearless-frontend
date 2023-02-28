window.addEventListener('DOMContentLoaded', async () => {

    const conferenceUrl = 'http://localhost:8000/api/conferences/';
    const conferenceResponse = await fetch(conferenceUrl);
    if (conferenceResponse.ok) {
        const conferenceData = await conferenceResponse.json();
        const conferenceSelectTag = document.getElementById('conference');
        for (let conference of conferenceData.conferences) {
            const option = document.createElement('option');
            option.value = conference.href;
            option.innerHTML = conference.name;
            conferenceSelectTag.appendChild(option);
        }
    }

    const formTag = document.getElementById('create-presentation-form');
    formTag.addEventListener('submit', async event => {
        event.preventDefault();

        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));
        const conferenceId = document.getElementById("conference");
        const value = conferenceId.value
        const presentationUrl = `http://localhost:8000${value}presentations/`;
        const fetchConfig = {
            method: "post",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(presentationUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            const newPresentation = await response.json();
        }
    });
});
