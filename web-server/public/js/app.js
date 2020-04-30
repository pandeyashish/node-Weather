//console.log('Hi Ashish')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
//const messageOne=document.getElementById("message-1").textContent




weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    messageOne.textContent = 'Loading.........';

    const location = search.value;
    fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
            }
            else{
                messageOne.textContent = 'Location:' + data.location
                messageTwo.textContent = 'Temprature is : ' + data.forcast.temprature + ' degree'
      
            }
            
        })
    })
})
