import React from "react";
import { Route } from "react-router-dom";

//Import Pages
import Home from "./pages/Home";

//Import Components
import Nav from "./components/Nav";

//Import Styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
