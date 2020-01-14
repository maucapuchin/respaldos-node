var mysqlDump = require('mysqldump');
//npm install node-schedule --save
const moment = require('moment')
const fs = require('fs')
const fileName = `${'recargasatc'}-${moment().format('YYYY-MM-DD')}.sql`
const wstream = fs.createWriteStream(`./respaldos/recargasatc/${fileName}`)


function crearRespaldoatc(){
    mysqlDump({
        connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'recargasatc',
        },

        dumpToFile: /* wstream.path */ './respaldos/recargasatc.sql',

    },
    function(err){
        console.log(error)
        if (err) console.log("error");
        else console.log("Dump correcto desde models");
    })
}

crearRespaldoatc()