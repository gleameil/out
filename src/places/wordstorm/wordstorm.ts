import { goToNextTimeOfDay, timeOfDayFromDate } from "../../../shared/time/time";
import { acrostic, optionPoem, standardPoem, whiteoutMiddayOrDispensation, wordstormScheduleForNow } from "./wordstorm.helpers";
import { END, FullPoem } from "../window.constants";
import './wordstorm.css';

function leaveWordstorm() {
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
  let clicks = 0;
  const poem = getPoem();
  const time = timeOfDayFromDate();
  function proceed() {
    clicks++;
    const result = poem(clicks, time); // the purpose of this function is side effects but if it's ending it needs to let us know
    if (result === END) {
      next(enterWeather);
    } 
  }
  document.getElementById('homeward')!.addEventListener('click', event => {
    event.stopPropagation();
    leaveWordstorm();
  }, { once: true });
  const container = document.createElement('div');
  container.classList.add('window', 'normal-poem')
  container.id = 'wordstorm-container';
  container.addEventListener('click', proceed);
  document.getElementsByTagName('html')[0].append(container);
  proceed();
}
