import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Star from "./Star";

export default function AddTick({ route, rating, setRating, hoverState, setHoverState, setGradeSelection, gradeSelection, setComment, comment, handleSubmit, gradesArray }) {

  const handleChange = (event) => {
    setGradeSelection(event.target.value);
  };

  return (
    <>
      <form
        className="addTickForm"
        onSubmit={handleSubmit}
      >
        {/* grade dropdown */}
        <div className="addTick-top-row">
          <div className="DropDown">
            <span className="howDifficult">How difficult was this route? </span>
            <select value={gradeSelection} onChange={handleChange}>
              <option selected>Select a grade</option>
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
          <div className="starRatingDiv">
            {[...Array(5)].map((star, i) => (
              <div className="starButton">
                <button
                  type="button"
                  key={i}
                  className={i <= (hoverState) ? "on" : "off"}
                  onMouseEnter={() => setHoverState(i)}
                  onMouseLeave={() => rating < 0 ? setHoverState(-1) : setHoverState(rating)}
                  onClick={() => setRating(i)}
                >
                  <Star />
                </button>
              </div>
            ))}
          </div>
          <span>Loved it!</span>
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
};