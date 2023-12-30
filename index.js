const express = require('express');
const jwt = require('jsonwebtoken');
const PORT=7777;
const secretKey='manik';


const app = express();
app.use(express.json());
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.post('/auth/validateUser', (req, res) => {
    const request = req.body;

    if (!request.userId) {
        return res.status(400).json({
            isSuccess: false,
            data: "Error: userId is missing in the request body"
        });
    }

    if (request.userId === userMap.userId) {
        return res.json({
            isSuccess: true,
            data: "Successfully authenticated"
        });
    } else {
        return res.status(401).json({
            isSuccess: false,
            data: "Authentication failed: Invalid userId"
        });
    }
});

app.post('/get/token',(req,res)=>{
    const request=req.body;
    return res.json({ accessToken : jwt.sign(request,secretKey)});
})

app.post('/validateToken',(req,res)=>{
    const request=req.body;
    const verifiedToken = jwt.decode(request.accessToken,secretKey);
    res.json({verifiedToken
    });
})
const userMap ={
    name : "Manik Manchanda",
    password : "manik12345",
    userId : "db027020-3717-4f8c-ade7-133375600ebd"
};