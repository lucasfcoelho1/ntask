const Sequelize = require('sequelize')
const config = require('./libs/config.js')

var sequelize = null

module.exports = () => {
    if(!sequelize) {
        sequelize = new Sequelize(
            config.database,
            config.username,
            config.params,
            config.params
        )
    }
    return sequelize
}