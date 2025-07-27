import { Font, FONTS } from "../../../shared/constants";
import { JANUARY_COLORS, JanuaryColor } from '../../../shared/color';
import { createAudio, makeLinearGradient, removeByClassName, setBackground, fadeBackground } from "../../../shared/helpers";
import { Time, TIMES } from "../../../shared/time/time.januaryConstants";
import { dayOfTheMonth, timeOfDayFromDate, previousTime } from "../../../shared/time/time";
import { word } from "../window.helpers";
import { Acrostic, ALL_BY_DISPENSATION, BrainstormTime, FragmentedPoem, PoemOptions, PoemWithOptions, THERE_IS_A, WHERE_IS, WORDSTORM_SCHEDULE } from "./wordstorm.constants";
import { END, FullPoem } from '../window.constants';
import { playIfAllowed } from "../../../shared/sound";

export interface SnowflakeParams {
  parent: HTMLDivElement;
  color?: JanuaryColor;
  font?: Font;
  size?: number;
  left?: number;
  top?: number;
}

function snowflake(snowflakeParams: SnowflakeParams) {
  const {
      parent,
      color,
      font,
      size,
      left,
      top
  } = snowflakeParams;
  const flake = document.createElement('span');
  flake.classList.add('snowflake', 'wordstorm');
  flake.innerText = '*'
  flake.style.color = color ?? JANUARY_COLORS.white;
  flake.style.fontFamily = font ?? FONTS.nanumBrushScript;
  flake.style.fontSize = `${size ?? Math.random() * 16}vmin`;
  flake.style.left = `${left ?? Math.random() * 130 - 15}vw`;
  flake.style.top = `${top ?? Math.random() * 140 - 25}vh`;
  parent.append(flake);
}
function fadeLastStorm(className = 'snowflake') {
  const snowflakes = document.querySelectorAll(`.${className}`);
  for (let i = 0; i < snowflakes.length; i++) {
    const flake = snowflakes[i] as HTMLSpanElement;
    const opacity = parseFloat(flake.style.opacity) || 1;
    flake.style.opacity = `${opacity - .1}`;
    if (parseFloat(flake.style.opacity) <= 0) {
      flake.remove();
    }
  }
}

export interface SnowstormParams {
  parent: HTMLDivElement;
  colors: JanuaryColor[];
  quantity: number;
}

function snowstorm(snowstormParams: SnowstormParams) {
  const {
      parent,
      colors,
      quantity,
  } = snowstormParams;
  fadeLastStorm();

  for (let i = 0; i < quantity; i ++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      snowflake({ parent, color });
  }
}

export interface WordstormParams {
  wordBank: string[];
  className: string;
  parent: HTMLDivElement;
  fonts: Font[];
  sizes?: number[];
  colors: JanuaryColor[];
  quantity: number;
}
export function storm(wordstormParams: WordstormParams) {
  const {
      wordBank,
      className,
      parent,
      fonts,
      sizes,
      colors,
      quantity,
  } = wordstormParams;
  fadeLastStorm(className);
  for (let i = 0; i < quantity; i++) {
      const phrase = wordBank[Math.floor(Math.random() * wordBank.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const font = fonts[Math.floor(Math.random() * fonts.length)];
      const size = sizes ? sizes[Math.floor(Math.random() * sizes.length)] : undefined;
      word({ phrase, classNames: [className], parent, color, font, size });
  }
}

function middaySun(parent: HTMLDivElement) {
    for (let i = 0; i < 720; i++) {
        const ray = document.createElement('div');
        ray.classList.add('ray');
        if (i % 14 === 0) {
            ray.classList.add('white-ray');
        } else if (i % 6 === 0) {
            ray.classList.add('gold-ray');
        } else {
            ray.classList.add('yellow-ray');
        }
        if (i % 3 === 0 && ray.classList.contains('yellow-ray')) {
            ray.id = `${i}`
            ray.classList.replace('yellow-ray', 'long-ray');
        }
        ray.style.opacity = '0';
        ray.style.transform = `rotate(-${i/2}deg)`;
        parent.append(ray);
    }
}

function fadeSun(byHowMuch: number) { // opacity
  const rays = document.getElementsByClassName('ray');
  const newOpacity = (parseFloat((rays[0] as HTMLDivElement).style.opacity)) - byHowMuch;
  // sunCenter.style.opacity = newOpacity;
  for (let i = 0; i < rays.length; i++) {
    (rays[i] as HTMLDivElement).style.opacity = `${newOpacity}`;
  }
}

function whereIs(parent: HTMLDivElement) {
  word({
      phrase: WHERE_IS,
      classNames: ['where-is'],
      parent,
      color: JANUARY_COLORS.gold,
      font: FONTS.imFell,
      size: 6,
      rotation: 0,
  });
}

function thereIsA(parent: HTMLDivElement, words: string[]) {
  const colors = [JANUARY_COLORS.black, JANUARY_COLORS.black, JANUARY_COLORS.black, JANUARY_COLORS.gold];
  const wordCount = document.getElementsByClassName('things-there-are').length;
  const nextItemIndex = Math.floor(Math.random() * words.length);
  const phrase = words[nextItemIndex];

  const fonts = [FONTS.imFell, FONTS.montserrat, FONTS.ebGaramond, FONTS.nanumBrushScript]

  if (wordCount < 4) {
    word({
      phrase,
      classNames: ['things-there-are'],
      parent,
      color: colors[Math.floor(Math.random() * colors.length)],
      font: fonts[Math.floor(Math.random() * fonts.length)],
      rotation: 0,
    });
  } else {
    removeByClassName('things-there-are');
    word({
      phrase,
      classNames: ['things-there-are'],
      parent,
      color: colors[Math.floor(Math.random() * colors.length)],
      font: fonts[Math.floor(Math.random() * fonts.length)], 
      rotation: 0,
    })
  }       
}

function dispensationTo(parent: HTMLDivElement, words: string[], clicks: number, iteration: number) {
  const wordCount = document.getElementsByClassName('dispensation-to').length;
  const nextItemIndex = iteration * 11 + clicks - 1;
  const phrase = words[nextItemIndex];

  const fonts = [FONTS.imFell, FONTS.montserrat, FONTS.ebGaramond, FONTS.nanumBrushScript]

  if (wordCount < 4) {
    fadeLastStorm('dispensation-to');
    word({
      phrase,
      classNames: ['dispensation-to'],
      parent,
      color: TIMES[2].foregroundColor,
      font: fonts[Math.floor(Math.random() * fonts.length)],
      size: 5.6,
      rotation: 0,
    });
  } else {
    removeByClassName('dispensation-to');
    word({
      phrase,
      classNames: ['dispensation-to'],
      parent,
      color: TIMES[2].foregroundColor,
      font: fonts[Math.floor(Math.random() * fonts.length)], 
      size: 3,
      rotation: 0,
    })
  }       
}

function whiteStorm() {
const snowflakes = document.getElementsByClassName('snowflake');
for (let i = 0; i < snowflakes.length; i++) {
    (snowflakes[i] as HTMLSpanElement).style.color = JANUARY_COLORS.white;
  }
}

export function whiteoutMiddayOrDispensation(words: string[]): FullPoem {
  function whiteout(clicks: number, time: Time): string | undefined {
    const parent = document.getElementById('wordstorm-container')! as HTMLDivElement;
    if (clicks === 1) {
      setBackground(time.backgroundColor, time.background);
      snowstorm({ parent, colors: time.whiteoutSnowflakeColors, quantity: 200 });
    } else if (clicks <= 5) {
      snowstorm({ parent, colors: time.whiteoutSnowflakeColors, quantity: 200 });
      fadeBackground(0.2);
    } else if (clicks === 6) {
      storm({
        wordBank: words,
        className: 'wordstorm',
        parent,
        fonts: [FONTS.ebGaramond, FONTS.imFell, FONTS.indieFlower, FONTS.montserrat, FONTS.nanumBrushScript, FONTS.reenieBeanie, FONTS.rockSalt],
        colors: time.whiteoutForegroundColors,
        quantity: 1,
      });
    } else if (clicks < 10) {
      storm({
        wordBank: words,
        className: 'wordstorm',
        parent,
        fonts: [FONTS.ebGaramond, FONTS.imFell, FONTS.indieFlower, FONTS.montserrat, FONTS.nanumBrushScript, FONTS.reenieBeanie, FONTS.rockSalt],
        colors: time.whiteoutForegroundColors,
        quantity: Math.floor(Math.random() * 3) + 1,
      }); 
    } else if (clicks <= 14) {
      fadeLastStorm('wordstorm');
      fadeBackground(-0.2);
    } else {
      return END;
    }
    return;
  }

  function midday(clicks: number, time: Time): string | undefined {
    const parent = document.getElementById('wordstorm-container')! as HTMLDivElement
    if (clicks === 1) {
      const audio = createAudio(new URL('../../../assets/audio/aeolian.mp3', import.meta.url), [], 'midday-audio');
      audio.loop = true;
      parent.append(audio);
      playIfAllowed(audio);
      setBackground(time.backgroundColor, time.background);
      middaySun(parent);    
    } else if (clicks <= 10) {
      whereIs(parent);
      fadeSun(-.1);
      fadeBackground(0.09);
      snowstorm({ parent, colors: [JANUARY_COLORS.white, JANUARY_COLORS.white, JANUARY_COLORS.yellow], quantity: clicks ** 2 });
    } else if (clicks === 11) {
      removeByClassName('where-is');
      word({
        phrase: THERE_IS_A,
        classNames: ['there-is-a'],
        parent,
        color: JANUARY_COLORS.black,
        font: FONTS.imFell,
        size: 5,
        rotation: 0,
      });
    } else if (clicks <= 11 + words.length / 6) {
      thereIsA(parent, words);
    } else if (clicks < 31) {
      snowstorm({ parent, colors: [JANUARY_COLORS.white, JANUARY_COLORS.white, JANUARY_COLORS.yellow], quantity: Math.max(200 - clicks ** 2, 0) });
      fadeBackground(-0.09);
    } else if (clicks === 31) {
      removeByClassName('there-is-a');
      removeByClassName('things-there-are');
      removeByClassName('snowflake');
    } else if (clicks < 36) {
      snowstorm({ parent, colors: [JANUARY_COLORS.white, JANUARY_COLORS.white, JANUARY_COLORS.yellow], quantity: clicks * 2 });
      fadeSun(0.25)
    } else {
      whiteStorm();
      (document.getElementById('midday-audio') as HTMLAudioElement).pause();
      return END;
    }
    return;
  }

  function dispensation(clicks: number, time: Time): string | undefined {
    const parent = document.getElementById('wordstorm-container')! as HTMLDivElement
    const iterations = parseInt(localStorage.getItem('dispensations') ?? '0', 10); 
    if (clicks === 1) {
      setBackground(time.backgroundColor, time.background);
    }
    if (clicks <= 12) {
      dispensationTo(parent, ALL_BY_DISPENSATION, clicks, iterations);
      snowstorm({ parent, colors: time.whiteoutSnowflakeColors, quantity: Math.floor(Math.random() * 3) + 3})
    }
    const newIterations = `${iterations + 1}`;
    localStorage.setItem('dispensations', newIterations);
    return END;
  }

  switch (words[0]) {
    case 'axis mundi':
      return midday;
    case 'beauty beyond desiring':
      return dispensation;
    default:
      return whiteout;
  }
}

export function standardPoem(words: FragmentedPoem): FullPoem {
  return (clicks: number, time: Time) => {
    if (clicks === 1) {
      setBackground(time.backgroundColor, time.background);
      const poemDiv = document.createElement('div');
      poemDiv.id = 'poem-container';
      document.getElementById('wordstorm-container')?.append(poemDiv);
    }
    const phrase = words[clicks - 1];
    if (!phrase) {
      return END;
    }
    const span = document.createElement('span');
    span.id = `poem-phrase${clicks - 1}`;
    span.classList.add('poem-phrase');
    span.innerText = `${phrase.words} `;
    const possibleColors = [time.foregroundColor, ...time.whiteoutSnowflakeColors]
    span.style.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
    const possibleFonts = [FONTS.ebGaramond, FONTS.imFell, FONTS.montserrat];
    span.style.fontFamily = possibleFonts[Math.floor(Math.random() * possibleFonts.length)];
    span.style.fontSize = `${Math.random()*2 + 2.5}vmin`;

    let currentStanza = document.getElementById(`poem-stanza${phrase.stanza ?? 0}`);
    if (!currentStanza) {
      removeByClassName('poem-stanza');
      currentStanza = document.createElement('div');
      currentStanza.id = `poem-stanza${phrase.stanza ?? 0}`
      currentStanza.classList.add('poem-stanza');
      document.getElementById('poem-container')?.append(currentStanza)
    }

    let line = document.getElementById(`poem-stanza${phrase.stanza ?? 0}-line${phrase.line ?? 0}`)
    if (!line) {
      line = document.createElement('div');
      line.classList.add('poem-line');
      line.id = `poem-stanza${phrase.stanza ?? 0}-line${phrase.line ?? 0}`;
      currentStanza.append(line);
    }
    line.append(span);
    return;
  }
}

export function optionPoem(words: PoemWithOptions): FullPoem {
  const maxClicks = words.reduce((product: number, currentValue: PoemOptions) => currentValue.options.length * product, 1)
  return (clicks: number, time: Time) => {
    if (clicks === 1) {
      setBackground(time.backgroundColor, time.background);
      const poemDiv = document.createElement('div');
      poemDiv.id = 'poem-container';
      document.getElementById('wordstorm-container')?.append(poemDiv);
      words.forEach((phrase: PoemOptions, index: number) => {
        const phraseSpan = document.createElement('span');
        phraseSpan.classList.add('option-poem-phrase');
        phraseSpan.id = `option-poem-phrase${index}`;
        // phraseSpan.innerText = phrase.options[0];
        const realLine = phrase.line ?? 0;
        let lineDiv = document.getElementById(`option-poem-line${realLine}`);
        if (!lineDiv) {
          lineDiv = document.createElement('div');
          lineDiv.id = `option-poem-line${realLine}`;
          lineDiv.classList.add('option-poem-line');
          poemDiv.append(lineDiv);
        }
        lineDiv.append(phraseSpan);
      });
    }
    if (clicks > maxClicks) {
      return END;
    }
    words.forEach((phrase: PoemOptions, index: number) => {
      const length = phrase.options.length; // length should never be 0
      const optionIndex = clicks % length;
      const phraseSpan = document.getElementById(`option-poem-phrase${index}`)! as HTMLSpanElement;
      const fonts = [FONTS.ebGaramond, FONTS.imFell, FONTS.montserrat];
      phraseSpan.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
      phraseSpan.style.color = time.foregroundColor
      phraseSpan.innerText = phrase.options[optionIndex];
    });
  }
}
// note: does not at present support multi-word acrostics because doesn't know how to space out stanzas
export function acrostic(words: Acrostic): FullPoem {
  return (clicks: number, time: Time) => {
    if (clicks === 1) {
      setBackground(time.backgroundColor, time.background);
      const poemDiv = document.createElement('div');
      poemDiv.id = 'poem-container';
      document.getElementById('wordstorm-container')?.append(poemDiv);
    }
    const startNewLine = (clicks - 1) % 2 === 0;
    if (startNewLine) {
      const letter = words.word[(clicks - 1) / 2];
      if (!letter) {
        return END;
      }
      const line = document.createElement('div');
      line.style.color = time.foregroundColor;
      line.classList.add('acrostic-line');
      line.id = `acrostic-line${(clicks - 1) / 2}`;
      document.getElementById('poem-container')?.append(line);
      const letterSpan = document.createElement('span');
      letterSpan.classList.add('acrostic-letter');
      letterSpan.id = `acrostic-letter${(clicks - 1) / 2}`;
      letterSpan.innerText = letter;
      line.append(letterSpan)
    } else {
      const index = (clicks - 2) / 2;
      const letter = words.word[index];
      let letterCounter = -1;
      for (let i = 0; i < words.word.length; i++) {
        if (words.word[i] === letter) {
          letterCounter++;
        }
        if (i === index) {
          break;
        }
      }
      const lineExcludingLetter = words[`${letter}${letterCounter === 0 ? '' : letterCounter}`];
      const letterlessLineSpan = document.createElement('span');
      letterlessLineSpan.id = `acrostic-letterless-line-span${index}`;
      letterlessLineSpan.classList.add('acrostic-letterless-line');
      letterlessLineSpan.innerText = lineExcludingLetter;
      document.getElementById(`acrostic-line${index}`)?.append(letterlessLineSpan);
    }
    return;
  }
}

export function wordstormScheduleForNow(): BrainstormTime {
  return WORDSTORM_SCHEDULE[dayOfTheMonth() - 1][timeOfDayFromDate().name];
}