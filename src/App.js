// dependencies
import { StyledLayout } from "./styles.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [gyms, setGyms] = useState(null);
  let URL = "http://localhost:4000/gyms"

  // clean up effect once on mount / unmount
  useEffect(() => getGyms(), []);

  // create req.query url
  const getGymUrl = (base, position, zipCode, searchParams) => {
    base = base + '?'
    if (position) {
      base = base + `lat=${position.coords.latitude}&long=${position.coords.longitude}`
    };
    if (zipCode) {
      base = base + `zipCode=${zipCode}`
    };
    if (searchParams) {
      base = base + `search=${searchParams}`
    };
    return base;
  };

  // get data
  const getGyms = async (position, zipCode, searchParams) => {
    try {
      const gymUrl = getGymUrl(URL, position, zipCode, searchParams)
      const response = await fetch(gymUrl);
      let data = await response.json();
      setGyms(data);
    } catch (error) {
      console.log(error)
    };
  };

  // get user location using html geolocation/zip code
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getGyms)
    } else {
      alert("Geolocation not supported by this browser");
    };
  };

  // create routes
  const createGyms = async (route) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(route),
    });
    getGyms();
  };

  return (
    <StyledLayout>
      <Header />
      <Main
        gyms={gyms}
        createGyms={createGyms}
        getLocation={getLocation}
        getGyms={getGyms}
      />
      <Footer />
    </StyledLayout>
  );
};