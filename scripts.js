function createAElement() {
    const myElement = document.createElement("div2");
    myElement.innerHTML = "Elemento 2";
    document.body.appendChild(myElement);
}

function getWindow() {
    const myWindow = document.querySelector(".display-window");
    myWindow.classList.toggle("hide");
}

function getDocument() {
    const myDocument = document.querySelector(".display-document");
    myDocument.classList.toggle("hide");
}

function getId(){
    const myElement = document.querySelector(".display-element-id");
    myElement.classList.toggle("hide");
}

function getClass(){
    const myElement = document.querySelector(".display-element-class");
    myElement.classList.toggle("hide");
}


function setCreateElement() {
    const myJs = document.querySelector(".js-example");
    const myHtml = document.querySelector(".create-html-example");
    myJs.classList.toggle("hide");
    setTimeout(() => {myHtml.classList.toggle("hide")}, 3000); 
}

function getInnerHtml() {
    const myText = document.querySelector(".display-innerhtml");
    myText.classList.toggle("hide");
}

function getInnerText() {
    const myText = document.querySelector(".display-innertext");
    myText.classList.toggle("hide");
}

function getTextContent() {
    const myText = document.querySelector(".display-textcontent");
    myText.classList.toggle("hide");
}




