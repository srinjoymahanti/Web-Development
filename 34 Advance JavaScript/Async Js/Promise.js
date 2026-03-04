const pr = new Promise(function exex(res, rej) {
  console.log("executor callback triggered");
  setTimeout(() => {
    console.log("starting setTimeout");
    const randomNum = Math.floor(Math.random() * 100);
    console.log(randomNum);
    if (randomNum % 2 == 0) {
      res(randomNum);
    } else {
      rej(randomNum);
    }
  }, 5000);
  console.log("i am after setTimeout");
});

console.log("promise object created");
console.log(pr);
