async function Data(){
    let informatison = await fetch("https://jsonplaceholder.typicode.com/todos")
    let infor = await informatison.json()
    let info = infor.splice(0, 200)
    console.log(info);
    for(let i =0; i< info.length; i++){
        create(
            info[i].userId,
            info[i].id,
            info[i].title,
            info[i].completed,
        )
    }
    const trueBtn = document.querySelector(".true")
    trueBtn.addEventListener("click", ()=>{
        box.innerHTML = ""
        let trueCompleted = info.filter((item)=>item.completed == true)
        for(let i = 0; i < trueCompleted.length; i++){
            create(
                trueCompleted[i].userId,
                trueCompleted[i].id,
                trueCompleted[i].title,
                trueCompleted[i].completed,
            )
        }
    })
    
    const falseBtn = document.querySelector(".false")
    falseBtn.addEventListener("click", ()=>{
        box.innerHTML = ""
        let falseCompleted = info.filter((item)=>item.completed == false)
        for(let i = 0; i < falseCompleted.length; i++){
            create(
                falseCompleted[i].userId,
                falseCompleted[i].id,
                falseCompleted[i].title,
                falseCompleted[i].completed,
            )
        }
    })

    const allBtn = document.querySelector(".all")
    allBtn.addEventListener("click", ()=>{
        box.innerHTML = ""
        for(let i =0; i< info.length; i++){
            create(
                info[i].userId,
                info[i].id,
                info[i].title,
                info[i].completed,
            )
        }
    })

    const search = document.querySelector(".search")
    search.addEventListener("input", (e)=>{
        let result = e.target.value
        let find = info.filter((item)=>item.title.toLowerCase().includes(result.toLowerCase()))
        box.innerHTML = ""
        for(let i = 0; i < find.length; i++){
            create(
                find[i].userId,
                find[i].id,
                find[i].title,
                find[i].completed,
            )
        }
    })
}
Data()
const box = document.querySelector(".box")
function create(userId, id, title, completed){
    box.innerHTML += `
    <div class="cards">
            <div class="userId">
                UserID: ${userId}
            </div>
            <div class="id">
                ID: ${id}
            </div>
            <div class="title">
                Title: ${title}
            </div>
            <div class="com">
                Completed: ${completed}
            </div>
        </div>
    `
}