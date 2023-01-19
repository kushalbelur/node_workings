const axios=require('axios').default

async function run(){
    const response=await axios.get('https://randomuser.me/api?results=5')
    // console.log(response.data.results[0].name.first)

    // console.log(response.data)
    // var string;
    // for(let i=0;i<response.data.results.length;i++){
    //     console.log(response.data.results[i].name.first)
    //     // console.log(typeof(string)!='undefined')
    //     if(typeof(string)=='undefined'){
    //         string=''
    //     }
    //     string=response.data.results[i].name.first+','+string
    // }
    // console.log(string)

    const json=response.data;
    // const names=[]

    // for(const user of result.results){
    //     let first=user.name.first;
    //     let last=user.name.last;
    //     console.log('last is',last,'first is',first)
    //     let obj={
    //        last:last,
    //        first:first
    //     }
    //     names.push(obj)

    // }
    // console.log(names)
    // names.filter(sortlast)

    // function sortlast(name){
    //     return 
    // }
    // names.sort()
    // console.log(names.join())

    // using localeCompare
    // json.results.sort((userA,userB)=>userA.name.last.localeCompare(userB.name.last));

    // const names=json.results.map(
    //     (user)=>user.name.first+" "+user.name.last
    // )

    // console.log(names.join())

    const data=json.results.filter(malesOnly)

    function malesOnly(user){
        return user.gender=='female'
    }
    console.log(data)

}
run();


// }
// run();
// console.log(string)