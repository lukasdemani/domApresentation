
function getWindow() {
    let teste = Object.values(window);
    console.log(teste);
    document.querySelector(".display-window").innerHTML=teste;
}

function getDocument() {
    document.querySelector(".display-document").innerHTML=document;
}

