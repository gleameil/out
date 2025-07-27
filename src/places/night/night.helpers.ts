import { makeCoordinateStringVH, makeCoordinateStringVW, randomInRange, randomIntegerInRange } from "../../../shared/helpers";
import { pixelsToVH, pixelsToVW } from "../window.helpers";
import { cloudCircleClassName, cloudCircleClassNameColors, cloudCircleCountMaximum, cloudCircleCountMinimum, cloudCircleDiameterMaximum, cloudCircleDiameterMinimum, cloudCount, firstCoordinates, starClassName, starCount, starDiameterMaximum, starDiameterMinimum, twinkleClassNames } from './night.constants'

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
  cloudCircle.style.left = makeCoordinateStringVW(fromLeft);
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

export function makeClouds(counter: number, event?: MouseEvent) {
  const parent = document.getElementById('night-container')! as HTMLDivElement;
  const clickCoordinates = event ? {
    fromLeft: pixelsToVW(event.clientX),
    fromTop: pixelsToVH(event.clientY),
    diameter: 20,
  } : undefined;

  cloudCircleClassNameColors.forEach(color => {
    for (let i = 0; i < cloudCount; i++) {
      const circleCount = randomIntegerInRange(cloudCircleCountMinimum, cloudCircleCountMaximum)
      makeCloud(color, circleCount, clickCoordinates ?? firstCoordinates, counter, parent);
    }
  }); 
}

function makeStar(parent: HTMLDivElement) {
  const star = document.createElement('div');
  const twinkleClassName = twinkleClassNames[randomIntegerInRange(0, twinkleClassNames.length)];
  star.classList.add(starClassName, twinkleClassName);
  star.style.left = makeCoordinateStringVW(randomInRange(0, 100))
  star.style.top = makeCoordinateStringVH(randomInRange(0, 100));
  const diameter = randomInRange(starDiameterMinimum, starDiameterMaximum);
  star.style.width = makeCoordinateStringVH(diameter);
  star.style.height = makeCoordinateStringVH(diameter);
  parent.append(star);
}

export function makeStars() {
  const parent = document.getElementById('night-container')! as HTMLDivElement;
  for (let i = 0; i < starCount; i++) {
    makeStar(parent);
  }
}

export function twinkleStars() {
  const stars = document.getElementsByClassName(starClassName);
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.forEach(className => {
      if (className.startsWith('twinkle')) {
        stars[i].classList.remove(className);
      }
    });
    const twinkleClassName = twinkleClassNames[randomIntegerInRange(0, twinkleClassNames.length)];
    stars[i].classList.add(twinkleClassName);
  }
}