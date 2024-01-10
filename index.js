const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const moment = require('moment');
require('dotenv').config();

// Replace 'YOUR_BOT_TOKEN' with the actual token you obtained from the BotFather
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Command to get flight tracking information
bot.onText(/\/trackflight (.+)/, async (msg, match) => {
  const flightNumber = match[1];

  if (!flightNumber) {
    bot.sendMessage(msg.chat.id, 'Please provide a flight number. For example: /trackflight BA123');
    return;
  }

  try {
    // Replace 'YOUR_AVIATIONSTACK_API_KEY' with your AviationStack API key
    const apiKey = process.env.AVIATION_API;
    const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${flightNumber}`;

    const response = await axios.get(apiUrl);

    const flight = response.data.data[0];

    if (!flight) {
      bot.sendMessage(msg.chat.id, 'Flight not found.');
      return;
    }

    const departureTime = moment(flight.departure.estimated).format('MMMM Do YYYY, h:mm:ss a');
    const arrivalTime = moment(flight.arrival.estimated).format('MMMM Do YYYY, h:mm:ss a');
    
    const isLanded = flight.flight_status === 'landed';

    const landingStatus = isLanded ? '✈️ The flight has landed.' : '🛫 The flight is still in the air.';
    
    const message = `
    Flight Information for ${flight.airline.name} ${flight.flight.iata}:
    🛫 *Departure Airport:* ${flight.departure.airport}
    🛬 *Arrival Airport:* ${flight.arrival.airport}
    📅 *Departure Time:* ${departureTime}
    📅 *Arrival Time:* ${arrivalTime}
    ${landingStatus}
    `;

    bot.sendMessage(msg.chat.id, message, { parse_mode: 'Markdown' });
  } catch (error) {
    console.error('Error fetching flight information:', error);
    bot.sendMessage(msg.chat.id, 'Error fetching flight information.');
  }
});
