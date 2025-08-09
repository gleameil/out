import { ImageCatalog, ImagePathAndAltText, SHARED_IMAGES } from "../../../shared/constants";

export const MOUNTAIN_IMAGES: ImageCatalog = {
  faceless: {
    path: new URL('../../../assets/images/mountain/before/faceless.png?as=webp&height=1000', import.meta.url),
    alt: 'Black sketch of faceless figure',
  },
  terror: {
    path: new URL('../../../assets/images/mountain/before/terror.png?as=webp&height=1000', import.meta.url),
    alt: 'Black sketch of frightened girl',
  },
  room: {
    path: new URL('../../../assets/images/mountain/down/room.jpg',import.meta.url),
    alt: 'Realistic pencil drawing of laptop on lap in room with extreme perspective',
  },
  groundbg0: {
    path: new URL('../../../assets/images/mountain/before/groundbg0.jpg', import.meta.url),
    alt: 'Amorphous scribbly gray background',
  },
  groundbg1: {
    path: new URL('../../../assets/images/mountain/before/groundbg1.jpg', import.meta.url),
    alt: 'Dark gray horizon line on pale gray background',
  },
  groundbg2: {
    path: new URL('../../../assets/images/mountain/before/groundbg2.jpg', import.meta.url),
    alt: 'Slightly darker gray ground against light gray background',
  },
  groundbg3: {
    path: new URL('../../../assets/images/mountain/before/groundbg3.jpg', import.meta.url),
    alt: 'Shaded dark gray ground against light gray cloudy sky',
  },
  groundbg4: {
    path: new URL('../../../assets/images/mountain/before/groundbg4.jpg', import.meta.url),
    alt: 'Dark gray ground against almost white sky',
  },
  rocksbg0: {
    path: new URL('../../../assets/images/mountain/before/rocksbg0.png?as=webp', import.meta.url),
    alt: 'Black and white scribbled ground',
  },
  rocksbg1: {
    path: new URL('../../../assets/images/mountain/before/rocksbg1.png?as=webp', import.meta.url),
    alt: 'More detailed black and white scribbled ground',
  },
  rocksbg2: {
    path: new URL('../../../assets/images/mountain/before/rocksbg2.png?as=webp', import.meta.url),
    alt: 'More detailed black and white scribbled ground',
  },
  rocksbg3: {
    path: new URL('../../../assets/images/mountain/before/rocksbg3.png?as=webp', import.meta.url),
    alt: 'More detailed black and white scribbled ground',
  },
  rocksbg4: {
    path: new URL('../../../assets/images/mountain/before/rocksbg4.png?as=webp', import.meta.url),
    alt: 'More detailed black and white scribbled ground',
  },
  hillsbg0: {
    path: new URL('../../../assets/images/mountain/before/hillsbg0.png?as=webp', import.meta.url),
    alt: 'More detailed black and white scribbled ground',
  },
  hillsbg1: {
    path: new URL('../../../assets/images/mountain/before/hillsbg1.png?as=webp', import.meta.url),
    alt: 'More detailed black and white scribbled ground',
  },
  stickwalk0: {
    path: new URL('../../../assets/images/mountain/before/stickwalk0.png?as=webp', import.meta.url),
    alt: 'walking stick figure',
  },
  stickwalk1: {
    path: new URL('../../../assets/images/mountain/before/stickwalk1.png?as=webp', import.meta.url),
    alt: 'walking stick figure',
  },
  stickwalk2: {
    path: new URL('../../../assets/images/mountain/before/stickwalk2.png?as=webp', import.meta.url),
    alt: 'walking stick figure',
  },
  sketchwalk0: {
    path: new URL('../../../assets/images/mountain/before/sketchwalk0.png?as=webp', import.meta.url),
    alt: 'walking figure',
  },
  sketchwalk1: {
    path: new URL('../../../assets/images/mountain/before/sketchwalk1.png?as=webp', import.meta.url),
    alt: 'walking figure',
  },
  sketchwalk2: {
    path: new URL('../../../assets/images/mountain/before/sketchwalk2.png?as=webp', import.meta.url),
    alt: 'walking  figure',
  },
  walk0: {
    path: new URL('../../../assets/images/mountain/before/walk0.png?as=webp', import.meta.url),
    alt: 'walking figure',
  },
  walk1: {
    path: new URL('../../../assets/images/mountain/before/walk1.png?as=webp', import.meta.url),
    alt: 'walking figure',
  },
  walk2: {
    path: new URL('../../../assets/images/mountain/before/walk2.png?as=webp', import.meta.url),
    alt: 'walking figure',
  },
  walkdetail0: {
    path: new URL('../../../assets/images/mountain/before/walkdetail0.png?as=webp', import.meta.url),
    alt: 'walking figure in patchwork coat'
  },  
  walkdetail1: {
    path: new URL('../../../assets/images/mountain/before/walkdetail1.png?as=webp', import.meta.url),
    alt: 'walking figure in patchwork coat'
  },  
  walkdetail2: {
    path: new URL('../../../assets/images/mountain/before/walkdetail2.png?as=webp', import.meta.url),
    alt: 'walking figure in patchwork coat'
  },
  mountainbg: {
    path: new URL('../../../assets/images/mountain/before/mountainbg.png?as=webp', import.meta.url),
    alt: 'ground that rises to a mountain on the right',
  },
  walktiny0: {
    path: new URL('../../../assets/images/mountain/before/walkdetail0.png?as=webp&height=100', import.meta.url),
    alt: 'walking figure in patchwork coat'
  },  
  walktiny1: {
    path: new URL('../../../assets/images/mountain/before/walkdetail1.png?as=webp&height=100', import.meta.url),
    alt: 'walking figure in patchwork coat'
  },  
  walktiny2: {
    path: new URL('../../../assets/images/mountain/before/walkdetail2.png?as=webp&height=100', import.meta.url),
    alt: 'walking figure in patchwork coat'
  },
  upordownbg: {
    path: new URL('../../../assets/images/mountain/before/upordownbg.png?as=webp', import.meta.url),
    alt: 'mountain with black cave entrance and path winding up',
  },
  trailbg: {
    path: new URL('../../../assets/images/mountain/up/trailbg.jpg', import.meta.url),
    alt: 'rocky trail from above',
  },
  leftfoot: {
    path: new URL('../../../assets/images/mountain/up/foot0.png?as=webp&width=100', import.meta.url),
    alt: 'left foot',
  },
  rightfoot: {
    path: new URL('../../../assets/images/mountain/up/foot1.png?as=webp&width=100', import.meta.url),
    alt: 'right foot',
  },
  hand0: {
    path: new URL('../../../assets/images/mountain/up/grasping-fruit0.png?as=webp', import.meta.url),
    alt: 'digging hand',
  },
  hand1: {
    path: new URL('../../../assets/images/mountain/up/grasping-fruit1.png?as=webp', import.meta.url),
    alt: 'digging hand',
  },
  oldgoldbg0: {
    path: new URL('../../../assets/images/mountain/up/oldgold0.jpg', import.meta.url),
    alt: 'bits of gold showing through trail',
  },
  oldgoldbg1: {
    path: new URL('../../../assets/images/mountain/up/oldgold1.jpg', import.meta.url),
    alt: 'gold unburied',
  },
} as const;

export interface ParagraphEntry {
  words: string,
  format: 'paragraph',
  paragraph?: number,
  effect?: string,
}

export interface RandomEntry {
  words: string,
  format: 'random',
  effect?: string,
}

export type TextEntry = ParagraphEntry | RandomEntry;

const FACELESS_AFTERNOON: TextEntry[] = [
  {
    words: `A`,
    format: 'paragraph',
  },
  {
    words: 'hopelessly approximate gatekeeper',
    format: 'paragraph',
  },
  {
    words: 'fidgets at the beginning of your journey.',
    format: 'paragraph',
  },
  {
    words: 'Without face or gender,',
    format: 'paragraph',
  },
  {
    words: 'they do not see you,',
    format: 'paragraph',
  },
  {
    words: 'but they obtrude painfully.',
    format: 'paragraph',
  },
  {
    words: 'If I were you, reader, and I knew',
    format: 'paragraph',
  },
  {
    words: 'what this was supposed to be,',
    format: 'paragraph',
  },
  {
    words: 'I\'d want it to open with wonder or insight, not scribbles',
    format: 'paragraph',
  },
  {
    words: 'and an all-too-human individual in jeans.',
    format: 'paragraph',
  },
  {
    words: 'Is this faceless scribble you,',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'reader? You, who are',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'and may well remain to the physical being typing these words,',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'a placeholder,',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'but with whom my disembodied auctorial I',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'may hope to gain some deeper acquaintance?,',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'Perhaps as we go this shape will gain definition.',
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: 'Perhaps additional scribbles can make limbs wider or narrower,',
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `new layers of marker or blender render skin and hair darker or lighter.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `An eye or a lip could be sketched.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `In time a whole face will emerge. Not only one face —`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `a crowd of faces, the faces of friends and strangers, of everyone who reads this text.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Let’s start basic: who is Jennie?`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `I am, but also I am not. I am Jenny. Jenny lies and is a lie. Identity is a lie.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Is Jennie a lie?`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie says we are all Jennie. Jennie might be anyone. Jennie might be you. Jennie might be I.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie has soft, fine brown hair, a pinkish face, and brown eyes that always look sad, wistful, or confused,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `like a spaniel’s. She smiles often and sweetly.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Like a spaniel, too, she is smarter than she looks.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Jennie is quiet and looks calm. She is patient and usually gentle.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `She grows into many things.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `In this story, which is far from the only one, she grows into a writer, artist, and bookstore clerk, just like I, Jenny, did.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `This correspondence is not, of course, a coincidence;`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `in the January of the soul, my imagination is not keen enough to take me far beyond lived experience without depriving me of texture, depth, and truth.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Until I can take flight for more than a short stretch, let autofiction serve.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: ` Just recall that I do invent even so, and I feel no obligation to discuss what most would call the interesting parts of my life.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Regarding Jennie, calling her “writer, artist, and bookstore clerk`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `(or even — as in other versions of this story — “doctor” or “would-be prophet”)`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `is, though evocative, like observing that Beethoven was a nineteenth-century composer who lost his hearing.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `And so with all of us. The conventional descriptions we apply,`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `and our efforts to get beyond that convention too, are so inadequate to reality they hardly communicate anything at all.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `I hope to communicate something more.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `Jennie was born when I was ten or so, at the family cabin.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `I was reading about multiple personality disorder (now dissociative identity disorder officially, often plurality among those who experience it)`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `on a blue plastic swing hung from some pines beside a numbingly cold creek,`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `kicking, no doubt, at the dust and accumulated pine needles and exposed roots under my feet.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `Jennie was ten or so too, and that’s one of the most important ages she ever is.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `When I said she might be anyone, I meant it; she was in the early stages almost no one,`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `as close to bare personhood with no qualities as I could imagine, a sweet and pitiable bore.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `(Bore is not the important bit about that state of being, though. Blessed are the hungry, etc.)`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `Get to the point, you say, fearing this book is no more than a cloud of smoke.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `You’re afraid I will make you blunder through intricacy atop meaningless intricacy and find — nothing — beneath, not even emotion, let alone truth.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `You admonish me to follow the elegance-loving mathematicians and physicists:`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `to seek the bones of the universe, reduce a complex surface to a single equation that will pierce through the mess and let us work with it.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `Simplicity is better than complexity, you say;`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `God is a perfect simplicity.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `Can I pierce my mess to the heart with a needle-sharp insight that will transform it utterly, revealing its beautiful simplicity?`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `Maybe?`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `Eventually?`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `If I keep at this for even more years than I already have?`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `We can go for banal simplicities, though. One: this is to be about Jennie's twenty-seventh year.?`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `It is both here (the world you and I, reader, know)?`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `and elsewhere (the world I have longed in vain to see since I was tiny, which Jennie knows more deeply than I or you, about which I am grossly unfit to write).`,
    format: 'paragraph',
    paragraph: 14,
  },

  
] as const;
const FACELESS_SUNSET: TextEntry[] = [
  {
    words: `But what raging splendor`,
    format: 'paragraph',
  },
  {
    words: `of wings, feathers, and talons`,
    format: 'paragraph',
  },
  {
    words: `rises before us with a high, cold cry?`,
    format: 'paragraph',
  },
  {
    words: `How could it appear so suddenly, where before`,
    format: 'paragraph',
  },
  {
    words: `we saw only empty air?`,
    format: 'paragraph',
  },
  {
    words: `Now, though, a moment later, we see no bird but a geometrically perfect golden circle around a single yellow eye,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `its pupil surrounded by a red ring,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and, the moment after that, a human silhouette of darkness —`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and then a human silhouette of light.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Who, or what, we must ask, is the titular Firebird?`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `The Firebird — is a youthful fancy and other things, but`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `with such beings we must “tell it slant,” in the words of Emily Dickinson, if we want our words to spark any meaning at all —`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `No, I cannot tell of the Firebird yet.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `I will not even try.`,
    format: 'paragraph',
    paragraph: 4,
  },
] as const;
const FACELESS_DUSK: TextEntry[] = [
  {
    words: 'Alas, that figure at the beginning is not you.',
    format: 'paragraph',
  },
  {
    words: 'Nor are they Jennie.',
    format: 'paragraph',
  },
  {
    words: 'Too skinny.',
    format: 'paragraph',
  },
  {
    words: 'Too scrappy, scraggly, shallow, restless.',
    format: 'paragraph',
  },
  {
    words: 'Too blonde.',
    format: 'paragraph',
  },
  {
    words: 'The shirt is right, though.',
    format: 'paragraph',
  },
  {
    words: `Even that faceless figure, damn joker, might find worth in these words,`,
    format: 'paragraph',
  },
  {
    words: `but I'm not counting on it. Let us try to forget them and move on.`,
    format: 'paragraph',
    effect: 'facelessDwindle',
  },
] as const;

const MIRRORS_DAWN: TextEntry[] = [
  {
    words: 'Mirror, mirror, on the wall...',
    format: 'random',
  },
  {
    words: 'Trying to understand yourself is like trying to see your own face without a mirror.',
    format: 'random',
  },
  {
    words: 'Jenny loves herself like a mosquito bite:',
    format: 'paragraph',
  },
  {
    words: 'she cannot stop scratching.',
    format: 'paragraph',
  },
  {
    words: `Child-Jennie’s hunger for love was an ache and not an itch; what mirrors she eventually found were true but deep and far elsewhere.`,
    format: 'paragraph',
  },
  {
    words: `Nonetheless, no mirror allows self-understanding, because to understand oneself is to transcend and become more than what was understood;`,
    format: 'paragraph',
  },
  {
    words: `one can and must continue doing so infinitely.`,
    format: 'paragraph',
  },
  {
    words: `In the time on either side of her twenty-seventh birthday, Jennie was quiet — almost altogether.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She had her calling still, she wrote and painted still,`,
    format: 'paragraph',
    paragraph: 1,
  },  
  {
    words: `but she had lost not just mirrors but even the desire for mirrors,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and for love.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Jennie’s favorite writer was clear, sweet, cruel, and golden-tongued J,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `whose best novel  was the one about faces and veils she wrote with her late-found partner —`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `a graceful book, with more than a trace of the poetry she had originally meant it to be. But better still`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `was J’s philosophy, razor-sharp, intricate, evocative, and perfectly mad,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `describing a world simpler than elsewhere as Jennie knew it but beautiful with the same beauty.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `J prays for a face, but she is no lover of mirrors.`,
    format: 'paragraph',
    paragraph: 3,
  },
];
const MIRRORS_SUNRISE: TextEntry[] = [
  
  {
    words: `Mirrors are not all bad, not even if you’re the kind of moralist who hates self-love.`,
    format: 'paragraph',
  },
  {
    words: `I am not — amour de soi, amour propre, self-respect, self-esteem, vanity, pride, have fun, just try not to warp your sense of reality so far you hurt someone —`,
    format: 'paragraph',
  },
  {
    words: `but mirrors are not just about seeing yourself.`,
    format: 'paragraph',
  },
  {
    words: `The person in the mirror is a self in only the most tenuous way.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `My characters live in the mirror, but the person I want to be, slimmer and sharper, does not,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and a human body does not describe  Jennie at all —`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `she is a gray cloud with a light at the center.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
const MIRRORS_MORNING: TextEntry[] = [
  {
    words: `Mirrors are portals.`,
    format: 'random',
  },
  {
    words: `Jennie got so far In that she got Out of mirrors entirely.`,
    format: 'paragraph',
  },
  {
    words: `(Impossible, you say, if you say images are the best we can do.)`,
    format: 'paragraph',
  },
  {
    words: `(In and Out trade places, even meanings.)`,
    format: 'paragraph',
  },
  {
    words: `I looked in the mirror once and saw, behind my reflection, sunlight and dew and wind and green things starting to grow,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `light from elsewhere.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `I did not jump in.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `The mirror would only have shattered.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
const MIRRORS_MIDDAY: TextEntry[] = [
  {
    words: `Jennie slipped between glass and reflection onto yellow fields,`,
    format: 'paragraph'
  },
  {
    words: `leaped across strangers’ yards, too fast to shiver though she wore no coat over her tee shirt in the fifty-degree air.`,
    format: 'paragraph'
  },
  {
    words: `She came to a park, passed the duck pond and the jungle gym`,
    format: 'paragraph',
  },
  {
    words: `and the joggers and the old couples on benches, and came to the river.`,
    format: 'paragraph',
  },
  {
    words: `The water, a swirling brown pool bordered by a fallen tree, held no reflection.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Laughing with cold, she dove,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `dove past the surface to the icy depths, then leaped free like a dolphin over the log.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Against the current she half-waded, half-swam, past the city`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `toward the source, toward the sun.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She was shocked, then numb of skin,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `but inside her she laughed and laughed for joy.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Soon the river was a shallow, clear brook, babbling across stones of all colors,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `colors that grew brighter and brighter the further she went.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She did shiver now, almost sick with cold, and walked on pebbles,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `until the stream was a tiny spring bubbling up among bright stones as far as she could see, dotted with tufts of grass.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `The Sun warmed her`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `(she could not see him but his light was everywhere)`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Among the pebbles she found precious things and clever devices of every description,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `enormous statues, and fountains full of a water colder even than that from which she had come.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `The pebbles formed a mosaic.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `She hoped to see the pattern or image, but this was not to be:`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `though she spotted a tower of what appeared to be solid gold with an obsidian ladder leading to the upper stories,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `before she reached it, she stumbled across a jewel-encrusted hand mirror.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `The sight of it reminded her of her earthly duties, and she dove into it as into a pool of water.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `It took her back to her bathroom,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `holding, all the same, a cut sapphire the size of her thumbnail that had come loose from the mirror.`,
    format: 'paragraph',
    paragraph: 5,
  },
];
const MIRRORS_AFTERNOON: TextEntry[] = [
  {
    words: `She had an altar in her room for such treasures.`,
    format: 'paragraph',
  },
  {
    words: `She twisted the sapphire into a silvery wire statue of a bird`,
    format: 'paragraph',
  },
  {
    words: `to be its single eye —`,
    format: 'paragraph',
  },
  {
    words: `paper clips bent with pliers.`,
    format: 'paragraph',
  },
  {
    words: `Then she sat down at her laptop and drafted the article she was supposed to write for the local newspaper.`,
    format: 'paragraph',
  },
  {
    words: `A band she’d never heard of was playing out of town.`,
    format: 'paragraph',
  },
  {
    words: `People were coming from around the state. She could not focus,`,
    format: 'paragraph',
  },
  {
    words: `and she felt nothing as she listened to their twangy music on Youtube.`,
    format: 'paragraph',
  },
  {
    words: `Her skull was full of sunlight, not brains; she threw open the drapes in her bedroom and napped for an hour in a sunbeam,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `dreaming of round, yellow warmth extending into itching, leaping white light, catching at jewels and gems, stories and plans.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `On awakening, she tried to read and edit, but she could not get more than two sentences in.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Experience suggested it would satisfy the editor, though it would not delight him.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Guiltily, she attached it and hit “Send,”`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `then spent the rest of the day sketching broad abstract shapes on her largest pad of paper with a dull pencil,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `frustrated with the exuberant vacuity of her mind. The sketches were mountainous.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She liked their simplicity, did not want to clutter them up, but she knew there was no skill in the creation of such things,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `not even enough convolutions of heart`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `to justify them in the eyes of others, so she supposed that cluttered they would surely be —`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `someday.`,
    format: 'paragraph',
    paragraph: 2,
  },
];

const OLD_GOLD: TextEntry[] = [
  {
    words: `One morning,`,
    format: 'paragraph',
  },
  {
    words: `as sun filtered through the curtains,`,
    format: 'paragraph',
  },
  {
    words: `early but safely within the bounds of this story,`,
    format: 'paragraph',
  },
  {
    words: `Jennie dug out her three plastic tubs of old writing, as she did every few months.`,
    format: 'paragraph',
  },  
  {
    words: `“You’re like one of those old ladies with stacks of magazines and thirty cats,” Mom said.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `But there was magic in old things, and Jennie rarely refused magic.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Pick up the lucky penny —`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `double your luck and someone else’s by putting it back down for them,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Jennie would decide,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `if also, on darker days, step on a crack and break your mother’s back.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Jennie walked quickly and decisively now, as she never had in childhood,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `deftly avoiding the cracks. Occasionally, carelessness or perversity made her step on one.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She begged the world every night that Mom might be happy. Mom was not,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie could tell now, good at being happy,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `any better than Jennie once had been.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie did not believe Mom cared any more than Dad or Jennie or Dave did`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `whether the white carpets were spotless.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Cleanliness brought her no pleasure, nor fad diets, nor even the TV she blasted at all hours.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Her motorcycle did —`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `she wanted to climb onto it and ride and ride and never come back.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Yet she vacuumed instead, every day, occasionally into the small hours of the night,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `confusing and annoying the neighbors.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Mom had thrown out almost everything Jennie had drawn or written as a child,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `but from the time Jennie was fourteen, Jennie had guarded her things, dragonish.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `“What, saving it for your future biographers?” Mom asked once.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `“Hate to break it to you, kid, but you’re not that interesting.”`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Mom was not entirely wrong on either count,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `though Jennie’s memories from the years before paper records were often impossible or contradictory.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Mom did not like her to ask questions about them,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `and Dad remembered little.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Jennie wondered about the Mandela effect and alien abductions.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `She called the strangeness elsewhere.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `Today, Jennie chose the high school tub.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `She paged through yearbooks and papers about Jane Eyre and The Scarlet Letter.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `Her English portfolio was in a manila folder with a stylized bird she had drawn on the front with gel pens,`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `ornate and lopsided. Jennie smiled into the bird’s not-quite-empty yellow eye.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `A loose-leaf printout of a novel attempt called Of Evernost came to hand.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `She’d started writing it her senior year of high school. The idea of Evernost`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `(joke of a word, lit on only because it thrilled her ears at the age of nine)`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `had grown on fly-fishing trips with Dad, before sunset or right after, when the fish bit.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `The Blackfoot River’s overgrown shore was the marvelous beyond, sweet and good and fae, Evernost.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `She would stand on a rocky island as her father cast his line some yards off.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `In the game, she, or rather, her characters,`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `Emma and Karen and Madeline and Celeste,`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `stood on the island too, gazing at each other in wonderment,`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `facing a witch, Verna, who said the river was lava and the shore a volcanic waste.`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `The souls of the four had, in the story, once lived in Jennie’s head.`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `The games on the river had been thin and keen, wild and quiet,`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `without the richness of Jennie’s older imagination.`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `But — the other thing slashed through them, letting in a green or a gold or a white too bright to be memory.`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `Rereading, Jennie was reassured that her own world was that barren island in a river.`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `The writing itself was disappointing.`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `She felt the real sun on her neck more strongly than the words.`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `(Her characters stood on the island and longed for the shore — but the same sun shone on both.)`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `Halfway down the page, the story of Jennie herself began.`,
    format: 'paragraph',
    paragraph: 15,
  },
  {
    words: `Raw horror: her parents had decided, near her tenth birthday, they’d had enough of her.`,
    format: 'paragraph',
    paragraph: 15,
  },
  {
    words: `They dropped her off with her Aunt Verna, and Aunt Verna had killed her to remove the other girls from her head.`,
    format: 'paragraph',
    paragraph: 15,
  },
  {
    words: `That story was — different.`,
    format: 'paragraph',
    paragraph: 16,
  },
  {
    words: `Half the time, she remembered writing it.`,
    format: 'paragraph',
    paragraph: 16,
  },
  {
    words: `The other half, she remembered its happening to her.`,
    format: 'paragraph',
    paragraph: 16,
  },
  {
    words: `She relished how it set justice firmly on her side, freed her from guilt,`,
    format: 'paragraph',
    paragraph: 16,
  },
  {
    words: `but that was not why she wanted to believe it.`,
    format: 'paragraph',
    paragraph: 16,
  },
  {
    words: `She wanted to believe it`,
    format: 'paragraph',
    paragraph: 17,
  },
  {
    words: `because what came after made the horror worth it,`,
    format: 'paragraph',
    paragraph: 17,
  },
  {
    words: `meant she had been, in the wholeness of herself,`,
    format: 'paragraph',
    paragraph: 17,
  },
  {
    words: `elsewhere.`,
    format: 'paragraph',
    paragraph: 17,
  },
  {
    words: `(Glory, also bitterness: she could have stayed, but instead she returned, because — she was needed. Had thought she was.)`,
    format: 'paragraph',
    paragraph: 17,
  },
  {
    words: `Two scraps — Jennie’s death and the island. She pulled up her dissatisfying continuation of them on the computer —`,
    format: 'paragraph',
    paragraph: 18,
  },
  {
    words: `scraps about all the characters.`,
    format: 'paragraph',
    paragraph: 18,
  },
  {
    words: `They had begun as stereotypes and grown into the negative space Jennie’s own self left:`,
    format: 'paragraph',
    paragraph: 18,
  },
  {
    words: `she feared she was Madeline,`,
    format: 'paragraph',
    paragraph: 18,
  },
  {
    words: `she feared others thought she was Emma,`,
    format: 'paragraph',
    paragraph: 18,
  },
  {
    words: `and she wished she were Karen.`,
    format: 'paragraph',
    paragraph: 18,
  },
  {
    words: `Celeste was — the parts of her that were too good for her.`,
    format: 'paragraph',
    paragraph: 18,
  },
  {
    words: `Jennie looked out the window at the sun-and-pesticide-drenched lawn.`,
    format: 'paragraph',
    paragraph: 19,
  },
  {
    words: `Sometimes Jennie had felt she was one of the dandelions Mom wanted to kill.`,
    format: 'paragraph',
    paragraph: 19,
  },
  {
    words: `Mom wanted roses, and she occasionally got them, and Jennie had to clip them and,`,
    format: 'paragraph',
    paragraph: 19,
  },
  {
    words: `one year, bled all over her shirt, having forgotten gardening gloves.`,
    format: 'paragraph',
    paragraph: 19,
  },
  {
    words: `Did her child self know something she did not, with that word Evernost?`,
    format: 'paragraph',
    paragraph: 20,
  },
  {
    words: `She created a new directory: Current Evernost. She would continue the story.`,
    format: 'paragraph',
    paragraph: 20,
  },
  {
    words: `Turn it into its true self.`,
    format: 'paragraph',
    paragraph: 20,
  },
  {
    words: `Now, a prose poem.`,
    format: 'paragraph',
    paragraph: 21,
  },
  {
    words: `She wanted to translate it for a contest. She ought to have liked it —`,
    format: 'paragraph',
    paragraph: 21,
  },
  {
    words: `It aimed to be lyrical, imagistic, fantastical, even spiritual.`,
    format: 'paragraph',
    paragraph: 21,
  },
  {
    words: `But the fantastical and spiritual were a fashionably subversive metaphor for the personal and political.`,
    format: 'paragraph',
    paragraph: 21,
  },
  {
    words: `“Not my thing,” Jennie murmured, as she considered synonyms for convoluted and settled on the too-clever twisting.`,
    format: 'paragraph',
    paragraph: 21,
  },
  {
    words: `“Not a bad thing. Maybe I’ll see why it’s other people’s thing later.”`,
    format: 'paragraph',
    paragraph: 21,
  },
];
const TRYING: TextEntry[] = [
  {
    words: 'What is the use',
    format: 'random',
  },
  {
    words: 'of making dreams come true',
    format: 'random',
  },
  {
    words: 'when you have no dreams',
    format: 'random',
  },
  {
    words: 'worthy of the name?',
    format: 'random',
  },
  {
    words: 'And yet we dream and try.',
    format: 'paragraph',
  },
  {
    words: 'Tirelessly we seek utopias or dystopias,',
    format: 'paragraph',
  },
  {
    words: 'love or money.',
    format: 'paragraph',
  },
  {
    words: 'Among the hardest and dullest parts of life is trying.',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'The mindful tout being,',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'and they are correct even in the realm of writing, as being is something to record.',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'Being is something.',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'Trying ignores itself, is nothing at all.',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'But perhaps absence opens the way to creation.',
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: 'Jennie did not try to return elsewhere; it was not time.',
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: 'But she did try to write what elsewhere was.',
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: 'Even though, in this book of January, I subject you to much trying,',
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: 'remember: when the goal is worthy,',
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: 'it is the hopeless and jaded who prefer journey to destination,',
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: 'window glass to what lies beyond.',
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: 'I hope to outgrow cynicism and despair.',
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Most of Jennie's writings were as disappointing as magical-realist poetry, though differently;`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `they fell into mindless formulae or drivel that did not rise even to the level of cliché.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Ideas abounded: moods and moments, situations and feelings, tones and images, and, well, ideas —`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `not sequences of events, what usually constitutes a story.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Elsewhere was not (primarily) about stories, or time.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Time was a metaphor there.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Her memories of elsewhere were riddled with Escheresque impossibilities.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Seeking a sequence of events, or even a sequence of words,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `that did not betray her ideas,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `she felt like a cat trying to catch the sun under a tree at midday.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Now, though, the words were still wrong, but there was golden light at her heart.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `She wrote every day, and another thing returned from high school:`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `the sibilant whisper that said she chased the same immortality Shakespeare did`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `(“So long lives this, and this gives life to thee”).`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `She laughed at it as any polite modern person must, in this world of billions`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `where being exceptional, let alone being recognized as such, is nearly impossible.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `She laughed also because her thee`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `was surely more exceptional than any word of Shakespeare’s;`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `what could she offer it?`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `With literary immortality on one side of her mind and thee on the other,`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `it is, perhaps, no wonder that she hated every word she wrote,`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `and no wonder (though a shame) that she hated it so much she could hardly stand to look at it, let alone improve it.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `There was at least this for reward:`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `it was better than silence and inaction.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `She felt sure, almost sure, that this was the real reason she was here:`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `she needed to describe there, evoke it, explain it, so —`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `so others would seek it out?`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `So others who had seen it would know they were not alone?`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `Or so they all —`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `everyone —`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `would be ready when it came for them?`,
    format: 'paragraph',
    paragraph: 9,
  },
];
const SPRING_AND_EMMA: TextEntry[] = [
  {
    words: `Remarkably, what she had written about Evernost, the four on the island,`,
    format: "paragraph",
  },
  {
    words: `knitted itself together into an outline.`,
    format: "paragraph",
  },
  {
    words: `The outline, more miraculously still, yielded some thirty thousand words,`,
    format: "paragraph",
  },
  {
    words: `the story up to the entry point into Evernost.`,
    format: "paragraph",
  },
  {
    words: `There was, for a long time, nowhere to go from there,`,
    format: "paragraph",
  },
  {
    words: `but only for a time.`,
    format: "paragraph",
  },
  {
    words: `She felt moved, at last, to write of Emma:`,
    format: "paragraph",
    paragraph: 1,
  },
  {
    words: `Emma, the princessy princess,`,
    format: "paragraph",
    paragraph: 1,
  },
  {
    words: `creature of May,`,
    format: "paragraph",
    paragraph: 1,
  },
  {
    words: `timid but valiant.`,
    format: "paragraph",
    paragraph: 1,
  },
  {
    words: `She wanted Emma to meet sweetness to match Emma's own sweetness.`,
    format: "paragraph",
    paragraph: 1,
  },
  {
    words: `An anachronistic fantasia in a tower resulted.`,
    format: "paragraph",
    paragraph: 2,
  },
  {
    words: `It was lovely as what Jennie knew or hoped awaited her on her return,`,
    format: "paragraph",
    paragraph: 2,
  },
  {
    words: `but less real, less of darkness and meaning to it.`,
    format: "paragraph",
    paragraph: 2,
  },
  {
    words: `She did not like it as she wrote it — did she ever?`,
    format: "paragraph",
    paragraph: 2,
  },
];
const DRAFT_EMMA_SUNSET: TextEntry[] = [
  {
    words: `Will you?`,
    format: 'random',
  },
  {
    words: `If I may —`,
    format: 'random',
  },
  {
    words: `yes!`,
    format: 'random',
  },
  {
    words: `“Awake!” came the golden voice on the breeze,`,
    format: 'random',
  },
  {
    words: `irises rained down`,
    format: 'random',
  },
  {
    words: `call out to the sun and the moon`,
    format: 'random',
  },
  {
    words: `And so it will be with us.`,
    format: 'random',
  },
  {
    words: `understood something of the stories it held`,
    format: 'random',
  },
  {
    words: `Being Itself observed she could not live without It`,
    format: 'random',
  },
  {
    words: `a fine green Serpent walked up to her`,
    format: 'random',
  },
  {
    words: `trying dizzily, drunkenly to be sensible,`,
    format: 'random',
  },
  {
    words: `I marvel in the beauty of your eyes`,
    format: 'random',
  },
  {
    words: `Maiden, look upon my garden`,
    format: 'random',
  },
  {
    words: `inherit the Kingdom`,
    format: 'random',
  },
  {
    words: `a bird with feathers of flaming gold`,
    format: 'random',
  },
  {
    words: `“I am the Star Maiden,” said she`,
    format: 'random',
  },
  {
    words: `“and all they had built turned to ash.”`,
    format: 'random',
  },
  {
    words: `the lion bore them to the ground`,
    format: 'random',
  },
  {
    words: `Imemory, clear and stinging-sharp`,
    format: 'random',
  },
  {
    words: `struggled with voluptuous joy, luxurious stillness`,
    format: 'random',
  },
  {
    words: `the iridescent charcoal of a pigeon’s back`,
    format: 'random',
  },
  {
    words: `— sun, air, and joy`,
    format: 'random',
  },
  {
    words: ` a fourth thing — she herself.`,
    format: 'random',
  },
  {
    words: `her bird-self felt them like notes in a symphony`,
    format: 'random',
  },
  {
    words: `weighty, wave-like longings`,
    format: 'random',
  },
  {
    words: `a mountain wreathed in cloud`,
    format: 'random',
  },
  {
    words: `the end of all Sorrows`,
    format: 'random',
  },
  {
    words: `the sea around the Well of All Desires`,
    format: 'random',
  },
  {
    words: `The entire sphere shattered`,
    format: 'random',
  },
  {
    words: `Father watches all the Galleries, you know,`,
    format: 'random',
  },
  {
    words: `“This isn’t everything,” she said with a laugh.`,
    format: 'random',
  },
  {
    words: `her body dissolved into light`,
    format: 'random',
  },
  {
    words: `she knew the Kingdom`,
    format: 'random',
  },
  {
    words: `a tyrant ruled the country`,
    format: 'random',
  },
  {
    words: `did she remember`,
    format: 'random',
  },
];
const ALIENS: TextEntry[] = [
  {
    words: `October twilight.`,
    format: 'random',
  },
  {
    words: `Jennie left the house to stand in the terrifyingly vivid turquoise light,`,
    format: 'paragraph',
  },
  {
    words: `under the old apple tree, the one Mom always talked about taking out,`,
    format: 'paragraph',
  },
  {
    words: `the one Jennie remembered vividly felled`,
    format: 'paragraph',
  },
  {
    words: `though she could reach up and hold its branches in her arms`,
    format: 'paragraph',
  },
  {
    words: `(like the branches of a tree, Jennie’s story branches).`,
    format: 'paragraph',
  },
  {
    words: `Adulthood shrank the tree;`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `night, house, everything, felt cramped — except the sky.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Jennie mistook the white light for a floodlight Mom or the neighbors had added until she saw its source,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `the bottom of a pyramid of some dull gray metal,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `only a few yards above and before Jennie.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `The world flickered like a computer monitor.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `A figure appeared,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `somewhere between gray and black, not shiny but rubbery,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `naked but without genitalia or nipples.`,
    format: 'paragraph',
    paragraph: 3,
  },
  
  {
    words: `It`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `(she did not want to assign it personhood despite the red and black glow of its eyes)`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `raised its hands, and a stream of yellow light could be seen`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `entering its head from one side and a stream of red light exiting the other.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie could not move or speak for a long time.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Finally, she said, “Are you real?”`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `This question proved no more useful than she expected it to be.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `The alien did not answer —`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `just stood there transmitting and receiving and staring into her eyes.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `She felt sunburned and raw for a week after, although she had not recently been in the sun.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Like the alien, the experience was diminutive,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `a brief opening of a window.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Jennie was no stranger to wonders, some indistinguishable from daydreams,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `others that she knew had taken place in physical reality.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `This was of the latter variety —`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `she remembered stepping out into the yard as Dad did the dishes,`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `seeing it, and coming in — the sunburn was real —`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `the black and red and light were burned into her memory.`,
    format: 'paragraph',
    paragraph: 8,
  },
]; // maybe something more interesting???
const DRAFT_EMMA_DAWN: TextEntry[] = [
  
  {
    words: `a window, glowing red-violet.`,
    format: 'random',
  },
  {
    words: `making singing tracks of too much down her face`,
    format: 'random',
  },
  {
    words: `“Am I dead?”`,
    format: 'random',
  },
  {
    words: `the edge between content and terror`,
    format: 'random',
  },
  {
    words: `kaleidoscope around and through her`,
    format: 'random',
  },
  {
    words: `a familiar affectionate rush of eagerness`,
    format: 'random',
  },
  {
    words: `strands and locks and knots of identity`,
    format: 'random',
  },
  {
    words: `try to find the beauty in the things her people loved`,
    format: 'random',
  },
  {
    words: `my origins? What comes before me?`,
    format: 'random',
  },
  {
    words: `what the aristocracy was or could be`,
    format: 'random',
  },
  {
    words: `not just let their words slip past him`,
    format: 'random',
  },
  {
    words: `steal the strangest and wildest dreams`,
    format: 'random',
  },
  {
    words: `chanted long, silly poems for her`,
    format: 'random',
  },
  {
    words: `the literature of Evernost`,
    format: 'random',
  },
  {
    words: `pride in that measured step as well as dread`,
    format: 'random',
  },
  {
    words: `But do you love a man?`,
    format: 'random',
  },
  {
    words: `I owe them a duty you don’t.`,
    format: 'random',
  },
  {
    words: `afraid, from something deeper than embarrassment`,
    format: 'random',
  },
  {
    words: `light through the water of the fountain`,
    format: 'random',
  },
  {
    words: `the foolish, silly, girlish part of her`,
    format: 'random',
  },
  {
    words: `made up for it with eagerness and courtesy`,
    format: 'random',
  },
  {
    words: `was raised mocking religion`,
    format: 'random',
  },
  {
    words: `absurdly self-centered`,
    format: 'random',
  },
  {
    words: `turned away from the mirror altogether`,
    format: 'random',
  },
  {
    words: `the tall one’s angular, hard-edged face`,
    format: 'random',
  },
  {
    words: `You do not know the mission? — the place? — me?— yourselves, even?`,
    format: 'random',
  },
  {
    words: `the green land beyond`,
    format: 'random',
  },
  {
    words: `the Witch’s voice`,
    format: 'random',
  },
  {
    words: `trust not the Witch but the calling voices on the other side`,
    format: 'random',
  },
  {
    words: `a peaceful life, duller than any royal’s before her`,
    format: 'random',
  },
  {
    words: `only believers could go to heaven`,
    format: 'random',
  },
  {
    words: `the laws of physics are different here`,
    format: 'random',
  },
  {
    words: `perhaps indignation, perhaps joy`,
    format: 'random',
  },
  {
    words: `“Far too fancy,” she declared`,
    format: 'random',
  },
  {
    words: `the sunburst crown`,
    format: 'random',
  },
];
const DRAFT_EMMA_SUNRISE: TextEntry[] = [
  {
    words: `“As you wish, princess”`,
    format: 'random',
  },
  {
    words: `a too-fundamental view of something else`,
    format: 'random',
  },
  {
    words: `the girl in the mirror looked exhausted`,
    format: 'random',
  },
  {
    words: `I almost want to cry.`,
    format: 'random',
  },
  {
    words: `the splendor of Karen even as a barely educated commoner`,
    format: 'random',
  },
  {
    words: `I wasted a lot of time there, being a fool`,
    format: 'random',
  },
  {
    words: `I look down, and then I look up.`,
    format: 'random',
  },
  {
    words: `I became Queen`,
    format: 'random',
  },
  {
    words: `I have commanded armies.`,
    format: 'random',
  },
  {
    words: `Some things matter more than personal loyalties`,
    format: 'random',
  },
  {
    words: `You’re in that place I was`,
    format: 'random',
  },
  {
    words: `Stories were one thing, but stories’ coming true was —`,
    format: 'random',
  },
  {
    words: `crying to my own reflection? When I must lead a nation?`,
    format: 'random',
  },
  {
    words: `a sort of sweeter, younger self`,
    format: 'random',
  },
  {
    words: `he mocked us and spoke in riddles`,
    format: 'random',
  },
  {
    words: `“But my stories made you so angry!”`,
    format: 'random',
  },
  {
    words: `they still call her the Rose Knight`,
    format: 'random',
  },
  {
    words: `Yes, Emma, she is real.`,
    format: 'random',
  },
  {
    words: `I will grow mad, and I will grow old, both`,
    format: 'random',
  },
  {
    words: `rosebushes had sprung up around her corpse`,
    format: 'random',
  },
  {
    words: `highflown nonsense about responsibility`,
    format: 'random',
  },
  {
    words: `They think they will heal me`,
    format: 'random',
  },
  {
    words: `couldn’t she stop her own death?`,
    format: 'random',
  },
  {
    words: `tried to plunge through the mirror`,
    format: 'random',
  },
  {
    words: `the mirror just shattered`,
    format: 'random',
  },
  {
    words: `a desert of ugly gray sand`,
    format: 'random',
  },
  {
    words: `just emptiness and urgency`,
    format: 'random',
  },
  {
    words: `a little flash of green`,
    format: 'random',
  },
  {
    words: `not beautiful like stars, hot and simple as fire`,
    format: 'random',
  },
  {
    words: `creatures she knew, and then cities and then spaceships`,
    format: 'random',
  },
  {
    words: `more precious than every precious thing you have known`,
    format: 'random',
  },
  {
    words: `a chance of a tree assembling itself out of dust`,
    format: 'random',
  },
  {
    words: `the same gate she had met beyond the Well of All Desires`,
    format: 'random',
  },
  {
    words: `the land of summer, where the trees bore fruit`,
    format: 'random',
  },
  {
    words: `no death here`,
    format: 'random',
  },
];
const DRAFT_EMMA_MORNING: TextEntry[] = [
  {
    words: `the occasional bottomless black crack`,
    format: 'random',
  },
  {
    words: `towering herbivores, elk, elephants, mammoths, bison, rhinoceroses, stegosauruses`,
    format: 'random',
  },
  {
    words: `awakened the third and final time`,
    format: 'random',
  },
  {
    words: `Perdita grew sweet and merry, lovely and beloved`,
    format: 'random',
  },
  {
    words: `the child of shepherds, and a foundling`,
    format: 'random',
  },
  {
    words: `lifted unwillingly with the august gladness`,
    format: 'random',
  },
  {
    words: `whether God was pleased at his death you and I will never know`,
    format: 'random',
  },
  {
    words: `Only there is this catch: only the wise can see it.`,
    format: 'random',
  },
  {
    words: `the Gray Witch locked the door`,
    format: 'random',
  },
  {
    words: `forgot their pride and their fears`,
    format: 'random',
  },
  {
    words: `the lily held the story of Teresa`,
    format: 'random',
  },
  {
    words: `wolves began to howl`,
    format: 'random',
  },
  {
    words: `look down a chain of five stars`,
    format: 'random',
  },
  {
    words: `"Oh, tree," she whispered.`,
    format: 'random',
  },
  {
    words: `“Take my branches and my blessing!”`,
    format: 'random',
  },
  {
    words: `even the shirts on their backs were in tatters`,
    format: 'random',
  },
  {
    words: `Is there anything else you would have us do?`,
    format: 'random',
  },
  {
    words: `in a green orchard`,
    format: 'random',
  },
  {
    words: `a great King who sought immortality`,
    format: 'random',
  },
  {
    words: `Worthy are you who have come this far`,
    format: 'random',
  },
  {
    words: `Weeping, the scholar turned and left`,
    format: 'random',
  },
  {
    words: `all sorrows will be ended`,
    format: 'random',
  },
  {
    words: `as well as by ten dragons`,
    format: 'random',
  },
  {
    words: `turned her eyes, almost idly, to a sunflower`,
    format: 'random',
  },
  {
    words: `the story of the Boy Who Looked Up`,
    format: 'random',
  },
  {
    words: `collecting the feathers of birds`,
    format: 'random',
  },
  {
    words: `if the Kingdom grows no wiser, he will`,
    format: 'random',
  },
  {
    words: `The stars dance there`,
    format: 'random',
  },
  {
    words: `its golden shine`,
    format: 'random',
  },
  {
    words: `what the one is to the other`,
    format: 'random',
  },
  {
    words: `she did love that story`,
    format: 'random',
  },
  {
    words: `Be still and feel my blessing`,
    format: 'random',
  },
  {
    words: `only barely afraid`,
    format: 'random',
  },
  {
    words: `Die a little for me, if you will.`,
    format: 'random',
  },
  {
    words: `happily ever after`,
    format: 'random',
  },
];
const EMMA_DONE: TextEntry[] = [
  {
    words: `On completion, though,`,
    format: 'paragraph',
  },
  {
    words: `she was pleased with the unobjectionable unpublishable creation`,
    format: 'paragraph',
  },
  {
    words: `and hoped to add it to — and finish —`,
    format: 'paragraph',
  },
  {
    words: `the rest of the novel,`,
    format: 'paragraph',
  },
  {
    words: `which sometimes wanted to be a trilogy,`,
    format: 'paragraph',
  },
  {
    words: `and which she could not help but amiably loathe`,
    format: 'paragraph',
  },
  {
    words: `because it was the simplest, most normal, least interesting thing she had seen,`,
    format: 'paragraph',
  },
  {
    words: `and it was from when she was much younger.`,
    format: 'paragraph',
  },
];
const FAIL_TO_EDIT_AFTERNOON: TextEntry[] = [
  {
    words: `Success!`,
    format: 'random',
  },
  {
    words: `But so exhausted.`,
    format: 'random',
  },
  {
    words: `Maybe if I take it to the library I can edit?`,
    format: 'random',
  },
];
const TELL_ME_YOU: TextEntry[] = [
  {
    words: `Jenny is easily bored.`,
    format: 'paragraph',
  },
  {
    words: `For Jennie, reality tends to be, as it was for St. Augustine, ever ancient, ever new.`,
    format: 'paragraph',
  },
  {
    words: `“Enough!” Jennie said, laughing, after she and the Other pored over the history of generations of her microbiota. “Tell me you.”`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `The Other laughed too.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `“Not much to look at.”`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `This was only half a joke,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `because, at that moment, the Other was only half of God.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `But it obliged.`,
    format: 'paragraph',
    paragraph: 2,
  },{
    words: `There came flame and molten gold inside Jennie`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `and before her, and a weathered red bird`,
    format: 'paragraph',
    paragraph: 3,
  },{
    words: `appeared on Jennie’s shoulder, crest as ragged as the carpet in the library where she stood,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `yellow eyes fixed on hers.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `The earth was the patterns in the feathers tickling her nose.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `It let out a cry that shivered the world,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `raised its wings,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `and ascended — growing`,
    format: 'paragraph',
    paragraph: 4,
  },{
    words: `and not shrinking with the distance —`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `until its wings stretched as far as she could see,`,
    format: 'paragraph',
    paragraph: 4,
  },{
    words: `and eventually the blue in its feathers won out over the red,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `and it was nothing more than the sky and the earth and the sun beyond the library walls,`,
    format: 'paragraph',
    paragraph: 4,
  },{
    words: `but she felt it inside her like electricity or a knife-blade, and her body sang.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `When she looked at herself, she was a gray thing, yes, but not as gray as once.`,
    format: 'paragraph',
    paragraph: 5,
  },{
    words: `There was gentle light in her, white with a hint of gold,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `that could float out the window beside her desk and into the sky.`,
    format: 'paragraph',
    paragraph: 5,
  },
];
const FAIL_TO_EDIT_DUSK: TextEntry[] = [
  {
    words: `Can't stand to look at this thing.`,
    format: 'random',
  },
  {
    words: `Sentimental, the kind of bland writing,`,
    format: 'random',
  },
  {
    words: `people call lyrical`,
    format: 'random',
  },
  {
    words: `and I hate it.`,
    format: 'random',
  },
];
const ALIENS_DREAMS: TextEntry[] = [
  {
    words: `Jennie did not see the alien again, but she dreamed of it.`,
    format: 'paragraph',
  },
  {
    words: `In one dream, Jennie asked, “What are you here for?” `,
    format: 'paragraph',
  },
  {
    words: `She lay paralyzed in the dark,`,
    format: 'paragraph',
  },
  {
    words: `naked skin against cold metal.`,
    format: 'paragraph',
  },
  {
    words: `“We are all seekers,” said the voice, familiar and alien.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Jennie would have shrunk if her muscles had been her own.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `The words crossed her mind, disinterested, the necessary reply in a debate:`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `“There is no finding then? No true, no real, no home?”`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `“Unmoved mover or motion alone? You would be surprised — how slight the difference is.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `They say trying is futile, all is forever achieved —`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `but these paradoxes are not for you, not now.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Now you are to TRY.”`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `A catastrophic creak of metal on metal —`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `and electricity jolted through Jennie again and again.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `She stood looking out from cold red and black eyes`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `at a self standing free and untormented in the twilight,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `bored and confused eyes fixed on her horrified ones.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `A voice entered her and departed her, a voice`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `meant not for her but for the other standing there,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `though that other did not hear it:`,
    format: 'paragraph',
    paragraph: 5,
  },  
  {
    words: `“Find the spring in the barren rock.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `It isn’t there, though of course it is.`,
    format: 'paragraph',
    paragraph: 6,
  },  
  {
    words: `It’s your turn to seek.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `I seek you up the hills and down,`,
    format: 'paragraph',
    paragraph: 6,
  },  
  {
    words: `and you sit there looking at me like I don’t exist.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Yes, that too is what this year is about.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `It’s easy to get lost.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `You will.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Each stone of the path is outlined in my blood.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Each grain of dust has my name on it.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `You are not alone,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `though you won’t see it.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `When it blooms, you’ve arrived.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `It’ll be a while.”`,
    format: 'paragraph',
    paragraph: 7,
  },
];

const THEORY_TRUTH: TextEntry[] = [
  {
    words: `Sometimes, Jennie wanted to go to school,`,
    format: 'paragraph',
  },
  {
    words: `study literature and become a literary scholar.`,
    format: 'paragraph',
  },
  {
    words: `She read enough contemporary criticism to know she was too unscientific and too much a generalist`,
    format: 'paragraph',
  },
  {
    words: `for how little she knew and the archaic frameworks in which she knew it.`,
    format: 'paragraph',
  },
  {
    words: `Jennie almost dared attempt a study (On Truth and the Imagination in a Moral Sense, after Nietzsche),`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `but instead, she wrote about D, as deep and strange a writer as there came,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `one who understood elsewhere lay behind apparent reality.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `D had been elsewhere, Jennie believed — at the least in the way that everyone had,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `but perhaps more the way Jennie had, the way that was either fact or madness.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `D saw elsewhere in abstraction.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She had three ideas about D:`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `one, a comparison with William Blake;`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `the second, a discussion of happy endings (D wrote deeply melancholy work but still stood up for happy endings and tried to write them);`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `and the third, an exploration of the concept of truth in D’s work.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `D was strange on truth.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `They accepted it and did not accept it —`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `like the relativism that maddened Jennie,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `but D's joy in it made it palatable.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `D was green —`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `the gray-green of heather on mountains and the brilliant green of new grass,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `— and the slate gray of the rocks from which a spring sprang,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `and the subterranean caves into which the water trickled back.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Old, old things and wild things, things that came before humanity`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `and would (one hoped) outlast it.`,
    format: 'paragraph',
    paragraph: 5,
  },
];
const THEORY_D: TextEntry[] = [
  {
    words: `Writing a book is a form of social interaction.`,
    format: 'random',
  },
  {
    words: `A book can do many of the things a person can:`,
    format: 'paragraph',
  },
  {
    words: `communicate`,
    format: 'random',
  },{
    words: `bully`,
    format: 'random',
  },{
    words: `convince`,
    format: 'random',
  },{
    words: `plead`,
    format: 'random',
  },{
    words: `rage`,
    format: 'random',
  },{
    words: `snub`,
    format: 'random',
  },{
    words: `etc.`,
    format: 'random',
  },{
    words: `literature gains its value both`,
    format: 'paragraph',
  },{
    words: `from the ways it imitates reality`,
    format: 'paragraph',
  },{
    words: `and the ways in which it departs from reality.`,
    format: 'paragraph',
  },{
    words: `<3<3<3`,
    format: 'paragraph',
  },{
    words: `lay down the pen and pick up the magician’s wand`,
    format: 'random',
  },{
    words: `the surface of reality`,
    format: 'random',
  },{
    words: `the interstices of reality`,
    format: 'random',
  },{
    words: `the deeper structures of reality`,
    format: 'random',
  },{
    words: `the first poem’s Unmoved Mover of a truth`,
    format: 'random',
  },{
    words: `accept the principle of non-contradiction`,
    format: 'random',
  },{
    words: `a passionate and practical set of questions`,
    format: 'random',
  },{
    words: `the truth of his feelings`,
    format: 'random',
  },{
    words: `the truth of dream or ideal or abstraction`,
    format: 'random',
  },{
    words: `about absolutism versus relativism`,
    format: 'random',
  },{
    words: `fiendishly dense thinking about the fantasy genre, morality, and life in general`,
    format: 'random',
  },{
    words: `interrogate the nature of truth`,
    format: 'random',
  },{
    words: `the complexity as well as references that may point out of the fictional frame`,
    format: 'random',
  },
  {
    words: `Jennie wrote a 5000-word essay, started to edit and add references,`,
    format: 'paragraph',
  },
  {
    words: `and — could not. Perhaps it was not time.`,
    format: 'paragraph',
  },
];
const MATH: TextEntry[] = [
  {
    words: `Jennie did not feel she had scratched the surface, and she wrote much more than I shared,`,
    format: 'paragraph',
  },
  {
    words: `but she found other problems.`,
    format: 'paragraph',
  },
  {
    words: `She had intuitions about eternity and time,`,
    format: 'paragraph',
  },
  {
    words: `but these flashes and glories were not consistently present to her.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She needed to learn more to articulate them.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She wanted to learn — math.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She’d only gotten as far calculus in high school.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She’d done well enough —`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `some of the problems were a bit difficult,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `or at least required concentration beyond that of memorizing or copying problems,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and less pleasurable than that of puzzles.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She had feared she was nearing the most math she could understand,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `because she could fit her mind only around very simple versions of explanations`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and when she tried to prove things to herself found herself at the very end of her understanding.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She decided, after a time, to risk learning that her own ideas were hopelessly false.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `It was not a firm decision.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `She believed her ideas with her heart as well as her intuition,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `and she did not want to break her heart.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `She needed textbooks, and the university library was full of them.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `She checked one out from an internet recommendation, began reading.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `But — as was her wont — she dropped it for things she could not name.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Some creative plan or other.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `It seemed dull next to the reality she wanted.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Perhaps it was beautiful with the height of the stars,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `but she was also of the earth`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `and hot with the fire and the pure reality of reality`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `rather than just the shapes of reality abstractly understood.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `That was what she told herself, but she always thought it might just be that she was frightened.`,
    format: 'paragraph',
    paragraph: 7,
  },
];
const ALLEGORY_DAWN: TextEntry[] = [
  {
    words: `As Jennie wrote (often she went to the university library to do this, during this period)`,
    format: 'paragraph',
  },
  {
    words: `she read from the library collection, fitfully but deeply.`,
    format: 'paragraph',
  },
  {
    words: `She read about allegory.`,
    format: 'paragraph',
  },
  {
    words: `She read a study by J`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `(a scholar as well as a lay philosopher;`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `though renowned in its field, this study was strained and confused in Jennie’s eyes,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `not at all up to the standards of J’s other writing,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `for all that its insights and sharp-edged definitions helped Jennie)`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and another, madder study.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `This second drew Jennie in because she despised it.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `It was profoundly irrational.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `It elevated tenuous etymological connections to the status of fact,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `presented dubious similarities between disparate works as watertight proofs`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `of arguments more bizarre than any Jennie would have come up at her wildest.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `And, worse, it reduced beauty to power.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Yet this book's absurdity was almost surrealism,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `dream-logic — nightmare logic.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie found even the cruelty of hell beautiful,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `and the taste for strangeness and horror ran deep in humanity —`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `she hoped the hells were temporary — or chosen —`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `but also that the beauty of strangeness was real and permanent,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `and — this book surely expressed the beautiful strangeness of some hell or other.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `So much effort to describe something so distant from reality.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `She hoped for the author’s sake that he did not believe what he wrote.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Or even that he believed and, and, dull cynic, did not live his belief.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Jennie would write allegory, this second book persuaded her (by its wrongness, perhaps by its beauty).`,
    format: 'paragraph',
    paragraph: 5,
  }, 
];
const ALLEGORY_SUNRISE: TextEntry[] = [
  
  {
    words: `proto-science, like alchemy`,
    format: 'random',
  },
  {
    words: `why one couldn't create an allegory based on today's science`,
    format: 'random',
  },
  {
    words: `or of their particular kind of imagination.`,
    format: 'random',
  },
  {
    words: `a potentially pathological excess of reason`,
    format: 'random',
  },
  {
    words: `that newspeak has things in common with tendencies he sees in allegory`,
    format: 'random',
  },
  {
    words: `also gives him a lot of wiggle room`,
    format: 'random',
  },
  {
    words: `He chooses to focus on the personified abstractions,`,
    format: 'random',
  },
  {
    words: `I do not know that the Redcrosse Knight would be even that`,
    format: 'random',
  },
  {
    words: `the tension between possessor and possessed`,
    format: 'random',
  },
  {
    words: `singlemindedness, inflexibility, and a paradoxical need for power`,
    format: 'random',
  },
  {
    words: `is the Daemon God AI still also an abstraction?`,
    format: 'random',
  },
  {
    words: `the godlike robot, or perhaps the robot in general`,
    format: 'random',
  },
  {
    words: `the fated nature of daemonic heroes`,
    format: 'random',
  },
  {
    words: `a conflict between values allegory strives to express and how it (often) expresses them `,
    format: 'random',
  },
  {
    words: `better off openly talking about "symbolic representation" in general`,
    format: 'random',
  },
  {
    words: `City of Humanity: An Allegory`,
    format: 'random',
  },
  {
    words: `Miss A, or Acceptance: grants the "favor" of flowers that give invisibility`,
    format: 'random',
  },
  {
    words: `Mr. S, or Safety: has a face a shade rougher and a shade duller than Mr. D.'s`,
    format: 'random',
  },
  {
    words: `Sir D, or Duty: does not always wear armor`,
    format: 'random',
  },
  {
    words: `Mr. D, or Decenty: easily confused with Sir D`,
    format: 'random',
  },
  {
    words: `The Island: mist-shrouded colony`,
    format: 'random',
  },
  {
    words: `The Edge: past the Old District, verging on the abyss`,
    format: 'random'
  },
  {
    words: `H, or Hope: starved child thereof, gazing at the Island`,
    format: 'random',
  },
  {
    words: `garden grows in the literal light of her eyes`,
    format: 'random',
  },
  {
    words: `Beauty: seductress with innumerable masks — faceless?`,
    format: 'random',
  },
  {
    words: `Truth: veiled, receding virgin — faceless?`,
    format: 'random',
  },
  {
    words: `Are they the same?`,
    format: 'random',
  },
  {
    words: `...`,
    format: 'random',
  },
  {
    words: `etc & etc`,
    format: 'random',
  },
];
const OUTSIDER_MIDDAY: TextEntry[] = [
  {
    words: `Jennie’s few brushes with the commercial art establishment`,
    format: 'paragraph',
  },
  {
    words: `whether with writing or visual art`,
    format: 'paragraph',
  },
  {
    words: `were rarely successful, usually due to Jennie’s own awkwardness or withdrawal.`,
    format: 'paragraph',
  },
  {
    words: `The process of finding an audience was fraught.`,
    format: 'paragraph',
  },
  {
    words: `Jennie knew her work was good.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She could be grandiose — `,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `see in her work not the actuality of it but the vision that had brought it to her in the first place.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `It wasn’t even that Jennie feared what people would think of her work, though she did, in fits and starts.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Or — it was those things, perhaps,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `but more that she did not care enough to offset those things.`,
    format: 'paragraph',
    paragraph: 2,
  },
];
const OUTSIDER_AFTERNOON: TextEntry[] = [
  {
    words: `When Jennie read about outsider art`,
    format: 'paragraph',
  },
  {
    words: `she felt a deep, forbidden thrill.`,
    format: 'paragraph',
  },
  {
    words: `The linework of Martin Ramirez and Madge Gill, the wild autobiography of Adolf Wolfli,`,
    format: 'paragraph',
  },
  {
    words: `and the wilder fiction of Henry Darger —`,
    format: 'paragraph',
  },
  {
    words: `Jennie wanted to see her kin there —`,
    format: 'paragraph',
  },
  {
    words: `or, at the very least, permission to create technically imperfect art.`,
    format: 'paragraph',
  },
  {
    words: `Looking at pictures took her into August.`,
    format: 'paragraph',
  },
];
const AUGUST_SUNSET: TextEntry[] = [
  {
    words: `August was not as smoky as some years.`,
    format: 'paragraph',
  },
  {
    words: `There had been rain in June.`,
    format: 'paragraph',
  },
  {
    words: `There was always debate — did that make the forest fires better`,
    format: 'paragraph',
  },
  {
    words: `(because plants and everything were less desiccated)`,
    format: 'paragraph',
  },
  {
    words: `or worse (because there was more underbrush to burn)?`,
    format: 'paragraph',
  },
  {
    words: `She had decided with daredevil, outsiderly abandon that she would plunge straight in and write August,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `though the word inadequate would be inadequate to describe its inadequacy.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `More daredevil yet, she wrote it as poetry. `,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She found a shitty poetry handbook and wrote one poem for every exercise.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She wrote about the worst, heat and rage.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `She wrote in a trance — a dull or smug trance, but a trance.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `The memories and the stories mixed just as she had imagined they should.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `For she did not have a heart of August at this time, and that allowed her to continue.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `The effort only began to disintegrate at the end of the month,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `and she had more than 100 pages of important shit.`,
    format: 'paragraph',
    paragraph: 4,
  }
];
const AUGUST_DUSK: TextEntry[] = [
  {
    words: `tell me you`,
    format: 'random',
  },
  {
    words: `he wants to breathe fresh air`,
    format: 'random',
  },
  {
    words: `makes me sizzle inside`,
    format: 'random',
  },
  {
    words: `“Why the hell didn’t you say something was wrong, Jennie?”`,
    format: 'random',
  },
  {
    words: `If I could throw
Away
Every last scrap
of the world`,
    format: 'random',
  },
  {
    words: `Will you leave me now?
Yes.
NO!!!
Yes, I think so.`,
    format: 'random',
  },
  {
    words: `You called it mercy and I call you liar.`,
    format: 'random',
  },
  {
    words: `glitter in the sun of dawn`,
    format: 'random',
  },
  {
    words: `I just don't have the energy`,
    format: 'random',
  },
  {
    words: `Living in a hollow shell
That every part of it
Was your obedient limbs
`,
    format: 'random',
  },
  {
    words: `In mazes of delusive beauty`,
    format: 'random',
  },
  {
    words: `he was not like a man
All knobby bones`,
    format: 'random',
  },
  {
    words: `brisk brusque fast quick bored by my stuff frustrated perfume pushes`,
    format: 'random',
  },
  {
    words: `afraid, unwilling, exhausted, almost full of hate instead of love.`,
    format: 'random',
  },
  {
    words: `Fire pressed me to it.`,
    format: 'random',
  },
  {
    words: `cold-hot, hot-cold, 
I always am 
a little sick, by now`,
    format: 'random',
  },
  {
    words: `It begins deep in Desolation`,
    format: 'random',
  },
  {
    words: `lives on, barely, miserably, because she too suspects her wishing was for naught,`,
    format: 'random',
  },
  {
    words: `this was always how it had felt like they thought about her`,
    format: 'random',
  },
  {
    words: `that stupid innocent look, for all she knew it really was innocent`,
    format: 'random',
  },
  {
    words: `I almost lost you, and here you are.`,
    format: 'random',
  },
  {
    words: `You will grow to be all it is and greater.`,
    format: 'random',
  },
  {
    words: `It will be formally innovative good god.`,
    format: 'random',
  },
  {
    words: `physicists who think time is an illusion`,
    format: 'random',
  },
  {
    words: `asking for your faith or at least your hope`,
    format: 'random',
  },
];

const WORK_DAWN: TextEntry[] = [
  {
    words: `She grabbed her laptop and scrolled through job postings.`,
    format: `paragraph`,
  },
  {
    words: `The idea of work was, as usual, almost unbearable,`,
    format: `paragraph`,
  },
  {
    words: `but she wasn’t making enough even to pay for her groceries.`,
    format: `paragraph`,
  },
  {
    words: `Most sounded as bad as work always sounded. But there was a bookstore —`,
    format: `paragraph`,
  },
  {
    words: `a bookstore in the neighborhood, no less —`,
    format: `paragraph`,
  },
  {
    words: `looking for help.`,
    format: `paragraph`,
  },
  {
    words: `Jennie filled out the application, listing many favorite authors, and walked it over.`,
    format: `paragraph`,
  },
];
const APPLICATION_ACCEPTED: TextEntry[] = [
  {
    words: `September started.`,
    format: 'paragraph',
  },
  {
    words: `The air was cooler, in the eighties rather than the nineties or hundreds,`,
    format: 'paragraph',
  },
  {
    words: `but there was wind and dry lightning,`,
    format: 'paragraph',
  },
  {
    words: `and those stirred up wildfires August had not brought,`,
    format: 'paragraph',
  },
  {
    words: `and the wildfires brought smoke.`,
    format: 'paragraph',
  },
  {
    words: `The sun was dusty gold, the sky a pale, hazy blue, at the clearest moments;`,
    format: 'paragraph',
  },
  {
    words: `more often, though, the sun was an orangish spot behind dull white,`,
    format: 'paragraph',
  },
  {
    words: `and it shone nightmare-red on the bad days when ash rained from the sky.`,
    format: 'paragraph',
  },
  {
    words: `The sun was red when the friendly young woman called Jennie for an interview.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Mom followed it with sharp advice about her hair`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and brought out leather shoes Jennie could barely squeeze into.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Jennie went out into the smoke, full of uncertainty,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `wearing the pants suit she wore when she looked for contracting work,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `resume in folder.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She should be able to do anything, right? She had been universes.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She could pull pearls and sapphires out of thin air.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `But it was the sad truth that power always deserted her when it came to more basic obligations,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `replaced by dull, aching dread and a desire to do anything other than the grim thing she and the world knew she must do.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Elsewhere, there was pain that was also delight. `,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Presumably this was the same.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `That grim, dull thing was pain, but it was also, in some way, delight.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Or at least love.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `She tried not to limp in her shoes, tried not to scratch at her nylons.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Breezes blew, sometimes hot, sometimes cool.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Sweat ran down her.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `She wanted to wear a tee shirt or a tank top.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Her stomach knotted and roiled with familiar dread.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `But she’d agreed.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `When she arrived at the bookstore, the lights in the window shone out, welcoming, as if it were night.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `The store was clean and bright, full of customers`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `and employees in green or black aprons.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Could she be one of them? She asked at the front desk,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `and the bored young man with his curly brown beard and glasses led her to the back office —`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `a veritable airplane hangar of a room, full of boxes and low shelves.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `She looked glumly at the man who ushered her to a rolling chair at the side of his desk.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `But, though she could be halting of speech, she found bland, appropriate words in her mouth.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `Her work history looked more or less all right on paper.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `She did meet her deadlines, if barely and poorly. She conducted interviews —`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `yes, she was shy, but the folks who’d had her interview the university donors were satisfied...`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `At last, curious whether she had any chance of getting the job,`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `she tried to see into the man interviewing her, a middle-aged gentleman with a penetrating brown-eyed gaze.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `She fell silent as she looked at him, and at once elsewhere`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `(or just intuition aided by cultural narratives)`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `showed her he liked books better than credentials. `,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `So, quite abruptly, she switched to poetry.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `“I could have gone to college,” she explained, “but — I’m a writer.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `Poetry, autobiography, fantasy. I wanted to focus on that.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `I did, full-time, for a bit. But I don’t do the kind of thing that sells.”`,
    format: 'paragraph',
    paragraph:10,
  },
  {
    words: `She could tell he was taken aback.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `But, as she had thought it might,`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `it turned out to be the good kind of “taken aback.”`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `He smiled keenly, knowingly, for the first time, as she discussed her current favorite poet:`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `a poet of wild light whose magnum opus was equal parts science and Blake —`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `dense, for Jennie almost impossible to appreciate in its depth and breadth, but,`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `she explained, at least in poetry there was negative space.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `It was a hilariously literal concept: poetry`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `could afford to be neutron-star dense`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `because there was space at the ends of the lines and between them.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `But there was more to it,`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `and Jennie was trying to learn to let in negative space to make her own writing understood.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `The owner’s edged smile and her faltering as she tried to explain wild light told her he understood — something.`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `Probably something different than what she was saying —`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `at least, so it usually turned out. But she smiled back,`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `and elsewhere rewarded her with another flash of dubious insight:`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `a man, more or less gay but bi enough to feel a flash of something toward her,`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `a dilettantish poet with one book out`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `who dreamed of being the kind of poet books were written about,`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `who ran this successful shop with ironic despair and humorous cynicism —`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `take enough things that sell to justify buying the gems.`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `He doubted the two categories had any overlap at all.`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `Gems for him meant nature and whiskey and the life of the mind —`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `also freedom and liberal politics.`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `Wild light — not so much.`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `(Some saw beauty in freedom; others, like Jennie, in overwhelming power;`,
    format: 'paragraph',
    paragraph: 15,
  },
  {
    words: `He cut her short as she tried to talk about overwhelming power`,
    format: 'paragraph',
    paragraph: 15,
  },
  {
    words: `and offered her the job in a few words.`,
    format: 'paragraph',
    paragraph: 15,
  },
  {
    words: `Her heart lifted. It was a strange feeling,`,
    format: 'paragraph',
    paragraph: 15,
  },
  {
    words: `as if something was floating in her,`,
    format: 'paragraph',
    paragraph: 15,
  },
  {
    words: `slowly disconnecting from the base of family and settling onto a new base.`,
    format: 'paragraph',
    paragraph: 15,
  },
  {
    words: `She waited too long before leaving, hoping for some kind word, but he was not of that sort —`,
    format: 'paragraph',
    paragraph: 16,
  },
  {
    words: `not lightly kind — and she smiled and left.`,
    format: 'paragraph',
    paragraph: 16,
  },
];
const WORK_MORNING:TextEntry[] = [
  
  {
    words: `The feeling of movement did not last.`,
    format: 'paragraph',
  },
  
  {
    words: `Indeed, saying she had the job made her feel as if she were going to prison.`,
    format: 'paragraph',
  },
  {
    words: `She would not just — have — time;`,
    format: 'paragraph',
  },
  {
    words: `she would have to fight for it.`,
    format: 'paragraph',
  },
  {
    words: `But perhaps the fight would do her good.`,
    format: 'paragraph',
  },
  {
    words: `Maybe she would be better able to use the time she had.`,
    format: 'paragraph',
  },
  {
    words: `Jennie didn’t see the owner in the day-to-day of work.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She reverted to jeans and tee shirts — everyone else there wore them,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `or, more often among the women, tight leggings and crop tops.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She got a black apron and a nametag:`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `“Jennifer,” it read.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Jennie was too childish for people who did not know her.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She learned to work the register, shelve`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `(alphabetical order was not as straightforward as it seemed; what was to be done about de Balzac or de la Fontaine or MacDonald?),`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and enter books into the inventory control system.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `The first three weeks, she shrank to a still, small point,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and elsewhere shrank too, until it was hard to see, and she had only tawdry memories.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She spoke little, except to ask questions.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `But it was not as bad as she had feared. Instead of agonized resistance,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `there was just doing.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `When she returned home, the lack of freelance work was freeing.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Guilt was gone, but energy was too.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `She sat in her room in the evenings but did not write.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `She read fantasy novels, but they left her cold;`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `she saw the bones of mindless convention and earthly reality through them so easily.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Then, as her duties began to feel less effortful, she started to study her coworkers.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Elsewhere, or her imagination and ears, told her about them.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `There were the college students — three roommates, all artists.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `One of them — a cheerful nonbinary wild child, S.L., studied art,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `and they were the one with both the representational talent and the rich imagination:`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `painterly and emphatic and technically exquisite, like some of Jennie’s more focused work but more so —`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `a huge talent not yet marshaled in any given direction`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `(there had been a taxing series of airplanes in high school).`,
    format: 'paragraph',
    paragraph: 6
  },
  {
    words: `Jennie felt the intensity of their imagination`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `and felt sad that her own was quieter and duller.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Another, Jordan, tended toward digital art,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `careful and clean, full of jaunty whimsy, irony, and pain in juxtaposition.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Skinny and a rebel, short spiky brown hair dyed partly turquoise,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Jordan was always considering dropping out.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `The third, Delaney, studied film and was a photographer, wild and sweet,`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `and her expressive black-and-white shots captured her friendships and romances`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: ` with enough of a countercultural edge to catch eyes.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `Jennie called them the Fae — tricksters, lovers of beauty,`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `and inclined to reward the virtuous and punish the deserving.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `They were fast friends, and the counter was always snapping with their in-jokes and complaints about the senior manager,`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `who had won their enmity by making sweet, blonde Sonia, who’d started two weeks before Jennie, cry.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `There were others, too — Janus, also nonbinary,`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `who knew music and comics inside and out, whose forbidding glares masked shyness;`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `Ruth, an older, humorous, grouchy erstwhile religious studies major`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `who talked mostly about knitting;`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `Lizzie, coffee-swilling, chain-smoking blonde manager who knew almost as much music as Janus`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `and almost as much true crime as the creepy customer who cornered Sonia with the details of Ted Bundy’s murders one morning.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `For the most part, she did not dare, or want to, speak to these people,`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `though she grew to love them, Delaney’s luxurious hip-length red hair`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `(but also her threats to hack it all off),`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `Sonia’s inexplicably apologetic kindness when Jennie splashed coffee on both of them.`,
    format: 'paragraph',
    paragraph: 12,
  },
];
const ART_AND_LIGHT: TextEntry[] = [
  {
    words: `New art markers to celebrate.`,
    format: 'random',
  },
  {
    words: `drawing light`,
    format: 'random',
  },
  {
    words: `color and outline`,
    format: 'random',
  },
  {
    words: `stylized shapes, simple`,
    format: 'random',
  },
  {
    words: `and the stories that come with them...`,
    format: 'random',
  },
  {
    words: `maybe I'll fill the sketchbook`,
    format: 'random',
  },
  {
    words: `photograph or scan them`,
    format: 'random',
  },
  {
    words: `post to this art site`,
    format: 'random',
  },
];
const POETRY_TRANSLATION: TextEntry[] = [
  {
    words: `There was a poem Jennie was trying to translate, this one older, from the early 1900s.`,
    format: 'paragraph',
  },
  {
    words: `It was lyrical, beloved by many,`,
    format: 'paragraph',
  },
  {
    words: `certainly possessed of edge and wildness and weight.`,
    format: 'paragraph',
  },
  {
    words: `The poet also had edge and wildness and weight.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `There was more of her than there was of Jennie.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `(This was not precisely true, and Jennie knew it quietly; there was a lot of Jennie; elsewhere,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `there was so much Jennie it was hard to believe there was anything else,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: ` and so much of everything else it was quite too much.)`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `But in her appearance in this world, in her human life, this woman had character and decision,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and Jennie adored the lovelier and quite different images,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `this poet used,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `the crispness of her thought`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Dark hair and fierceness, hot reds, a desert soul,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `devoted to art past her devotion to her many lovers.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Witty. Wild.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Inclined to sudden travel and deserting daughters`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Truly — Jennie also wanted to hate her.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `She stood for things Jennie loathed —`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `passion as centered around human beings, self and her lovers, with only the most sideways and forced acknowledgment of anything else —`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `carefully cultivated beauty in place of acknowledged ugliness`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `(most in this world found beauty only through its ugliness, and Jennie could not believe that — really — this poet was any different)`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Careless selfishness.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Intemperate decisions.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Jennie had made only one intemperate decision — leaving elsewhere.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `The long poem Jennie was translating now inspired more love than hate.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Art was something Jennie understood a little better than lovers`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `and the particular brand of self-love (if you could call it that)`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `this poet espoused.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Elsewhere certainly had something in common with art, this thing that demanded the poet give up everything,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `family and love and stability and peace.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `The fact that — to all appearances — the poet really had been almost faithful to art,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `if to nothing else, and had earned herself a century’s worth of love from her countryfolk,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `was enough to endear her to Jennie.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `This poet also felt God and the devil were one, and loved the devil.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `Jennie felt God and the devil were, probably, one, and loved God.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `Was there a difference?`,
    format: 'paragraph',
    paragraph: 9,
  },
];

const SONIA_HELL: TextEntry[] = [
  {
    words: `When Jennie asked about bookstore barista Sonia's favored causes, she had dully expected something fashionable.`,
    format: 'paragraph',
  },
  {
    words: `But Sonia said, “Honestly? Animal rights.”`,
    format: 'paragraph',
  },
  {
    words: `Sonia was embarrassed at first, but as Jennie listened, it emerged she thought veganism a moral imperative.`,
    format: 'paragraph',
  },
  {
    words: `A college biology course had tipped her over that edge.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `he professor had explained, casually, there was probably something it was like to be a cat.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Halfway through the lecture, he had turned to cruel and pointless mouse experiments.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `As (he predicted correctly) his audience was horrified,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `he switched to a slide with a cute picture of mice. Of course, some students said, “Awwwwwwww,”`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and he said, “Of course, you react that way. Especially girls.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Maternal instincts. That’s why people disapprove of animal experimentation.”`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Shaking, Sonia had raised her hand.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She waited so long to be called on that the lecture had moved on, but it happened,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and she said, “The problem is not so much that mice are cute as that there’s probably something it’s like to be a mouse.”`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `And from that day, Sonia had been vegan.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `It was mid-June, a warm and wishy-washy day`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `(Jennie had tried to admire the fading lilacs and the blooming spireas and could not).`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie saw the passion behind Sonia's apologetic explanation and almost laughed,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `not because Sonia was wrong, but because Sonia was too much righter than she knew.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Did Sonia think plants were any less people than animals?`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Trees spoke to each other through their roots; they felt pain; they alerted one another of danger;`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `and this was only what Jennie had read on the internet, not what she had seen elsewhere.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Did not, Jennie almost asked, Sonia realize she lived in hell?`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `If Jennie said “Eat them but pray for them,” Sonia would feel nothing but contempt,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `though she would smile and nod.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `If Jennie said, “Starve yourself, then,” Sonia would feel such repulsion`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `(she’d been anorexic; Jennie honestly did not know`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `whether she learned this from elsewhere or whether Sonia had mentioned it)`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `she would never count Jennie a friend again.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `In that moment, Jennie wanted to starve herself, and not just because of the atrocities that were the price of living in this nightmare world.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `How did she forget she was living in hell? That night in bed, she began to pray:`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `for the cells in her body and the elementary particles in the cells, the bacteria in her gut, the plants in her garden,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `the spiders she and her mother killed, the moths on the glass doors of the bookstore felled by spray cleaner,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `the mice the owners poisoned,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Ruff and every other pet she had known.`,
    format: 'paragraph',
    paragraph: 6,
  },
];
const PRAYER: TextEntry[] = [
  {
    words: `The self same moment I could pray`,
    format: 'random',
  },
  {
    words: `And from my neck so free`,
    format: 'random',
  },
  {
    words: `The Albatross fell off, and sank`,
    format: 'random',
  },
  {
    words: `Like lead into the sea...`,
    format: 'random',
  },
  {
    words: `The night Jennie began again to pray for her food, elsewhere broke loose in a golden wave of joy.`,
    format: 'paragraph',
  },
  {
    words: `She would make a Tree: the Tree of Life, in the most detail she could.`,
    format: 'paragraph',
  },
  {
    words: `She had dreamed of the Tree of Life when she was three years old.`,
    format: 'paragraph',
  },
  {
    words: `She only barely remembered the dream — more a sense of bright whitish, yellowish light, perhaps water,`,
    format: 'paragraph',
  },
  {
    words: `some disorienting sense of quiet richness and color,`,
    format: 'paragraph',
  },
  {
    words: `but she did remember the drawing she’d based on it, with fruit of every description,`,
    format: 'paragraph',
  },
  {
    words: `because Mom had sent it to Aunt Verna as a Christmas card, and Aunt Verna had kept it.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `It had not stopped there; Jennie even sometimes remembered — or at least wrote —`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `metaphor and reality intermingled —`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `of being bound to it at ten to receive the gifts of elsewhere —`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and in high school made several efforts to paint it.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `It bore fruits of every description.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `The Tree of Life, not the Tree of Knowledge of Good and Evil, or —`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `some said they were the same.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She supposed in later years — in the half-playful way of mythopoeia —`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `that each fruit was a soul, that every living soul was on that tree.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She felt a grant of strength to take her through this artwork.`,
    format: 'paragraph',
    paragraph: 2,
  }
];
const TREE_OF_LIFE_AFTERNOON: TextEntry[] = [
  {
    words: `She took a mid-sized canvas (gift from a friend's parents years ago)`,
    format: 'paragraph',
  },
  {
    words: `and began to sketch.`,
    format: 'paragraph',
  },
  {
    words: `The layout was simple:`,
    format: 'paragraph',
  },
  {
    words: `the tree stood in the center (symmetrical)`,
    format: 'paragraph',
  },
  {
    words: `covered in its fruits`,
    format: 'paragraph',
  },
  {
    words: `and the sky stretched behind.`,
    format: 'paragraph',
  },
  {
    words: `Mixing the color of the sky with her acrylic paints was the first challenge.`,
    format: 'paragraph',
  },
  {
    words: `She wanted a bright teal-edged blue, not simple sky color.`,
    format: 'paragraph',
  },
];
const TREE_OF_LIFE_SUNSET: TextEntry[] = [
  {
    words: `Then came the time to paint.`,
    format: 'paragraph',
  },
  {
    words: `She pulled up fruits online to look at.`,
    format: 'paragraph',
  },
  {
    words: `She divided the canvas into quadrants,`,
    format: 'paragraph',
  },
  {
    words: `adding detail for an hour a night`,
    format: 'paragraph',
  },
  {
    words: `for a month.`,
    format: 'paragraph',
  },
  {
    words: `When she finished she was disbelieving and proud.`,
    format: 'paragraph',
  },
  {
    words: `(She painted in the laundry room, garbage bags spread out on the cement floor`,
    format: 'paragraph',
  },
  {
    words: `to keep from splattering).`,
    format: 'paragraph',
  },
  {
    words: `At work, they loved the results.`,
    format: 'paragraph',
  },
  {
    words: `She wanted to sell it. Make prints.`,
    format: 'paragraph',
  },
  {
    words: `Maybe make a larger version,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `larger (she hoped),`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `but with the same degree of detail.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
const TREE_OF_LIFE_ENUMERATION_DUSK: TextEntry[] = [
  
  {
    words: `She had written about the Tree before too, but she wanted to write a learned enumeration`,
    format: 'paragraph',
  },
  {
    words: `of all its properties.`,
    format: 'paragraph',
  },
  {
    words: `It is useless, though true, to observe that the roots of the Tree of Life are innumerable.`,
    format: 'paragraph',
  },
  {
    words: `undifferentiable tangle`,
    format: 'random',
  },
  {
    words: `twenty-seven sorts of major roots`,
    format: 'random',
  },
  {
    words: `rarest ghosts of structure and substance`,
    format: 'random',
  },
  {
    words: `the hells of cold are more like heaven`,
    format: 'random',
  },
  {
    words: `second of the hells`,
    format: 'random',
  },
  {
    words: `tormented and torments others`,
    format: 'random',
  },
  {
    words: `The third hell, as the Cathars attested, contains this world,`,
    format: 'random',
  },
  {
    words: `beauty is associated with some form of suffering or wrongdoing`,
    format: 'random',
  },
  {
    words: `images of pleasure, goodness, and virtue enter it`,
    format: 'random',
  },
  {
    words: `hell of sin`,
    format: 'random',
  },
  {
    words: `a more optimistic view`,
    format: 'random',
  },
  {
    words: `slowly turning hell into heaven`,
    format: 'random',
  },
];
const TREE_OF_LIFE_ENUMERATION_NIGHT: TextEntry[] = [
  {
    words: `sneer or a hiccup of doubt`,
    format: 'random',
  },
  {
    words: `the Earthly Paradises, giving life to the second root`,
    format: 'random',
  },
  {
    words: `Purgatories`,
    format: 'random',
  },
  {
    words: `happily-ever-after`,
    format: 'random',
  },
  {
    words: `receive what they want and desire as a gift freely given`,
    format: 'random',
  },
  {
    words: `not, perhaps, worlds of solitude,`,
    format: 'random',
  },
  {
    words: `delimit the bounds of a self`,
    format: 'random',
  },
  {
    words: `enemies drink and toast`,
    format: 'random',
  },
  {
    words: `attainment, power, skill, and endless adventure`,
    format: 'random',
  },
  {
    words: `halfway between the paradises and the High Heavens`,
    format: 'random',
  },
  {
    words: `encompassing every place`,
    format: 'random',
  },
  {
    words: `one that can eclipse its object`,
    format: 'random',
  },
  {
    words: `“always more,” the infinity of all things`,
    format: 'random',
  },
  {
    words: `do believe in wise squirrels, though`,
    format: 'random',
  },
];
const TREE_OF_LIFE_ENUMERATION_WEE_HOURS: TextEntry[] = [
  {
    words: `neither more nor less deceptive than calling them states`,
    format: 'random',
  },
  {
    words: `inaccessible to consciousness`,
    format: 'random',
  },
  {
    words: `down to atoms and up to moments in universes`,
    format: 'random',
  },
  {
    words: `demonic mockeries of high things`,
    format: 'random',
  },
  {
    words: `it is the love that shapes worlds, but translated`,
    format: 'random',
  },
  {
    words: `the sugar-rich phloem, carrying the energy  of photosynthesis`,
    format: 'random',
  },
  {
    words: `xylem, carrying (say) the love that is earth and earthly things`,
    format: 'random',
  },
  {
    words: `Bees pollinate the flowers`,
    format: 'random',
  },
  {
    words: `etherealization of the self`,
    format: 'random',
  },
  {
    words: `fleeting manifestations of the infinite`,
    format: 'random',
  },
  {
    words: `guards of every description or none`,
    format: 'random',
  },
];
const TREE_OF_LIFE_EXHAUSTION: TextEntry[] = [
  {
    words: `The further I go, the worse this thing gets.`,
    format: 'random',
  },
  {
    words: `Pulling in other bits of writing`,
    format: 'random',
  },
  {
    words: `that don't even belong here.`,
    format: 'random',
  },
  {
    words: `Enough enumeration.`,
    format: 'random',
  },
  {
    words: `Give up for now.`,
    format: 'random',
  },
];

const FIREBIRDS_DAWN: TextEntry[] = [
  {
    words: `The acrylic paints that had produced the Tree of Life`,
    format: 'paragraph',
  },
  {
    words: `had entered Jennie's life earlier, as a gift from her father.`,
    format: 'paragraph',
  },
  {
    words: `Near Christmas, she decided to paint the firebird.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `This felt nothing like so difficult as painting the Tree,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `because the energy that came on her was less — and for other reasons.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `The Tree she could theoretically, in enough time, with enough patience — at least, she imagined it so —`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `do artistic justice.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `The firebird she could not.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Being both less sure and less passionate,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `she made works sketchier, stranger, and less.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
const FIREBIRDS_SUNRISE: TextEntry[] = [
  
  {
    words: `She found an earthly  bird for a model: a rhea,`,
    format: 'paragraph',
  },
  {
    words: `a sort of ostrich-bird with soulful gray eyes.`,
    format: 'paragraph',
  },
  {
    words: `She turned gray to yellow, gave it a crest, and surrounded it with fruits,`,
    format: 'paragraph',
  },
  {
    words: `against a sky — not a firebird's native night but the hot and hard sky behind the Tree,`,
    format: 'paragraph',
  },
  {
    words: `a sky perceptible — even overwhelming — even though the canopy of fruits stretched horizon to horizon.`,
    format: 'paragraph',
  },
  {
    words: `The chaos of the feathers seemed — almost a right representation of the colors she had seen,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and of how they partook of red and of fire but also of everything else.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
const FIREBIRDS_MORNING: TextEntry[] = [
  {
    words: `a gray thing, yes`,
    format: 'random',
  },
  {
    words: `hint of gold`,
    format: 'random',
  },
  {
    words: `Red was pain.`,
    format: 'random',
  },
  {
    words: `flat blue, a terrible abstraction`,
    format: 'random',
  },
  {
    words: `end was deferred`,
    format: 'random',
  },
  {
    words: `Depth and shadow, limit and hue`,
    format: 'random',
  },
  {
    words: `yellow eye`,
    format: 'random',
  },
  {
    words: `blood blued to purple`,
    format: 'random',
  },
  {
    words: `red was the deepest`,
    format: 'random',
  },
  {
    words: `raised herself up into colors`,
    format: 'random',
  },
  {
    words: `sharp edges and sparkling lights`,
    format: 'random',
  },
  {
    words: `a person, any person, every person?`,
    format: 'random',
  },
  {
    words: `not world but flame`,
    format: 'random',
  },
];

const FIREBIRDS_ABSTRACT_DUSK: TextEntry[] = [
  {
    words: `Painting the Tree of Life, Jennie loved making the texture of the trunk`,
    format: 'paragraph',
  },
  {
    words: `more than the details of the fruit.`,
    format: 'paragraph',
  },
  {
    words: `On her firebird, too,`,
    format: 'paragraph',
  },
  {
    words: `she loved the textures as much as the painting itself.`,
    format: 'paragraph',
  },
  {
    words: `She feared the abstraction of the parts  was so much better than the naivete of the whole there was no reason to hitch them together.`,
    format: 'paragraph',
  },
  {
    words: `So next came actual abstract work — a work that took what she loved from the textures`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and produced a less — alas — rawly strange but perhaps more understandable vision of what she had seen.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
const FIREBIRDS_ABSTRACT_NIGHT: TextEntry[] = [
  {
    words: `The abstract she created in a calm trance, with leftover paint from less successful experiments.`,
    format: 'paragraph',
  },
  {
    words: `It reminded someone online of Stravinsky's The Firebird,`,
    format: 'paragraph',
  },
  {
    words: `and Jennie listened to it online, and it said some of the things she said in her artwork`,
    format: 'paragraph',
  },
  {
    words: `and even some of the things she saw.`,
    format: 'paragraph',
  },
  {
    words: `She was done painting for a time — she packed away the easel after the two paintings and a few other experiments,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `guiltily, hoping that she would soon be moved to paint again so as not to make her father’s gift in vain.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
const FIREBIRDS_ABSTRACT_WEE_HOURS: TextEntry[] = [
  {
    words: `most literal imagination`,
    format: 'random',
  },
  {
    words: `capable of willing`,
    format: 'random',
  },
  {
    words: `growing to the earth and emerging from the earth at once`,
    format: 'random',
  },
  {
    words: `tell a story`,
    format: 'random',
  },
  {
    words: `fractal complexity`,
    format: 'random',
  },
  {
    words: `What do you mean by love?`,
    format: 'random',
  },
  {
    words: `the is and the could-be of any state`,
    format: 'random',
  },
  {
    words: `upward movement toward the good`,
    format: 'random',
  },
  {
    words: `strengthen and solidify`,
    format: 'random',
  },
  {
    words: `one interpretation`,
    format: 'random',
  },
  {
    words: `when she thought it was her own imagination`,
    format: 'random',
  },
  {
    words: `no obvious right course of action`,
    format: 'random',
  },
];

const DISSOLUTION_DAWN: TextEntry[] = [
  {
    words: `Jennie turned to Dissolution.`,
    format: 'paragraph'
  },
  {
    words: `Evernost reabsorbed the Kingdom,`,
    format: 'paragraph'
  },
  {
    words: `giving everything within it endless`,
    format: 'paragraph'
  },
  {
    words: `and (ultimately) incomparably better`,
    format: 'paragraph'
  },
  {
    words: `life.`,
    format: 'paragraph'
  },
  {
    words: `She could scrounge up only a few scraggly stories`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and was upset to find that — she could not see the firebird, or even herself, clearly enough`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `to write what became of these people.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She had to wait — still to wait,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `always to wait.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She had wanted to write a Dissolution story`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `for every single inhabitant of the Kingdom`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `(how?)`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `or at least a representative cross-sample across time and space and social strata.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `And not a single story`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `came through in its right shape.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
const DISSOLUTION_SUNRISE: TextEntry[] = [
  {
    words: `looked at the sign`,
    format: 'random',
  },
  {
    words: `those nightmares where you always fail`,
    format: 'random',
  },
  {
    words: `dim purplish blue`,
    format: 'random',
  },
  {
    words: `in fetal position`,
    format: 'random',
  },
  {
    words: `no watch`,
    format: 'random',
  },
  {
    words: `the inexplicable self-destructiveness of dreams`,
    format: 'random',
  },
  {
    words: `a dead end`,
    format: 'random',
  },
  {
    words: `memorizing sequences of turns`,
    format: 'random',
  },
  {
    words: `(ha-ha) labyrinthine`,
    format: 'random',
  },
  {
    words: `dictates of that sign`,
    format: 'random',
  },
  {
    words: `untrustworthy anger`,
    format: 'random',
  },
  {
    words: `flock of eagles`,
    format: 'random',
  },

];

const SYMBOLS_MORNING: TextEntry[] = [
  {
    words: `Symbols were sometimes counterpoised against allegory —`,
    format: 'paragraph',
  },
  {
    words: `supposedly, symbols partook of what they meant rather than`,
    format: 'paragraph',
  },
  {
    words: `(supposedly)`,
    format: 'paragraph',
  },
  {
    words: `being a sterile intellectual exercise.`,
    format: 'paragraph',
  },
  {
    words: `Symbols were hard to pin down, perhaps possessed of deep psychological or metaphysical meaning.`,
    format: 'paragraph',
  },
  {
    words: `Jennie — like the critics — did not buy the distinction.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Allegory (whether you meant by that, as J meant, something where abstractions walked around wearing names,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `or whether you meant any narrative with a sustained second layer of meaning)`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `at its best held both depth and play.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Her ideas for an allegory had been eclipsed, but she was left with the idea that she would find symbols.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Her mind was full of associations and colors and meanings waiting to be unearthed —`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and she had tired of waiting for them to emerge on their own.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `The first symbols were simple.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Firebirds — yes.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Even as a very young girl, she’d drawn them, elongated, shapeless red phoenix-things.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `The sun and the moon and the stars, as well as great trees,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `had haunted her pen all her life.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `She read studies listing the emergent symbols in poets’ work;`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `she observed them in the poets she translated.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `So she began to work out her own list —`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `she would let them mean what they chose to mean and sprinkle them among other modes of creation.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `She drew on the natural world.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `She checked out books of symbols, on the language of flowers, on superstitions,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `but she did not get far.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `She gave up, ashamed that she, for all her inspiration, should be drawing on others’ systems`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `and trying to insert into her work depth that would not otherwise be there.`,
    format: 'paragraph',
    paragraph: 6,
  },
];
const SYMBOLS_MIDDAY: TextEntry[] = [
  {
    words: `♦`,
    format: 'random',
  },
  {
    words: `♥`,
    format: 'random',
  },
  {
    words: `🃏`,
    format: 'random',
  },
  {
    words: `🌹`,
    format: 'random',
  },
  {
    words: `🌾`,
    format: 'random',
  },
  {
    words: `🌳`,
    format: 'random',
  },
  {
    words: `🍇`,
    format: 'random',
  },
  {
    words: `✋`,
    format: 'random',
  },
  {
    words: `♾`,
    format: 'random',
  },
  {
    words: `🌜`,
    format: 'random',
  },
  {
    words: `☀`,
    format: 'random',
  },
  {
    words: `🐦`,
    format: 'random',
  },
  {
    words: `🎶`,
    format: 'random',
  },
];

const AURAS_SUNSET: TextEntry[] = [
  {
    words: `Some few weeks after Jennie’s birthday, Sonia claimed to have blue as her primary aura color based on a quiz.`,
    format: 'paragraph',
  },
  {
    words: `Jordan was a skeptic, Delaney  bubblingly fascinated.`,
    format: 'paragraph',
  },
  {
    words: `S.L. half-bought it and had strong intuitions about everyone’s aura colors —`,
    format: 'paragraph',
  },
  {
    words: `Though Jennie could imagine something other than skin and hair and clothes,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `she did not like the systems that sprang up around colors;`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `her own perceptions were, when she paid attention, metaphorical along those lines but more complex.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She felt a little sad listening to S.L.’s laughing aura readings.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Once again, S.L. did the thing she, Jennie, did, but faster and lighter and more colorfully.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
const AURAS_DUSK: TextEntry[] = [
  {
    words: `S.L. turned on her and said, “I don’t know about you. I — I don’t feel much of anything.”`,
    format: 'paragraph',
  },
  {
    words: `“Yeah, there are lots of different pieces,” Jennie said. “I think I’m more receptive than anything.”`,
    format: 'paragraph',
  },
  {
    words: `“That’s called Crystal,” said Sonia. “I could see it.”`,
    format: 'paragraph',
  },
  {
    words: `And, for a day or two, Jennie saw in color:`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Delaney laughed a pink, bubbling laugh and burbled off —`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Sonia looked a little pained and serious, a field of the high, clear sky-blue light,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `sun coming through pure and white,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `rippling into an awkward non-Duchenne laugh.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `S.L. listened,  abstract and restless —`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `their attention was poppy print, black and magenta and red and yellow and turquoise,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `in a fiery aesthetic alien to Jennie’s.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Jordan, tans and browns outlined in sharp black, in angles like triangles, quiet and understated except for the red of a wound,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `said, “Unscientific, I’m a what you can see and touch kind of girl.”`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `What would healing mean for such a wound?`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: ` Was it wanted?`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Jordan used red in her to create and act and give herself a fierceness of identity.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `It came at a price, but was perhaps worth it.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Kay came over at this, and Jennie admired at first the humanity of him —`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `she saw him in appropriate skin tones, backed by the same exacting ink-blue or -black thing of fierce intellect and awareness of darkness.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `He was the wizard in the tower, calling down lightning in the black night.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `All definition where S.L. had none.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie smiled, happy to remember what lay under her more usual way of seeing.`,
    format: 'paragraph',
    paragraph: 4,
  },
];

const JENNIE_MIRROR_SUNSET: TextEntry[] = [
  {
    words: `Jennie painted herself as a child looking at herself in the mirror with —`,
    format: 'paragraph',
  },
  {
    words: `was that Celeste on the right with the golden hair and the floral print?`,
    format: 'paragraph',
  },
  {
    words: `The Lady, perhaps, or some enchantress?`,
    format: 'paragraph',
  },
  {
    words: `Perhaps she was It, the Firebird, He.`,
    format: 'paragraph',
  },
  {
    words: `Jennie rather thought so.`,
    format: 'paragraph',
  },
];
const JENNIE_MIRROR_DUSK: TextEntry[] = [
  {
    words: `Jennie had fallen behind that child.`,
    format: 'paragraph',
  },
  {
    words: `She had a job now, but even there —`,
    format: 'paragraph',
  },
  {
    words: `she was delicate, she could not work as hard or bring herself to do the gross things`,
    format: 'paragraph',
  },
  {
    words: `or the things that came with lots of responsibility,`,
    format: 'paragraph',
  },
  {
    words: `let alone fulfill her responsibilities at home.`,
    format: 'paragraph',
  },
  {
    words: `There was darkness and coldness in her.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `When she painted this, she entered it.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She stood outside the door, looking at her child self gazing into that mirror.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She was other than human, gnarled, a monstrous black tree.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Jennie remembered then sensing a terror behind her,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and Lady had comforted her.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
// make a minigame??
const CHAIN_LINK_SKY_NIGHT: TextEntry[] = [
  {
    words: `Jennie wanted not just the chaos of earthly things.`,
    format: 'paragraph',
  },
  {
    words: `She wanted the complex orchestrated harmony`,
    format: 'paragraph',
  },
  {
    words: `of the skies.`,
    format: 'paragraph',
  },
  {
    words: `Try as she might, though, she could not get a sky she liked.`,
    format: 'paragraph',
  },
  {
    words: `These skies were only fragments, peripheries,`,
    format: 'paragraph',
  },
  {
    words: `and nearly impossible to get right.`,
    format: 'paragraph',
  },
];
const CHAIN_LINK_SKY_WEE_HOURS: TextEntry[] = [
  {
    words: `Colors, a chain link fence against the night sky;`,
    format: 'paragraph',
  },
  {
    words: `she climbs the links of cast iron.`,
    format: 'paragraph',
  },
  {
    words: `She meets shapes in their surfaces like faces, but too empty.`,
    format: 'paragraph',
  },
  {
    words: ``,
    format: 'paragraph',
  },
  {
    words: `She hears someone else climbing, above or behind or before,`,
    format: 'paragraph',
  },
  {
    words: `but they do not answer when she calls —`,
    format: 'paragraph',
  },
  {
    words: `though her voice echoes in a way the space does not explain.`,
    format: 'paragraph',
  },
  {
    words: `Between them are the shapes of four-pointed stars.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `From a sufficient distance, Jennie supposes,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `they would look like real stars.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `The rough iron hurts her hands,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `but she is weightles and can climb with little effort.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She would like to swim the blue, but she fears.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `When she comes to the edge of the cube, she hesitates and then strides out,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `crossing swathes of blue until she comes to the gray of the stars and it is —`,
    format: 'paragraph',
    paragraph: 2,
  },
];
const CHAIN_LINK_SKY_DAWN: TextEntry[] = [
  {
    words: `just desolation.`,
    format: 'paragraph',
  },
  {
    words: `The bit of sky is too small and false to return to.`,
    format: 'paragraph',
  },
  {
    words: `She trudges on.`,
    format: 'paragraph',
  },
  {
    words: `The vision there is not hers.`,
    format: 'paragraph',
  },
];

const COSMIC_EGG_SUNRISE: TextEntry[] = [
  {
    words: `And it was the Love —`,
    format: 'paragraph',
  },
  {
    words: `not that obliterated all else but that gave birth to it,`,
    format: 'paragraph',
  },
  {
    words: `and if all else died into it,`,
    format: 'paragraph',
  },
  {
    words: `it died into them too, and altogether`,
    format: 'paragraph',
  },
  {
    words: `love was the root and beginning and end of all that was.`,
    format: 'paragraph',
  },
];
const COSMIC_EGG_MORNING: TextEntry[] = [
  {
    words: `The painting after that was the firebirds abstract only too much so.`,
    format: 'paragraph',
  },
  {
    words: `There were butterfly stickers.`,
    format: 'paragraph',
  },
  {
    words: `It was hard to photograph;`,
    format: 'paragraph',
  },
  {
    words: `the light glinted off every bit —`,
    format: 'paragraph',
  },
  {
    words: `glitter and metallic paint, jewellike stickers and white and yellow.`,
    format: 'paragraph',
  },
  {
    words: `The one radiance she failed to add was that of clarity, order, and image.`,
    format: 'paragraph',
  },
  {
    words: `At the extremes, the sublime turned to bathos.`,
    format: 'paragraph',
  },
  {
    words: `She did not show this one to anyone.`,
    format: 'paragraph',
  },
];

const BIRTHDAY_AFTERNOON: TextEntry[] = [
  {
    words: `“Yeah, twenty-seven,” Jennie said to Kay on the other till`,
    format: 'paragraph',
  },
  {
    words: `as she cleaned the last hardcover’s dust jacket with a shop towel.`,
    format: 'paragraph',
  },
  {
    words: `Her voice bounced coolly.`,
    format: 'paragraph',
  },
  {
    words: `When manager Gabe finished dinner, she could leave; it’d be five,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `ten minutes.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Take the bus to the library.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She shifted from foot to foot.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Her legs ached.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She wanted to write.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `This was an itch or burning, almost emotion.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She could tell actually doing it would be hard.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She added, “Halfway through this vale of tears.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Though Keats called it the vale of soul-making, or something like that.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Happy birthday to me.”`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `“Oooh, Keats, very nice,” her coworker said, grinning,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `all amiable sarcasm.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `“I can’t stand literature, you’d think I’d like it,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `but I’m a dyed-in-the-wool fantasy reader. I hate birthdays.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Wanna guess mine?”`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `“Nah,” Jennie said. “I think Facebook already told me.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `I never log in, but I get all the emails.”`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `She smiled. “I’m rereading Lord of the Rings, and it’s disappointing this time around.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `There’s beauty, but it’s so simple and flat.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `I think you’d like Keats, though. Have you read ‘La Belle Dame sans Merci’?”`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `“Yes, that’s a good one.”`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `“It’s your birthday?” put in manager Lizzie from the other side`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `with a wicked grin.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `“Happy birthday. How come you didn’t tell us? Go get hammered.”`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `“Thanks,” Jennie said.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `She never knew what to say to this wild-haired Lizzie,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `with her bleached perm and tendency to punch Jennie in the arm.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Everything Jennie said spontaneously was clearly “off” in this woman’s eyes,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `but the woman showed every sign of finding Jennie cute.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Jennie was admiringly afraid of her.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `As if on cue, Gabe appeared.`,
    format: 'paragraph',
    paragraph: 7,
  },
];
const BIRTHDAY_SUNSET: TextEntry[] = [
  {
    words: `After a nap, Jennie woke to “The Big Rock Candy Mountains”`,
    format: 'paragraph',
  },
  {
    words: `on a radio she had not realized she’d left on.`,
    format: 'paragraph',
  },
  {
    words: `She made a little drawing: funny, cute, full of a longing that didn’t insist on understanding —`,
    format: 'paragraph',
  },
  {
    words: `Then she hated the drawing and curled up in the chair`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and neither slept nor waked the rest of that night but lay thinking of nothing.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Or perhaps she saw those stars, shining sickly sweet through the pink sky, everything made of candy (or alcohol,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `though this was the children’s version).`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `If she did, she remembered only an acid taste at the back of her mouth.`,
    format: 'paragraph',
    paragraph: 1,
  },
];

const LIKENESSES: TextEntry[] = [
  {
    words: `Realistic portraiture without a model disappoints,`,
    format: 'paragraph',
  },
  {
    words: `stylized but neither intentionally nor expressively.`,
    format: 'paragraph',
  },
  {
    words: `Drawing from the imagination improves when you seek a less tangible likeness.`,
    format: 'paragraph',
  },
  {
    words: `The fire of her character Karen was an interloper in the world of schemata,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `the world of Verna, where local detail came out to global madness with a defamiliarizing truth of its own.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `The world’s master sat in a tree, colorless save for a light in her eyes.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `The other, the fire, walked more hesitantly than usual, or, rather,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `with an alternation of boldness and reticence.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Fire was more human (perhaps superhuman).`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Fire’s rage would scorch, so fire stepped gingerly,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and the world closed around it rather than vice versa, in a criminal wrong.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Its reluctance was its doom before the schemata.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `The truth of the heart falls to the madness of the mind?`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `The true madness of the heart falls to the true but different madness of the mind?`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie felt miserable for both of them, for fire and mind,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `for Karen’s goodwill and Verna’s cold, strange, and equal goodwill,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `and the horror goodwill would wreak on both.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Karen began life as a stereotype: the protector among the personalities Jennie and Jenny wrote —`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `a vigorous warmth, whose interiority belonged, most likely,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `to the good-hearted, brave, and loving tomboys of the fantasy books of our youth and young adulthood.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Karen — among Jennie’s four on the island — likes wild roses,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `which grow in the mountains where she grew up.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `The wild rose has a blossom of uncommon delicacy and fragrance`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `that lasts two weeks a year.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Otherwise, this plant,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `native across North America as well as the nameless Kingdom from which  Karen hails,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `is about the thorns and the unpalatable but health-giving fruit —`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `at least if you’re not an aesthetically obsessed human…`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Roses: in Eden or whatever state of mythic bliss you prefer,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `they were thornless and immortal,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `but now they bite and they die.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Emma is, say, a cultivated rose, layered and tended, perhaps golden.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Verna is more of the mineral than the vegetable world —`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `but call her a lily, bloom of poisonous purity.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Jennie is the flowers, all and without exception, and the fruit too —`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `but especially the amaranth (humble immortality).`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Verna stabbed Karen to death`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `(a kindly meant murder based on an oversimplification),`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `but Karen is the one with violence in her, born of strong simplicity.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `Karen is the one who struck her classmates with rage`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `when they were cruel to Verna and Verna stared blankly.`,
    format: 'paragraph',
    paragraph: 8,
  },
];
const ROSE_KNIGHT_DEATH_NIGHT: TextEntry[] = [
  {
    words: `One August evening, Jennie, exhausted from failing to write an article pitch`,
    format: 'paragraph',
    paragraph: 0,
  },
  {
    words: `or Verna’s murder of Karen,`,
    format: 'paragraph',
    paragraph: 0,
  },
  {
    words: `longed for the sticky summer twilight and the hiss of sprinklers outside.`,
    format: 'paragraph',
    paragraph: 0,
  },
  {
    words: `Instead, she huddled in a blanket.`,
    format: 'paragraph',
    paragraph: 0,
  },
  {
    words: `Mom kept the air conditioning higher than ever;`,
    format: 'paragraph',
    paragraph: 0,
  },
  {
    words: `Jennie disliked late summer days even more than Mom did,`,
    format: 'paragraph',
    paragraph: 0,
  },
  {
    words: `but false cold made heat worse.`,
    format: 'paragraph',
    paragraph: 0,
  },
  {
    words: `August made everything worse, but the problem was Karen.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Karen was, all these years after childhood, lost.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Jennie hardly remembered her warmth, and not as something you lived inside.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Still, Jennie typed. She sketched. She turned out the lights`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and added linework in the fading twilight while Mom and Dad slept.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Eventually, she shoved laptop and sketchpad under her bed and rolled onto her belly.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She was not miserable, as she might have been as a teen,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `nor terrified, as she might have been as a child.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `But sleep was miles away.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Why, she asked her pillow in an emotionless ghost of regret,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `should elsewhere allow her to lose what little she had had of Karen,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `either the literal character or the warmth and courage she represented?`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Verna thought Evernost was evil and lying.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `In the story, Verna was wrong.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Elsewhere would melt Verna.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Readers, though, would ask, and surely Jennie should ask:`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `what if Verna was right, and Jennie was wrong?`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Jennie could rarely take this fear seriously, but she could not lay it to rest.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `There were terrible things about elsewhere, Madeline not least of them,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `and it sounded like any fae enchantment, untrustworthy at best,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `at worst another name for hell.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `What if the joy was a lie,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `or came only at the expense of others’ pain,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `or was otherwise wrong to the root?`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Most damning was Mom. Ever since Jennie had returned from elsewhere at thirteen`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `(Mom and physical records and sometimes even Jennie’s own memory`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `said she’d been home all along),`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Mom had hated the elsewhere Jennie described.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `It was like the beautiful magic in books —`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `the bad characters hated it and the good characters loved it —`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `but even though Jennie and Mom did not like each other,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Jennie was the worse of them.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `So Jennie did not discuss elsewhere, and —`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Mom let her make the art of elsewhere.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Jennie felt guilty, but not guilty enough to stop.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Mom and Dad both admitted now that Jennie could draw, could write.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Jennie tried to defend elsewhere.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `Jennie’s reconstructive efforts made Karen dull and monstrous,`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `but they were more interesting than the original.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `Without heart, Jennie had, Vernalike, to find other channels for understanding.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `Jennie guessed at Karen’s interiority in textures:`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `bright colors and harsh, wrong shapes`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `against the wild, comfortable grandeur of the country where Karen had grown up.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `Jennie was not sure Karen was not a clearer vision of her mother`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `than the Jacqueline for whom Jennie did her best every day.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `But her itching mind was not done answering.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `Verna returned to Jennie’s thoughts.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `Verna was different and smaller than when Jennie had conceived her —`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `but not, like Karen, gone.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `When Mom had explained heaven to three-year-old Jennie after a great-grandfather’s death,`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `Jennie had asked why anyone stayed on earth.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `Why shouldn’t everyone just die?`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `Mom had given some sharp non-answer, then laughed about it with her friends.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `At twenty-seven, Jennie still had no answer that felt true.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `And so, at fourteen, Verna had killed Karen.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `Elsewhere suggested it was the magnanimous thing in her,`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `Karen, who believed that not just she but everyone deserved what Jennie had known.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `In a strange reversal, had Karen-in-Jennie died because it was Karen —`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `protective, loving warmth —`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `that wanted to give people elsewhere, just as it was Verna — moral terror —`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `that killed her?`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `that killed her?`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `Jennie saw Mom in bed, haggard, no makeup, comforter half-off,`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `broad-shouldered, thin, bony in her silky nightgown.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `Dad was curled up on the other side of the bed, snoring lightly,`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `but Mom couldn’t sleep.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `Her eyes were open, fixed on the ceiling in a glare —`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `ruminating like Jennie was, only about whether that spot on the ceiling was a spider or dirt.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `She was considering climbing on a ladder to get it off.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `Give her to me now, elsewhere said.`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `Jennie could not tell if it was an order or a dare or a joke.`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `Half-against her own will, Jennie sought the perilous fire in herself.`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `Love, she always felt.`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `No. She turned away.`,
    format: 'paragraph',
    paragraph: 13,
  },
  {
    words: `Surely it was at least permissible to try to send people elsewhere with words?`,
    format: 'paragraph',
    paragraph: 14,
  },
  {
    words: `With a poem or a story crafted to enchant?`,
    format: 'paragraph',
    paragraph: 14,
  },
];
const ROSE_KNIGHT_DEATH_WEE_HOURS: TextEntry[] = [
  {
    words: `Spectrous, Karen stood at the foot of Jennie’s bed,`,
    format: 'paragraph',
  },
  {
    words: `hair of actual flames.`,
    format: 'paragraph',
  },
  {
    words: `Karen smiled a cold, bitter smile.`,
    format: 'paragraph',
  },
  {
    words: `“If you want elsewhere, take it.`,
    format: 'paragraph',
  },
  {
    words: `It’s for you. It’s not for me.”`,
    format: 'paragraph',
  },
  {
    words: `Karen turned away and faded to nothing.`,
    format: 'paragraph',
  },
  {
    words: `“Come back!” Jennie cried.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `And something in her broke.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Honey-haired Emma stood watching in the same kind of white shift.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Tears ran down her face.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `She began to shudder and blur.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Verna clung to Jennie.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `She was immaterial, a thing of cold gray light,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `wavering and raving,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `stirring Jennie’s mind like a soup until nothing was left of it but soup.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `It was 3 am.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `The darkness opened up into primeval darkness.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Jennie felt nothing.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Karen always died.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Jennie hoped she was the luckiest of these mind-puppets,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `who, in the end, would return and receive her reward;`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `blessed were they who mourned.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Comfort always came after such struggles, though paler each time.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Jennie would feel better in the morning.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `She would chase again after vision, coldly but happily.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `She would still have no job.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `She would still have done nothing worth doing.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Karen’s refusal of Evernost taunted her.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Jennie felt she must turn away.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Was it just selfishness making her reject,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `damnable selfishness, where Karen was selfless?`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `The desire to mourn and be comforted?`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Did it matter, if it was right?`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Was rejecting elsewhere right?`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Jennie shut the door that opened on elsewhere in her mind.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `Darkness became that of a basement bedroom`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `lit by street lamps and a green electric clock.`,
    format: 'paragraph',
    paragraph: 8,
  },
];
const MERE_REALITY_DAWN: TextEntry[] = [
  {
    words: `Jennie woke up.`,
    format: 'paragraph',
  },
  {
    words: `The bedside lamp was yellow.`,
    format: 'paragraph',
  },
  {
    words: `The light through the shades was bluish.`,
    format: 'paragraph',
  },
  {
    words: `She had a headache from crying.`,
    format: 'paragraph',
  },
  {
    words: `She did not remember crying.`,
    format: 'paragraph',
  },
  {
    words: `Her nose was stuffed.`,
    format: 'paragraph',
  },
  {
    words: `She looked at her altar, the bird with the sapphire eye`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and the drawings and the clay statues and the red cloth.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She should chuck it all if she  really wanted elsewhere out of her life.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She didn’t want to explain to Mom, though.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She threw an afghan from the closet over the altar and wrote all morning,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `work stuff,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `state history articles.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She got more done than most mornings.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
const MERE_REALITY_SUNRISE: TextEntry[] = [
  {
    words: `If she refused elsewhere, perhaps she had an obligation to mere reality.`,
    format: 'paragraph',
  },
  {
    words: `At two that afternoon, she started sketching.`,
    format: 'paragraph',
  },
  {
    words: `By dinnertime, there was a dog.`,
    format: 'paragraph',
  },
  {
    words: `Over the next few weeks, she filled almost a sketchbook with real things`,
    format: 'paragraph',
  }
]
const MERE_REALITY_AFTERNOON: TextEntry[] = [
  {
    words: `The image of fall came to Jennie before fall.`,
    format: 'paragraph',
  },
  {
    words: `It was still hot. The storms still came in the afternoon,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `but they rarely brought rain.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `The sky grew hazy.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `The night Jennie found fall online, she was painting in her bed,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and the colors were too much, fiery gold and red, reflected,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `and she could not remain faithful to mere reality.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Not even to mere reality, her mind chided her, and hope bristled:`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `she was allowed to be faithful, commanded to be faithful,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `not to mere reality but to more.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Yellow flames —`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `reflections in a mountain lake in a photograph on a computer screen —`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `cut through the dullness and doused the fever.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `gratefully inconstant as the moon,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `turned to deeper things.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `And, from nowhere — or elsewhere — the scent of mown grass and sprinkler water and hot evening`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `came through the scent of fabric softener.`,
    format: 'paragraph',
    paragraph: 4,
  },
];
const FALL_SUNSET: TextEntry[] = [
  {
    words: `The flames of the trees reflected flamingly in the water —`,
    format: 'paragraph',
  },
  {
    words: `water, fire, and a flame kindled not by heat but by the falling temperatures of autumn.`,
    format: 'paragraph',
  },
  {
    words: `The tree was not —`,
    format: 'paragraph',
  },
  {
    words: `the image was not —`,
    format: 'paragraph',
  },
  {
    words: `in any way real, except with the reality of the heart, though it came from a reference.`,
    format: 'paragraph',
  },
  {
    words: `It was a picture of the heart, of flame and love and relief.`,
    format: 'paragraph',
  },
  {
    words: `The tree might have borne the apples of the Hesperides,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `but it did not — it was just a tree, over water, and the apples were beyond,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and, impatient, Jennie surged past and through the water and air and fire and earth to reach them.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Jennie grew wings, as she had once grown wings in the spring,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `but fierce and vast, not merely the wings of a dove or a robin.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Aquiline she soared through images into fire.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Winged light met her — and departed.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Departure was as much of the autumn as was longing.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `The light was not presence, it was a flash of departing radiance against the world,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `illuminating it and disappearing, leaving Jennie to chase after on dark wings against a dark sky.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `A dark sky — but not the dark of winter.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `The dark of twilight, hot as the air was cold in its blue`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `after-sunset glow, some bit of red still fading in the west`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `as the leaves of the tree faded and fell.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie wrote of those who faded too, with the leaves,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `of a bird trapped out in a nightmare of night, losing limbs and self.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie did not lose herself yet.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `She was too large and fierce and strong,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `and she rushed onward through rain and clouds.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `I think she reached her goal but she would not remember it,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `falling back at once to her earthly self, her earthly body,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `but with the relief and doused-with-exhilarating-cold-water satisfaction of knowing that she had achieved,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `once again, what had so long been gone.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Warm, curled up inside, by the fire, or, if not by the fire, by the incandescent lamp in her cozy basement room,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `with art supplies, pencils and pens and watercolors while the autumn wind beat against the window-well window,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `she smiled with relief and release.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `She drew — something, a tree reflected in a lake,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `and sank into sleep as her other self, her earthly self struggled upward to take her place,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `but no easy struggle would that be.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Her earthly self was a sad story of perpetual missed connections`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `(makes the having sweeter?).`,
    format: 'paragraph',
    paragraph: 6,
  },
];
const MERE_REALITY_DUSK: TextEntry[] = [
  {
    words: `Yes, the last day of August, Jennie turned back to Evernost.`,
    format: 'paragraph',
  },
  {
    words: `But the empirical and prosaic story`,
    format: 'paragraph',
  },
  {
    words: `of the Kingdom revolted her. It always had —`,
    format: 'paragraph',
  },
  {
    words: `not, perhaps, when she was ten, but certainly by the time she was twenty.`,
    format: 'paragraph',
  },
  {
    words: `She must give up —`,
    format: 'paragraph',
  },
  {
    words: `not what she loved but the impediments to it.`,
    format: 'paragraph',
  },
  {
    words: `Leaf-fire on a lake`,
    format: 'paragraph',
  },
  {
    words: `was more like what she loved than that artificial plot.`,
    format: 'paragraph',
  },
  {
    words: `What was still more like —`,
    format: 'paragraph',
  },
  {
    words: `she could not say, any more than she ever had been able to,`,
    format: 'paragraph',
  },
  {
    words: `but she was going to try.`,
    format: 'paragraph',
  },
]

const MAN_IN_THE_MOON: TextEntry[] = [
  {
    words: `That night in bed,`,
    format: 'paragraph',
  },
  {
    words: `she begged in whispers as that fiery reflection caught her again and again in her mind:`,
    format: 'paragraph',
  },
  {
    words: `“Come back! Come back!”`,
    format: 'paragraph',
  },
  {
    words: `he knew nothing more, and no one and nothing came,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `until the Man in the Moon slipped through the crack in her window.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `The Man in the Moon was tall and wore a pastel blue trench coat dusted with yellow stars`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `over a dirty white suit.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `His face was pale and pockmarked and bald, like the moon’s face.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `His eyes were large and round and purplish-blue.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `He was not at all like a human being.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Jennie did not want him there.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `“Of reflected light I am,” he told her,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `“And not much to love, but more than this, or so you’d tell me.”`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `He threw up his hands. The house and the bedroom and the world peeled away like old paint,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `leaving Jennie standing before him on dirt,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `still wearing nothing but the huge old tee shirt she wore in bed,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `the one with the turquoise fish.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `“Ride the skies with me tonight?” he asked.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `“Fish the star-pearls out of the space-sea?”`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Jennie saw a falseness in him, a thick, iridescent soapy strangeness`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `that was the strangeness of a dream,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `and almost did not go.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `But he tossed her Mom’s broom from the storeroom and shot up into the periwinkle night sky from the indeterminate earth.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `After a moment’s confusion — oh, it was supposed to be a witch’s broom —`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `she climbed astride the broom and followed.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Soon the thin paleness of the sky began to tire Jennie,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `and she knew she had lost herself even before she landed on the the moon`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `and found it made of sticky white cheese,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `and the Man in the Moon asked her to let him in with his do-me-ama-dingy-ama-do-me-ama-day,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `like Jack Tar in the ballad.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Jennie got the reference, but she did not want the Man in the Moon in her metaphorical pants.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `He laughed a rude laugh, and she was sitting in a basket, holding the broom in her hands now,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `and he threw the basket up like a frisbee,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `calling out as she hurtled off,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `There was an old woman tossed up in a basket`,
    format: 'random',
  },
  {
    words: `Nineteen times as high as the moon;`,
    format: 'random',
  },
  {
    words: `Jennie laughed.`,
    format: 'paragraph',
    paragraph: 7,
  },
];

const STARS: TextEntry[] = [
  {
    words: `This sky, though it got darker and more real as she got higher, also got lonelier and colder.`,
    format: 'paragraph',
  },
  {
    words: `She swept off — many cobwebs, as his nursery rhyme said,`,
    format: 'paragraph',
  },
  {
    words: `but she knew then what she sought was elsewhere, not cold whimsy.`,
    format: 'paragraph',
  },
  {
    words: `Then she saw she was elsewhere, deep elsewhere,`,
    format: 'paragraph',
  },
  {
    words: `and the cold of the sky and the Man in the Moon went into her bones,`,
    format: 'paragraph',
  },
  {
    words: `and though she was far from heat, she was somewhere she wanted to be,`,
    format: 'paragraph',
  },
  {
    words: `closer than those dogs and men and women she had drawn —`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She laughed — cackled, even.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She saw the cobwebs were chains,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `and she was sweeping them away with supernatural strength,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `hers only through ignorance, a strength she lost upon examining them.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `But the basket carried her up and up, until she became so tangled in icy chains and night she could not move or think.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `She lay suspended, chains digging into her flesh,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `chains (she thought) crossing even through her limbs,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `for some hours, or some days, or some weeks.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Around her — the stars.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Their sparkling light sang, teased her eyes, pierced her like knives.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `The light was of every color, of colors she had never imagined,`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `colors no waking human eye could see.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Their light was cold as chains and the vacuum of space.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `Was she a star chained?`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `There was light in her as well as outside her, stabbing `,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `through her skin from her heart and mind.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `She thought of the sweet, royal serenity of Celeste.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `She thought of the stories she’d dreamed where she and Celeste had lived together, adventured together.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `This was lightyears from any such sweetness —`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `perhaps literally lightyears —`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `but, in the story,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Celeste had been torn from the sky to live in Jennie`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `and had not found her way back yet.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Jennie opened her eyes and found herself free in her warm bed.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `She shivered and pulled her blankets closer and stared up at the dark ceiling,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `lit by streetlights and the digital clock.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `She wanted a hot shower and hot tea.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `She looked — did she have souvenirs?`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Usually after something like this she would.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `It was not good that she should leave the earth so freely;`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `she might dissolve it entirely if she were not careful —`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `but it was, barely, permitted,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `and, when she risked it, she usually got something for her pains.`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `Sure enough, her left hand closed around a broken link from the chain.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `It was as cold as if she’d just gotten it out of a freezer`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `and made of something that looked like steel.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `She turned on her bedside lamp, lifted the afghan from her altar, and put the afghan back on her bed.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `That would have to do.`,
    format: 'paragraph',
    paragraph: 8,
  },
  {
    words: `It was shortly after one in the morning, and showering would wake up her parents.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `She shivered in the air conditoning, so she slipped on a pair of sweatpants.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `The chain link was harder than steel —`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `at least, she could not reshape it with her pliers.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `She set it at the wire bird’s feet and looked into the bird’s single sapphire eye.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `It ought to be topaz or ruby, that eye.`,
    format: 'paragraph',
    paragraph: 9,
  },
  {
    words: `Perhaps she should have waited to find one of those.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `But this bird was not her bird, just a suggestion of it.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `Her bird was still distant,`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `convolutions of logic and reality between her and it.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `She returned to bed but found hard lumps under her back — pearls!`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `The largest pearl was almost as large as the sapphire.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `This pearl she seated, after a moment’s thought and a few minutes’ effort, beside the sapphire.`,
    format: 'paragraph',
    paragraph: 10,
  },
  {
    words: `The others (some twenty) she arrayed about her altar,`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `and she threw out a withered rose to make room.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `When she finished, she lit her beeswax candle and stood before it in pleasant stillness for ten sleepy minutes,`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `hungry and relieved.`,
    format: 'paragraph',
    paragraph: 11,
  },
  {
    words: `Then she blew out the candle, climbed into bed, drew the afghan from the altar around herself, and sank into a sweet daze.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `The Man in the Moon was not false or bad, though not safe and beautiful.`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `Deeper than she altogether, but if that should be, let it!`,
    format: 'paragraph',
    paragraph: 12,
  },
  {
    words: `His dirty white face came back to her and back again.`,
    format: 'paragraph',
    paragraph: 12,
  },
];
const ALIENS_II: TextEntry[] = [
  {
    words: `The light coming in Jennie’s window was too bright.`,
    format: 'paragraph',
  },
  {
    words: `Jennie went back to sleep.`,
    format: 'paragraph',
  },
  {
    words: `Jennie also floated up through the window into a saucer`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `of a substance impossibly black even in the night sky,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `reflecting no moon, no stars, no streetlights.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `There were three rubbery Grays at the helm.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `They were shorter than Jennie right now;`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `they changed size.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `The saucer changed shape.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `None of that mattered.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `The aliens did not want her for medical experiments.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `They’d learned what there was to learn.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `They’d bred enough hybrid babies`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `to help them preserve the human race and enrich their culture.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `They wanted to repay her for her trouble.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `They told her the fate of the earth, which she would not remember,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `except for this:`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Evernost, if you would, was coming.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `It would come as terror and destruction, and it would come as glory beyond all imagining.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Jesus was coming again,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `definitely figuratively,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `perhaps literally.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `They talked (as aliens are wont to do) about the environment.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `They had solutions.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Jennie would not remember the solutions.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Was the heedlessness that led us to ruin our planet shocking,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `given that it had been hell,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `given that most life could survive only by consuming other life,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `given that love had to be reinvented in the face of a hostile world?`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `The aliens discussed this with Jennie, and more.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Jennie awoke groggy, with a headache`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `and a suspicion she had lost track of something important.`,
    format: 'paragraph',
    paragraph: 6,
  },
];

const MOUNTAIN: TextEntry[] = [
  {
    words: `There is a mountain.`,
    format: 'paragraph',
  },
  {
    words: `It stands alone in a green and sunlit plain.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `Some say this plain is a desert.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `These have striven for ages to cross this desert and achieve the peak,`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `where it is said they will find the Well of All Desires.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `Most fail. They do not have eyes to see.`,
    format: 'paragraph',
    paragraph: 2,
  },
  {
    words: `The Well is indeed at the top of this mountain.`,
    format: 'paragraph',
    paragraph: 3,
  },
  {
    words: `The Well is also everywhere else,`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `for those with eyes to see.`,
    format: 'paragraph',
    paragraph: 4,
  },
  {
    words: `Light bounded up from the hard yellow dirt of the trail,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `up the lichen-covered scree,`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `up the cliffs —`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Jennie’s body was earth and joy born from earth.`,
    format: 'paragraph',
    paragraph: 5,
  },
  {
    words: `Joy circled around dewdrops making rainbows, leaped through low juniper bushes,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `met the rays of the sun and tangled — separated — joined again —`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `braided light with light.`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: ``,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `Scrub pine, lichen, pale chalk and glinting granite,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `caught joy and echoed it back, faster and faster, until it could not be borne,`,
    format: 'paragraph',
    paragraph: 6,
  },
  {
    words: `and then faster still,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `where the fountain flowed from the crack between rocks,`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `overflowed the basin (once the caldera of a volcano)`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `and watered the desert all around`,
    format: 'paragraph',
    paragraph: 7,
  },
  {
    words: `until it was a green and sunlit plain.`,
    format: 'paragraph',
    paragraph: 8,
  },
];
const RAIN: TextEntry[] = [
  {
    words: `The painting began with ambitious goals,`,
    format: 'paragraph',
  },
  {
    words: `but the proportions were odd.`,
    format: 'paragraph',
  },
  {
    words: `The colors and textures compelled her, though she would paint over most of it.`,
    format: 'paragraph',
  },
  {
    words: `The woman’s cadaverous face`,
    format: 'paragraph',
  },
  {
    words: `would eventually make Jennie repaint her into Ophelia,`,
    format: 'paragraph',
  },
  {
    words: `who would, when spring warmed, sink into the pools of the dark spaces of the garden.`,
    format: 'paragraph',
  },
  {
    words: `For now. it went into a basket of artworks that did not satisfy.`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `As Jennie bounced blandly toward her 28th year, feeling not so dull as she expected but not so deep either,`,
    format: 'paragraph',
    paragraph: 1,
  },
  {
    words: `she found it hard to work on anything, though she persevered.`,
    format: 'paragraph',
    paragraph: 1,
  },
];
const ELWEWHERE_BEYOND_ELSEWHERE: TextEntry[] = [
  {
    words: `Elsewhere beyond elsewhere,`,
    format: 'paragraph',
  },
  {
    words: `a woman descended and was the rain,`,
    format: 'paragraph',
  },
  {
    words: `surrounded by what was the rain and the sun and the water gushing up from the aquifers, all`,
    format: 'paragraph',
  },
  {
    words: `Rain and light and springs`,
    format: 'paragraph',
  },
  {
    words: `fed the earth until it grew an ocean.`,
    format: 'paragraph',
  },
  {
    words: `The island, also the woman, began to breathe;`,
    format: 'paragraph',
  },
  {
    words: `death changed to sleep.`,
    format: 'paragraph',
  }
];



export interface TextTime {
  typeName: 'text';
  words: TextEntry[];
  image: ImagePathAndAltText;
}

export interface MazeTime {
  typeName: 'maze';
}

export interface WalkTime {
  typeName: 'walk';
  images: ImagePathAndAltText[];
  backgroundImages: ImagePathAndAltText[];
}

export interface UpAndDownTime {
  typeName: 'upAndDown'
  up: WalkTime;
  down: TextTime;
}

export type MountainTime = TextTime | MazeTime | WalkTime | UpAndDownTime;

export interface MountainDay {
  weeHours?: MountainTime;
  dawn?: MountainTime;
  sunrise?: MountainTime;
  morning?: MountainTime;
  midday?: MountainTime;
  afternoon?: MountainTime;
  sunset?: MountainTime;
  dusk?: MountainTime;
  night?: MountainTime;
}

export const MOUNTAIN_SCHEDULE: MountainDay[] = [
  {},
  {
    afternoon: {
      typeName: 'text',
      words: FACELESS_AFTERNOON,
      image: MOUNTAIN_IMAGES.faceless,
    },
    sunset: {
      typeName: 'text',
      words: FACELESS_SUNSET,
      image: MOUNTAIN_IMAGES.faceless,
    },
    dusk: {
      typeName: 'text',
      words: FACELESS_DUSK,
      image: MOUNTAIN_IMAGES.faceless,
    }
  },
  {
    dawn: {
      typeName: 'text',
      words: MIRRORS_DAWN,
      image: MOUNTAIN_IMAGES.terror,
    },
    sunrise: {
      typeName: 'text',
      words: MIRRORS_SUNRISE,
      image: MOUNTAIN_IMAGES.terror,
    },
    morning: {
      typeName: 'text',
      words: MIRRORS_MORNING,
      image: MOUNTAIN_IMAGES.terror,
    },
    midday: {
      typeName: 'text',
      words: MIRRORS_MIDDAY,
      image: MOUNTAIN_IMAGES.terror,
    },
    afternoon: {
      typeName: 'text',
      words: MIRRORS_AFTERNOON,
      image: MOUNTAIN_IMAGES.terror,
    },
  }, // add other images to mirrors?
  {},
  {
    midday: {
      typeName: 'maze',
    },
    afternoon: {
      typeName: 'maze',
    },
    sunset: {
      typeName: 'maze',
    },
    dusk: {
      typeName: 'maze',
    },
    night: {
      typeName: 'maze',
    },
  },
  {
    weeHours: {
      typeName: 'maze',
    },
    dawn: {
      typeName: 'maze',
    },
    sunrise: {
      typeName: 'maze',
    },
    morning: {
      typeName: 'maze',
    },
  },
  {
    dawn: {
      typeName: 'walk',
      images: [MOUNTAIN_IMAGES.stickwalk0, MOUNTAIN_IMAGES.stickwalk1, MOUNTAIN_IMAGES.stickwalk2],
      backgroundImages: [MOUNTAIN_IMAGES.groundbg0, MOUNTAIN_IMAGES.groundbg1, MOUNTAIN_IMAGES.groundbg2],
    },
    sunrise: {
      typeName: 'walk',
      images: [MOUNTAIN_IMAGES.sketchwalk0, MOUNTAIN_IMAGES.sketchwalk1, MOUNTAIN_IMAGES.sketchwalk2],
      backgroundImages: [MOUNTAIN_IMAGES.groundbg3, MOUNTAIN_IMAGES.groundbg4, MOUNTAIN_IMAGES.rocksbg0],
    },
    morning: {
      typeName: 'walk',
      images: [MOUNTAIN_IMAGES.walk0, MOUNTAIN_IMAGES.walk1, MOUNTAIN_IMAGES.walk2],
      backgroundImages: [MOUNTAIN_IMAGES.rocksbg1, MOUNTAIN_IMAGES.rocksbg2, MOUNTAIN_IMAGES.rocksbg3],
    },
    midday: {
      typeName: 'walk',
      images: [MOUNTAIN_IMAGES.walkdetail0, MOUNTAIN_IMAGES.walkdetail1, MOUNTAIN_IMAGES.walkdetail2],
      backgroundImages: [MOUNTAIN_IMAGES.rocksbg4, MOUNTAIN_IMAGES.hillsbg0, MOUNTAIN_IMAGES.hillsbg1],
    },
    afternoon: {
      typeName: 'walk',
      images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
      backgroundImages: [MOUNTAIN_IMAGES.mountainbg],
    },
    sunset: {
      typeName: 'walk',
      images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
      backgroundImages: [MOUNTAIN_IMAGES.upordownbg],
    }, // UP OR DOWN
  }, 
  {},
  {
    morning: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.hand0, MOUNTAIN_IMAGES.hand1],
        backgroundImages: [MOUNTAIN_IMAGES.oldgoldbg0, MOUNTAIN_IMAGES.oldgoldbg1],
      },
      down: {
        typeName: 'text',
        words: OLD_GOLD,
        image: MOUNTAIN_IMAGES.room,
      }
    } // old gold
  },
  {
    midday: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: TRYING,
        image: MOUNTAIN_IMAGES.room,
      } // trying
    },
    afternoon: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.leftfoot, MOUNTAIN_IMAGES.rightfoot],
        backgroundImages: [MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg],
      },
      down: {
        typeName: 'text',
        words: SPRING_AND_EMMA,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // Spring & Emma
    sunset: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: DRAFT_EMMA_SUNSET,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // emma draft
    dusk: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: ALIENS,
        image: MOUNTAIN_IMAGES.room,
      } // Aliens I
    },
  },
  {
    dawn: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: DRAFT_EMMA_DAWN,
        image: MOUNTAIN_IMAGES.room,
      }
    },
    sunrise: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: DRAFT_EMMA_SUNRISE,
        image: MOUNTAIN_IMAGES.room,
      }
    },
    morning: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.leftfoot, MOUNTAIN_IMAGES.rightfoot],
        backgroundImages: [MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg],
      },
      down: {
        typeName: 'text',
        words: DRAFT_EMMA_MORNING,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // emma draft all three
    midday: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: EMMA_DONE,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // emma draft complete, first promontory
    afternoon: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [SHARED_IMAGES.noImage],
        backgroundImages: [MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg],
      },
      down: {
        typeName: 'text',
        words: FAIL_TO_EDIT_AFTERNOON,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // fail to edit / rest
    sunset: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: TELL_ME_YOU,
        image: SHARED_IMAGES.noImage,
      }
    }, // TELL ME YOU /vision
    dusk: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [SHARED_IMAGES.noImage],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: FAIL_TO_EDIT_DUSK,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // fail to edit/ rest
    night: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: ALIENS_DREAMS,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // alien dreams
  },
  {
    afternoon: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.leftfoot, MOUNTAIN_IMAGES.rightfoot],
        backgroundImages: [MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg],
      },
      down: {
        typeName: 'text',
        words: THEORY_TRUTH,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // theory: Truth & Imagination (book)
    sunset: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: THEORY_D,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // D essay (book)
    dusk: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: MATH,
        image: MOUNTAIN_IMAGES.room,
      }
    } // math / impassable cliffs
  },
  {
    dawn: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: ALLEGORY_DAWN,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // allegory / reflections on the path
    sunrise: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: ALLEGORY_SUNRISE,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // allegory / reflections on the path
    midday: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: OUTSIDER_MIDDAY,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // outsider art
    afternoon: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.leftfoot, MOUNTAIN_IMAGES.rightfoot],
        backgroundImages: [MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg],
      },
      down: {
        typeName: 'text',
        words: OUTSIDER_AFTERNOON,
        image: MOUNTAIN_IMAGES.room,
      }
    }, 
    sunset: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: AUGUST_SUNSET,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // August
    dusk: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: AUGUST_DUSK,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // august
  },
  {},
  {
    dawn: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: WORK_DAWN,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // work / summit approaching
    sunrise: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.walktiny0, MOUNTAIN_IMAGES.walktiny1, MOUNTAIN_IMAGES.walktiny2],
        backgroundImages: [SHARED_IMAGES.noImage, SHARED_IMAGES.noImage, SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: APPLICATION_ACCEPTED,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // work, summit approaching
    morning: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.hand0, MOUNTAIN_IMAGES.hand1],
        backgroundImages: [MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg],
      },
      down: {
        typeName: 'text',
        words: WORK_MORNING,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // work / digging
    midday: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: ART_AND_LIGHT,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // Art & Light (Jennie's rainbow sketch diary), digging
    sunset: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: POETRY_TRANSLATION,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // poetry translation / digging
  },
  {
    dawn: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: SONIA_HELL,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // sonia / living in hell
    midday: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: PRAYER,
        image: MOUNTAIN_IMAGES.room,
      }
    }, // prayer/vision digging
    afternoon: {
      typeName: 'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.hand0, MOUNTAIN_IMAGES.hand1],
        backgroundImages: [MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg],
      },
      down: {
        typeName: 'text',
        words: TREE_OF_LIFE_AFTERNOON,
        image: MOUNTAIN_IMAGES.room,
      }
    },
    sunset: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: TREE_OF_LIFE_SUNSET,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    dusk: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: TREE_OF_LIFE_ENUMERATION_DUSK,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    night: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: TREE_OF_LIFE_ENUMERATION_NIGHT,
        image: MOUNTAIN_IMAGES.room,
      },
    },
  },
  {
    weeHours: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: TREE_OF_LIFE_ENUMERATION_WEE_HOURS,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    dawn: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: TREE_OF_LIFE_EXHAUSTION,
        image: MOUNTAIN_IMAGES.room,
      },
    },
  },
  {
    dawn: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: FIREBIRDS_DAWN,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    sunrise: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: FIREBIRDS_SUNRISE,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    morning: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.hand0, MOUNTAIN_IMAGES.hand1],
        backgroundImages: [MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg],
      },
      down: {
        typeName: 'text',
        words: FIREBIRDS_MORNING,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    dusk: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: FIREBIRDS_ABSTRACT_DUSK,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    night: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: FIREBIRDS_ABSTRACT_NIGHT,
        image: MOUNTAIN_IMAGES.room,
      },
    },
  },
  {
    weeHours: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: FIREBIRDS_ABSTRACT_WEE_HOURS,
        image: MOUNTAIN_IMAGES.room,
      },
    },
  },
  {
    dawn: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: DISSOLUTION_DAWN,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    sunrise: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: DISSOLUTION_SUNRISE,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    morning: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.hand0, MOUNTAIN_IMAGES.hand1],
        backgroundImages: [MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg],
      },
      down: {
        typeName: 'text',
        words: SYMBOLS_MORNING,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    midday: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: SYMBOLS_MIDDAY,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    sunset: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: AURAS_SUNSET,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    dusk: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: AURAS_DUSK,
        image: MOUNTAIN_IMAGES.room,
      },
    },
  },
  {
    sunset: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: JENNIE_MIRROR_SUNSET,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    dusk: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: JENNIE_MIRROR_DUSK,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    night: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: CHAIN_LINK_SKY_NIGHT,
        image: MOUNTAIN_IMAGES.room,
      },
    },
  },
  {
    weeHours: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: CHAIN_LINK_SKY_WEE_HOURS,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    dawn: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: CHAIN_LINK_SKY_DAWN,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    sunrise: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: COSMIC_EGG_SUNRISE,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    morning: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [MOUNTAIN_IMAGES.hand0, MOUNTAIN_IMAGES.hand1],
        backgroundImages: [MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg, MOUNTAIN_IMAGES.trailbg],
      },
      down: {
        typeName: 'text',
        words: COSMIC_EGG_MORNING,
        image: MOUNTAIN_IMAGES.room,
      },
    },
  },
  {
    afternoon: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: BIRTHDAY_AFTERNOON,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    sunset: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: BIRTHDAY_SUNSET,
        image: MOUNTAIN_IMAGES.room,
      },
    },
  },
  {
    dusk: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: LIKENESSES,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    night: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: ROSE_KNIGHT_DEATH_NIGHT,
        image: MOUNTAIN_IMAGES.room,
      },
    },
  },
  {
    weeHours: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: ROSE_KNIGHT_DEATH_WEE_HOURS,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    dawn: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: MERE_REALITY_DAWN,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    sunrise: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: MERE_REALITY_SUNRISE,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    afternoon: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: MERE_REALITY_AFTERNOON,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    sunset: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: FALL_SUNSET,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    dusk: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: MERE_REALITY_DUSK,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    night: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: MAN_IN_THE_MOON,
        image: MOUNTAIN_IMAGES.room,
      },
    },
  },
  {
    weeHours: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: STARS,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    dawn: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: ALIENS_II,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    sunrise: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: MOUNTAIN,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    morning: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: RAIN,
        image: MOUNTAIN_IMAGES.room,
      },
    },
    midday: {
      typeName:'upAndDown',
      up: {
        typeName: 'walk',
        images: [],
        backgroundImages: [SHARED_IMAGES.noImage],
      },
      down: {
        typeName: 'text',
        words: ELWEWHERE_BEYOND_ELSEWHERE,
        image: MOUNTAIN_IMAGES.room,
      },
    },
  },
  {},
  {},
  {},
  {},
  {},
] as const;
