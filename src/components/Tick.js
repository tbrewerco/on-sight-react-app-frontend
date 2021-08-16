import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";

export default function TickList({ tick, key, route }) {

  if (route.route_type === "Sport") {
    tick.userGrade = yosemiteGrades[tick.difficulty_grade] || "Unknown";
  } else if (route.route_type === "Boulder") {
    tick.userGrade = huecoGrades[tick.difficulty_grade] || "Unknown";
  } else {
    tick.userGrade = "N/A";
  }

  return (
    <>
      <p>{tick.createdBy} - difficulty: {tick.userGrade} - quality rating: {tick.quality_rating} - comment: {tick.comment} - date added: {tick.createdAt.slice(0, 10).split("-").reverse().join("/")}</p>
      <br />
    </>
  )
}
