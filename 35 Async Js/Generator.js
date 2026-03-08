function* generator(){
    console.log("inside generator");
    yield 11;
    console.log("line after 11");
    yield 33;
    console.log("line after 33");
}

const i=generator();
console.log(i.next());
console.log(i.next());
console.log(i.next());