const num={
    num1:"",
    num2:"",
    Symbol:"",
};
function render(){
    const thing=document.getElementById("number");
    thing.innerText="";
    thing.innerText=num.num1+num.Symbol+num.num2;
}
function add(pram){
    if(num.Symbol===""){
      num.num1=num.num1+pram;
    }else{
        num.num2+=pram;
    };
    render();
}
function sym(pram){
    num.Symbol=pram;
    render();
}
function calculate(){
    const num1=Number(num.num1)
    const num2=Number(num.num2)
    let finall="";
    if(num.Symbol=="+"){
        finall=num1+num2
    }else if(num.Symbol=="-"){
        finall=num1-num2
    }else if(num.Symbol=="x"){
        finall=num1*num2
    }else if(num.Symbol=="÷"){
        finall=num1/num2
    }
    const thing=document.getElementById("number");
    thing.innerText="";
    thing.innerText=finall;
    num.num1=""
    num.num2=""
    num.Symbol=""
}