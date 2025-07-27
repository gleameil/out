import { getTime, goToNextTimeOfDay } from "../../../shared/time/time";
import { setUpSnowsight } from "./snowsight.helpers";
import './snowsight.css';

function leaveSnowsight() {
  document.getElementById('snowsight-container')?.remove();
}

export function snowsight(enterWeather: () => void) {  
  function next() {
    leaveSnowsight();
    goToNextTimeOfDay();
    enterWeather();
  }
  
  document.getElementById('homeward')!.addEventListener('click', event => {
    event.stopPropagation();
    leaveSnowsight();
  }, { once: true });

  const container = document.createElement('div');
  container.classList.add('window')
  container.id = 'snowsight-container';
  document.getElementsByTagName('html')[0].append(container);
  setUpSnowsight(getTime().getDate(), next);
}