var mysqlDump = require('mysqldump');
//npm install node-schedule --save
var schedule = require('node-schedule');
const moment = require('moment')
const fs = require('fs')
var CronJob = require('cron').CronJob

/* Funcion general ASYNC que encapsule las funciones independientes */
//async function todosRespaldos() {

/* AREGLO DE BASES DE DATOS */
const DBS = [
    'recargasatc',
  /*'recargasbmc',
    'recargasgeneral',
    'marquesada',
    'consignacion',
    'recargasEnlace',
    'recargasIdea',
    'recargasSierra',
    'recargasMacrocel',
    'recargasOrticel',
    'recargasPremium',
    'recargasProcel',
    'recargasTCC',
    'recargasTGCEL' */
]
function recargasatc(){ 
 
    for (i in DBS) {
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
        /* Funcion para atrapar los errores */
            function(err){
                console.log(error)
                if (err) { console.log("error") }
                else { console.log("Dump correcto desde models") }
            })
        }
   
}  

function cron(){
    new CronJob('00 20 10 * * *', function() {
        console.log("hola")
    })
}

  cron() 
//recargasatc()
