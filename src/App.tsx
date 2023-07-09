import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";

const App = () => (
  <>
    <Container marginBottom={4}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  </>
);

export default App;
