function getInput() {
    let input=document.getElementById("input_text").value;
    return input;
}

function getInputLanguage() {
    let input_language=document.getElementById("languageList1").value;
    return input_language;
}

function getOutputLanguage() {
    let output_language=document.getElementById("languageList").value;
    localStorage.setItem(`lang`, JSON.stringify(output_language));
    return output_language;
}

function displayOuptut(el) {
    let output=document.getElementById("output_text");
    output.innerHTML=null;
    output.innerText=el;
}



async function main() {

    let language=getInputLanguage();
    if(language=="default") {
        let lang= await detectLanguages();
        translate(lang);
    } else {
        translate(language);
    }


}

async function translate(lang) {
    const res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: getInput(),
      source: lang,
      target: getOutputLanguage(),
    }),
    headers: { "Content-Type": "application/json" },
    });

    let data = await res.json();
    displayOuptut(data.translatedText)
}

async function detectLanguages() {

    let res = await fetch("https://libretranslate.de/detect", {
        method: "POST",
        body: JSON.stringify({
          q: getInput(),
        }),
        headers: { "Content-Type": "application/json" },
        });
    
        let data = await res.json();
        let language = data[0].language;
        return language;

}


function run() {
    console.log("one")
    main();
   

}
