# Test

## Introduction

TODO: Update with latest "Learning Loops" data. New Screenshots and slightly different flow

DevOps Test is a web-based continuous testing platform that consolidates test data, environments, test runs, and reports. It supports API, functional, and performance tests.

To learn more about DevOps Test please have a look at the [documentation][TestDocumentation]

## Overview

This lab will provide you with a practical hands-on of our testing capabilities. You can click on the main menu and navigate to the DevOps Test.

### How to switch to Test from Home Page

--8<-- [start:SWITCH2Test]

| Step | Details                                                                                                  | Additional Information                                         |
|:----:|:---------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
|  1   | You can always switch using the central app switcher on the top left of your screen                      | ![Central App Switcher][CentralAppSwitcher]                    |
|  2   | Or You can switch directly to Test by using the button/link from What would you like to do today section | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |

--8<-- [end:SWITCH2Test]

### 3rd Party

--8<-- [start:Test3rdParty]

| Step | Details                                                                                                       | Additional Information                      |
|:----:|:--------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
|      | The first time you use Test you are asked if you want to accept 3rd Party plugins                             | ![3rd Party question][Test3rdPartyQ]        |
|      | Either check the plugins to have them arccepte or accept them later. Press Save and a success mesage is shown | ![3rd Party Accepted][Test3rdPartyAccepted] |

--8<-- [end:Test3rdParty]

### Switch TeamSpace and Project if needed

Should Test show you a different Teamspace or Project then expected (Demo and EchoLogic), click on Teamspace Icon

![Teamspace Switcher][SwitchTS]

and Select **Demo**. A list of Projects is shown:

![Projectlist is shown][TestPrjList]

## TestScripts and Testruns

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
|      | click on **Analyze** section in Sidebar to get list of Menue                                       | ![Analyze Section][SectionAnalyze]               |
|      | click on **Results** to get Results View                                                           | ![Results Overview][ResultsOverview]             |
|      | Show how we can create or edit a test                                                              |                                                  |
|      | click on **Author** section on **Test Editor** menue entry                                         | ![Test Author Section][SectionAuthor]            |
|      | Test Editor View opens and select the **DemoTestFail** script                                      | ![Test Editor View][TestEditorView]              |
|      | Test Script will be shown                                                                          | ![Test Script][TestScriptEditor]                 |
|      | click on the **verification** step to view step details                                            | ![Step Details][TestScriptStepDetails]           |
|      | Run a new test that will fail                                                                      |                                                  |
|      | click on **Execute** Section in the Sidebar                                                        | ![Test Exec Section][SectionExecute]             |
|      | List of Scripts is shown                                                                           | ![List of executable Scripts][ExecuteScriptList] |
|      | click on **Run Button** on the right of Script **DemoTestFail**                                    | ![Run Button][ButtonRun]                         |
|      | Testexecution will take a few moments.                                                             |                                                  |
|      | Create a defect in Plan and show that is has all the data automatically                            |                                                  |
|      | Switch to Results View using the **Analyze** Section menue                                         | ![Analyze Section menue][MenueAnalyze]           |
|      | In the **Results** View select the **DemoTestFail** run                                            | ![Results Overview][ResultsOverview]             |
|      | Click on **DevOps Plan** ![Create ticket icon][CreateTicketIcon] Icon on the right side of the row | ![Failed Test][ResultsFailedTest]                |
|      | A WorkItem creation Dialog opens, select **Workitem** in the Type field                            | ![CreateWI][WICreatedialog]                      |
|      | Select Project "EchoLogic",  Workitem Type "Defect" and enter a Title                              | ![CreateWI Enter Title][WICreateDetails]         |
|      | In the **Results** View click on the **DemoTestFail** name to get a Detailed View                  | ![Result Details with Plan Link][ResultLinked]   |
|      | Explain that everything is traceable                                                               |                                                  |

## Testdata

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

## Settings

### Create Token

--8<-- [start:PATTest]

| Step | Details                                                                                                      | Additional Information                        |
|:----:|:-------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
|      | click on the **Profile** Link on the top right of your screen to get a menue                                 | ![Test top right menuebar][TestToprightMenue] |
|      | Click on **Create Token** in the menue for a new PAT                                                         | ![Create Token][TestProfileMenue]             |
|      | A new PAT will be created automatically and shown. **COPY and PASTE** into a secure storage for furter usage | ![Test New PAT is shown][TestNewPAT]          |
|      | click on **Close** to close the dialog                                                                       | ![Close button][ButtonClose]                  |

--8<-- [end:PATTest]

## Conclusio

Go back to [Introduction][GoBackToParentIndex], [Lab and Demo Overview][GoBackToDemoOverview] or proceed with [Next Lab][NextLab]

---

[GoBackToDemoOverview]: ../index.md
[GoBackToParentIndex]: ../index.md#test
[NextLab]: ../index.md#secure
[WhatWouldYouLikeToDoToday]: ../introduction/media/Loop_whatwouldyouliketodotoday.png
[CentralAppSwitcher]: ../introduction/media/Loop_central_app_control.png
[Test3rdPartyQ]: media/Test_Accept_3rdParty.png
[Test3rdPartyAccepted]: media/Test_3rdPartyAccepted.png
[SectionExecute]: media/Test_Sidebar_ExecuteSection.png
[ExecuteScriptList]: media/Test_Execute_ScriptList.png
[ButtonRun]: media/Test_RunButton.png
[ButtonClose]: ../../media/Button_Close.png
[CreateTicketIcon]: media/Test_ResultView_FailedTest_CreateTicket.png
[Projecttile]: media/Test_Project_Tile.png
[ProjectHomePage]: media/Test_Project_Homepage.png
[RunDialog]: media/Test_Run_Dialog.png
[ButtonExecute]: media/Test_ExecuteButton.png
[RunningScript]: media/Test_Execute_ScriptList_runningScript.png
[SectionAnalyze]: media/Test_Sidebar_Analyze_Section.png
[ResultsOverview]: media/Test_Analyze_ResultOverview.png
[SectionAuthor]: media/Test_Sidebar_AuthorSection.png
[TestEditorView]: media/Test_TestEditor_View.png
[TestScriptEditor]: media/Test_TestEditor_ScriptOpened.png
[TestScriptStepDetails]: media/Test_TestEditor_StepDetails.png
[MenueAnalyze]: media/Test_Sidebar_Analyze_Menue.png
[ResultsFailedTest]: media/Test_ResultView_FailedTest.png
[WICreatedialog]: media/Test_Plan_WI_Dialog1.png
[WICreateDetails]: media/Test_Plan_WI_Dialog2.png
[ResultLinked]: media/Test_Result_Details_with_PlanLink.png
[SwitchTS]: media/Test_SwitchTS.png
[TestPrjList]: media/Test_Show_ProjectList.png
[DataDefView]: media/Test_Author_DataDefView.png
[DataSchemas]: media/Test_Author_Schemas.png
[DataSchemaView]: media/Test_Author_Schema_View.png
[DataPreviewIcon]: media/Test_Data_PreviewIcon.png
[DataPreview]: media/Test_Data_Preview.png
[GenerateIcon]: media/Test_Data_GenerateIcon.png
[GenerateDialog]: media/Test_Data_GenerateDialog.png
[ButtonDownload]: ../../media/Button_Download.png
[TestDataFolder]: media/Test_Data_DownloadedUnzipped.png
[TestDataFiles]: media/Test_Data_DownloadedFiles.png
[TestDataGenerated]: media/Test_Data_GeneratedData.png
[TestDocumentation]: https://www.ibm.com/docs/en/devops-test-hub/
[TestToprightMenue]: media/Test_Profile_Notification_Settings_Help_Links.png
[TestProfileMenue]: media/Test_Profile_Menue.png
[TestNewPAT]: media/Test_Create_PAT_Dialog.png
