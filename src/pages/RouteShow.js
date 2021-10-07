// dependencies
import { useState, prev } from "react";
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";
import Tick from "../components/Tick";
import AddTick from "../components/AddTick";
import { Spinner } from "react-bootstrap";
import EditTickModal from "../components/EditTickModal";

// component
export default function RouteShow({ match, gyms, getGyms }) {

    const gradesArray = [];

    // state for add tick (addTick.js)
    const [rating, setRating] = useState(-1);
    const [gradeSelection, setGradeSelection] = useState(null);
    const [comment, setComment] = useState('');
    const [hoverState, setHoverState] = useState(-1);

    //state for update tick (editTickModal.js)
    const [updatedRating, setUpdatedRating] = useState(-1)
    const [updatedGradeSelection, setUpdatedGradeSelection] = useState(-1)
    const [updatedComment, setUpdatedComment] = useState('')
    const [showEditModal, setShowEditModal] = useState(
        {
            show: false
        }
    );
    const [tickInfo, setTickInfo] = useState(null);
    const [updateTickStarHoverState, setUpdateTickStarHoverState] = useState(-1);

    // show edit modal
    const handleClickForEditModal = (tick) => {
        setTickInfo(tick);
        console.log(tickInfo);
        setUpdatedRating(tick.quality_rating)
        setUpdatedGradeSelection(tick.difficulty_grade);
        setUpdatedComment(tick.comment);
        setShowEditModal({
            show: true
        })
    }

    // close edit modal
    const onCloseEditModal = (e) => {
        setShowEditModal({
            show: false
        })
    }

    let URL = `http://localhost:4000/gyms/${match.params.gymId}/climbing_routes/${match.params.routeId}`;

    // create tick
    const createTick = async (newTick) => {
        console.log(newTick)
        await fetch(URL, {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(newTick),
        });
        getGyms();
    };

    // edit tick
    const editTick = async (updatedTick) => {
        let editURL = URL + `/ticks/${tickInfo._id}/update`
        await fetch(editURL, {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(updatedTick),
        });
        getGyms();
    };

    // set new tick data to state data
    let newTick = {
        difficulty_grade: gradeSelection,
        comment: comment,
        quality_rating: rating + 1
    };

    // set updated tick data to update
    let updatedTick = {
        difficulty_grade: updatedGradeSelection,
        comment: updatedComment,
        quality_rating: updatedRating
    };

    // handle form submit, call createTick
    const handleSubmit = (e) => {
        e.preventDefault();
        createTick(newTick);
        setRating(-1)
        setGradeSelection(null);
        setComment('');
        setHoverState(-1);
    };

    // handle editTickModal form submit, call editTick
    const handleSubmitEdit = (e) => {
        e.preventDefault();
        editTick(updatedTick);
        setUpdatedRating(0)
        setUpdatedGradeSelection(null);
        setUpdatedComment('');
        setHoverState(-1);
        onCloseEditModal();
    };

    // display when loading
    const loading = () => {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden"></span>
        </Spinner>;
    };

    // display when loaded
    const loaded = () => {
        const gym = gyms.filter(gym => gym._id === match.params.gymId);
        let route = (gym[0].climbing_routes.filter(route => route._id === match.params.routeId))[0];

        // build grades array for dropdown in AddTick & EditTickModal
        const buildGradesArray = () => {
            if (route.consensus_grade) {
                for (var i = route.consensus_grade - 3; i <= route.consensus_grade + 3; i++) {
                    gradesArray.push(i);
                }
            }
        }
        buildGradesArray();

        // add consensusGrade as yosemite grade (sport grade) or hueco grade (boulder grade) to route object as a new property
        if (route.route_type === "Sport") {
            route.consensusGrade = yosemiteGrades[route.consensus_grade] || "Unknown";
            route.setterGrade = yosemiteGrades[route.setter_grade] || "Unknown";
        } else if (route.route_type === "Boulder") {
            route.consensusGrade = huecoGrades[route.consensus_grade] || "Unknown";
            route.setterGrade = huecoGrades[route.setter_grade] || "Unknown";
        } else {
            route.consensusGrade = route.setterGrade = "ERROR: Unknown Route type";
        };

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
                        hoverState={hoverState}
                        setHoverState={setHoverState}
                        rating={rating}
                        setRating={setRating}
                        setGradeSelection={setGradeSelection}
                        setComment={setComment}
                        comment={comment}
                        rating={rating}
                        handleSubmit={handleSubmit}
                        gradeSelection={gradeSelection}
                        gradesArray={gradesArray}
                    />
                </div>
                <div>
                    <EditTickModal
                        show={showEditModal.show}
                        onCloseEditModal={onCloseEditModal}
                        route={route}
                        setUpdateTickStarHoverState={setUpdateTickStarHoverState}
                        updateTickStarHoverState={updateTickStarHoverState}
                        setUpdatedRating={setUpdatedRating}
                        setUpdatedGradeSelection={setUpdatedGradeSelection}
                        setUpdatedComment={setUpdatedComment}
                        updatedComment={updatedComment}
                        updatedRating={updatedRating}
                        handleSubmitEdit={handleSubmitEdit}
                        updatedGradeSelection={updatedGradeSelection}
                        gradesArray={gradesArray}
                        tickInfo={tickInfo}
                    />
                </div>
                <div>
                    {route.user_ticks.map(tick =>
                        <div>
                            <Tick
                                route={route}
                                tick={tick}
                                key={tick.id}
                                getGyms={getGyms}
                                match={match}
                                handleClickForEditModal={handleClickForEditModal}
                            />
                        </div>
                    )}
                </div>
            </>
        )
    };

    // if gyms, return loaded, else return loading
    return gyms ? loaded() : loading();
};