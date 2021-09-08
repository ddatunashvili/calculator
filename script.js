// წვდომა
var screen = document.querySelector('#capscreen');


// ოპერაციები
var a="";
var b="";
var c="";
var f = 1;
var equal=0;
var nextm = 0;
var operation = "";


function get_value(value){
    if (f){
        screen.innerHTML="";
        screen.textContent = value;
        f = 0;
        console.log('f = '+f);
    }
    else if(screen.textContent != "0"){
        screen.textContent += value;
        console.log('fff = '+f);

    }
}


function get_operation(oper){  
    f = 1;
    if (a == "" && operation == ""){
        a = screen.textContent;
        operation = oper;
        console.log('f_operation = '+f);
        // console.log(type(operation));
        console.log(operation);
        console.log("------------------");
        // console.log(type(a));
        console.log(a);
        console.log("------------------");
    }else{
        b = screen.textContent;
        c = a+operation+b;
        total = eval(c)
        console.log(c);
        screen.innerHTML = total
        a = total
        operation = oper;
    }
    // console.log(a,b,)
}

// // equals
// function equals(){
//     if (ope == "*"){
//         equal = a*b
//     }
//     screen.innerHTML = equal
//     ope = 0
//     a = 0
//     b = 0
// }




