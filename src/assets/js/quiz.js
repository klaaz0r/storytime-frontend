function toggleQuiz(quiz) {
	jQuery(quiz).parent().find('.quizQuestion').toggleClass('itemHidden');
}

function toggleQuestion(question) {
	jQuery(question).parent().find('.questionAnswer').toggleClass('itemHidden');
}