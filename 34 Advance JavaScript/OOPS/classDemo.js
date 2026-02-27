class Product{
    #name;
    #price;
    category;
    description;
    rating;
    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.#name = productName;
        this.#price=productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }
    // setPrice(newPrice){
    //     if(newPrice > 0){
    //         this.#price = newPrice;
    //     }
    //     else{
    //         console.log("price should be greater than 0");
    //     }
    // }
    get newPrice(){
        return this.#price;
    }
    set newPrice(newPrice){
        if(newPrice > 0){
            this.#price = newPrice;
        }
        else{
            console.log("price should be greater than 0");
        }
    }
    addToCart(){
        console.log("added to cart");
    }
    removeFromCart(){
        console.log("removed from cart");
    }
    displayProduct(){
        console.log("product is displayed",this.#price);
    }

}

// console.dir(product);

// let iphone = new product();

// console.dir(iphone);
let iphone = new Product("Iphone 11", 900, "Electronics", "Apple Iphone 11", 4.5);


console.log(iphone);

// iphone.setPrice(-850);

iphone.newPrice = 850;//setter is called
console.log(iphone.newPrice);//getter is called

iphone.displayProduct();