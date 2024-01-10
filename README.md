# Flight Tracking Telegram Bot

This Telegram bot allows users to track flight information using the AviationStack API. Users can input a flight number, and the bot will provide real-time details about the flight, including departure and arrival information.

## Getting Started

Follow these steps to set up and run the flight tracking bot on your machine.

### Prerequisites

- Node.js and npm installed on your machine.
- Telegram bot token obtained from the BotFather on Telegram.
- AviationStack API key. You can sign up and obtain it from [AviationStack](https://aviationstack.com/).

### Installation

1. Clone the repository:

   ```
   git clone https://github.com your-username/flight-tracking-bot.git
   ```
   ```
   cd flight-tracking-bot
   ```
2. Install the dependencies:

    ```
    npm install
    ```

3. Create a .env file in the project root and add your environment variables:
    ```
    BOT_TOKEN=your_telegram_bot_token
    ```
    ```
    AVIATION_API=your_aviationstack_api_key
    ```
4. Run the bot:
   ```
   npm run dev
   ```
Usage

- Start a chat with your Telegram bot.

- Use the **/trackflight**  command followed by the flight number to get real-time flight information.

 For example:

 ```
 /trackflight BA123
```

The bot will respond with detailed information about the flight, including departure and arrival times.

**Response Format**

The bot's response will be in the following format :

```Flight Information for Airline Name Flight Number:
🛫 Departure Airport: Departure Airport Name
🛬 Arrival Airport: Arrival Airport Name
📅 Departure Time: January 1st 2023, 12:00:00 pm
📅 Arrival Time: January 1st 2023, 03:00:00 pm
✈️ The flight has landed.
```


**Features**
- Real-time flight tracking using AviationStack API.
- Formatted output with departure and arrival information.
- Indication of whether the flight has landed.

**Contributing**

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to create a pull request or open an issue.




