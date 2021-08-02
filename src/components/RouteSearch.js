import { Dropdown } from "react-bootstrap";

export default function RouteSearch({ match, gyms, gym }) {

  let routes = gym.climbing_routes.map(route => {

    return route;
  })

  const loaded = () => {
    return (
      <div className="DropDown">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">Select a Route</Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            {routes.map(route => {
              return (
                <Dropdown.Item route={route} key={route.name} href={`/routes/${gym._id}/${route._id}`}>{route.name}</Dropdown.Item>
              )
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
      {routes ? loaded() : loading()}
    </section>
  );
}