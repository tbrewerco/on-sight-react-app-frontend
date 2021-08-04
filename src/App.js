import { StyledLayout } from "./styles.js";
import Header from "./components/Header.js"
import Main from "./components/Main.js";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [gyms, setGyms] = useState(null);
  let URL = "http://localhost:4000/gyms"
  //////
  // get data
  //////
  const getGyms = async (position) => {
    try {
      if (position) {
        URL = URL + `?lat=${position.coords.latitude}&long=${position.coords.longitude}`;
      }
      const response = await fetch(URL);
      let data = await response.json();
      setGyms(data);
    } catch (error) {
      console.log(error)
    }
  }


  const getLocation = () => {
    getGyms()
    const data = navigator.geolocation.getCurrentPosition(getGyms)
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

  useEffect(() => getLocation(), []); // clean up effect once on mount/ unmount

  return (
    <StyledLayout>
      <Header />
      <Main
        gyms={gyms} createGyms={createGyms}
      />
      <Footer />
    </StyledLayout>
  );
}