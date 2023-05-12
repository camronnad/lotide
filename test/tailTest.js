const tail = require('../tail');
const assertEqual = require('../assertEqual');


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result1 = tail(words);
assertEqual(words.length, 3);
assertEqual(result1.length, 2);