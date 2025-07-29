# Test

This lab will provide you with a practical hands-on of our testing capabilities. You can click on the main menu and navigate to the DevOps test.

## Overview

### How to switch to Test from Home Page

You can switch to Test by either pressing "Let's go to Test" button on its tile:

![Test Tile lets go][SwitchToTest]

Or you can always switch using the central app switcher on the top left of your screen:

![Central App Switcher][CentralAppSwitcher]

### Switch TeamSpace and Project if needed

Should Test show you a different Teamspace or Project then expected (Demo and EchoLogic), click on Teamspace Icon

![Teamspace Switcher][SwitchTS]

and Select **Demo**. A list of Projects is shown:

![Projectlist is shown][TestPrjList]

## Steps

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

## Conclusio

Go back to [Introduction][GoBackToParentIndex], [Lab and Demo Overview][GoBackToDemoOverview] or proceed with [Next Lab][NextLab]

---

[GoBackToDemoOverview]: ../index.md
[GoBackToParentIndex]: ../index.md#test
[NextLab]: ../index.md#secure
[SwitchToTest]: ../introduction/media/Loop_switch_to_Test.png
[CentralAppSwitcher]: ../introduction/media/Loop_central_app_control.png
[SectionExecute]: media/Test_Sidebar_ExecuteSection.png
[ExecuteScriptList]: media/Test_Execute_ScriptList.png
[ButtonRun]: media/Test_RunButton.png
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
