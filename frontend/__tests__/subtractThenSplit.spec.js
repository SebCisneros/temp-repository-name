const subtractThenSplit = require ("../splitMoneyFunctions/subtractThenSplit")

describe("Split Function", () =>{

test("split between two people", () =>{
    const totalAmount = 200
    const people = 2;
    const amountToSubtract = 100;
    const output = 50

    expect(subtractThenSplit(totalAmount, people, amountToSubtract)).toEqual(output);
});

});