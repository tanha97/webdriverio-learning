class Shop
{
get checkout()
    {
        return $("*=Checkout")
    }
get cards()
    {
        return $$(".card.h-100")
    }
async addProductsToCard(products)
{

    for(let i=0; i< this.cards.length;i++)
        {
           let cardTitle= await this.cards[i].$("div h4 a")
           console.log(await cardTitle.getText()) // Print all the card title name
           if(await products.includes(await cardTitle.getText()))
           {
            await this.cards[i].$(".card-footer button").click()
           }
        }
}




}
module.exports=new Shop()