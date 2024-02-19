function problem6(input){
    if(input<14){
        console.log("drink toddy");
    }
    else if(input<18){
        console.log("drink coke");
    }
    else if(input<21){
        console.log("drink beer");
    }
    else if(input>21){
        console.log("drink coke");
    }
}

problem6(13)
problem6(17)
problem6(18)
problem6(20)
problem6(30)