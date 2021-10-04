//import {splitBetweenPeople} from './frontend/splitMoneyFunctions.js';
const splitBetweenPeople = require ("../splitMoneyFunctions/splitBetweenPeople")

describe("Split Function", () =>{

test("split between two people", () =>{
    const amount = 40;
    const people = 2;
    const output = 20

    expect(splitBetweenPeople(amount, people)).toEqual(output);
});

});