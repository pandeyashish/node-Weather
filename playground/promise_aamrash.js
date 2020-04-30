function aamRash(){
    return new Promise((resolve,reject)=>{
       const aamRash = true;
       if(aamRash){
           console.log('ashish will go')
           resolve()
       }
       else{
           console.log('golu will go')
           reject()
       }

    })
}
aamRash().then(()=>{
    console.log('Promise full fil')
}).catch(()=>{
    console.log('promise rejected')
})