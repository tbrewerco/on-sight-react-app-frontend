import { Dropdown, Form, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Star from "./Star";

export default function AddTick({ route, starsArray, rating, setRating, starColor, hoverState, setHoverState }) {
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
        <div className="addTick-top-row">
          <div className="DropDown">
            <Dropdown>
              <span className="howDifficult">How difficult was this route? </span>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">Select a grade</Dropdown.Toggle>
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
                overlay={<Tooltip id="tooltip">You may select a grade of up to five grades higher or five grades lower than the current "consensus grade"</Tooltip>}>
                <Button
                  variant="light"
                  className="d-inline-flex align-items-center">
                  <span className="ms-1">{<InfoRoundedIcon />}</span>
                </Button>
              </OverlayTrigger>
            </Dropdown>
          </div><span>Did you like the route</span><span>? Not so much</span>
          <div className="starRatingDiv">
            {starsArray.map((star, i) => (
              <Star
                key={i}
                starColor={starColor}
                starId={i}
                hoverState={hoverState}
                rating={hoverState || 0}
                onMouseEnter={() => setHoverState(i)}
                onMouseLeave={() => setHoverState(i)}
                onClick={() => setRating(i)}
              />
            ))}
          </div><span>Loved it!</span>
        </div>
      </Form>
    </>
  )
}

