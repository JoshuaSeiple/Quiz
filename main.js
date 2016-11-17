function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;

		if (question1 == "10mm pistol") {
			correct++;
		}
		if (question2 == "Security baton") {
			correct++;
		}
		if(question3 == "Radroach"){
			correct++;
		}
		var messages = ["Great job", "Pretty good", "You need to study"]
var score;
if (correct < 1) {
	score = 2;
}

if (correct > 1 && correct < 3) {
	score = 1
}

if (correct > 2) {
score = 0;
}







document.getElementById('afterSubmit').style.visibility = "visible";


document.getElementById("message").innerHTML = messages[score]
document.getElementById('numberCorrect').innerHTML = "you got " + correct + " correct.";

}


