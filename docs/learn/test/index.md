# Test

## Introduction

--8<-- [start:Intro]

TODO: Update with latest "Learning Loops" data. New Screenshots and slightly different flow

DevOps Test is a web-based continuous testing platform that consolidates test data, environments, test runs, and reports. It supports API, functional, and performance tests.

To learn more about DevOps Test please have a look at the [documentation][TestDocumentation]

--8<-- [end:Intro]

## Overview

--8<-- [start:Overview]

This lab will provide you with a practical hands-on of our testing capabilities. You can click on the main menu and navigate to the DevOps Test.

### How to switch to Test from Home Page

--8<-- [start:SWITCH2Test]

| Step | Details                                                                                                  | Additional Information                                         |
|:----:|:---------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
|  1   | You can always switch using the central app switcher on the right side of your screen                    | ![Central App Switcher][CentralAppSwitcher]                    |
|  2   | Or You can switch directly to Test by using the button/link from What would you like to do today section | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |

--8<-- [end:SWITCH2Test]

### 3rd Party

--8<-- [start:Test3rdParty]

| Step | Details                                                                                                       | Additional Information                      |
|:----:|:--------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
|      | The first time you use Test you are asked if you want to accept 3rd Party plugins                             | ![3rd Party question][Test3rdPartyQ]        |
|      | Either check the plugins to have them arccepte or accept them later. Press Save and a success mesage is shown | ![3rd Party Accepted][Test3rdPartyAccepted] |

--8<-- [end:Test3rdParty]

### Switch teamspace and Project if needed

--8<-- [start:SwitchTSandProject]

|   | Details                                                                                                           | Additional Information               |
|:-:|:------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
|   | Should Test show you a different Teamspace or Project then expected (Demo and EchoLogic), click on Teamspace Icon | ![Teamspace Switcher][SwitchTS]      |
|   | and Select **Demo**. A list of Projects is shown:                                                                 | ![Projectlist is shown][TestPrjList] |

--8<-- [end:SwitchTSandProject]

--8<-- [end:Overview]

## TestScripts and Testruns

--8<-- [start:TestScriptsAndRuns]

| Step | Details                                                                                            | Additional Information                           |
|:----:|:---------------------------------------------------------------------------------------------------|:-------------------------------------------------|
|      | Explain that you are now playing the role of a tester                                              |                                                  |
|      | click on **EchoLogic** Project to open landing page                                                | ![Open EchoLogic Project][Projecttile]           |
|      | Show the test landing page and metrics                                                             | ![Test Landing Page][ProjectHomePage]            |
|      | Run a test                                                                                         |                                                  |
|      | click on **Execute** Section in the Sidebar                                                        | ![Test Exec Section][SectionExecute]             |
|      | List of Scripts is shown                                                                           | ![List of executable Scripts][ExecuteScriptList] |
|      | click on **Run Button** on the right of Script **DemoTest**                                        | ![Run Button][ButtonRun]                         |
|      | Dialog is opened to select a Browser, use the default settings                                     | ![Select Browser][RunDialog]                     |
|      | Click on **Execute** Button to start Test Execution                                                | ![Execute Button][ButtonExecute]                 |
|      | Run will take a few moments                                                                        | ![Running Script][RunningScript]                 |
|      | Show the analysis of the test results                                                              |                                                  |
|      | click on **Analyze** section in Sidebar to get list of Menu                                        | ![Analyze Section][SectionAnalyze]               |
|      | click on **Results** to get Results View                                                           | ![Results Overview][ResultsOverview]             |
|      | Show how we can create or edit a test                                                              |                                                  |
|      | click on **Author** section on **Test Editor** menu entry                                          | ![Test Author Section][SectionAuthor]            |
|      | Test Editor View opens and select the **DemoTestFail** script                                      | ![Test Editor View][TestEditorView]              |
|      | Test Script will be shown                                                                          | ![Test Script][TestScriptEditor]                 |
|      | click on the **verification** step to view step details                                            | ![Step Details][TestScriptStepDetails]           |
|      | Run a new test that will fail                                                                      |                                                  |
|      | click on **Execute** Section in the Sidebar                                                        | ![Test Exec Section][SectionExecute]             |
|      | List of Scripts is shown                                                                           | ![List of executable Scripts][ExecuteScriptList] |
|      | click on **Run Button** on the right of Script **DemoTestFail**                                    | ![Run Button][ButtonRun]                         |
|      | Testexecution will take a few moments.                                                             |                                                  |
|      | Create a defect in Plan and show that is has all the data automatically                            |                                                  |
|      | Switch to Results View using the **Analyze** Section menu                                          | ![Analyze Section menu][MenueAnalyze]            |
|      | In the **Results** View select the **DemoTestFail** run                                            | ![Results Overview][ResultsOverview]             |
|      | Click on **DevOps Plan** ![Create ticket icon][CreateTicketIcon] Icon on the right side of the row | ![Failed Test][ResultsFailedTest]                |
|      | A WorkItem creation Dialog opens, select **Workitem** in the Type field                            | ![CreateWI][WICreatedialog]                      |
|      | Select Project "EchoLogic",  Workitem Type "Defect" and enter a Title                              | ![CreateWI Enter Title][WICreateDetails]         |
|      | In the **Results** View click on the **DemoTestFail** name to get a Detailed View                  | ![Result Details with Plan Link][ResultLinked]   |
|      | Explain that everything is traceable                                                               |                                                  |

--8<-- [end:TestScriptsAndRuns]

## Testdata

--8<-- [start:Testdata]

| Step | Details                                                                      | Additional Information                   |
|:----:|:-----------------------------------------------------------------------------|:-----------------------------------------|
|      | Open **Author** section on **Test Editor** menue entry and click on **Data** | ![Test Author Section][SectionAuthor]    |
|      | Data Definitions and Schemas are shown                                       | ![Data Definitions Schemas][DataDefView] |
|      | click on **CRM-System** in the Schema folder                                 | ![Schemas][DataSchemas]                  |
|      | the **CRM-System** Data Schema is shown                                      | ![Schema View][DataSchemaView]           |
|      | Click on the **Preview Icon** ![Preview Icon][DataPreviewIcon]               | ![Data Preview][DataPreview]             |
|      | Click on the **Generate Icon** ![Generate Icon][GenerateIcon]                | ![Generate][GenerateDialog]              |
|      | Download the generated Data by clicking on **Downlad** Button                | ![Download button][ButtonDownload]       |
|      | Unzip and open the create folder                                             | ![Downloaded Unzipped][TestDataFolder]   |
|      | Two files are created **Customers** and **Orders**                           | ![Gnereated Files][TestDataFiles]        |
|      | Open one **Orders.csv** to view gnerated Data                                | ![Generated Data][TestDataGenerated]     |

--8<-- [end:Testdata]

## Settings

--8<-- [start:Settings]

### Create Token

--8<-- [start:PATTest]

| Step | Details                                                                                                      | Additional Information                        |
|:----:|:-------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
|      | click on the **Profile** Link on the top right of your screen to get a menue                                 | ![Test top right menuebar][TestToprightMenue] |
|      | Click on **Create Token** in the menue for a new PAT                                                         | ![Create Token][TestProfileMenue]             |
|      | A new PAT will be created automatically and shown. **COPY and PASTE** into a secure storage for furter usage | ![Test New PAT is shown][TestNewPAT]          |
|      | click on **Close** to close the dialog                                                                       | ![Close button][ButtonClose]                  |

--8<-- [end:PATTest]

--8<-- [end:Settings]

---

[GoBackToDemoOverview]: ../index.md
[GoBackToParentIndex]: ../index.md#test
[NextLab]: ../index.md#secure
[WhatWouldYouLikeToDoToday]: ../introduction/media/intro-loop-whatwouldyouliketodotoday.png
[CentralAppSwitcher]: ../introduction/media/intro-loop-central-app-control.png
[Test3rdPartyQ]: media/test-test-accept-3-rd-party.png
[Test3rdPartyAccepted]: media/test-test-3-rd-party-accepted.png
[SectionExecute]: media/test-test-sidebar-execute-section.png
[ExecuteScriptList]: media/test-test-execute-script-list.png
[ButtonRun]: media/test-test-run-button.png
[ButtonClose]: ../../media/common-button-close.png
[CreateTicketIcon]: media/test-test-result-view-failed-test-create-ticket.png
[Projecttile]: media/test-test-project-tile.png
[ProjectHomePage]: media/test-test-project-homepage.png
[RunDialog]: media/test-test-run-dialog.png
[ButtonExecute]: media/test-test-execute-button.png
[RunningScript]: media/test-test-execute-script-list-running-script.png
[SectionAnalyze]: media/test-test-sidebar-analyze-section.png
[ResultsOverview]: media/test-test-analyze-result-overview.png
[SectionAuthor]: media/test-test-sidebar-author-section.png
[TestEditorView]: media/test-test-test-editor-view.png
[TestScriptEditor]: media/test-test-test-editor-script-opened.png
[TestScriptStepDetails]: media/test-test-test-editor-step-details.png
[MenueAnalyze]: media/test-test-sidebar-analyze-menue.png
[ResultsFailedTest]: media/test-test-result-view-failed-test.png
[WICreatedialog]: media/test-test-plan-wi-dialog-01.png
[WICreateDetails]: media/test-test-plan-wi-dialog-02.png
[ResultLinked]: media/test-test-result-details-with-plan-link.png
[SwitchTS]: media/test-test-switch-ts.png
[TestPrjList]: media/test-test-show-project-list.png
[DataDefView]: media/test-test-author-data-def-view.png
[DataSchemas]: media/test-test-author-schemas.png
[DataSchemaView]: media/test-test-author-schema-view.png
[DataPreviewIcon]: media/test-test-data-preview-icon.png
[DataPreview]: media/test-test-data-preview.png
[GenerateIcon]: media/test-test-data-generate-icon.png
[GenerateDialog]: media/test-test-data-generate-dialog.png
[ButtonDownload]: ../../media/common-button-download.png
[TestDataFolder]: media/test-test-data-downloaded-unzipped.png
[TestDataFiles]: media/test-test-data-downloaded-files.png
[TestDataGenerated]: media/test-test-data-generated-data.png
[TestDocumentation]: https://www.ibm.com/docs/en/devops-test-hub/
[TestToprightMenue]: media/test-test-profile-notification-settings-help-links.png
[TestProfileMenue]: media/test-test-profile-menue.png
[TestNewPAT]: media/test-test-create-pat-dialog.png
