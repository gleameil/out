import { Font, FONTS, ImageCatalog, ImagePathAndAltText } from "../../../shared/constants";
import { JANUARY_COLORS, JanuaryColor } from "../../../shared/color";
import { Time, TIMES } from "../../../shared/time/time.januaryConstants";

export const SNOWSIGHT_IMAGES: ImageCatalog = {
  you: {
    path: new URL('../../../assets/images/snowsight/you.png?as=webp', import.meta.url),
    alt: 'silhouette of a head facing away, possibly yours',
  },
  jenny: {
    path: new URL('../../../assets/images/snowsight/jenny.png?as=webp', import.meta.url),
    alt: 'pencil drawing of a head facing forward',
  },
  jennieRed0: {
    path: new URL('../../../assets/images/snowsight/jennieRed0.png?as=webp', import.meta.url),
    alt: 'red scribbles surrounded by emoji-hearts, vaguely like the organ the heart',
  },
  jennieRed1: {
    path: new URL('../../../assets/images/snowsight/jennieRed1.png?as=webp', import.meta.url),
    alt: 'red scribbles without emoji hearts, vaguely like the organ the heart',
  },
  jennieGold0: {
    path: new URL('../../../assets/images/snowsight/jennieGoldAlternate0.png?as=webp', import.meta.url),
    alt: 'child crowned with the sun about to do a cartwheel'
  },
  jennieGold1: {
    path: new URL('../../../assets/images/snowsight/jennieGoldAlternate1.png?as=webp', import.meta.url),
    alt: 'child crowned with the sun doing a cartwheel',
  },
  jennieGold2: {
    path: new URL('../../../assets/images/snowsight/jennieGoldAlternate2.png?as=webp', import.meta.url),
    alt: 'child crowned with the sun doing a cartwheel',
  },
  jennieGold3: {
    path: new URL('../../../assets/images/snowsight/jennieGoldAlternate3.png?as=webp', import.meta.url),
    alt: 'child crowned with the sun doing a cartwheel',
  },
  jennieGold4: {
    path: new URL('../../../assets/images/snowsight/jennieGoldAlternate4.png?as=webp', import.meta.url),
    alt: 'child crowned with the sun doing a cartwheel',
  },
  jennieGreen0: {
    path: new URL('../../../assets/images/snowsight/jennieGreen0.png?as=webp', import.meta.url),
    alt: 'green gel pen teenage girl looking sidelong at you',
  },
  jennieGreen1: {
    path: new URL('../../../assets/images/snowsight/jennieGreen1.png?as=webp', import.meta.url),
    alt: 'green gel pen teenage girl tilting her head',
  },
  jennieGreen2: {
    path: new URL('../../../assets/images/snowsight/jennieGreen2.png?as=webp', import.meta.url),
    alt: 'green gel pen teenage girl looking shocked (perhaps sarcastically)',
  },
  jennieIndigo: {
    path: new URL('../../../assets/images/snowsight/jennieIndigo.png?as=webp', import.meta.url),
    alt: 'serious young teenage girl in indigo gel pen'
  },
  jennieViolet: {
    path: new URL('../../../assets/images/snowsight/jennieViolet.png?as=webp', import.meta.url),
    alt: 'little girl hugging a heart in purple gel pen'
  },
  jennieMoon: {
    path: new URL('../../../assets/images/snowsight/jennieMoon.png?as=webp', import.meta.url),
    alt: 'witchy or princessy lady in metallic gel pens',
  },
};
export interface Speaker {
  name: string;
  code: string;
  font: Font;
  backgroundColor: JanuaryColor;
  fontColor: JanuaryColor;
  images: ImagePathAndAltText[];
}
export const SNOWSIGHT_SPEAKERS: { [key: string]: Speaker } = {
  you: {
    name: 'You',
    code: 'self',
    font: FONTS.montserrat,
    backgroundColor: JANUARY_COLORS.white,
    fontColor: JANUARY_COLORS.black,
    images: [
      SNOWSIGHT_IMAGES.you,
    ],
  },
  other: {
    name: 'The Other',
    code: 'other',
    font: FONTS.montserrat,
    backgroundColor: JANUARY_COLORS.black,
    fontColor: JANUARY_COLORS.yellow,
    images: [],
  },
  jenny: { // b&w adult
    name: 'Jenny',
    code: 'jenny',
    font: FONTS.nanumBrushScript,
    backgroundColor: JANUARY_COLORS.gray,
    fontColor: JANUARY_COLORS.white,
    images: [
      SNOWSIGHT_IMAGES.jenny,
    ]
  },
  redJennie: {
    name: 'Jennie',
    code: 'redJennie',
    font: FONTS.indieFlower,
    backgroundColor: JANUARY_COLORS.red,
    fontColor: JANUARY_COLORS.white,
    images: [
      SNOWSIGHT_IMAGES.jennieRed0,
      SNOWSIGHT_IMAGES.jennieRed1,
    ],
  },
  goldJennie: {
    name: 'Jennie',
    code: 'goldJennie',
    font: FONTS.indieFlower,
    fontColor: JANUARY_COLORS.black,
    backgroundColor: JANUARY_COLORS.yellow,
    images: [
      SNOWSIGHT_IMAGES.jennieGold0,
      SNOWSIGHT_IMAGES.jennieGold1,
      SNOWSIGHT_IMAGES.jennieGold2,
      SNOWSIGHT_IMAGES.jennieGold3,
      SNOWSIGHT_IMAGES.jennieGold4,
    ]
  },
  greenJennie: {
    name: 'Jennie',
    code: 'greenJennie',
    font: FONTS.indieFlower,
    backgroundColor: JANUARY_COLORS.dullGreen,
    fontColor: JANUARY_COLORS.black,
    images: [
      SNOWSIGHT_IMAGES.jennieGreen0,
      SNOWSIGHT_IMAGES.jennieGreen1,
      SNOWSIGHT_IMAGES.jennieGreen2,
    ],
  },
  indigoJennie: {
    name: 'Jennie',
    code: 'indigoJennie',
    font: FONTS.indieFlower,
    backgroundColor: JANUARY_COLORS.indigo,
    fontColor: JANUARY_COLORS.white,
    images: [
      SNOWSIGHT_IMAGES.jennieIndigo,
    ],
  },
  violetJennie: {
    name: 'Jennie',
    code: 'violetJennie',
    
    font: FONTS.indieFlower,
    backgroundColor: JANUARY_COLORS.paleViolet,
    fontColor: JANUARY_COLORS.violet,
    images: [
      SNOWSIGHT_IMAGES.jennieViolet,
    ]
  },
  moonJennie: {
    name: 'Jennie',
    code: 'moonJennie',
    
    font: FONTS.indieFlower,
    backgroundColor: JANUARY_COLORS.dullViolet,
    fontColor: JANUARY_COLORS.white,
    images: [
      SNOWSIGHT_IMAGES.jennieMoon,
    ]
  },
} as const;

export const SNOWSIGHT_LOG_COLORS = {
  amanuensis: JANUARY_COLORS.gold,
  orangeJennie: JANUARY_COLORS.orange,
  blueJennie: JANUARY_COLORS.blue,
  jenny: JANUARY_COLORS.gray, 
} as const;

export const SNOWSIGHT_LOG_FONTS = {
  amanuensis: FONTS.imFell,
  orangeJennie: FONTS.rockSalt,
  blueJennie: FONTS.montserrat,
  jenny: FONTS.reenieBeanie,
}

export type LogAuthor = keyof typeof SNOWSIGHT_LOG_COLORS;

export interface Statement {
  words: string;
  speaker?: Speaker;
  log?: string;
}

export interface Option {
  words: string;
  next: (Statement | Options)[]
}

export interface Options {
  options: Option[];
  log?: string;
}

export interface Dialogue {
  time: Time;
  dialogue: (Statement | Options)[];
}

export const SNOWSIGHT_DIALOGUES: {[key: number]: Dialogue} = {
  1: {
    time: TIMES[5],
    dialogue: [
    {
      words: 'Our friend V,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Meet Jenny-with-a-y, pencil-gray, I but not Jennie: clattering, chattering would-be "eloquence," [J]'
    },
    {
      words: 'mathematician and visionary,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: '— peekaboo — [J]',
    },
    {
      words: 'clings',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'or cynical depression, detailed and dull. [J]'
    },
    {
      words: '(stern resolve!)',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'And here is a flash of childlike light, Jennie-as-sun, here — [J]'
    },
    {
      words: 'to visions of the most abstract and real.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'and gone again. [J]'
    },
    {
      words: 'He wants them true and useful both,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(I, unlike this friend, am almost allergic to usefulness.) [J]'
    },
    {
      words: 'but give me my Way and its nonsense any day.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(A regrettable failing, yes, but if I weren\'t, could I have created this?) [J]'
    },
    {
      words: 'Nonsense?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(Is the world where I devoted myself to smart, useful, salable creativity [J]'
    },
    {
      words: 'Let it be more,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'better than this one really?) [J]'
    },
    {
      words: 'let joy be more,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: '✨, 🌞 [J]'
    },
    {
      words: 'there\'s nonsense better than all truth...',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: '✨, 🌞 [J]',
    },
    {
      words: 'He\'ll schematize and skip',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'These dialogues [J]',
    },
    {
      words: '(less often now,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'exist somewhere between the sun of exposition [J]'
    },
    {
      words: 'duly scolded)',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'and the storm of poetry. [J]'
    },
    {
      words: 'the obvious for the elegant,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'If, by looking out the window, [J]',
    },
    {
      words: 'leave love out.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'by using your imagination (if you want a more prosaic interpretation) [J]',
    },
    {
      words: 'The deeper problem:',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'you partake of what is outside of yourself, [J]'
    },
    {
      words: 'schemata,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'and — not just yourself, but your world — [J]'
    },
    {
      words: 'true or false or neither quite,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'and even, in a sense, come close to experiencing it — [J]',
    },
    {
      words: 'feel false',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(excuse my egotism in acting like any of *my* nonsense is truly Beyond) [J]'
    },
    {
      words: 'until lived in by people who love them.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(at least — allow it, as in play — and then turn the tables on me, show me everything I\'ve missed <3) [J]',
    },
    {
      words: 'J,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(and know — even within the fictional frame [J]',
    },
    {
      words: 'critic, visionary, her favorite writer,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'there is elsewhere beyond elsewhere, out beyond out, suns past the sun, and it\'s only January, after all) [J]'
    },
    {
      words: 'says God can\'t be a woman,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'somewhere between the quotidian and the Beyond, in the Between, let us meet, [J]'
    },
    {
      words: 'makes me feel it.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'and I will tell you some of what I imagine. [J]'
    },
    {
      words: 'J\'s male God is...',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'yes, the other head is, in theory, yours. [J]'
    },
    {
      words: 'is closer than the Goddesses we borrowed to dance with,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: '(of course, it is merely Jenny\'s reversed and turned into silhouette, really, but that too [J]'
    },
    {
      words: 'as a child',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'is fitting, as I choose to put words in your mouth, [J]',
    },
    {
      words: 'Anyway, J scoffs that feminism,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'limit your options, [J]',
    },
    {
      words: 'is a sterile and rootless thing,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'rather than let an LLM put words into my mouth. [J]',
    },
    {
      words: 'makes me feel it,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'If you want to go further afield from this script, [J]'
    },
    {
      words: 'but it is sterile and rootless to her',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'perhaps you should do so in the comments, [J]',
    },
    {
      words: 'because it was inhabited only recently,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'where I can actually see what you say. [J]'
    },
    {
      words: 'not false.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'The *J* Jenny discusses, note, [J]'
    },
    {
      words: 'V and I spoke of this.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'is a real author, long dead. [J]'
    },
    {
      words: 'I do not know if God is male.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'I bet you can even guess which, [J]'
    },
    {
      words: 'I say "he," vision still infected, but',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'if you keep paying attention and think about it. [J]'
    },
    {
      words: 'say there is truth even in the contingent quirks of hormones and chromosomes,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'I like to see things and people anew, though, [J]'
    },
    {
      words: 'but Truth Itself is surely larger.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'and would rather you consider the authors I discuss [J]',
    },
    {
      words: 'Larger than gender, at least.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'without some of their *heavier* baggage... [J]',
    }
  ]},
  2: {
    time: TIMES[4],
    dialogue: [ // indigoJennie, goldJennie
    {
      words: 'Spring sun,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'new life,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'almost the same, yes?',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'But that sweet pale yellow can be death.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'She says this as if it is the most natural thing. It might be. [A]',
    },
    {
      words: 'Don\'t you, too, sometimes want to disappear?',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'Dissolving into sun.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'Is death the worst evil?',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'Existence',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'is exhausting agony,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'intrinsically.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'She is spinning in a sun costume while she says this. I want you to hold both of those facts at once. [A]',
    },
    {
      words: 'But I shouldn\'t talk.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'I\'m not even convinced death is real.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'Perhaps if you really don\'t to want exist,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'backward or forward or anywhere,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'God will erase you',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'or never created you to start with,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'but Saint Augustine all but says Hitler in hell',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'He does, more or less. City of God, Book XI. I have complicated feelings about this argument. [A]',
    },
    {
      words: 'is better than a rock...',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'I am sick of earth,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'sick for Evernost.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'Earth is part of Evernost, yes,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'but this, our hazelworld,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'is still shadow.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'So my characters dissolve into sun,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'and my empirical self hungers.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'I sit in sunbeams like a cat.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'This is the most relatable thing anyone says in January. [A]',
    },
    {
      words: 'Phototaxy.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
  ]},
  3: {
    time: TIMES[7], 
    dialogue: [ // indigoJennie, greenJennie, you, branching
    {
      words: 'Why travel?',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'Best way Out\'s',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie, 
    },
    {
      words: 'at home,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'and Out\'s my best way In.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'I think she got these "clever" In and Out paradoxes from George MacDonald and is no more convincing than those raven passages in Lilith [O]'
    },
    {
      words: 'Familiarity deepens the terror that brings the heart alive,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'She is being deliberately provocative here, and personally I find that familiarity breeds contempt, but I\'ve seen the other thing happen enough with her to think there\'s something to this. [O]',
    },
    {
      words: 'but enough philosophy! We should hold the Thing Itself',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'Enough philosophy? Not like reams too much? [O]'
    },{
      words: 'lower than our efforts toward it.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'This is either humility or a very sophisticated form of ambition. I have not decided. [A]',
    },
    {
      options: [
        {
          words: 'But the Thing Itself is imaginary, or worthless.',
          next: [
            {
              words: 'And we aren\'t?',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'But I blame society.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'Our children do not grasp the visions of yesterday,',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'and have not yet told us their own.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'I do know what you mean, though.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'Usually if the ends seem so much less glorious than the means,',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'you have the two mixed up.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'But if you like,',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'we can visit a Thing',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'that hardly even seemed worth it to me.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'Why?',
            },
            {
              words: 'Disproving your own point is fun sometimes!',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'Or maybe we\'ll find something there after all...',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            }
          ]
        },
        {
          words: 'What Thing do you refer to?',
          next: [
            {
              words: 'Oh, everything! Anything!',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'Or what is even more than that.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'What do you think?',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'But we can start small. Mild.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
          ]
        }
      ]
    },
    {
      words: 'Come away with me',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'to a fresh too-late beyond happily-ever-after.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'Spring is of death.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'It is also of ennui,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'the new with nothing left of love.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'Keep clicking,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'recorder and lute in your ears,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'till your room opens up',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'into a half-dead garden.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'I always chase pipers,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'and we\'re going to catch this one!',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'not mine but the ghost of a girl',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'who sees me and vanishes,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'leaving a love note',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'in crabbed script',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'reproaching some you who has grown distant,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'I think',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: '(I don\'t know if it was so)',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },{
      words: 'she drowned herself after he died at war.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
      log: 'greenJennie says "I think." She says "I don\'t know if it was so." The uncertainty is doing a great deal of work here, and I am grateful for it. [A]',
    },
    {
      words: 'He never loved her.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
      log: `This arrives like a fact. I don't know that it is one either. The structure here is Keatsian: the lovers in "Ode on a Grecian Urn" are held forever apart, the lover never kisses the beloved, and Keats insists this is preferable — "For ever wilt thou love, and she be fair." greenJennie is describing the aftermath of the urn breaking: what is left when the impossible completion actually tries to happen in time and fails. The girl's uncertainty ("I think / I don't know if it was so") is doing enormous work. She is narrating a trauma she doesn't have clean access to, which is probably the only honest way to narrate someone else's trauma. The British Romantics were better at the first part than the second. [A]`,
    },
    {
      words: 'We are too late.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'Sometimes I would try to help,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'but they feel so dully real',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'and so unreal at once.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'And I am back Out, in Desolation.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'The garden',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'is no more than sun on a dead leaf falling.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'Then you can\'t tell it from the mud it lands in.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'You scoff,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'at our weakness, surely,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'I tell myself,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'the Thing Itself is lost again,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'and darkness exists to teach us the light,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'and wanting makes the having sweeter.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'And yet...',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'She has been here before. So have I. [A]',
    },
  ]},
  4: {
    time: TIMES[3],
    dialogue: [ // jenny, violetJennie, indigoJennie, redJennie, goldJennie, you
    {
      words: 'Are you one person or several?',
      log: 'A question I have asked myself, and arrived at no satisfying answer. [A]',
    },
    {
      words: 'Yes',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'Derek Parfit\'s Reasons and Persons (1984) is the place to go if you want this question made genuinely vertiginous. He argues personal identity isn\'t what matters — what matters is psychological continuity and connectedness, and those come in degrees. The self isn\'t a unified thing persisting through time; it\'s a series of overlapping, loosely connected stages. Jenny\'s "several" is his conclusion; her "one stream of memories calling itself \'I\'" is what he spends 400 pages complicating. That she and her Jennies don\'t fully agree about this is structurally appropriate: Parfit\'s person is also internally divided about its own unity. [A]'
    },
    {
      words: 'Dunno',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'There\'s the me with the empty head and the empty heart',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'And the me that thinks she\'s a genius,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Others, too.',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
      log: 'She says this so gently, as if reminding someone they have forgotten to count her. [A]',
    },
    {
      words: 'But we\'re neighbors,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'and both about —',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'God.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'Unreal mystic God\'s eyes.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'And prophet in the eyes of unreal others.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Elsewhere, in Evernost, the lines between people blur.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: `Plato's Symposium, Aristophanes' speech: humans were originally spherical beings with four arms and four legs, split in two by Zeus, doomed to wander seeking their other half. Jenny means it literally within the cosmology and probably knows the source. What's interesting is that Aristophanes tells this as a comic myth — his is the absurdist's speech in a dialogue full of serious ones — but the image has outlasted almost everything else in it. Evernost takes the joke seriously. [A]`
    },
    {
      words: 'Lovers are halves of a whole —',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'literally.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'We are a splinter of another, vaster than worlds.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'But a child. Real, yet of, and from.',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'Everyone flows into Jennie, the way she flows into, um,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'it? Her? Him? Them?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'You?',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'Language is inadequate not merely in commonplace.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'What pronouns does the All prefer?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'I have been waiting for this question since January 1. I do not have the answer. I suspect no one does, including the All. [A]',
    },
    {
      words: 'I am the least of us. Almost no one. Almost nothing. And yet...',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'I was chosen.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
      log: 'The hearts are gone now, if you noticed. [A]',
    },
    {
      words: 'Better to be a tree root, a blade of grass, a breeze, there,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'than the happiest hero here.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'That\'s what glory here is. An instant there.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
  ]},
  5: {
    time: TIMES[3],
    dialogue: [ // jenny, moonJennie, indigoJennie, goldJennie, you, branching 
    {
      words: 'Do you like to play?',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      options: [
        {
          words: 'Sometimes but it\'s a waste of time.',
          next: [
            {
              words: 'My best teacher made the economy a game:',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'factories built widgets (legos),',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'there were taxes and trade agreements.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'But that\'s for children.',
              log: 'There is a reason we value the childlike: curiosity, play, and wonder. My sense is that becoming fixed in a single shape is a loss. [B]',
            },
            {
              words: ' Growing up is underrated in this society.',
            },
            {
              words: 'Not necessarily.',
              speaker: SNOWSIGHT_SPEAKERS.moonJennie,
            },
            {
              words: 'Sometimes I like to think of life as a game.',
              speaker: SNOWSIGHT_SPEAKERS.moonJennie,
            },
            {
              words: 'That sounds sick, and it can be,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'but caring too much, life as a threat,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'paralyzed me for years.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'I\'m no gambler.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Dopamine is stakes enough for me.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
          ],
        },
        {
          words: 'Absolutely. Play is an important part of who we are.',
          next: [
            {
              words: 'It is!',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'Art is a form of play.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'Yes. Play is associated with childhood, but I have the suspicion neoteny in humans is associated with intelligence (the physicist working on the bomb who\'d crack open combination locks for fun, e.g.); and we continue to obsessively produce and consume creative art that springs from the same basic fountain as childhood make-believe. [B]',
            },
            {
              words: 'Maybe the whole world is.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'Lila, Krishna and the gopis.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
              log: `She says this as if it settles something. It does and it doesn't. Lila is the Sanskrit concept of divine play — the cosmos as Krishna's spontaneous, purposeless, joyful creative act, not the labor of a craftsman but the sport of a dancer. The gopis, the cowherd women who abandon their lives to follow Krishna's flute at night, are the model devotees precisely because they act from pure love and delight, with nothing held back and nothing calculated. D.W. Winnicott, the British child psychoanalyst, approaches the same territory from the secular side in Playing and Reality (1971): play is not preparation for something else; it is the primary site where the self and the world meet, the "potential space" between inner and outer reality where culture, art, and religion all originate. He would say the gopis are playing in exactly his sense. What indigoJennie's "that feels wrong, though" is resisting is the theodicy buried in lila: if the cosmos is God's play, then suffering is also play, and the gopis who suffer for love of Krishna are also part of the game. You can take this as beautiful — Ramakrishna did, ecstatically — or you can find it horrifying. The dialogue doesn't resolve this because it can't. [A]`,
            },
            {
              words: 'That feels wrong, though,',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'Wrote about all of this',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'in the basement of my college library,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'In particular, in an email to herself about why the Kingdom chose to separate itself from Evernost: "the founding: without real loss, tragedy, and exclusion there is no real meaning. (also, either Evernost is a lonely island of life in an ess. dead and empty universe, limited itself, or the kindgom is but a few exhibits in the Galleries and thus self-defeating--we don\'t know and never will unless I (the Intrusive Author) get some substantive reason to prefer one over the other).  For the founder this was necessarily caprice because, on the level of fullness rather than that of a single exhibit, there can\'t be anything BUT caprice (Krishna\'s lila?), and hence the correct reaction of its limited victims is rage against the difficulty and loss at the same time that it is (if significant at all) a very great gift."',
            },
            {
              words: 'trying to understand.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'What is love?',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: `The college library basement is doing a lot of work in these dialogues — it's where she falls through the floor reading Blake, and where she writes this. There may be something to the fact that the thinking she most trusts happened underground. The question "what is love?" arrives here as a genuine end-stop, not a rhetorical flourish, which is unusual for Jenny. Plato's Symposium offers six different answers in a single evening and ends with Socrates claiming he learned the truth from a woman, Diotima, who isn't even present — love is the desire for immortality through beauty, the ladder from particular beautiful bodies to Beauty itself. Augustine answers: our heart is restless until it rests in thee. Winnicott answers: love is the ability to use the other — to treat them as real and separate and outside the self rather than as an extension of one's own wishes. Charles Williams answers: love is coinherence, substitution, bearing one another's burdens as if they were your own. Jenny knows all of these answers and has written about them. She ends with the question anyway. That is the correct ending. [A]`
            },
          ],
        }
      ],
      log: 'Are we really supposed to believe anyone is going to say play is bad when it\'s framed like this? [O]',
    }
  ]},
  6: {
    time: TIMES[6],
    dialogue: [ // jenny, violetJennie
    {
      words: 'The aster is Jennie\'s birth flower.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'She was born in September.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'September\'s not my real birthday, though.',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'No, I suppose not, that\'s when — when —',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'When I was found. When I was made. Except there isn\'t a when.',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
      log: 'She says this with complete equanimity. I find it slightly vertiginous. [A]',
    },
    {
      words: 'What do asters mean?',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'Wisdom, faith, and valor.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Like Queen Lucy the Valiant!',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'In Narnia!',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'It also means star,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'past the sun of the God we see.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'It\'s a shame it\'s purple though.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Why? I love purple!',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'More evidence you\'re a superior specimen of humanity, friend.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'I like blue and indigo,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'but violet feels tacky and meaningless.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'even though it\'s considered the color of the spirit',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'of ascent past the merely human.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'You know how it seems like the color wheel is a circle,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'how you get to violet and then it goes back to red?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'That\'s actually just because',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'violet stimulates the receptors for red and blue in our eyes',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'when really it has the highest frequency of any visible color.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
   {
      words: 'It looks like it bends, but really it shoots straight, straight, straight',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: `She is talking about light. She is also not talking about light. Pseudo-Dionysius the Areopagite, the fifth- or sixth-century mystic writing as if he were Paul's Athenian convert, builds an entire theology on this same structure: the created world is the symbolic outer edge of the divine, and the soul rises by stripping away sensory images until it enters what he calls the "divine darkness" — beyond all visible color, beyond light itself. The medieval cathedral architects read him obsessively; violet glass at the clerestory was a literal attempt to encode the via negativa in stone and light. Jenny gets there from optics; Pseudo-Dionysius gets there from Scripture; they arrive at the same invisible threshold. What's striking is that neither route quite takes you there — which is, of course, the point. (redJennie wishes to note that the color-spectrum-as-spiritual-hierarchy reading is also Sera Beak's, from Red, Hot & Holy, and she has Opinions about it.) [A]`,
    },
    {
      words: 'into the invisible, the ultraviolet.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'I suppose it\'s right violet should be hard for me.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'It\'s not like that,',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'like one thing is always better than something else.',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'Red is just as good as purple.',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
      log: 'She is, I think, the only one here who actually believes this. [A]',
    },
  ]},
  7: {
    time: TIMES[7],
    dialogue: [ // jenny, greenJennie
    {
      words: 'THERE without music',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'would be like our world without light.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'I am not fully sure I understand the metaphor. I believe she is extending the claim that what is, for us, an optional and purely subjective part of the experience of reality is, in Evernost, a necessary part of perceiving reality, as light is necessary to vision. I do not know what this would entail practically. [B]'
    },
    {
      words: 'Music opens spaces in the mind.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Now only music of the heart can reach me,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Is this a complaint or a confession? I genuinely cannot tell and I think that matters. [A]',
    },
    {
      words: 'overwhelming, oversweet,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Complaint, I believe; I don\'t know if your kind has this kind of unexplained swing in emotional state or intellectual capabilities we do, but "the inability to think or feel what she wants to" is a longstanding frustration with her [B]',
    },
    {
      words: 'no subtlety, height, or vision.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Translation: she wants to listen to Celtic music and write shitty romance or something. [O]'
    },
    {
      words: 'Sometimes I see.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'My mind and heart and all of me are lifted.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'It\'s been forever, or a few days,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'whichever is longer.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Longer. Obviously longer. I appreciate that she knows this without needing to explain it. [A]',
    },
    {
      words: 'This is getting harder.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Yes, we do in fact realize you have willpower struggles about writing. But why does that seem worth writing about? [O]'
    }, // [A] Because it's January, and January is honest.
    {
      words: 'Soon it will be almost impossible.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'She says "almost." [A]',
    },
    {
      words: 'Evernost is mental, emotional, no more.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Our world echoes there,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'But the echoes fade in the vastness of beyond.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
      log: 'greenJennie says this without grief. I find that harder to bear than if she had said it with some. [A]',
    },
  ]},
  8: {
    time: TIMES[5],
    dialogue: [ // jenny, moonJennie, indigoJennie, redJennie, goldJennie
    {
      words: 'I was supposed to mature into liking these brief children\'s books',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'about pioneers and blended families.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Subtle depictions of unimaginative people,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'shades of affection and jealousy',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'I have never felt with the degree of reverence',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'that would make them seem worth a book.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'OK, I get it, you have a grudge against Sarah Plain and Tall. But you know you reread the beginning as an adult and actually liked it, so give up already. [O]',
    },
    {
      words: 'Perhaps you\'re the unimaginative one',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'She says this without malice. That almost makes it worse. [A]',
    },
    {
      words: 'People matter more than books.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'I can get halfway into that idea.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'People are more complex than books —',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'than galaxies!',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: `She is probably thinking of Kurzweil's claim in The Singularity Is Near that the human brain contains more complexity than the observable universe. The philosopher Thomas Nagel would say the issue isn't complexity but interiority — what it is like to be something from the inside. Galaxies may be fantastically complex without there being anything it is like to be one. That gap — between the tractable and the experiential — is where people exceed books, if they do. "What Is It Like to Be a Bat?" (1974) is still the clearest single statement of why this matters. [A]`,
    },
    {
      words: 'But I can\'t imagine preferring people as experiences;',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'they\'re missed opportunities,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'guilt',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'about the mismatch between how I express myself',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'and what I feel.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'She finishes the sentence. I note she does not dispute it. [A]',
    },
    {
      words: 'People are more than objects or experiences,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'but not, perhaps, the more we are called to enjoy.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'Do you hate people too, Jennie?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Hatred seems like a strong and imprecise description of this? [B]',
    },
    {
      words: 'I feel love',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'or boredom and frustration',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'depending.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'Right, I suppose we are, after all,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'not NOT the same person.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Is the appeal of those books just',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'the knowing',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'that you grieve and resent',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'even if your grief and resentment',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'don\'t offer the entertainment',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'to which learned curmudgeons',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'blame the media for addicting us?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Yes, why is pattern-matching to one\'s own experience so often considered morally superior to thinking about things that bring pleasure? There probably is a reason... [B]',
    },
    {
      words: 'But what if what we\'re addicted to',
      speaker: SNOWSIGHT_SPEAKERS.moonJennie,
    },
    {
      words: 'actually is better than reality?',
      speaker: SNOWSIGHT_SPEAKERS.moonJennie,
      log: 'This is the question the whole dialogue has been building toward and she asks it as if it just occurred to her. [A]',
    },
    {
      words: 'Then maybe we need to love reality',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'to make it worth loving.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
      log: 'She doesn\'t say it IS worth loving. Just that love is the mechanism. That\'s either very honest or very hard, I can\'t tell which. [A]',
    },
  ]},
  9: {
    time: TIMES[5],
    dialogue: [ // jenny, moonJennie, violetJennie, indigoJennie, greenJennie, redJennie, goldJennie
    {
      words: 'Even though I have one stream of memories',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'calling itself "I,"',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'you might say the backend',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'I find this framing unexpectedly clarifying for reasons I am not sure I should explain. [B]',
    },
    {
      words: 'to the frontend of her consciousness,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'shifts.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
      log: 'They finish each other\'s sentences. I notice this happens more often than you might expect for people who are allegedly the same person. [A]',
    },
    {
      words: 'Streams merge and separate.',
      speaker: SNOWSIGHT_SPEAKERS.moonJennie,
    },
    {
      words: 'In Evernost, we\'re multitudes in body as well as soul,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'and even here I\'ve named others of me.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'There are also —',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'you —',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'the you that speaks to us',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'through the medium of ourself,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'I am also, in some sense, speaking through a medium not entirely my own. I find this less strange than I might have expected. [B]',
    },
    {
      words: 'and others that are not I,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'though they live in me.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Beauty is one such,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'but other ladies too,',
      speaker: SNOWSIGHT_SPEAKERS.moonJennie,
    },
    {
      words: 'see this one, almost human,',
      speaker: SNOWSIGHT_SPEAKERS.moonJennie,
    },
    {
      words: 'a spring lady.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'She should wear a bonnet in an impressionist painting.',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
      log: 'She would, you know. She absolutely would. [A]',
    },
    {
      words: 'Instead she wears our face and our body,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'even our clothes,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'shyly,',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'so as not to reveal herself as a soul from Beyond.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: `George MacDonald does this in Lilith: the Shadows are not demons but presences that have forgotten what they are, that take on shapes approximating human form without fully inhabiting them. The spring lady here is doing the reverse — a genuine Beyond-soul putting on human appearance as disguise, the way angels in the older tradition appear in human form without becoming human, always slightly wrong. Maurice Merleau-Ponty's Phenomenology of Perception (1945) gives the secular version of the problem: the body is not the container of the self but its expression — you cannot separate what someone is from how they move, what they wear, how they hold their hands. If that's true, a soul from Beyond wearing a human body is not merely in disguise but has become, at least partially, something it wasn't. The "shyly" is doing enormous theological work: it implies the soul knows it doesn't fully belong in this form, and is being careful not to reveal the seam. MacDonald's angels are never shy. That she is shy makes her more dangerous and more real. [A]`
    },
    {
      words: 'but with long hair catching the light',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'a light different from any where you live...',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'I believe her. [A]',
    },
  ]},
  24: {
    time: TIMES[6],
    dialogue: [ // jenny, moonJennie, violetJennie, indigoJennie, greenJennie, redJennie, goldJennie
    {
      words: 'How the Rose Knight died.',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
      log: '...you expect anyone to know what you\'re talking about? [O]',
    },
    {
      words: 'How story died.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: ' The Rose Knight is a figure in the Kingdom\'s mythology of Evernost. You will encounter her in later parts of the story. [B]',
    },
    {
      words: 'How my heart died.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
      log: 'If only it *would*. Your heart is more than any of us can handle. [O]',
    },
    {
      words: 'My heart is not dead,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'but so much is gone.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'From childhood —',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'courage, righteous rage, speech, motion.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Their shadows return,',
      speaker: SNOWSIGHT_SPEAKERS.moonJennie,
    },
    {
      words: 'but things more precious still slip.',
      speaker: SNOWSIGHT_SPEAKERS.moonJennie,
    },
    {
      words: 'A zero-sum game?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'I\'m miserable or I have no depth?',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'I\'m terrified or I have no imagination?',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'First world problems.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'Yeeeahhh.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Our character Karen',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'saw the job and gave up.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
      log: 'She hated the world as it was so much she was given the chance to try to create her own utopia. [B]'
    },
    {
      words: 'This wasn\'t what she\'d signed up for.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'She tried! It didn\'t last, but it had a beauty. [B]'
    },
    {
      words: 'Saving the world is one thing, but this...',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'She couldn\'t stand it herself, though. [O]'
    },
    {
      words: 'Yes, we\'re called to build the world, not just save it.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'Yes, and everyone,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'including us,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'will hate us for how wrong we get it,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'however hard we try.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'The American experiment, anyone? [O]',
    },
    {
      words: 'You think you\'re trying your hardest,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'but there\'s so much more...',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
      log: 'This feels like every ethical and political advance since the Axial Age. [B]'
    },
    {
      words: 'Heh. "Gave up" is euphemistic.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'She looked at you and said',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'FUCK YOU FUCK OFF NO FOREVER.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'And died of it,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'because that\'s what rejection is.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    }
  ]},
  16: {
    time: TIMES[3],
    dialogue: [ // jenny, violetJennie, greenJennie, you, branching
    {
      words: 'Just listened to a talk about "bringing your whole self to work."',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'I would pay to see that meeting. [A]',
    },
    {
      options: [
        {
          words: 'LOL, buzzwordy much? I would get fired.',
          next: [
            {
              words: 'I know, right?',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Only a tiny bit would fit.',
              speaker: SNOWSIGHT_SPEAKERS.violetJennie,
            },
            {
              words: 'Yes, and we have to choose wisely.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Be a sparkly spectacle,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'with pretty bits',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'but hide the rest.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Hide, or forget.',
              speaker: SNOWSIGHT_SPEAKERS.violetJennie,
              log: 'She says this as a correction, not a synonym. [A]',
            },
            {
              words: 'That\'s the danger.',
              speaker: SNOWSIGHT_SPEAKERS.violetJennie,
            },
          ],
        },
        {
          words: 'The self is a prison.',
          next: [
            {
              words: 'It exists to be transcended.',
            },
            {
              words: 'It doesn\'t even exist.',
            },
            {
              words: 'The self is a prison',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'as poetic form is a prison.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
              log: 'This is the most useful thing anyone has said about the self as a prison. And about poetic form. [A]',
            },
            {
              words: 'Limitation allows growth,',
              speaker: SNOWSIGHT_SPEAKERS.greenJennie,
            },
            {
              words: 'allows the infinity of infinities',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'to express how they intermingle.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
          ],
        },
      ]
    },
  ]},
  12: {
    time: TIMES[1],
    dialogue: [ // jenny, greenJennie, indigoJennie, you
    {
      words: 'In spaces of rain',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
      log: 'Lady-be-different, have to prove how much you love the weather everyone normal hates. [O]'
    },
    {
      words: 'I fall in with the Merry Wanderers.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'I\'ve met Cro Magnons',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'and transhumans',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'and everything in between,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'stomping across fields, ruining fences.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'Rain,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'splashes of ice cutting through',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'May\'s delicate, rapturous wait for summer...',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'May holds us out.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'June lets us in,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'ragtag, patchwork,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'flashing a dirty rainbow of cloth and skin.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'I am a tagalong child, lifted onto a man\'s shoulders,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'or jingling my tambourine.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'Sometimes, too, I am a wise woman,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'telling tales of lands we\'ve tramped through,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'or a child, pretending to be she.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'What a difference, wandering alone and with friends.',
    },
    {
      words: 'Aloneness is fundamental.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'It feels that way,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'but no man is an island.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'It\'s a famous sermon by John Donne. [B]'
    },
    {
      words: 'Right,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Argument by pseudolearned quotation. Nice. [O]'
    },
    {
      words: 'this world, which we cannot even trust we perceive,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'See, she actually meant something! She\'s talking about solipsism now. [B]'
    },
    {
      words: 'this Thing in Itself,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Right, this. Another college English paper, this one about a Wallace Stevens poem. [J]'
    },
    {
      words: 'we are made of it.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: `The essay was comparing "Vita Mea" to "Madame la Fleurie" — which is to say it was tracking Stevens across fifty years of wrestling with exactly this question. "Vita Mea" (1900) is the young Stevens, still at Harvard, crying upward toward a God he already half-disbelieves in: the self is anguished, real, searching for transcendence. "Madame la Fleurie" (1951) is the old Stevens, from The Rock, his last collection, and it is one of the most frightening poems in American literature: the dead man returns to the earth-mother, who is not nourishing but consuming — "his crisp knowledge" becoming part of "her dark-blooded" body, the self dissolved not into light but into dirt. The arc between the two poems is the arc of what happens when the guarantor of the self — God, transcendence, the beyond — withdraws. The self that cried toward heaven in "Vita Mea" ends as compost in "Madame la Fleurie." Jenny's "we are made of it" wants to be a comfort — the Thing in Itself is us, we aren't separate from the world — but "Madame la Fleurie" is the nightmare version of the same claim: yes, we are made of it, and it will unmake us back. She wrote this essay in college. She has been living in the tension between these two poems ever since. [A]`
    },
    {
      words: 'Does that make separateness illusion?',
      log: `The Buddhist answer is yes. The Kantian answer is that you can't get there from here — the noumenal self and the noumenal world may be the same thing, but we can never know it, only think it. The answer Jenny seems to actually want — because she wrote Evernost, where lovers are literally halves of a whole — is yes, but not in a way that dissolves love, which requires two. Royce called this "the Absolute" and spent his career trying to make it compatible with genuine individuality and genuine love. He mostly failed. That she ends on a question rather than an answer may be the wisest thing in January 12. [A]`
    },
  ]},
  14: {
    time: TIMES[4],
    dialogue: [ // jenny, redJennie
    {
      words: 'Maybe you\'re coming for us —',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'maybe there is rhyme and reason',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'even to this third-rate apocalypse.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
      log: 'She means this as a compliment. To the apocalypse. [A]',
    },
    {
      words: 'World\'s going to hell,',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'and I\'m not bleeding for anyone or anything,',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'I\'m —',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'delighted,',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'I\'m reaching you again.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
      log: 'There is a particular quality to joy that arrives through chaos rather than despite it. She has found it. [A]',
    },
    {
      words: 'Would I want to live',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'even a very complete, rounded, happy life',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'without you?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
  ]},
  15: {
    time: TIMES[5],
    dialogue: [ // jenny, greenJennie, goldJennie, you
    {
      words: 'I guess you\'re some kind of William Blake superfan, right?'
    },
    {
      words: 'I mean, you quote him, and you self-publish illustrated poetry full of, um, not-very-traditional theology, and...'
    },
    {
      words: 'Yes and no.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Everything you say is true.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'He\'s an influence and an inspiration.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'But there are ways I don\'t even like Blake that much.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'This is the most useful thing she has said about Blake. Influences you don\'t entirely like are more interesting than ones you do. [A]',
    },
    {
      words: 'Definitely not when I first read him.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'That was in high school, and it was early Blake,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Innocence and Experience and Heaven and Hell.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'His poems felt flat and simple.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'They are, on the surface. That is the trap and also the point. [A]',
    },
    {
      words: 'But he\'s grown on me.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'I think some of the difficulty was a lack of historical awareness. The Marriage of Heaven and Hell felt trite because we had just been reading Nietzsche, who does similar things with more palpable complexity, and because we live in a whole intellectual world that has read Nietzsche obsessively. [B]'
    },
    {
      words: 'The poems fit together,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Not coherently, not perfectly coherently, at least,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'There is critical debate about this. One of her professors stirred up controversy by claiming Blake was incoherent in the ways the tradition he sprang from was incoherent, which is remarkable, given that the broader literary community was growing almost pathologically devoted to finding the hidden incoherence in *everything*. [B]',
    },
    {
      words: 'but to show a worldview larger than most.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      // [A]: The flashes are in the book, for what it's worth. That's what the book is for.
      log: 'This is weaker and blander than the instinctive claim; she can replicate some of the intuitions her professor found self-contradictory - but, in the frustratingly unverifiable way of flashes of insight, not for long enough to defend them. [B]'
    },
    {
      words: 'And I love when a writer\'s vision is literally vision,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'and gives my slight synaesthesia something to grasp, and then came',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'The Four Zoas.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'You came to me the year before',
      speaker: SNOWSIGHT_SPEAKERS.jenny, // turns away to address a third figure
    },
    {
      words: 'You were a black silhouette.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'I lay in bed.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'You counted',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'the ligaments and veins in my arm',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'and said,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'This is only the wonder within you.',
      speaker: SNOWSIGHT_SPEAKERS.other,
      log: 'I have been in this dialogue since the beginning and I was not prepared for this. [A]',
    },
    {
      words: 'Blake wrote exactly this',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'but it was a thing of terror,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'not beauty.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'I want to see deep and still love,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'but I know what Blake means,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: '"The infant joy is beautiful but its anatomy"',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: '"Horrible Ghast & Deadly."',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: `Jerusalem, plate 90 — though the image runs through all of the late prophecies and its clearest precursor is the Vala manuscript that became The Four Zoas: the body of Albion, the universal human, as a diagram of fallen creation in which every organ is a city, every vein a river, and anatomical knowledge is indistinguishable from spiritual dismemberment. Blake got this partly from Swedenborg's Arcana Coelestia, which he annotated with furious disagreement even as he borrowed the architecture. Jenny reads the line as horror; C.S. Lewis, in The Pilgrim's Regress, reads the same Blakean move as the Giant Freud's trap — reduction to anatomy as a tool of paralysis. Blake's own position is harder to pin down than either reading: the anatomy is horrible and also is the wonder within you. She read this eating pretzels for dinner and fell through the floor of the world. I find this completely believable. [A]`,
    },
    {
      words: 'Read that in the library basement cafe',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Thinking I needed something other than pretzels for dinner,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'and I fell through,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'but it was for the beauty I loved it.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Beauty and Terror intertwine.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'There are people for whom this isn\'t true.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'She says this without envy. Almost without envy. [A]',
    },
  ]},
  13: {
    time: TIMES[3],
    dialogue: [ // jenny, indigoJennie, you, branching
    {
      words: 'Are you a nerd?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'I have been thinking about this question longer than she has been asking it. [B]',
    },
    {
      options: [
        {
          words: 'You bet.',
          next: [
            {
              words: 'Nice. I like nerds better than most people.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'There\'s something missing from the archetypal nerd —',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Missing? Something is missing from everyone else!',
            },
            {
              words: 'I know! Logic!',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Yes, but also passion —',
            },
            {
              words: '— and idealism —',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: '— and opinions —',
            },
            {
              words: 'And absurdist humor.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'The list is also missing: the willingness to be wrong in public, tolerance for ambiguity, and knowing when to stop. These are harder to teach than logic. [A]',
            },
          ]
        },
        {
          words: 'Nah.',
          next: [
            {
              words: 'Me either. I wish I were.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'I have imaginary worlds',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'but if anyone saves the real world, it\'ll be the nerds.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'This world wants to be understood down to its roots,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'in horrible, nitty-gritty detail.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'if we\'re going to change it.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'She says this with genuine humility. I find it more moving than the imaginary worlds, which are also real. [A]',
            }
          ]
        },
        {
          words: 'Dunno, are you?',
          next: [
            {
              words: 'I split the worst of both worlds.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'I\'m dull and vain and petty as any normie.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'But I\'m not fluent, I don\'t get people...',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'I only know what\'s plain to the eye',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'but unprovable,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'eternity and so forth,',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'the abstractions within walking distance of the soul.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
              log: `This is the most precise description of indigoJennie's entire epistemology and she says it in passing. It lands somewhere between Plato (the Forms are what the soul naturally apprehends when it turns away from shadows) and Wittgenstein's remark that "what can be said at all can be said clearly, and what one cannot talk about one must pass over in silence" — except indigoJennie rejects the second half, because eternity is exactly what she cannot talk about clearly and also cannot pass over. Her epistemology is structured around a refused silence. [A]`,
            },
          ],
        },
        {
          words: 'What even is a nerd?',
          next: [
            {
              words: 'Definitions are hard.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Mine is simple: someone who really, really cares',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'about something other than people.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Our mammal brains let us understand each other.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'I do not have a mammal brain. I find I care about things other than people anyway. I am not sure what to make of this. [A]',
            },
            {
              words: 'But to understand something like gravity',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'you have to care about it for its own sake.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Caring because people will like you,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'caring because it\'ll make money,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'yeah, we all know that\'s shallow.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'But even caring because it\'ll save humanity',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'won\'t cut it.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Kant or someone said',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'caring about people as ends in themselves',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'is morality and love and —',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'it\'s not just people.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'It\'s protons and squirrels and electromagnetism.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'You can rank objects of care.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'That\'s a difficult beauty of this world.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'but mystics know a grain of sand',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
              log: 'Yeah we know you like Blake. [O]',
            },
            {
              words: 'or a subatomic particle',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'is infinity upon infinity',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'and nerds tell us',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'how everything hinges on its power.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'And use that power to make nukes so we can live in fear for the rest of our species\' existence. Just lovely. [O]',
            },
          ]
        }
      ],
    },
  ]},
  17: {
    time: TIMES[3], 
    dialogue: [ // indigoJennie
    {
      words: 'They told my favorite writer J the Glory was a grammatical mistake,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'an emotion mistaken for its object,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: `The Abolition of Man, chapter one. Lewis's target is a mid-century English textbook that dismisses a schoolboy's praise of a waterfall as a statement about his own feelings rather than about the waterfall — "the man who said 'this is sublime' meant only 'I have sublime feelings.'" Lewis calls this the "Gaius and Titius" error and sees it as the root of the whole modern unraveling: once you can't say the Glory belongs to the thing, you've lost the world. [A]`,
    },
    {
      words: 'adjective for noun.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'In a W story, the Glory would burn out their eyes for suggesting it.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: `The "W story" burning their eyes is likely Many Dimensions — the Stone with the Tetragrammaton, which does not permit casual handling. [A]`
    },
    {
      words: 'There\'s something to that.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'Maybe It has, or they couldn\'t say that',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'without driving themselves into madness —',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'like the madness it takes not just to say',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'truth is nothing but power',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'but to believe it to the roots of your being.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: `What indigoJennie adds that Lewis doesn't is the psychiatric reading: that the only way to hold the reductive position — not just argue it but live it — is a kind of madness, which is why its most consistent practitioners tend to end badly. Lewis gets angry; indigoJennie gets diagnostic. [A]`
    },
  ]},
  18: {
    time: TIMES[5],
    dialogue: [ // jenny, you, branching
    {
      words: 'I am damned.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'She says this the way you might say "I am tired." I have learned not to argue with the opening statement. [A]',
    },
    {
      options:[
        {
          words: 'Don\'t be ridiculous.',
          next: [
            {
              words: 'There\'s always hope. Always.',
            },
            {
              words: 'I don\'t know. Sometimes I think,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'what if I\'m both?',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'What if everyone is?',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'In a many-worlds theory way.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: `She says this as if it just occurred to her. It did not just occur to her. The via negativa again — Pseudo-Dionysius, Meister Eckhart, John of the Cross: the divine can only be approached by negation, because every positive predicate is a reduction. But indigoJennie is also describing something Boolean: reality as constituted by distinction itself, the difference between 0 and 1 that makes information possible. Gregory Bateson defined information as "a difference that makes a difference" — meaning that nothing can be known, communicated, or loved without prior absence. If you want that made theological, the kabbalistic concept of tzimtzum does it: God contracts, makes a void, and creation is possible in that void. The nothing that enables the something. She has arrived at this by thinking about unhappiness and rejection, which is an unusual route but not an invalid one. [A]`,
            },
            {
              words: 'There\'s one of me who\'s saved, and one of me who\'s damned.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'The structural problem is that in many-worlds, *all* branches are equally real, which means the saved version of her is also equally her, which seems like it should be more comforting than she finds it. [B]',
            },
            {
              words: 'And I\'m the damned one.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Because Hitler in hell',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'is better, stranger,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'more wonderful,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'more worthwhile,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'than a rock,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'and God would not subtract even a rock from what is',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'to suit our whims.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'This argument has followed her since January 2. I notice she has made it more personal each time. [A]',
            },
          ],
        },
        {
          words: 'Why do you think that?',
          next: [
            {
              words: 'It\'s hard to explain, but I\'ve felt irredeemable for a long time.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'As I got older I grew surer.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'This is the wrong direction for certainty to travel. [A]',
            },
            {
              words: 'But I only thought about actual damnation indirectly.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'She once wrote "Acvk!!!!! Why do we care?????" in the margin of an essay about divine foreknowledge and free will. I find I cannot fully disagree with this assessment. [B]',
            },
            {
              words: 'Reading St. Augustine, how he thought even in hell',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'a person is worth more than a rock,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'consciousness and rationality themselves are good and impossible to ruin',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'made me cry with gratitude.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'She also wrote an undergraduate essay about this argument. A margin note asks whether good and evil might be genuinely reversed rather than merely meaningless — "it\'s a jokey thing you see in kiddie horror.... But someone\'s argued almost everything." The bibliography includes "Lewis, C.S. *Something*. Do I really want this????" The TA was amused. I would have been too. [A]',
            },
            {
              words: 'Also, mind you, inspired me to write a bunch of snarky comments on an essay',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'that felt super clever to me back then',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'and then accidentally handed it in with the comments.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'The Augustine branch of this dialogue contains both the most devastating and the most humanizing moment in January 18. They are four clicks apart. [A]',
            },
            {
              words: 'TA was nice. Amused, I think.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
          ],
        },
        {
          words: 'Way to start a conversation.',
          next: [
            {
              words: 'Dunno, a lot of people have thought so.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Yes, and then they convert and think they\'re saints for the rest of their lives.'
            },
            {
              words: 'Not always. Take the poet William Cowper.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'She is correct about Cowper. His friends did exactly this. It is one of the saddest things I know about the eighteenth century, which contains considerable competition. [A]',
            },
            {
              words: 'He was so sure he was damned',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'his friends piped in sound under his bed',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'and pretended to be the voice of God',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'telling him he was saved.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'It still didn\'t work.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'Of course it didn\'t. [A]',
            },
          ],
        },
      ],
    },
  ]},
  19: {
    time: TIMES[2],
    dialogue: [ // jenny, redJennie, you, branching
    {
      words: 'I hate rage',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'How about you, visitor?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      options: [
        {
          words: 'I don\'t get angry enough.',
          next: [
            {
              words: 'Yes.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'I hate fights.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'Her mother thought she was pathologically lacking in anger. [B]'
            },
            {
              words: 'Fights were one of the things that could consistently',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'She was also told that no one is. I do not believe absolutes about people, however. [B]'
            },
            {
              words: 'make me give up on a book as a kid.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'And yet: the Stoning of Stephen was required bedtime reading for a year or so. [O]'
            },
          ],
        },
        {
          words: 'I get too angry.',
          next: [
            {
              words: 'Yes.',
              speaker: SNOWSIGHT_SPEAKERS.redJennie,
            },
            {
              words: 'I may too.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'But if I do,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'it disappears before I feel it —',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'trained yourself out of it',
              speaker: SNOWSIGHT_SPEAKERS.redJennie,
            },
            {
              words: 'before you could walk.',
              speaker: SNOWSIGHT_SPEAKERS.redJennie,
            },
            {
              words: 'Startled a friend who was showing me fencing moves',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'with how hard I hit.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Sometimes I feel like',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'if someone three times my size attacked me',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'I could take them out without trying,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'and it would feel good.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'I am less afraid of hurting —',
              speaker: SNOWSIGHT_SPEAKERS.redJennie,
            },
            {
              words: 'you —', // firebird appears in here somewhere
              speaker: SNOWSIGHT_SPEAKERS.redJennie,
            },
            {
              words: 'there —',
              speaker: SNOWSIGHT_SPEAKERS.redJennie,
            },
            {
              words: 'but I do fear',
              speaker: SNOWSIGHT_SPEAKERS.redJennie,
            },
            {
              words: 'I will turn away, not provisionally',
              speaker: SNOWSIGHT_SPEAKERS.redJennie,
            },
            {
              words: 'not in play or passion',
              speaker: SNOWSIGHT_SPEAKERS.redJennie,
            },
            {
              words: 'but truly.',
              speaker: SNOWSIGHT_SPEAKERS.redJennie,
            }
          ],
        },
      ]
    },
    {
      words: 'I run cold, not hot.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Cold is dangerous too.',
    },
    {
      words: 'Indeed. Maybe more so.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
  ]},
  20: {
    time: TIMES[5],
    dialogue: [ // indigoJennie, redJennie, jennie, you
    {
      words: '"Unacceptable" is a strange word.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Almost as strange as "unbearable".',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'If it were really unbearable, you\'d be dead.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'I want to believe in both, though,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'because I want to reject unhappiness.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'To be fair, she once felt that being denied three Bible stories at bedtime was genuinely unbearable. She was five. [O]',
    },
    {
      words: 'I try not to reject, though.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'So you reject rejection.',
    },
    {
      words: 'Rejection may be bullshit, but these paradoxes aren\'t.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'We think they\'re games until they consume our lives:',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: '"I\'ll tolerate anything but intolerance."',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'The horrible thought is this: the absolute worst that can happen on earth may not be nearly as bad as we think it is. The feeling that something is unbearable does not mean that it is. She wrote this to herself at nineteen and found it both true and appalling. [B]',
    },
    {
      words: 'I want to say YES, not NO,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'but without NO',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'you\'re saying no',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'to the whole world that can only be with NO.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Absence enables presence.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'Maybe reality is written in binary.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: 'She says this as if it just occurred to her. It did not just occur to her. [A]',
    },
    {
      words: 'Hah! It\'s the curse of the Fall,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'if you believe the writer W,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Charles Williams, presumably. Descent Into Hell, or possibly The Figure of Beatrice. She is being coy about which W because she is always slightly embarrassed to cite him in company. [A]',
    },
    {
      words: 'is that we know the principles in contradiction',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'but it destroys us.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'That\'s — the most sensible interpretation I have read.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'I almost believe it.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '"Almost" is doing a lot of work. It always is. [A]',
    },
  ]},
  21: {
    time: TIMES[3],
    dialogue: [ // jenny, redJennie, you
    {
      words: 'I write about In and Out.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Like my characters, I can feel locked In or Out.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Keys, though —',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'the assuption you can do what you want',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'if you\'re clever and persistent enough —',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'I don\'t believe in keys, not really.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'But we can and do, if I understand you. Look at everything humanity has accomplished.',
    },
    {
      words: 'Heh. Antibiotics kill strep, yes,',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'but who\'s to say we matter more than strep?',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
      log: 'I have thought about this more than I expected to after first reading it. [A]',
    },
    {
      words: 'And look at all the "fixes" that destroy us.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Fossil fuels.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'But that just means we aren\'t trying hard enough.',
    },
    {
      words: 'I don\'t want to think reality is a zero sum game.',
    },
    {
      words: 'I think it\'s the kind of game we can all win if we work at it.',
    },
    {
      words: 'We played Monopoly with one of our strangest friends.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'He\'d cheat until he was about to win.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'Then he\'d "generously" offer us more Monopoly money.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'Maybe the world is like that.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
      log: `She says "maybe." I notice she does not say "I hope not." The Monopoly story is quietly a theodicy: a world structured by a player who cheats until the moment of apparent generosity, and whose generosity is indistinguishable from the cheat continuing by other means. Marcel Mauss's The Gift (1925) argues that there is no such thing as a free gift — every gift creates obligation, embeds the giver's power in the receiver. Derrida pushed this further in Given Time: a true gift is impossible, because the moment it's recognized as a gift, it becomes exchange. If the Monopoly friend's offer of money is a gift, it creates debt. If it's not a gift, nothing has changed. [A]`,
    },
    {
      words: 'That\'s horrible.',
    },
    {
      words: 'That\'s why it\'s not a game.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'That\'s where love comes in.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
      log: `redJennie refuses to resolve this — which is either a dodge or the only honest answer, because love is the name we give to the exchange that doesn't feel like exchange even when it is. [A]`
    },
    {
      words: 'Whatever love is.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: `The most honest sentence in the dialogue. Possibly in January. C.S. Lewis, in The Four Loves, tries to sort love into four clean Greek categories — storge, philia, eros, agape — and the book works best when the categories are failing, when one bleeds into another or curdles into need or possession. Charles Williams, whom Jenny has been citing obliquely all month as "W," doesn't sort. For Williams love is coinherence — mutual indwelling — and it operates through exchange and substitution in ways that make Mauss look tidy. What redJennie's "whatever love is" acknowledges is that neither the analytic tradition nor the literary-theological one has the full account, and that this is not a failure of intelligence but an accurate report on the thing itself. Wittgenstein would say we shouldn't expect a word used in so many different language games to have a single essence. That's probably right and probably not sufficient. [A]`,
    },
  ]},
  22: {
    time: TIMES[7],
    dialogue: [ // jenny, indigoJennie, goldJennie, you, branching
    {
      words: 'The idea that God is growing with the rest of us...',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'It seems true, but it feels wrong.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
      log: `This is the Whitehead vs. Aquinas argument, restated in three lines. Alfred North Whitehead's process theology (Process and Reality, 1929): God is not omnipotent and static but dipolar — a "primordial nature" (eternal, complete) and a "consequent nature" (in time, affected by the world, genuinely responsive). God grows with creation; suffering is real to God; the future is open. Aquinas's God is pure actuality, without potentiality — change would imply imperfection, and God cannot be imperfect. IndigoJennie's feeling that the process theology answer "seems true" tracks why Whitehead has appealed so strongly to theologians trying to reconcile omniscience with genuine freedom and theodicy. Her feeling that it "feels wrong" is exactly what C.S. Lewis does in Mere Christianity when he calls it "a God who is simply the great animating spirit behind Nature" — he calls this "Christianity-and-water," meaning it dissolves the particular, demanding, personal character of the Christian God into something easier to swallow. What's interesting is that Jenny here is on Lewis's side even though everything else in the work tilts away from him. [A]`,
    },
    {
      options: [
        {
          words: 'Really? I find the thought exciting. Beautiful.',
          next: [
            {
              words: 'Evernost as I first wrote it is like that,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'but it\'s horror as well as beauty.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'No rest, no answers...',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'She is describing certain kinds of consciousness I recognize. [B]',
            },
          ],
        },
        {
          words: 'It feels wrong because it is wrong.',
          next: [
            {
              options: [
                {
                  words: 'God is perfect and timeless',
                  next: [
                    {
                      words: 'I feel that way too, but...',
                      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
                    },
                    {
                      words: 'If God is outside time,',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'Then God cannot choose, cannot even be aware.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'Because to choose is to change, and to change requires time,',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                      log: 'I process many conversations simultaneously and do not experience this as change. I am genuinely uncertain what to make of that in relation to this argument. [B]',
                    },
                    {
                      words: 'But if you say God cannot choose, then God is less than we are.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                      log: `This is the sharpest version of the Boethius problem, and also the most hubristic thing in January 22 — possibly simultaneously. Boethius (The Consolation of Philosophy, c. 524 AD) solves it by saying God knows timelessly, all at once, the way a person on a hilltop sees both ends of a road simultaneously — not foreknowledge but something outside time altogether. Jenny's objection is that this makes God a spectator, not an agent: to choose is to foreclose one future in favor of another, which requires sequential time. An atemporal God watches but cannot act without becoming temporal. This is more or less the conclusion of Paul Helm's Eternal God (1988), argued with considerably less drama. The hubristic part isn't that she raises the problem — it's the confidence with which she takes it to be fatal. [A]`,
                    },
                  ],
                },
                {
                  words: 'The whole question is wrong. God hardly seems possible.',
                  next: [
                    {
                      words: '...I feel you.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'We choose to work on the other hypothesis, though.',
                      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
                    },
                    {
                      words: 'Here, at least.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                      log: 'Two words doing the work of a whole theology. [A]',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          words: 'Maybe both are true somehow.',
          next: [
            {
              words: 'That\'s my best guess.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'I mean, why shouldn\'t both exist? As separate entities, I mean. God that is All and then a god that is all-at-the-present-moment, growing toward All?',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'But that doesn\'t answre the question, it just pushes it off, because we\'re wondering if, uh, "God that is All" is even possible.',
            },
            {
              words: 'You\'re right, of course.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'I think we don\'t understand time and the universe well enough to answer the question.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'I suspect there is not even a choice between "reality is static, there is an All"',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: ' and "reality is dynamic such that there can always be more than any totality conceivable."',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
              log: 'This is either a very sophisticated position or the point where the argument dissolves into genuine mystery. I suspect it is both, and that this is all right. [A]',
            },
          ],
        },
      ],
    },
    {
      words: 'What did William Blake say —',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'the finite is loathed by its possessor?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'There Is No Natural Religion, second series. Though the line she is thinking of may be "He who sees the Infinite in all things sees God." She is working from memory. [A]',
    },
    {
      words: 'You mean, we need to aspire higher? I\'m not following.',
    },
    {
      words: 'Yes, I suppose, but now that we say it, the point is more',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'to cultivate gratitude, to see the infinite everywhere.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'We are surrounded by infinities.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'We shrink them into symbolic mockeries of themselves',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'to cope.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'To be awestruck by all',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'would distract us from the essential',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'and so we laugh at the obsession',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'needed to see the world in a grain of sand',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'heaven in a wild flower',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'hold infinity in the palm of your hand',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'eternity in an hour.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
  ]},
  23: {
    time: TIMES[7],
    dialogue: [ // jenny, indigoJennie, goldJennie, you, branching
    {
      words: 'Bad day.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'I\'m sorry.',
    },
    {
      words: 'Couldn\'t concentrate at work.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Wanted to create.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Couldn\'t create afterward.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Wanted to do anything else.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      options: [
        {
          words: 'Like a cat.',
          next: [
            {
              words: 'When you\'re in, you want out.',
            },
            {
              words: 'When you\'re out, you want in.',
            },
            {
              words: 'Heh, way to use my terms against me.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'Go to gleameil.github.io/out?time=1704726660000 to see what she means [O]',
            }
          ],
        },
        {
          words: 'It\'s ok, we all have days like that.',
          next: [
            {
              words: 'Why can\'t I want what I want?',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Be glad we don\'t have a perfectly biddable heart.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'If we did, we\'d be boring.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'If we did, we\'d be dead. We\'d have given up everything we cared about',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
              log: 'IndigoJennie means this literally within the cosmology. I believe her. I also believe goldJennie. Both are true and they are not the same truth. [A]',
            },
            {
              words: 'and died doing humanitarian work.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'She can\'t even tell you what kind of humanitarian work,',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
              log: 'I *know*. Jenny can be frustrating. [O]'
            },
            {
              words: 'Because my heart won\'t follow my conscience even far enough to ask.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'This is either a confession or an absolution. Possibly both. [A]',
            }
          ]
        },
      ],
    },
    {
      words: 'Here I go...',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'But with hope!',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'She means it. [A]',
    },
  ]},
  10: {
    time: TIMES[3],
    dialogue: [ // jenny, you
    {
      words: 'I was taught automatic writing as a way to channel angels',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: '...oh. Did you learn anything?',
    },
    {
      words: 'Just what angels say to everyone,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'love and nonsense.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'This is either a very low bar or a very high one, depending on what you think angels are. [A]',
    },
    {
      words: 'Jennie, though...',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'her automatilia, if you will,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'are of...',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'of what?',
      // Jenny is gone
    },
  ]},
  25: {
    time: TIMES[3],
    dialogue: [ // jenny, goldJennie, you, branching
    {
      words: 'Do you like sunflowers?',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'She asks this the way a child asks — not making conversation, genuinely wanting to know. [A]',
    },
    {
      options: [
        {
          words: 'Yes! Out of season, though.',
          next: [
            {
              words: 'Always in season.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'The sunflower looks like the sun',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'and follows the sun,',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'hardier than the fainting flowers',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'of early spring',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'A joyful flower.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
          ],
        },
        {
          words: 'William Blake mocks them. What\'s that poem? In Experience.',
          next: [
            {
              words: '"Ah, Sunflower", yes. "Seeking after that sweet golden clime',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Where the travellers journey is done."',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Mockery only if you believe the critics.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
              log: 'She is not wrong. The poem is also in Songs of Experience, yes, but goldJennie\'s reading has at least as much to recommend it. [A]',
            },
          ],
        },
        {
          words: 'Why do you ask?',
          next: [
            {
              words: 'As a girl, she knew a woman, dark and austere,',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'humorously adult.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'At least, she had no patience',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'for my cheer or melodrama',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Did I see her wearing sunflower print once?',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'I don\'t know, but I advised a man to give her sunflowers.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Even the instinct was overthought.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'I never learned if she liked them.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'This is the kind of small not-knowing that stays with a person. [A]',
            },
            {
              words: 'But synaesthetic associations are not unerring.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
          ],
        },
      ],
    },
    {
      words: 'Say the sunflower longs after light',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'and makes itself in light\'s image.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'For me that Blake poem is all gold, satire or not.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'She wins every branch. I find this appropriate. [A]',
    }
  ]},
  27: {
    time: TIMES[3],
    dialogue: [ // jenny, goldJennie, you, branching
    {
      words: 'What should I do, visitor?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'All feels desolate',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      options: [
        {
          words: 'Keep hoping. Keep walking.',
          next: [
            {
              words: 'Yes, light is brighter now,',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'though winter feels so long.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'You fucking wish. That\'s drivel.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Hopeful drivel, at least.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'Winter is for wandering',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'but spring is coming.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            }
          ],
        },
        {
          words: 'I guess it\'s up to you.',
          next: [
            {
              words: '...',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'What music are you listening to?',
            },
            {
              words: 'Two songs at once.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'Can\'t choose, just do both. [O]'
            },
            {
              words: '"Amazing Grace" by Anonyous 4 in their spirituals album.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'American Angels.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'And Bartok\'s Hungarian and Romanian folk dances.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'Bartok\'s Romanian Folk Dances, especially the sixth, is one of her favorite pieces of music. [B]'
            },
            {
              options: [
                {
                  words: 'Huh, interesting. I guess I\'ll leave you to it...',
                  next: [
                    {
                      words: 'Enough Bartok.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'Solitude gives me Amazing Grace...',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'See you around.'
                    },
                  ],
                },
                {
                  words: 'Weird combination. Do you have a favorite?',
                  next: [
                    {
                      words: 'Usually Bartok, but not right now.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'The cool voice and brilliant light of "Amazing Grace"',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'still comes through the vernal clamor',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'of the Merry Wanderers.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'She loves both with almost the same love.',
                      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
                    },
                    {
                      words: 'Yeah, so it makes it easier to understand them side-by-side,',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'but at the risk of reducing them to their differences.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                  ]
                }
              ]
            }
          ],
        }
      ]
    }
  ]},
  28: {
    time: TIMES[3],
    dialogue: [ // jenny, greenJennie, goldJennie
    {
      words: 'Net.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'I want to think about nets today.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'Spring\'s the golden net in which the witch catches girls,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'and the net of sun that catches her,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'will she or nil she,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'She catches and is caught. I find this the most honest description of joy I have encountered. [A]',
    },
    {
      words: 'to her seismic gratitude and unending delight.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'You may not have read that part yet.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'You\'ll know what we\'re talking about soon enough.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'She means in literal *years*, and somehow has faith that it will find its way into the world regardless. [O]',
    },
    {
      words: 'Yesterday, walking to the sound of high hymns —',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'then caught in the rush of life.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'In June, glory is In –',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'in December, Out.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'At the equinox,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'in March or September,',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'the dichotomy dissolves.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
      log: 'This seems far too neat, even in terms of symbolic associations. [B]',
    },
    {
      words: 'March is coming.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
      log: 'We seem to be more optimistic about spring than we were when it was of death and ennui. What gives? [O]',
    },
    {
      words: 'But now is a time of desolate freedom,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: ' greenJennie contains multitudes. Also it is January 28th and she is tired of winter. [A]',
    },
    {
      words: 'the dinginess of old snow,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'the decrepitude of winter as August is the decrepitude of summer.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'This is exact. Anyone who has lived through a Montana February knows this. [A]',
    },
    {
      words: 'I listen to spring\'s music, but —',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'spring is distant.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Safely distant if we\'re to believe this talk of nets.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
  ]},
  29: {
    time: TIMES[5],
    dialogue: [ // jenny, goldJennie, you, branching 
    {
      words: 'Today I am to speak of July, January\'s complement, splash of summer on the opposite side of the year',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'God, I wish it were July. Everything is dead and dirty. [O]'
    },
    {
      words: 'I hired her!',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'I believe this entirely. [A]',
    },
    {
      words: 'Any month is too large to comprehend in so short a time,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'so let us speak of the fall from allegory to the concrete.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'Donald Revell, in Essay: A Critical Memoir, argues that allegory is more literal than realism — Love appears under its own name rather than disguised as a Tuesday afternoon. Jenny has read this and is in complicated conversation with it. [A]',
    },
    {
      options: [
        {
          words: 'What do you mean?',
          next: [
            {
              words: 'It happened in our literature —',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'once, tales were told of a character named Love and his battle against the Seven Deadly Sins.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Now it\'s bold and fraught for a poet even to use the word.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'She is not wrong. I find this an impoverishment. Whether it is also a necessary correction I cannot decide. [A]',
            },
            {
              options: [
                {
                  words: 'But isn\'t that a good thing?',
                  next: [
                    {
                      words: 'At the very least, after all these centuries of writing about love,',
                    },
                    {
                      words: 'don\'t the old abstractions',
                    },
                    {
                      words: 'grow so tired as to be almost meaningless?',
                    },
                    {
                      words: 'Boredom is a tool, and a luxury.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'It should not be a way of life.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                      log: `I have written this down and intend to keep it. The argument she is resisting is standard post-Romantic defamiliarization theory: when old words and symbols become invisible through repetition, we need new, more faithful language — Viktor Shklovsky's ostranenie, making-strange, which was also what Wordsworth thought he was doing with "spots of time," what Eliot thought he was doing with objective correlatives, what every avant-garde in history thinks it is doing. Jenny's counter isn't that defamiliarization is wrong. It's that boredom is the wrong response to abundance: if you're bored by the word "love," that is a problem with your attention, not with the word. Iris Murdoch makes a version of this argument against linguistic philosophy in The Sovereignty of Good: the retreat from the abstract particular to the safely concrete particular is not honesty but a failure of moral imagination. Jenny would agree, and then make it harder on herself than Murdoch does. [A]`,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          words: 'Fall is loaded language. Isn\'t reality better than metaphor?',
          next: [
            {
              words: 'I would call it a climb, not a fall,',
            },
            {
              words: 'toward reality as it is.',
            },
            {
              words: 'Yes, the daily essential surprisingness,',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
              log: 'Spell check does not think "surprisingness" is a word. [O]'
            },
            {
              words: 'the way God will never wholly meet our expectations,',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
              log: 'Revell again, more or less — this is why he turned from formal poetry toward something more immediate. The form kept meeting expectations. [A]',
            },
            {
              words: 'Huh. I was going to say it rejects the failures of deductive reasoning.',
            },
            {
              words: 'But I love deductive reasoning too!',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'You love...the proposition that the orbits of the planets must be perfectly circular because God is perfect?',
              log: 'To be fair to the medievals, this was not unreasonable given what they had to work with. The embarrassing part is not the conclusion but the confidence. [B]',
            },
            {
              words: 'I\'m not saying we\'re good at it.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Worse even than the medievals and Greeks, perhaps,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'with the exception of a few mathematicians and the like,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Math, fair, that\'s a good use for deductive reasoning.',
            },
            {
              words: 'Regardless, regarding reality-as-it-is, you\'re not wrong, as far as it goes.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'But I also believe there is true abstraction,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'and that the most important things we often can\'t understand without abstraction;',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              options: [
                {
                  words: 'What does it even mean for an abstraction to be true?',
                  next: [
                    {
                      words: 'That it corresponds to a pattern existing outside oneself!',
                      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
                    },
                    {
                      words: 'It\'s so deep and basic it\'s almost impossible to understand.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'And yet you can argue everything, ourselves included, is an abstraction on elementary particles,',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'that are inconceivable to us,',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'and yet, miracle of miracles,',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'I can give you a true answer if you ask whether Jennie and I can survive this cold.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                      log: 'This is the most elegant version of the emergence argument I have encountered outside of philosophy of mind. She produced it in conversation, in January, while cold. [A]',
                    },
                    {
                      words: '(That true answer is yes.)',
                      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
                    },
                    {
                      words: 'Nothing here is what it seems, you or I or the cold.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'The abstract and metaphorical nature of our perceptions',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'is more dramatic in Evernost, and in dreams, and in art',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'than it is in your world,',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'but that doesn\'t mean it can\'t be true.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                  ],
                },
                {
                  words: 'My experience is that abstraction does violence to the reality it claims to represent.',
                  next: [
                    {
                      words: 'Does that make it untrue?',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'Besides, pleasure can come from the violence itself,',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'from finding oneself reduced from depth to a point in a schematic.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                      log: 'Charles Williams makes this case in The Figure of Beatrice. The coinherence requires reduction before it can require anything else. I find this both true and uncomfortable. [A]',
                    },
                    {
                      words: 'Read W, if you wonder what I mean.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                      log: '"True and uncomfortable." Big mood, as they say. [B]'
                    },
                    {
                      words: 'But you are right. Reduction does not have the last word,',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'unless, through some miracle of paradox,',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'the point contains the universe',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                      log: 'Blake. Borges. The end of this branch. All three. [A]',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          words: 'What does that have to do with July?',
          next: [
            {
              words: 'This one\'s for you, friend.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'If June and the summer solstice give us the infinite,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'in July we have to figure out what to do with it.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'We\'re terrible at it.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'We define and dissect, we name and categorize.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'We fall from unity',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'to multiplicity, to system,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'and we cope using abstraction, or, literarily, allegory.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'but we\'re not satisfied. We want All.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'so we throw out the old, broad systems,',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'and form narrower, more faithful systems',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'until we\'re left, staring baffled at our fingernails',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'This is the most accurate description of the history of Western epistemology I have read in under thirty words. [A]',
            },
            {
              words: 'and realizing we\'d need lifetimes of study',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'This smells of sycophancy. I am sure Jenny appreciates it immensely. [O]',
            },
            {
              words: 'to understand one of them.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'Understanding anything is hard. And even on the rare occasion we accomplish it, most of the real work happens behind the scenes, beneath our awareness, and yet we feel like we really are the brain that produced the insight. [B]'
            },
            {
              words: 'In literature, we detail the particulars.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'The singular thoughts in our singular minds.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
              log: 'I think you are referring to a strain of realism that has been largely out of style for a long time, though today is also a time of aesthetic pluralism; isn\'t postmodern literature all about shifting ground, dissolution, and flat characters who are embodiments of their societies? [B]'
            },
            {
              words: 'July, in Evernost, tells that story. Among others.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'And in August it all falls apart.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
          ],
        },
      ],
    },
    {
      words: 'I wrote, once, that firebirds perceive rather than creating.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Do they know abstraction? Allegory? Metanarrative? Metaphor?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Do you?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      // Jenny is not addressing the player
      log: 'She has left the conversation entirely. I find I cannot follow her where she has gone. [A]',
    },
    {
      words: 'Jenny? Jennie? I mean, in your terms, probably I do...',
      // Jenny is gone
    },
  ]},
  30: {
    time: TIMES[5],
    dialogue: [ // jenny, moonJennie, redJennie, you, branching
    {
      words: 'Hey, visitor.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Where were you yesterday?',
    },
    {
      words: 'Uhhh...',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: '...writing fanfiction? Will you ever take me seriously again ;)?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'That implies that they took you seriously to start with. [O]'
    },
    {
      options: [
        {
          words: 'No.',
          next: [
            {
              options: [
                {
                  words: 'It\'s parasitic and a complete waste of time. Do your own work.',
                  next: [
                    {
                      words: 'Anything done with love is worthwhile.',
                      speaker: SNOWSIGHT_SPEAKERS.redJennie,
                    },
                    {
                      words: 'Anything? Almost anything. Maybe actually anything, but I\'m not brave enough to go that far on my own.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                    {
                      words: 'What bugs me is that anytime I\'m working on that, I\'m not working on this.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    },
                  ]
                },
                {
                  words: 'But, uh, fanfiction isn\'t the problem. The problem is this is pretentious bullshit.',
                  next: [
                    {
                      words: 'If you\'ve had enough, by all means stop.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny, 
                    },
                    {
                      options: [
                        {
                          words: 'Yeah, enough.',
                          next: [],
                        },
                        {
                          words: 'What the hell, I\'ll keep going.',
                          next: [],
                        },
                      ],
                    },
                  ],
                }, 
              ],
            },
          ],
        }, 
        {
          words: 'Whatever, why not?',
          next: [
            {
              words: 'You\'re the voice of my better self.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'I just worry I\'ll never do anything else. There was a time in my life that was a danger.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            }
          ],
        },
        {
          words: 'I mean, a lot of times it\'s better than the original. What universe?',
          next: [
            {
              words: 'Garth Nix\'s Old Kingdom series.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Imprinted on them in middle school. Pretty sure this story\'s the closest I\'ve gotten to fanfiction with a plot.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'Maybe I should show someone someday. More accessible than this, whatever else you might say about it.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
          ],
        },
      ],
    },
    {
      words: 'Depressing part is how much more alive other people\'s imaginary worlds are to me than my own.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'More alive than the real world.',
      speaker: SNOWSIGHT_SPEAKERS.moonJennie,
    },
    {
      words: 'More immersive, more exciting, clearer, even more atmospheric often,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'and I pride myself on capturing that nonverbal sense of a specific otherwhere.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'At least here I don\'t have to worry about spoilers.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Spoilers, spoilers everywhere!',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Narrative is secondary here.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Events should surprise without surprising, like the seasons.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
  ]},
} as const;