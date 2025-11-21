import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Cloud, Droplets, Wind } from "lucide-react";
import { useEffect, useState } from "react";

const WEATHER_API_KEY = "084debbf415b423e97045904251009";

interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  wind_speed: number;
}

export const WeatherCard = () => {
  const { t } = useLanguage();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Get user's location and fetch weather
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
            );
            
            if (!response.ok) throw new Error("Weather API error");
            
            const data = await response.json();
            setWeather({
              temp: Math.round(data.main.temp),
              condition: data.weather[0].main,
              humidity: data.main.humidity,
              wind_speed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
            });
          } catch (err) {
            console.error("Weather fetch error:", err);
            setError(true);
          } finally {
            setLoading(false);
          }
        },
        () => {
          // Use mock data if location denied
          setWeather({
            temp: 28,
            condition: "Mist",
            humidity: 65,
            wind_speed: 12,
          });
          setLoading(false);
        }
      );
    } else {
      // Mock data for browsers without geolocation
      setWeather({
        temp: 28,
        condition: "Mist",
        humidity: 65,
        wind_speed: 12,
      });
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <Card className="p-6 bg-weather-bg border-none shadow-lg rounded-2xl">
        <div className="animate-pulse">
          <div className="h-4 bg-muted rounded w-32 mb-4"></div>
          <div className="h-16 bg-muted rounded w-24 mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-muted rounded w-24"></div>
            <div className="h-3 bg-muted rounded w-24"></div>
          </div>
        </div>
      </Card>
    );
  }

  if (error || !weather) {
    return (
      <Card className="p-6 bg-weather-bg border-none shadow-lg rounded-2xl">
        <p className="text-muted-foreground text-center">{t("weather_unavailable")}</p>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-weather-bg border-none shadow-lg rounded-2xl">
      <h3 className="text-sm font-medium text-muted-foreground mb-4">
        {t("todays_weather")}
      </h3>
      
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="text-5xl font-bold text-weather-temp mb-2">
            {weather.temp}°C
          </div>
          <div className="text-muted-foreground flex items-center gap-2">
            <Cloud className="h-4 w-4" />
            {t(weather.condition.toLowerCase() as any) || weather.condition}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2 text-sm">
          <Droplets className="h-4 w-4 text-primary" />
          <div>
            <div className="text-muted-foreground">{t("humidity")}</div>
            <div className="font-semibold">{weather.humidity}%</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Wind className="h-4 w-4 text-primary" />
          <div>
            <div className="text-muted-foreground">{t("wind")}</div>
            <div className="font-semibold">{weather.wind_speed} km/h</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
