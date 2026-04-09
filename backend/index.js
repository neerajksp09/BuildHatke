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
mongoose.connect('mongodb://Abhishek123:Abhishek123@ac-v20dejk-shard-00-00.uderahz.mongodb.net:27017,ac-v20dejk-shard-00-01.uderahz.mongodb.net:27017,ac-v20dejk-shard-00-02.uderahz.mongodb.net:27017/buildhatke?ssl=true&replicaSet=atlas-1023dm-shard-0&authSource=admin&appName=Cluster0').then(()=>{
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

