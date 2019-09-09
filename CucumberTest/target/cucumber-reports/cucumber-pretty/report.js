$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "feature name",
  "description": "",
  "id": "feature-name",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 21,
  "name": "Authenication",
  "description": "",
  "id": "feature-name;authenication",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Open Application and Enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "enter username",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "enter password",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "verify Msg",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.open_Application_and_Enter_url()"
});
formatter.result({
  "duration": 6805549400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.enter_username()"
});
formatter.result({
  "duration": 298881100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.enter_password()"
});
formatter.result({
  "duration": 2325439100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.verify_Msg()"
});
formatter.result({
  "duration": 55938700,
  "status": "passed"
});
});