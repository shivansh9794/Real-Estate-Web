const express = require('express');
const router = express.Router();
const Model = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');
require('dotenv').config();

router.get('/',(req,res)=>{
    console.log("Inside Default Router");
    
})

router.post('/add',(req,res)=>{
    console.log(req.body);

    new Model(req.body).save()
    .then((result)=>{
        res.status(200).json(result);  
    }).catch((err)=>{
        console.log(err);        
    });
    
});

router.get('/getData',(req,res)=>{

    Model.find()
    .then((result) => {

        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id,req.body,{new : true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyid/:id',(req,res)=>{
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})

router.post('/authenticate',(req,res)=>{
    Model.findOne(req.body)
    .then((result) => {
        
        if(result){
            // Generating Token
            
            const {_id,email,password}=result;
            const payload={_id,email,password};

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {expiresIn:3600},
                (err,token)=>{
                    if(err){
                        res.status(500).json({message:'token generation Failed'});
                    }else{
                        res.status(200).json({token:token});
                    }
                }
            )
            
        }else{
            res.status(401).json({message:'invalid credentials'});
        }

    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    
})


module.exports=router;