import { Ingredient, IngredientName } from '../../src/types/basicTypes.js'

const ingredientsData = (): Ingredient[] => {
  const ingredientsRecord: Record<IngredientName, true> = {
    Laranja: true,
    Maçã: true,
    Couve: true,
    Limão: true,
    Abacaxi: true,
    Hortelã: true,
    Uva: true,
    Morango: true,
    Melancia: true,
    Manga: true,
    Acerola: true,
    Maracujá: true,
    Goiaba: true,
    Gengibre: true,
    Açaí: true,
    Banana: true,
    Guaraná: true,
    Cúrcuma: true,
    'Pimenta Cayena': true,
    Pepino: true,
    Espinafre: true,
    'Chá tailandês': true,
    'Leite condensado': true,
    Café: true,
    'Leite de coco': true,
    'Capim-limão': true,
    Coco: true,
    Leite: true,
    Especiarias: true,
    'Frutas exóticas': true,
    Hibisco: true,
    'Limão siciliano': true,
    Matcha: true,
    'Leite de amêndoas': true,
    Pêssego: true,
    'Água de coco': true,
    Beterraba: true,
    Cenoura: true,
    Cereja: true,
    'Maçã Verde': true,
    Gin: true,
    Tônica: true
  }

  return Object.keys(ingredientsRecord).map((ingredient) => ({
    name: ingredient as IngredientName
  }))
}

export default {
  ingredientsData
}
