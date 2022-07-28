fetch('https://jsonplaceholder.typicode.com/userss')

  .then(response => response.json())
  .then(json => displayUser(json))
  .catch(arror => console.log(arror))

  function displayUser(jsons){
    console.log(jsons)
     const userName = jsons.map(jsons => jsons.username)
     const name = jsons.map(jsons => jsons.name)
     console.log(userName)
     const usercontainer = document.getElementById('user-container')

  const user = userName.map(item =>{
    const li = document.createElement('li')
    li.innerText = 'userName ' + item
    usercontainer.appendChild(li)
  })

     for(let i = 0 ; i < name.length ; i++){
        const users = name[i]
        const li = document.createElement('li')
        li.innerText ='name ' + users
        usercontainer.appendChild(li)
  }     
  }
  