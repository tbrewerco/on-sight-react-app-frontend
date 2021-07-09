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

export default function Main(props) {

    const [routes, setRoutes] = useState(null);

    const URL = "https://on-sight-app-backend.herokuapp.com/"

    //////
    // get data
    //////
    const getRoutes = async () => {
        const response = await fetch(URL);
        let data = await response.json();
        data = data.map(route => {
            // map over routes data
            // retrieve the route's numerical consensus_grade value
            // locate within the yosemiteGrades object an entry whose numerical key matches the numerical consensus_grade
            // set consensusYdsGrade to the string value from that yosemiteGrades entry  
            // add consensusYdsGrade to each route object as a new property
            route.consensusYdsGrade = yosemiteGrades[route.consensus_grade] || "unknown";
            // in other words, if the route.consensus_grade is '1', it matches with yosemiteGrades.1, which has the value '5.4'
            ////////////////////////////////////////////
            // future: convert setter_grade to YDS
            // future: if route is boulder, use 'this grading system function', else use yosemite...
            ////////////////////////////////////////////
            return route;
        })
        setRoutes(data);
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