export type Ingredient = {
  name: IngredientName
}

export type Option = {
  name: string
}

export type Extra = {
  name: string
  value: number
}

export type MachineData = {
  name: string
  local: string
}

export type IngredientName =
  | 'Laranja'
  | 'Maçã'
  | 'Couve'
  | 'Limão'
  | 'Abacaxi'
  | 'Hortelã'
  | 'Uva'
  | 'Morango'
  | 'Melancia'
  | 'Manga'
  | 'Acerola'
  | 'Maracujá'
  | 'Goiaba'
  | 'Gengibre'
  | 'Açaí'
  | 'Banana'
  | 'Guaraná'
  | 'Cúrcuma'
  | 'Pimenta Cayena'
  | 'Pepino'
  | 'Espinafre'
  | 'Chá tailandês'
  | 'Leite condensado'
  | 'Café'
  | 'Leite de coco'
  | 'Capim-limão'
  | 'Coco'
  | 'Leite'
  | 'Especiarias'
  | 'Frutas exóticas'
  | 'Hibisco'
  | 'Limão siciliano'
  | 'Matcha'
  | 'Leite de amêndoas'
  | 'Pêssego'
  | 'Água de coco'
  | 'Beterraba'
  | 'Cenoura'
  | 'Cereja'
  | 'Maçã Verde'
  | 'Gin'
  | 'Tônica'

export type JuiceName =
  | 'Matcha SharkLatte'
  | 'Shark Cold Brew'
  | 'Chá Gelado de Pêssego'
  | 'Limonada com Hortelã'
  | 'Suco de Laranja'
  | 'Suco de Maçã'
  | 'Suco Verde'
  | 'Suco de Abacaxi'
  | 'Suco de Uva'
  | 'Suco de Morango'
  | 'Suco de Melancia'
  | 'Suco de Manga'
  | 'Suco de Acerola'
  | 'Suco de Maracujá'
  | 'Suco de Limão'
  | 'Suco de Goiaba'
  | 'Suco Detox'
  | 'Suco Energético'
  | 'Suco Anti-inflamatório'
  | 'Suco de Beterraba'
  | 'Suco Verde Detox'
  | 'Suco de Cenoura'
  | 'Soda Italiana de Morango'
  | 'Soda Italiana de Limão'
  | 'Soda Italiana de Maçã Verde'
  | 'Soda Italiana de Laranja'
  | 'Soda Italiana de Uva'
  | 'Soda Italiana de Cereja'
  | 'Thai Iced Tea'
  | 'Thai Iced Coffee'
  | 'Thai Lemonade'
  | 'Thai Coconut Drink'
  | 'Thai Milk Tea'
  | 'Thai Fruit Punch'
  | 'Coca-cola'
  | 'Red bull'
  | 'Água de Coco'
  | 'Gin Tônica'
  | 'Sprite'
  | 'Pepsi'
  | 'Guaraná'
