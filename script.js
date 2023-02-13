const APIurl = "https://api.nasa.gov/planetary/apod?api_key=6JeMl3RWmrTX9j1gTh5Mh0tWb8ZtGcOiisOWFTDH"

const requisition = fetch(APIurl)
    .then(function(res){
        return res.json()
    })
    .then(function(resAsJson){ 
        changeImage(resAsJson.url,resAsJson.title,resAsJson.explanation)
        console.log(resAsJson)
    })


function changeImage(imageURL,title,description){
    document.getElementById("image").src = imageURL
    document.getElementById("imageTitle").innerHTML = title
    document.getElementById("description").innerHTML = description
}