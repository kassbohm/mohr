function setDataToWidget(survey, data) {
    var chartContainer = document.querySelector('#chartContainer');
	chartContainer.innerHTML = "";
	var visPanel = new SurveyAnalytics.VisualizationPanel(survey.getAllQuestions(), data, {
		labelTruncateLength: 27,
		allowChangeAnswersOrder: false,
		allowDynamicLayout: false
	});
	visPanel.visualizers[0].chartType = "doughnut";
	visPanel.showHeader = false;
	// visPanel.showHeader = true;
	visPanel.render(chartContainer);
}
const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});
survey.onCompleting.add((sender, options) => {
	survey.completedHtml = "<p style='font-size:24px;'>Thank you for completing the survey! (please wait for analytics to load ...)<p>";
});

survey.onComplete.add((sender, options) => {
    sender.showCompletedPage = false;
    $.get(
      "https://api.surveyjs.io/private/Surveys/getSurveyPublicResults/5af48e08-a0a5-44a5-83f4-1c90e8e98de1",
      function (data) {
        setDataToWidget(survey, data.Data);
      }
    );
});

$("#surveyElement").Survey({ model: survey });
// https://surveyjs.io/service/surveyresults/aa8d3c71-221c-4dc9-92a0-6eeaa58b5116