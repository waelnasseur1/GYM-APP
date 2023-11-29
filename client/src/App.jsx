import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import Header from "./Header.jsx"
import Footer from "./footer.jsx"
import Info from "./start/info.jsx";
import AllData from "./start/AllData.jsx";

function App() {
  const [view,setView] = useState('info')
  const handleView = (view) => {
    setView(view)
  }
  return (
    <div>
    <Header />
    <div className="centered-container">
      <h1>Easy Fit Enigma</h1>
    </div>
    {view === "data" && <AllData  />}
    {view === "info" && <Info handleView={handleView} />}
  
    <Footer />
      </div>
  )   
}

  
export default App;




// import "./App.css";
// import React ,{useState} from "react";
// import Header from "./Header.jsx"
// import Footer from "./footer.jsx"
// import Info from "./start/info.jsx"
// import Login from '../src/access/login.jsx'
// import AllData from "./start/AllData.jsx";

// function App() {
//   const [view,setView]= useState('login') 

//   const handleView = (view) =>{
//     setView(view)
//   }
//   return (
//     <div>
//    <Header  /> 
//    {view === 'data' && <AllData />}
//    {view === 'login'  && <Login handleView={handleView} />}
//       <h1> nhebk wa7ch </h1>
//     {view === 'about' && <Info handleView = {handleView} />}
//     <Footer />
//       </div>
//   )   
// }
  
  
  
// export default App;
