import { WeatherInterface } from '../models/WeatherInterface'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = '/api/current'

export async function fetchWeather(city: string): Promise<WeatherInterface> {
  const url = `${BASE_URL}?access_key=${API_KEY}&query=${city}`
  const options = {
    method: 'GET',
  }

  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (data.error) {
      throw new Error(data.error.info || 'An error as occured!')
    }

    return {
      cityName: data.location.name,
      temperature: data.current.temperature,
      description: data.current.weather_descriptions[0],
      icon: data.current.weather_icons[0],
      feelslike: data.current.feelslike,
      humidity: data.current.humidity,
      pressure: data.current.pressure,
    }
  } catch (error) {
    console.error('Error retrieving weather data:', error)
    throw error
  }
}
