#! /usr/bin/env node  
import inquirer from "inquirer";
import clear from "clear";

let ask = "n";
do{
    // process.stdout.write('\u001b[2J\u001b[0;0H'); ANSi escape code for clear screen without using any library
    clear();
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "n1",
            message: "\nEnter 1st number: "   
        },
        {
            type: "number",
            name: "n2",
            message: "Enter 2nd number: "   
        },
        {
            type: "list",
            name: "op",
            message: "\nChoose operation you want to perform: ",   
            choices: ["Addition (+)", "Subtraction (-)", "Multiplication (x)", "Division (/)"]
        }
    ])

    let num1 = answer.n1;
    let num2 = answer.n2;
    let operator = answer.op;

    if (answer.op == "Addition (+)"){
        console.log(`${num1} + ${num2} = ${num1+num2}`);
    }
    else if(answer.op == "Subtraction (-)"){
        console.log(`${num1} - ${num2} = ${num1-num2}`);
    }
    else if(answer.op == "Multiplication (x)"){
        console.log(`${num1} x ${num2} = ${num1*num2}`);
    }
    else if(answer.op == "Division (/)"){
        console.log(`${num1} / ${num2} = ${num1/num2}`);
    }
    const response = await inquirer.prompt([
        {
            type: "input",
            name: "q1",
            message: "Want to calculate again, enter \'Y\' for yes or \'N\' for no: "
        }
    ])
    ask = response.q1.toLowerCase();

}while(ask == "y");


console.log("\nThanks for using my calculator :)");





