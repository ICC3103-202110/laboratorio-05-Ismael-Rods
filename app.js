const {printTable} = require('console-table-printer')
const {getTitle, getTable} = require('./view')  //simil import getTitle from view.js

//Impure
async function app(state,update,view){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear()
    console.log(title)
    printTable(table)
}

module.exports = {
  app
}


