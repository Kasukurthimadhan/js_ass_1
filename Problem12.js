function problem12(input){
    let new_word=""
    for(let i=0;i<input.length;i++){
        // console.log(input[input.length-1-i]);
        new_word+=(input[input.length-1-i])
    }
    return new_word
}

console.log(problem12("world"));