import { useEffect, useState } from "react";

const useCityWeather = (city) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5837b38e4dcaac091027efb7931d4f2c&units=metric`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(URL);
        const weatherData = await response.json();
        setData(weatherData);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, isLoading, error, setError };
};

export default useCityWeather;
