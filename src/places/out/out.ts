import { JANUARY_COLORS } from "../../shared/color";
import { createAudio, createDivWithElements, removeByClassName, setBackground } from "../../shared/helpers";
import { longestTimeOut } from "./out.constants";
import { move, setUpSpeech } from "./out.helpers";
import './out.css';
import { getTime, goToNextKindOfWeather } from "../../shared/time/time";
import { playIfAllowed } from "../../shared/sound";
import { expectLetters } from "../../shared/helpers";
import { setUpWindow } from "../january/january";

const GETMEOUTTAHERE = 'desolation';

export function escapeOut() {
  const counter = parseInt(sessionStorage.getItem('counter') ?? `${longestTimeOut}`, 10) || longestTimeOut ;
  const howLong = longestTimeOut - counter;
  const timeOut = parseInt(localStorage.getItem('timeOut') ?? '0', 10);
  localStorage.setItem('timeOut', `${timeOut + howLong}`);
  const howManyTimesHaveYouGoneOut = parseInt(localStorage.getItem('wanderCount') ?? '0', 10);
  localStorage.setItem('wanderCount', `${howManyTimesHaveYouGoneOut + 1}`);
  setTimeout(() => {
    removeByClassName('out');
    goToNextKindOfWeather();
    setUpWindow();
  }, 10);
}

export function out() {
  document.addEventListener('keydown', e => expectLetters(e, 0, GETMEOUTTAHERE, () => {
    if (getTime().getMonth() === 0) {
      escapeOut();
    }
}), { once: true });
  const all = document.getElementsByTagName('html')[0];
  setBackground(JANUARY_COLORS.gray);
  console.log('The gray is infinite, and not much happens here, at least not in January... Some say it\'s the most fundamental reality. If you can find your way back In, the weather will clear up before you know it, but it\'s a challenge. If you stay out, it\'s just kinda like this forever :(');
  const audio = createAudio(new URL('../../assets/audio/desolation.mp3', import.meta.url), ['music'], 'window-out-audio');
  audio.currentTime = 160.0;
  audio.loop = true;

  const datalist = document.createElement('datalist');
  datalist.id='utterances';
  for (let i = 0; i < 4; i++) {
    const option = document.createElement('option');
    option.id = `utterance${i}`;
    datalist.append(option);
  }
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'speak';
  input.setAttribute('list', 'utterances');
  const container = createDivWithElements([audio, input, datalist], ['out', 'window'], 'out-container');
  all.append(container);
  setUpSpeech(0, ['', '', '', '']);
  localStorage.setItem('counter', `${longestTimeOut}`);
  playIfAllowed(audio);
  move(longestTimeOut, container);
}