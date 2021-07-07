import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import RouteIndex from "../pages/RouteIndex";
import RouteShow from "../pages/RouteShow";

function Main(props) {

    const [ routeState, setRouteState ] = useState(null);

    const URL = "http://localhost:4000/routes"

    //////
    // get data
    //////

    const getRoutes = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setRouteState(data);
    }

    //////
    // create
    //////

    const createRoute = async (route) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(route),
        });
        // update state
        getRoutes();
    }


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
                    <RouteIndex />
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