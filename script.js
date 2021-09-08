
// წვდომა
var screen = document.querySelector('#capscreen');



// ოპერაციები
var a=0
var b=0
var equal=0
var ope = 0

function operation(oper){  
    if (a == 0 ){
        a = screen.textContent
        ope = oper
    }else{
        b = screen.textContent
    }
    console.log(a,b,)
}

// equals
function equals(){
    if (ope == "*"){
        equal = a*b
    }
    screen.innerHTML = equal
    ope = 0
    a = 0
    b = 0
}



function get_value(value){
    if (ope !=0){
        screen.innerHTML=""
    }

    if (screen.textContent == "0"){
        screen.innerHTML=""
    }
    screen.innerHTML += value
}


