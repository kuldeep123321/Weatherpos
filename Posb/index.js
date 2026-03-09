import pkg from 'pg';
const { Client } = pkg;
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';

// .env file load karne ke liye
dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const syncWeatherData = async () => {
  console.log("🚀 Starting ES6 Weather Sync...");

  try {
    await client.connect();
    console.log("🔗 Connected to Neon Tech!");

    const LAT = "12.9716";
    const LON = "77.5946";
    const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true&hourly=relative_humidity_2m&timezone=Asia%2FKolkata`;

    console.log("📡 Fetching data for Bengaluru...");
    const response = await fetch(API_URL);
    
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    
    const data = await response.json();

    // Destructuring ES6 Style
    const { temperature, windspeed, weathercode } = data.current_weather;
    const { relative_humidity_2m } = data.hourly;

    const query = `
      INSERT INTO weather_history (temperature, windspeed, weather_code, humidity_data)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    
    const values = [
      temperature, 
      windspeed, 
      weathercode, 
      JSON.stringify(relative_humidity_2m)
    ];

    const { rows } = await client.query(query, values);
    
    console.log("✅ Data Saved Successfully!");
    console.table(rows[0]);

  } catch (err) {
    console.error("❌ Error Details:", err.message);
  } finally {
    await client.end();
    console.log("🔌 Connection Closed.");
  }
};

// Run the function
syncWeatherData();