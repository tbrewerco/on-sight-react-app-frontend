import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import RouteIndex from "../pages/RouteIndex";
import RouteShow from "../pages/RouteShow";
import yosemiteGrades from "../utils/grades";

function Main(props) {

    const [routes, setRoutes] = useState(null);

    const URL = "http://localhost:4000/routes"

    //////
    // get data
    //////

    const getRoutes = async () => {
        const response = await fetch(URL);
        let data = await response.json();
        data = data.map(route => {
            route.consensusYdsGrade = yosemiteGrades[route.consensus_grade] || "unknown"; // error handling w 'or' operator (if a route has a consensus grade, then it will be returned, if it does not, it will be undefined, which is falsey, so "unknown" is returned)...
            // the .map will need to be done for setter_grade and difficulty_grade...
            // if route is boulder, use this thing else use yosemite...
            console.log(route); // 
            return route;
        })
        setRoutes(data);
    }

    //////
    // create
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


    //////
    // update
    //////



    //////
    // delete
    //////

    useEffect(() => getRoutes(), []); // clean up effect once on mount/ unmount

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <RouteIndex routes={routes} createRoutes={createRoutes} />
                </Route>
                <Route
                    path="/routes/:id"
                    render={(rp) => (
                        <RouteShow
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    )
}

export default Main;