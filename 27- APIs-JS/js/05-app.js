document.addEventListener("visibilitychange", ()=>{
    console.log(document.visibilityState)
    if (document.visibilityState==="visible"){
        console.log("Reproduciendo...");
    }else{
        console.log("Pausando vídeo...");
    }
})  