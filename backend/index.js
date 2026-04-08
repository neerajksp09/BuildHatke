const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const userRegRouter = require('./Router/userRegRouter');
const contractorRoute = require('./Router/contractorRoute');
const cprojectRouter = require('./Router/cprojectRouter');
const siteManagerRouter = require('./Router/siteManagerRouter');
const smReportRouter = require('./Router/siteManagerReportRouter');
const app = express();
const port = 3000;
mongoose.connect('mongodb://localhost:27017/buildhatke').then(()=>{
    console.log("DB connect")
}).catch((err)=>{
        console.log(err);
    });
app.use(express.json())
app.use(cors())



app.use("/api/reg/",userRegRouter)
app.use('/api/con/reg',contractorRoute);
app.use('/api/user/project',cprojectRouter);
app.use('/api/sitemanager/reg',siteManagerRouter)
app.use('/api/sitemanager/report',smReportRouter)
app.listen(port ,()=>{console.log(`Running on ${port}`)});

