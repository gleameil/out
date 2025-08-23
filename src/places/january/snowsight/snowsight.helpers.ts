import { ImageURLSrc } from "../../../shared/constants";
import { JANUARY_COLORS } from "../../../shared/color";
import { removeByClassName } from "../../../shared/helpers";
import { Time } from "../../../shared/time/time.januaryConstants";
import { getTime } from "../../../shared/time/time";
import { backgroundForTime } from "../january.helpers";
import { Dialogue, Option, Options, SNOWSIGHT_DIALOGUES, SNOWSIGHT_SPEAKERS, Speaker, Statement } from "./snowsight.constants";

function turnRedBlack(image: HTMLImageElement) {
  image.style.filter = 'brightness(0%)';
}

function turnRedWhite(image: HTMLImageElement) {
  image.style.filter = 'brightness(1000%)';
}

function turnRedMutedRed(image: HTMLImageElement) {
  image.style.filter = 'hue-rotate(-10deg) saturate(65%) brightness(103%)';
}

function turnRedLightYellow(image: HTMLImageElement) {
  image.style.filter = 'brightness(690%) hue-rotate(2deg)';
}

export function getVisionForNow(): Dialogue {
  const today = getTime().getDate();
  if (!SNOWSIGHT_DIALOGUES[today]) {
    throw new Error('No snowsight today!');
  }
  return SNOWSIGHT_DIALOGUES[today];
}

function offerOptions(options: Option[]) {
  removeByClassName(`dialogue`);
  const container = document.getElementById('snowsight-container')! as HTMLDivElement;
  const optionBox = document.createElement('div');
  optionBox.classList.add('window', 'snowsight', 'snowsight-option-box');
  const optionButtons = options.map((option: Option) => {
    const optionButton = document.createElement('button');
    optionButton.classList.add('window', 'snowsight', 'snowsight-option-button');
    optionButton.innerText = option.words;
    optionBox.append(optionButton);
    return optionButton;
  })
  container.append(optionBox);
  return optionButtons;
}
function showWords(words: string, speaker: Speaker, imageIndex: number) {
  removeByClassName('snowsight-dialogue');
  removeByClassName('snowsight-speaker-name');
  const realSpeaker = speaker ?? SNOWSIGHT_SPEAKERS.you;

  const speakerName = document.createElement('span');
  speakerName.classList.add('window', 'snowsight', 'snowsight-speaker-name');
  speakerName.innerText = realSpeaker.name;
  speakerName.style.backgroundColor = JANUARY_COLORS.white; // really? I can't just do this with CSS?
  
  const textElement = document.createElement('span');
  textElement.classList.add('window', 'snowsight', 'snowsight-dialogue', `snowsight-${realSpeaker.code}-dialogue`);
  
  textElement.style.color = realSpeaker.fontColor;
  textElement.style.fontFamily = realSpeaker.font;
  textElement.innerText = words;

  const box = document.getElementById('snowsight-bottom-dialogue-box')!;
  box.style.backgroundColor = realSpeaker.backgroundColor ?? JANUARY_COLORS.white;
  box.append(speakerName, textElement);

  const jennies = document.getElementsByClassName('snowsight-jennie');
  for (const jennie of jennies) {
    (jennie as HTMLImageElement).style.display = jennie.id === `snowsight-${realSpeaker.code}-${imageIndex}` ? 'block' : 'none'; 
  }
}
function determineImageIndex(dialogue: (Statement | Options)[], index: number) {
  const statementEntry = dialogue[index] as Statement;
  const speaker = statementEntry.speaker ?? SNOWSIGHT_SPEAKERS.you;
  const numberOfImages = speaker.images.length;
  let placeInSpeakerMonologue = 0;
  let indexToCheck = index - 1;
  while ((dialogue[indexToCheck] as Statement)?.speaker?.code === speaker.code) {
    indexToCheck--;
    placeInSpeakerMonologue++;
  }
  return placeInSpeakerMonologue % numberOfImages;
}
function snowsee(dialogue: (Statement | Options)[], index: number, nextTime: () => void, onEnd?: () => void) {
  const entry = dialogue[index];
  const nextWords = () => snowsee(dialogue, index + 1, nextTime, onEnd)
  if (!entry && !onEnd) {
    nextTime();
  } else if (!entry) {
    onEnd?.();
  } else if ((entry as Options).options) { 
    const optionsEntry = entry as Options;
    const optionButtons = offerOptions(optionsEntry.options);
    for (let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].addEventListener('click', event => {
        event.stopPropagation();
        removeByClassName('snowsight-option-button');
        removeByClassName('snowsight-option-box');
        snowsee(optionsEntry.options[i].next, 0, nextTime, nextWords)
      });
      if (optionsEntry.log) {
        console.log(optionsEntry.log);
      }
    }
  } else {
    const statementEntry = entry as Statement;
    showWords(statementEntry.words, statementEntry.speaker || SNOWSIGHT_SPEAKERS.you, determineImageIndex(dialogue, index));
    document.getElementById('snowsight-container')?.addEventListener('click', nextWords, { once: true });
    if (statementEntry.log) {
      console.log(statementEntry.log);
    }
  }
}
function makeJenny(parent: HTMLDivElement) {
  const jenny = new Image();
  ((jenny as unknown) as ImageURLSrc).src = SNOWSIGHT_SPEAKERS.jenny.images[0].path;
  jenny.classList.add('window', 'snowsight', 'snowsight-person');
  jenny.id = 'snowsight-jenny';
  parent.append(jenny);
}
function makeYou(time: Time, parent: HTMLDivElement) {
  const you = new Image();
  ((you as unknown) as ImageURLSrc).src = SNOWSIGHT_SPEAKERS.you.images[0].path;
  you.classList.add('window', 'snowsight', 'snowsight-person');
  you.id = 'snowsight-you';
  if (window.navigator.userAgent.includes('WebKit') && !window.navigator.userAgent.includes('Chrome')) {
    you.style.filter = 'brightness(0)'
  } else {
    switch (time.foregroundColor) {
      case JANUARY_COLORS.black:
        turnRedBlack(you);
        break;
      case JANUARY_COLORS.red:
        turnRedMutedRed(you);
        break;
      case JANUARY_COLORS.white:
        turnRedWhite(you);
        break;
      case JANUARY_COLORS.yellow:
        turnRedLightYellow(you);
        break;
      default:
        turnRedWhite(you);
    }
  }
  parent.append(you);
}
function makeColorJennies(colorJennie: Speaker, parent: HTMLDivElement) {
  return colorJennie.images.map((imagePathAndAlt, index) => {
    const jennie = new Image();
    ((jennie as unknown) as ImageURLSrc).src = imagePathAndAlt.path;
    jennie.classList.add('window', 'snowsight', 'snowsight-person', 'snowsight-jennie');
    jennie.id = `snowsight-${colorJennie.code}-${index}`;
    parent.append(jennie);
    return jennie;  
  }) 
}
export function setUpSnowsight(today: number, nextTime: () => void) {
  const talkOfTheDay = SNOWSIGHT_DIALOGUES[today];
  backgroundForTime(talkOfTheDay.time);
  
  const parent = document.getElementById('snowsight-container')! as HTMLDivElement;
  
  const dialogueBox = document.createElement('div');
  dialogueBox.id = 'snowsight-bottom-dialogue-box';
  dialogueBox.classList.add('window', 'snowsight', 'snowsight-dialogue-box');
  parent.append(dialogueBox);

  makeJenny(parent);
  makeYou(talkOfTheDay.time, parent);
  
  makeColorJennies(SNOWSIGHT_SPEAKERS.violetJennie, parent);
  makeColorJennies(SNOWSIGHT_SPEAKERS.indigoJennie, parent);
  makeColorJennies(SNOWSIGHT_SPEAKERS.moonJennie, parent);
  makeColorJennies(SNOWSIGHT_SPEAKERS.goldJennie, parent);
  makeColorJennies(SNOWSIGHT_SPEAKERS.greenJennie, parent);
  makeColorJennies(SNOWSIGHT_SPEAKERS.redJennie, parent);

  snowsee(talkOfTheDay.dialogue, 0, nextTime);
}
