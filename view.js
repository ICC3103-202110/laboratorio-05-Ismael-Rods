const figlet = require('figlet')
const chalk = require('chalk')
const prompt = require('prompt-sync')

function getTitle(){
    return chalk.green(
        figlet.textSync('Tip Calculator App',
            {
                font: 'Nancyj-Underlined',
                horizontalLayout: 'full',
                
            }
        )
    )
}

function getTable(model){
    const {billAmount, percentage, tip, total} = model
    return [
        {'Bill Amount': billAmount, 'Tip (%)': percentage,tip: tip, total: total }
    ]
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}
module.exports = {   //para que otro archivo pueda usar estas funciones de este archivo
    getTitle,
    getTable,
    view,
}

//Create a table
const testCases = [
  { index: 3, text: 'I would like some gelb bananen bitte', value: 100 },
  { index: 4, text: 'I hope batch update is working', value: 300 },
];

//print

