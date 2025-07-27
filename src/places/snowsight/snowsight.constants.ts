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
      log: 'Meet Jenny-with-a-y, pencil-gray, I but not Jennie: clattering, chattering would-be "eloquence,"'
    },
    {
      words: 'mathematician and visionary,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: '— peekaboo —',
    },
    {
      words: 'clings',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'or cynical depression, detailed and dull.'
    },
    {
      words: '(stern resolve!)',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'And here is a flash of childlike light, Jennie-as-sun, here —'
    },
    {
      words: 'to visions of the most abstract and real.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'and gone again.'
    },
    {
      words: 'He wants them true and useful both,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(I, unlike this friend, am almost allergic to usefulness.)'
    },
    {
      words: 'but give me my Way and its nonsense any day.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(A regrettable failing, yes, but if I weren\'t, could I have created this?)'
    },
    {
      words: 'Nonsense?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(Is the world where I devoted myself to smart, useful, salable creativity'
    },
    {
      words: 'Let it be more,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'better than this one really?)'
    },
    {
      words: 'let joy be more,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: '✨, 🌞'
    },
    {
      words: 'there\'s nonsense better than all truth...',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: '✨, 🌞',
    },
    {
      words: 'He\'ll schematize and skip',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'These dialogues',
    },
    {
      words: '(less often now,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'exist somewhere between the sun of exposition'
    },
    {
      words: 'duly scolded)',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'and the storm of poetry.'
    },
    {
      words: 'the obvious for the elegant,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'If, by looking out the window,',
    },
    {
      words: 'leave love out.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'by using your imagination (if you want a more prosaic interpretation)',
    },
    {
      words: 'The deeper problem:',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'you partake of what is outside of yourself,'
    },
    {
      words: 'schemata,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'and — not just yourself, but your world —'
    },
    {
      words: 'true or false or neither quite,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'and even, in a sense, come close to experiencing it —',
    },
    {
      words: 'feel false',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(excuse my egotism in acting like any of *my* nonsense is truly Beyond)'
    },
    {
      words: 'until lived in by people who love them.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(at least — allow it, as in play — and then turn the tables on me, show me everything I\'ve missed <3)',
    },
    {
      words: 'J,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: '(and know — even within the fictional frame',
    },
    {
      words: 'critic, visionary, her favorite writer,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: 'there is elsewhere beyond elsewhere, out beyond out, suns past the sun, and it\'s only January, after all)'
    },
    {
      words: 'says God can\'t be a woman,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'somewhere between the quotidian and the Beyond, in the Between, let us meet,'
    },
    {
      words: 'makes me feel it.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'and I will tell you some of what I imagine.'
    },
    {
      words: 'J\'s male God is...',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'yes, the other head is, in theory, yours.'
    },
    {
      words: 'is closer than the Goddesses we borrowed to dance with,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
      log: '(of course, it is merely Jenny\'s reversed and turned into silhouette, really, but that too'
    },
    {
      words: 'as a child',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'is fitting, as I choose to put words in your mouth,',
    },
    {
      words: 'Anyway, J scoffs that feminism,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'limit your options,',
    },
    {
      words: 'is a sterile and rootless thing,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'rather than let an LLM put words into my mouth.',
    },
    {
      words: 'makes me feel it,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'If you want to go further afield from this script,'
    },
    {
      words: 'but it is sterile and rootless to her',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'perhaps you should do so in the comments,',
    },
    {
      words: 'because it was inhabited only recently,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'where I can actually see what you say.'
    },
    {
      words: 'not false.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'The *J* Jenny discusses, note,'
    },
    {
      words: 'V and I spoke of this.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'is a real author, long dead.'
    },
    {
      words: 'I do not know if God is male.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'I bet you can even guess which,'
    },
    {
      words: 'I say "he," vision still infected, but',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'if you keep paying attention and think about it.'
    },
    {
      words: 'say there is truth even in the contingent quirks of hormones and chromosomes,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'I like to see things and people anew, though,'
    },
    {
      words: 'but Truth Itself is surely larger.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'and would rather you consider the authors I discuss',
    },
    {
      words: 'Larger than gender, at least.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
      log: 'without some of their *heavier* baggage...',
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
      words: 'Perhaps if you really don\'t want exist,',
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
    },
    {
      words: 'Familiarity deepens the terror that brings the heart alive,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'but enough philosophy! We should hold the Thing Itself',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'lower than our efforts toward it.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
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
    },
    {
      words: 'she drowned herself after he died at war.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'He never loved her.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
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
    }
  ]},
  4: {
    time: TIMES[3],
    dialogue: [ // jenny, violetJennie, indigoJennie, redJennie, goldJennie, you
    {
      words: 'Are you one person or several?',
    },
    {
      words: 'Yes',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
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
    },
    {
      words: 'I am the least of us. Almost no one. Almost nothing. And yet...',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'I was chosen.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
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
            },
            {
              words: 'Maybe the whole world is.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'Lila, Krishna and the gopis.',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
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
            },
            {
              words: 'trying to understand.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'What is love?',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
          ],
        }
      ]
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
    }
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
    },
    {
      words: 'Music opens spaces in the mind.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Now only music of the heart can reach me,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'overwhelming, oversweet,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'no subtlety, height, or vision.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
    },
    {
      words: 'This is getting harder.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Soon it will be almost impossible.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
    }
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
    },
    {
      words: 'Perhaps you\'re the unimaginative one',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
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
    },
    {
      words: 'But what if what we\'re addicted to',
      speaker: SNOWSIGHT_SPEAKERS.moonJennie,
    },
    {
      words: 'actually is better than reality?',
      speaker: SNOWSIGHT_SPEAKERS.moonJennie,
    },
    {
      words: 'Then maybe we need to love reality',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    },
    {
      words: 'to make it worth loving.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
    }
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
    },
    {
      words: 'to the frontend of her consciousness,',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'shifts.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
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
    },
    {
      words: 'but with long hair catching the light',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'a light different from any where you live...',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
  ]},
  24: {
    time: TIMES[6],
    dialogue: [ // jenny, moonJennie, violetJennie, indigoJennie, greenJennie, redJennie, goldJennie
    {
      words: 'How the Rose Knight died.',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
    },
    {
      words: 'How story died.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'How my heart died.',
      speaker: SNOWSIGHT_SPEAKERS.redJennie,
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
    },
    {
      words: 'This wasn\'t what she\'d signed up for.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Saving the world is one thing, but this...',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
    },
    {
      words: 'You think you\'re trying your hardest,',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'but there\'s so much more...',
      speaker: SNOWSIGHT_SPEAKERS.violetJennie,
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
      words: 'becuase that\'s what rejection is.',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    }
  ]},
  16: {
    time: TIMES[3],
    dialogue: [ // jenny, violetJennie, greenJennie, you, branching
    {
      words: 'Just listened to a talk about "bringing your whole self to work."',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
    },
    {
      words: 'Right,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'this world, which we cannot even trust we perceive,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'this Thing in Itself,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'we are made of it.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Does that make separateness illusion?',
    },
  ]},
  14: {
    time: TIMES[5],
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
    }
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
    },
    {
      words: 'But he\'s grown on me.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'The poems fit together,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'Not coherently, not perfectly coherently, at least,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'but to show a worldview larger than most.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
    },
  ]},
  13: {
    time: TIMES[3],
    dialogue: [ // jenny, indigoJennie, you, branching
    {
      words: 'Are you a nerd?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
    },
    {
      words: 'adjective for noun.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
    },
    {
      words: 'In a W story, the Glory would burn out their eyes for suggesting it.',
      speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
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
    },
  ]},
  18: {
    time: TIMES[5],
    dialogue: [ // jenny, you, branching
    {
      words: 'I am damned.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
            },
            {
              words: 'There\'s one of me who\'s saved, and one of me who\'s damned.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
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
              words: 'and God would not subtact even a rock from what is',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'to suit our whims.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
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
            },
            {
              words: 'But I only thought about actual damnation indirectly.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
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
            },
            {
              words: 'Fights were one of the things that could consistently',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'make me give up on a book as a kid.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
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
    },
    {
      words: 'Hah! It\'s the curse of the Fall,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'if you believe the writer W,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
    },
    {
      words: 'Whatever love is.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    }
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
                    },
                    {
                      words: 'But if you say God cannot choose, then God is less than we are.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
                    }
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
                    },
                  ],
                },
              ],
            }
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
              words: 'I suspect there is not even a choice between “reality is static, there is an All”',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: ' and “reality is dynamic such that there can always be more than any totality conceivable.”',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            }
          ]
        }
      ],
    },
    {
      words: 'What did William Blake say —',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'the finite is loathed by its possessor?',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
            },
            {
              words: 'and died doing humanitarian work.',
              speaker: SNOWSIGHT_SPEAKERS.indigoJennie,
            },
            {
              words: 'She can\'t even tell you what kind of humanitarian work,',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'Because my heart won\'t follow my conscience even far enough to ask.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
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
    },
    {
      words: 'March is coming.',
      speaker: SNOWSIGHT_SPEAKERS.greenJennie,
    },
    {
      words: 'But now is a time of desolate freedom,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'the dinginess of old snow,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'the decrepitude of winter as August is the decrepitude of summer.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
    },
    {
      words: 'I hired her!',
      speaker: SNOWSIGHT_SPEAKERS.goldJennie,
    },
    {
      words: 'Any month is too large to comprehend in so short a time,',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
    },
    {
      words: 'so let us speak of the fall from allegory to the concrete.',
      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
                    }
                  ]
                },
              ],
            }
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
            },
            {
              words: 'the way God will never wholly meet our expectations,',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'Huh. I was going to say it rejects the failures of deductive reasoning.',
            },
            {
              words: 'But I love deductive reasoning too!',
              speaker: SNOWSIGHT_SPEAKERS.goldJennie,
            },
            {
              words: 'You love...the proposition that the orbits of the planets must be perfectly circular because God is perfect?'
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
              words: 'Math, fair, that\'s a good use for deductive reasoning.'
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
                    },
                    {
                      words: 'Read W, if you wonder what I mean.',
                      speaker: SNOWSIGHT_SPEAKERS.jenny,
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
            },
            {
              words: 'and realizing we\'d need lifetimes of study',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'to understand one of them.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'In literature, we detail the particulars.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
            },
            {
              words: 'The singular thoughts in our singular minds.',
              speaker: SNOWSIGHT_SPEAKERS.jenny,
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
    },
    {
      words: 'Jenny? Jennie? I mean, in your terms, probably I do...'
      // Jenny is gone
    }
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