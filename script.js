
// წვდომა
var screen = document.querySelector('#capscreen');



// ოპერაციები
var operation="";
// ready for capture second number
var ready = false;

// first input
var first = ""

// showing on screen
function get_value(value){

    // clean if its equals writen
    if (screen.textContent == first){
        screen.innerHTML="" 
    }

    // clean if it has zero value
    if (screen.textContent == "0"){
        screen.innerHTML=""
    }

    screen.innerHTML+=value;

    
    // if we type second value
    if (ready == true){
        operation +=`${parseInt(screen.textContent)}`  
    } 
}

// * / + -
function calc(oper){  
    // შენახვა ცვლადში
    first=screen.textContent
    operation+=`${parseInt(screen.textContent)}${oper}`
    screen.innerHTML=`${screen.textContent}`
    ready=true
}


// equals
function equal(){
    if (operation !=""){
        console.log(operation,"result");
        screen.innerHTML = eval(operation)
        // update
        ready=false
        operation=""
    }
}

