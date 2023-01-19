const express=require('express')
const axios=require('axios').default


const app=express();
// const time=new Date().setTime(30);

app.get('/',async(req,res)=>{
    // const response=await axios.get('https://randomuser.me/api/')
    // const date=new Date(response.data.results[0].dob.date)
    // const year=date.getFullYear();

    // const date=new Date().toString();
    // const nextDate=new Date(date)
    // nextDate.setDate(nextDate.getDate()+1);

    // res.json({name:response.data.results[0].name.first,year:year})
    // res.json({currentTime:date, tommorowSameTime:nextDate.toString()})

    const date=new Date();
    // const breakTime=new Date('2022-11-30T16:00:00.000+05:30').getTime();
    // const now=new Date().getTime();
    // const minutesLeft=(breakTime-now)/1000/60  

    // date.split("-")[0]
    
    // res.send(date.split("-")[0])
    console.log("2022-11-30T16:00:00.000+05:30".split("-")[0])
    console.log("2022-11-30T16:00:00.000+05:30".substring(0,4))
    console.log(new Date().getFullYear())
    console.log(new Date().toString().slice(0,4))
    console.log(new Date().toString().slice(11,15))
    console.log(new Date().toString())
    console.log(new Date().toString().split(" ")[3])
    console.log("2022-11-30T16:00:00.000+05:30".substring(11,16))
    res.send(date)
    
})
app.listen(4256,()=>{
    console.log('app running in 4256')
})