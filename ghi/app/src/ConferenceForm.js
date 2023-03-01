// import React, { useEffect, useState } from 'react';

// function ConferenceForm () {
//     const [name, setName] = useState('');
//     const [starts, setStart] = useState('');
//     const [ends, setEnd] = useState('');
//     const [description, setDescription] = useState('');
//     const [max_presentations, setMaxPresentations] = useState('');
//     const [max_attendees, setMaxAttendees] = useState('');
//     const [location, setLocation] = useState('');
//     const [locations, setLocations] = useState([]);

//     const handleNameChange = event => {
//         const value = event.target.value
//         setName(value)
//     }

//     const handleStartChange = event => {
//         const value = event.target.value
//         setStart(value)
//     }

//     const handleEndChange = event => {
//         const value = event.target.value
//         setEnd(value)
//     }

//     const handleDescriptionChange = event => {
//         const value = event.target.value
//         setDescription(value)
//     }

//     const handleMaxPresentationsChange = event => {
//         const value = event.target.value
//         setMaxPresentations(value)
//     }

//     const handleMaxAttendeesChange = event => {
//         const value = event.target.value
//         setMaxAttendees(value)
//     }

//     const handleLocationChange = event => {
//         const value = event.target.value
//         setLocation(value)
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const data = {};

//         data.name = name;
//         data.starts = starts;
//         data.ends = ends;
//         data.description = description;
//         data.max_presentations = max_presentations;
//         data.max_attendees = max_attendees;
//         data.location = location;
//         console.log(data);

//         const conferenceUrl = 'http://localhost:8000/api/conferences/';
//         const fetchConfig = {
//             method: "post",
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };
//         const response = await fetch(conferenceUrl, fetchConfig);
//         if (response.ok) {
//             const newConference = await response.json();
//             console.log(newConference);
//             setName('');
//             setStart('');
//             setEnd('');
//             setDescription('');
//             setMaxPresentations('');
//             setMaxAttendees('');
//             setLocation('');
//         }
//     }

//     const fetchData = async () => {
//         const locationUrl = 'http://localhost:8000/api/locations/';
//         const locationResponse = await fetch(locationUrl);
//         if (locationResponse.ok) {
//             const locationData = await locationResponse.json();
//             setLocations(locationData.locations);

//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div className="row">
//         <div className="offset-3 col-6">
//           <div className="shadow p-4 mt-4">
//             <h1>Create a new conference</h1>
//             <form onSubmit={handleSubmit} id="create-conference-form">
//               <div className="form-floating mb-3">
//                 <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
//                 <label htmlFor="name">Name</label>
//               </div>
//               <div className="form-floating mb-3">
//                 <input onChange={handleStartChange} value={starts} placeholder="Starts" required type="date" name="starts" id="starts" className="form-control" />
//                 <label htmlFor="starts">Starts</label>
//               </div>
//               <div className="form-floating mb-3">
//                 <input onChange={handleEndChange} value={ends} placeholder="Ends" required type="date" name="ends" id="ends" className="form-control" />
//                 <label htmlFor="ends">Ends</label>
//               </div>
//               <div className="form-floating mb-3">
//                 <input onChange={handleDescriptionChange} value={description} placeholder="Description" required type="textarea" name="description" id="description" className="form-control" />
//                 <label htmlFor="description">Description</label>
//               </div>
//               <div className="form-floating mb-3">
//                 <input onChange={handleMaxPresentationsChange} value={max_presentations} placeholder="Max_presentations" required type="number" name="max_presentations" id="max_presentations" className="form-control" />
//                 <label htmlFor="max_presentations">Maximum presentations</label>
//               </div>
//               <div className="form-floating mb-3">
//                 <input onChange={handleMaxAttendeesChange} value={max_attendees} placeholder="Max_attendees" required type="number" name="max_attendees" id="max_attendees" className="form-control" />
//                 <label htmlFor="max_attendees">Maximum attendees</label>
//               </div>
//               <div className="mb-3">
//                 <select onChange={handleLocationChange} value={location} required name="location" id="location" className="form-location">
//                   <option value="">Choose a location</option>
//                   {locations.map(location => {
//                     return (
//                         <option key={location.name} value={location.name}>
//                             {location.name}
//                         </option>
//                     );
//                   })}
//                 </select>
//               </div>
//               <button className="btn btn-primary">Create</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default ConferenceForm

import React, { useEffect, useState} from 'react';

    function ConferenceForm( ) {
        const [name, setName] = useState('');
        const [starts, setStart] = useState('');
        const [ends, setEnd] = useState('');
        const [description, setDescription] = useState('');
        const [max_presentations, setMaxPresentations] = useState('');
        const [max_attendees, setMaxAttendees] = useState('');
        const [location, setLocation] =useState('')
        const [locations, setLocations] = useState([]);

        const handleNameChange = event => {
            const value = event.target.value
            setName(value)
        }

        const handleStartChange = event => {
            const value = event.target.value
            setStart(value)
        }

        const handleEndChange = event => {
            const value = event.target.value
            setEnd(value)
        }

        const handleDescriptionChange = event => {
            const value = event.target.value
            setDescription(value)
        }

        const handleMaxPresentationsChange = event => {
            const value = event.target.value
            setMaxPresentations(value)
        }

        const handleMaxAttendeesChange = event => {
            const value = event.target.value
            setMaxAttendees(value)
        }

        const handleLocationChange = event => {
            const value = event.target.value
            setLocation(value)
        }

        const handleSubmit = async (event) => {
            event.preventDefault();

            // create an empty JSON object
            const data = {};

            data.name = name;
            data.starts = starts;
            data.ends = ends;
            data.description = description;
            data.max_presentations = max_presentations;
            data.max_attendees = max_attendees;
            data.location = location;
            console.log(data);

            const conferenceUrl = 'http://localhost:8000/api/conferences/';
            const fetchConfig = {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch(conferenceUrl, fetchConfig);
            if (response.ok) {
                const newConference = await response.json();
                console.log(newConference)

                setName('');
                setStart('');
                setEnd('');
                setDescription('');
                setMaxPresentations('');
                setMaxAttendees('');
                setLocation('');
            }
        }

      const fetchData = async () => {
        const locationUrl = 'http://localhost:8000/api/locations/';
        const locationResponse = await fetch(locationUrl);
        if (locationResponse.ok) {
            const locationData = await locationResponse.json();
            setLocations(locationData.locations);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new conference</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input value={starts} onChange={handleStartChange} placeholder="Starts" required type="date" name="starts" id="starts" className="form-control"/>
                <label htmlFor="starts">Starts</label>
              </div>
              <div className="form-floating mb-3">
                <input value={ends} onChange={handleEndChange} placeholder="Ends" required type="date" name="ends" id="ends" className="form-control"/>
                <label htmlFor="ends">Ends</label>
              </div>
              <div className="form-floating mb-3">
                <input value={description} onChange={handleDescriptionChange} placeholder="Description" required type="textarea" name="description" id="description" className="form-control"/>
                <label htmlFor="description">Description</label>
              </div>
              <div className="form-floating mb-3">
                <input value={max_presentations} onChange={handleMaxPresentationsChange} placeholder="Max_presentations" required type="number" name="max_presentations" id="max_presentations" className="form-control"/>
                <label htmlFor="maximum presentations">Maximum presentations</label>
              </div>
              <div className="form-floating mb-3">
                <input value={max_attendees} onChange={handleMaxAttendeesChange} placeholder="Max_attendees" required type="number" name="max_attendees" id="max_attendees" className="form-control"/>
                <label htmlFor="maximum attendees">Maximum attendees</label>
              </div>
              <div className="mb-3">
                <select
                    required value={location} onChange={handleLocationChange} name="location"
                    id="location"
                    className="form-select">
                    <option key="" value="">Choose a location</option>
                    {locations.map(location => {
                        return (
                            <option key={location.id} value={location.id}>
                            {location.name}
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

export default ConferenceForm;
