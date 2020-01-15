var mysqlDump = require('mysqldump');
//npm install node-schedule --save
var schedule = require('node-schedule');
const moment = require('moment')
const fs = require('fs')

function recargasatc(){
    schedule.scheduleJob(' 0 33 11 * * * ', function(){
    const fileNameATC = `${'recargasatc'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamATC = fs.createWriteStream(`./respaldos/recargasatc/${fileNameATC}`)
    //   * * * * * *
    //   ┬ ┬ ┬ ┬ ┬ ┬
    //   │ │ │ │ │ |
    //   │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
    //   │ │ │ │ └───── month (1 - 12)
    //   │ │ │ └────────── day of month (1 - 31)
    //   │ │ └─────────────── hour (0 - 23)
    //   │ └──────────────────── minute (0 - 59)
    //   └───────────────────────── second (0 - 59, OPTIONAL)

        /* funcion a partir de la cual obtendremos los respaldos pasada la conexion y demas datos */
    mysqlDump({
        connection: {
        host: '192.168.1.178',
        user: 'xampp',
        password: 'marquesada?466',
        database: 'recargasatc',
    },
/* commit */
        /* Le pasamos a la funcion dump la ruta con el nombre del archivo ya armado */
        dumpToFile: /* './respaldos/recargasatc/recargasatce.sql' */wstreamATC.path,

    },
    /* Funcion para atrapar los errores */
        function(err){
        console.log(error)
        if (err) 
        console.log("error");
        else 
        console.log("Dump correcto desde models");
    })
  })
}

function recargasbmc(){
    schedule.scheduleJob(' 0 27 11 * * * ', function(){
    const fileNameBMC = `${'recargasbmc'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamBMC = fs.createWriteStream(`./respaldos/recargasbmc/${fileNameBMC}`)
    //   * * * * * *
    //   ┬ ┬ ┬ ┬ ┬ ┬
    //   │ │ │ │ │ |
    //   │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
    //   │ │ │ │ └───── month (1 - 12)
    //   │ │ │ └────────── day of month (1 - 31)
    //   │ │ └─────────────── hour (0 - 23)
    //   │ └──────────────────── minute (0 - 59)
    //   └───────────────────────── second (0 - 59, OPTIONAL)
/* funcion a partir de la cual obtendremos los respaldos pasada la conexion y demas datos */
    mysqlDump({
        connection: {
        host: '192.168.1.178',
        user: 'xampp',
        password: 'marquesada?466',
        database: 'recargasbmc',
    },

    dumpToFile: wstreamBMC.path /* './respaldos/recargasbmc.sql' */,
    },
    function(err){
        console.log(error)
        if (err) console.log("error");
        else console.log("Dump correcto desde models");
    })
  })
}

function recargasgeneral(){
    schedule.scheduleJob(' 0 30 11 * * * ', function(){
    const fileNameGeneral = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamGeneral = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameGeneral}`)
    //   * * * * * *
    //   ┬ ┬ ┬ ┬ ┬ ┬
    //   │ │ │ │ │ |
    //   │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
    //   │ │ │ │ └───── month (1 - 12)
    //   │ │ │ └────────── day of month (1 - 31)
    //   │ │ └─────────────── hour (0 - 23)
    //   │ └──────────────────── minute (0 - 59)
    //   └───────────────────────── second (0 - 59, OPTIONAL)
/* funcion a partir de la cual obtendremos los respaldos pasada la conexion y demas datos */
    mysqlDump(
    {
        connection: {
        host: '192.168.1.178',
        user: 'xampp',
        password: 'marquesada?466',
        database: 'recargasgeneral',
        },
        dumpToFile: wstreamGeneral.pat /* './respaldos/recargasgeneral.sql' */,
    },

    function(err){
        console.log(err)
        if (err){
        console.log("error");
        }else{
        console.log("Dump correcto desde models");
        } 
    })
  })
}

recargasgeneral()
recargasatc()
recargasbmc()