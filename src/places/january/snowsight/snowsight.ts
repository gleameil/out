import { getTime, goToNextTimeOfDay } from "../../../shared/time/time";
import { createHomewardButton, goHome } from "../../../shared/helpers";
import { IN } from "../../../shared/constants";
import { setUpSnowsight } from "./snowsight.helpers";
import './snowsight.css';

// for testing: http://localhost:8080?time=1704325620000

function leaveSnowsight() {
  document.getElementById('snowsight-container')?.remove();
}

export function snowsight(enterWeather: () => void) {  
const homeward = createHomewardButton('Stop looking out the window', ['window'], e => goHome(e));

  function next() {
    leaveSnowsight();
    goToNextTimeOfDay();
    enterWeather();
  }

  const container = document.createElement('div');
  container.classList.add('window')
  container.id = 'snowsight-container';
  container.append(homeward);
  document.getElementsByTagName('html')[0].append(container);
  setUpSnowsight(getTime().getDate(), next);
}