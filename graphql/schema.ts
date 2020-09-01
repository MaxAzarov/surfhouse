import { buildSchema } from "graphql";

export default buildSchema(`
    type Cards {
        title:String!
        newPrice:Float!
        category:String!
        oldPrice:Float!
        productCode:Int!
        availability:Boolean!
        overview:String!
        size:[String!]
        productDescription:String!
        additionalInfo:String!
        reviews:[String!]
        productsTags:[String!]
        image:String
        id:String!
    }
    type User {
        token:String!
        id:ID!
    }
    type ShopCards {
        cards:[Cards]!
        count:Int!
    }
    type Basket {
        quantity:Int!
        size:String!
        id:String!
        elementId:Cards!
    }
    type StripeToken {
        number:Int!
        exp_month:Int!
        exp_year:Int!
        cvc:Int!
        address_line1:String!
    }
    type Query {
        getNewCards:[Cards]
        getSaleCards:[Cards]
        getTopCards:[Cards]
        FetchBasketCards:[Basket]!
        GetCardInfo(id:String!):Cards!
        GetLikedCards:[Cards]
        FetchWishListCards:[Basket]
        ShopSorting(category:String!,limit:Int!,price:Int!,search:String,skip:Int!):ShopCards!
        SendEmail(email:String!):String!
       
    }
   
    type Mutation {
        userLogin(email:String!,password:String!):User!
        userRegister(name:String! ,email:String!,company:String!,password:String!):String!
        AddBasketItem(id:String!,size:String!,quantity:Int!):Basket!
        AddWishListItem(id:String!,quantity:Int!,size:String!):Basket!
        RemoveBasketItem(id:String!):Basket!
        ChangeCardAmount(id:String!,count:Int!):Basket!
        RemoveWishListItem(id:String!):Basket!
        ClearBasket:String!


    }
`);
// Checkout(stripeToken:StripeToken!):String!
