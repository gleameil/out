import { Time } from "../shared/time/time.januaryConstants";

export const CLICK_ANYWHERE = 'Click anywhere';
export const END = 'end';

export type FullPoem = (clicks: number, time: Time) => string | undefined;
