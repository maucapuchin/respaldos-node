var mysqlDump = require('mysqldump');
//npm install node-schedule --save
var schedule = require('node-schedule');
const moment = require('moment')
const fs = require('fs')

function recargasatc(){
    schedule.scheduleJob(' 0 53 9 * * * ', function(){
    
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
        const fileNameATC = `${'recargasatc'}-${moment().format('YYYY-MM-DD')}.sql`
        const wstreamATC = fs.createWriteStream(`./respaldos/recargasatc/${fileNameATC}`)
    mysqlDump({
        connection: {
        host: '192.168.1.178',
        user: 'xampp',
        password: 'marquesada?466',
        database: 'recargasatc',
    },

        /* Le pasamos a la funcion dump la ruta con el nombre del archivo ya armado */
        dumpToFile: wstreamATC.path,

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
    schedule.scheduleJob(' 0 53 9 * * * ', function(){
    
                        //   * * * * * *
                        //   ┬ ┬ ┬ ┬ ┬ ┬
                        //   │ │ │ │ │ |
                        //   │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
                        //   │ │ │ │ └───── month (1 - 12)
                        //   │ │ │ └────────── day of month (1 - 31)
                        //   │ │ └─────────────── hour (0 - 23)
                        //   │ └──────────────────── minute (0 - 59)
                        //   └───────────────────────── second (0 - 59, OPTIONAL)
    const fileNameBMC = `${'recargasbmc'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamBMC = fs.createWriteStream(`./respaldos/recargasbmc/${fileNameBMC}`)
/* funcion a partir de la cual obtendremos los respaldos pasada la conexion y demas datos */
    mysqlDump({
        connection: {
        host: '192.168.1.178',
        user: 'xampp',
        password: 'marquesada?466',
        database: 'recargasbmc',
    },

    dumpToFile: wstreamBMC.path,
    },
    function(err){
        console.log(error)
        if (err) console.log("error");
        else console.log("Dump correcto desde models");
    })
  })
}

function recargasgeneral(){
    schedule.scheduleJob(' 0 54 9 * * * ', function(){
                        //   * * * * * *
                        //   ┬ ┬ ┬ ┬ ┬ ┬
                        //   │ │ │ │ │ |
                        //   │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
                        //   │ │ │ │ └───── month (1 - 12)
                        //   │ │ │ └────────── day of month (1 - 31)
                        //   │ │ └─────────────── hour (0 - 23)
                        //   │ └──────────────────── minute (0 - 59)
                        //   └───────────────────────── second (0 - 59, OPTIONAL)

    const fileNameGeneral = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamGeneral = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameGeneral}`)
/* funcion a partir de la cual obtendremos los respaldos pasada la conexion y demas datos */
const fileNameGeneral = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamGeneral = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameGeneral}`)
    mysqlDump(
    {
        connection: {
        host: '192.168.1.178',
        user: 'xampp',
        password: 'marquesada?466',
        database: 'recargasgeneral',
        },
        dumpToFile: wstreamGeneral.path,
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

function marquesada(){
    schedule.scheduleJob(' 0 54 9 * * * ', function(){
                                        //   * * * * * *
                                        //   ┬ ┬ ┬ ┬ ┬ ┬
                                        //   │ │ │ │ │ |
                                        //   │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
                                        //   │ │ │ │ └───── month (1 - 12)
                                        //   │ │ │ └────────── day of month (1 - 31)
                                        //   │ │ └─────────────── hour (0 - 23)
                                        //   │ └──────────────────── minute (0 - 59)
                                        //   └───────────────────────── second (0 - 59, OPTIONAL)
    const fileNameMarquesada = `${'marquesadabd'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamMarquesada = fs.createWriteStream(`./respaldos/marquesadabd/${fileNameMarquesada}`)
    /* funcion a partir de la cual obtendremos los respaldos pasada la conexion y demas datos */
    mysqlDump({
        connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'marquesadabd',
        },
    
        dumpToFile: wstreamMarquesada.path,
        },
        function(err){
            console.log(error)
            if (err) console.log("error");
            else console.log("Dump correcto desde models");
        })
    })
}

function consignacion(){
    schedule.scheduleJob(' 0 54 9 * * * ', function(){
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
    const fileNameConsignacion = `${'consignacion'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamConsignacion = fs.createWriteStream(`./respaldos/consignacion/${fileNameConsignacion}`)
        mysqlDump({
            connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'consignacion',
        },
    
        dumpToFile: wstreamConsignacion.path,
        },
        function(err){
            console.log(error)
            if (err) console.log("error");
            else console.log("Dump correcto desde models");
        })
    })
}

function recargasEnlace(){
    schedule.scheduleJob(' 0 56 9 * * * ', function(){
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
    const fileNameEnlace = `${'recargasenlace'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamEnlace = fs.createWriteStream(`./respaldos/recargasenlace/${fileNameEnlace}`)
        mysqlDump({
            connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'recargasenlace',
        },
    
        dumpToFile: wstreamEnlace.path,
        },
        function(err){
            console.log(error)
            if (err) 
                console.log("error");
            else 
                console.log("Dump correcto desde models");
        })
    })
}

function recargasIdea(){
    schedule.scheduleJob(' 0 57 9 * * * ', function(){
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
    const fileNameIdea = `${'recargasidea'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamIdea = fs.createWriteStream(`./respaldos/recargasidea/${fileNameIdea}`)
        mysqlDump({
            connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'recargasidea',
        },
    
        dumpToFile: wstreamIdea.path,
        },
        function(err){
            console.log(error)
            if (err) console.log("error");
            else console.log("Dump correcto desde models");
        })
    })
}  

function recargasSierra(){
    schedule.scheduleJob(' 0 58 9 * * * ', function(){
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
    const fileNameSierra = `${'recargassierra'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamSierra = fs.createWriteStream(`./respaldos/recargassierra/${fileNameSierra}`)
        mysqlDump({
            connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'recargassierra',
        },
    
        dumpToFile: wstreamSierra.path,
        },
        function(err){
            console.log(error)
            if (err) console.log("error");
            else console.log("Dump correcto desde models");
        })
    })
}

function recargasMacrocel(){
    schedule.scheduleJob(' 0 59 9 * * * ', function(){
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
    const fileNameMacrocel = `${'recargasmacrocel'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamMacrocel = fs.createWriteStream(`./respaldos/recargasmacrocel/${fileNameMacrocel}`)
        mysqlDump({
            connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'recargasmacrocel',
        },
    
        dumpToFile: wstreamMacrocel.path,
        },
        function(err){
            console.log(error)
            if (err) console.log("error");
            else console.log("Dump correcto desde models");
        })
    })
}

function recargasOrticel(){
    schedule.scheduleJob(' 0 0 10 * * * ', function(){
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
    const fileNameOrticel = `${'recargasorticel'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamOrticel = fs.createWriteStream(`./respaldos/recargasorticel/${fileNameOrticel}`)
        mysqlDump({
            connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'recargasorticel',
        },
    
        dumpToFile: wstreamOrticel.path,
        },
        function(err){
            console.log(error)
            if (err) console.log("error");
            else console.log("Dump correcto desde models");
        })
    })
}

function recargasPremium(){
    schedule.scheduleJob(' 0 1 10 * * * ', function(){
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
    const fileNamePremium = `${'recargaspremium'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamPremium = fs.createWriteStream(`./respaldos/recargaspremium/${fileNamePremium}`)
        mysqlDump({
            connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'recargaspremium',
        },
    
        dumpToFile: wstreamPremium.path,
        },
        function(err){
            console.log(error)
            if (err) console.log("error");
            else console.log("Dump correcto desde models");
        })
    })
}

function recargasProcel(){
    schedule.scheduleJob(' 0 2 10 * * * ', function(){
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
    const fileNameProcel = `${'recargasprocel'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamProcel = fs.createWriteStream(`./respaldos/recargasprocel/${fileNameProcel}`)
        mysqlDump({
            connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'recargasbmc',
        },
    
        dumpToFile: wstreamProcel.path,
        },
        function(err){
            console.log(error)
            if (err) console.log("error");
            else console.log("Dump correcto desde models");
        })
    })
}

function recargasTCC(){
    schedule.scheduleJob(' 0 3 10 * * * ', function(){
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
    const fileNameTCC = `${'recargastcc'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamTCC = fs.createWriteStream(`./respaldos/recargastcc/${fileNameTCC}`)
        mysqlDump({
            connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'recargastcc',
        },
    
        dumpToFile: wstreamTCC.path,
        },
        function(err){
            console.log(error)
            if (err) console.log("error");
            else console.log("Dump correcto desde models");
        })
    })
}

function recargasTGCEL(){
    schedule.scheduleJob('0 4 10 * * * ', function(){
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
    const fileNameTGCEL = `${'recargastgcel'}-${moment().format('YYYY-MM-DD')}.sql`
    const wstreamTGCEL = fs.createWriteStream(`./respaldos/recargastgcel/${fileNameTGCEL}`)
        mysqlDump({
            connection: {
            host: '192.168.1.178',
            user: 'xampp',
            password: 'marquesada?466',
            database: 'recargastgcel',
        },
    
        dumpToFile: wstreamTGCEL.path,
        },
        function(err){
            console.log(error)
            if (err) console.log("error");
            else console.log("Dump correcto desde models");
        })
    })
}
/* listo */
recargasgeneral()
recargasatc()
recargasbmc()
marquesada()
consignacion()
recargasEnlace()
recargasIdea()
recargasSierra()
recargasMacrocel()
recargasOrticel()
recargasProcel()
recargasPremium()
recargasTCC()
recargasTGCEL()
