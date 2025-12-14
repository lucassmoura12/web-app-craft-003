import { IngredientMap, Recipe } from './types';

// 1. Mapeamento de Cidades e Bônus
export const INGREDIENT_DB: IngredientMap = {
  // --- LYMHURST (Floresta) ---
  'Cenouras': { category: 'Cultivo', city: 'Lymhurst', note: 'Bônus Local' },
  'Abóbora': { category: 'Cultivo', city: 'Lymhurst', note: 'Bônus Local' },
  'Bardana-crespa': { category: 'Erva', city: 'Lymhurst', note: 'Bônus Local' },
  'Ovos de Ganso': { category: 'Animal', city: 'Lymhurst', note: 'Bônus Local' },
  'Ganso Cru': { category: 'Carne', city: 'Lymhurst', note: 'Base: Ganso' },
  'Aguardente de Abóbora': { category: 'Álcool', city: 'Lymhurst', note: 'Craft: Abóbora' },
  'Goró de Abóbora': { category: 'Álcool', city: 'Lymhurst', note: 'Craft: Abóbora' }, // T8 Moonshine

  // --- BRIDGEWATCH (Deserto) ---
  'Feijões': { category: 'Cultivo', city: 'Bridgewatch', note: 'Bônus Local' },
  'Fardo de Milho': { category: 'Cultivo', city: 'Bridgewatch', note: 'Bônus Local' },
  'Cardo-dragão': { category: 'Erva', city: 'Bridgewatch', note: 'Bônus Local' },
  'Leite de Cabra': { category: 'Animal', city: 'Bridgewatch', note: 'Bônus Local' },
  'Cabra Crua': { category: 'Carne', city: 'Bridgewatch', note: 'Base: Cabra' },
  'Manteiga de Cabra': { category: 'Manteiga', city: 'Bridgewatch', note: 'Craft: Leite Cabra' },
  'Carraspana de Milho': { category: 'Álcool', city: 'Bridgewatch', note: 'Craft: Milho' },

  // --- MARTLOCK (Terras Altas) ---
  'Feixe de Trigo': { category: 'Cultivo', city: 'Martlock', note: 'Bônus Local' },
  'Batatas': { category: 'Cultivo', city: 'Martlock', note: 'Bônus Local' },
  'Dedaleira-tímida': { category: 'Erva', city: 'Martlock', note: 'Bônus Local' },
  'Leite de Vaca': { category: 'Animal', city: 'Martlock', note: 'Bônus Local' },
  'Carne Crua': { category: 'Carne', city: 'Martlock', note: 'Base: Vaca' },
  'Manteiga de Vaca': { category: 'Manteiga', city: 'Martlock', note: 'Craft: Leite Vaca' },
  'Farinha': { category: 'Processado', city: 'Martlock', note: 'Craft: Trigo' },
  'Pão': { category: 'Processado', city: 'Martlock', note: 'Craft: Farinha' },
  'Álcool de Batata': { category: 'Álcool', city: 'Martlock', note: 'Craft: Batata' }, // Generic
  'Aguardente de Batata': { category: 'Álcool', city: 'Martlock', note: 'Craft: Batata' }, // Specific T6

  // --- THETFORD (Pântano) ---
  'Repolho': { category: 'Cultivo', city: 'Thetford', note: 'Bônus Local' },
  'Agárico-arcano': { category: 'Erva', city: 'Thetford', note: 'Bônus Local' },
  'Verbasco-arredio': { category: 'Erva', city: 'Thetford', note: 'Bônus Local' },
  'Porco Cru': { category: 'Carne', city: 'Thetford', note: 'Base: Porco' },

  // --- FORT STERLING (Montanha) ---
  'Nabos': { category: 'Cultivo', city: 'Fort Sterling', note: 'Bônus Local' },
  'Milefólio-carniçal': { category: 'Erva', city: 'Fort Sterling', note: 'Bônus Local' },
  'Ovos de Galinha': { category: 'Animal', city: 'Fort Sterling', note: 'Bônus Local' },
  'Galinha Crua': { category: 'Carne', city: 'Fort Sterling', note: 'Base: Galinha' },
  'Leite de Ovelha': { category: 'Animal', city: 'Fort Sterling', note: 'Bônus Local' },
  'Carneiro Cru': { category: 'Carne', city: 'Fort Sterling', note: 'Base: Ovelha' },
  'Manteiga de Ovelha': { category: 'Manteiga', city: 'Fort Sterling', note: 'Craft: Leite Ovelha' },

  // --- CAERLEON ---
  'Confrei-claro': { category: 'Erva', city: 'Caerleon', note: 'Bônus Local' },

  // --- MERCADO (Peixes, Raros, Tracking) ---
  // Artifacts (Tracking/Drops)
  'Garras de Urso-da-neve': { category: 'Tracking', city: 'Mercado', note: 'T8 Artifact' },
  'Patas Espirituais': { category: 'Tracking', city: 'Mercado', note: 'T7 Artifact' },
  'Chifre de Diabrete': { category: 'Tracking', city: 'Mercado', note: 'T8 Artifact' },
  'Garras de Urso-das-cavernas': { category: 'Tracking', city: 'Mercado', note: 'T6 Artifact' },
  'Chifre de Besta': { category: 'Tracking', city: 'Mercado', note: 'T6 Artifact' }, // Generic T6 Horn
  'Chifre Infernal': { category: 'Tracking', city: 'Mercado', note: 'T4/T8 Artifact' }, // Generic
  'Restos de Dríade': { category: 'Tracking', city: 'Mercado', note: 'T5 Artifact' }, // For Cleanse

  // Fish (Rare & Common)
  'Enguia de Água-podre': { category: 'Peixe Raro', city: 'Mercado', note: 'T7 Pesca' },
  'Kraken das Águas profundas': { category: 'Peixe Raro', city: 'Mercado', note: 'T7 Pesca' },
  'Caranguejo de Poço': { category: 'Peixe Raro', city: 'Mercado', note: 'T7 Pesca' },
  'Olhomorto dos Picos': { category: 'Peixe Raro', city: 'Mercado', note: 'T7 Pesca' },
  'Larápio do Trovão': { category: 'Peixe Raro', city: 'Mercado', note: 'T7 Pesca' },
  'Pargo Neblina-pura': { category: 'Peixe Raro', city: 'Mercado', note: 'T7 Pesca' },
  
  'Enguia Avermelhada': { category: 'Peixe Raro', city: 'Mercado', note: 'T5 Pesca' }, // Rare T5
  'Larápio de Água corrente': { category: 'Peixe Raro', city: 'Mercado', note: 'T6 Rare?' }, // T6 in image 26? Name usually T6.
  'Caranguejo de Riacho': { category: 'Peixe Raro', city: 'Mercado', note: 'T5 Pesca' },
  'Mexilhão do Brejo': { category: 'Peixe Raro', city: 'Mercado', note: 'T5/7 Pesca' }, // Generic
  'Pargo Névoa-clara': { category: 'Peixe Raro', city: 'Mercado', note: 'T5 Pesca' },

  // Misc
  'Energia Avaloniana': { category: 'Raro', city: 'Mercado', note: 'MKT' },
};

// 2. Receitas
export const RECIPES: Recipe[] = [
  // --- POTIONS ---
  {
    id: 'potion_acid_t7',
    name: 'Poção Ácida Maior T7',
    tier: 'VII',
    type: 'Potion',
    yield: 5,
    ingredients: {
      'Patas Espirituais': 1,
      'Verbasco-arredio': 144, // Primary Herb T7
      'Dedaleira-tímida': 72,  // Secondary Herb T6
      'Carraspana de Milho': 72, // Primary Alcohol T7
      'Leite de Ovelha': 36,     // Sec Ingredient T6
      'Aguardente de Batata': 36 // Sec Alcohol T6
    }
  },
  {
    id: 'potion_gather_t8',
    name: 'Poção de Coleta Maior T8',
    tier: 'VIII',
    type: 'Potion',
    yield: 5,
    ingredients: {
      'Garras de Urso-da-neve': 1,
      'Manteiga de Vaca': 144, // T8 Butter
      'Milefólio-carniçal': 72, // T8 Herb
      'Verbasco-arredio': 72,   // T7 Herb
      'Dedaleira-tímida': 36,   // T6 Herb
      'Carraspana de Milho': 36 // T7 Alcohol (Image 11 shows brown jug)
    }
  },
  {
    id: 'potion_gather_t6',
    name: 'Poção de Coleta T6',
    tier: 'VI',
    type: 'Potion',
    yield: 5,
    ingredients: {
      'Garras de Urso-das-cavernas': 1, // Assumed T6 Artifact
      'Manteiga de Ovelha': 48, // T6 Butter
      'Dedaleira-tímida': 24,   // T6 Herb
      'Cardo-dragão': 12        // T5 Herb
    }
  },
  {
    id: 'potion_hell_t8',
    name: 'Poção Infernal Maior T8',
    tier: 'VIII',
    type: 'Potion',
    yield: 5,
    ingredients: {
      'Chifre de Diabrete': 1, // T8 Artifact
      'Leite de Vaca': 144,    // T8 Milk (White)
      'Milefólio-carniçal': 72, // T8 Herb
      'Verbasco-arredio': 72,   // T7 Herb
      'Ovos de Ganso': 36,      // T5 Eggs (Blueish)
      'Carraspana de Milho': 36 // T7 Alcohol
    }
  },
  {
    id: 'potion_hell_t6',
    name: 'Poção Infernal T6',
    tier: 'VI',
    type: 'Potion',
    yield: 5,
    ingredients: {
      'Chifre de Besta': 1, // T6 Artifact
      'Leite de Ovelha': 48, // T6 Milk
      'Dedaleira-tímida': 24, // T6 Herb
      'Ovos de Galinha': 12   // T3 Eggs (White)
    }
  },
  {
    id: 'potion_cleanse_t5',
    name: 'Poção Purificadora T5',
    tier: 'V',
    type: 'Potion',
    yield: 5,
    ingredients: {
      'Restos de Dríade': 1, // T5 Artifact
      'Cardo-dragão': 48,    // T5 Herb
      'Bardana-crespa': 24,  // T4 Herb
      'Manteiga de Cabra': 12 // T4 Butter
    }
  },

  // --- FOODS ---
  // Stews
  {
    id: 'food_stew_eel_t8',
    name: 'Guisado de Enguia T8',
    tier: 'VIII',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Enguia de Água-podre': 1,
      'Abóbora': 6,
      'Milefólio-carniçal': 6,
      'Leite de Vaca': 6
    }
  },
  {
    id: 'food_stew_eel_t6',
    name: 'Guisado de Enguia T6',
    tier: 'VI',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Enguia Avermelhada': 1,
      'Batatas': 2,
      'Dedaleira-tímida': 2,
      'Leite de Ovelha': 2
    }
  },

  // Omelettes
  {
    id: 'food_omelette_crab_t7',
    name: 'Omelete de Caranguejo T7',
    tier: 'VII',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Caranguejo de Poço': 1,
      'Fardo de Milho': 6,
      'Verbasco-arredio': 6,
      'Carneiro Cru': 6 // T6 Meat
    }
  },
  {
    id: 'food_omelette_crab_t5',
    name: 'Omelete de Caranguejo T5',
    tier: 'V',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Caranguejo de Riacho': 1,
      'Repolho': 2,
      'Cardo-dragão': 2,
      'Ovos de Ganso': 2
    }
  },
  {
    id: 'food_omelette_avalon_t7',
    name: 'Omelete Avaloniano T7',
    tier: 'VII',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Carne Crua': 72,      // Pork/Beef? Image 20 shows Red meat (T6/Sheep?) or Pork? Let's use Pork for T7.
      'Leite de Ovelha': 36, // T6 Milk (Brown Pot)
      'Ovos de Galinha': 18, // T3 Eggs? Or T5? Image 20 shows white eggs/green nest (T3).
      'Energia Avaloniana': 90
    }
  },

  // Roasts
  {
    id: 'food_roast_snapper_t7',
    name: 'Pargo Assado T7',
    tier: 'VII',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Pargo Neblina-pura': 1,
      'Fardo de Milho': 6,
      'Verbasco-arredio': 6,
      'Leite de Ovelha': 6
    }
  },
  {
    id: 'food_roast_snapper_t5',
    name: 'Pargo Assado T5',
    tier: 'V',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Pargo Névoa-clara': 1,
      'Repolho': 2,
      'Cardo-dragão': 2,
      'Leite de Cabra': 2
    }
  },

  // Salads
  {
    id: 'food_salad_kraken_t6',
    name: 'Salada de Kraken T6',
    tier: 'VI',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Kraken das Águas profundas': 1,
      'Batatas': 6,
      'Dedaleira-tímida': 6,
      'Carneiro Cru': 6
    }
  },

  // Sandwiches
  {
    id: 'food_sandwich_thunder_t8',
    name: 'Sanduíche Larápio T8',
    tier: 'VIII',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Larápio do Trovão': 1,
      'Abóbora': 6,
      'Milefólio-carniçal': 6,
      'Manteiga de Vaca': 6
    }
  },
  {
    id: 'food_sandwich_thunder_t6',
    name: 'Sanduíche Larápio T6',
    tier: 'VI',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Larápio de Água corrente': 1,
      'Batatas': 2,
      'Dedaleira-tímida': 2,
      'Manteiga de Ovelha': 2
    }
  },
  {
    id: 'food_sandwich_avalon_t8',
    name: 'Sanduíche Avaloniano T8',
    tier: 'VIII',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Carne Crua': 72, // T8 Beef
      'Pão': 36,
      'Manteiga de Vaca': 18,
      'Energia Avaloniana': 90
    }
  },

  // Soups
  {
    id: 'food_soup_clam_t5',
    name: 'Sopa de Mexilhão T5',
    tier: 'V',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Mexilhão do Brejo': 1,
      'Repolho': 6,
      'Cardo-dragão': 6,
      'Carneiro Cru': 6 // Image 27 shows Red Meat (Carneiro)
    }
  },

  // Pies
  {
    id: 'food_pie_deadeye_t7',
    name: 'Torta de Olhomorto T7',
    tier: 'VII',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Olhomorto dos Picos': 1,
      'Fardo de Milho': 6,
      'Verbasco-arredio': 6,
      'Carneiro Cru': 6
    }
  }
];

export const CITY_COLORS: {[key: string]: string} = {
  'Lymhurst': 'border-green-500 text-green-400',
  'Bridgewatch': 'border-orange-500 text-orange-400',
  'Martlock': 'border-blue-500 text-blue-400',
  'Thetford': 'border-purple-500 text-purple-400',
  'Fort Sterling': 'border-gray-100 text-gray-100',
  'Caerleon': 'border-red-500 text-red-400',
  'Mercado': 'border-yellow-500 text-yellow-400',
};