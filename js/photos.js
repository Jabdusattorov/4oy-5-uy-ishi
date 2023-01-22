const box = document.querySelector(".box")

async function getData(){
    let photos = await fetch("https://jsonplaceholder.typicode.com/photos")
    let info = await photos.json()
    let information = info.splice(0, 100)
    console.log(information);
    console.log(info);
    for(let i = 0; i < information.length; i++){
        create(
            information[i].userId,
            information[i].id,
            information[i].title,
            info[i].thumbnailUrl,
        )
    }
}
getData()

function create(userId, id, title, image){
    box.innerHTML += `
    <div class="card">
      <div class="userId">
          UserID: ${userId}
       </div>
       <div class="id">
           ID: ${id}
       </div>
       <div class="title">
               Title: ${title}
       </div>
       <img src="${image}" alt="Bu yerda raasm bo'lishi kerak edi. Iltimos sahifani qayta yuklang va kuting!!!">
    `
}