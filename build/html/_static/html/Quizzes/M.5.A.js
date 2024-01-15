const json = {
  "surveyId": "795fd441-d5b2-4de8-b21c-2a05b4130424", 
  "surveyPostId": "730e346d-ef73-4c3f-88ad-1a3bbdae714c",
  "title": "x",
  "description": "Testen Sie Ihr Können beim Thema **Matrix-Multiplikation**.<br><br>Markieren Sie alle wahren Aussagen.",
  "loadingHtml": "Loading Quiz...",
  // "surveyShowDataSaving": true,
};


// const json =
// {
//   "title": "<font size=\"5\">Matrix-Multiplikation</font>",
//   "description": "Testen Sie Ihr Können beim Thema **Matrix-Multiplikation**.",
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
//           "name":  "1 x 2 mal 2 x 1",
//           "title": "1 x 2 mal 2 x 1",
//           "correctAnswer": [
//             "\\\\( \\begin{bmatrix}1 & 3 \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5  \\end{bmatrix}=17 \\\\)",
//           ],
//           "choices": [
//             "\\\\( \\begin{bmatrix}1 & 3 \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5  \\end{bmatrix}=17 \\\\)",
//             "\\\\( \\begin{bmatrix}1 & 3 \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5  \\end{bmatrix}=\\begin{bmatrix} 2  &   5 \\\\\\\\  6 & 15 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix}1 & 3 \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5  \\end{bmatrix}=\\begin{bmatrix} 2  &   6 \\\\\\\\  5 & 15 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix}1 & 3 \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5  \\end{bmatrix}=\\begin{bmatrix} 2  &  15 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix}1 & 3 \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5  \\end{bmatrix}=\\begin{bmatrix} 2  \\\\\\\\  15 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix}1 & 3 \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5  \\end{bmatrix}=13 \\\\)",
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
//           "name": "2 x 2 mal 2 x 1",
//           "title": "2 x 2 mal 2 x 1",
//           "correctAnswer": [
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\\\\\\\ \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5 \\\\\\\\ \\end{bmatrix} = \\begin{bmatrix} 17 \\\\\\\\ 18 \\end{bmatrix} \\\\)",
//           ],
//           "choices": [
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\\\\\\\ \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5 \\\\\\\\ \\end{bmatrix} = \\begin{bmatrix} 17 \\\\\\\\ 18 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\\\\\\\ \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5 \\\\\\\\ \\end{bmatrix} = \\begin{bmatrix} 17 \\\\\\\\ 19 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\\\\\\\ \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5 \\\\\\\\ \\end{bmatrix} = \\begin{bmatrix} 17 & 18 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\\\\\\\ \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5 \\\\\\\\ \\end{bmatrix} = \\begin{bmatrix} 2 & 15 \\\\\\\\ -2 & 20 \\\\\\\\ \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\\\\\\\ \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5 \\\\\\\\ \\end{bmatrix} = \\begin{bmatrix} 2 & 6 \\\\\\\\ -2 & 20 \\\\\\\\ \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\\\\\\\ \\end{bmatrix} \\begin{bmatrix} 2 \\\\\\\\ 5 \\\\\\\\ \\end{bmatrix} = \\begin{bmatrix} 7 \\\\\\\\ 6 \\end{bmatrix} \\\\)",
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
//           "name": "2 x 2 mal 2 x 2",
//           "title": "2 x 2 mal 2 x 2",
//           "correctAnswer": [
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\end{bmatrix}\\begin{bmatrix} 2 & 6 \\\\\\\\ 5 & 1 \\end{bmatrix} = \\begin{bmatrix} 17 & 9 \\\\\\\\ 18 & -2 \\end{bmatrix} \\\\)",
//           ],
//           "choices": [
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\end{bmatrix}\\begin{bmatrix} 2 & 6 \\\\\\\\ 5 & 1 \\end{bmatrix} = \\begin{bmatrix} 17 & 9 \\\\\\\\ 18 & -2 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\end{bmatrix}\\begin{bmatrix} 2 & 6 \\\\\\\\ 5 & 1 \\end{bmatrix} = \\begin{bmatrix} 17 & 9 \\\\\\\\ 18 & 2 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\end{bmatrix}\\begin{bmatrix} 2 & 6 \\\\\\\\ 5 & 1 \\end{bmatrix} = \\begin{bmatrix} 17 & 18 \\\\\\\\ 9 & -2 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\end{bmatrix}\\begin{bmatrix} 2 & 6 \\\\\\\\ 5 & 1 \\end{bmatrix} = \\begin{bmatrix} 35 \\\\\\\\ 7 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\end{bmatrix}\\begin{bmatrix} 2 & 6 \\\\\\\\ 5 & 1 \\end{bmatrix} = \\begin{bmatrix} 35 & 7 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix} 1 & 3 \\\\\\\\ -1 & 4 \\end{bmatrix}\\begin{bmatrix} 2 & 6 \\\\\\\\ 5 & 1 \\end{bmatrix} = 42 \\\\)",          ],
//           "colCount": 2,
//           "choicesOrder": "random",
//         },
//       ]
//     },
//   ],

//   "firstPageIsStarted": true,
//   "showProgressBar": "top",
//   "showQuestionNumbers": "off",
//   "focusFirstQuestionAutomatic": false,
//   "maxTimeToFinishPage": 40,
//   "maxTimeToFinish": 120,
//   "showTimerPanel": "top",
//   "surveyShowDataSaving": false,
// }
