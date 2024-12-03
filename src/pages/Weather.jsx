import { createContext, useState } from "react";
import useCityWeather from "../custom/useCityWeather";
import City from "../components/City";

export const CityContext = createContext();

const Weather = () => {
  const [city, setCity] = useState("");
  const [showCity, setShowCity] = useState(false);
  const { data, isLoading, error } = useCityWeather(city);

  const handleCityWeather = () => {
    if (!city) {
      console.log("Please write a city name");
      return;
    }
    setShowCity(true);
  };

  return (
    <div className="min-h-custom flex flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-bold text-black">Weather Dashboard</h1>

      <div id="inputAndLabel" className="flex gap-4">
        <input
          className="rounded border-2 border-black px-4 py-2"
          type="text"
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button
          className="rounded border-2 border-black px-4 py-2"
          type="button"
          onClick={handleCityWeather}
        >
          Search
        </button>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {data && showCity && (
        <CityContext.Provider value={data}>
          <City />
        </CityContext.Provider>
      )}
    </div>
  );
};

export default Weather;
