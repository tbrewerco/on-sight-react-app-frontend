import GymSearch from "../components/GymSearch";

export default function Home({ gyms, createGyms, getLocation, getGyms }) {
  return (
    <div className="gymSearch">
      <GymSearch className="gymSearchComp"
        gyms={gyms}
        createGyms={createGyms}
        getLocation={getLocation}
        getGyms={getGyms}
      />
    </div>
  )
}