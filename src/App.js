import React from "react";
import "./app.scss";
import Header from "./components/header";
import Headline from "./components/headline";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="description" />
      </section>
    </div>
  );
}

export default App;
