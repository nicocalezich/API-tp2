const settingsRepository = require('../data/settings.data')
const validateSettings = require('../validations/settings.validations')
const ObjectId = require("mongoose").Types.ObjectId

const updateDiscount = async (discount) => {
  const validation = validateSettings.validateSettings(discount)
  console.log("val " + validation.value)
  if (validation.error) {
    const message = validation.error.details[0].message
    const status = 400
    throw ({ message, status })
  }
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
