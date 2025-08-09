import { scheduleForNow, } from "../../shared/time/time";
import { out } from "../out/out";
import { wordstorm } from "./wordstorm/wordstorm";
import { snowsight } from "./snowsight/snowsight";
import { mountain } from "./mountain/mountain";
import { night } from "./night/night";
import './january.css';

function enterWeather() {
  const schedule = scheduleForNow();
  switch(schedule.weather) { // each of these needs to return a div with classNames including itself and 'window'
    case 'night':
      return night(enterWeather);
    case 'clear':
      return mountain(enterWeather);
    case 'cloudy':
      return out();
    case 'poemstorm':
      return wordstorm(enterWeather);
    case 'snowsight':
      return snowsight(enterWeather);
    case 'whiteout':
      return wordstorm(enterWeather);
  } 
}

export function setUpWindow() {
  enterWeather();
}