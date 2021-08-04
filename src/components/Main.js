import { Route, Switch } from "react-router-dom";
import { StyledMain } from "../styles";
import GymShow from "../pages/GymShow";
import RouteShow from "../pages/RouteShow";
import Home from "../pages/Home";

export default function Main({ gyms, createGyms, getLocation, getGyms }) {

    return (
        <StyledMain
            gyms={gyms}
            createGyms={createGyms}
            getLocation={getLocation}
        >

            <Switch>
                <Route exact path="/">
                    <Home
                        gyms={gyms}
                        createGyms={createGyms}
                        getLocation={getLocation}
                        getGyms={getGyms}
                    />
                </Route>
                <Route
                    path="/gyms/:id"
                    render={(rp) => (
                        <GymShow className="gymShowComp"
                            gyms={gyms}
                            {...rp}
                        />
                    )}
                />
                <Route
                    path="/routes/:gymId/:routeId"
                    render={(rp) => (
                        <RouteShow
                            gyms={gyms}
                            {...rp}
                        />
                    )}
                />
                {/* <Route exact path="/:id">
                    <GymShow gyms={gyms} createGyms={createGyms} />
                </Route> */}

            </Switch>

        </StyledMain>
    )
};