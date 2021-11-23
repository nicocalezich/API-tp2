const settingsRepository = require('../data/settings.data')
const ObjectId = require("mongoose").Types.ObjectId

const updateDiscount = async (discount) => {
  const checkDiscount = await getDiscount()
  if (!checkDiscount.length) {
    return await createDiscount(discount)
  }
  let id = new ObjectId(checkDiscount[0]._id)
  const result = await settingsRepository.setDiscount(id, discount)
  return result
}

const createDiscount = async (discount) => {
  return await settingsRepository.createDiscount(discount)
}

const getDiscount = async () => {
  const result = settingsRepository.getDiscount()
  return result
}

module.exports = { updateDiscount, createDiscount, getDiscount }
