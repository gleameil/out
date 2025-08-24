import { goToNextTimeOfDay, timeOfDayFromDate } from "../../../shared/time/time";
import { END, FullPoem } from "../january.constants";
import { MazeTime, TextTime, UpAndDownTime, WalkTime } from "./mountain.constants";
import './mountain.css';
import { maze, mountainScheduleForNow, text, upAndDown, walk } from "./mountain.helpers";
import { createHomewardButton, goHome } from "../../../shared/helpers";

function leaveMountain() {
  document.getElementById('mountain-container')?.remove();
}

function next(enterWeather: () => void) {
  leaveMountain()
  goToNextTimeOfDay();
  enterWeather();
}

function getNow(): FullPoem {
  const schedule = mountainScheduleForNow();
  switch (schedule.typeName) {
    case "text":
      return text(schedule as TextTime);
    case "maze":
      return maze(schedule as MazeTime);
    case "walk":
      return walk(schedule as WalkTime);
    case "upAndDown":
      return upAndDown(schedule as UpAndDownTime);
  }
}

export function mountain(enterWeather: () => void) {
  const homeward = createHomewardButton('Stop looking out the window', ['window'], e => goHome(e));

  let clicks = 0;
  const now = getNow();
  const time = timeOfDayFromDate();
  function proceed() {
    clicks++;
    const result = now(clicks, time); // the purpose of this function is side effects but if it's ending it needs to let us know
    if (result === END) {
      next(enterWeather);
    } 
  }

  const container = document.createElement('div');
  container.classList.add('window')
  container.id = 'mountain-container';
  container.addEventListener('click', proceed);
  container.append(homeward);
  document.getElementsByTagName('html')[0].append(container);
  proceed();
}