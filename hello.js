console.log('hello world')
console.log(typeof([1,2,3]))
// console.log(typeof a)
console.log(5=='5')
console.log(5==='5')
console.log(1==true)
console.log(1===true)
const a=5;
console.log(a)
const b={c:5}
console.log(b)
b.c=4;
console.log(b)
// b={c:8}

// arrays
const d=[5];
console.log(d)
d[0]=10;
console.log(d)

g=59
console.log(global.g)
const test=()=>{
    glb=65  //global should be accessed everywhere

    console.log(global.glb)
}
// console.log(test())
test();
console.log(global.glb)

function sum1(a,b){
    return a+b
}
console.log(sum1(5,6))

const sum3=(a,b)=>{
    return a+b;
}
//  async function run(){

//      const sumasync=async (a,b)=>a+b;
//     //  const result=sumasync(5,1);
//     sumasync(66,77).then((result)=>{console.log(result)}).catch((error)=>console.log(error))
//      console.log('async result',result)
//  }

// // const sum4=(a,b)=>a+b 
// // console.log(sum4(55,66))
// run();

