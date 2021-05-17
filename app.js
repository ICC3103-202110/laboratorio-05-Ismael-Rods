const {printTable} = require('console-table-printer')
const {inputf} = require('./view')  //simil import getTitle from view.js

//Impure
async function app(state,update,view){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear()
    console.log(title)
    printTable(table)
    const {input1} = await inputf(model)
    console.log(input1)
}

module.exports = {
  app
}


