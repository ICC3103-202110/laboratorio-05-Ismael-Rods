const {initModel} = require('./model')
//const {update} = require('./update')
const {view} = require('./view')
const {app} = require('./app')          //from app import app

const state = {
    model: initModel,
    currentView: view(initModel)
}
app(state,true,view)