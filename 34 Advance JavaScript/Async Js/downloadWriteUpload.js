function download(url, cb) {
  console.log("start downloading...", url);
  setTimeout(() => {
    let file = "file content from " + url;
    console.log("content downloaded");
    cb(file);
    console.log("value given to the download call back");
  }, 5000);
}

function write(data, fileName, cb) {
  console.log("writting in file", fileName);
  setTimeout(() => {
    fileName = "changed the file with " + data;
    console.log("file changed successfully");
    cb(fileName);
    console.log("value given to the write call back");
  }, 5000);
}

function upload(file, url, cb) {
  console.log("starting to upload", file, " in ", url);
  setTimeout(() => {
    console.log("uploaded successfully");
    let status = "true";
    cb(status);
    console.log("value given to the upload call back");
  }, 5000);
}

// function process(urlLink) {
//     //we can use named function , annonymous function and arrow function also
//   download(urlLink, function handleDownload(txt) {
//     write(1212, txt, function (txt) {
//       upload(txt, "www.microsoft.com", (status) => {
//         console.log("all tasks done with ", status);
//       });
//     });
//   });
// };


function process(urlLink) {
  download(urlLink, handleDownload);
}
function handleDownload(txt) {
  write(1212, txt, handleWrite);
}
function handleWrite(txt) {
  upload(txt, "www.microsoft.com", handleUpload);
}
function handleUpload(status) {
  console.log("all tasks done with ", status);
}


process("https://www.google.com");
