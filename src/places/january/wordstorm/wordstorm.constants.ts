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
    A1: 'ct, blue ideal, untehered,',
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
    words: 'kaleidoscope\'s impressions',
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
    line: 4,
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
    },
    dawn: {
      typeName: 'wordstorm',
      storm: WHITEOUT,
    },
    sunrise: {
      typeName: 'acrostic',
      storm: ACROSTICS.january,
    },
    morning: {
      typeName: 'poem',
      storm: WEATHERING_THE_WORD,
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
    },
    sunset: {
      typeName: 'poem',
      storm: ARS_POETICA,
    },
    dusk: {
      typeName: 'poem',
      storm: BIRDITY,
    },
  },
  {},
  {},
  {},
  {
    dawn: {
      typeName: 'poem',
      storm: HAWTHORNE,
    },
    sunrise: {
      typeName: 'poem',
      storm: CATS_OUT,
    },
    morning: {
      typeName: 'poem',
      storm: MACDONALD,
    },
    midday: {
      typeName: 'poem',
      storm: CIRCLES,
    },
    afternoon: {
      typeName: 'poem',
      storm: OUT_FINALE,
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
    }
  },
  {
    morning: {
      typeName: 'poem',
      storm: HYPOTHERMIA,
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
    },
  },
  {
    midday: {
      typeName: 'poem',
      storm: PORTENTS,
    },
    afternoon: {
      typeName: 'poem',
      storm: JACOBS_LADDER,
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
    },
    dusk: {
      typeName: 'poem',
      storm: LABYRINTH,
    },
  },
  {
    dawn: {
      typeName: 'poem',
      storm: KNOT,
    },
    sunrise: {
      typeName: 'poem',
      storm: DESIRE,
    },
    morning: {
      typeName: 'poem',
      storm: BEHIND_THE_FAIRGROUNDS,
    },
    afternoon: {
      typeName: 'poem',
      storm: JANUARY_THAW,
    },
    sunset: {
      typeName: 'poem',
      storm: WINTER_SLEEP,
    },
  },
  {
    weeHours: {
      typeName: 'poem',
      storm: NIGHT_WIND,
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
    }
  },
] as const;
