import React, { Component } from 'react';


const App = (props) => {
  console.log(props);
  console.log("Faire quelque chose");

  return (
    <div className="App">
      <h1>Mon titre</h1>
      <h2>ma props title:{props.title}
    </div>
  );
}

export default App;
