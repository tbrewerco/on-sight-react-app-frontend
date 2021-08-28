import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';

export default function TickList({ tick, key, route, starColor }) {

  const tickStarsArray = [];
  function buildTickStarsArray() {
    if (tick.quality_rating) {
      for (var i = 0; i < tick.quality_rating; i++) {
        tickStarsArray.push(i);
      }
    }
  }
  buildTickStarsArray();

  if (route.route_type === "Sport") {
    tick.userGrade = yosemiteGrades[tick.difficulty_grade] || "Unknown";
  } else if (route.route_type === "Boulder") {
    tick.userGrade = huecoGrades[tick.difficulty_grade] || "Unknown";
  } else {
    tick.userGrade = "N/A";
  }

  return (
    <>
      <p>Username goes here {tick.createdBy} - difficulty: {tick.userGrade} - quality rating: {tickStarsArray.map(star => { return <StarRateRoundedIcon style={{ color: starColor.filled }} /> })}comment: "{tick.comment}" - date added: {tick.createdAt.slice(0, 10)}</p>
      <br />
    </>
  )
}
