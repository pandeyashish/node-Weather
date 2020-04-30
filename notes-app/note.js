const fs = require('fs')
const chalk = require('chalk');

const getNotes = ()=>{
    console.log('get Notes')
}

const addNotes = (title,body)=>{
  const notes = loadNotes()
  const duplicateData = notes.filter(function(note){
       return note.title === title
  })
   
  if(duplicateData.length === 0){
    notes.push({
        title : title,
        body : body
    })
     saveData(notes);
     console.log('New notes added')
  } else {
      console.log('note taken!')
  }

  
 // console.log(notes)
 
};

const saveData = (notes)=>{
   const dataJson = JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJson)
}

 const loadNotes = ()=>{
     try {
        const dataBuffer =  fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson);
     } catch (e) {
       
         return []
     }
     
     
 }

 const List = ()=>{
     const notes = loadNotes()
     console.log(chalk.inverse('Your notes'))
     notes.forEach(note => {
         console.log(note.title)
     });

 }

 const remove = (title,body)=>{
     let notes = loadNotes()
       notes = notes.filter(o=> o.title !== title);
       saveData(notes);
       console.log('Note Removed')
 }
 

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    loadNotes : loadNotes,
    remove : remove,
    List : List
}