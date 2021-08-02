import { useEffect, useState } from "react";
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";

function RouteShow({ match, gyms }) {
    const [theGyms, setTheGyms] = useState(null);

    useEffect(() => {
        if (gyms) {
            setTheGyms(gyms);
        }
    }, [gyms, match])

    const loading = () => {
        return <p>Loading...</p>
    }

    const loaded = () => {
        const gym = gyms.filter(gym => gym._id === match.params.gymId);
        // console.log(gym.name)
        let route = (gym[0].climbing_routes.filter(route => route._id === match.params.routeId))[0];
        // console.log(route);
        // add consensusGrade as yosemite grade or hueco grade to route object as a new property
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
        )
    }
    return gyms ? loaded() : loading();
}

export default RouteShow
