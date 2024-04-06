#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
//    1234 ===  1234 - false
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select one option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (myBalance >= amountAnswer.amount) {
            myBalance -= amountAnswer.amount;
            console.log("your remaining balance is: " + myBalance);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
    else if (operationAnswer.operation === "fast cash") {
        let cashAnswer = await inquirer.prompt([
            {
                name: "fastCash",
                message: "select one of these",
                type: "list",
                choices: ["1000", "3000", "5000",]
            }
        ]);
        myBalance -= cashAnswer.fastCash;
        console.log("your remaining amount is :" + myBalance);
    }
}
else {
    console.log("incorrect pin number");
}
