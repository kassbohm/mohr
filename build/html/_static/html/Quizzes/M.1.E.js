const json = {
  "surveyId": "48a96f9d-68eb-4ff5-ab5b-47ad8ac05ef5", 
  "surveyPostId": "cb38561b-54f4-4b3b-a07d-b1888f70d51a",
  "title": "x",
  "description": "Testen Sie Ihr Können beim Thema **Winkelposition** mit:<br>・ \\\\(0\\le\\varphi\\_{\\mathrm{h}}, \\varphi\\_{\\mathrm{min}}, \\varphi\\_{\\mathrm{s}} < 360^\\circ\\\\): Winkelposition des Sekunden-, Minuten-, Stundenzeigers.<br>・ **12-Uhr**-Winkelposition: Der **Nullpunkt** aller Winkelpositionen.<br>・ Zählrichtung „im Uhrzeigersinn”: Die **positive Zählrichtung** aller Winkelpositionen.<br><br>Markieren Sie alle wahren Aussagen.",
  "loadingHtml": "Loading Quiz...",
  // "surveyShowDataSaving": true,
};

// const json =
// {
//   "title": "<font size=\"5\">Winkelposition</font>",
//   "description": "Testen Sie Ihr Können beim Thema **Winkelposition** mit:<br>・ \\\\(0\\le\\varphi\\_{\\mathrm{h}}, \\varphi\\_{\\mathrm{min}}, \\varphi\\_{\\mathrm{s}} < 360^\\circ\\\\): Winkelposition des Sekunden-, Minuten-, Stundenzeigers.<br>・ **12-Uhr**-Winkelposition: Der **Nullpunkt** aller Winkelpositionen.<br>・ Zählrichtung „im Uhrzeigersinn”: Die **positive Zählrichtung** aller Winkelpositionen.",
//   // "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
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
//             "name": "10:44:01",
//             "title": "10:44:01 Uhr",
//             "description": "Berechnen Sie die Zeiger-Winkelpositionen für die angezeigte Uhrzeit **10:44:01 Uhr**. Runden Sie auf Rundestellenwert \\\\(0{,}01.\\\\)",
//             "correctAnswer":
//               [
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 322{,}01^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 264{,}1^\\circ \\\\)",
//               ],
//             "choices":
//               [
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 322{,}01^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 264{,}1^\\circ \\\\)",
//                 // Incorrect:
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 322{,}67^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 264{,}2^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 322{,}42^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 264{,}8^\\circ \\\\)",
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
//             "name": "05:11:47",
//             "title": "05:11:47 Uhr",
//             "description": "Berechnen Sie die Zeiger-Winkelpositionen für die angezeigte Uhrzeit **05:11:47 Uhr**. Runden Sie auf Rundestellenwert \\\\(0{,}01.\\\\)",
//             "correctAnswer":
//               [
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 155{,}89^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 70{,}7^\\circ \\\\)",
//               ],
//             "choices":
//               [
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 155{,}89^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 70{,}7^\\circ \\\\)",
//                 // Incorrect:
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 154{,}41^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 69{,}9^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 154{,}56^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 69{,}7^\\circ \\\\)",
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
//             "name": "09:08:31",
//             "title": "09:08:31 Uhr",
//             "description": "Berechnen Sie die Zeiger-Winkelpositionen für die angezeigte Uhrzeit **09:08:31 Uhr**. Runden Sie auf Rundestellenwert \\\\(0{,}01.\\\\)",
//             "correctAnswer":
//               [
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 274{,}26^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 51{,}1^\\circ \\\\)",
//               ],
//             "choices":
//               [
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 274{,}26^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 51{,}1^\\circ \\\\)",
//                 // Incorrect:
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 273{,}84^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 50{,}4^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{h}} \\stackrel{0{,}01}{\\approx} 273{,}86^\\circ \\\\)",
//                 "\\\\( \\varphi\\_{\\mathrm{min}} \\stackrel{0{,}01}{\\approx} 51{,}4^\\circ \\\\)",
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
//   "maxTimeToFinishPage": 300,
//   "maxTimeToFinish": 900,
//   "showTimerPanel": "top",
//   "surveyShowDataSaving": false,
// }



