let array=[70,80,90]
let number_of_students =array.length
function problem11(array_of_class,you){
    let total=0;
    for(let i=0;i<array_of_class.length;i++){
        total=total+array_of_class[i]
    }
    total=total+you
    let avarage=total/(number_of_students+1);
    return you > avarage
}
console.log(problem11(array,99));