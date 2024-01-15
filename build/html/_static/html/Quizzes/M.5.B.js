const json = {
  "surveyId": "55a9b675-04c7-49c0-832d-1461d298db20", 
  "surveyPostId": "69711369-4dbc-411c-8933-8b8529302d05",
  "title": "x",
  "description": "Testen Sie Ihr Können beim Thema **Lineares Gleichungssystem**.<br><br>Markieren Sie alle wahren Aussagen.",
  "loadingHtml": "Loading Quiz...",
  // "surveyShowDataSaving": true,
};

// const json =
// {
//   "title": "<font size=\"5\">Lineares Gleichungssystem</font>",
//   "description": "Testen Sie Ihr Können beim Thema **Lineares Gleichungssystem**.",
//   // "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
//   "completedHtmlOnCondition": [
//     {
//       "expression": "{correctAnswers} != {questionCount}",
//       "html": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers. Feel free to reload this page to start over.</h4>"
//     },
//     {
//       "expression": "{correctAnswers} == {questionCount}",
//       "html": "<h4>You got all answers right. Well done! </h4><br><h3>🐝</h3>"
//     },
//   ],

//   "pages": [
//     {
//       "name": "startPage"
//     },
//     {
//       "name": "page1",
//       "elements": [
//         {
//           "type": "checkbox",
//           "name": "2 Unbekannte",
//           "title": "2 Unbekannte",
//           "description": "$$\\begin{aligned} 2x - y &= 80\\\\\\\\4x + 8y &= -60\\end{aligned}$$",
//           "correctAnswer": [
//             "\\\\(x = 29\\\\)",
//             "\\\\(y = -22\\\\)",
//           ],
//           "choices": [
//             "\\\\(x = 29\\\\)",
//             "\\\\(x = -9\\\\)",
//             "\\\\(x = -8\\\\)",
//             "\\\\(y = -22\\\\)",
//             "\\\\(y = 40\\\\)",
//             "\\\\(y = 41\\\\)",
//           ],
//           "colCount": 2,
//           "choicesOrder": "random",
//         },
//       ]
//     },
//     {
//       "name": "page2",
//       "elements": [
//         {
//           "type": "checkbox",
//           "name": "3 Unbekannte",
//           "title": "3 Unbekannte",
//           "description": "$$\\begin{aligned} 2x + 2y + 2z &=  84  \\\\\\\\ 4x + 8y &= 168 \\\\\\\\ -x + 6y + 6z &= 364 \\end{aligned}$$",
//           "correctAnswer": [
//             // "\\\\(x = -16\\\\)",
//             "\\\\(y =  29\\\\)",
//             "\\\\(z =  29\\\\)",
//           ],
//           "choices": [
//             // "\\\\(x = -16\\\\)",
//             "\\\\(y =  29\\\\)",
//             "\\\\(z =  29\\\\)",
//             "\\\\(x = -17\\\\)",
//             "\\\\(x = -18\\\\)",
//             "\\\\(y =  28\\\\)",
//             "\\\\(z =  28\\\\)",
//           ],
//           "colCount": 2,
//           "choicesOrder": "random",
//         },
//       ]
//     },
//     {
//       "name": "page3",
//       "elements": [
//         {
//           "type": "checkbox",
//           "name": "3 Unbekannte und Symbole",
//           "title": "3 Unbekannte und Symbole",
//           "description": "$$\\begin{aligned} 2x + 2y + 2z &= 8a \\\\\\\\ 4x + y &= 8b \\\\\\\\ -x + 3y + 3z &= 0 \\end{aligned}$$",
//           "correctAnswer": [
//             "\\\\( x = 3a \\\\)",
//             "\\\\( y = -12a + 8b \\\\)",
//             // "\\\\( z = 13a - 8b   \\\\)",
//           ],
//           "choices": [
//             "\\\\( x = 3a \\\\)",
//             "\\\\( y = -12a + 8b \\\\)",
//             // "\\\\( z = 13a - 8b   \\\\)",
//             "\\\\( x = 3a + b \\\\)",
//             "\\\\( y = -12a + 4b \\\\)",
//             "\\\\( x = 3a - 2b\\\\)",
//             "\\\\( y = -10a + 4b \\\\)",
//           ],
//           "colCount": 2,
//           "choicesOrder": "random",
//         },
//       ]
//     },
//     {
//       "name": "page4",
//       "elements": [
//         {
//           "type": "checkbox",
//           "name": "6 Unbekannte und Symbole / Größen",
//           "title": "6 Unbekannte und Symbole / Größen",
//           "description": "Berechnen Sie die 6 Unbekannten \\\\( A\\_h, A\\_v, M\\_A, B\\_v, G\\_h, G\\_v \\\\) abhängig von den gegebenen *Symbolen*  \\\\( a, F, q \\\\) aus den 6 Gleichungen $$\\begin{aligned} G\\_{h} &= 0 \\\\\\\\ -B\\_{v} + F + G\\_v + 2qa &= 0 \\\\\\\\ 2Fa + a(-B\\_v + 2qa) &= 0 \\\\\\\\ A\\_h + G\\_h &= 0 \\\\\\\\ A\\_v + G\\_v &= 0  \\\\\\\\ G\\_v a - M\\_A &= 0\\end{aligned}$$ Und berechnen Sie danach die Unbekannten für die gegebenen *Größen* $$\\begin{aligned}a&= 3\\,\\mathrm{m}\\\\\\\\ F &= 4\\,\\mathrm{N} \\\\\\\\q&=2\\,\\tfrac{\\mathrm{N}}{\\mathrm{m}}   \\end{aligned}$$ ",
//           "correctAnswer": [
//             // Correct:
//             "\\\\( A\\_v = -F \\\\)",
//             "\\\\( B\\_v = 2 F + 2 qa \\\\)",
//             // "\\\\( G\\_v = F \\\\)",
//             // "\\\\( M\\_A =  Fa \\\\)",
//             // "\\\\( A\\_v = -4 \\,\\mathrm{N} \\\\)",
//             // "\\\\( M\\_A = 12 \\,\\mathrm{Nm} \\\\)",
//             "\\\\( B\\_v = 20 \\,\\mathrm{N} \\\\)",
//             "\\\\( G\\_v = 4 \\,\\mathrm{N} \\\\)",
//           ],
//           "choices": [
//             // Correct:
//             "\\\\( A\\_v = -F \\\\)",
//             "\\\\( B\\_v = 2 F + 2 qa \\\\)",
//             // "\\\\( G\\_v = F \\\\)",
//             // "\\\\( M\\_A =  Fa \\\\)",
//             // "\\\\( A\\_v = -4 \\,\\mathrm{N} \\\\)",
//             // "\\\\( M\\_A = 12 \\,\\mathrm{Nm} \\\\)",
//             "\\\\( B\\_v = 20 \\,\\mathrm{N} \\\\)",
//             "\\\\( G\\_v = 4 \\,\\mathrm{N} \\\\)",
//             // Incorrect:
//             "\\\\( A\\_v = -8 \\,\\mathrm{N} \\\\)",
//             "\\\\( M\\_A = 16 \\,\\mathrm{Nm} \\\\)",
//           ],
//           "colCount": 2,
//           "choicesOrder": "random",
//         },
//       ]
//     },],
//   "firstPageIsStarted": true,
//   "showProgressBar": "top",
//   "showQuestionNumbers": "off",
//   "focusFirstQuestionAutomatic": false,
//   "maxTimeToFinishPage": 600,
//   "maxTimeToFinish": 1800,
//   "showTimerPanel": "top",
//   "surveyShowDataSaving": false,
// }



