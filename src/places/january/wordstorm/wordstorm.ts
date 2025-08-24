import { goToNextTimeOfDay, timeOfDayFromDate } from "../../../shared/time/time";
import { acrostic, bellAndScaleForTime, locationForClick, optionPoem, standardPoem, whiteoutMiddayOrDispensation, wordstormScheduleForNow } from "./wordstorm.helpers";
import { END, FullPoem } from "../january.constants";
import './wordstorm.css';
import { play, setUpSound, stopSound } from "../../../shared/instrument/instrument";
import { canPlayAudio } from '../../../shared/sound';
import { createHomewardButton, goHome } from "../../../shared/helpers";

function leaveWordstorm() {
  stopSound();
  document.getElementById('wordstorm-container')?.remove();
}

function next(enterWeather: () => void) {
  leaveWordstorm()
  goToNextTimeOfDay();
  enterWeather();
}

function getPoem(): FullPoem {
  const schedule = wordstormScheduleForNow();
  if (schedule.log) {
    console.log(schedule.log);
  }
  switch (schedule.typeName) {
    case 'wordstorm':
      return whiteoutMiddayOrDispensation(schedule.storm);
    case 'acrostic':
      return acrostic(schedule.storm);
    case 'poem':
      return standardPoem(schedule.storm);
    case 'poemWithOptions':
      return optionPoem(schedule.storm);
  }
}

export function wordstorm(enterWeather: () => void) {
  setUpSound();
  const homeward = createHomewardButton('Stop looking out the window', ['window'], e => goHome(e));  let clicks = 0;
  const poem = getPoem();
  const time = timeOfDayFromDate();
  const instrument = bellAndScaleForTime(time);
  function proceed(e?: MouseEvent) {
    clicks++;
    if (e && canPlayAudio()) {
      play(locationForClick(e), instrument);
    }
    const result = poem(clicks, time); // the purpose of this function is side effects but if it's ending it needs to let us know
    if (result === END) {
      next(enterWeather);
    } 
  }
  const container = document.createElement('div');
  container.classList.add('window', 'normal-poem')
  container.id = 'wordstorm-container';
  container.addEventListener('click', proceed);
  container.append(homeward);
  document.getElementsByTagName('html')[0].append(container);
  proceed();
}
