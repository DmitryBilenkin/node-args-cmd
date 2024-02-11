#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

  yargs(hideBin(process.argv))
    .command({
        command: "current",
        describe: "Вывод текущей даты в формате ISO",
        handler(argv){
            const currDate = new Date().toISOString()
            const currYear = argv.year = new Date().getFullYear();
            console.log(currDate, currYear, argv)
        }
    })
    .option('year',{
        alias:'y',
        type:'number',
        description:'Текущий год'  
    })
    .option('month',{
        alias:'m',
        type:'string',
        description:'Текущий месяц'
    })
    .option('date',{
        alias:'d',
        type:'string',
        description:'День в текущем месяце'
    })
    .parse()



