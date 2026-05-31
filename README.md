# Out
## Project Overview
*Out* and its sister repository *In* together constitute the beginning of the net-art incarnation of *Of Evernost*. It braids together fantasy, lay philosophy and theology, poetry, and memoir through a funhouse mirror. The material is organized according to months of the year, and what exists so far is January and the bare beginnings of February

## Features

*Out* is what you see out the window *In*: so far, poems, snow, sunrises and sunsets, conversations with a ghostly author-figure, a gray void, the travails of main character Jennie as she climbs mountains and searches for gold of both literal and metaphorical varieties.

If you're curious or mystified, in the browser console (developer tools) you will find interpretive marginalia in several voices responding to the live experience. It is not debug output — or, if it is, it is debugging a lot more than code. 

## Getting Started

*Out* lives at https://gleameil.github.io/out (though for now, I'd recommend starting *In*, https://gleameil.github.io/in). Click around and see what happens! 

Warning: the gray void is infinite. To get out of it, you have three choices: go *In* and move to a later date when it's no longer cloudy; type a not-*very*-secret cheat password that you can find by trawling through more code and hit enter; or wait for me to expand it to be 1) worth exploring and 2) have exits.

It has been updated to work better on mobile, but better is not perfect. Likewise, primarily tested on Chrome but seems ok on Firefox and Safari too.

While there's no downloadable executable, if you're a curious cat who wants to run it locally, the process should be straightforward: 
1. Clone the repository
2. Install node 22.17.1 using your node version manager of choice (asdf + nodejs plugin for me)
3. Run `npm install` in the root of repo
4. Run `npm start` (also in the root)
5. open your browser to `http://localhost:8080`

## Technical Details

No game engine here, just a bunch of Typescript bundled up with Parcel and some likely questionable architectural choices that seem to be working for now. 

Implementation notes:
- Time is stored in your browser's LocalStorage along with a bit of progress info. As long as you're *In*, it progresses at the rate of real-world time, but *Out* it progresses as you move from time of day to time of day by clicking.
- Most of the Creation is hardcoded in giant TypeScript objects (ew, yes)
- The poem screens that sound bells when you click are implemented using the Web Audio API (see `src/shared/instrument`), which now *seems* to work on Firefox as well as Safari and Chromium-based browsers!
- Technically as well as artistically, *In* and *Out* are perpetually a work in progress. Planned improvements on the technical side include:
  - Automated tests
  - Using my Color class to handle color throughout the apps
  - (Maybe) an iOS app!

## Contributing

Not looking for contributors per se, but if you find bugs or would like improvements I'd love to hear about it. (I am one person with a day job and a ton of my own ideas for expanding this work, so no promises I'll get to any given thing, but I enormously appreciate feedback.)

## Credits & Acknowledgments

Used Adobe Creative Cloud to edit music and art and MuseScore to create the music. GitHub Copilot gave me the outline for this README and Claude reviewed it. Claude ("The Amanuensis") transcribed the reading layer and wrote most of the console logs. Otherwise, music, art, and writing are mine apart from the public domain bits you'll find in the Anthology (book pile)

## Contact & Links
itch.io: https://dreamswithopeneyes.itch.io (you will see the previous incarnation of this work, Jennie's Room, there)
Instagram: https://instagram.com/dreamswithopeneyes
Wordpress blog: https://megmoseman.com


