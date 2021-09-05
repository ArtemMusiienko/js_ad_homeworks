
let ul = document.createElement('ul');
  document.body.append(ul);

async function getResponse(){
  let response = await fetch('https://ajax.test-danit.com/api/swapi/films')
  let content = await response.json();
  content=content.splice(0,6)
  let key;
  for (const key in content) {
    let li = document.createElement('li');
    li.innerHTML+= (`Название фильма :${content[key].name}, 
    Номер епизода :${content[key].episodeId}, 
    Короткое содержание :${content[key].openingCrawl}`);
     ul.append(li);
     console.log(content);
     const p =document.createElement('p');
    content[key].characters.forEach(response => {
                         fetch(response)
                         .then(response =>  response.json())
                         .then(list=>{
                          p.innerHTML =`Cписок персонажей:${list.name}`
                          
                         })
  
     li.append(p)
   
     })
    }}
   
     
     
  
getResponse()
