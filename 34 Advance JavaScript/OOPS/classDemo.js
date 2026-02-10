class Product{
    // name;
    // price;
    // category;
    // description;
    // rating;
    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.name = productName;
        this.price=productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }
    addToCart(){
        console.log("added to cart");
    }
    removeFromCart(){
        console.log("removed from cart");
    }
    displayProduct(){
        console.log("product is displayed");
    }

}

// console.dir(product);

// let iphone = new product();

// console.dir(iphone);
let iphone = new Product("Iphone 11", 900, "Electronics", "Apple Iphone 11", 4.5);

console.log(iphone);