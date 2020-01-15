var mysqlDump = require('mysqldump');
//npm install node-schedule --save
var schedule = require('node-schedule');
const moment = require('moment')
const fs = require('fs')
const fileNameATC = `${'recargasatc'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamATC = fs.createWriteStream(`./respaldos/recargasatc/${fileNameATC}`)

const fileNameBMC = `${'recargasbmc'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamBMC = fs.createWriteStream(`./respaldos/recargasbmc/${fileNameBMC}`)

const fileNameGeneral = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamGeneral = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameGeneral}`)

const fileNameMarquesada = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamMarquesada = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameMarquesada}`)

const fileNameConsignacion = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamConsignacion = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameMarquesada}`)

const fileNameEnlace = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamEnlace = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameMarquesada}`)

const fileNameIdea = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamIdea = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameMarquesada}`)

const fileNameMacrocel = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamMacrocel = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameMarquesada}`)

const fileNameOrticel = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamOrticel = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameMarquesada}`)

const fileNamePremium = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamPremium = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameMarquesada}`)

const fileNameProcel = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamProcel = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameMarquesada}`)

const fileNameSierra = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamSierra = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameMarquesada}`)

const fileNameTCC = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamTCC = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameMarquesada}`)

const fileNameTGCEL = `${'recargasgeneral'}-${moment().format('YYYY-MM-DD')}.sql`
const wstreamTGCEL = fs.createWriteStream(`./respaldos/recargasgeneral/${fileNameMarquesada}`)

function recargasatc(){
var recargasatc = schedule.scheduleJob(' 33 11 * * * ', function(){
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
var recargasbmc = schedule.scheduleJob(' 27 11 * * * ', function(){
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

function recagasgeneral(){
var recagasgeneral = schedule.scheduleJob(' 30 11 * * * ', function(){
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

function marquesada(){
    var marquesada = schedule.scheduleJob(' 27 11 * * * ', function(){
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
    
        dumpToFile: wstreamMarquesada.path /* './respaldos/recargasbmc.sql' */,
        },
        function(err){
            console.log(error)
            if (err) console.log("error");
            else console.log("Dump correcto desde models");
        })
      })
    }

    function recargasConsignacion(){
        var recargasConsignacion = schedule.scheduleJob(' 27 11 * * * ', function(){
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

        function recargasEnlace(){
            var recargasbmc = schedule.scheduleJob(' 27 11 * * * ', function(){
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
            
                dumpToFile: wstreamEnlace.path /* './respaldos/recargasbmc.sql' */,
                },
                function(err){
                    console.log(error)
                    if (err) console.log("error");
                    else console.log("Dump correcto desde models");
            })
        })
    }

    function recargasIdea(){
        var recargasIdea = schedule.scheduleJob(' 27 11 * * * ', function(){
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
        
            dumpToFile: wstreamIdea.path /* './respaldos/recargasbmc.sql' */,
            },
            function(err){
                console.log(error)
                if (err) console.log("error");
                else console.log("Dump correcto desde models");
            })
        })
    }  

    function recargasSierra(){
        var recargasSierra = schedule.scheduleJob(' 27 11 * * * ', function(){
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

    function recargasMacrocel(){
        var recargasMacrocel = schedule.scheduleJob(' 27 11 * * * ', function(){
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

    function recargasOrticel(){
        var recargasOrticel = schedule.scheduleJob(' 27 11 * * * ', function(){
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
        
            dumpToFile: wstreamOrticel.path /* './respaldos/recargasbmc.sql' */,
            },
            function(err){
                console.log(error)
                if (err) console.log("error");
                else console.log("Dump correcto desde models");
            })
        })
    }

    function recargasPremium(){
        var recargasPremium = schedule.scheduleJob(' 27 11 * * * ', function(){
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

    function recargasProcel(){
        var recargasbmc = schedule.scheduleJob(' 27 11 * * * ', function(){
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
        
            dumpToFile: wstreamProcel.path /* './respaldos/recargasbmc.sql' */,
            },
            function(err){
                console.log(error)
                if (err) console.log("error");
                else console.log("Dump correcto desde models");
            })
        })
    }

    function recargasTCC(){
        var recargasTCC = schedule.scheduleJob(' 27 11 * * * ', function(){
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
        
            dumpToFile: wstreamTCC.path /* './respaldos/recargasbmc.sql' */,
            },
            function(err){
                console.log(error)
                if (err) console.log("error");
                else console.log("Dump correcto desde models");
            })
        })
    }

    function recargasTGCEL(){
        var recargasTGCEL = schedule.scheduleJob(' 27 11 * * * ', function(){
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
        
            dumpToFile: wstreamTGCEL.path /* './respaldos/recargasbmc.sql' */,
            },
            function(err){
                console.log(error)
                if (err) console.log("error");
                else console.log("Dump correcto desde models");
            })
          })
        }

recagasgeneral()
recargasatc()
recargasbmc()
marquesada()
recargasConsignacion()
recargasEnlace()
recargasIdea()
recargasSierra()
recargasMacrocel()
recargasOrticel()
recargasOrticel()
recargasTCC()
recargasTGCEL()
