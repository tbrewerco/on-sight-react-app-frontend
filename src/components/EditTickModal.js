import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Star from "./Star";

export default function EditTickModal({ show, onCloseEditModal, route, updatedRating, setUpdatedRating, updateTickStarHoverState, setUpdateTickStarHoverState, setUpdatedGradeSelection, updatedGradeSelection, setUpdatedComment, updatedComment, handleSubmitEdit, gradesArray, tickInfo }) {

  const handleChange = (event) => {
    setUpdatedGradeSelection(event.target.value)
  };

  // conditionally display edit tick modal (on click)
  if (!show) {
    return null;
  }
  else return (
    <>
      <div className="modalContainer">
        <div className="editModal">
          <form
            className="addTickForm"
            onSubmit={handleSubmitEdit}
          >
            {/* grade dropdown */}
            <div className="addTick-top-row">
              <div className="DropDown">
                <span className="howDifficult">How difficult was this route? </span>
                <select value={updatedGradeSelection} onChange={handleChange}>
                  {/* dynamically set default option to user's previous option */}
                  <option selected value={tickInfo.difficulty_grade} >{route.route_type === "Sport" ? yosemiteGrades[tickInfo.difficulty_grade] : huecoGrades[tickInfo.difficulty_grade]}</option>
                  {gradesArray.map(grade => {
                    if (grade >= 1 && grade <= 30) {
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
              <div className="updateStarRatingDiv">
                {[...Array(5)].map((star, i) => (
                  <div className="updateStarButton">
                    <button
                      type="button"
                      key={i}
                      className={i <= (updateTickStarHoverState) ? "on" : "off"}
                      onMouseEnter={() => setUpdateTickStarHoverState(i)}
                      onMouseLeave={() => updatedRating < 0 ? setUpdateTickStarHoverState(-1) : setUpdateTickStarHoverState(updatedRating)}
                      onClick={() => setUpdatedRating(i + 1)}
                    >
                      <Star />
                    </button>
                  </div>
                ))}
              </div>
              <span>Loved it!</span>
            </div>
            {/* comment input */}
            <div className="commentText">
              <textarea
                placeholder={tickInfo.comment}
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
        </div>
      </div>
    </>
  );
};