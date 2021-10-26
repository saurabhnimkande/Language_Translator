async function getLanguages() {
    let res =await fetch('https://libretranslate.de/languages');
    let data=await res.json();
    console.log(data);
    appendLanguages(data)
}
getLanguages()

function appendLanguages(data) {

    let parent=document.getElementById("languageList");

    data.forEach((el)=> {
        let options=document.createElement("option");
        options.value=el.code;
        options.innerText=el.name;
        parent.append(options);
    })

}






async function detectLanguages() {

    let res = await fetch("https://libretranslate.de/detect", {
        method: "POST",
        body: JSON.stringify({
          q: "hello",
        }),
        headers: { "Content-Type": "application/json" },
        });
    
        let data = await res.json();
        console.log('data:', data.language);



}




async function run() {
    
    let input=document.getElementById("input_text").value;
    let output=document.getElementById("output_text").value;

    let input_language=document.getElementById("input_language");
    let output_language=document.getElementById("languageList").value;

    console.log(output_language);
   

}
