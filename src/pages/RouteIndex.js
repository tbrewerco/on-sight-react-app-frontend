import { useState } from "react";
import { Link } from "react-router-dom";

function RouteIndex(props) {
    // state to hold formData
    const [ newForm, setNewForm ] = useState({
        name: "",
        route_type: "",
        gym_area: "",
        hold_color: "",
        setter_name: "",
        setter_grade: "",
        consensus_grade: "",
        consensus_rating: "",
        // user_ticks: [userTickSchema],
        createdBy: "",
        // { 
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // },
    });

    // handleChange function for form

    // loaded routes function
    const loaded = () => {
        return props.routes.map((route) => (
            <div key={route._id} className="route">
                <Link to={`/routes/${route._id}`}><h3>{route.name}</h3></Link>
                <img src={route.image} alt={route.name} />
                <h4>{route.consensus_grade}</h4>
            </div>
        ));
    };

    const loading = () => {
        return <span>Loading...</span>;
    };

    return props.routes ? loaded() : loading();
}

export default RouteIndex;