import { useState } from "react";
import { Link } from "react-router-dom";

function RouteIndex(props) {
    // state to hold formData
    const [ newForm, setNewForm ] = useState({
        name: "",
        route_type: "",
        gym_area: "",
        hold_color: "",
        image: "",
        setter_name: "",
        setter_grade: "",
        consensus_grade: "",
        consensus_rating: "",
        // // user_ticks: [userTickSchema],
        // createdBy: "",
        // { 
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // },
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createRoutes(newForm);
        setNewForm({
            name: "",
            route_type: "",
            gym_area: "",
            hold_color: "",
            image: "",
            setter_name: "",
            setter_grade: "",
            consensus_grade: "",
            consensus_rating: "",
            // user_ticks: [userTickSchema],
            // createdBy: "",
            // { 
            //     type: Schema.Types.ObjectId,
            //     ref: 'User'
            // },
        })
    }

    // loaded routes function
    const loaded = () => {
        return props.routes.map((route) => (
            <div key={route._id} className="route">
                <Link to={`/routes/${route._id}`}><h3>{route.name}</h3></Link>
                {/* <img src={route.image} alt={route.name} /> */}
                <h4>{route.consensus_grade}</h4>
            </div>
        ));
    };

    const loading = () => {
        return <span>Loading...</span>;
    };

    return (
        <section>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="route name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.route_type}
            name="route_type"
            placeholder="route type"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.gym_area}
            name="gym_area"
            placeholder="gym area"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.hold_color}
            name="hold_color"
            placeholder="hold color"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.setter_name}
            name="setter_name"
            placeholder="setter name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.setter_grade}
            name="setter_grade"
            placeholder="setter grade"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.consensus_grade}
            name="consensus_grade"
            placeholder="consensus grade"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.consensus_rating}
            name="consensus_rating"
            placeholder="consensus rating"
            onChange={handleChange}
          />
          {/* <input
            type="text"
            value={newForm.createdBy}
            name="createdBy"
            placeholder="route added by"
            onChange={handleChange}
          /> */}
          <input type="submit" value="Create Route" />
        </form>
        {props.routes ? loaded() : loading()}
        </section>
    );
}

export default RouteIndex;