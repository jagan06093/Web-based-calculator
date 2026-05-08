function appendValue(val){
    let a = document.getElementById("display");
    a.value = a.value + val;
}

function clearDisplay(){
    let b = document.getElementById("display");
    b.value = "";
}

function deleteValue(){
    let c = document.getElementById("display");
    c.value = c.value.slice(0,-1);
}

function calculateValue(){
    let result = document.getElementById("display");
    result.value= eval(result.value);
    
}
