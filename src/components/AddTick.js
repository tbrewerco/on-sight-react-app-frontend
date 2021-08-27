import { useState, useMemo } from "react";
import { Dropdown, Form, Button, OverlayTrigger, Image, Tooltip } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';

export default function AddTick({ route }) {
  const [count, setCount] = useState(null)
  const [rating, setRating] = useState(0);
  const [starColor, setStarColor] = useState(
    {
      unfilled: "#656464",
      filled: "#ede159"
    }
  );
  // console.log(starColor.filled)

  const onRating = () => {

  }

  // const starRating = useMemo(() => {
  //   return Array(count)
  //     .fill(0)
  //     .map((_, i) => i + 1)
  //     .map((idx) => (
  //       <FontAwesomeIcon
  //         key={idx}
  //         className="cursorPointer"
  //         icon="star"
  //       // onClick={() => onRating(idx)}
  //       />
  //     ))
  // }, [count, rating])

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
              overlay={<Tooltip id="tooltip">You may select a grade of up to five grades higher or five grades lower than the current "consensus grade"</Tooltip>}>
              <Button
                variant="light"
                className="d-inline-flex align-items-center">
                <span className="ms-1">{<InfoRoundedIcon />}</span>
              </Button>
              {/* <InfoRoundedIcon /> */}
            </OverlayTrigger>
          </Dropdown>
        </div>
        <div className="starRatingDiv">


        </div>
      </Form>
    </>
  )
}

