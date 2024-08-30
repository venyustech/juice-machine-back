import {
  FunctionalJuice,
  GenericJuice,
  NaturalJuice,
  SharkJuice,
  SmoothieJuice,
  ThaiJuice
} from './../../src/types/juiceTypes'

const sharkJuicesData = (): SharkJuice[] => [
  {
    name: 'Matcha SharkLatte',
    description: 'Matcha latte gelado com leite de amêndoas',
    value: 1800,
    juiceType: 'SHARK',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Shark Cold Brew',
    description: 'Café cold brew com leite de coco',
    value: 1700,
    juiceType: 'SHARK',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Chá Gelado de Pêssego',
    description: 'Chá gelado de pêssego com hortelã',
    value: 1500,
    juiceType: 'SHARK',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Limonada com Hortelã',
    description: 'Limonada natural com hortelã fresca',
    value: 1000,
    juiceType: 'SHARK',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  }
]

const naturalJuicesData = (): NaturalJuice[] => [
  {
    name: 'Suco de Laranja',
    description: 'Delicioso suco de laranja natural',
    value: 1200,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Maçã',
    description: 'Refrescante suco de maçã',
    value: 1100,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco Verde',
    description: 'Suco detox com couve e limão',
    value: 1300,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Abacaxi',
    description: 'Suco de abacaxi com hortelã',
    value: 1250,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Uva',
    description: 'Suco de uva integral',
    value: 1400,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Morango',
    description: 'Suco de morango com limão',
    value: 1350,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Melancia',
    description: 'Refrescante suco de melancia natural',
    value: 1200,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Manga',
    description: 'Suco de manga doce e cremoso',
    value: 1100,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Acerola',
    description: 'Suco de acerola com alto teor de vitamina C',
    value: 1300,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Maracujá',
    description: 'Suco de maracujá relaxante e delicioso',
    value: 1250,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Limão',
    description: 'Suco de limão natural, refrescante e ácido',
    value: 1000,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Goiaba',
    description: 'Suco de goiaba com textura cremosa',
    value: 1350,
    juiceType: 'NATURAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  }
]

const functionalJuicesData = (): FunctionalJuice[] => [
  {
    name: 'Suco Detox',
    description: 'Suco detox com couve, limão e gengibre',
    value: 1500,
    juiceType: 'FUNCTIONAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco Energético',
    description: 'Suco energético com açaí, banana e guaraná',
    value: 1600,
    juiceType: 'FUNCTIONAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco Anti-inflamatório',
    description: 'Suco com abacaxi, cúrcuma e pimenta cayena',
    value: 1400,
    juiceType: 'FUNCTIONAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Beterraba',
    description: 'Suco de beterraba com laranja e gengibre',
    value: 1300,
    juiceType: 'FUNCTIONAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco Verde Detox',
    description: 'Suco verde com pepino, espinafre e limão',
    value: 1550,
    juiceType: 'FUNCTIONAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Suco de Cenoura',
    description: 'Suco de cenoura com laranja e gengibre',
    value: 1200,
    juiceType: 'FUNCTIONAL',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  }
]

const smoothieJuiceData = (): SmoothieJuice[] => [
  {
    name: 'Soda Italiana de Morango',
    description: 'Refrescante soda italiana com sabor de morango',
    value: 1200,
    juiceType: 'SMOOTHIE',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Soda Italiana de Limão',
    description: 'Soda italiana com um toque cítrico de limão',
    value: 1200,
    juiceType: 'SMOOTHIE',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Soda Italiana de Maçã Verde',
    description: 'Soda italiana com sabor de maçã verde',
    value: 1300,
    juiceType: 'SMOOTHIE',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Soda Italiana de Laranja',
    description: 'Soda italiana refrescante de laranja',
    value: 1150,
    juiceType: 'SMOOTHIE',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Soda Italiana de Uva',
    description: 'Soda italiana com sabor intenso de uva',
    value: 1350,
    juiceType: 'SMOOTHIE',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Soda Italiana de Cereja',
    description: 'Soda italiana doce com sabor de cereja',
    value: 1400,
    juiceType: 'SMOOTHIE',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  }
]

const thaiJuiceData = (): ThaiJuice[] => [
  {
    name: 'Thai Iced Tea',
    description: 'Chá tailandês gelado com leite condensado',
    value: 1800,
    juiceType: 'THAI',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Thai Iced Coffee',
    description: 'Café gelado tailandês com leite de coco',
    value: 1900,
    juiceType: 'THAI',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Thai Lemonade',
    description: 'Limonada tailandesa com capim-limão',
    value: 1700,
    juiceType: 'THAI',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Thai Coconut Drink',
    description: 'Bebida tailandesa de coco com gelo picado',
    value: 2000,
    juiceType: 'THAI',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Thai Milk Tea',
    description: 'Chá tailandês com leite e especiarias',
    value: 1850,
    juiceType: 'THAI',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Thai Fruit Punch',
    description: 'Ponche de frutas exóticas tailandês',
    value: 2200,
    juiceType: 'THAI',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  }
]

const genericJuiceData = (): GenericJuice[] => [
  {
    name: 'Coca-cola',
    description: 'Coquinha gelada',
    value: 1400,
    juiceType: 'GENERIC',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Red bull',
    description: 'energeticozinho delicioso',
    value: 1800,
    juiceType: 'GENERIC',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Água de Coco',
    description: 'Água de coco natural',
    value: 1200,
    juiceType: 'GENERIC',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Gin Tônica',
    description: 'Gin tônica de lei',
    value: 1000,
    juiceType: 'GENERIC',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Sprite',
    description: 'Refrigerante de limão geladinho',
    value: 1300,
    juiceType: 'GENERIC',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Pepsi',
    description: 'Pepsi gelada e refrescante',
    value: 1400,
    juiceType: 'GENERIC',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  },
  {
    name: 'Guaraná',
    description: 'Guaraná Antarctica gelado',
    value: 1350,
    juiceType: 'GENERIC',
    imageUrl: 'https://i.imgur.com/VJrBSFh.png'
  }
]

export default {
  sharkJuicesData,
  naturalJuicesData,
  functionalJuicesData,
  smoothieJuiceData,
  thaiJuiceData,
  genericJuiceData
}
