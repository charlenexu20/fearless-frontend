import React, { useEffect, useState} from 'react';

function PresentationForm () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company_name, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [conference, setConference] = useState("");
    const [conferences, setConferences] = useState([]);

    const handleConferenceChange = event => {
        const value = event.target.value
        setConference(value)
    }

    const handleNameChange = event => {
        const value = event.target.value
        setName(value)
    }

    const handleEmailChange = event => {
        const value = event.target.value
        setEmail(value)
    }

    const handleCompanyNameChange = event => {
        const value = event.target.value
        setCompanyName(value)
    }

    const handleTitleChange = event =>{
        const value = event.target.value
        setTitle(value)
    }

    const handleSynopsisChange = event =>{
        const value = event.target.value
        setSynopsis(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // create an empty JSON object
        const data = {};

        data.presenter_name = name;
        data.presenter_email = email;
        data.conference = conference;
        data.company_name = company_name;
        data.title = title;
        data.synopsis = synopsis;
        console.log(data);

        const conferenceUrl = `http://localhost:8000${data.conference}presentations/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };

        const response = await fetch(conferenceUrl, fetchConfig);
        if (response.ok) {
            const newPresentation = await response.json();
            console.log(newPresentation);
            setName('');
            setEmail('');
            setConference('');
            setCompanyName('');
            setTitle('');
            setSynopsis('');
        }
    }

    const fetchData = async () => {
        const url = "http://localhost:8000/api/conferences/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setConferences(data.conferences)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new presentation</h1>
            <form onSubmit={handleSubmit} id="create-presentation-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} value= {name} placeholder="Presenter_name" required type="text" name="presenter_name" id="presenter_name" className="form-control"/>
                <label htmlFor="presenter_name">Presenter name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleEmailChange} value= {email} placeholder="Presenter_email" required type="email" name="presenter_email" id="presenter_email" className="form-control"/>
                <label htmlFor="presenter_email">Presenter_email</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleCompanyNameChange} value= {company_name} placeholder="Company_name" type="text" name="company_name" id="company_name" className="form-control"/>
                <label htmlFor="company_name">Company_name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleTitleChange} value= {title} placeholder="Title" required type="text" name="title" id="title" className="form-control"/>
                <label htmlFor="title">Title</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleSynopsisChange} value= {synopsis} placeholder="Synopsis" required type="textarea" name="synopsis" id="synopsis" className="form-control"/>
                <label htmlFor="synopsis">Synopsis</label>
              </div>
              <div className="mb-3">
                <select required onChange={handleConferenceChange} value= {conference} name="conference" id="conference" className="form-conference">
                  <option value="">Choose a conference</option>
                    {conferences.map(conference => {
                        return (
                            <option key={conference.href} value={conference.href}>
                            {conference.name}
                            </option>
                        );
                    })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default PresentationForm;
