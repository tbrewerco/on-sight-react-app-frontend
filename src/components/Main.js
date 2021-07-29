//////
// dependencies/imports
//////
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { StyledMain } from "../styles";
import RouteIndex from "../pages/RouteIndex";
import RouteShow from "../pages/RouteShow";
import Home from "../pages/Home";
import yosemiteGrades from "../utils/grades";
import huecoGrades from "../utils/BoulderGrades";

export default function Main(props) {

    const [routes, setRoutes] = useState(null);

    const URL = "http://localhost:4000/routes"

    //////
    // get data
    //////
    const getRoutes = async () => {
        const response = await fetch(URL);
        let data = await response.json();
        setRoutes(data);
        data = data.map(route => {
            // map over routes and retrieve each route's numerical consensus_grade value
            // locate within the yosemiteGrades or huecoGrades object an entry whose numerical key matches the numerical consensus_grade
            // set consensusGrade to the string value from that yosemiteGrades or huecoGrades entry  
            // add consensusGrade to each route object as a new property
            if (route.route_type === "Sport") {
                route.consensusGrade = yosemiteGrades[route.consensus_grade] || "Unknown";
                route.setterGrade = yosemiteGrades[route.setter_grade] || "Unknown";
            } else if (route.route_type === "Boulder") {
                route.consensusGrade = huecoGrades[route.consensus_grade] || "Unknown";
                route.setterGrade = huecoGrades[route.setter_grade] || "Unknown";
            } else {
                route.consensusGrade = route.setterGrade = "ERROR: Unknown Route type";
            }
            return route;
        })
    }

    //////
    // create routes
    //////

    const createRoutes = async (route) => {

        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(route),
        });
        getRoutes();
    };

    useEffect(() => getRoutes(), []); // clean up effect once on mount/ unmount

    return (
        <StyledMain>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/routes">
                    <RouteIndex routes={routes} createRoutes={createRoutes} />
                </Route>
                <Route
                    path="/routes/:id"
                    render={(rp) => (
                        <RouteShow
                            routes={routes}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </StyledMain>
    )
};