

const recursion = (num)=>{
    if(num==0){
        return 1
    }

    return num*recursion(num-1)
}

const frst = recursion(3)
console.log(frst);