import React from "react";
import "./app.scss";
import Header from "./components/header";
import Headline from "./components/headline";

const tempArr = [
  {
    fName: "Joe",
    lName: "Biden",
    email: "joe.biden@us.com",
    age: 24,
    onlineStatus: true
  }
];
function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="description" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
