const json = {
  "surveyId": "9d04a0ff-dc95-4b78-b68d-c61124a903bd", 
  "surveyPostId": "5c8c3ea6-fcb1-44fc-b5db-1aa375ef78b7",
  "title": "x",
  "description": "Testen Sie Ihr Können beim Thema **Vektorrechnung**. <br> Sei gegeben ein \\\\((x,y,z)\\\\)-Bezugssystem sowie die Komponenten der Vektoren \\\\(\\boldsymbol u\\\\) und \\\\(\\boldsymbol v\\\\):$$\\begin{aligned}\\begin{bmatrix}u\\_x\\\\\\\\u\\_y\\\\\\\\u\\_z\\end{bmatrix}&=\\begin{bmatrix}1\\\\\\\\-1\\\\\\\\4\\end{bmatrix} \\\\\\\\ \\begin{bmatrix}v\\_x\\\\\\\\v\\_y\\\\\\\\v\\_z\\end{bmatrix}&=\\begin{bmatrix}5 \\\\\\\\ 3 \\\\\\\\ 2 \\end{bmatrix}\\end{aligned}$$<br><br>Markieren Sie alle wahren Aussagen.",
  "loadingHtml": "Loading Quiz...",
};

// const json =
// {
//   "title": "<font size=\"5\">Vektorrechnung</font>",
//   "description": "Testen Sie Ihr Können beim Thema **Vektorrechnung**. Sei gegeben ein \\\\((x,y,z)\\\\)-Bezugssystem sowie die Komponenten der Vektoren \\\\(\\boldsymbol u\\\\) und \\\\(\\boldsymbol v\\\\):$$\\begin{aligned}\\begin{bmatrix}u\\_x\\\\\\\\u\\_y\\\\\\\\u\\_z\\end{bmatrix}&=\\begin{bmatrix}1\\\\\\\\-1\\\\\\\\4\\end{bmatrix} \\\\\\\\ \\begin{bmatrix}v\\_x\\\\\\\\v\\_y\\\\\\\\v\\_z\\end{bmatrix}&=\\begin{bmatrix}5 \\\\\\\\ 3 \\\\\\\\ 2 \\end{bmatrix}\\end{aligned}$$",
//   "logo": "https://api.surveyjs.io/private/Surveys/files?name=6ba35e52-f662-4b9a-ba29-9336965c5f80",
//   "logoWidth": "378px",
//   "logoHeight": "375px",
//   "logoPosition": "right",
//   "focusFirstQuestionAutomatic": false,
//   "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
//   "completedHtmlOnCondition": [
//     {
//       "expression": "{correctAnswers} != {questionCount}",
//       "html": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers. Feel free to reload this page to start over.</h4>"
//     },
//     {
//       "expression": "{correctAnswers} == {questionCount}",
//       "html": "<h4>You got all answers right. Well done! </h4><br><h3>🐝</h3>"
//     }
//   ],
//   "loadingHtml": "Loading Quiz...",
//   "pages": [
//     {
//       "name": "startPage"
//     },
//     {
//       "name": "page1",
//       "elements": [
//         {
//           "type": "checkbox",
//           "name": "Norm (Betrag)",
//           "title": "Norm (Betrag)",
//           "description": "Berechnen Sie die **Norm** (den **Betrag**).",
//           "correctAnswer": [
//             "\\\\( \\lVert \\boldsymbol v  \\rVert = v = \\sqrt{38}\\\\)",
//             "\\\\( \\lVert \\boldsymbol v  \\rVert = v \\stackrel{0{,}01}{\\approx} 6{,}16\\\\)",
//             "\\\\( \\lVert \\boldsymbol u  \\rVert = u = 3\\sqrt{2} \\\\)",
//             "\\\\( \\lVert \\boldsymbol u  \\rVert = u \\stackrel{0{,}01}{\\approx} 4{,}24\\\\)",
//             "\\\\( \\lVert \\boldsymbol v  \\rVert = v = \\sqrt{v\\_x^2 + v\\_y^2 + v\\_z^2}\\\\)",
//             "\\\\( \\lVert \\boldsymbol v  \\rVert^2 = v^2 = v\\_x^2 + v\\_y^2 + v\\_z^2\\\\)"
//           ],
//           "choices": [
//             "\\\\( \\lVert \\boldsymbol v  \\rVert = v = \\sqrt{38}\\\\)",
//             "\\\\( \\lVert \\boldsymbol v  \\rVert = v \\stackrel{0{,}01}{\\approx} 6{,}16\\\\)",
//             "\\\\( \\lVert \\boldsymbol v  \\rVert = v = \\sqrt{v\\_x^2 + v\\_y^2 + v\\_z^2}\\\\)",
//             "\\\\( \\lVert \\boldsymbol v  \\rVert^2 = v^2 = v\\_x^2 + v\\_y^2 + v\\_z^2\\\\)",
//             "\\\\( \\lVert \\boldsymbol u  \\rVert = u = 2\\sqrt{3} \\\\)",
//             "\\\\( \\lVert \\boldsymbol u  \\rVert = u \\stackrel{0{,}01}{\\approx} 4{,}12\\\\)"
//           ],
//           "choicesOrder": "random",
//           "colCount": 2
//         }
//       ]
//     },
//     {
//       "name": "page2",
//       "elements": [
//         {
//           "type": "checkbox",
//           "name": "Skalarprodukt",
//           "title": "Skalarprodukt",
//           "description": "Berechnen Sie das **Skalarprodukt**.",
//           "correctAnswer": [
//             "\\\\( \\boldsymbol v \\cdot \\boldsymbol u = \\boldsymbol u \\cdot \\boldsymbol v  \\\\)",
//             "\\\\( \\boldsymbol v \\cdot \\boldsymbol u = \\begin{bmatrix}5 & 3 & 2\\end{bmatrix} \\begin{bmatrix}1 \\\\\\\\-1\\\\\\\\4\\end{bmatrix}   \\\\)",
//             "\\\\( \\boldsymbol v \\cdot \\boldsymbol u = 10   \\\\)",
//             "\\\\( \\boldsymbol u \\cdot \\boldsymbol u = \\lVert \\boldsymbol u  \\rVert^2    \\\\)"
//           ],
//           "choices": [
//             "\\\\( \\boldsymbol v \\cdot \\boldsymbol u = \\boldsymbol u \\cdot \\boldsymbol v  \\\\)",
//             "\\\\( \\boldsymbol v \\cdot \\boldsymbol u = \\begin{bmatrix}5 & 3 & 2\\end{bmatrix} \\begin{bmatrix}1 \\\\\\\\-1\\\\\\\\4\\end{bmatrix}   \\\\)",
//             "\\\\( \\boldsymbol v \\cdot \\boldsymbol u = 10   \\\\)",
//             "\\\\( \\boldsymbol u \\cdot \\boldsymbol u = \\lVert \\boldsymbol u  \\rVert^2    \\\\)",
//             "\\\\( \\boldsymbol u \\cdot \\boldsymbol v = 11  \\\\)",
//             "\\\\( \\boldsymbol v \\cdot \\boldsymbol u = \\begin{bmatrix}5 \\\\\\\\ 3 \\\\\\\\ 2\\end{bmatrix} \\begin{bmatrix}1 & -1 & 4\\end{bmatrix}   \\\\)"
//           ],
//           "choicesOrder": "random",
//           "colCount": 2
//         }
//       ]
//     },
//     {
//       "name": "page3",
//       "elements": [
//         {
//           "type": "checkbox",
//           "name": "Kreuzprodukt",
//           "title": "Kreuzprodukt",
//           "description": "Berechnen Sie das **Kreuzprodukt** \\\\(\\boldsymbol w = \\boldsymbol u \\times \\boldsymbol v\\\\).",
//           "correctAnswer": [
//             "\\\\( \\begin{bmatrix} w\\_x \\\\\\\\ w\\_y \\\\\\\\ w\\_z \\end{bmatrix} = \\begin{bmatrix} -14 \\\\\\\\ 18 \\\\\\\\ 8 \\end{bmatrix} \\\\)",
//             "\\\\(\\boldsymbol w = - \\boldsymbol v \\times \\boldsymbol u\\\\)"
//           ],
//           "choices": [
//             "\\\\( \\begin{bmatrix} w\\_x \\\\\\\\ w\\_y \\\\\\\\ w\\_z \\end{bmatrix} = \\begin{bmatrix} -14 \\\\\\\\ 18 \\\\\\\\ 8 \\end{bmatrix} \\\\)",
//             "\\\\(\\boldsymbol w = - \\boldsymbol v \\times \\boldsymbol u\\\\)",
//             "\\\\( \\begin{bmatrix} w\\_x \\\\\\\\ w\\_y \\\\\\\\ w\\_z \\end{bmatrix} = \\begin{bmatrix} -14 & 18 & 8 \\end{bmatrix} \\\\)",
//             "\\\\( \\begin{bmatrix} w\\_x \\\\\\\\ w\\_y \\\\\\\\ w\\_z \\end{bmatrix} = \\boldsymbol u \\times \\boldsymbol v \\\\)",
//             "\\\\( \\begin{bmatrix} w\\_x \\\\\\\\ w\\_y \\\\\\\\ w\\_z \\end{bmatrix} = \\begin{bmatrix} 14 \\\\\\\\ -18 \\\\\\\\ -8 \\end{bmatrix} \\\\)",
//             "\\\\(\\boldsymbol w = \\boldsymbol v \\times \\boldsymbol u\\\\)"
//           ],
//           "choicesOrder": "random",
//           "colCount": 2
//         }
//       ]
//     }
//   ],
//   "showQuestionNumbers": "off",
//   "showProgressBar": "top",
//   "firstPageIsStarted": true
// }
