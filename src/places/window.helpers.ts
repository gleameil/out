import { Font, FONTS } from "../../shared/constants";
import { JANUARY_COLORS, JanuaryColor } from "../../shared/color";
import { setBackground } from "../../shared/helpers";
import { Time } from "../../shared/time/time.januaryConstants";
import { CLICK_ANYWHERE } from "./window.constants";

export function backgroundForTime(time: Time) {
  setBackground(time.backgroundColor, time.background);
}

export interface WordParams {
  phrase: string;
  classNames: string[];
  parent: HTMLDivElement;
  color?: JanuaryColor;
  font: Font;
  size?: number;
  rotation?: number;
  left?: number;
  bottom?: number;
}

export function word(wordParams: WordParams) {
  const {
      phrase,
      classNames,
      parent,
      color,
      font,
      size,
      rotation,
      left,
      bottom
  } = wordParams;
  const wordFlake = document.createElement('span');
  wordFlake.classList.add(...classNames, 'word');
  wordFlake.innerText = phrase;
  wordFlake.style.color = color ?? JANUARY_COLORS.white;
  wordFlake.style.fontFamily = font;
  wordFlake.style.fontSize = `${size ?? Math.random() * 3 + 3}vmin`;
  wordFlake.style.transform = `rotate(${rotation ?? Math.random() * 160 - 80}deg)`
  wordFlake.style.left = `${left ?? Math.random() * 80}vw`;
  wordFlake.style.bottom = `${bottom ?? Math.random() * 60}vh`;
  parent.append(wordFlake);
}

export function showClickAnywhere(parent: HTMLDivElement) {
  word({
    phrase: CLICK_ANYWHERE,
    classNames: ['clickAnywhere', 'wordstorm'],
    parent,
    color: JANUARY_COLORS.red,
    font: FONTS.imFell,
    size: 3.2,
    rotation: 20,
    left: 1,
    bottom: 3,
  });
}

export function pixelsToVH(pixels: number): number {
  return pixels * 100 / window.innerHeight;
}

export function pixelsToVW(pixels: number): number {
  return pixels * 100 / window.innerWidth;
}