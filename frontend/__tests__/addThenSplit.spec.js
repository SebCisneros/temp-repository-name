const addThenSplit = require ("../splitMoneyFunctions/addThenSplit")

describe("Split Function", () =>{

test("split between two people", () =>{
    const totalAmount = 60
    const people = 2;
    const amountToAdd = 20;
    const output = 40

    expect(addThenSplit(totalAmount, people, amountToAdd)).toEqual(output);
});

});