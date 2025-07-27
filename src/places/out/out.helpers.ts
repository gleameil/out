import { makeCoordinateStringVH, makeCoordinateStringVW, randomInRange, randomIntegerInRange, removeByClassName } from "../../../shared/helpers";
import { cloudCircleClassName, cloudCircleClassNameColors, cloudCircleCountMaximum, cloudCircleCountMinimum, cloudCircleDiameterMaximum, cloudCircleDiameterMinimum, cloudCount, firstCoordinates, longestTimeOut, phraseCountMaximum, phraseCountMinimum, phraseLocationMaximum, phraseLocationMinimum, song, UTTERANCE_SERIES } from "./out.constants";

// Make clouds

interface Coordinates {
  fromLeft: number;
  fromTop: number;
  diameter: number;
}

export function situateCloud(lastCoordinates: Coordinates): Coordinates {
  const { fromLeft, fromTop, diameter } = lastCoordinates;
  const newDiameter = randomInRange(cloudCircleDiameterMinimum, cloudCircleDiameterMaximum);
  const newFromLeft = randomInRange(fromLeft - diameter, fromLeft + diameter);
  const newFromTop = randomInRange(fromTop - diameter, fromTop + diameter);
  return { fromLeft: newFromLeft, fromTop: newFromTop, diameter: newDiameter };    
}

export function makeCloudCircle(className: string, { fromLeft, fromTop, diameter }: Coordinates, counter: number, parent: HTMLDivElement) {
  const cloudCircle = document.createElement('div');
  cloudCircle.classList.add(cloudCircleClassName, className, `${counter}`);
  const diameterString = makeCoordinateStringVH(diameter)
  cloudCircle.style.width = diameterString;
  cloudCircle.style.height = diameterString;
  cloudCircle.style.left = makeCoordinateStringVH(fromLeft);
  cloudCircle.style.top = makeCoordinateStringVH(fromTop);
  parent.append(cloudCircle);
}

export function makeCloud(className: string, circleCount: number, oldCoordinates: Coordinates, counter: number, parent: HTMLDivElement) {
  if (circleCount === 0) {
    return;
  } else {
    const newCoordinates = situateCloud(oldCoordinates);
    makeCloudCircle(className, newCoordinates, counter, parent);
    makeCloud(className, circleCount - 1, newCoordinates, counter, parent)
  }
}

export function makeClouds(counter: number, parent: HTMLDivElement) {
  cloudCircleClassNameColors.forEach(color => {
    for (let i = 0; i < cloudCount; i++) {
      const circleCount = randomIntegerInRange(cloudCircleCountMinimum, cloudCircleCountMaximum)
      makeCloud(color, circleCount, firstCoordinates, counter, parent);
    }
  }); 
}

// Scatter words
export function chooseWord(wordArr: string[]): string {
  return wordArr[randomIntegerInRange(0, wordArr.length)];
}

export function situateWord(): number {
  return randomInRange(phraseLocationMinimum, phraseLocationMaximum)
}

export function wordChosen(element: HTMLParagraphElement) {
  const word = element.innerText;
  let chosenWords = localStorage.getItem('chosenWords');
  if (!chosenWords?.includes(word)) {
      chosenWords = !!chosenWords ? `${chosenWords}, ${word}` : word;
  }
  localStorage.setItem('chosenWords', chosenWords);
  element.classList.add('dissolving');
  setTimeout(() => element.remove(), 500);
}

export function addWord(wordToAdd: string, counter: number, parent: HTMLDivElement) {
  const word = document.createElement('p');
  word.innerText = wordToAdd;
  word.classList.add('out-word', `${counter}`);
  word.style.left = makeCoordinateStringVW(situateWord());
  word.style.top = makeCoordinateStringVH(situateWord());
  word.addEventListener('click', event => wordChosen(event.target as HTMLParagraphElement))
  parent.append(word);
}

export function addWords(counter: number, parent: HTMLDivElement) {
  const chosenWords = localStorage.getItem('chosenWords');
  let words: string[] = [];
  if (chosenWords) {
      words = chosenWords.split(', ');
  }
  if (words.length < 15) {
      words = words.concat(song);
  }
  const wordCount = randomIntegerInRange(phraseCountMinimum, phraseCountMaximum);
  for (let i = 0; i < wordCount; i++) {
      addWord(chooseWord(words), counter, parent);
  }
}

export function removeOldElements(oldCounter: number) {
  removeByClassName(`${oldCounter}`);
}


export function move(counter: number, parent: HTMLDivElement, isVerna: boolean = false) {
  localStorage.setItem('counter', `${counter}`);
  const oldCounter = counter + 1;
  setTimeout(() => removeOldElements(oldCounter), 2000);
  if (isVerna && counter === 0) {
    return;
  }
  makeClouds(counter, parent);
  if (!isVerna) {
    addWords(counter, parent);
  };
  setTimeout(() => move(counter - 1, parent, isVerna), 10000);
}

export function setNewPossibleUtterance(utteranceSet: number, i: number, currentPossibleUtterances: string[]) {
  let series = UTTERANCE_SERIES[utteranceSet][i];
  if (series.length > 0) {
      const newUtterance = series.shift() ?? '';
      (document.getElementById(`utterance${i}`) as HTMLOptionElement)!.innerText = newUtterance;
      currentPossibleUtterances[i] = newUtterance;
  }
}

export function speak(event: KeyboardEvent) {
  if (event.key === 'Enter') {
      const whatWasSaid = (event.target as HTMLInputElement).value;
      let oldWords = localStorage.getItem('chosenWords') ?? '';
      if (!oldWords.includes(whatWasSaid)) {
          localStorage.setItem('chosenWords', `${oldWords}, ${whatWasSaid}`);
      }
      (event.target as HTMLInputElement).value = '';
  }
}

export function checkIfUtteranceSelected(event: InputEvent, currentPossibleUtterances: string[]) {
  const whatIsBeingSaid = (event.target as HTMLInputElement).value;
  for (let i = 0; i < UTTERANCE_SERIES[0].length; i++) { // will be based on what user has seen eventually once there are more utterance series
      if (currentPossibleUtterances[i] === whatIsBeingSaid) {
          setNewPossibleUtterance(0, i, currentPossibleUtterances); 
          let oldWords = localStorage.getItem('chosenWords') ?? '';
          if (!oldWords.includes(whatIsBeingSaid)) {
              localStorage.setItem('chosenWords', `${oldWords}, ${whatIsBeingSaid}`);
          }
          setTimeout(() => (event.target as HTMLInputElement).value = '', 500)
          break;              
      }
  }
}

export function setUpSpeech(utteranceSet: number, currentPossibleUtterances: string[]) {
  const speech = document.getElementById('speak');
  speech?.addEventListener('keyup', event => speak(event));
  speech?.addEventListener('change', event => checkIfUtteranceSelected((event as InputEvent), currentPossibleUtterances));
  for (let i = 0; i < UTTERANCE_SERIES[utteranceSet].length; i++) {
      setNewPossibleUtterance(utteranceSet, i, currentPossibleUtterances);
  }
}