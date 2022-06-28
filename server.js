const express =require('express');
const User = require('./models/user.js')

require('./config/connect')


const app = express();
app.use(express.json());


app.post('/add', (req,res)=>{
    data = req.body;

    usr = new User (data)

    usr.save()
        .then(
            (savedUser)=>{
                    res.send(savedUser)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
    
    console.log(data);

});


app.post('/create', async (req,res)=>{

    try{

        data=req.body;
        usr=new User (data);
        savedUser = await usr.save();
        res.send(savedUser)
    }
    catch (error){
res.send(error)
    }

})

app.get('/getall' , (req,res)=>{

    User.find()
        .then(
            (Users)=>{
                res.send(Users)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
                )
   


});


app.put('/update',()=>{
    console.log('update succes')
})


app.delete('/delete' , ()=>{
    console.log('delete succes ')
})



app.listen(3000,()=>{
    console.log('servrer work')
})