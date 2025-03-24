const express = require('express');
const app = express();
const cors = require('cors');
const port=5000;

const userRouter = require('./Routers/UserRouter');
const sitesRouter = require('./Routers/sitesRouter')
const cartRouter = require('./Routers/cartRouter');

app.use(cors({
    origin:'http://localhost:3000'
}));

app.use(express.json());

app.use('/user',userRouter);
app.use('/sites',sitesRouter);
app.use('/cart',cartRouter);



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})