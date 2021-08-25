import { Dropdown, Form, Button, OverlayTrigger, Image, Tooltip } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";

export default function AddTick({ route }) {

  const gradesArray = [];
  function buildGradesArray() {
    if (route.consensus_grade) {
      for (var i = route.consensus_grade - 5; i <= route.consensus_grade + 5; i++) {
        gradesArray.push(i);
      }
    }
  }
  buildGradesArray();

  return (
    <>
      <Form>
        <div className="DropDown">
          <Dropdown>How difficult was this route? <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">Select a grade</Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              {gradesArray.map(grade => {
                if (route.route_type === "Sport") {
                  return <DropdownItem>{yosemiteGrades[grade]}</DropdownItem>
                }
                if (route.route_type === "Boulder") {
                  return <DropdownItem>{huecoGrades[grade]}</DropdownItem>
                }
              })}
            </Dropdown.Menu>
            {/* Tooltip */}
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip">You have the option of selecting a grade of up to five grades higher or five grades lower than the current "consensus grade"</Tooltip>}>
              <Button
                variant="light"
                className="d-inline-flex align-items-center">
                <Image roundedCircle src="" />
                <span className="ms-1">info</span>
              </Button>
            </OverlayTrigger>
          </Dropdown>
        </div>
      </Form>
    </>
  )
}

