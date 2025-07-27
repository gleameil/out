import { createAudio, setBackground } from "../../../shared/helpers";
import { logs } from './night.constants';
import { makeClouds, makeStars, twinkleStars } from "./night.helpers";
import './night.css';
import { goToNextKindOfWeather, goToNextTimeOfDay, timeOfDayFromDate } from "../../../shared/time/time";
import { playIfAllowed } from "../../../shared/sound";

function leaveNight() {
  document.getElementById('night-container')?.remove();
}

function next(enterWeather: () => void) {
  leaveNight();
  goToNextTimeOfDay();
  enterWeather();
}

export function night(enterWeather: () => void) {
  const time = timeOfDayFromDate();
  let clicks = 0;
  function proceed(event?: MouseEvent) {
    if (logs[clicks] && time.name === 'night') {
      console.log(logs[clicks]);
    }
    clicks++;
    if (clicks === 1) {
      setBackground(time.backgroundColor, time.background);
      makeStars();
    }
    if (clicks <= 30) {
      twinkleStars();
      makeClouds(clicks, event);
      
    } else {
      next(enterWeather);
      return;
    }
  }
  document.getElementById('homeward')!.addEventListener('click', event => {
    event.stopPropagation();
    leaveNight();
    goToNextKindOfWeather();
  }, { once: true });
  const container = document.createElement('div');
  container.classList.add('window')
  container.id = 'night-container';
  container.append(createAudio(new URL('../../../assets/audio/Theme1.ogg', import.meta.url), [], 'night-audio'));
  container.addEventListener('click', proceed);
  document.getElementsByTagName('html')[0].append(container);
  proceed();
  playIfAllowed(document.getElementById('night-audio') as HTMLAudioElement);
}