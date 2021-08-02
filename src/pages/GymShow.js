import RouteSearch from "../components/RouteSearch";
import { useEffect, useState } from "react";

export default function GymShow({ match, gyms, createGyms }) {
  const [gym, setGym] = useState(null);

  useEffect(() => {
    if (gyms) {
      const id = match.params.id;
      const foundGym = gyms.find(p => p._id === id);
      setGym(foundGym);
    }
  }, [gyms, match])

  const loading = () => {
    return <p>Loading...</p>
  }

  const loaded = () => {
    return (
      <div>
        <RouteSearch gym={gym} key={gym._id} createGyms={createGyms} />
      </div>
    )
  }
  return gym ? loaded() : loading();
}