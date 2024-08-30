import { Extra } from '../../src/types/basicTypes.js'

const extraData = (): Extra[] => {
  const extras = ['chantilly', 'alcohol', 'whey']
  return extras.map((extra) => ({ name: extra, value: 6 }))
}

export default {
  extraData
}
