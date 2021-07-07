import { Route, Switch } from "react-router-dom";
import RouteIndex from "../pages/RouteIndex";
import RouteShow from "../pages/RouteShow";

function Main(props) {
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