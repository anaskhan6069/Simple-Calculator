#! /usr/bin/env node  
import inquirer from "inquirer";

let ask = "y";
do{
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
            type: "input",
            name: "op",
            message: "Enter operator (+, -, x, /): "   
        }
    ])

    let num1 = answer.n1;
    let num2 = answer.n2;
    let operator = answer.op;

    if (operator == "+"){
        console.log(`${num1} + ${num2} = ${num1+num2}`);
    }
    else if(operator == "-"){
        console.log(`${num1} - ${num2} = ${num1-num2}`);
    }
    else if(operator == "x" || operator == "X" || operator == "*"){
        console.log(`${num1} x ${num2} = ${num1*num2}`);
    }
    else if(operator == "/"){
        console.log(`${num1} / ${num2} = ${num1/num2}`);
    }
    else{
        console.log(`Please enter valid operator...`);
    }
    const response = await inquirer.prompt([
        {
            type: "input",
            name: "q1",
            message: "Want to calculate again, enter \'Y\' for yes or \'N\' for no: "
        }
    ])
    ask = response.q1.toLowerCase();

}while(ask != "n");


console.log("\nThanks for using my calculator :)");





