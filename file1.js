const http = require("http");
const fsPromises=require("fs/promises");

const newServer = http.createServer(async (req, res) => {
  console.log(`_${req.url}`);
  if (req.url == "/")
    { 
   const data= await fsPromises.readFile("./pages/homepage.html");
        res.end(data);}


  else if (req.url == "/About")  {
    const data= await fsPromises.readFile("./pages/About.html");
  res.end(data);}

  else {
    const data= await fsPromises.readFile("./pages/other.html");
    res.end(data);}
  }
);

newServer.listen(3000, () => {
  console.log("Server is running on port 3000"); 
});
