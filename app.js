var url = "https://api.funtranslations.com/translate/valyrian.json";

let translateBtn = document.getElementById("btn-translate");
let translatedOutput = document.getElementById("translated-output");

translateBtn.addEventListener("click", clickHandler);

function getTranslationURL(text)
{
    return url + "?" + "text=" + text;
}

async function clickHandler()
{
    let userInput = document.getElementById("user-input").value;
    const resposne = await fetch(getTranslationURL(userInput));
    const object = await resposne.json();
    translatedOutput.value = object.contents.translated;
}

