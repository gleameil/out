import { createHomewardButton, removeByClassName } from "../../shared/helpers";
import { getTime, scheduleForNow, startTime, stopTime } from "../../shared/time/time";
import { out } from "./out/out";
import { wordstorm } from "./wordstorm/wordstorm";
import { snowsight } from "./snowsight/snowsight";
import { mountain } from "./mountain/mountain";
import { night } from "./night/night";
import './window.css';

export function leaveWindow() {
  startTime();
  removeByClassName('window');
}

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

export function setUpWindow(comeHome: () => void) {
  stopTime();
  const all = document.getElementsByTagName('html')[0];
  const homeward = createHomewardButton('Stop looking out the window', ['window'], () => {
    leaveWindow();
    comeHome();
  });
  all.append(homeward);
  enterWeather();
}