function download(url) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let file = "file content from " + url;
      console.log("content downloaded");
      res(file);
      console.log("value given to the download call back");
    }, 20000);
  });
}

function write(data, fileName) {
  console.log("writting in file", fileName);
  return new Promise((res, rej) => {
    setTimeout(() => {
      fileName = "changed the file with " + data;
      console.log("file changed successfully");
      rej(fileName);
      console.log("value given to the write call back");
    }, 20000);
  });
}

function upload(file, url) {
  console.log("starting to upload", file, " in ", url);
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("uploaded successfully");
      let status = "true";
      res(status);
      console.log("value given to the upload call back");
    }, 20000);
  });
}

async function process() {
    try{
        console.log("starting execution");

  const downloadedFile = await download("www.google.com");
  console.log();
  console.log("data downloaded id", downloadedFile);

  const writtenFile = await write("textFile", "file.txt");
  console.log();
  console.log("written in the file :", writtenFile);

  const uploadedFile = await upload("file.txt", "www.micrsoft.com");
  console.log();
  console.log("uploaded status is :", uploadedFile);
    }catch(e){
        console.log("--##**something went wrong**##--");
    } 
}

process();
console.log("End of the line ");