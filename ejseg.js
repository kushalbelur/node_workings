const express=require('express')
const app=express();
const axios=require('axios').default;

app.set('view engine','ejs')

app.get('/',async(req,res)=>{
    const response=await axios.get('https://randomuser.me/api?results=5')
    const json=response.data;
    const user=json.results[0]

    res.render('user.ejs',{user})
})

app.get('/user-list',async(req,res)=>{
    const response=await axios.get('https://randomuser.me/api?results=5')
    const json=response.data;
    const userList=json.results
    console.log(userList)
    let total=0;
    for(user of userList){
        total=user.dob.age+total;
    }
    let avg=total/userList.length;

    res.render('userList.ejs',{userList,avg})
})

app.listen(3000)