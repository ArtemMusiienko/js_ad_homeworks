const urlUsers = `https://ajax.test-danit.com/api/json/users`
const urlPosts =  `https://ajax.test-danit.com/api/json/posts`



class Card{
    constructor(title,body,userId,id){
        this.title=title;
        this.body=body;
        this.userId=userId;
        this.id=id;

    }
    render(){
        let container = document.createElement('div');
        const title = document.createElement('h2')
        const text = document.createElement('p')
        title.textContent=this.title;
        text.textContent=this.body;
        container.append(title,text)
        document.body.append(container)
        fetch(`${urlUsers}/${this.userId}`)
        .then(response => response.json())
        .then(user => {
            const userName = document.createElement('h2')
            userName.textContent= `${user.name} ${user.email}`
            container.prepend(userName)
            
            
        })
        const button = document.createElement('button')
        button.innerText="DELIT"
        container.append(button);
        button.addEventListener("click",function(){
            fetch(`${urlPosts}/${this.id}`, {
                            method: 'DELETE',
                         
                        })
                    
       container.remove()

        })
      
    }
}

fetch(urlPosts)
.then(response => response.json())
.then(post => {
    post.forEach(post =>{
        post = new Card(post.title,post.body,post.userId,post.id)
        post.render();
    })
})










