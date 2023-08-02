
export default function processChatGptQuestion(str) {
    str = str.replace(/\"$./, '');  // Remove trailing quote
    str = str.replace(/\.$/, '');  // Remove trailing period
    let lines = str.split(';');
    let question = lines[0];
    let correctAnswer = lines[1];
    let wrongAnswerOne = lines[2];
    let wrongAnswerTwo = lines[3];
    let wrongAnswerThree = lines[4];
    let validResponse = true;
    if (lines.length != 5) {
        validResponse = false;
    }
    for (let i = 0; i < length; i++) {
        if (lines[i] == null)
            validResponse = false;
    }

    console.log("proccesed" + correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, validResponse);
    return {question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, validResponse};
}
