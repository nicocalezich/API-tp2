module.exports = class Sale{
    constructor(products, total, buyer, paymentMethod, date){
        this.products = products
        this.total = total
        this.buyer = buyer
        this.paymentMethod = paymentMethod
        this.date = date
    }
}