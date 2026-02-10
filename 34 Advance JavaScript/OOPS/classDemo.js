class product{
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

console.dir(product);

let iphone = new product();

console.dir(iphone);
