function download(url,cb){
    console.log("start downloading...",url);
    setTimeout(()=>{
        let file = "file content from "+url;
        console.log("content downloaded");
        cb(file);
    },5000)
}

function write(data,fileName,cb){
    console.log("writting in file",fileName);
    setTimeout(()=>{
        fileName="changed the file with "+data;
        console.log("file changed successfully");
        cb(fileName);
    },5000);
}

function upload(file,url,cb){
    console.log("starting to upload",file," in ",url);
    setTimeout(()=>{
        console.log("uploaded successfully");
        let status="true";
        cb(status);
    },5000)
}

download("www.google.com",(txt)=>{
    write(1212,txt,(txt)=>{
        upload(txt,"www.microsoft.com",(status)=>{
            console.log("all tasks done with ",status);
        })
    })
})