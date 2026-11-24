export type GamePhase = 'TITLE' | 'PLAYING' | 'FOUND_CAT' | 'LETTER_OPEN';

export type CatVariant =
  | 'cream'
  | 'calico'
  | 'lilac'
  | 'ginger'
  | 'tuxedo'
  | 'sakura'
  | 'gray'
  | 'honey';

export type CatMood =
  | 'sleeping'
  | 'playful'
  | 'cheeky'
  | 'blinking'
  | 'curious'
  | 'grooming'
  | 'yawning'
  | 'letter';

export type HidingSpotType =
  | 'sakura_tree'
  | 'rose_bush'
  | 'terracotta_pot'
  | 'wooden_crate'
  | 'hollow_log'
  | 'lavender_patch'
  | 'picnic_basket'
  | 'giant_mushroom'
  | 'mossy_rock'
  | 'watering_can'
  | 'garden_house'
  | 'stone_well'
  | 'wooden_bench'
  | 'flower_arch';

export interface HidingSpotConfig {
  id: string;
  type: HidingSpotType;
  label: string;
  /** Left position in percentage (0..100) of the 1000x620 garden map */
  xPct: number;
  /** Top position in percentage (0..100) of the 1000x620 garden map */
  yPct: number;
  /** Width in px on the 1000px base map */
  width: number;
  /** Height in px on the 1000px base map */
  height: number;
}

export interface SpotOutcome {
  isCorrect: boolean;
  hasCat: boolean;
  catVariant?: CatVariant;
  catMood?: CatMood;
  message: string;
}

export const HIDING_SPOTS: HidingSpotConfig[] = [
  {
    id: 'sakura-tree',
    type: 'sakura_tree',
    label: 'Cerejeira florida',
    xPct: 11,
    yPct: 19,
    width: 124,
    height: 124,
  },
  {
    id: 'flower-arch',
    type: 'flower_arch',
    label: 'Arco de flores',
    xPct: 31,
    yPct: 16,
    width: 116,
    height: 108,
  },
  {
    id: 'garden-house',
    type: 'garden_house',
    label: 'Casinha do jardim',
    xPct: 54,
    yPct: 17,
    width: 116,
    height: 108,
  },
  {
    id: 'stone-well',
    type: 'stone_well',
    label: 'Poço encantado',
    xPct: 79,
    yPct: 18,
    width: 104,
    height: 104,
  },
  {
    id: 'lavender-patch',
    type: 'lavender_patch',
    label: 'Moita de lavanda',
    xPct: 91,
    yPct: 36,
    width: 92,
    height: 84,
  },
  {
    id: 'rose-bush',
    type: 'rose_bush',
    label: 'Arbusto de rosas',
    xPct: 22,
    yPct: 40,
    width: 98,
    height: 86,
  },
  {
    id: 'wooden-bench',
    type: 'wooden_bench',
    label: 'Banco do jardim',
    xPct: 43,
    yPct: 39,
    width: 110,
    height: 86,
  },
  {
    id: 'giant-mushroom',
    type: 'giant_mushroom',
    label: 'Cogumelo gigante',
    xPct: 71,
    yPct: 44,
    width: 92,
    height: 92,
  },
  {
    id: 'terracotta-pot',
    type: 'terracotta_pot',
    label: 'Vaso de terracota',
    xPct: 10,
    yPct: 62,
    width: 82,
    height: 84,
  },
  {
    id: 'picnic-basket',
    type: 'picnic_basket',
    label: 'Cesta de piquenique',
    xPct: 33,
    yPct: 63,
    width: 94,
    height: 80,
  },
  {
    id: 'hollow-log',
    type: 'hollow_log',
    label: 'Tronco oco',
    xPct: 56,
    yPct: 69,
    width: 104,
    height: 78,
  },
  {
    id: 'watering-can',
    type: 'watering_can',
    label: 'Regador lilás',
    xPct: 86,
    yPct: 64,
    width: 86,
    height: 80,
  },
  {
    id: 'wooden-crate',
    type: 'wooden_crate',
    label: 'Caixote de madeira',
    xPct: 18,
    yPct: 83,
    width: 90,
    height: 80,
  },
  {
    id: 'mossy-rock',
    type: 'mossy_rock',
    label: 'Pedra com musgo',
    xPct: 76,
    yPct: 84,
    width: 96,
    height: 78,
  },
];

const DECOY_CONFIGS: Array<{
  catVariant: CatVariant;
  catMood: CatMood;
  message: string;
}> = [
  {
    catVariant: 'ginger',
    catMood: 'sleeping',
    message: 'Miau! Não sou eu! Estava só tirando um cochilo.',
  },
  {
    catVariant: 'calico',
    catMood: 'playful',
    message: 'Por aqui não! Só estou brincando nas folhinhas.',
  },
  {
    catVariant: 'lilac',
    catMood: 'cheeky',
    message: 'Miau! Não sou eu! Continue procurando!',
  },
  {
    catVariant: 'tuxedo',
    catMood: 'curious',
    message: 'Por aqui não! Ouvi um miado perto das flores...',
  },
  {
    catVariant: 'gray',
    catMood: 'yawning',
    message: 'Miau... Ainda não é aqui. Continue procurando!',
  },
  {
    catVariant: 'honey',
    catMood: 'grooming',
    message: 'Miau! Não sou eu! Estou lavando minhas patinhas.',
  },
  {
    catVariant: 'sakura',
    catMood: 'blinking',
    message: 'Por aqui não! Que jardim cheiroso, né?',
  },
  {
    catVariant: 'cream',
    catMood: 'playful',
    message: 'Miau! Quase lá, mas não sou eu! Continue procurando!',
  },
  {
    catVariant: 'calico',
    catMood: 'sleeping',
    message: 'Zzz... Miau! Por aqui não!',
  },
  {
    catVariant: 'lilac',
    catMood: 'curious',
    message: 'Continue procurando! Tem um gatinho bem fofo escondido por aí.',
  },
];

const EMPTY_GARDEN_MESSAGES: string[] = [
  'Só pétalas e brisa suave por aqui! Continue procurando!',
  'Miau? Ops, era só uma borboleta passando! Por aqui não!',
  'Apenas flores perfumadas escondidas aqui. Continue procurando!',
];

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateRoundOutcomes(): {
  correctSpotId: string;
  outcomes: Record<string, SpotOutcome>;
} {
  const spotIds = HIDING_SPOTS.map((s) => s.id);
  const correctSpotId = spotIds[Math.floor(Math.random() * spotIds.length)];

  const otherIds = spotIds.filter((id) => id !== correctSpotId);
  const shuffledDecoys = shuffleArray(DECOY_CONFIGS);
  const shuffledEmpty = shuffleArray(EMPTY_GARDEN_MESSAGES);
  const shuffledOtherIds = shuffleArray(otherIds);

  const outcomes: Record<string, SpotOutcome> = {
    [correctSpotId]: {
      isCorrect: true,
      hasCat: true,
      catVariant: 'cream',
      catMood: 'letter',
      message: 'Você me encontrou! Tenho algo para você...',
    },
  };

  shuffledOtherIds.forEach((id, index) => {
    if (index < shuffledDecoys.length) {
      const decoy = shuffledDecoys[index];
      outcomes[id] = {
        isCorrect: false,
        hasCat: true,
        catVariant: decoy.catVariant,
        catMood: decoy.catMood,
        message: decoy.message,
      };
    } else {
      const emptyMsg = shuffledEmpty[(index - shuffledDecoys.length) % shuffledEmpty.length];
      outcomes[id] = {
        isCorrect: false,
        hasCat: false,
        message: emptyMsg,
      };
    }
  });

  return { correctSpotId, outcomes };
}
