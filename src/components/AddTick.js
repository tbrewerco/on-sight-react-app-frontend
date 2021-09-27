import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Star from "./Star";

export default function AddTick({ route, starsArray, setRating, starColor, hoverState, setHoverState, setGradeSelection, gradeSelection, setComment, comment, handleSubmit, gradesArray }) {

  // const gradesArray = [];
  // const buildGradesArray = () => {
  //   if (route.consensus_grade) {
  //     for (var i = route.consensus_grade - 5; i <= route.consensus_grade + 5; i++) {
  //       gradesArray.push(i);
  //     }
  //   }
  // }
  // buildGradesArray();

  const handleChange = (event) => {
    setGradeSelection(event.target.value)
  }

  return (
    <>
      <form
        className="addTickForm"
        onSubmit={handleSubmit}
      >
        <div className="addTick-top-row">
          <div className="DropDown">
            <span className="howDifficult">How difficult was this route? </span>
            <select defaultValue={NaN} value={gradeSelection} onChange={handleChange}>
              <option value={NaN} >Select a Grade</option>
              {gradesArray.map(grade => {
                if (route.route_type === "Sport") {
                  return <option
                    value={grade}
                    key={grade}
                  >{yosemiteGrades[grade]}</option>
                }
                if (route.route_type === "Boulder") {
                  return <option
                    value={grade}
                    key={grade}>{huecoGrades[grade]}</option>
                }
              })}
            </select>
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
          </div><span>Did you like the route</span><span>? Not so much</span>
          <div className="starRatingDiv">
            {starsArray.map((star, i) => (
              <Star
                key={i}
                starColor={starColor}
                starId={i}
                rating={hoverState || 0}
                onMouseEnter={() => setHoverState(i)}
                onClick={() => setRating(i += 1)}
              />
            ))}
          </div><span>Loved it!</span>
        </div>
        <div className="commentText">
          <textarea
            placeholder="Add your comment here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          >
          </textarea>
        </div>
        <div className="buttonDiv">
          <button className="commentButton">Submit your comments/ratings</button>
        </div>
      </form>
    </>
  )
}

