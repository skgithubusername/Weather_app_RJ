import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const apiUrl = '/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20&refine=cou_name_en%3A%22India%22';
    
    axios.get(apiUrl)
      .then((response) => {
        setCityData(response.data.records);
      })
      .catch((error) => {
        console.error("Error fetching city data:", error);
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">City List in India</h1>
      <ul>
        {cityData.map(city => (
          <li key={city.recordid}>
            <Link to={`/weather/${city.fields.name}`}>{city.fields.name}</Link> - {city.fields.country} - {city.fields.timezone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
