"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Cloud, CloudRain, Search, Sun, Wind } from "lucide-react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

export default function WeatherWidget() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const YOUR_API_KEY = process.env.API;

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!location.trim()) {
      setError("Please enter a location");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${YOUR_API_KEY}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Location not found. Please try another location.");
        }
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (weatherMain: string) => {
    switch (weatherMain.toLowerCase()) {
      case "clear":
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case "clouds":
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case "rain":
      case "drizzle":
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      default:
        return <Cloud className="h-8 w-8" />;
    }
  };

  return (
    <div id="weather">
      <Card>
        <CardHeader>
          <CardTitle>Weather Forecast</CardTitle>
          <CardDescription>
            Enter a location to get the current weather
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={fetchWeather} className="flex space-x-2 mb-4">
            <Input
              placeholder="Enter city name..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <span className="animate-spin mr-2">⟳</span>
              ) : (
                <Search className="h-4 w-4 mr-2" />
              )}
              Search
            </Button>
          </form>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-12 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ) : weather ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{weather.name}</h3>
                {getWeatherIcon(weather.weather[0].main)}
              </div>
              <div className="text-3xl font-bold">
                {Math.round(weather.main.temp)}°C
              </div>
              <p className="capitalize text-muted-foreground">
                {weather.weather[0].description}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Feels like</p>
                  <p className="font-medium">
                    {Math.round(weather.main.feels_like)}°C
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Humidity</p>
                  <p className="font-medium">{weather.main.humidity}%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Wind</p>
                  <div className="flex items-center font-medium">
                    <Wind className="h-3 w-3 mr-1" />
                    {weather.wind.speed} m/s
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 text-muted-foreground">
              <Cloud className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Enter a location to see the weather forecast</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Data provided by OpenWeatherMap
        </CardFooter>
      </Card>
    </div>
  );
}
