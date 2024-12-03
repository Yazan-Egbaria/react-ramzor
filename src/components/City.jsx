import { useContext } from "react";
import { CityContext } from "../pages/Weather";

const City = () => {
  const data = useContext(CityContext);

  if (!data || !data.main || !data.weather) {
    return <p>No weather data available.</p>;
  }

  const { name: city, main, weather } = data;
  const { temp, humidity } = main;
  const condition = weather[0].description;

  return (
    <div className="flex flex-col text-black">
      <h2 className="text-3xl">{city}</h2>
      <p>Temperature: {temp}°C</p>
      <p>Condition: {condition}</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

export default City;
