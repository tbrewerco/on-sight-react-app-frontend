import { Dropdown, Spinner, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function GymSearch({ gyms, getLocation, getGyms }) {

  const [zipForm, setZipForm] = useState('');
  const [nameSearchForm, setNameSearchForm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setZipForm(value.replace(/[^\d{5}]$/, "").substr(0, 5));
  }

  const handleSubmit = (event) => {
    getGyms(null, zipForm)
    event.preventDefault();
  }

  const handleNameFormChange = (event) => {
    const { value } = event.target;
    setNameSearchForm(value);
  }

  const handleSubmitSearchByGymName = (event) => {
    getGyms(null, null, nameSearchForm)
  }

  const searchByLocation = () => {
    return (
      <>
        <div className="zipSearchButtonContainer">
          <Button onClick={getLocation}>Use your location</Button>
        </div>
        <div className="orContainer">
          <span className="orDivider">or...</span>
          <hr></hr>
        </div>
      </>
    )
  }

  const searchByZip = () => {
    return (
      <>
        <div className="zipSearchContainer">
          <form action="" className="zipSearchForm" onSubmit={handleSubmit}>
            <input
              placeholder="Search by zip..."
              type="text"
              name="zip"
              value={zipForm}
              onChange={handleChange}
            />
            <br />
          </form>
        </div>
        <div className="orContainer">
          <span className="orDivider">or...</span>
          <hr></hr>
        </div>
      </>
    )
  }

  const searchByName = () => {
    return (
      <>
        <div className="gymNameSearchContainer">
          <form className="gymNameSearchForm" action="" onSubmit={handleSubmitSearchByGymName}>
            <input
              placeholder="Search by gym name..."
              type="text"
              name="zip"
              value={nameSearchForm}
              onChange={handleNameFormChange}
            />
            <br />
          </form>
        </div>
        <div className="orContainer">
          <span className="orDivider">or...</span>
          <hr></hr>
        </div>
      </>
    )
  }

  const loaded = () => {

    return (
      <>
        <div className="gymSearchContainer">
          <div className="DropDown">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">Select a Gym</Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                {gyms.map(gym => {
                  // conditionally display distance on items
                  function hasDistance() {
                    return <Dropdown.Item key={gym.name} href={`/gyms/${gym._id}`}>{gym.name} ({gym.distanceFromUser} mi) </Dropdown.Item>
                  };
                  function noDistance() {
                    return <Dropdown.Item key={gym.name} href={`/gyms/${gym._id}`}>{gym.name}</Dropdown.Item>
                  };

                  if (gym.distanceFromUser) {
                    return hasDistance();
                  }
                  return noDistance();
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </>
    );
  };

  const loading = () => {
    return <Spinner animation="border" role="status">
      <span className="visually-hidden"></span>
    </Spinner>;
  };

  return (
    <section>
      <div className="findYourGymHeader">
        <h1 className="findYourGymText">Find Your Gym</h1>
      </div>
      {searchByLocation()}
      {searchByZip()}
      {searchByName()}
      {gyms ? loaded() : loading()}
    </section>
  );
}