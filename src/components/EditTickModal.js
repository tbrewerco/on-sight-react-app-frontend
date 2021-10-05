import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Star from "./Star";

export default function EditTickModal({ show, onCloseEditModal, route, starsArray, setUpdatedRating, starColor, hoverState, setHoverState, setUpdatedGradeSelection, updatedGradeSelection, setUpdatedComment, updatedComment, handleSubmitEdit, gradesArray }) {

  const handleChange = (event) => {
    setUpdatedGradeSelection(event.target.value)
  }
  // conditionally display edit tick modal (on click)
  if (!show) {
    return null;
  }
  else return (
    <>
      <form
        className="addTickForm"
        onSubmit={handleSubmitEdit}
      >
        {/* grade dropdown */}
        <div className="addTick-top-row">
          <div className="DropDown">
            <span className="howDifficult">How difficult was this route? </span>
            <select defaultValue={NaN} value={updatedGradeSelection} onChange={handleChange}>
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
            {/* star rating */}
          </div><span>Did you like the route</span><span>? Not so much</span>
          <div className="starRatingDiv">
            {starsArray.map((star, i) => (
              <Star
                key={i}
                starColor={starColor}
                starId={i}
                rating={hoverState || 0}
                onMouseEnter={() => setHoverState(i)}
                onClick={() => setUpdatedRating(i += 1)}
              />
            ))}
          </div><span>Loved it!</span>
        </div>
        {/* comment input */}
        <div className="commentText">
          <textarea
            placeholder="Add your comment here"
            value={updatedComment}
            onChange={(e) => setUpdatedComment(e.target.value)}
          >
          </textarea>
        </div>
        <div className="buttonDiv">
          <button className="commentButton">Submit your comments/ratings</button>
        </div>
      </form>
      {/* close modal */}
      <button onClick={(e) => onCloseEditModal(e)}>Close</button>
    </>
  )
}

