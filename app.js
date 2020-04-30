const note = require('./notes-app/note')
const yargs = require('yargs');

yargs.version('1.0.0')
yargs.command({
    command : 'add',
    describe: 'add a new note',
    builder : {
        title: {
              describe:'Note title',
              demandOption : true,
              type : 'String'
        },
        body : {
            describe : 'Note Title',
            demandOption : 'true',
            type : 'String'
        }
    },
    handler : function(argv){
        note.addNotes(argv.title , argv.body)
    }
})

yargs.command({
    command : 'remove',
    describe: 'remove a new note',
    body : {
        describe : 'Note Title',
        demandOption : 'true',
        type : 'String'
    },
    handler : function(argv){
       note.remove(argv.title , argv.body)
    }
})

yargs.command({
    command : 'list',
    describe: 'list a new note',
    body : {
        describe : 'Note Title',
        demandOption : 'true',
        type : 'String'
    },
    handler : function(){
       note.List()
    }
})

yargs.command({
    command : 'write',
    describe: 'write a new note',
    handler : function(){
        console.log('write a new note !')
    }
})
console.log(yargs.argv)

