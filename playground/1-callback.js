
const mycallback = (add1 ,add2,callback)=>{
  
    setTimeout(()=>{
        callback(add1 + add2) 
    },2000)

  
}



mycallback(1,2,(data)=>{
    console.log(data)
})
