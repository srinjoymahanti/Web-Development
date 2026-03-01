function download(url,cb){
    console.log("start downloading...",url);
    setTimeout(()=>{
        var file = "file content from "+url;
        console.log("content downloaded");
        cb(file);
    },50000)
}

function write(file,cb){
    console.log("writting in file",file);
    setTimeout(()=>{
        file="changed the file of url ";
        console.log("file changed successfully");
        cb(file);
    },50000);
}

function upload(file,cb){
    console.log("starting to upload",file);
    setTimeout(()=>{
        console.log("uploaded successfully");
        cb(file);
    },50000)
}

download("www.google.com",function(txt){
    write(txt,function(txt){
        upload(txt,function(txt){
            console.log("all tasks done for ",txt);
        })
    })
})