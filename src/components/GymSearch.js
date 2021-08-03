import { Dropdown } from "react-bootstrap";

export default function GymSearch({ gyms }) {

  const loaded = () => {
    return (
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
    );
  };

  const loading = () => {
    return <span>Loading...</span>;
  };

  return (
    <section>
      {gyms ? loaded() : loading()}
    </section>
  );
}