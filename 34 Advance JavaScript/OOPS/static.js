class Product{
    static x=10;//static variable creates when the class is loaded and shared among all the instances of the class
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    //console.log();//console.log cant be used inside the class body but can be used inside the methods of the class
    
}
let p1=new Product("laptop",2000);

console.log(p1);
// Product.x=20;
console.log(Product.x);