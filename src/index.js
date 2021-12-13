const express = require('express');
const path=require('path')
const app = express();

require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd(), "/src/public")));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "/src/views"));
app.use(require('./routes/index.routes'));


app.listen(3000,()=>console.log("http://localhost:3000"));
