import { Dropdown, Spinner } from "react-bootstrap";

export default function RouteSearch({ match, gyms, gym }) {

  let routes = gym.climbing_routes.map(route => {

    return route;
  })

  const loaded = () => {
    return (
      <div className="DropDown">
        <h1>{gym.name}</h1>
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
    return <Spinner animation="border" role="status">
      <span className="visually-hidden"></span>
    </Spinner>;
  };

  return (
    <section>
      {routes ? loaded() : loading()}
    </section>
  );
}