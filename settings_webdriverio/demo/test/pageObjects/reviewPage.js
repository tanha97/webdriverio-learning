class ReviewPage
{

get productPrices()
{
    return $$("tr td:nth-child(4) strong")
}
get totalPrice()
{
    return $("h3 strong")
}

async sumOfProducts()
{
    let sumOfProductPrices= (await Promise.all (await this.productPrices.map(async (productPrices)=> parseInt((await productPrices.getText()).split(".")[1].trim()))))
    .reduce((accumulate,price)=>accumulate+price,0)
}

async totalFormattedPrice()
{
    let totalValue= await this.totalPrice.getText()
    let totalIntValue= parseInt(totalValue.split(".")[1].trim())
}



}
module.exports= new ReviewPage()