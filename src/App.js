
import axios from "axios";
import { useState } from "react";
import Weather from "./component/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_key = "bee97a68e3ac0f3b457fb663e6765f48";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_key}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url)
      .then((response) => {
        console.log(response.data); 
        setData(response.data);
       
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
    
      setLocation("");
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
          placeholder="Enter Location"
        />
      </div>



      <Weather weatherData = {data} />
    </div>
  );
}

export default App;











// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Weather from "./component/Weather";
// import Home from "./component/Home";

// function App() {
//   return (
//     <Router>
//       <div className="w-full h-full relative">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/weather/:cityName" element={<Weather />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
