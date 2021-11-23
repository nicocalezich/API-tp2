const settingsService = require('../services/settings.services')

const setDiscounts = async (req, res) => {
    try{
        const result = await settingsService.updateDiscount(req.body)
        res.status(200).send(result)
    }
    catch (error){
        res.send(400).status(error)
    }
}

module.exports = { setDiscounts }