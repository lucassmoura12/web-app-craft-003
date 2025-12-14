import { IngredientMap, Recipe } from './types';

// 1. Mapeamento de Cidades e Bônus
export const INGREDIENT_DB: IngredientMap = {
  // --- Cultivos / Ervas ---
  'Cenouras': { category: 'Cultivo', city: 'Lymhurst', note: 'Bônus Local' },
  'Abóbora': { category: 'Cultivo', city: 'Lymhurst', note: 'Bônus Local' },
  'Bardana-crespa': { category: 'Erva', city: 'Lymhurst', note: 'Bônus Local' },
  
  'Feijões': { category: 'Cultivo', city: 'Bridgewatch', note: 'Bônus Local' },
  'Fardo de Milho': { category: 'Cultivo', city: 'Bridgewatch', note: 'Bônus Local' },
  'Cardo-dragão': { category: 'Erva', city: 'Bridgewatch', note: 'Bônus Local' },

  'Feixe de Trigo': { category: 'Cultivo', city: 'Martlock', note: 'Bônus Local' },
  'Batatas': { category: 'Cultivo', city: 'Martlock', note: 'Bônus Local' },
  'Dedaleira-tímida': { category: 'Erva', city: 'Martlock', note: 'Bônus Local' },

  'Repolho': { category: 'Cultivo', city: 'Thetford', note: 'Bônus Local' },
  'Agárico-arcano': { category: 'Erva', city: 'Thetford', note: 'Bônus Local' },
  'Verbasco-arredio': { category: 'Erva', city: 'Thetford', note: 'Bônus Local' },

  'Nabos': { category: 'Cultivo', city: 'Fort Sterling', note: 'Bônus Local' },
  'Milefólio-carniçal': { category: 'Erva', city: 'Fort Sterling', note: 'Bônus Local' },
  
  'Confrei-claro': { category: 'Erva', city: 'Caerleon', note: 'Bônus Local' },

  // --- Carnes / Leites / Processados ---
  'Leite de Ovelha': { category: 'Animal', city: 'Fort Sterling', note: 'Bônus Local' },
  'Ovos de Galinha': { category: 'Animal', city: 'Fort Sterling', note: 'Bônus Local' },
  'Carneiro Cru': { category: 'Carne', city: 'Fort Sterling', note: 'Base/Bônus Ovelha' },
  'Manteiga de Ovelha': { category: 'Manteiga', city: 'Fort Sterling', note: 'Usar Leite T6 (FS)' },
  
  'Leite de Cabra': { category: 'Animal', city: 'Bridgewatch', note: 'Bônus Local' },
  
  'Leite de Vaca': { category: 'Animal', city: 'Martlock', note: 'Bônus Local' },
  'Carne Crua': { category: 'Carne', city: 'Martlock', note: 'Base/Bônus Vaca T8' },
  'Farinha': { category: 'Processado', city: 'Martlock', note: 'Craft em ML' },
  'Pão': { category: 'Processado', city: 'Martlock', note: 'Craft em ML' },
  'Manteiga de Vaca': { category: 'Manteiga', city: 'Martlock', note: 'Usar Leite (ML)' },
  
  'Ovos de Ganso': { category: 'Animal', city: 'Lymhurst', note: 'Bônus Local' },

  'Porco Cru': { category: 'Carne', city: 'Mercado', note: 'Comprar no Mercado' },

  // --- Álcoois ---
  'Aguardente de Abóbora': { category: 'Álcool', city: 'Lymhurst', note: 'Usar Abóbora T8 (LY)' },
  'Carraspana de Milho': { category: 'Álcool', city: 'Bridgewatch', note: 'Usar Milho T7 (BW)' },
  'Álcool de Batata': { category: 'Álcool', city: 'Martlock', note: 'Usar Batata T6 (ML)' },

  // --- Itens de Caçada / Peixes / Raros ---
  'Garras de Urso-da-neve': { category: 'Caçada', city: 'Mercado', note: 'Tracking/MKT' },
  'Patas Espirituais': { category: 'Caçada', city: 'Mercado', note: 'Tracking/MKT' },
  'Chifre de Diabrete': { category: 'Caçada', city: 'Mercado', note: 'Tracking/MKT' },
  'Kraken das Águas profundas': { category: 'Peixe Raro', city: 'Mercado', note: 'Pesca/MKT' },
  'Enguia de Água-podre': { category: 'Peixe Raro', city: 'Mercado', note: 'Pesca/MKT' },
  'Caranguejo de Poço': { category: 'Peixe Raro', city: 'Mercado', note: 'Pesca/MKT' },
  'Energia Avaloniana': { category: 'Raro', city: 'Mercado', note: 'MKT' },
  
  // Genéricos para cobertura extra
  'Erva de Cheiro': { category: 'Erva', city: 'Mercado', note: 'Genérico' },
};

// 2. Receitas
export const RECIPES: Recipe[] = [
  // --- Poções ---
  {
    id: 'gather_t8',
    name: 'Poção de Coleta Maior T8',
    tier: 'VIII',
    type: 'Potion',
    yield: 5,
    ingredients: {
      'Garras de Urso-da-neve': 1,
      'Manteiga de Ovelha': 144,
      'Milefólio-carniçal': 72,
      'Verbasco-arredio': 72,
      'Cardo-dragão': 36,
      'Aguardente de Abóbora': 36
    }
  },
  {
    id: 'acid_t7',
    name: 'Poção Ácida Maior T7',
    tier: 'VII',
    type: 'Potion',
    yield: 5,
    ingredients: {
      'Patas Espirituais': 1,
      'Dedaleira-tímida': 144,
      'Verbasco-arredio': 72,
      'Carraspana de Milho': 72,
      'Leite de Vaca': 36,
      'Álcool de Batata': 36
    }
  },
  {
    id: 'hell_t8',
    name: 'Poção Infernal Maior T8',
    tier: 'VIII',
    type: 'Potion',
    yield: 5,
    ingredients: {
      'Chifre de Diabrete': 1,
      'Leite de Cabra': 144,
      'Milefólio-carniçal': 72,
      'Verbasco-arredio': 72,
      'Ovos de Ganso': 36,
      'Aguardente de Abóbora': 36
    }
  },
  {
    id: 'poison_t8',
    name: 'Poção de Veneno Maior T8',
    tier: 'VIII',
    type: 'Potion',
    yield: 5,
    ingredients: {
        'Agárico-arcano': 72,
        'Bardana-crespa': 36,
        'Cardo-dragão': 36,
        'Aguardente de Abóbora': 18
    }
  },
   {
    id: 'invis_t8',
    name: 'Poção de Invisibilidade T8',
    tier: 'VIII',
    type: 'Potion',
    yield: 5,
    ingredients: {
        'Milefólio-carniçal': 72,
        'Dedaleira-tímida': 36,
        'Agárico-arcano': 36,
        'Álcool de Batata': 18
    }
  },
  
  // --- Comidas ---
  {
    id: 'salad_kraken_t6',
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
  {
    id: 'stew_eel_t8',
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
    id: 'omelette_crab_t7',
    name: 'Omelete de Caranguejo T7',
    tier: 'VII',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Caranguejo de Poço': 1,
      'Fardo de Milho': 6,
      'Verbasco-arredio': 6,
      'Porco Cru': 6
    }
  },
  {
    id: 'sandwich_avalon_t8',
    name: 'Sanduíche Avaloniano T8',
    tier: 'VIII',
    type: 'Food',
    yield: 10,
    ingredients: {
      'Carne Crua': 72,
      'Pão': 36,
      'Manteiga de Vaca': 18,
      'Energia Avaloniana': 90
    }
  },
  {
    id: 'stew_beef_t8',
    name: 'Guisado de Carne T8',
    tier: 'VIII',
    type: 'Food',
    yield: 10,
    ingredients: {
        'Carne Crua': 72,
        'Abóbora': 36,
        'Cenouras': 36
    }
  },
  {
    id: 'omelette_pork_t7',
    name: 'Omelete de Porco T7',
    tier: 'VII',
    type: 'Food',
    yield: 10,
    ingredients: {
        'Porco Cru': 36,
        'Fardo de Milho': 72,
        'Ovos de Ganso': 18
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