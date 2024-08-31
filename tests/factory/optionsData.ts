import { Option } from '../../src/types/basicTypes.js'

const optionsData = (): Option[] => {
  const options = ['sugar', 'ice', 'milk']
  return options.map((option) => ({ name: option }))
}

export default {
  optionsData
}
