import GymSearch from "../components/GymSearch";
import { Carousel } from "react-bootstrap"
export default function Home({ gyms, createGyms, getLocation, getGyms }) {
  return (
    <div className="homePage">
      <div className="gymSearch">
        <GymSearch className="gymSearchComp"
          gyms={gyms}
          createGyms={createGyms}
          getLocation={getLocation}
          getGyms={getGyms}
        />
      </div>
      <div className="placeHolderImage">
        <img src="https://el-cap.com/app/uploads/sites/2/2021/04/Web-Large-2018_ET_Marketing_Gym-Views_Englewood_Brennah-Rosenthal-7-1024x683.jpg" alt="earth treks" height="400px"></img>
      </div>
    </div>
  )
}