import express from 'express';

import connectDB from './db/connectDb.js';
import { join } from 'path';
 import web from "./routes/web.js";
const app = express();
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
const port = process.env.PORT || '8888';

//import join from 'path';
//import { fileURLToPath } from 'url';


//const __filename = fileURLToPath(import.meta.url);

//const __dirname = path.dirname(__filename);
//console.log("lets print it",__dirname);
//const staticPath = path.join(__dirname, "../public");
//console.log(staticPath);
//database connection
connectDB(DATABASE_URL);
app.use(express.urlencoded({extended:false}));// by using this middleware we are able to see the output of this console.log(req.body); 
//connectDB();
//static files 
app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))
app.set("view engine","ejs")
app.use("/student",web);
//app.use(express.static(staticPath))
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})