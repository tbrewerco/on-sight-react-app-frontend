import { StyledLayout } from "./styles.js";
import Header from "./components/Header.js"
import Main from "./components/Main.js";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [gyms, setGyms] = useState(null);
  let URL = "http://localhost:4000/gyms"

  // clean up effect once on mount / unmount
  useEffect(() => getGyms(), []);

  /////
  // create req.query url
  /////
  const getGymUrl = (base, position, zipCode) => {
    base = base + '?'
    if (position) {
      base = base + `lat=${position.coords.latitude}&long=${position.coords.longitude}`
    };
    if (position && zipCode) {
      base = base + `&zipCode=${zipCode}`
    };
    if (!position && zipCode) {
      base = base + `zipCode=${zipCode}`
    };
    console.log('base is:' + base);
    return base;
  }
  ////
  // get data
  ////
  const getGyms = async (position, zipCode) => {
    try {
      const gymUrl = getGymUrl(URL, position, zipCode)
      const response = await fetch(gymUrl);
      let data = await response.json();
      setGyms(data);
    } catch (error) {
      console.log(error)
    }
  }
  ////
  // get user location using html geolocation/zip code
  ////
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getGyms)
    } else {
      alert("Geolocation not supported by this browser");
    }
  }
  //////
  // create routes
  //////
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
}