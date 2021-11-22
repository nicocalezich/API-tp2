const Joi = require("@hapi/joi")

module.exports = {
    validateSale: (sale) => {
        const schema = Joi.object({
            products: Joi.required(),

            total: Joi.number()
                .min(0)
                .required(),

            buyer: Joi.number()
                .min(0)
                .required(),

            paymentMethod: Joi.string()
                .min(3)
                .max(25)
                .required(),

            date: Joi.date()
                .required(),
        })

        return schema.validate({ products: sale.products, total: sale.total, buyer: sale.buyer, paymentMethod: sale.paymentMethod, date: sale.date })

    },
}