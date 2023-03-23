import got from 'got';
import { logger } from './logger';

logger.info('Starting server...');

setInterval(getWeather, 1000);

async function getWeather() {
  if (Math.random() > 0.8) {
    logger.warn('Deciding for no good reason to abort 💣');
  }

  try {
    const res = (await got(
      'https://api.open-meteo.com/v1/forecast?latitude=55.6802&longitude=12.5892&current_weather=true'
    ).json()) as {
      current_weather: {
        temperature: number;
        windspeed: number;
      };
    };
    logger.info(
      `The current temperature is ${res.current_weather.temperature}°C and the windspeed is ${res.current_weather.windspeed}m/s`
    );
  } catch (e) {
    logger.error('Something went wrong when retrieving whether 💔 ');
  }
}
