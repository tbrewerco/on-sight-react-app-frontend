import { StyledLayout } from "./styles.js";
import Header from "./components/Header.js"
import Main from "./components/Main.js";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [gyms, setGyms] = useState(null);
  const URL = "http://localhost:4000/gyms"
  //////
  // get data
  //////
  const getGyms = async () => {
    try {
      const response = await fetch(URL);
      let data = await response.json();
      setGyms(data);
    } catch (error) {
      console.log(error)
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

  useEffect(() => getGyms(), []); // clean up effect once on mount/ unmount

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