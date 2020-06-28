const Sequelize = require('sequelize');
const db = require('../config/database');

// db.authenticate()
//     .then(() => console.log('se conecto bien'))
//     .catch(error => console.log(error));

const Viaje = db.define('viaje',{
    titulo: {
        type: Sequelize.STRING
    },
    precio:{
        type: Sequelize.STRING
    },
    fecha_id:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    }
});

module.exports = Viaje;