import { StyledLayout } from "./styles.js";
import Header from "./components/Header.js"
import Main from "./components/Main.js";
import Footer from "./components/Footer";

function App() {
  return (
    <StyledLayout>
      <Header />
      <Main />
      <Footer />
    </StyledLayout>
  );
}

export default App;