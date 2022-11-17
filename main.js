

function Sum(){
    let nb1 = parseInt(document.getElementById("1st").value);
    let nb2 = parseInt(document.getElementById("2nd").value);
    let sum = nb1 + nb2;
    document.getElementById("result").innerHTML= "result:" + sum;
}

function Sub(){
    let nb1 = parseInt(document.getElementById("1st").value);
    let nb2 = parseInt(document.getElementById("2nd").value);
    let sum = nb1 - nb2;
    document.getElementById("result").innerHTML= "result:" + sum;
}

function Mul(){
    let nb1 = parseInt(document.getElementById("1st").value);
    let nb2 = parseInt(document.getElementById("2nd").value);
    let sum = nb1 * nb2;
    document.getElementById("result").innerHTML= "result:" + sum;
}

function Div(){
    let nb1 = parseInt(document.getElementById("1st").value);
    let nb2 = parseInt(document.getElementById("2nd").value);
    let sum = nb1 / nb2;
    document.getElementById("result").innerHTML= "result:" + sum;
}
