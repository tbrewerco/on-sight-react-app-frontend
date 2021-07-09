//////
// dependencies/imports
//////
import { Dropdown, DropdownButton } from "react-bootstrap";

//////
// pages/components
//////
export default function RouteIndex(props) {

  const loaded = () => {
    return (
      <div className="DropDown">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">Select a Route</Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            {props.routes.map(route => {
              return (
                <Dropdown.Item href={`/routes/${route._id}`}>{route.name}</Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  };

  const loading = () => {
    return <span>Loading...</span>;
  };

  return (
    <section>
      {props.routes ? loaded() : loading()}
    </section>
  );
}