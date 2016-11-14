function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;

		if (question1 == 10mm pistol || 10 mm pistol || 10 millimeter pistol) {
			correct++;
		}
		if (question2 == Security Baton) {
			correct++;
		}
		if(question3 == Radroach){
			correct++;
		}

document.getElementById('afterSubmit').style.visibility = "visible";
document.getElementById('numberCorrect').innerHTML = "you got" + correct + "correct";

}