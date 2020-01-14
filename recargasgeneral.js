var mysqlDump = require('mysqldump');
//npm install node-schedule --save
var schedule = require('node-schedule');

 var j = schedule.scheduleJob(' 05 10 * * * ', function(){
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

        dumpToFile: './respaldos/recargasgeneral.sql',

    },

    function(err){
        console.log(err)
        if (err){
            console.log("error");
        }else{
            console.log("Dump correcto desde models");
        } 
    })
});