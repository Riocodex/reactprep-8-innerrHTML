import React from "react"

import './App.css';

//install quil(npm i react-quill)
//go to index.js and remove strictmode (the two tags covering app.js) 
function App() {
 
  //wanted to use quill but shits been deprecated so ....
  //HTML
  let data = `<p style="font-size:25px; color:red">This is my Home</p>`;
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{__html:data}}></div>
      {/* jsx */}
      <p style={{fontSize:25, color:"red"}}>This is my Home</p>
     
    </div>
  );
}

export default App;
