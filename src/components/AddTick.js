import { Dropdown, Form, Button, OverlayTrigger, Image, Tooltip } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default function AddTick({ route }) {
  console.log(route)

  const gradesArray = [];

  function hasConsensus() {
    if (route.consensus_grade) {
      for (var i = route.consensus_grade - 5; i <= route.consensus_grade + 5; i++) {
        gradesArray.push(i);
      }
    }
  }
  hasConsensus();
  console.log(gradesArray);

  return (
    <>
      <Form>
        <div className="DropDown">
          <Dropdown>
            How difficult was this route?
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark"></Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              {gradesArray.map(grade => {
                return <DropdownItem>{grade}</DropdownItem>
              })}
              <DropdownItem>{route.consensus_grade}</DropdownItem>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Form>
      {/* Tooltip */}
      {/* <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="button-tooltip-3">Check out this avatar</Tooltip>}
      >
        {({ ref, ...triggerHandler }) => (
          <Button
            variant="light"
            {...triggerHandler}
            className="d-inline-flex align-items-center"
          >
            <Image
              ref={ref}
              roundedCircle
              src="holder.js/20x20?text=J&bg=28a745&fg=FFF"
            />
            <span className="ms-1">Hover to see</span>
          </Button>
        )}
      </OverlayTrigger> */}
    </>
  )
}

