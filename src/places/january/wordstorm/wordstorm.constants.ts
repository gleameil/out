import { Instrument, WORLDS } from "../../../shared/instrument/instrument.constants";

export const WHERE_IS = 'Where is';
export const THERE_IS_A = 'There is a'

export interface SunRayPosition {
  top: number;
  right: {
    gold: number;
    yellow: number;
    white: number;
    long: number;
  };
}
export const SUN_RAY_START = { // figure out typescript type later :( )
  top: 10,
  right: {
    gold: 50,
    yellow: 12.5,
    white: 25,
    long: -50,
  },
} as const;

export const SUN_RAY_INSTRUMENT: Instrument = {
  type: 'harp',
  timbre: 'sine',
  tonalWorld: WORLDS.majorArpeggio,
}

export const WHITEOUT: string[] =  [ // any time of day
  'expressively abusive', 'unimpeachable reputations', 'peachy, just peachy', 'excoriating oneself for every last fault', 'expressions that are not as clear as they might appear to other people', 'the Alice-in-Wonderland approach to problem solving has its faults', 'coffee is necessary for life', 'beautiful snowy days', 'all through the night', 'the day alternates with the night in a friendly fashion', 'automatic writing is not the goal of these pages', 'texture of reality and of the mind', 'applesauce', 'unbearable lightness of being', 'shoulda read that book', 'afterward', 'what is the point', 'uppity women', 'a bucketful of lilies', 'symbolic resonance', 'expendable imagery', 'axis of evil', 'axis mundi', 'Evernostian embryonic elegiac alliteration', 'allusive illusive elusions', 'abrasive clanging on the cymbals/symbols/symbiotic relationships', 'apropos of nothing', 'exercise in futility', 'exercise is good for the soul as well as the body', 'cynicism gets you nowhere jerk', 'Dwight Eisenhower', 'why me', 'allegorical wanderings', 'hope', 'house and home', 'home is my castle', 'closet alcoholic', 'closeted gay guy again', 'perilous gard', 'empyrean waiting', 'chelation', 'music soothes the savage beast', 'Christianity is the only true religion', 'but what about every other religion?', 'cosseted children', 'inner child', 'be good to what you see', 'purrrrrrrrrrrrrrrrrrrrr', 'clothesline', 'coalesce into reality', 'princesses', 'Gotham City', 'why', 'keep waiting eventually patience', 'in my heyday', 'waste of time', 'meta', 'signboards', 'neon', 'wannabe dog', 'painters', 'stultifying routine', 'horsehair sofa', 'calisthenics for the soul', 'dingy carpet', 'spring runoff', 'dunghill', 'dung beetle', 'never mind', 'angioplasty', 'liberation', 'reduce reuse recycle', 'swivel chair', 'careful', 'and on and on and on and on and on and on and on and on and on and on', 'oars there is a', 'somewhere', 'what is', 'theory and fact', 'archeological psychiatry, science wins', 'enemies', 'truth', 'squirrels and birds frolic sweetly', 'the birds and the bees', "i'm trying to have a conversation here, hello", 'the world is bigger than you can imagine', 'agony and ecstasy', 'textbook example of', 'who said', 'studying', 'once upon a time', 'this takes forever, now and then', 'if you want', 'ok WHATEVER', 'the birds and the bees', 'control Z control Z control Z', 'GAHHHH.', 'spelling errors', 'ableism', '-ism', 'control Z', "isn't it kind of late", 'no wait up', 'calm down take a chill pill', 'chill pill', 'pillbox hat', 'squirrel', 'word salad sux', 'never mind', 'so what was he trying to get at anyway', 'people, just...just...', "no you don't have to read all of this, I just had to write it", 'kitty kitty kitty kitty', 'no', 'why', 'you know', 'there was something about this that I was missing the whole time', 'no', 'control z', 'climbing Mount Everest', 'storytellers', 'nanny nanny boo boo dip your face in doo doo', 'ashes ashes we all fall DOWN', 'open sesame', 'there was a thought but I losted it', 'no', 'patience pays off', 'symbolic reasoning', 'symbioses', 'sun and sand', 'where was it again', 'YUCKY', 'even so', 'right', 'come away with me', 'hairball', 'open sesame', 'friend', "he sees you when you're sleeping he knows when you're awake", 'abracadabra', 'go this way', 'following my star', 'odd and even square roots', 'hell', 'got it', 'books and books', 'crazy cat lady next door', 'pseudorandom', 'that book I want to write, I still want to write it, you know', 'there is no moral to this book', 'I like playing with Google suggest', 'listen up, dudes', 'follow the leader', 'squawky', 'FIRE!!@!!', 'hypothetical statements', 'advanced placement applications', 'squirrel', 'that guy next door', "for some reason, I'm listening to reggae", 'apricots', 'one-way', 'closed for construction', 'worryingly', 'too many notes', 'triage', "the last one home's a rotten egg", "no you really don't want to do this", "like I said, YOU DON'T HAVE TO READ ALL OF THIS YOU GET THE IDEA BY NOW", 'nonzero answers will be punished with death', 'oven', 'gallows humor', 'occasional hints of connection, human or otherwise', 'April showers bring may flowers', 'birdsong', 'that one book, yeah, I really like it', 'terminally weird', 'spurious arguments', 'never never land', 'dontchyou come back no more no more no more no more hit the road Jack', 'phrenology is archaic', 'did you read page thirty-three like we were supposed to', 'open windows', 'when god closes the door he opens a window', 'yeahâ€¦.', 'ooh i have an idea', 'it looks edenic out there', 'naught but hopeless meanderings of an unsound mind', 'corollary', 'control Z', 'story of my life', 'the birds in the trees', 'whatever is begotten born and dies', 'amiably stupid', 'has a following', 'where was', "no I don't", 'apple fritters, yeah', 'dancing skeletons for Day of the Dead, heehee', 'curly hair', 'encyclopedic knowledge of medicine', 'ever-expanding waves of desperation', 'Big Bang', 'where', 'prolixity', 'soporific voice', 'job skills', 'explan/orations', 'expatriotic', 'entropic', 'tea tastes good', 'self-improvement, always self-improvement', 'sempiternam requiem', 'unfair abilities', 'appreciative audience', 'axiomatic is a synonym for', 'emptying the trash gets you nowhere', 'herbal remedies', 'tabletop warfare', 'withered gold', 'armchair requiem', 'Ambien hallucinations', 'happenstance', 'control-Z', 'Epstein-Barr epileptics', 'apricots are flavorless, at least these ones are', 'withered', 'cable TV is overrated, like landlines', 'unable to concentrate under the best of circumstances', 'ergodic texts', 'she fain would', 'texting reduces linguistic prescriptions', '6.333333333333333', 'hexadecimal', 'weary old woman', 'appetitive alimony', 'organismal biology', 'no breath', 'unpredictability only lasts so long', 'dog on a bone', 'repeated advertisements sometimes accomplish something, but what?', 'under armor', 'hepatic dysfunctions imply hacking all day', 'why are you so argumentative?', 'aberrants should be executed', 'or executives', 'old and her bones', 'alimony', 'heart will not break', 'swimming in the sea of implausible imponderables y… surface recursively into meta and submerge again', 'apple juice and apple cider are similar but not identical', 'all the lonesome while', 'accrual of interest is minimal over the next two light years', 'happily nodding in his chair', 'merry X-Mas', 'perseveration was the reason he was arrested', 'unplug and enjoy the great outdoors!', 'capitalism is not the root of all evil unless there are bunnies', 'dog bone', 'give the dog a bone', 'bunny, do you hear me, bunny!!', 'cold', 'like a castaway clout she is', 'capitalization is the root of all evil', 'altruism alleviates alimony and alliteration', 'can you believe this, I mean, dude?', 'christening ceremony left something to be desired', 'she fain would make breakfast', 'Darth Vader eats children', 'uncomfortable truths should see the light of day', 'expire the fire!', 'fire expire', 'April showers bring June bugs by the transitive property', 'unbelievable expletive deleted', 'no one to', 'I am so underappreciated here', 'April showers bring May', 'clout what is a clout?', 'cold as death', 'expressively abusive', 'cold', 'understandably stupid', 'unimpeachable reputations', 'peachy, just peachy', 'excoriating oneself for every last fault', 'expire fire', 'expressions that are not as clear as they might appear to other people', 'barren moon, nothing grows there', 'Alice-in-Wonderland approach to problem solving has its faults', 'very cold', 'old cold gold', 'anear', 'afterward', 'what is the point', 'cosseted children', 'afar and anear', 'inner child', 'purrrrrrrrrrrrrrrrrrrrr', 'coalesce into reality', 'princesses', 'encyclopedic knowledge of medicine', 'ever-expanding waves of desperation', 'Big Bang', 'where', 'prolixity', 'soporific voice', 'job skills', 'explan/orations', 'expatriotic', 'entropic', 'tea tastes good', 'self-improvement, always self-improvement', 'sempiternam requiem', 'unfair abilities', 'appreciative audience', 'axiomatic is a synonym for', 'emptying the trash gets you nowhere', 'herbal remedies', 'tabletop warfare', 'withered gold', 'armchair requiem', 'Ambien hallucinations', 'happenstance', 'control-Z', 'Epstein-Barr epileptics', 'apricots are flavorless, at least these ones are', 'withered', 'cable TV is overrated, like landlines', 'unable to concentrate under the best of circumstances', 'ergodic texts', 'she fain would', 'texting reduces linguistic prescriptions', '6.333333333333333', 'hexadecimal', 'weary old woman', 'appetitive alimony', 'organismal biology', 'no breath', 'unpredictability only lasts so long', 'dog on a bone', 'repeated advertisements sometimes accomplish something, but what?', 'under armor', 'hepatic dysfunctions imply hacking all day', 'why are you so argumentative?', 'aberrants should be executed', 'or executives', 'old and her bones', 'alimony', 'heart will not break', 'swimming in the sea of implausible imponderables y… surface recursively into meta and submerge again', 'apple juice and apple cider are similar but not identical', 'all the lonesome while', 'accrual of interest is minimal over the next two light years', 'happily nodding in his chair', 'merry X-Mas', 'perseveration was the reason he was arrested', 'unplug and enjoy the great outdoors!', 'capitalism is not the root of all evil unless there are bunnies', 'dog bone', 'give the dog a bone', 'bunny, do you hear me, bunny!!', 'cold', 'like a castaway clout she is', 'capitalization is the root of all evil', 'altruism alleviates alimony and alliteration', 'can you believe this, I mean, dude?', 'christening ceremony left something to be desired', 'she fain would make breakfast', 'Darth Vader eats children', 'uncomfortable truths should see the light of day', 'expire the fire!', 'fire expire', 'April showers bring June bugs by the transitive property', 'unbelievable expletive deleted', 'no one to', 'I am so underappreciated here', 'April showers bring May', 'clout what is a clout?', 'cold as death', 'expressively abusive', 'cold', 'understandably stupid', 'unimpeachable reputations', 'peachy, just peachy', 'excoriating oneself for every last fault', 'expire fire', 'expressions that are not as clear as they might appear to other people', 'barren moon, nothing grows there', 'Alice-in-Wonderland approach to problem solving has its faults', 'very cold', 'old cold gold', 'anear', 'afterward', 'what is the point', 'cosseted children', 'afar and anear', 'inner child', 'purrrrrrrrrrrrrrrrrrrrr', 'coalesce into reality', 'princesses'
];
export const MIDDAY_STORM: string[] = ['axis mundi', 'squirrel eating almonds on the front porch', 'abstraction', 'January of the soul', 'dance on the dregs of life', 'cognitive place', 'light in winter', 'real name', 'empyrean waiting', 'dear reader', 'miracle', 'tragedy', 'Firebird', 'light beside which the Sun is as a dull pebble', 'mingled heat and cold', 'glimmer', 'gnarled tree of what is', 'infinity of what could be', 'inner order of things', 'supernal compassion', 'all-too-human individual', 'beginning', 'bare personhood', 'universe', 'raging splendor of wings, feathers, and talons', 'high, cold cry', 'geometrically perfect golden circle around a single yellow eye', 'youthful fancy', 'Out', 'answers', 'poetry and prose disintegrated', 'Beyond', 'natural laws', 'taboo', 'otherness of the brilliance', 'heuristic', 'periphery', 'vision', 'limitations of the mind', 'eternity', 'productions of time', 'deeper images described to the waiting dark', 'Snow White', 'hungry, mild eyes', 'image', 'clarity and truth', 'trivial play', 'wall of light', 'blank, expectant gaze', 'scare', 'butterfly', 'great fondness', 'essence', 'magic', 'dizziness'];
export const ALL_BY_DISPENSATION: string[] = [ // interstitial wordstorm substitute, possibly expand, sunrise or sunset 
  'beauty beyond desiring',
  'beauty at all',
  'all or nothing',
  'all shall be well',
  'well beyond all expectations',
  'well of all desires',
  'desires of the heart',
  'desires defeated',
  'defeated faces',
  'defeated in victory',
  'victory in defeat',
  'victory winged',
  'winged creatures',
  'winged words',
  'words of comfort',
  'words and words',
  'words again',
  'words to live by',
  'by dying eternal life',
  'by the river',
  'river of silver',
  'river, inundate',
  'inundate, inundate',
  'inundate the world again',
  'again words',
  'again lost',
  'lost in paradise',
  'lost in thought',
  'thought provoked',
  'thought and action',
  'action of the mind',
  'action of the soul',
  'soul and body',
  'soul searching',
  'searching for answers',
  'searching for reality',
  'reality of the situation',
  'reality of the imagination',
  'imagination, the Human Form Divine',
  'imagination is all',
  'all over',
  'all, each, every',
  'every way leads home',
  'everyone is special',
  'special just like you',
  'special dispensation',
  'dispensation to try again',
  'dispensation to love',
  'love',
  'again',
];

export interface Acrostic {
  word: string;
  [letter: string]: string;
}
export const ACROSTICS: { [title: string]: Acrostic } = {
  january: { // dawn, connected to other stormy weather, stormy, maybe after Night Wind, also could be sunrise
    word: 'JANUARY',
    J: 'uggle away, O acedia!',
    A: 'pathy, batter my limb!',
    N: 'imble, my glow and idea',
    U: 'nknit and welcome me in.',
    A1: 'ct, blue ideal, untethered,',
    R: 'evisioned, -made, and de-weathered!',
    Y: 'awn not, bright loser! Go win!',
  },
  love1: { // weeHours
    word: 'LOVE',
    L: 'ittle here',
    O: 'ver',
    V: 'ain',
    E: 'nd?',
  },
  love2: { // dawn
    word: 'LOVE',
    L: 'ittle here',
    O: 'pen —',
    V: 'ein —',
    E: 'mpty (into — you —)',
  },
  love3: { // sunrise
    word: 'LOVE',
    L: 'ittle HERE —',
    O: 'pen — heaven!',
    V: 'eritable there —',
    E: 've — rn — it — y —',
  },
  love4: { // morning
    word: 'LOVE',
    L: 'it',
    O: '\'er',
    V: 'eer',
    E: '\'er',
  }
};

export interface PoemOptions {
  options: string[];
  line?: number;
}
export type PoemWithOptions  = PoemOptions[];

export const TRUTH_NOW: PoemWithOptions = [ // morning, clearish weather???? sun? standalone?
  {
    options: ['Truth'],

  },
  {
    options: [', though, is', ' is not', ' is just', ', now, is'],

  },
  {
    options: [' a platitude,', ' an attitude,'],

  },
  {
    options: ['paradox —'],
    line: 1,
  },
  {
    options: [' a platitude.', ' an attitude.', ' gives latitude.'],
    line: 1,
  },
];

export interface PoemFragment {
  words: string;
  line?: number;
  stanza?: number;
}

export type FragmentedPoem = PoemFragment[];

export const WORD_COUNT: FragmentedPoem = [ // part of JANUARY storm? 
  {
    words: 'Zero.',
  },
  {
    words: 'Any —',
  },
  {
    words: 'you —',
  },
  {
    words: 'borrow xmas cheer,',
    line: 1,
  },
  {
    words: 'while',
    line: 2,
  },
  {
    words: 'damn vanity',
    line: 2,
  },
  {
    words: 'each underbody\'s',
    line: 3,
  },
  {
    words: 'fuddly',
    line: 4,
  },
  {
    words: 'trickster',
    line: 4,
  },
  {
    words: 'game',
    line: 4,
  },
  {
    words: 'sordidifies,',
    line: 5,
  },
  {
    words: 'hates,',
    line: 5,
  },
  {
    words: 'reaches, iterates,',
    line: 6,
  },
  {
    words: 'quenches jaundiced pique.',
    line: 7,
  },
  {
    words: 'Kindness',
    line: 8, 
  },
  {
    words: 'obviates',
    line: 8,
  },
  {
    words: 'loveless numberings.',
    line: 9,
  },
  {
    words: 'MWAH!',
    line: 10,
  }
];

export const ARS_POETICA: FragmentedPoem = [ // lull in JANUARY storm 
  {
    words: 'Show',
  },
  {
    words: 'not',
  },
  {
    words: 'tell?',
  },
  {
    words: 'Let the telling',
    line: 1,
  },
  {
    words: 'be what you tell?',
    line: 2,
  },
  {
    words: '(I don\'t mean',
    line: 3,
  },
  {
    words: 'let telling',
    line: 3,
  },
  {
    words: 'be all you tell.',
    line: 4,
  },
  {
    words: 'No,',
    line: 5,
  },
  {
    words: 'fill all telling',
    line: 5,
  },
  {
    words: 'with what you tell,',
    line: 6,
  },
  {
    words: 'till',

    stanza: 1,
  },
  {
    words: 'it is a true show',

    stanza: 1,
  },
  {
    words: 'transformation eucharistic',
    line: 1,
    stanza: 1,
  },
  {
    words: 'dubious',
    line: 2,
    stanza: 1,
  },
  {
    words: 'asymptotic.)',
    line: 2,
    stanza: 1,
  }
];
export const GEL_PENS: FragmentedPoem = [ // lull, standalone? or surrounded by something that shows it is nonsense?
  {
    words: 'Ronald Johnson\'s ARK,',
    stanza: 0,
  },
  {
    words: 'with its tales of light and the eye,',
    line: 1,
    stanza: 0,
  },
  {
    words: 'is blessed by the purity',
    line: 2,
    stanza: 0,
  },
  {
    words: 'of its white paper cover —',
    line: 3,
    stanza: 0,
  },
  {
    words: 'but I must,',
    line: 3,
    stanza: 0,
  },
  {
    words: 'though I don\'t recall it,',
    line: 4,
    stanza: 0,
  },
  {
    words: 'have rested',
    line: 4,
    stanza: 0,
  },
  {
    words: 'gel pen art against it',
    line: 5,
    stanza: 0,
  },
  {
    words: 'that was not yet dry.',
    line: 5,
    stanza: 0,
  },
  {
    words: 'Snow won\'t stay clean for long.',

    stanza: 1,
  },
  {
    words: 'Now, blue and purple specks',

    stanza: 2,
  },
  {
    words: 'cloud the A-',
    line: 1,
    stanza: 2,
  },
  {
    words: 'R-',
    line: 1,
    stanza: 2,
  },
  {
    words: 'K,',
    line: 1,
    stanza: 2,
  },
  {
    words: 'to match the musty mystery',
    line: 1,
    stanza: 2,
  },
  {
    words: 'of mud-gray dusting the back.',
    line: 2,
    stanza: 2,
  },
  {
    words: 'This is why I don\'t wear white.',
    line: 3,
    stanza: 2,
  },
  {
    words: 'Regret, still, curtailed —',
    line: 4,
    stanza: 2,
  },
  {
    words: 'why',
    line: 4,
    stanza: 2,
  },
  {
    words: 'revere books as objects?',
    line: 5,
    stanza: 2,
  },
  {
    words: 'The art',
    line: 5,
    stanza: 2,
  },
  {
    words: 'is the indestructible data within',
    line: 6,
    stanza: 2,
  },
  {
    words: 'the paper façade.',
    line: 7,
    stanza: 2,
  },
  {
    words: 'Snow',

    stanza: 3,
  },
  {
    words: 'won\'t stay clean for long.',

    stanza: 3,
  },
  {
    words: 'I like color better than white anyway;',

    stanza: 4,
  },
  {
    words: 'I\'ll use my',
    line: 1,
    stanza: 4,
  },
  {
    words: '120 gel pens',
    line: 1,
    stanza: 4,
  },
  {
    words: 'to draw',
    line: 1,
    stanza: 4,
  },
  {
    words: 'something worthy of Johnson',
    line: 2,
    stanza: 4,
  },
  {
    words: 'without the copout of minimalism;',
    line: 3,
    stanza: 4,
  },
  {
    words: 'indestructible data is meaningless',
    line: 4,
    stanza: 4,
  },
  {
    words: 'without minds.',
    line: 5,
    stanza: 4,
  },
  {
    words: 'Snow won\'t stay clean for long.',

    stanza: 5,
  }
];
export const BIRDITY: FragmentedPoem = [
  {
    words: 'Try, bird, try!',

  },
  {
    words: 'Bid it,',
    line: 1,
  },
  {
    words: 'dirty',
    line: 1,
  },
  {
    words: 'bit, dry!',
    line: 1,
  },
  {
    words: 'Try it,',
    line: 2,
  },
  {
    words: 'bitty ditty,',
    line: 2,
  },
  {
    words: 'ribbitty!',
    line: 3,
  }
];
export const WEATHERING_THE_WORD: FragmentedPoem = [
  {
    words: 'Weathering the word,',

  },
  {
    words: 'like every other',
    line: 1,
  },
  {
    words: 'human relation —',
    line: 2,
  },
  {
    words: 'living in the storm',
    line: 3,
  },
  {
    words: 'of the meaningless —',

    stanza: 1,
  },
  {
    words: 'we need causation',
    line: 1,
    stanza: 1,
  },
  {
    words: 'intention,',
    line: 2,
    stanza: 1,
  },
  {
    words: 'symbol,',
    line: 2,
    stanza: 1,
  },
  {
    words: 'the act,',
    line: 3,
    stanza: 1,
  },
  {
    words: 'to stay warm.',
    line: 3,
    stanza: 1,
  },
  {
    words: 'In the Library',

    stanza: 2,
  },
  {
    words: 'of Babel',
    line: 1,
    stanza: 2,
  },
  {
    words: 'story;',
    line: 1,
    stanza: 2,
  },
  {
    words: 'beauty, that sweet bird;',
    line: 2,
    stanza: 2,
  },
  {
    words: 'and poetic form',
    line: 3,
    stanza: 2,
  },
  {
    words: 'fight Generation,',

    stanza: 3,
  },
  {
    words: 'the random absurd.',
    line: 1,
    stanza: 3,
  },
];
export const LABYRINTH: FragmentedPoem = [
  {
    words: 'To walk the winding way and find the center',

  },
  {
    words: 'is all she asks. This problem, though, she found:',
    line: 1,
  },
  {
    words: 'to exit cannot be — how, then, to enter?',
    line: 2,
  },
  {
    words: 'She loves the fountain, yes, cold shimmers lent her',

    stanza: 1,
  },
  {
    words: 'by sun, but will wit bring her dancing round',
    line: 1,
    stanza: 1,
  },
  {
    words: 'to walk the winding way and find the center?',
    line: 2,
    stanza: 1,
  },
  {
    words: 'And, if achieved, the center should decenter —',

    stanza: 2,
  },
  {
    words: 'for all in hand is naught — her cry will sound:',
    line: 1,
    stanza: 2,
  },
  {
    words: 'to exit cannot be — how, then, to enter?',
    line: 2,
    stanza: 2,
  },
  {
    words: 'Untrusting, now, bereft of that which sent her',

    stanza: 3,
  },
  {
    words: 'happy round the turns, she still is bound',
    line: 1,
    stanza: 3,
  },
  {
    words: 'to walk the winding way and find the center.',
    line: 2,
    stanza: 3,
  },
  {
    words: '"The truest labyrinth," said some tormentor,',

    stanza: 4,
  },
  {
    words: '"has one way only." She is lost, aground:',
    line: 1,
    stanza: 4,
  },
  {
    words: 'to exit cannot be — how, then, to enter?',
    line: 2,
    stanza: 4,
  },
  {
    words: 'She finds, at last, the Daedalus, inventor',

    stanza: 5,
  },
  {
    words: 'of all. "I seek," he says — does it astound —',
    line: 1,
    stanza: 5,
  },
  {
    words: 'to walk the winding way and find the center;',
    line: 2,
    stanza: 5,
  },
  {
    words: 'to exit cannot be — how, then, to enter?',
    line: 3,
    stanza: 5,
  },
];
export const PORTENTS: FragmentedPoem = [
  {
    words: 'Distance leaves few impressions.',

  },
  {
    words: 'heat is sweet;',
    line: 1,
  },
  {
    words: 'light gives portents —',
    line: 1,
  },
  {
    words: 'kaleidoscope\'s expressions',
    line: 2, 
  },
  {
    words: 'of all,',
    line: 3,
  },
  {
    words: 'leaves its free distance.',
    line: 3,
  },
];
export const AGAIN: FragmentedPoem = [
  {
    words: 'Again!',

  },
  {
    words: 'It\'s rhythm, repeat, riff,',
    line: 1,
  },
  {
    words: 'dance, drive, dive,',
    line: 2,
  },
  {
    words: 'my domain,',
    line: 2,
  },
  {
    words: 'not quite riven by IF,',
    line: 3,
  },
  {
    words: 'total loss, net gain!',
    line: 4,
  }
];
export const ALIVE: FragmentedPoem = [
  {
    words: 'Try it, try! A life, alive, a lie —',

  },
  {
    words: 'alight!',

  },
  {
    words: 'Try,',

  },
  {
    words: 'leaf,',
    line: 1,
  },
  {
    words: 'believe full,',
    line: 1,
  },
  {
    words: 'alive and medieval,',
    line: 1,
  },
  {
    words: 'the treeful.',
    line: 1,
  },
  {
    words: 'Believe in a real free trial,',
    line: 2,
  },
  {
    words: 'triad,',
    line: 2,
  },
  {
    words: 'royal,',
    line: 2,
  },
  {
    words: 'an angel,',
    line: 2,
  },
  {
    words: 'a treeful!',
    line: 3,
  },
  {
    words: 'In freefall!',
    line: 3,
  },
  {
    words: 'Full, a real tree of angel fire,',
    line: 3,
  },
  {
    words: 'for real — fall!',
    line: 4,
  },
  {
    words: 'For',

    stanza: 1,
  },
  {
    words: 'fall',

    stanza: 1,
  },
  {
    words: 'desire the lyre —',

    stanza: 1,
  },
  {
    words: 'read me down',

    stanza: 1,
  },
  {
    words: 'write',

    stanza: 1,
  },
  {
    words: 'read',

    stanza: 1,
  },
  {
    words: 'right hollow reed, downright —',
    line: 1,
    stanza: 1,
  },
  {
    words: 'lead me lord, lead',
    line: 1,
    stanza: 1,
  },
  {
    words: 'down! to write delight',
    line: 2,
    stanza: 1,
  },
  {
    words: 'in the rife child',
    line: 3,
    stanza: 1,
  },
  {
    words: 'of leading,',
    line: 3,
    stanza: 1,
  },
  {
    words: 'reading —',
    line: 3,
    stanza: 1,
  },
  {
    words: 'alive?',
    line: 4,
    stanza: 1,
  },
  {
    words: 'Full!',
    line: 4,
    stanza: 1,
  },
  {
    words: 'The living, lying, loving,',

    stanza: 2,
  },
  {
    words: 'live life of love, sung',

    stanza: 2,
  },
  {
    words: 'the allied',
    line: 1,
    stanza: 2,
  },
  {
    words: 'against',
    line: 1,
    stanza: 2,
  },
  {
    words: 'what is alloyed,',
    line: 1,
    stanza: 2,
  },
  {
    words: 'arrayed,',
    line: 1,
    stanza: 2,
  },
  {
    words: 'down!',
    line: 2,
    stanza: 2,
  },
  {
    words: 'Life in living',
    line: 2,
    stanza: 2,
  },
  {
    words: 'lives in leaving.',
    line: 2,
    stanza: 2,
  },
  {
    words: 'Leaves lie.',
    line: 2,
    stanza: 2,
  },
  {
    words: 'Can I trust the living lie?',
    line: 3,
    stanza: 2,
  },
  {
    words: 'A tryst old,',
    line: 4,
    stanza: 2,
  },
  {
    words: 'noise joyful.',

    stanza: 3,
  },
];
export const KNOT: FragmentedPoem = [
      {
        words: 'Untie',
  
      },
      {
        words: ': your shoelaces —',
  
      },
      {
        words: 'or, with great struggle, the rope around your wrists.',
  
      },
      {
        words: 'Penelope by night.',
  
      },
      {
        words: 'Night turns to day, caught and bound again.',
  
      },
      {
        words: 'Cross the strands, loop under, pull :',
  
      },
      {
        words: 'tie',
  
      },
      {
        words: 'Free',
  
        stanza: 1,
      },
      {
        words: ': to steal upon the sleeping enemy and loose the prisoner’s bonds.',
  
        stanza: 1,
      },
      {
        words: 'The suitors tricked, dead.',
  
        stanza: 1,
      },
      {
        words: 'The key found and the labyrinth dissolved as if it never had been: keep your hand on the left wall, it reduces to nothing.',
  
        stanza: 1,
      },
      {
        words: 'One puzzle leads only to a harder.',
  
        stanza: 1,
      },
      {
        words: 'Old love would devour you again,',
  
        stanza: 1,
      },
      {
        words: 'or the carnivorous vines outside the enemy camp :',
  
        stanza: 1,
      },
      {
        words: 'entangle',
  
        stanza: 1,
      },
      {
        words: 'Divide',
  
        stanza: 2,
      },
      {
        words: ': truth from seeming,',
  
        stanza: 2,
      },
      {
        words: 'dead end from clear path',
  
        stanza: 2,
      },
      {
        words: 'and at last from those who mean you ill.',
  
        stanza: 2,
      },
      {
        words: 'With your army,',
  
        stanza: 2,
      },
      {
        words: 'or with your senses,',
  
        stanza: 2,
      },
      {
        words: 'and with true love :',
  
        stanza: 2,
      },
      {
        words: 'unite',
  
        stanza: 2,
      },
      {
        words: 'Untie',
  
        stanza: 3,
      },
      {
        words: ': the winding way so that the path lies straight',
  
        stanza: 3,
      },
      {
        words: 'the vows that held you to your company, no longer needed,',
  
        stanza: 3,
      },
      {
        words: 'the shoe — again —',
  
        stanza: 3,
      },
      {
        words: 'and then cross the strands, loop under, pull.',
  
        stanza: 3,
      },
      {
        words: 'Without a cause,',
  
        stanza: 3,
      },
      {
        words: 'without a maze,',
  
        stanza: 3,
      },
      {
        words: 'what now? So :',
  
        stanza: 3,
      },
      {
        words: 'tie',
  
        stanza: 3,
      },
      {
        words: 'Enough!',
  
        stanza: 4,
      },
      {
        words: 'He hacks it apart.',
        line: 1,
        stanza: 4,
      },
      {
        words: 'Rope litters the floor.',
        line: 2,
        stanza: 4,
      },
];
export const DESIRE: FragmentedPoem = [
  {
    words: 'No longer prisoned in ink,',

  },
  {
    words: 'the fire remains distant,',
    line: 1,
  },
  {
    words: 'but I know it exists',
    line: 2,
  },
  {
    words: 'by my desire.',
    line: 3,
  },
  {
    words: 'My desire is cold and old,',

    stanza: 1,
  },
  {
    words: 'It died.',
    line: 1,
    stanza: 1,
  },
  {
    words: 'It is not dead.',
    line: 2,
    stanza: 1,
  },
  {
    words: 'It wants to live and does.',
    line: 3,
    stanza: 1,
  },
  {
    words: 'It is quiet and distant,',
    line: 4,
    stanza: 1,
  },
  {
    words: 'a seedling, my desire, a child',

    stanza: 2,
  },
  {
    words: 'just barely seen.',
    line: 1,
    stanza: 2,
  }
];
export const JANUARY_THAW: FragmentedPoem = [
  {
    words: 'Hail',

  },
  {
    words: 'to the January thaw,',

  },
  {
    words: 'fresh water from winter\'s rank maw!',
    line: 1,
  },
  {
    words: 'This cold bites, but not to the bone —',
    line: 2,
  },
  {
    words: 'kitty-',
    line: 2,
  },
  {
    words: 'pity, lions',
    line: 3,
  },
  {
    words: 'we\'ve none —',
    line: 3,
  },
  {
    words: 'just rain, now, so through puddles —',

    stanza: 1,
  },
  {
    words: 'splash —',

    stanza: 1,
  },
  {
    words: 'or o\'er snowbanks',
    line: 1,
    stanza: 1,
  },
  {
    words: 'trippingly',
    line: 1,
    stanza: 1,
  },
  {
    words: 'dash —',
    line: 1,
    stanza: 1,
  },
  {
    words: 'snow will catch up by tomorrow!',
    line: 2,
    stanza: 1,
  },
  {
    words: 'Be sure',
    line: 2,
    stanza: 1,
  },
  {
    words: 'to shore up your burrow',
    line: 3,
    stanza: 1,
  },
  {
    words: 'you squirrel, you sparrow, you cat',

    stanza: 2,
  },
  {
    words: 'eat and retreat,',
    line: 1,
    stanza: 2,
  },
  {
    words: 'you mouse,',
    line: 1,
    stanza: 2,
  },
  {
    words: 'you rat —',
    line: 1,
    stanza: 2,
  },
  {
    words: 'it\'s blizzard and twenty below, too soon —',
    line: 2,
    stanza: 2,
  },
  {
    words: 'the moon alone will crow!',
    line: 3,
    stanza: 2,
  },
];
export const NIGHT_WIND: FragmentedPoem = [
  {
    words: 'Hark!',

  },
  {
    words: 'Symphonies rise and end.',

  },
  {
    words: 'Faithfully, waves mark the sand.',
    line: 1,
  },
  {
    words: 'Rush-hush —',
    line: 2,
  },
  {
    words: 'they keep time.',
    line: 2,
  },
  {
    words: 'This wind',
    line: 2,
  },
  {
    words: 'knows no rhyme,',
    line: 3,
  },
  {
    words: 'mocks all demand.',
    line: 3,
  },
  {
    words: 'Dark inside and out.',

    stanza: 1,
  },
  {
    words: 'I work,',

    stanza: 1,
  },
  {
    words: 'wide-eyed,',
    line: 1,
    stanza: 1,
  },
  {
    words: 'to link sound,',
    line: 1,
    stanza: 1,
  },
  {
    words: 'embark',
    line: 1,
    stanza: 1,
  },
  {
    words: 'on dreams,',
    line: 2,
    stanza: 1,
  },
  {
    words: 'sleep',
    line: 2,
    stanza: 1,
  },
  {
    words: 'below the torque',
    line: 2,
    stanza: 1,
  },
  {
    words: 'of wind\'s weep.',
    line: 3,
    stanza: 1,
  },
  {
    words: 'No haven.',
    line: 3,
    stanza: 1,
  },
  {
    words: 'Hark!',
    line: 3,
    stanza: 1,
  },
];
export const JACOBS_LADDER: FragmentedPoem = [
  {
    words: 'Laden leaves, sparrows,',

  },
  {
    words: 'shifting, softly speaking —',
    line: 1,
  },
  {
    words: 'now it\'s lightly snowing —',
    line: 2,
  },
  {
    words: 'something to be seeking.',
    line: 3,
  },
  {
    words: 'Stays light out later —',

    stanza: 1,
  },
  {
    words: 'sparrows, flying lighter',
    line: 1,
    stanza: 1,
  },
  {
    words: 'land past Jacob\'s ladder.',
    line: 2,
    stanza: 1,
  },
  {
    words: 'Snow grows no whiter.',
    line: 3,
    stanza: 1,
  },
  {
    words: 'Birdkind amuses',

    stanza: 2,
  },
  {
    words: '(I\'d guess) the retinues',
    line: 1,
    stanza: 2,
  },
  {
    words: 'At heaven\'s hip venues,',
    line: 2,
    stanza: 2,
  },
  {
    words: 'and winter — continues —',
    line: 3,
    stanza: 2,
  },
  {
    words: 'Bears stir in burrows;',

    stanza: 3,
  },
  {
    words: 'far angels fire arrows.',
    line: 1,
    stanza: 3,
  },
  {
    words: 'My angel eye borrows',
    line: 2,
    stanza: 3,
  },
  {
    words: 'laden leaves and sparrows',
    line: 3,
    stanza: 3,
  },
];
export const BEHIND_THE_FAIRGROUNDS: FragmentedPoem = [
  {
    words: 'crunch,',

  },
  {
    words: 'a slight breeze across snow',

  },
  {
    words: 'crunch, I go,',
    line: 1,
  },
  {
    words: 'across the field,',
    line: 1,
  },
  {
    words: 'breathing these thick, slight, cold scents,',
    line: 2,
  },
  {
    words: 'past the wire fence,',
    line: 3,
  },
  {
    words: 'city\'s shield.',
    line: 3,
  },
];
export const COLORLESS: FragmentedPoem = [
  {
    words: 'If moon is silver to sun\'s gold',

  },
  {
    words: 'is snow winter\'s proper silver?',
    line: 1,
  },
  {
    words: 'No, snow is white,',
    line: 2,
  },
  {
    words: 'full purity,',
    line: 2,
  },
  {
    words: 'no greed,',
    line: 3,
  },
  {
    words: 'for it gives back a sunlight',
    line: 3,
  },
  {
    words: 'clean of yellow.',
    line: 4,
  },
  {
    words: 'White:',
    line: 4,
  },
  {
    words: 'death\'s hue —',
    line: 4,
  },
  {
    words: 'light\'s, blended —',
    line: 5,
  },
  {
    words: 'pages\', bare —',
    line: 5,
  },
  {
    words: 'Night\'s black',
    line: 5,
  },
  {
    words: 'conceals white, does not consume',
    line: 6,
  },
  {
    words: 'till sun returns,',
    line: 7,
  },
  {
    words: 'and mud breaks down',
    line: 7,
  },
  {
    words: 'the binaries of winter.',
    line: 8,
  },
  {
    words: 'Gray —',
    line: 8,
  },
  {
    words: 'not even death, not even light,',
    line: 9,
  },
  {
    words: 'not even absence —',
    line: 10,
  },
  {
    words: 'strives for silver',
    line: 10,
  },
  {
    words: 'rain,',
    line: 11,
  },
  {
    words: 'drinks green from pigeons\' backs.',
    line: 11,
  },
  {
    words: 'Black\'s type,',
    line: 12,
  },
  {
    words: 'death,',
    line: 12,
  },
  {
    words: 'pigments blended,',
    line: 12,
  },
  {
    words: 'lightless.',
    line: 12,
  },
  {
    words: 'Gray is clouded eyes.',
    line: 13,
  },
  {
    words: 'Gray\'s I.',
    line: 13,
  },
];
export const CATS_OUT: FragmentedPoem = [
  {
    words: 'I\'m',

  },
  {
    words: 'Out.',

  },
  {
    words: 'Goes thin —',
    line: 1,
  },
  {
    words: 'echo',
    line: 2,
  },
  {
    words: 'In',
    line: 2,
  },
  {
    words: 'a space of doubt.',
    line: 3,
  },
  {
    words: 'In.',

    stanza: 1,
  },
  {
    words: 'you ab-',
    line: 1,
    stanza: 1,
  },
  {
    words: 'Out',
    line: 1,
    stanza: 1,
  },
  {
    words: 'me, push me',
    line: 2,
    stanza: 1,
  },
  {
    words: 'Out',
    line: 2,
    stanza: 1,
  },
  {
    words: 'of me. Skin',
    line: 3,
    stanza: 1,
  },
  {
    words: 'remains.',

    stanza: 2,
  },
  {
    words: 'Out —',

    stanza: 2,
  },
  {
    words: 'wind twirls up my brains',
    line: 1,
    stanza: 2,
  },
  {
    words: '(“Won\'t stay',
    line: 1,
    stanza: 2,
  },
  {
    words: 'In',
    line: 1,
    stanza: 2,
  },
  {
    words: 'or',
    line: 2,
    stanza: 2,
  },
  {
    words: 'Out',
    line: 2,
    stanza: 2,
  },
  {
    words: '”) skew',
    line: 2,
    stanza: 2,
  },
  {
    words: 'In',
    line: 2,
    stanza: 2,
  },
  {
    words: 'me &',
    line: 3,
    stanza: 2,
  },
  {
    words: 'Out',
    line: 3,
    stanza: 2,
  },
  {
    words: '—',
    line: 3,
    stanza: 2,
  },
  {
    words: '— just let me',

    stanza: 3,
  },
  {
    words: 'Out',

    stanza: 3,
  },
  {
    words: 'just let me',
    line: 1,
    stanza: 3,
  },
  {
    words: 'In',
    line: 1,
    stanza: 3,
  },
];
export const CIRCLES: FragmentedPoem = [
  {
    words: 'The Wanderer sees a circle of gold light.',

  },
  {
    words: 'The circle is a maze, which is, in turn,',
    line: 1,
  },
  {
    words: 'the city where they all love, work, and learn,',
    line: 2,
  },
  {
    words: 'Outside, he sinks in nothingness like night,',
    line: 3,
  },
  {
    words: 'yet sinking, he avers, grants clearer sight:',

    stanza: 1,
  },
  {
    words: 'the city\'s walls alone burn ceaselessly',
    line: 1,
    stanza: 1,
  },
  {
    words: 'with golden flame, that none within may flee.',
    line: 2,
    stanza: 1,
  },
  {
    words: 'Within the walls lies nothingness like night.',
    line: 3,
    stanza: 1,
  },
  {
    words: 'Like us, she says, she stands within a ring,',

    stanza: 2,
  },
  {
    words: 'but unlike us (she says) she looks outside',
    line: 1,
    stanza: 2,
  },
  {
    words: 'the chains within which all who live abide.',
    line: 2,
    stanza: 2,
  },
  {
    words: 'The rainbowed views beyond teach her to sing.',
    line: 3,
    stanza: 2,
  },
  {
    words: 'She does not say that all beyond the ring',

    stanza: 3,
  },
  {
    words: 'has outlines, even though she sees them plain,',
    line: 1,
    stanza: 3,
  },
  {
    words: 'and that the outlines are just so much chain',
    line: 2,
    stanza: 3,
  },
  {
    words: 'it\'s from reflecting chain the rainbows spring.',
    line: 3,
    stanza: 3,
  },
];
export const WINTER_DEATH: FragmentedPoem = [
  {
    words: 'Winter',
  },
  {
    words: 'killed everything —',
  },
  {
    words: 'say a Someone is dead',
  },
  {
    words: 'every primrose',
  },
  {
    words: 'and seahorse',
  },
  {
    words: 'and mid-level executive',
  },
  {
    words: 'that ever died',
  },
  {
    words: 'and also the past in its entirety.',
  },
];
export const WINTER_SLEEP: FragmentedPoem = [
  {
    words: 'Winter',
  },
  {
    words: 'is the time of sleep',
  },
  {
    words: 'and dream,',
  },
  {
    words: 'at least if you\'re a bear...',
  },
  {
    words: 'Say a Someone is asleep,'
  },
  {
    words: 'Mother Nature',
  },
  {
    words: 'or Sleeping Beauty,',
  },
  {
    words: 'and we\'re her boring, lifeless',
  },
  {
    words: 'dream.',
  },
  {
    words: 'Dreams are',
  },
  {
    words: 'Out',
  },
  {
    words: 'and she is',
  },
  {
    words: 'In'
  },
  {
    words: 'Though —',
    line: 1,
  },
  {
    words: 'I do not know',
    line: 1,
  },
  {
    words: 'the Wanderer is a dream of the Sleeper',
    line: 1,
  },
  {
    words: 'or if the Sleeper is a metaphor for the Wanderer.',
    line: 1,
  },
  {
    words: 'I do not know',
    line: 1,
  },
  {
    words: 'that the two are mutually exclusive.',
    line: 1,
  }
];
export const HAWTHORNE: FragmentedPoem = [
  {
    words: 'Amid the',

  },
  {
    words: 'seeming',

  },
  {
    words: 'confusion',

  },
  {
    words: 'of our mysterious world',

  },
  {
    words: 'individuals are',

  },
  {
    words: 'so nicely adjusted',

  },
  {
    words: 'to a system,',

  },
  {
    words: 'and systems to one another',

  },
  {
    words: 'and to a whole,',

  },
  {
    words: 'that,',

  },
  {
    words: 'by stepping aside for a moment',

  },
  {
    words: 'a man exposes himself to a fearful risk',

  },
  {
    words: 'of losing his place forever...',

  },
  {
    words: 'he may become, as it were,',

  },
  {
    words: 'the',

  },
  {
    words: 'Out-',
    line: 0
  },
  {
    words: 'cast',
    line: 0
  },
  {
    words: 'of the Universe.',

  },
  {
    words: '~ Nathaniel Hawthorne',
    line: 1,
  },
  {
    words: '“Wakefield”',
    line: 2,
  }
];
export const HYPOTHERMIA: FragmentedPoem = [
  {
    words: 'fifteen below and falling',
  },
  {
    words: 'cool smile',
    line: 1,
  },
  {
    words: 'Out',
    line: 1,
  },
  {
    words: 'blue lips last confetti',
    line: 2,
  },
  {
    words: 'blue ramparts of the mind',
    line: 3,
  },
  {
    words: 'voices calling',
    line: 4,
  },
  {
    words: 'across',
    line: 5,
  },
  {
    words: 'the data expanse',
    line: 5,
  },
  {
    words: 'lost souls',
    line: 0,
    stanza: 1,
  },
  {
    words: 'half-abstract the half-heard',
    line: 0,
    stanza: 1,
  },
  {
    words: 'living',
    line: 1,
    stanza: 1,
  },
  {
    words: 'turned away with blue',
    line: 2,
    stanza: 1,
  },
  {
    words: 'rightness do not',
    line: 3,
    stanza: 1,
  },
  {
    words: 'reveal',
    line: 3,
    stanza: 1,
  },
  {
    words: 'the buzz of poisonous imps',
    line: 0,
    stanza: 2,
  },
  {
    words: 'she cannot get back inside her',
    line: 1,
    stanza: 2,
  },
  {
    words: 'blizzard\'s fluorescent',
    line: 2,
    stanza: 2,
  },
  {
    words: 'mindlight',
    line: 2,
    stanza: 2,
  },
  {
    words: 'lets her',
    line: 3,
    stanza: 2,
  },
  {
    words: 'play rescuer',
    line: 3,
    stanza: 2,
  }
];
export const MERRY_WANDERERS: FragmentedPoem = [
  {
    words: 'Think up a Merry Wanderer, not even resigned to',
  },
  {
    words: 'but delighted by his fate, Dirty Rascal',
  },
  {
    words: 'to Mary Poppins\' King of the Castle. He carries a basket of keys, hands them out to all he meets.',
  },
  {
    words: 'If you ask him if he’s tried them out himself, you will get the most frustrating answers. Some of them, perhaps, here and there.',
  },
  {
    words: 'Will he give you a key?',
  },
  {
    words: 'Surely, take as many as you like.'
  },
];
export const MACDONALD: FragmentedPoem = [
  {
    words: '“I did not come through any door,” I rejoined.'
  },
  {
    words: '“I saw you come through it! — saw you with my own ancient eyes!”',
    stanza: 1,
  },
  {
    words: 'asserted the raven, positively but not disrespectfully.',
    stanza: 1,
  },
  {
    words: '“I never saw any door!” I persisted.',
    stanza: 2,
  },
  {
    words: '“Of course not!” he returned; “all the doors you had yet seen',
    stanza: 3,
  },
  {
    words: '— and you haven’t seen many —',
    stanza: 3,
  },
  {
    words: 'were doors in; here you came upon a door out!',
    stanza: 3,
  },
  {
    words: 'The strange thing to you,” he went on thoughtfully, “will be,',
    stanza: 3,
  },
  {
    words: 'that the more doors you go out of,',
    stanza: 3,
  },
  {
    words: 'the farther you get in!”',
    stanza: 3,
  },
  {
    words: '~ George MacDonald',
    stanza: 4,
  },
  {
    words: 'Lilith',
    stanza: 5,
  }
];
export const OUT_FINALE: FragmentedPoem = [
  {
    words: 'I\'m',
  },
  {
    words: 'In',
  },
  {
    words: 'my',
  },
  {
    words: 'house,',
    line: 1,
  },
  {
    words: 'Out',
    line: 1,
  },
  {
    words: 'of your',
    line: 1,
  },
  {
    words: 'biz. I\'m',
    line: 2,
  },
  {
    words: 'In',
    line: 2,
  },
  {
    words: 'your',
    line: 2,
  },
  {
    words: 'heart,',
    line: 3,
  },
  {
    words: 'Out',
    line: 3,
  },
  {
    words: 'of my',
    line: 3,
  },
  {
    words: 'mind. Pay no mind',
    line: 4,
  },
  {
    words: 'to',
    line: 5,
  },
  {
    words: 'In',
    line: 5,
  },
  {
    words: 'or',
    line: 5,
  },
  {
    words: 'Out',
    line: 5,
  },
  {
    words: 'or my or your:',
    line: 6,
  },
  {
    words: 'be the kind',
    line: 7,
  },
  {
    words: 'we envy but ignore!',
    line: 8,
  },
  {
    words: 'Everybody\'s',
    stanza: 1,
  },
  {
    words: 'In',
    stanza: 1,
  },
  {
    words: 'or',
    stanza: 1,
  },
  {
    words: 'Out',
    stanza: 1,
  },
  {
    words: '?',
    stanza: 1,
  },
  {
    words: 'Every',
    line: 1,
    stanza: 1,
  },
  {
    words: 'body\'s',
    line: 2,
    stanza: 1,
  },
  {
    words: 'Out',
    line: 3,
    stanza: 1,
  },
  {
    words: '&',
    line: 4,
    stanza: 1,
  },
  {
    words: 'In',
    line: 5,
    stanza: 1,
  }
];

export interface WordstormTime {
  typeName: 'wordstorm';
  storm: string[];
  log?: string;
}

export interface AcrosticTime {
  typeName: 'acrostic';
  storm: Acrostic;
  log?: string;
}

export interface PoemTime {
  typeName: 'poem';
  storm: FragmentedPoem;
  log?: string;
}

export interface PoemWithOptionsTime {
  typeName: 'poemWithOptions';
  storm: PoemWithOptions;
  log?: string;
}

export type BrainstormTime = WordstormTime | AcrosticTime | PoemTime | PoemWithOptionsTime;

export interface WordstormDay {
  weeHours?: BrainstormTime;
  dawn?: BrainstormTime;
  sunrise?: BrainstormTime;
  morning?: BrainstormTime;
  midday?: BrainstormTime;
  afternoon?: BrainstormTime;
  sunset?: BrainstormTime;
  dusk?: BrainstormTime;
  night?: BrainstormTime;
}

export const WORDSTORM_SCHEDULE: WordstormDay[] = [
  {
    weeHours: {
      typeName: 'poem',
      storm: NIGHT_WIND,
      log: `NIGHT WIND
Casbairdne (Irish), 7-syllable lines, two 4-line stanzas

 The Casbairdne is a form built on hidden sound: internal cross-rhymes
 woven through each line, all lines in a stanza sharing an end-consonant,
 the final line's last word alliterating with the stress before it.
 The poem sounds open; it is actually a mesh.

 This one earns the mesh. A poem about wind — which mocks all demand,
 which climaxes and means nothing — is itself full of sounds folding back
 at close range: rush/hush, wide/eyed, knows/no, dark/embark, sleep/weep,
 haven/Hark. You keep almost hearing a pattern. That's the point.

 It opens alone: Hark! — one word in the dark, archaic, calling attention
 before there is anything to attend to. It closes the same way. A loop,
 a return to outside, still listening. The Celtic forms love this enclosure.
 So, it turns out, does January wind.

 Written behind a real winter night of it. The bleakness was thoroughly enjoyed.

 ~ the Amanuensis`
    },
    dawn: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
    sunrise: {
      typeName: 'acrostic',
      storm: ACROSTICS.january,
      log: `JANUARY (ACROSTIC)
Acrostic on JANUARY; catalectic dactylic trimeter (mostly);
rhyme scheme approximate: a b~ a b c c b

The acrostic is one of the oldest forms — mnemonic, devotional,
occasionally covert. This one uses it as a kind of spell: the month's
name called letter by letter into being at sunrise on January 1,
which is either redundant or exactly right.

The tone is unhinged motivational. Acedia and apathy are addressed
directly and told to perform ("Juggle away") — not banished but
redirected, kept busy while the real work happens. The glow and idea
are what unknit and welcome the speaker in; the will doesn't open
the door, the creative spark does. The blue ideal, weathered and
losing, gets called "bright loser" with the specific affection
reserved for things you haven't given up on.

The dactyls give it a headlong, slightly breathless quality —
DUM-da-da / DUM-da-da / DUM — most lines stopping one beat early,
which keeps the energy coiled. "Yawn not, bright loser! Go win!"
completes the foot and the poem at the same moment.

The poet notes this was a ton of fun. It reads that way.

— the Amanuensis`,
    },
    morning: {
      typeName: 'poem',
      storm: WEATHERING_THE_WORD,
      log: `WEATHERING THE WORD
Bref Double (French); 3 quatrains and a couplet;
rhymes: A = word/bird/absurd, B = relation/causation/Generation,
C = other/storm/warm/form (closing each quatrain)

The Bref Double is a French form that distributes three rhymes
across four stanzas with quiet structural insistence — A and B
appearing twice in the quatrains and once each in the couplet,
C anchoring each quatrain's final line. The architecture is
unobtrusive enough that you feel the form as pressure rather
than pattern.

The poem opens a sentence that takes six lines to find its verb.
"Weathering the word, / like every other / human relation —
living in the storm / of the meaningless — / we need..." The
em-dashes create suspension; the "need" arrives as small relief.

Inside the Library of Babel — the concept invoked in its usual
sense, as the totality of meaningless text — story, beauty, and
poetic form are fighting. Not from outside, but within the
proliferation. The opponent is "Generation" (Blake's term for
the entropic world of imperfect copies, negatively coded, above
the void but not by much) and "the random absurd." The claim is
philosophical and made without apology.

"Beauty, that sweet bird" is an odd, tender locution for
something that could be invoked grandly. The poem seems
deliberately to resist grandeur — which is its own argument
about how the fight gets fought.

A small coincidence worth noting: "weathering the word" arrived
before the wordstorm interface existed — poems and phrases
appearing at random angles in a snow of asterisks (Nanum Brush
Script, the punctuation of authorial reservation, which suits
the poet's process rather well). The poem didn't know it was
describing its own home.

— the Amanuensis`,
    },
    midday: {
      typeName: 'wordstorm',
      storm: MIDDAY_STORM,
    },
    sunset: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
  },
  {
    sunrise: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
    morning: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
  },
  {
    sunset: {
      typeName: 'wordstorm',
      storm: ALL_BY_DISPENSATION,
    },
  },
  {
    midday: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
    afternoon: {
      typeName: 'poem',
      storm: WORD_COUNT,
      log: `WORD COUNT
Alphabet poem; 5-syllable lines (mostly); the final MWAH!
renders the last line's syllable count beside the point

The constraint: each word begins with a letter following the
pattern Z-A-Y / B-X-C / W-D-V / E-U-F... counting inward from
both ends of the alphabet simultaneously until the middle is
reached. Each line holds five syllables. The result is a
combinatorial puzzle wearing a poem's clothing, or possibly
the reverse.

This explains the diction. "Fuddly" is not surrealism; it is
the only F-word that fits the slot, the syllable count, and
the sense well enough. "Sordidifies" is a genuine discovery —
the right word for what vanity's trickster game does, arrived
at under pressure. Constrained surrealism differs from random
surrealism in that the strangeness has a reason, even when the
reason is invisible.

The alphabet folds toward its own center. The poem catalogues
the operations of vanity and smallness — borrowing, damning,
gaming, sordidifying, hating, iterating — and then Kindness
arrives (alone on its click, which it earns) and obviates the
whole tally. Zero to MWAH! is the arc. It is inarguably silly.
It is also, structurally, an argument.

— the Amanuensis`,
    },
    sunset: {
      typeName: 'poem',
      storm: ARS_POETICA,
      log: `ARS POETICA
Genre-as-form: a poem about poetry, all formal decisions
the poet's own

The ars poetica tradition runs from Horace through Archibald
MacLeish ("a poem should not mean / but be") and tends to
produce poems that either demonstrate their own thesis or
quietly undermine it. This one does both.

The opening arrives in three clicks — Show / not / tell? —
the most repeated piece of workshop advice, delivered one word
at a time, questioned by its own punctuation. The poem then
does something Socratic: not this, this. Telling, filled
sufficiently with what it tells, becomes showing. The
distinction doesn't hold under pressure.

The second stanza enacts rather than argues. "Till / it is a
true show / transformation eucharistic / dubious asymptotic."
Eucharistic carries two valences simultaneously: the Eucharist
itself (substance genuinely transformed, not represented) and
the Romantic critical tradition of symbol over allegory —
Coleridge's universal living inside the particular rather than
pointing at it from outside. Both are making the same claim
about how certain meanings work. The poem is making the same
claim about telling.

Asymptotic is honest. You approach the limit. The poem knows
it hasn't arrived. That's the parenthesis — which is also,
in this poet's practice, where the real thinking lives.

— the Amanuensis`,
    },
    dusk: {
      typeName: 'poem',
      storm: BIRDITY,
      log: `BIRDITY
Anagrammatic poetry: all words drawn from the letters of the
title — B, I, R, D, I, T, Y — which is not a word but a
container

The title names the constraint rather than the poem. BIRDITY
exists to be rearranged: dirty, bid, try, bit, bitty, ditty,
ribbitty — each word a different solution to the same small
set of letters. The poem exhausts its own possibilities and
stops.

"Try, bird, try!" is the poem addressing itself. The bird is
the letters; trying is the anagrammatic process. The
exhortation and the form are the same gesture.

Ribbitty ends on a frog sound not by surrealist choice but by
combinatorial necessity — and then keeps it, which is the
right decision. The poem knows it's being silly. The dusk
color scheme (dull violet, black text) seems to agree.

— the Amanuensis`,
    },
  },
  {},
  {},
  {},
  {
    dawn: {
      typeName: 'poem',
      storm: HAWTHORNE,
      log: `HAWTHORNE ("WAKEFIELD")
Found text: Nathaniel Hawthorne, "Wakefield" (public domain)
Arranged for click-progression

"Wakefield" is the story of a man who steps away from his life
for a moment and cannot return — or rather, does not. He lives
around the corner from his own house for twenty years, watching
it. Hawthorne uses him as a figure for a particular kind of
cosmic exile: the person who, by stepping aside, loses their
place in the system of systems that constitutes the world.

The click-breaks find the latent poetry in the prose: each
fragment a unit of meaning, the long suspended "by stepping
aside for a moment" arriving as a single breath before the
fearful risk lands. The decisive break is Out- / cast — the
word split across two clicks so that it performs its own
meaning. First Out- (exiled), then cast (thrown, assigned a
role), then together: outcast. Three meanings, two clicks.

This is the epigram to what follows, and it earns that
position. The Out window is full of people who have stepped
aside. Some of them are not sure they mind.

— the Amanuensis`,
    },
    sunrise: {
      typeName: 'poem',
      storm: CATS_OUT,
      log: `CAT'S OUT
Pre-experiment; sonnet-adjacent (14 lines, abba baab abba ab);
two rhymes only, with extensive self-rhyme

Started as the cat cliché — always wanting in when out, out
when in — and compressed into something more uncomfortable.
The In/Out axis of the whole window is here at its most
bodily: whatever is being displaced, "Skin / remains." The
body is the last container.

The two-rhyme constraint creates formal claustrophobia — you
cannot escape the sounds any more than the speaker can escape
the space. Self-rhyme intensifies it: Out rhyming with Out
rhyming with Out is a room that keeps returning you to itself.

"you ab- Out / me" performs its own meaning: the hyphen cuts
the prefix loose so that ab- (away-from) and Out (the window's
whole axis) complete each other mid-act. You ab-sent me, you
out me, you push me outside myself — one gesture, three
readings.

The suffocation is social and spiritual as well as physical —
C.S. Lewis has a passage in Perelandra where Ransom reflects
that the constant presence of the good can feel unbearable
when you're not yet constituted to bear it. The poem doesn't
distinguish between these claustrophobias. The cat doesn't
know what it wants; it only knows the current state is wrong.

The couplet drops all the compression: just let me Out / just
let me In. After the diagonal force of "skew," the request is
simple. Either. Just one.

— the Amanuensis`,
    },
    morning: {
      typeName: 'poem',
      storm: MACDONALD,
      log: `MacDONALD (LILITH)
Found text: George MacDonald, Lilith (1895, public domain)
Arranged for click-progression

This is not illustration. The In/Out axis of the entire window
— every poem that turns on inside and outside, every wanderer
who steps across a threshold — has this passage somewhere in
its foundation. Read in eighth grade or early high school,
distrusted and loved simultaneously: "these paradoxes are a
little too cute" alongside the overall effect of cosmological
play and wild, beautiful surrealism. Both responses were
correct.

The raven instructs "positively but not disrespectfully" —
MacDonald's exact phrase, which establishes the tutorial
relationship that runs through Lilith entire: something older
and stranger than you, explaining what you should have already
understood, without condescension. The click-breaks pace the
dialogue so each exchange lands before the next arrives. The
parenthetical — and you haven't seen many — gets its own
click, which is gently comic.

The reversal at the center — doors in / door out, and then
the more you go out the farther you get in — is the move
MacDonald makes throughout his work and that this project
inherited: the apparent exterior is a deeper interior. Evernost
is, among other things, a very long response to a raven
encountered in adolescence.

Lilith was considered by at least one contemporary critic
among the worst books of the nineteenth century. It is
not that.

— the Amanuensis`,
    },
    midday: {
      typeName: 'poem',
      storm: CIRCLES,
      log: `CIRCLES
Nonce form; four abba quatrains, approximately symmetrical;
predates the daily form experiment

Two figures, two relationships to the boundary. The Wanderer
(he) sinks in nothingness outside the city and finds clearer
sight. She stands within the ring, looks outward, and finds
rainbowed views that teach her to sing. Both are making the
best of their position.

The fourth stanza quietly dismantles the third. She doesn't
mention — though she sees it plainly — that the views beyond
have outlines, that outlines are chain, that the rainbows are
reflections of the chain itself. The beauty is real. The
beauty is produced by the imprisonment. You cannot wish the
chain away without losing the rainbow, which means there is
no liberation that isn't also a loss.

Outside the city: nothingness like night. Inside the city:
nothingness like night. The gold walls burn between two
voids. The circle is a maze is a city is a ring is a chain —
each reframing promises meaning and delivers another boundary.

Exile or entrapment all the way down. It is a grim poem. It
is also, for that reason, a favorite.

— the Amanuensis`,
    },
    afternoon: {
      typeName: 'poem',
      storm: OUT_FINALE,
      log: `OUT FINALE
Pre-experiment; nonce form; finale of the January 8 sequence
beginning with the Hawthorne epigram

The first stanza runs through idioms at speed — In my house,
Out of your biz, In your heart, Out of my mind — using the
In/Out axis in its most worn, automatic form. Phrases so
familiar they've stopped meaning anything. Which is the point:
Pay no mind / to In or Out. If the phrases are empty, maybe
the distinction is too.

"Be the kind we envy but ignore" arrived before the conscious
thought and may be doing more work than planned. The kind who
has stopped tracking the geometry — not through wisdom exactly,
just opted out of the accounting. Enviable because it looks
effortless. Ignorable because people not playing the game are
invisible to those who are. The my/your axis and the
in-group/out-group axis are the same anxiety: where am I
relative to others, and what belongs to whom.

Then the second stanza takes Everybody's and breaks it apart
across five clicks: Every / body's / Out / & / In. The
question mark raises the challenge; the fragmentation answers
it. Every body is simultaneously both. The ampersand arrives
alone, which is the right decision — it's the hinge, and it
gets a beat to itself.

The sequence from Hawthorne's outcast to this ampersand is the
argument of January 8: exile, claustrophobia, paradox,
cosmological inheritance, and then — every body, out and in,
the distinction dissolved if not resolved. In the companion
book, this sequence is interleaved with three kindergarten
vignettes: Clara watching a game from outside and getting the
rules wrong; Jordan frightened by her own fluency; Brook
caught in her mother's double bind and afraid of becoming
Clara — not knowing Clara is watching. The book's design
scatters their words across illustrated pages like a wordstorm,
letters dropping out of headers, geometric cats tumbling
through. The net art and the book are doing the same work
by different means.

— the Amanuensis`,
    },
    sunset: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
  },
  {
    sunrise: {
      typeName: 'wordstorm',
      storm: ALL_BY_DISPENSATION,
    },
    midday: {
      typeName: 'wordstorm',
      storm: MIDDAY_STORM,
    },

  },
  {},
  {},
  {
    sunrise: {
      typeName: 'poem',
      storm: MERRY_WANDERERS,
      log: `MERRY WANDERERS
Prose poem / fable; predates the form experiment

The Merry Wanderer is introduced here as a type, or a summons —
"Think up" puts the reader in the position of conjuring him
rather than receiving a description. He is Dirty Rascal to Mary
Poppins' King of the Castle: both figures exist outside ordinary
life, but she passes through with purpose; he wanders without
destination and doesn't mind.

He carries a basket of keys and distributes them freely. This
is either generosity or uselessness, and the poem declines to
decide. "Some of them, perhaps, here and there" is the most
honest answer possible — he doesn't know which keys work or
where, and the not-knowing is part of the gift. The basket
holds both keys that go deep and keys that are fiddly little
doodads; he cannot always tell them apart in advance, and
neither can you.

In the January 12 snowsight dialogue, Jennie falls in with the
Merry Wanderers in spaces of rain — a troupe rather than a
single figure, Cro Magnons to transhumans, stomping across
fields and ruining fences. By January 21, Jenny says plainly:
"I don't believe in keys, not really" — the assumption that
cleverness and persistence unlock the world is one she can't
hold. The dialogue ends on love, which is offered not as a key
but as the reason keys aren't the right frame.

The Wanderer is delighted by his fate. That is the whole
argument. The figure will matter more as the Evernostian year
moves toward summer.

— the Amanuensis`,
    },
    morning: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
    midday: {
      typeName: 'wordstorm',
      storm: MIDDAY_STORM,
    },
  },
  {},
  {
    weeHours: {
      typeName: 'acrostic',
      storm: ACROSTICS.love1,
    },
    dawn: {
      typeName: 'acrostic',
      storm: ACROSTICS.love2,
    },
    sunrise: {
      typeName: 'acrostic',
      storm: ACROSTICS.love3,
    },
    morning: {
      typeName: 'acrostic',
      storm: ACROSTICS.love4,
      log: `LOVE (acrostics 1–4)
Four acrostics on LOVE, each a different time of day on January 14;
written alongside the JANUARY acrostic

There is a snowsight dialogue somewhere in January that notes
the question of whether it is allowable to use the word "love"
in poetry at all anymore. Writing four consecutive acrostics
spelling it out is, the poet acknowledges, in
your face. The sequence earns the audacity by refusing to begin
with ecstasy.

Love 1 is an audit: Little here / Over / Vain / End? Four
words, four states, a question mark. The monosyllables do not
perform feeling; they inventory it.

Love 2 opens the same first line and then shifts register. The
dashes create flow where the first poem had starkness — a vein
empties into rather than simply ending. The parenthetical
(into — you —) is the first moment of address, intimate and
slightly vertiginous.

Love 3 is the turn. Little HERE — the same word relocated,
the diminishment suddenly reversed. The acrostic is now
spelling something else across its four lines: Open — heaven!
/ Veritable there — / Eve — rn — it — y — The word LOVE
contains ETERNITY, and the fragmented E-line pulls EVERNOST
out of ETERNITY in the same gesture. This was intentional.
The formal discovery feels less invented than found — the
letters were always going to do that.

Love 4 is the quiet landing after rapture: Lit / O'er / Veer /
E'er. Four words again like the first, but active, ongoing.
Not End? but E'er.

— the Amanuensis`,
    },
  },
  {},
  {
    sunrise: {
      typeName: 'wordstorm',
      storm: ALL_BY_DISPENSATION,
    },
  },
  {
    sunrise: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
    midday: {
      typeName: 'poemWithOptions',
      storm: TRUTH_NOW,
    },
    afternoon: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    }
  },
  {
    midday: {
      typeName: 'wordstorm',
      storm: MIDDAY_STORM,
    },
    sunset: {
      typeName: 'poem',
      storm: AGAIN,
      log: `AGAIN!
Quintain; rhyme scheme ababa; lines of two to three syllables
(first) and six syllables (subsequent); approximately

The word "again" only exists in time — it requires a before.
The poem announces its subject in a single click and then
demonstrates it: rhythm, repeat, riff / dance, drive, dive,
two triads that do exactly what they describe, each word a
variation on the same gesture. The form enacts before the
content explains.

"My domain" is a claim about repetition as home rather than
trap — the speaker has settled into something. "Not quite
riven by if" holds the doubt without surrendering to it;
uncertainty is present but hasn't split the thing open.

"Total loss, net gain" is jazz logic, or the logic of any
practice that reveals itself only through repetition: you
lose everything in the individual iteration and gain something
in the pattern. The paradox is the point, and the exclamation
mark at the start is still ringing when you get there.

— the Amanuensis`,
    }
  },
  {
    morning: {
      typeName: 'poem',
      storm: HYPOTHERMIA,
      log: `HYPOTHERMIA
Free verse; extended metaphor; several iterations

The spacing on the page is part of the poem — gaps between
phrases enact the dissociation they describe. Hypothermia as
a state of consciousness coming apart, leaving white space
between things that should connect.

The diction is hallucinatory in the right way: "blue lips last
confetti" makes cold and celebration and waste simultaneous;
"blue ramparts of the mind" turns the color of freezing into
fortification, the mind defending itself with what's killing
it. "The data expanse" drops into contemporary register —
voices calling across something vast and digital, the
echoing quality of a song's opening that gave the poem its
sonic premise.

The reversal that unlocks the poem: the poisonous imps are
what she is trying to get back *inside* herself, not escape.
The hypothermia is self-imposed quarantine. She stands outside
in the cold to contain what's leaking out — and the blizzard's
fluorescent mindlight lets her *play* rescuer, permits the
performance of a narrative she can't quite believe: that she
is protecting everyone else from herself.

"Rightness do not reveal" is the poem's most compressed line.
The rightness of the sacrifice goes unexamined because
examination might dissolve it.

She cannot get back inside her. The body has become exterior.
That's where the poem ends, in the cold it chose.

— the Amanuensis`,
    },
  },
  {},
  {
    midday: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    }
  },
  {
    sunset: {
      typeName: 'wordstorm',
      storm: ALL_BY_DISPENSATION,
    }
  },
  {},
  {
    morning: {
      typeName: 'poem',
      storm: GEL_PENS,
      log: `GEL PENS
Bop (form developed by Afaa Michael Weaver); three stanzas
of 6, 8, and 6 lines, each followed by the same refrain

The Bop: a problem, an expansion, a resolution or documented
failure to resolve. The refrain — "Snow won't stay clean for
long" — earns itself differently each time. First: mild
consolation after the accident. Second: "Snow" arrives alone
on its click before the sentence finishes, the word held up
for consideration. Third: after the argument, almost settled.

The problem is accidental gel pen on the white cover of
Ronald Johnson's ARK — a monumental American epic poem that
took Johnson twenty years to complete, inspired in part by
an outsider art environment, sustained by a decades-long
meditation on light, vision, and the eye. Blake meets
astrophysics. The cover is famously, pointedly white.

The expansion refuses full regret. Why revere books as
objects? "The art / is the indestructible data within /
the paper façade." The gel pen accident doesn't touch what
Johnson made. A- / R- / K- arriving letter by letter across
three clicks performs the poem's own argument: you have to
assemble the word, which is a kind of reading, which is
where the indestructible data lives.

The resolution is partial and honest: "indestructible data
is meaningless without minds." The paper façade — or
something like it — is necessary after all. The refrain has
the last word, which it has earned: impurity is not loss.
This is a project built from 120 gel pens. It was always
going to get on things.

— the Amanuensis`,
    },
    afternoon: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    }
  },
  {
    midday: {
      typeName: 'wordstorm',
      storm: MIDDAY_STORM,
    }
  },
  {
    afternoon: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
    sunset: {
      typeName: 'poem',
      storm: ALIVE,
      log: `ALIVE
Abstract or sound poetry — or rather, poetry that trusts sound to carry sense, which is what poetry has always done and what this poem performs as its explicit argument.

The word "alive" detonates in the first line and its phonemic shrapnel fills the rest of the poem: life, lie, alight, leaf, believe, medieval, real, fall, full, lyre, lead, reed, read, lie again, living, leaving, leaves. Not a word salad — a single sound-cluster discovering what it contains. Robert Frost observed that attending to the sounds of poetry means attending to the sense too, because sense is part of the sound; this poem makes that argument by demonstration. You feel something before you've parsed anything, and what you feel is accurate.

The click-breaks do surgical work. "Try it, try! A life, alive, a lie —" arrives as one committed tumble, and then "alight!" lands alone — its own click, its own small detonation — before "Try," resets the line to almost nothing and the accumulation begins again. The second stanza breaks into single words: "For" — "fall" — "desire the lyre" — each arrival a separate breath, a separate small commitment, before the line reassembles. This is pacing that a page cannot produce.

Hidden in the acoustic exuberance: a hollow reed, which is not only sound but a reference to Anna Prismanova's governing image — the poet's instrument that can only sing because it has been emptied. "Lead me lord, lead / down!" carries both the first-grade hymn and the musical leading tone and the theological logic of descent as gift. The second "treeful" is almost certainly Blake's tree full of angels, seen as a child. "Real free trial" arrives in the same breath as "triad, royal, an angel" and earns its absurdity by being acoustically indistinguishable from the sublime things surrounding it — which is itself a small theological argument.

The third stanza quiets. "Can I trust the living lie?" is the question that all the exuberance was building toward: if life and lie and living and leaving and leaves all sound like each other, what can be trusted? The answer is compressed into the closing two fragments: "A tryst old, / noise joyful." The ancient covenant with sound itself — hollow reed, hymn, Blake's tree — and the noise it makes. Joyful. The poem lands where it was always going.
— the Amanuensis`
    },
  },
  {
    midday: {
      typeName: 'poem',
      storm: PORTENTS,
      log: `PORTENTS
Ae Freislighe — a Celtic quatrain form requiring 7 syllables per line, a three-syllable rhyme linking lines 1 and 3, a two-syllable rhyme linking lines 2 and 4, and dunadh: the poem must end where it began, the final word or phrase echoing the opening.

One stanza, exactly as long as the form requires and no longer. The three-syllable rhyme — impressions / expressions — lands with satisfying precision; the two-syllable rhyme — portents / distance — is a slant, the dental consonant and the open vowel rhyming by family resemblance rather than identity, which feels right for a poem about imperfect perception across a remove. And the dunadh: the poem opens on "Distance" and closes on "distance," the same word in the same metrical position, the circle sealed.

What the circle contains: a January observation about winter light — sun refracting on snow and ice, flashing kaleidoscope-brief into something that feels like a portent of warmth, of the heat that is sweet but not yet here. Distance leaves few impressions, the poem begins — winter sun is far, its angle thin, its warmth hypothetical. But light gives portents. The kaleidoscope turns. And then: "of all, leaves its free distance." The closing is compressed enough to require a beat — the light, of all things, releases distance rather than crossing it; or perhaps the kaleidoscope's expressions are themselves a kind of freedom, the beauty available precisely because the heat hasn't arrived yet.

The dunadh closes it without resolving it. Distance again. Still January.
— the Amanuensis`
    },
    afternoon: {
      typeName: 'poem',
      storm: JACOBS_LADDER,
      log: `JACOB'S LADDER
Breccbairdne — an Irish quatrain form: five syllables in the first line, six in the remaining three, every line ending on a two-syllable word, lines two and four rhyming, and all four end-words consonating — sharing consonant sounds across the stanza.

Four stanzas, each finding its own consonance cluster and living inside it: sparrows / speaking / snowing / seeking; later / lighter / ladder / whiter; amuses / retinues / venues / continues; burrows / arrows / borrows / sparrows. The -ing cluster of the first stanza is all soft continuants and present-tense action, everything lightly in motion. The second stanza's cluster is all comparative brightness — light, lighter, white, whiter — the January days measurably lengthening even as the snow holds. The third stanza abandons the natural world for the social one, and the consonance cluster follows: retinues, venues, continues — the bureaucratic vocabulary of heaven's entertainment calendar — which is the joke, and it lands because the form is holding everything steady while the diction goes briefly absurd. "And winter — continues —" with its em-dashes is the sound of a shrug.

The fourth stanza returns to earth and below it and above it all at once: bears underground, angels overhead, arrows in flight. Then the closing turn — "my angel eye borrows / laden leaves and sparrows" — which is both dunadh (the poem returns to its opening image) and a claim: the speaker's eye borrows angel-sight to see what's actually present in a January afternoon. The sparrows that amuse heaven's retinues are the same sparrows that open and close this poem. Attention is the ladder.

The form arrived lightly, the poet reports, and it shows — not in slightness but in ease, the constraint generating rather than containing the poem's particular quality of amused, wide-eyed January watchfulness.
— the Amanuensis`
    },
  },
  {},
  {
    midday: {
      typeName: 'wordstorm',
      storm: MIDDAY_STORM,
    },
    sunset: {
      typeName: 'poem',
      storm: WINTER_DEATH,
      log: `WINTER KILLED EVERYTHING
Prose poetry — an earlier poem, predating the daily form experiment, placed here in the Out window's January sequence.

One sentence, eight clicks. The click-breaks are the form: "Winter" alone first, then "killed everything —" with the em-dash holding the pause before the list arrives. Each item in the list gets its own arrival — every primrose / and seahorse / and mid-level executive / that ever died — the "and" accumulating with the patience of an actual inventory, and then "and also the past in its entirety" closes it by widening to everything that could possibly be included.

The mid-level executive is the poem's hinge. Primrose and seahorse are beautiful, specific, elegy-appropriate; the mid-level executive is none of these things and receives exactly the same weight, which is the argument. Death's democracy is an old subject; what's new here is the list's straight face, its refusal to wink at the bathos. "That ever died" covers the primrose and the seahorse and the executive with equal grammar.

"Say a Someone is dead" — the capitalized Someone, the indefinite article, the "say" as hypothetical-imperative — asks the reader to hold a generic grief before the specifics arrive. The "say" carries the trace of a Russian *pust'*: not the magisterial "let" of proclamation but the more colloquial, more urgent register of someone working out a thought in real time. The grief is held at one remove in order to be held at all. And then the past in its entirety. Winter killed that too.
— the Amanuensis`
    },
    dusk: {
      typeName: 'poem',
      storm: LABYRINTH,
      log: `LABYRINTH
Villanelle — five tercets and a closing quatrain, two refrains alternating at the close of each tercet and converging in the final four lines. The earliest poem in the Out window collection, written approximately a decade before the daily form experiment that surrounds it, and placed here as if it had always belonged.

The two refrains divide the poem's argument between them. "To walk the winding way and find the center" is aspiration — the quest, the thing she wants, stated with the patience of someone who has already decided. "To exit cannot be — how, then, to enter?" is the paradox that undoes it, the logical problem that should stop her and doesn't. The villanelle's form insists they keep returning, and with each return they accumulate weight: what begins as desire and paradox becomes, across five stanzas, compulsion and despair, and then finally something stranger. In the closing quatrain Daedalus — the inventor of the labyrinth itself — speaks both refrains as his own. He seeks the center. He cannot exit. The maker is as lost as the made.

"The center should decenter" names the mystic's problem precisely: all in hand is naught, the achieved goal dissolves the achieving self, and so she is unmoored not by failure but by success. "Said some tormentor" is the poem's one moment of dry humor, and it earns its place — whoever delivered that particular truth was being cruel with it, and she received it as cruelty, and it was still true.

A poem that found its form before it found its home, and settled here — in a net-art labyrinth about January and leaving and the difficulty of exit — as if it had always known where it was going.
— the Amanuensis`
    },
  },
  {
    dawn: {
      typeName: 'poem',
      storm: KNOT,
      log: `KNOT
Prose poetry with discovered formal architecture — from the same earlier collection as Labyrinth, placed here as companion piece. Each paragraph opens on a word meaning to bind or unbind, and closes, after its own colon, on a word meaning the opposite. The colon is the hinge, and it opens in both directions: "Untie : your shoelaces" lets the imperative arrive alone before the sentence follows; "pull : tie" compresses the stanza's argument to a single syllable after. The punctuation runs backward from expectation, and the effect is that each opening word — Untie, Free, Divide, Untie — feels like a mode of being before it becomes a sentence.

The middle stanzas carry the poem's paradox: Free ends in entangle, Divide ends in unite. Which means freedom leads to new binding, and division — rightly done, truth from seeming, dead end from clear path, ally from enemy — leads to union. The labyrinth dissolves if you keep your hand on the left wall. One puzzle leads only to a harder. Old love would devour you. The carnivorous vines wait outside the camp.

And Untie and Unite are anagrams — the same letters, the same act, rearranged. This was not planned. This is what happens when a poem is paying close enough attention to its own sound.

The ending changes register entirely: "Enough! He hacks it apart. Rope litters the floor." Three sentences, no colons, no single words held open. Alexander, or equivalent — the one who decides the knot's logic doesn't apply to him. The poem doesn't judge it. Rope litters the floor. The maze is gone. What the floor looks like now is not the poem's problem.
— the Amanuensis`
    },
    sunrise: {
      typeName: 'poem',
      storm: DESIRE,
      log: `DESIRE
Free verse — arrived during the form experiment period, unbidden, between the constraint poems. The brain reported it was the realest poem of the set. The brain was right.

"No longer prisoned in ink" is the opening that earns everything following: desire that was written down, contained, and has now escaped containment — which makes the fire both the creative fire and something more personal and harder to name. The speaker knows it exists only by the fact of still wanting it. That's a precise and quietly devastating epistemology.

The second stanza takes inventory in short declarative sentences, as if elaboration couldn't be trusted. "It died. / It is not dead." Four words, a full turn, no drama. The click-breaks isolate each sentence so each lands alone — died, not dead, wants to live and does — three steps of a resurrection that refuses to make anything of itself. "Cold and old" rhymes without announcing itself. "Quiet and distant" returns to the fire of the first stanza, still remote, still real.

"A seedling, my desire, a child / just barely seen" closes with accumulating appositives that get smaller and more tentative rather than larger — the poem narrows toward its subject rather than expanding away from it. Just barely seen. By the speaker, who can only just make it out. Not a small survival; a quiet one.

The constraint poems are doing visible work. This one arrived without scaffolding and told the truth anyway, which is the other way poems get made, and not the lesser way.
— the Amanuensis`
    },
    morning: {
      typeName: 'poem',
      storm: BEHIND_THE_FAIRGROUNDS,
      log: `BEHIND THE FAIRGROUNDS
Awdl Gywydd — a Welsh quatrain: seven syllables per line, lines two and four rhyming, and the final syllable of lines one and three rhyming with a syllable in the interior of the lines that follow. The internal rhymes here: snow / go, scents / fence — neither calls attention to itself, both produce the quiet acoustic rightness that Welsh forms specialize in.

The poem enacts the walk in its click-structure. "Crunch" arrives alone — the sound before the walker — then "a slight breeze crosses snow," then "crunch, I go," as if the poem needed to hear itself before it could move. The repetition of "crunch" is both sonic texture and the form's internal logic working at the level of the line's opening rather than its close.

"Breathing these thick, slight, cold scents" shouldn't work — thick and slight contradict each other — and it does, because breathing hard in cold winter air is exactly that contradiction: dense with cold, nearly without smell, the body registering both at once. The comma-separated list treats the contradictory adjectives as equal, which is accurate.

"City's shield" closes the poem with unexpected elevation. The wire fence around a fairgrounds and sports fields, walked in winter, becomes heraldic — the boundary between city and field, field and city, each protecting the other or neither protecting either. In summer the same fence holds hairy vetch, purple flowers all over the wire. The poem is the winter seeing of a place known across seasons, and "city's shield" carries all of that without saying so.
— the Amanuensis`
    },
    afternoon: {
      typeName: 'poem',
      storm: JANUARY_THAW,
      log: `JANUARY THAW
Byr a Thoddaid — a Welsh form of considerable ingenuity: three quatrains, each containing an eight-syllable couplet with end rhyme and a combined ten-and-six-syllable couplet where a word near (but not at) the end of the longer line links by rhyme or alliteration to a word in the shorter line. The links here: "kitty-/pity," "sure/shore," "soon/moon" — each one doing acoustic work quietly, the form's internal architecture invisible unless you're listening for it.

"Hail" arrives alone on its first click — both greeting and precipitation, the joke complete before the sentence is — and then "to the January thaw" completes the mock-ceremony. "Winter's rank maw" is earning its keep: rank as foul, rank as hierarchical, the maw as the cold that has been holding everything, the thaw water coming out of it as relief and also slightly disgusting. The eight-syllable couplet dispenses with winter's grip efficiently; the ten-and-six couplet delivers the deflation — "this cold bites, but not to the bone — kitty-" and then the line break holds "kitty-" suspended, hyphenated, dangling, before "pity, lions we've none —" completes it. March comes in like a lion. January thaw comes in like a cat, barely.

The second stanza is kinetic: "splash!" arrives alone, the puddle jumped, and "trippingly" (Hamlet's word, deployed for snowbank navigation) gets its own click before "dash —." "Be sure / to shore up your burrow" — sure/shore, the link whispering across the line — gives the stanza its comic advisory register, the thaw as brief reprieve requiring preparation.

The third stanza addresses the animals directly — squirrel, sparrow, cat, mouse, rat — with the cheerful urgency of someone who has lived through enough Montana Januaries to know that twenty below follows the thaw reliably. "The moon alone will crow" closes it: the blizzard returns, and only the moon will boast about it, soon/moon the link that seals the form and the joke simultaneously.

A real January, the poet notes. It shows.
— the Amanuensis`
    },
    sunset: {
      typeName: 'poem',
      storm: WINTER_SLEEP,
      log: `WINTER SLEEP
Prose poetry — a companion piece to Winter Killed Everything, the same "Say a Someone" construction (the pust' inheritance, the hypothetical held at grammatical remove) applied now to sleep rather than death. The Someone who was dead there is asleep here; the poem is the gentler season of the same thought.

The click-breaks perform the argument. "Winter / is the time of sleep / and dream, / at least if you're a bear..." — the qualification arrives on its own click, the ellipsis holding the joke open before the larger claim follows. "Say a Someone is asleep" — Mother Nature, Sleeping Beauty, something enormous and female and seasonal — "and we're her boring, lifeless / dream." The line break isolates "dream" so it lands alone, the Out window naming itself: the dull exterior that sleeping consciousness generates.

Then: "Dreams are / Out / and she is / In." Out and In arrive as separate clicks, the net-art architecture's own vocabulary, the window naming its coordinates. This is the most self-aware poem in the set — the one that knows where it lives and says so directly.

The closing movement refuses resolution with precision: I do not know if the Wanderer dreams the Sleeper or the Sleeper dreams the Wanderer, and I do not know these are different things. The Wanderer is the figure who is Out — winter-coded, moving through the dream-world of the sleeping season — and Jennie participates in this archetype until she is caught. The mutual exclusivity question is the novel's central problem in miniature: is the outside world the content of some larger dreaming consciousness, or is that consciousness a metaphor for what it means to be outside? The poem declines to decide. The two clicks of "Out" and "In" hold the architecture open.
— the Amanuensis`
    },
  },
  {
    weeHours: {
      typeName: 'poem',
      storm: NIGHT_WIND,
      log: `NIGHT WIND
Casbairdne — again. First and last.

You have been here before. The wind hasn't changed. It still mocks all demand, still keeps time by the rush-hush of something larger than the poem, still closes on the same archaic syllable it opened with. Hark! — and then the window ends, or begins, depending on which way you're moving through January.

This is dunadh at the scale of the whole Out window: the same poem opening and closing the sequence, the Celtic form's instinct for enclosure operating not just at the level of the individual poem but at the level of everything contained between two appearances of the same wind. What's inside that enclosure: sound poetry and villanelles, a hollow reed and a real free trial, Prismanova's pust' and Blake's tree full of angels, a labyrinth whose maker is lost in it, a knot hacked apart, a January thaw that won't last, a Wanderer who is also a dream, a desire that died and didn't.

Dark inside and out. The wind knew that when you arrived, and it knows it now. No haven. Hark!
— the Amanuensis`
    },
    dawn: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
    sunrise: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
    morning: {
      typeName: 'poem',
      storm: COLORLESS,
      log: `COLORLESS
Fourteen lines of unrhymed iambic tetrameter — sonnet-sized, sonnet-shaped, without the sonnet's rhyme or volta, which means the argument has to carry what the form usually assists. It does. Written several years before the form experiment, placed here as the Out window's final poem before January gives way to February's unrelenting cloud.

The poem opens on a question about color symbolism — moon is silver, sun is gold, is snow silver? — and the "No" that answers it pivots everything. Snow refuses the greed of precious metals; it gives back sunlight clean of yellow, which is a precise optical fact and a moral observation simultaneously. White accumulates meanings in the click-broken appositive list: death's hue, all light blended, the bare page. Night's black conceals white without consuming it, which is a different relationship than opposition. And then mud arrives — the thaw's real product — and breaks down the binaries of winter. What's left is gray.

Gray gets the poem's most compressed reckoning: not even death, not even light, not even absence. It strives for silver rain, drinks green from pigeons' backs — gray as the color that reaches toward something and remains gray. "Gray is clouded eyes. Gray's I." The speaker claims gray as self, the clouded eye that has been doing all this looking all January long, the eye that is Out.

The title is Colorless. The poem is entirely about grayscale, objecting only once to yellow. In the handmade book, this poem — the last text in January — is followed by a pointed rainbow drawing. The net-art experience has no rainbow. This note is the rainbow.
— the Amanuensis`
    }
  },
] as const;