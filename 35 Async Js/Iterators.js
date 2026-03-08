function getElementNext(arr){
    let idx=0;
    function next(){
        if(idx>=arr.length){
            return {data:undefined,done:true};
        }
        const newElement=arr[idx];
        idx++;
        return {data:newElement,done:false};
    }
    return next;
}

array=[2,9,1,7,3];
const value=getElementNext(array);
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
console.log(value());
console.log(value());
console.log(value());
console.log(value());
console.log(value());
console.log(value());