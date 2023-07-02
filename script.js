const APIkey = "6JeMl3RWmrTX9j1gTh5Mh0tWb8ZtGcOiisOWFTDH"
const APIurl = `https://api.nasa.gov/planetary/apod?api_key=${APIkey}` 

const requisition = fetch(APIurl)
    .then(function(res){
        return res.json()
    })
    .then(function(resAsJson){ 
        changeImage(resAsJson.url,resAsJson.title,resAsJson.explanation,resAsJson.media_type)
    })


function changeImage(contentURL,title,description,media_type){
    let type = media_type
    
    if(type != "video"){
        let img = document.createElement("img")
        img.id = "image"
        img.src = contentURL
        img.alt = "Image of the day"
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        document.getElementById("article_img").innerHTML = "";
        document.getElementById("article_img").appendChild(img)    
         
    }else{
        let video = document.createElement("iframe")
        video.id = "video"
        video.src = contentURL
        document.getElementById("article_img").innerHTML = "";
        document.getElementById("article_video").innerHTML = "";
        document.getElementById("article_video").appendChild(video)
    }
    
    document.getElementById("imageTitle").innerHTML = `The image of the day is: ${title}`
    document.getElementById("description").innerHTML = description
}