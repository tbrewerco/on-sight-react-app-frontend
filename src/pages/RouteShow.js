import { useEffect, useState } from "react";

function RouteShow({ match, routes }) {
    // const id = match.params.id
    // const routes = routes
    // const route = routes.find(p => p._id === id)

    const [route, setRoute] = useState(null);

    useEffect(() => {
        if (routes) {
            const id = match.params.id;
            const foundRoute = routes.find(p => p._id === id);
            setRoute(foundRoute)
        }
    }, [routes, match])

    const loading = () => {
        return <p>Loading...</p>
    }

    const loaded = () => {
        const id = match.params.id;
        const foundRoute = routes.find(p => p._id === id);

        return (
            <div className="route">
                <h1>{route.name}</h1>
                <h3>{route.consensusYdsGrade}</h3>
                <p>Color: {route.hold_color}</p>
                <p>Gym Location: {route.gym_area}</p>
                <p>Setter: {route.setter_name}</p>
                <p>Setter's Grade: {route.setter_grade}</p>
                <p>Quality: {route.consensus_rating}</p>
                <img src={route.image} alt={route.name} height="400px" />
            </div>
        )
    }
    return route ? loaded() : loading();
}

export default RouteShow



// function RouteShow( {
//     const id = match.params.id
//     const routes = routes
//     const route = routes.find(p => r._id === id)

//     return (
//         <div className="route">
//             <h2>{route.name}</h2>
//             {/* */}

//         </div>
//     )
// }

// export default RouteShow;