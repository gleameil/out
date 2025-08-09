import { out } from "./places/out/out";
import { setUpWindow } from "./places/january/january";
import { startTime, getTime } from "./shared/time/time"
import { createSpan, expectLetters, removeByClassName } from "./shared/helpers";
import { createSoundControl, SOUND_CONTROL_ID } from "./shared/sound";

const LETTERS = 'evernost'

function start() {
    const all = document.getElementsByTagName('html')[0];
    if (!document.getElementById(SOUND_CONTROL_ID)) {
        all.append(createSoundControl());
    }
    removeByClassName('under-construction');
    startTime()
    console.log('You have gone Out.')
    if (getTime().getMonth() === 0) {
        setUpWindow()
    } else {
        out();
    }
}

function underConstruction() {
    console.log('If for mysterious reasons you want to see the broken & incomplete version of my internet art, you can probably figure out how by reading the code <3')
    const constructionSign = createSpan('UNDER CONSTRUCTION :)', ['under-construction'], 'under-construction');
    document.getElementsByTagName('html')[0].append(constructionSign);
    document.addEventListener('keydown', e => expectLetters(e, 0, LETTERS, start), { once: true })
}

window.onload = () => {
    start();
}