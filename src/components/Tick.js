// dependencies
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import { useState } from "react";

// component
export default function TickList({ tick, route, starColor, match, getGyms, handleClickForEditModal }) {

  // for star-rating display on ticks
  const tickStarsArray = [];
  const buildTickStarsArray = () => {
    if (tick.quality_rating) {
      for (var i = 0; i < tick.quality_rating; i++) {
        tickStarsArray.push(i);
      }
    }
  }
  buildTickStarsArray();

  // converts numerical userGrade to appropriate non-numerical grade, based on route type
  if (route.route_type === "Sport") {
    tick.userGrade = yosemiteGrades[tick.difficulty_grade] || "none selected";
  } else if (route.route_type === "Boulder") {
    tick.userGrade = huecoGrades[tick.difficulty_grade] || "none selected";
  } else {
    tick.userGrade = "N/A";
  }

  // delete tick
  const deleteTick = async () => {
    try {
      const ticks = await fetch(`http://localhost:4000/gyms/${match.params.gymId}/climbing_routes/${match.params.routeId}/ticks/${tick._id}`, {
        method: 'PATCH',
      }).then(res => res.json());
      getGyms();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="tick">
      <p>Username goes here {tick.createdBy} - Grade: {tick.userGrade} - Quality: {tickStarsArray.length > 0 ? tickStarsArray.map(star => { return <StarRateRoundedIcon className="on" /> }) : "no rating selected"} Comment: {tick.comment || "no comment"} - Date Added: {tick.createdAt.slice(0, 10)}</p>
      <br />
      <button type="button" onClick={e => {
        handleClickForEditModal(tick);
      }}>Edit your send</button>
      <button type="button" onClick={deleteTick}>Delete your send</button>
    </div>
  )
}