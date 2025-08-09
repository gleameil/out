// using equal temperament
export const C3 = 130.81;
export const SEMITONE_MULTIPLIER = 2 ** (1/12);
export const WHOLE_TONE_MULTIPLIER = SEMITONE_MULTIPLIER ** 2;
export const MINOR_THIRD_MULTIPLIER = SEMITONE_MULTIPLIER ** 3;
export const MAJOR_THIRD_MULTIPLIER = SEMITONE_MULTIPLIER ** 4;
export const FOURTH_MULTIPLIER = SEMITONE_MULTIPLIER ** 5;
export const TRITONE_MULTIPLIER = SEMITONE_MULTIPLIER ** 6;
export const FIFTH_MULTIPLIER = SEMITONE_MULTIPLIER ** 7;
export const MINOR_SIXTH_MULTIPLIER = SEMITONE_MULTIPLIER ** 8;
export const SIXTH_MULTIPLIER = SEMITONE_MULTIPLIER ** 9;
export const AUGMENTED_SIXTH_MULTIPLIER = SEMITONE_MULTIPLIER ** 10;
export const MINOR_SEVENTH_MULTIPLIER = SEMITONE_MULTIPLIER ** 11;
export const MAJOR_SEVENTH_MULTIPLIER = SEMITONE_MULTIPLIER ** 12;

// someday may create custom timbres/instruments too
export type Timbre = 'sine' | 'square' | 'sawtooth' | 'triangle';

export interface TonalWorldParams {
    multipliers: number[];
    rootPitch?: number;
    octaveCount?: number;
    rootMultiplierAfterOctaves?: number;
}

export type InstrumentType = 'harp' | 'bell';

export interface Instrument {
    type: InstrumentType;
    timbre: Timbre;
    tonalWorld: TonalWorldParams;
}

export interface TonalWorlds {
    [name: string]: TonalWorldParams;
}

export const WORLDS: TonalWorlds = {
    wholeTone: {
        multipliers: [WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER],
    },
    pentatonicMajor: {
        multipliers: [WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, MINOR_THIRD_MULTIPLIER, WHOLE_TONE_MULTIPLIER],
        rootPitch: (C3/2) * MAJOR_THIRD_MULTIPLIER,
    },
    pentatonicMinor: {
        multipliers: [MINOR_THIRD_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, MINOR_THIRD_MULTIPLIER],
        rootPitch: (C3/2) * SIXTH_MULTIPLIER,
    },
    majorArpeggio: {
        multipliers: [MAJOR_THIRD_MULTIPLIER, MINOR_THIRD_MULTIPLIER],
        rootMultiplierAfterOctaves: WHOLE_TONE_MULTIPLIER,
        octaveCount: 5,
        rootPitch: C3 / 4,
    },
    fourthsAndFifths: {
        multipliers: [FOURTH_MULTIPLIER],
        rootMultiplierAfterOctaves: WHOLE_TONE_MULTIPLIER,
    },
    fourthsAndFifthsSunset: {
        multipliers: [FOURTH_MULTIPLIER],
        rootMultiplierAfterOctaves: WHOLE_TONE_MULTIPLIER,
        rootPitch: C3 * SEMITONE_MULTIPLIER,
    },
    major: {
        multipliers: [WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, SEMITONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER]
    },
    naturalMinor: {
        multipliers: [WHOLE_TONE_MULTIPLIER, SEMITONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, SEMITONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER]
    },
    harmonicMinor: {
        multipliers: [WHOLE_TONE_MULTIPLIER, SEMITONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, SEMITONE_MULTIPLIER, MINOR_THIRD_MULTIPLIER],
    },
    dorian: {
        multipliers: [WHOLE_TONE_MULTIPLIER, SEMITONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, SEMITONE_MULTIPLIER],
    },
    enigmatic: {
        multipliers: [SEMITONE_MULTIPLIER, MINOR_THIRD_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, WHOLE_TONE_MULTIPLIER, SEMITONE_MULTIPLIER]
    }
}

export interface Note {
    oscillator: OscillatorNode;
    gainNode: GainNode;
}

export interface WindowWithAudioProperties extends Window {
    audioCtx: AudioContext
    notes: Note[]
}