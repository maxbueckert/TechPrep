
export default function processChatGptQuestion(str) {
    str = str.replace(/\"$./, '');  // Remove trailing quote
    let lines = str.split(';');
    let question = lines[0];
    let correctAnswer = lines[1];
    let wrongAnswerOne = lines[2];
    let wrongAnswerTwo = lines[3];
    let wrongAnswerThree = lines[4];
    console.log("proccesed" + correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree);
    return {question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree};
}
