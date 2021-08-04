import { Dropdown, Spinner, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function GymSearch({ gyms, getLocation, getGyms }) {

  const [zipForm, setZipForm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setZipForm(value.replace(/[^\d{5}]$/, "").substr(0, 5));

  }

  function handleSubmit(event) {
    getGyms(null, zipForm)
    event.preventDefault();

  }

  const search = () => {
    return (
      <div className="findYourGym">
        <h1 className="findYourGymText">Find Your Gym</h1>
        <div className="zipSearch">
          <form action="" className="form-data" onSubmit={handleSubmit}>
            <input
              placeholder="Search by zip ..."
              type="text"
              name="zip"
              value={zipForm}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="zip">or...</label>
          </form>
          <hr></hr>
        </div>
      </div>
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
                  // conditionally display miles on items
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
      {search()}
      {gyms ? loaded() : loading()}
    </section>
  );
}