import { linearSearch } from "./searching.js";

const arr = [10, 23, 45, 70, 11, 15];
const target = 70;

const result = linearSearch(arr, target);


console.log(`Linear search: ${result}`);