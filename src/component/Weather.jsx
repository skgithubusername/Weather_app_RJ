import React from "react";

const Weather = ({ weatherData }) => {
 
  if (!Object.keys(weatherData).length) {
    return <div className=" font-semibold text-center mt-20">No weather data available</div>;
  }

  return (
    <div>
      {weatherData.weather ? (
        <div className=" mt-20 w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%]">
          <div className=" flex  justify-between w-full">
            <div className=" w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className=" text-xl">
                    {weatherData.name},{weatherData.sys.country}
                  </p>
                  <p className=" text-sm">
                    {weatherData.weather[0].description}
                  </p>
                </div>

                <div>
                  <h1 className=" text-6xl font-semibold ">
                    {weatherData.main.temp.toFixed()}°C
                  </h1>
                </div>
              </div>
            </div>
            <div className=" w-1/2 flex flex-col justify-between items-end">
              <div className=" relative">
                <img
                  className=" relative"
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>

              {weatherData.name !== undefined ? (
                <div className=" flex   justify-evenly  flex-col gap-y-2 my-4 mx-auto text-xs">
                  <div className=" flex justify-between gap-x-8">
                    <p>Feels Like</p>
                    <p className=" font-bold w-20">
                      {weatherData.main.feels_like.toFixed()}°C
                    </p>
                  </div>
                  <div className=" flex justify-between gap-x-8">
                    <p>Humidity</p>
                    <p className=" font-bold w-20">
                      {weatherData.main.humidity}%
                    </p>
                  </div>

                  <div className=" flex justify-between gap-x-8">
                    <p>Wind Speed</p>
                    <p className=" font-bold w-20">
                      {weatherData.wind.speed.toFixed()} KPH
                    </p>
                  </div>

                  <div className=" flex justify-between gap-x-8">
                    <p>Pressure</p>
                    <p className=" font-bold w-20">
                      {weatherData.wind.pressure} hpa
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;















