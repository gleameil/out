import { createAudio, expectLetters, setBackground } from "../../../shared/helpers";
import { logs } from './night.constants';
import { makeClouds, makeStars, twinkleStars } from "./night.helpers";
import './night.css';
import { getTime, goToNextKindOfWeather, goToNextTimeOfDay, timeOfDayFromDate } from "../../../shared/time/time";
import { playIfAllowed } from "../../../shared/sound";
import { out } from "../../out/out";
import { setUpWindow } from "../january";

const MORNING = 'morning';

function leaveNight() {
  document.getElementById('night-container')?.remove();
}

function next(enterWeather: () => void) {
  leaveNight();
  goToNextTimeOfDay();
  enterWeather();
}

export function night(enterWeather: () => void) {
  document.addEventListener('keydown', e => expectLetters(e, 0, MORNING, () => {
      goToNextKindOfWeather();
      if (getTime().getMonth() === 0) {
              leaveNight()
              setUpWindow()
          } else {
              out();
          }
  }), { once: true })
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

  const container = document.createElement('div');
  container.classList.add('window')
  container.id = 'night-container';
  container.append(createAudio(new URL('../../../assets/audio/Theme1.ogg', import.meta.url), ['music'], 'night-audio'));
  container.addEventListener('click', proceed);
  document.getElementsByTagName('html')[0].append(container);
  proceed();
  playIfAllowed(document.getElementById('night-audio') as HTMLAudioElement);
}