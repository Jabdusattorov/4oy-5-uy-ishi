async function info_comments (){
    let res = await fetch("https://jsonplaceholder.typicode.com/comments")
    let dates = await res.json()
    let data = dates.splice(0,50)
    console.log(data);
    for(let i = 0; i < data.length; i++){
        getCreate(
            data[i].postId,
            data[i].id,
            data[i].name,
            data[i].email,
            data[i].body,
        )
    }
    const search = document.querySelector(".search")
    search.addEventListener("input", (e)=>{
        let res = e.target.value
        let find = data.filter((item)=>item.name.toLowerCase().includes(res.toLowerCase()))
        box.innerHTML = ""
        for( let i = 0; i < find.length; i++){
            getCreate(
                find[i].userId,
                find[i].id,
                find[i].name,
                find[i].email,
                find[i].body,
            )
        }
    })
}
info_comments()
const box = document.querySelector(".box")
function getCreate(userId, id, name, email, body){
    box.innerHTML += `
    <div class="card">
    <h1 class="userId">
       UserID => ${userId}
    </h1>
    <h3 class="id">
      ID => ${id}
    </h3>
    <h3 class="name">Name => ${name}</h3>
    <h4 class="email">Email => ${email}</h4>
    <p class="body">Body => ${body}</p>
</div>
    `
}