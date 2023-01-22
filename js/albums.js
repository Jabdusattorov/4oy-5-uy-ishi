const box = document.querySelector(".box")

async function getData(){
    let response = await fetch(`https://jsonplaceholder.typicode.com/albums`)
    let data = await response.json()
    console.log("asybc", data);

    for(let i = 0; i < data.length; i++){
        create(
            data[i].userId,
            data[i].id,
            data[i].title,
        )
    }

    const search = document.querySelector(".search")
    search.addEventListener("input", (e)=>{
        let result = e.target.value
        let search = data.filter((item)=>item.title.toLowerCase().includes(result.toLowerCase()))
        box.innerHTML = ""
        for(let i = 0; i < search.length; i++){
            create(
                search[i].userId,
                search[i].id,
                search[i].title,
            )
        }
    })
}
getData()

function create(userId, id, title){
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
        </div>
    `
}