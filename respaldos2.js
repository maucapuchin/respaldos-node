var mysqlDump = require('mysqldump');
var schedule = require('node-schedule');
const moment = require('moment')
const fs = require('fs')
var CronJob = require('cron').CronJob

/* comentario from master */
/* ARREGLO DE BASES DE DATOS */
const DBS = [
    'recargasatc',
    'recargasgeneral',
    'marquesadabd',
    'recargasbmc',
    'consignacion',
    'recargasenlace',
    'recargasidea',
    'recargassierra',
    'recargasmacrocel',
    'recargasorticel',
    'recargaspremium',
    'recargasprocel',
    'recargastcc',
    'recargastgcel' 
]
 function recargasatc(){ 
   schedule.scheduleJob('0 13 12 * * *', function(){
    for (i = 0; i < DBS.length; i++) {

        const fileName = `${DBS[i]}-${moment().format('YYYY-MM-DD')}.sql`
        const wstream = fs.createWriteStream(`./respaldos/${DBS[i]}/${fileName}`)
        
        mysqlDump({
            connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: DBS[i],
        },
            /* Le pasamos a la funcion dump la ruta con el nombre del archivo ya armado */
            dumpToFile: wstream.path,
        },
            function(err){
                console.log(error)
                if (err) { console.log("error") }
                else { console.log("Dump correcto desde models") }
            })
        }
    })
}


recargasatc()
