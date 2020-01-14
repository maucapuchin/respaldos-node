var mysqlDump = require('mysqldump');
//npm install node-schedule --save
var schedule = require('node-schedule');
const moment = require('moment')
const fs = require('fs')
const fileName = `${'recargasatc'}-${moment().format('YYYY-MM-DD')}.sql`
const wstream = fs.createWriteStream(`./respaldos/recargasatc/${fileName}`)
/* comment */
/* Esquema de automatizacion de la tarea con scheduleJob */
var j = schedule.scheduleJob(' 20 10 * * * ', function(){
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

        /* Le pasamos a la funcion dump la ruta con el nombre del archivo ya armado */
        dumpToFile: /* './respaldos/recargasatc/recargasatce.sql' */wstream.path,

    },
    /* Funcion para atrapar los errores */
    function(err){
        console.log(error)
        if (err) 
            console.log("error");
        else 
            console.log("Dump correcto desde models");
    })
});
