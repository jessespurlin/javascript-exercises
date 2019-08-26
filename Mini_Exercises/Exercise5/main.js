

function changeSentence(){
    let sentenceInput = document.querySelector("#sentenceInput");
    let newSentenceOutput = document.querySelector("#newSentenceOutput");

    newSentenceOutput.innerHTML = sentenceInput.value.replace(/a/gi,'x');
}