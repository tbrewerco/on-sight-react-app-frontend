import GymSearch from "../components/GymSearch";

export default function Home({ gyms, createGyms }) {
  return (
    <div>
      <GymSearch gyms={gyms} createGyms={createGyms} />
    </div>
  )
}