const survey = new Survey.Model(json);

// survey.onComplete.add((sender, options) => {
//     console.log(JSON.stringify(sender.data, null, 3));
// });

//Create showdown markdown converter
var converter = new showdown.Converter();
survey.onTextMarkdown.add(function(survey, options){
    //convert the markdown text to html
    var str = converter.makeHtml(options.text);
    //remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    //set html
    options.html = str;
});

survey.onAfterRenderQuestion.add((sender, options) => {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, options.htmlElement]);
});

$("#surveyContainer").Survey({
    model: survey,
    // onComplete: sendDataToServer
});
