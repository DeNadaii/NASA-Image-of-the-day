const APIkey = "6JeMl3RWmrTX9j1gTh5Mh0tWb8ZtGcOiisOWFTDH"
const APIurl = `https://api.nasa.gov/planetary/apod?api_key=${APIkey}` 

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
    document.getElementById("imageTitle").innerHTML = `The image of the day is: ${title}`
    document.getElementById("description").innerHTML = description
}