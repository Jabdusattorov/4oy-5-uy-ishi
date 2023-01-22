async function getData() {
    let response = await 
    fetch(`https://jsonplaceholder.typicode.com/users`)
    let  data = await response.json()

    console.log("ascync", data);

    for(let i = 0; i < data.length; i++){
        create(
            data[i].id,
            data[i].name,
            data[i].username,
            data[i].email,
            data[i].address.city,
            data[i].address.street,
            data[i].address.suite,
            data[i].address.zipcode,
            data[i].address.geo.lat,
            data[i].address.geo.lng,
            data[i].phone,
            data[i].website,
            data[i].company.name,
            data[i].company.catchPhrase,
            data[i].company.bs
        )
    }
    console.log(data[0].company.bs);

    const search = document.querySelector(".search")
    search.addEventListener("input", (e)=>{
    let result = e.target.value
    let find = data.filter((item)=>item.name.toLowerCase().includes(result.toLowerCase()))
    table.innerHTML = ""
    for(let i = 0; i < find.length; i++){
        create(
            find[i].id,
            find[i].name,
            find[i].username,
            find[i].email,
            find[i].address.city,
            find[i].address.street,
            find[i].address.suite,
            find[i].address.zipcode,
            find[i].address.geo.lat,
            find[i].address.geo.lng,
            find[i].phone,
            find[i].website,
            find[i].company.name,
            find[i].company.catchPhrase,
            find[i].company.bs
        )
    }
})
}
getData()
const table = document.querySelector(".table")
function create(id, name, username, email, city,street,suite,zip,lat,lng, phone, website, comName,comCatch,bs ){
    table.innerHTML += `
    <tr>
           <td>${id}</td>
           <td>${name}</td>
           <td>${username}</td>
           <td>${email}</td>
           <td>City: ${city}; </br> 
           Street: ${street}; </br> 
           Suite: ${suite}; </br> 
           Zip-Code: ${zip} </br>
           Lat: ${lat}; </br> 
           Lng: ${lng};</td>
           <td>${phone}</td>
           <td>Website: ${website}</td>
           <td>Name: ${comName}; </br> 
           CatchPhrase: ${comCatch} </br> 
           Bs: ${bs}</td>
       </tr>`;
}