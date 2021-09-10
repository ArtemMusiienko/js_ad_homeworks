const url = `https://api.ipify.org/?format=json`
  const button = document.createElement('button')
  button.innerText = "GET IP"
  document.body.append(button)
  button.addEventListener("click", findIp)
  

 

   async function findIp(){
   
    const response = await fetch(url)
    const result = await response.json()
     const info = new Card(result.ip)
     info.render()
  }
  
    
class Card{
  constructor(ip){
    this.ip = ip
  }
render(){
  fetch(`http://ip-api.com/json/${this.ip}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
   const ul = document.createElement('ul')
   const li = document.createElement('li')
  ul.append(li)
   document.body.append(li)
   li.innerText = (`${data.country},${data.countryCode},${data.regionName},${data.city}`)
  })}}


