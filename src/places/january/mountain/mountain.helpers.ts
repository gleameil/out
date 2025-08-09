import { FONTS, ImagePathAndAltText } from "../../../shared/constants";
import { JANUARY_COLORS } from "../../../shared/color";
import { createImage, removeByClassName, setBackground, sun } from "../../../shared/helpers";
import { Time, TIMES } from "../../../shared/time/time.januaryConstants";
import { dayOfTheMonth, timeOfDayFromDate } from "../../../shared/time/time";
import { END, FullPoem } from "../january.constants";
import { MazeTime, MOUNTAIN_SCHEDULE, MountainTime, ParagraphEntry, RandomEntry, TextTime, UpAndDownTime, WalkTime } from "./mountain.constants";

const EFFECTS: { [key: string]: () => void } = {
  facelessDwindle: () => {
    document.getElementById('mountain-text-image')?.classList.add('mountain-image-dwindle');
  },
} as const;

function bwSun(parent: HTMLDivElement, time: Time) {
  if (![TIMES[2], TIMES[4], TIMES[6]].includes(time)) {
    return;
  }
  sun(parent, 'bw', time.name)
}

export function backgroundForTime(parent?: HTMLDivElement) {
  const time = timeOfDayFromDate()
  setBackground(time.mountainBackgroundColor, undefined, parent);
  bwSun(parent ?? document.getElementById('mountain-container')! as HTMLDivElement, time)
}

function showParagraphText(parent: HTMLDivElement, entry: ParagraphEntry, index: number, time: Time) {
  document.getElementById('mountain-text-random')?.remove();
  const paragraphNumber = entry.paragraph ?? 0;
  let paragraphDiv = document.getElementById(`mountain-text-paragraph${paragraphNumber}`) as HTMLDivElement;
  if (!paragraphDiv) {
    removeByClassName('mountain-text-paragraph');
    paragraphDiv = document.createElement('div');
    paragraphDiv.classList.add('mountain-text-paragraph');
    paragraphDiv.id = `mountain-text-paragraph${paragraphNumber}`;
  }
  const textSpan = document.createElement('span');
  textSpan.classList.add('mountain-text-span');
  textSpan.id = `mountain-text-span${index}`;
  textSpan.innerText = `${entry.words} `;
  const fonts = [FONTS.montserrat, FONTS.imFell, FONTS.ebGaramond];
  textSpan.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  paragraphDiv.style.color = time.mountainForegroundColor;
  paragraphDiv.style.backgroundColor = /* makeColorTransparent(time.mountainBackgroundColor, 0.5) ?? */ time.mountainBackgroundColor;
  paragraphDiv.append(textSpan);
  parent.append(paragraphDiv);
}

function showRandomText(parent: HTMLDivElement, entry: RandomEntry, index: number, time: Time) {
  removeByClassName('mountain-text-paragraph');
  document.getElementById('mountain-text-random')?.remove();
  const randomSpan = document.createElement('span');
  randomSpan.id = 'mountain-text-random';
  randomSpan.innerText = entry.words;
  const fonts = [FONTS.rockSalt, FONTS.montserrat, FONTS.imFell];
  randomSpan.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  randomSpan.style.left = `${Math.floor(Math.random() * 20 + 2)}%`;
  randomSpan.style.top = `${Math.floor(Math.random() * 70 + 5)}%`;
  randomSpan.style.color = time.mountainForegroundColor;
  const rotation = Math.random() * 20 - 10;
  randomSpan.style.transform = `rotate(${rotation}deg)`;
  parent.append(randomSpan);
}

export function text(schedule: TextTime): FullPoem {
  return (clicks: number, time: Time) => {
    const parent = document.getElementById('mountain-container')! as HTMLDivElement;
    if (clicks === 1) {
      backgroundForTime(parent);
      const image = createImage(schedule.image, [], 'mountain-text-image');
      parent.append(image);
    }
    if (clicks <= schedule.words.length) {
      if (schedule.words[clicks - 1].format === 'paragraph') {
        showParagraphText(parent, (schedule.words[clicks - 1]) as ParagraphEntry, clicks - 1, time);
      } else {
        showRandomText(parent, (schedule.words[clicks - 1]) as RandomEntry, clicks - 1, time)
      }
      EFFECTS[schedule.words[clicks - 1].effect ?? 'noEffect']?.();
    } else {
      return END;
    }
    return;
  };
}

export function maze(schedule: MazeTime): FullPoem {
  return (clicks: number, time: Time) => END;
}

export function walk(schedule: WalkTime): FullPoem {
  const images = schedule.images.map((imageDetails: ImagePathAndAltText, index: number) => createImage(imageDetails, ['mountain-walk-image'], `mountain-walk-image${index}`));
  const backgroundImages = schedule.backgroundImages.map((imageDetails: ImagePathAndAltText, index: number) => createImage(imageDetails, ['mountain-walk-background'], `mountain-walk-background${index}`));
  return (clicks: number, time: Time) => {
    if (clicks > 30) {
      return END;
    }
    if (clicks === 1) {
      backgroundForTime();
    }
    const parent = document.getElementById('mountain-container')! as HTMLDivElement;
    backgroundForTime(parent);
    bwSun(parent, time);
    const clicksPerBackgroundImage = Math.ceil(30 / backgroundImages.length);
    if ((clicks - 1) % clicksPerBackgroundImage === 0) {
      removeByClassName('mountain-walk-background');
      parent.append(backgroundImages[(clicks - 1) / clicksPerBackgroundImage]);
    }
    if (images.length !== 0) {
      removeByClassName('mountain-walk-image');
      const image = images[(clicks - 1) % images.length];
      image.style.transform = `translate(${(Math.floor((clicks - 1) * 100 / clicksPerBackgroundImage)) % 100}vw, 75vh)`;
      parent.append(image)
    }
    return;
  }
}

export function upAndDown(schedule: UpAndDownTime): FullPoem {
  const images = schedule.up.images.map((imageDetails: ImagePathAndAltText, index: number) => createImage(imageDetails, ['mountain-walk-image', 'mountain-walk-up-and-down-image'], `mountain-walk-image${index}`));
  const backgroundImages = schedule.up.backgroundImages.map((imageDetails: ImagePathAndAltText, index: number) => createImage(imageDetails, ['mountain-walk-background'], `mountain-walk-background${index}`));
  return (clicks: number, time: Time) => {
    if (clicks === 1) {
      const parent = document.getElementById('mountain-container')! as HTMLDivElement;
      const up = document.createElement('div');
      up.id = 'mountain-up';
      backgroundForTime(up);
      const down = document.createElement('div');
      down.id = 'mountain-down';
      down.style.backgroundColor = JANUARY_COLORS.black;
      const computer = createImage(schedule.down.image, [], 'mountain-down-image');
      down.append(computer);
      parent.append(up, down);
    }
    if (clicks <= schedule.down.words.length) {
      const existingUp = document.getElementById('mountain-up')! as HTMLDivElement;
      const existingDown = document.getElementById('mountain-down')! as HTMLDivElement;
      if (schedule.down.words[clicks - 1].format === 'paragraph') {
        showParagraphText(existingDown, (schedule.down.words[clicks - 1]) as ParagraphEntry, clicks - 1, TIMES[8]);
      } else {
        showRandomText(existingDown, (schedule.down.words[clicks - 1]) as RandomEntry, clicks - 1, TIMES[8])
      }
      const clicksPerBackgroundImage = Math.ceil(schedule.down.words.length / schedule.up.backgroundImages.length);
      if ((clicks - 1) % clicksPerBackgroundImage === 0) {
        removeByClassName('mountain-walk-background');
        existingUp.append(backgroundImages[(clicks - 1) / clicksPerBackgroundImage]);
      }
      if (images.length !== 0) {
        removeByClassName('mountain-walk-image');
        const image = images[(clicks - 1) % images.length];
        image.style.left = `${(Math.floor((clicks - 1) * 100 / clicksPerBackgroundImage)) % 100}vw`;
        image.style.bottom = '10%';
        existingUp.append(images[(clicks - 1) % images.length])
      }
      EFFECTS[schedule.down.words[clicks - 1].effect ?? 'noEffect']?.();
    } else {
      return END;
    }
    return;
  }
}

export function mountainScheduleForNow(): MountainTime {
  return MOUNTAIN_SCHEDULE[dayOfTheMonth() - 1][timeOfDayFromDate().name];
}

