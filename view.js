const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
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

function inputf(model){
    const {input1,input2} = model
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input',
            message: 'Bill Amount?',
            default: input1,
            validate: function(value){
                if (value >=0 ){
                    return true
                }else {
                    return 'Enter positive number'
                }
                
            }
        },
        {
            name: 'input2',
            type: 'input',
            message: 'Tip(%)?',
            default: input2, 
            validate: function(value){
                if (value >=0 ){
                    return true
                }else {
                    return 'Enter positive number'
                }
                
            }
        }
    ])

}
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {   
    view,
    inputf,
}


