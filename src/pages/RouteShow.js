import { useEffect, useState } from "react";
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";
import Tick from "../components/Tick";
import AddTick from "../components/AddTick";
import { Dropdown, Spinner } from "react-bootstrap";

function RouteShow({ match, gyms }) {
    const [rating, setRating] = useState(0);
    const [gradeSelection, setGradeSelection] = useState(-1)
    const [comment, setComment] = useState('');
    const [hoverState, setHoverState] = useState(-1);
    const [starColor, setStarColor] = useState(
        {
            unfilled: "#656464",
            filled: "#e3cb19"
        }
    );
    const starsArray = [1, 2, 3, 4, 5];

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTick = { gradeSelection, rating, comment }
    }

    const loading = () => {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden"></span>
        </Spinner>;
    };

    const loaded = () => {
        const gym = gyms.filter(gym => gym._id === match.params.gymId);
        let route = (gym[0].climbing_routes.filter(route => route._id === match.params.routeId))[0];
        // add consensusGrade as yosemite grade (sport grade) or hueco grade (boulder grade) to route object as a new property
        if (route.route_type === "Sport") {
            route.consensusGrade = yosemiteGrades[route.consensus_grade] || "Unknown";
            route.setterGrade = yosemiteGrades[route.setter_grade] || "Unknown";
        } else if (route.route_type === "Boulder") {
            route.consensusGrade = huecoGrades[route.consensus_grade] || "Unknown";
            route.setterGrade = huecoGrades[route.setter_grade] || "Unknown";
        } else {
            route.consensusGrade = route.setterGrade = "ERROR: Unknown Route type";
        }

        return (
            <>
                <div className="route">
                    <section className="routeInfo">
                        <h1>{route.name}</h1>
                        <h3><em>{route.route_type}</em></h3>
                        <h3>{route.consensusGrade}</h3>
                        <p>Color: {route.hold_color}</p>
                        <p>Gym Location: {route.gym_area}</p>
                        <p>Setter: {route.setter_name}</p>
                        <p>Setter's Grade: {route.setterGrade}</p>
                        <p>Quality: {route.consensus_rating}/5</p>
                    </section>
                    <img src={route.image} alt={route.name} height="400px" />
                </div>
                <div className="AddTickComp">
                    <AddTick
                        route={route}
                        starsArray={starsArray}
                        starColor={starColor}
                        hoverState={hoverState}
                        setHoverState={setHoverState}
                        setRating={setRating}
                        setGradeSelection={setGradeSelection}
                        setComment={setComment}
                        comment={comment}
                        rating={rating}
                        handleSubmit={handleSubmit}
                        gradeSelection={gradeSelection}
                    />
                </div>
                <div>
                    {route.user_ticks.map(tick =>
                        <div>
                            <Tick
                                route={route}
                                tick={tick}
                                key={tick.id}
                                starColor={starColor}
                            />
                        </div>
                    )}
                </div>
            </>
        )
    }
    return gyms ? loaded() : loading();
}

export default RouteShow
