# In
## Project Overview
*Out* and its sister repository *In* together constitute something like a point-and-click game or the interactive ebook of *Out of Tales*, my first full-length, self-published book, which braids together fantasy, lay philosophy, poetry, and memoir through a funhouse mirror.

## Features

*Out* is what you see out the window *In*: so far, poems, snow, sunrises and sunsets, conversations with a ghostly author-figure, a gray void, the travails of main character Jennie as in one world she climbs mountains and digs for treasure, but eventually Jennie's town will appear along with other expansions to the gray void.

## Getting Started

*In* lives at https://gleameil.github.io/in and https://gleameil.github.io/out (for now, I'd recommend starting *In*). Click around and see what happens! Check out the browser console in developer tools for a few surprises. 

Warning: the gray void is infinite. To get out of it, you have three choices: go *In* and move to a later date when it's no longer cloudy; type a not-*very*-secret cheat password that you can find by trawling through mode code and hit enter; or wait for me to expand it to be 1) worth exploring and 2) have exits.

While I'm planning a major push to get it usable on mobile, right now you'll do best with this on a landscape monitor with an aspect ratio of 16:9 or 16:10. Primarily tested on Chrome but seems ok on Firefox and Safari too.

While there's no downloadable executable, if you're a curious cat who wants to run it locally, the process should be straightforward: 
1. Clone the repository
2. Install node 22.17.1 using your node version manager of choice (asdf + nodejs plugin for me)
3. Run `npm install` in the root of repo
4. Run `npm start` (also in the root)
5. open your browser to `http://localhost:1234`

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

## Credits & Acknwoledgments

Music, art, and writing are mine apart from the public domain bits you'll find in the Anthology (book pile). Used Adobe Creative Cloud to edit music and art and MuseScore to create the music. GitHub Copilot gave me the outline for this README.

## License

Please contact me if you're interested in using any of this. I am likelier to be flexible about code than the contents of the game.

## Contact & Links
email: megmoseman@gmail.com
itch.io: https://dreamswithopeneyes.itch.io (you will see the previous incarnation of this work, Jennie's Room, there)
Instagram: https://instagram.com/dreamswithopeneyes
Wordpress blog: https://megmoseman.com


