var url = "https://api.funtranslations.com/translate/valyrian.json";

let translateBtn = document.getElementById("btn-translate");
let translatedOutput = document.getElementById("translated-output");

translateBtn.addEventListener("click", clickHandler);

function getTranslationURL(text)
{
    return url + "?" + "text=" + text;
}

function errorHandler()
{
    alert("Error occured");
}

async function clickHandler()
{
    let userInput = document.getElementById("user-input").value;
    fetch(getTranslationURL(userInput))
    .then(resposne => resposne.json)
    .then(object => {
        translatedOutput.value = object.contents.translated;
    }).catch(errorHandler);
    const object = await resposne.json();
 
}

