import { AudioURLSrc } from "./constants";
import { createButtonWithText } from "./helpers";
import { stopSound } from "./instrument/instrument";

interface WindowWithAudio {
  canPlayAudio?: boolean;
}

interface AudioEndedCallback {
  callback: () => void;
  alternateTimeout: number; // milliseconds
}

export const SOUND_CONTROL_ID = 'sound-control';

function togglePlayingSound() {
  let windowWithAudio = (window as unknown) as WindowWithAudio;
  if (windowWithAudio.canPlayAudio) {
    windowWithAudio.canPlayAudio = false;
    const audioElements = document.getElementsByTagName('audio');
    Array.from(audioElements).forEach(elem => {
      if (elem.id !== 'music-player') {
        elem.muted = true
      }
    });
    document.getElementById('sound-control')!.innerText = '🔇'
    stopSound();
  } else {
    windowWithAudio.canPlayAudio = true;
    const audioElements = document.getElementsByTagName('audio');
    Array.from(audioElements).forEach(elem => {
      elem.muted = false
      if (elem.classList.contains('music') && elem.paused) {
        elem.play();
      }
    });
    document.getElementById('sound-control')!.innerText = '🔈'
  }
}

export function canPlayFromQueryParam(query: URLSearchParams): boolean {
  const canPlayFromQuery = query.get('canPlay');
  return canPlayFromQuery === 'true';
} 

function canPlayFromQueryParamRemovingQuery(): boolean {
  const query = new URLSearchParams(window.location.search);
  const canPlay = canPlayFromQueryParam(new URLSearchParams(query));
  window.location.replace(window.location.href.replace(window.location.search, query.toString()));
  return canPlay;
}


export function createSoundControl(): HTMLButtonElement {
  let windowWithAudio = (window as unknown) as WindowWithAudio;
  windowWithAudio.canPlayAudio = canPlayFromQueryParamRemovingQuery();
  const soundControl = createButtonWithText(windowWithAudio.canPlayAudio ? '🔈' : '🔇', [], 'sound-control');
  soundControl.addEventListener('click', togglePlayingSound);
  return soundControl;
}

export function changeAudioSource(audio: HTMLAudioElement, newSource: URL) {
  const audioWithURLSRC = (audio as unknown) as AudioURLSrc;
  audioWithURLSRC.src = newSource;
}

export function canPlayAudio(): boolean {
  let windowWithAudio = (window as unknown) as WindowWithAudio;
  return !!windowWithAudio.canPlayAudio;
}

export function playIfAllowed(audio: HTMLAudioElement | undefined, callbackStuff?: AudioEndedCallback) {
  if (!audio && callbackStuff) {
      setTimeout(callbackStuff.callback, callbackStuff.alternateTimeout);
      return;
  }
  if (!!audio && canPlayAudio()) {
    audio.muted = false;
    audio.play();
    if (callbackStuff) {
      audio.addEventListener('ended', callbackStuff.callback)
    }
  }
} 