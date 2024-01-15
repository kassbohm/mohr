const json = {
  "surveyId": "1be5e0d3-c261-4882-ae73-cb6327eaed29", 
  "surveyPostId": "ef35e19a-4b19-4cd6-8607-4c0e4efb8ee7",
  "title": "x",
  "description": "Testen Sie Ihr Können beim Thema **Vektor in 2D**.<br><br>Markieren Sie alle wahren Aussagen.",
  "loadingHtml": "Loading Quiz...",
  // "surveyShowDataSaving": true,
};

// const json =
// {
//   "title": "<font size=\"5\">Vektor in 2D</font>",
//   "description": "Testen Sie Ihr Können beim Thema **Vektor in 2D**.",
//   // "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
//   "logo": "https://api.surveyjs.io/private/Surveys/files?name=1d306df0-7917-486f-af14-6311d05bb4c3",
//   "logoWidth": "350px",
//   "logoHeight": "350px",
//   "logoPosition": "right",  "loadingHtml": "Loading Quiz...",
//   "completedHtmlOnCondition":
//     [
//       {
//         "expression": "{correctAnswers} != {questionCount}",
//         "html": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers. Feel free to reload this page to start over.</h4>"
//       },
//       {
//         "expression": "{correctAnswers} == {questionCount}",
//         "html": "<h4>You got all answers right. Well done! </h4><br><h3>🐝</h3>"
//       },
//     ],


//   "pages":
//     [
//       {
//         "name": "startPage"
//       },
//       {
//         "name": "page1",
//         "elements": [
//           {
//             "type": "checkbox",
//             "name": "(7, 9)",
//             "title": "(7, 9)",
//             "description": "Berechnen Sie \\\\( \\left(v, \\varphi \\right) \\\\) aus \\\\( \\left(v\\_x, v\\_y \\right) \\\\), und zwar mit \\\\( -180^\\circ < \\varphi \\le 180^\\circ \\\\) für:$$\\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} = \\begin{bmatrix} 7 \\\\\\\\ 9 \\end{bmatrix} $$.",
//             "correctAnswer":
//               [
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  11{,}4 \\\\\\\\ 52{,}1^\\circ \\end{bmatrix} \\\\)",
//               ],
//             "choices":
//               [
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  11{,}4 \\\\\\\\ 52{,}1^\\circ \\end{bmatrix} \\\\)",
//                 // Incorrect:
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  11{,}4 \\\\\\\\ 52{,}4^\\circ \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  11{,}4 \\\\\\\\ 52{,}2^\\circ \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  11{,}4 \\\\\\\\ 51{,}2^\\circ \\end{bmatrix} \\\\)",
//               ],
//             "colCount": 2,
//             "choicesOrder": "random",
//           },
//         ]
//       },
//       {
//         "name": "page2",
//         "elements": [
//           {
//             "type": "checkbox",
//             "name": "(-4, 5)",
//             "title": "(-4, 5)",
//             "description": "Berechnen Sie \\\\( \\left(v, \\varphi \\right) \\\\) aus \\\\( \\left(v\\_x, v\\_y \\right) \\\\), und zwar mit \\\\( -180^\\circ < \\varphi \\le 180^\\circ \\\\) für:$$\\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} = \\begin{bmatrix} -4 \\\\\\\\ 5 \\end{bmatrix}$$",
//             "correctAnswer":
//               [
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  6{,}4 \\\\\\\\ 128{,}7^\\circ \\end{bmatrix} \\\\)",
//               ],
//             "choices":
//               [
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  6{,}4 \\\\\\\\ 128{,}7^\\circ \\end{bmatrix} \\\\)",
//                 // Incorrect:
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  6{,}4 \\\\\\\\ 128{,}1^\\circ \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  6{,}4 \\\\\\\\ 128{,}5^\\circ \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  6{,}3 \\\\\\\\ 128{,}7^\\circ \\end{bmatrix} \\\\)",
//               ],
//             "colCount": 2,
//             "choicesOrder": "random",
//           },
//         ]
//       },
//       {
//         "name": "page3",
//         "elements": [
//           {
//             "type": "checkbox",
//             "name": "(2, -6)",
//             "title": "(2, -6)",
//             "description": "Berechnen Sie \\\\( \\left(v, \\varphi \\right) \\\\) aus \\\\( \\left(v\\_x, v\\_y \\right) \\\\), und zwar mit \\\\( -180^\\circ < \\varphi \\le 180^\\circ \\\\) für:$$\\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} = \\begin{bmatrix} 2 \\\\\\\\ -6 \\end{bmatrix}$$",
//             "correctAnswer":
//               [
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  6{,}3 \\\\\\\\ -71{,}6^\\circ \\end{bmatrix} \\\\)",
//               ],
//             "choices":
//               [
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  6{,}3 \\\\\\\\ -71{,}6^\\circ \\end{bmatrix} \\\\)",
//                 // Incorrect:
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  6{,}3 \\\\\\\\ -71{,}5^\\circ \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  6{,}2 \\\\\\\\ -71{,}6^\\circ \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix}  6{,}3 \\\\\\\\ -71{,}4^\\circ \\end{bmatrix} \\\\)",
//               ],
//             "colCount": 2,
//             "choicesOrder": "random",
//           },
//         ]
//       },
//       {
//         "name": "page4",
//         "elements": [
//           {
//             "type": "checkbox",
//             "name": "(6, 42°)",
//             "title": "(6, 42°)",
//             "description": "Berechnen Sie \\\\( \\left(v\\_x, v\\_y \\right) \\\\) aus \\\\( \\left(v, \\varphi \\right) \\\\) für:$$\\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} = \\begin{bmatrix} 6 \\\\\\\\ 42^\\circ \\end{bmatrix}$$",
//             "correctAnswer":
//               [
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 4{,}5 \\\\\\\\ 4{,}0 \\end{bmatrix} \\\\)",
//               ],
//             "choices":
//               [
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 4{,}5 \\\\\\\\ 4{,}0 \\end{bmatrix} \\\\)",
//                 // Incorrect:
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 4{,}5 \\\\\\\\ 4{,}1 \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 4{,}6 \\\\\\\\ 4{,}0 \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 4{,}52 \\\\\\\\ 4{,}04 \\end{bmatrix} \\\\)",
//               ],
//             "colCount": 2,
//             "choicesOrder": "random",
//           },
//         ]
//       },
//       {
//         "name": "page5",
//         "elements": [
//           {
//             "type": "checkbox",
//             "name": "(5, -90°)",
//             "title": "(5, -90°)",
//             "description": "Berechnen Sie \\\\( \\left(v\\_x, v\\_y \\right) \\\\) aus \\\\( \\left(v, \\varphi \\right) \\\\) für:$$\\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} = \\begin{bmatrix} 5 \\\\\\\\ -90^\\circ \\end{bmatrix}$$",
//             "correctAnswer":
//               [
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 0 \\\\\\\\ -5 \\end{bmatrix} \\\\)",
//               ],
//             "choices":
//               [
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 0 \\\\\\\\ -5 \\end{bmatrix} \\\\)",
//                 // Incorrect:
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 0 \\\\\\\\ 5 \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 5 \\\\\\\\ 0 \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} -5 \\\\\\\\ 0 \\end{bmatrix} \\\\)",
//               ],
//             "colCount": 2,
//             "choicesOrder": "random",
//           },
//         ]
//       },
//       {
//         "name": "page6",
//         "elements": [
//           {
//             "type": "checkbox",
//             "name": "(4, -43°)",
//             "title": "(4, -43°)",
//             "description": "Berechnen Sie \\\\( \\left(v\\_x, v\\_y \\right) \\\\) aus \\\\( \\left(v, \\varphi \\right) \\\\) für:$$\\begin{bmatrix} v \\\\\\\\ \\varphi \\end{bmatrix} = \\begin{bmatrix} 4 \\\\\\\\ -43^\\circ \\end{bmatrix}$$",
//             "correctAnswer":
//               [
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 2{,}9 \\\\\\\\ -2{,}7 \\end{bmatrix} \\\\)",
//               ],
//             "choices":
//               [
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 2{,}9 \\\\\\\\ -2{,}7 \\end{bmatrix} \\\\)",
//                 // Incorrect:
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 2{,}8 \\\\\\\\ -2{,}7 \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 2{,}9 \\\\\\\\ -2{,}6 \\end{bmatrix} \\\\)",
//                 "\\\\( \\begin{bmatrix} v\\_x \\\\\\\\ v\\_y \\end{bmatrix} \\stackrel{0{,}1}{\\approx} \\begin{bmatrix} 2{,}9 \\\\\\\\ -2{,}5 \\end{bmatrix} \\\\)",
//               ],
//             "colCount": 2,
//             "choicesOrder": "random",
//           },
//         ]
//       },
//     ],


//   "firstPageIsStarted": true,
//   "showProgressBar": "top",
//   "showQuestionNumbers": "off",
//   "focusFirstQuestionAutomatic": false,
//   // "maxTimeToFinishPage": 300,
//   // "maxTimeToFinish": 900,
//   // "showTimerPanel": "top",
//   "surveyShowDataSaving": false,
// }
