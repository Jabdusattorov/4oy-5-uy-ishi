async function getData() {
    let response = await 
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    let  data = await response.json()

    console.log("ascync", data);

    for(let i = 0; i < data.length; i++){
           create(
            data[i].userId,
            data[i].id,
            data[i].title,
            data[i].body,
           )
    }

    const search = document.querySelector(".search")
    search.addEventListener("input", (e)=>{
    let result = e.target.value
    let find = data.filter((item)=>item.title.toLowerCase().includes(result.toLowerCase()))
    box.innerHTML = ""
    for(let i = 0; i < find.length; i++){
        create(
            find[i].userId,
            find[i].id,
            find[i].title,
            find[i].body,
        )
    }
})
}
getData()
const box = document.querySelector(".box")
function create(userId, id, title, body){
    box.innerHTML += `
    <div class="card">

      <div class="user-id">
          <span>UserId: ${userId}</span>
          <span>ID :${id}</span>
      </div>

      <div class="title">
          ${title}
      </div>

      <div class="body">
          ${body}    
      </div>

   </div>`;
}