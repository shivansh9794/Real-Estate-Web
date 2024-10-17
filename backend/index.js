const express = require('express');
const app = express();
const cors = require('cors');
const port=5000;0

const userRouter = require('./Routers/UserRouter');
const sitesRouter = require('./Routers/sitesRouter')

app.use(cors({
    origin:'http://localhost:3000'
}));

app.use(express.json());
app.use('/user',userRouter);
app.use('/sites',sitesRouter);




app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})