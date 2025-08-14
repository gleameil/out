import { canPlayAudio } from "../sound";
import { DEFAULT_ROOT, Instrument, TonalWorldParams, WindowWithAudioProperties } from "./instrument.constants";

export class TonalWorld {
    readonly multipliers: number[];
    readonly rootPitch: number;
    readonly octaveCount: number;
    readonly rootMultiplierAfterOctaves: number;

    private readonly scaleLength: number;
    private readonly sequenceLength: number;


    constructor(world: TonalWorldParams) {
        const { multipliers, rootPitch = DEFAULT_ROOT / 2, octaveCount = 5, rootMultiplierAfterOctaves = 1 } = world;
        this.multipliers = multipliers;
        this.rootPitch = rootPitch;
        this.octaveCount = octaveCount;
        this.rootMultiplierAfterOctaves = rootMultiplierAfterOctaves;

        this.scaleLength = multipliers.length + 1;
        this.sequenceLength = this.scaleLength * octaveCount;
    }

    // location must be an integer
    pitch(location: number): number {
        const whichSequence = Math.floor(location / this.sequenceLength)
        const whereInSequence = location % this.sequenceLength;
        const whichOctave = Math.floor(whereInSequence / this.scaleLength)
        const whereInScale = whereInSequence % this.scaleLength;

        const sequenceRoot = this.rootPitch * (this.rootMultiplierAfterOctaves ** whichSequence);
        const scaleRoot = sequenceRoot * (2 ** whichOctave);
        let finalPitch = scaleRoot;
        for (let i = 0; i < whereInScale; i++) {
            finalPitch *= this.multipliers[i];
        }
        return finalPitch;
    }
}

export function stopSound() {
    const windowWithAudio = (window as unknown) as WindowWithAudioProperties;
    const notes = windowWithAudio.notes;
    while (notes?.length) {
        let oldNote = notes.pop()
        oldNote?.oscillator.stop()
        oldNote?.gainNode.disconnect();
        oldNote = undefined;
    }
}

export function setUpSound() {
    const windowWithAudio = (window as unknown) as WindowWithAudioProperties;
    if (!windowWithAudio.audioCtx) {
        windowWithAudio.audioCtx = new window.AudioContext();
    }
    if (!windowWithAudio.notes) {
        windowWithAudio.notes = [];
    }
}

export function play(location: number, instrument: Instrument) {
    const world = new TonalWorld(instrument.tonalWorld);
    const windowWithAudio = (window as unknown) as WindowWithAudioProperties;
    const audioCtx = windowWithAudio.audioCtx;
    if (!audioCtx ||!canPlayAudio()) {
        return;
    }

    const notes = windowWithAudio.notes;
    if (notes.length === 10) {
        let oldNote = notes.shift();
        oldNote?.oscillator.stop()
        oldNote?.gainNode.disconnect();
        oldNote = undefined;
    }

    const oscillator = audioCtx.createOscillator();
    oscillator.type = instrument.timbre;
    oscillator.frequency.setValueAtTime(world.pitch(location), audioCtx.currentTime);

    let gainNode = audioCtx.createGain();

    if (instrument.type === 'harp') {
        gainNode.gain.value = 0.001;
        gainNode.gain.exponentialRampToValueAtTime(0.06, audioCtx.currentTime + 0.4);
        gainNode.gain.setTargetAtTime(0.00001, audioCtx.currentTime + 3, 1);
    } else {
        gainNode.gain.value = 0.1;
        gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 5);
    }

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    notes.push({ oscillator, gainNode });
}

