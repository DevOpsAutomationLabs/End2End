# Demo Flow

![Demo Flow][ChartFlowOfDemo]

## Overview

This Step by Step Demo Guide will give you compact Instructions how to demo DevOps Loop. For more detailed information about the Capabilities and Steps links to the indepth enablement Guide has been added.

## [Loop](learn/introduction/index.md)

### Login into Loop

--8<--
learn/introduction/index.md:HowtoLogin
--8<--

### The Home Page

--8<--
learn/introduction/index.md:TheHomePage
--8<--

### Dashboards and Metrics

--8<--
learn/introduction/index.md:DashboardMetrics
--8<--

## [Plan](learn/plan/index.md)

### Plan Overview

#### [Switch to Plan](learn/plan/index.md#how-to-switch-to-plan-from-home-page)

--8<--
learn/plan/index.md:SWITCH2Plan
--8<--

#### [Show My board][ShowMyBoard]  

--8<--
learn/plan/boards/index.md:ProjectBoard
--8<--

#### [Show how to filter out Epics][HowToFilter]

--8<--
learn/plan/boards/index.md:FilterEpics
--8<--

#### [Show all work items][WorkItems]  

--8<--
learn/plan/boards/index.md:WorkItems
--8<--

### [Use Plan AI Assistant](learn/plan/ai_assistant/index.md#using-the-plan-ai-assistant)

[For More about AI Assistant follow this link][PlanAI]

#### AI Assistant Chat Dialog

--8<--
learn/plan/ai_assistant/index.md:PlanAIAssistantChat
--8<--

#### AI Assistant Type of Output

--8<--
learn/plan/ai_assistant/index.md:PlanAIAssistantOutputType
--8<--

#### AI Assistant Create Records from Responses

--8<--
learn/plan/ai_assistant/index.md:PlanAIAssistantCreateRecords
--8<--
<!-- [Open a workitem and use AI to create description and exploratory test information](plan/boards/index.md#use-ai-in-workitem) -->

## [Control - Work with Repository](learn/control/index.md#open-repo-with-code)

--8<--
learn/control/index.md:SWITCH2Control
--8<--
--8<--
learn/control/index.md:ManageRepoOrgs
--8<--
--8<--
learn/control/index.md:OpenRepoWithCode
--8<--

## [Code](learn/code/index.md)

<!-- --8<--
learn/code/index.md:Switch2Code
--8<-- -->
--8<--
learn/code/index.md:UseCode
--8<--

## [Control](learn/control/index.md)

--8<--
learn/control/index.md:ShowLastCommits
--8<--
--8<--
learn/control/index.md:ShowGitCommitDetails
--8<--

## [Build](learn/build/index.md)

--8<--
learn/build/index.md:SWITCH2Build
--8<--

--8<--
learn/build/index.md:ProjectBuildRunResults
--8<--

--8<--
learn/build/index.md:BuildProcDetail
--8<--

--8<--
learn/build/index.md:ProcessTemplates
--8<--

--8<--
learn/build/index.md:ProcessDetailsTemplates
--8<--

--8<--
learn/build/index.md:ProcessDefTemplates
--8<--

## [Deploy](learn/deploy/index.md)

### [Deploy Overview][REFDeployOverview]

| Step | Details                                                                                 | Additional Information { width="50%" }                                      |
|:----:|:----------------------------------------------------------------------------------------|:----------------------------------------------------------------------------|
|  1   | [Open Deploy][DeployOpen]                                                               |                                                                             |
|  2   | [Show the landing page and explain the metrics][DeployShowLandingPage]                  | ![DeployLandingPage][DeployDashboard]                                       |
|  3   | Show process of [Applications][REFAppProcessView] and [Components][REFCompProcessView]  |                                                                             |
|  4   | Switch to Applications View by clicking on the Sidebar                                  | ![Sidebar Applications][SBApplicationsIcon]                                 |
| 4.1  | View for all Applications is shown                                                      | ![All Applications View][APPSallView]                                       |
| 4.2  | Click on the **EchoLogic** Application to show details                                  | ![Application View with Env][AppViewWEnv]                                   |
| 4.3  | [Switch to Processes View][SwitchToProcessView] by clicking on click on "Processes" Tab | ![App Processes Tab][AppProcessesTab]                                       |
| 4.4  | Available application processes are shown                                               | ![Application Processes][AppProcessesView]                                  |
| 4.5  | Show the **Deploy** Process by clicking on it                                           | ![App Deployment Process][AppViewProcess]                                   |
| 4.6  | [Talk about Application Processes][REFAppProcesses]                                     |                                                                             |
|  5   | [Switch to Components View][REFSwitchToCompView]                                        |                                                                             |
| 5.1  | In the sidebar select the **Components** Icon                                           | ![Sidebar Components Icon][SBCompIcon]                                      |
| 5.2  | All components are shown                                                                | ![Components View][CompView]                                                |
| 5.3  | click on **Echo** component to view details                                             | ![Open Echo Component][CompDetails]                                         |
| 5.4  | click on **Processes** Tab                                                              | ![Switch to Component processes View][CompProcessTab]                       |
| 5.5  | Available Component processes are shown                                                 | ![Component Processes][CompProcesses]                                       |
| 5.6  | show a process which executes a TEST                                                    | and is [setting quality tag on deployed version][DeployShowProcessWithTest] |
| 5.7  | Click on **Deploy with Test Passed**                                                    | ![Final Process with passed Test][DeployComponentProcessPassingTest]        |

### Run a Deplyoment

| Step | Details                                                                                | Additional Information { width="50%" }                                                |
|:----:|:---------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------|
|  1   | [Run a Process and view results of steps][DeployRunaDeployment]                        |                                                                                       |
|  2   | Open the Applicationslist by clicking on Applications Icon                             | ![Deploy Applications Button on Sidebar][SBApplicationsIcon]                          |
|  3   | Click on **EchoLogic** Name (Link)                                                     | ![Deploy Application][DeployShowApp]                                                  |
|  4   | All Environments of Application will be shown                                          | ![Deploy Application Environment List][DeployAppEnvList]                              |
|  5   | [Run a Deployment][DeployRequestAprocess]                                              |                                                                                       |
| 5.1  | Use the DEV environment                                                                | ![Dev Environment][DeployAppDevEnv]                                                   |
| 5.2  | click on Request Process Button:                                                       | ![Request Button][DeployAppRequestProcessButton]                                      |
| 5.3  | Select **Deploy with Test Passed**                                                     | ![Select Deployment Process][DeployAppProcessRequestSelectProcess]                    |
| 5.4  | Uncheck **Deploy Only Changed** to deploy same versions again                          | ![uncheck Deploy Only Changed][DeployAppProcessRequestOnlyChanged]                    |
| 5.5  | click on **Choose Component Versions** button                                          | ![Choose Versions Button][DeployAppPocessRequestChooseCompVersionButton]              |
| 5.6  | Select the Versions of the Components for deployment                                   |                                                                                       |
| 5.7  | Select Version **1.1** for the **Echo** Component                                      | ![Echo Version][DeployAppPocessRequestSelectCompVersion1]                             |
| 5.8  | Select Version **2.0.1** for the **Logic** Component                                   | ![LogicVersion][DeployAppPocessRequestSelectCompVersion2]                             |
| 5.9  | Press the **Submit** button to start the deployment process                            | ![Submit Button][DeployAppPocessRequestSubmitButton]                                  |
|  6   | Process is started and you can [View the running Process][DeployViewRunningProcess]    | ![Running Process][DeployProcessRunning]                                              |
| 6.1  | In this View the details of the executed steps are shown by clicking on **Expand All** | ![Expand All][DeployProcessRunningExpandAllButton]                                    |
| 6.2  | To view the detailed output of a step click on **3 dots menue** of the step            | ![3 dots menue of step][DeployProcessRunning3DotsofStep]                              |
| 6.3  | View the output of the step                                                            | ![Output of Step][DeployProcessRunningStepOutputDetails]                              |
| 6.4  | When the deplyoment finishes the [Result][DeployResultofRun] will be shown             |                                                                                       |
|  7   | The deployment run successfully                                                        | ![Deployment Success][DeployAppProcessRunSuccess]                                     |
| 7.1  | [Show Environment and its new configuration][DeployResultofRun]                        |                                                                                       |
| 7.2  | Switch to the Environment View of the Application and view the updated configuration   | ![Environment with deployed versions of components][DeployAppEnvwithDeployedVersions] |
| 7.3  | Click on the Component **Echo** to Details                                             | ![Status added to version][DeployComponentFinalProcesWithVersionStatus]               |
| 7.4  | Status in the Versionlist of the component will be shown                               |                                                                                       |

### [Use the Deployment Genie][REFUseGenie]

| Step | Details                                                                                                              | Additional Information { width="50%" }               |
|:----:|:---------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
|  1   | Use Deploy Genie to understand why the deployment failed                                                             |                                                      |
|  2   | To simulate a failed deployment [request a new deployment process][REFRequestAProcess] but now select the following: |                                                      |
|  3   | Deployment Process **Failing Deployment**                                                                            | ![Failing Process][RunSelectFailingDeployment]       |
|  4   | Select following Versions <br>for **Echo** select **1.0**<br>for **Logic** select **2.0.0**                          | ![Comp Versions][RunFailSelectCompVersions]          |
|  5   | Press the **Submit** button to start the deployment process                                                          | ![Submit Button][DeployAppPocessRequestSubmitButton] |
|  6   | The result will be a **failed** deployment as one step has failed                                                    | ![Failed Result][RunFailed]                          |
|  7   | Click on the **3 dots** ![3 dots menue][DeployPlugin3DotsMenue] to get menue of the failed step                      | ![Step Menue][Step3DotsMenueWithGenie]               |
|  8   | Click on **Deployment Genie** after a few moments the step will be analyzed and the results shown                    | ![AI Analyzed][GenieAnalysis]                        |

### Show the Plug-Ins Page

| Step | Details                                                                        | Additional Information { width="50%" }                 |
|:----:|:-------------------------------------------------------------------------------|:-------------------------------------------------------|
|  1   | [Show the plug-ins page][DeployShowPluginsPage]                                |                                                        |
|      | and explain how easy it is to integrate with 3rd parties out of the box        |                                                        |
|  2   | Switch to Settings by using the Settings Icon                                  | ![Deploy Settings Icon][DeploySettingsIcon]            |
|  3   | In the Settings View in the Section **Automation**                             |                                                        |
|      | [View installed and available Plugins][DeploySettingsAutomationSection]        | ![Automation Plugins][DeploySettingsAutomationPlugins] |
|  4   | By clicking on **Available Plugins** a list of all available Plug-Ins is shown | ![Plugin List][DeploySettingsPluginsList]              |

## [Test](learn/test/index.md)

| Step  | Details                                                                                                     | Additional Information { width="50%" }           |
|:-----:|:------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
|   1   | Explain that you are now playing the role of a tester                                                       |                                                  |
|   2   | [Open Test][TestOpen]                                                                                       |                                                  |
|  2.1  | You can switch to Test by either pressing "Let's go to Test" button on its tile                             | ![Test Tile lets go][SwitchToTest]               |
|  2.2  | Or you can always switch using the central app switcher on the top left of your screen                      | ![Central App Switcher][CentralAppSwitcher]      |
|   3   | [Switch Teamspace and select Project if needed][REFSwitchTestTS]                                            |                                                  |
|  3.1  | Should you see a different Teamspace or Project than expected (Demo and EchoLogic), click on Teamspace Icon | ![Teamspace Switcher][SwitchTestTS]              |
|  3.2  | and Select **Demo**. A list of Projects is shown:                                                           | ![Projectlist is shown][TestPrjList]             |
|  3.3  | click on **EchoLogic** Project to open landing page                                                         | ![Open EchoLogic Project][Projecttile]           |
|  3.4  | Show the test landing page and metrics                                                                      | ![Test Landing Page][ProjectHomePage]            |
|   6   | Run a test                                                                                                  |                                                  |
|  6.1  | click on **Execute** Section in the Sidebar                                                                 | ![Test Exec Section][SectionExecute]             |
|  6.2  | List of Scripts is shown                                                                                    | ![List of executable Scripts][ExecuteScriptList] |
|  6.3  | click on **Run Button** on the right of Script **DemoTest**                                                 | ![Run Button][ButtonRun]                         |
|  6.4  | Dialog is opened to select a Browser, use the default settings                                              | ![Select Browser][RunDialog]                     |
|  6.5  | Click on **Execute** Button to start Test Execution                                                         | ![Execute Button][ButtonExecute]                 |
|  6.6  | Run will take a few moments                                                                                 | ![Running Script][RunningScript]                 |
|   7   | Show the analysis of the test results                                                                       |                                                  |
|  7.1  | click on **Analyze** section in Sidebar to get list of Menue                                                | ![Analyze Section][SectionAnalyze]               |
|  7.2  | click on **Results** to get Results View                                                                    | ![Results Overview][ResultsOverview]             |
|   8   | Show how we can create or edit a test                                                                       |                                                  |
|  8.1  | click on **Author** section on **Test Editor** menue entry                                                  | ![Test Author Section][SectionAuthor]            |
|  8.2  | Test Editor View opens and select the **DemoTestFail** script                                               | ![Test Editor View][TestEditorView]              |
|  8.3  | Test Script will be shown                                                                                   | ![Test Script][TestScriptEditor]                 |
|  8.4  | click on the **verification** step to view step details                                                     | ![Step Details][TestScriptStepDetails]           |
|   9   | Run a new test that will fail                                                                               |                                                  |
|  9.1  | click on **Execute** Section in the Sidebar                                                                 | ![Test Exec Section][SectionExecute]             |
|  9.2  | List of Scripts is shown                                                                                    | ![List of executable Scripts][ExecuteScriptList] |
|  9.3  | click on **Run Button** on the right of Script **DemoTestFail**                                             | ![Run Button][ButtonRun]                         |
|  9.4  | Testexecution will take a few moments.                                                                      |                                                  |
|  10   | Create a defect in Plan and show that is has all the data automatically                                     |                                                  |
| 10.1  | Switch to Results View using the **Analyze** Section menue                                                  | ![Analyze Section menue][MenueAnalyze]           |
| 10.2  | In the **Results** View select the **DemoTestFail** run                                                     | ![Results Overview][ResultsOverview]             |
| 10.3  | Click on **DevOps Plan** ![Create ticket icon][CreateTicketIcon] Icon on the right side of the row          | ![Failed Test][ResultsFailedTest]                |
| 10.4  | A WorkItem creation Dialog opens, select **Workitem** in the Type field                                     | ![CreateWI][WICreatedialog]                      |
| 10.5  | Select Project "EchoLogic",  Workitem Type "Defect" and enter a Title                                       | ![CreateWI Enter Title][WICreateDetails]         |
| 10.6  | In the **Results** View click on the **DemoTestFail** name to get a Detailed View                           | ![Result Details with Plan Link][ResultLinked]   |
| 10.7  | Explain that everything is traceable                                                                        |                                                  |
|  11   | Generate test data                                                                                          |                                                  |
| 11.1  | Open **Author** section on **Test Editor** menue entry and click on **Data**                                | ![Test Author Section][SectionAuthor]            |
| 11.2  | Data Definitions and Schemas are shown                                                                      | ![Data Definitions Schemas][DataDefView]         |
| 11.3  | click on **CRM-System** in the Schema folder                                                                | ![Schemas][DataSchemas]                          |
| 11.4  | the **CRM-System** Data Schema is shown                                                                     | ![Schema View][DataSchemaView]                   |
| 11.5  | Click on the **Preview Icon** ![Preview Icon][DataPreviewIcon]                                              | ![Data Preview][DataPreview]                     |
| 11.6  | Click on the **Generate Icon** ![Generate Icon][GenerateIcon]                                               | ![Generate Dialog][GenerateDialog]               |
| 11.7  | Download the generated Data by clicking on **Downlad** Button                                               | ![Download button][ButtonDownload]               |
| 11.8  | Unzip and open the create folder                                                                            | ![Downloaded Unzipped][TestDataFolder]           |
| 11.9  | Two files are created **Customers** and **Orders**                                                          | ![Gnereated Files][TestDataFiles]                |
| 11.10 | Open one **Orders.csv** to view gnerated Data                                                               | ![Generated Data][TestDataGenerated]             |

## [Measure](learn/measure/index.md)

| Step | Details                                                                                                                  | Additional Information { width="50%" }                             |
|:----:|:-------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------|
|  1   | [Open Measure][MeasureOpen]                                                                                              |                                                                    |
|      | Explain that we have built, deployed and tested so now we need to coordinate [releases](#release)                        |                                                                    |
|  2   | Show and talk about pipeline(s) with environments and Gates                                                              |                                                                    |
| 2.1  | click on ![Pipeline Tab][TabPipeline] in the Tabbar to view [Pipelines][REFMeasurePipelines]                             | ![Measure VSM Tabs][MeasureTabs]                                   |
| 2.2  | Delivery Pipelines linked to this VSM are shown                                                                          | ![Pipeline view][PipelineView]                                     |
| 2.3  | Create simple new [Gate][REFMeasureGates]                                                                                |                                                                    |
| 2.4  | click on the **3 Dots** ![3 Dots][3Dots] of the QA environment to view its menue                                         | ![3 dots][MeasureEnv3DotsMenue]                                    |
| 2.5  | click on **Add Gate** to create an approver gate                                                                         | ![Gate Dialog 1][MeasureGateDialog1]                               |
|      |                                                                                                                          | ![Gate Dialog 2][MeasureGateDialog2]                               |
|  3   | Explain that we have been shoeing individual roles but we can look across roles and track the value of our delivery work |                                                                    |
| 3.1  | Open the [VSM][REFMeasureVSM] for the project by clicking on **Value Stream** in the Tabmenue                            | ![Measure VSM Tabs][MeasureTabs]                                   |
| 3.2  | The ValueStream of EchoLogic Project is shown                                                                            | ![EchoLogic VSM][VSMEchoLogic]                                     |
| 3.3  | click on a dot to get more information                                                                                   | ![View Dot][VSMSelectDot]                                          |
| 3.4  | This view will give you a complate Audit information of this item                                                        | ![View Dot Details 1](learn/measure/media/VSM_ViewDotDetails1.png) |
|      |                                                                                                                          | ![View Dot Details 2](learn/measure/media/VSM_ViewDotDetails2.png) |
|  4   | click on **Swimlane** ![Swimmlane][TabSwimlane] in tabbar                                                                | ![Measure VSM Tabs][MeasureTabs]                                   |
| 4.1  | The Swimlane view opens and gives more information about the distribution of items                                       | ![Swimlane View][SwimlaneView]                                     |

## [Release](learn/release/index.md)

| Step | Details                                                                                                                                    | Additional Information { width="50%" }        |
|:----:|:-------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
|  1   | [Open Release][ReleaseOpen]                                                                                                                |                                               |
|      | You can switch to Release by either pressing "Let's go to Release" button on its tile                                                      | ![Release Tile lets go][ReleaseTile]          |
|      | Or you can always switch using the central app switcher on the top left of your screen:                                                    | ![Central App Switcher][CentralAppSwitcher]   |
|  2   | The Releases View and a Calender is shown                                                                                                  | ![Releases View][ReleaseViewasList]           |
| 2.1  | Switch to Tiles view by clicking on ![Release tiles icon][ReleaseSwitchToTiles]                                                            | ![Releases as Tiles view][ReleaseViewasTiles] |
|      | So how do we ensure everyone understands the state of our project.  Well we can generate a release readiness report. – Generate the report |                                               |

## [Loop Genie](learn/introduction/genie/index.md)

Explain that we have covered a lot of roles and used a mixture of AI and automation but we can bring it all together with what we call our Loop Genie

| Step | Details                                                                    | Additional Information { width="50%" }                 |
|:----:|:---------------------------------------------------------------------------|:-------------------------------------------------------|
|      | [Open Home Page][HomePage]                                                 |                                                        |
|      | Open Loop Genie by clicking on its Icon on the right side of the Dashboard | ![Loop Genie Icon on Home Page][LoopHomeLoopGenieIcon] |
|      | Loop Genie Dialog opens                                                    | ![Loop Genie Dialog][LoopGenieDialog]                  |
|      | Ask xyz question.                                                          |                                                        |
|      |                                                                            |                                                        |
|      |                                                                            |                                                        |
|      |                                                                            |                                                        |
|      |                                                                            |                                                        |
|      |                                                                            |                                                        |

Explain that we are back to the start and that this has been a quick end to end demo

## Conclusio

If you want to talk more about Loop please have a look at the [About Box, Sidebar and Plug-Ins][IntroductionAboutBoxSidebarPlugins] introduction.

Go back to [Lab and Demo Overview][GoBackToDemoOverview]

---

[GoBackToDemoOverview]: index.md
[ChartFlowOfDemo]: media/demoflow.png

<!-- INTRODUCTION -->

[CentralAppSwitcher]: learn/introduction/media/Loop_central_app_control.png
[IntroductionAboutBoxSidebarPlugins]: learn/introduction/about/index.md
[SwitchToHome]: learn/introduction/media/Loop_Sidebar_SwitchTeamSpace.png
[LoopHomePage]: learn/introduction/index.md#the-home-page
[HomePage]: learn/introduction/media/Loop_Home_Page.png
[HomePageSideBar]: learn/introduction/media/Loop_Home_Page_SideBar.png

[URLDoraMetrics]: https://www.ibm.com/docs/en/devops-velocity/5.1.0?topic=metrics-dora
[3Dots]: media/3Dots.png

[ReleaseTile]: learn/introduction/media/Loop_switch_to_Release.png
[SwitchToTest]: learn/introduction/media/Loop_switch_to_Test.png
[NoTeamSpaceAvailable]: learn/introduction/media/INIT_1_NoTeamspace.png
[LoopHomePageView]: learn/introduction/media/Loop_Home_Page.png
[MetricPlan]: learn/introduction/media/LoopHome_Plan_metrics.png
[MetricBuild]: learn/introduction/media/LoopHome_Build_Metrics.png
[MetricDeploy]: learn/introduction/media/LoopHome_Deploy_Metrics.png
[MetricControl]: learn/introduction/media/LoopHome_Control_metrics.png
[KPIDoraLeadTime]: learn/introduction/media/LoopHome_LeadTime.png
[KPIDoraCycleTime]: learn/introduction/media/LoopHome_CycleTime.png
[LoginDialog]: learn/introduction/media/Loop_Login_Page.png
[SignInButton]: learn/introduction/media/Loop_SignInButton.png
[URLDevOpsLoop]: https://devops.automation.techzone.ibm.com/automation
[WhatWouldYouLikeToDoToday]: learn/introduction/media/Loop_whatwouldyouliketodotoday.png
[LoopHomeLoopGenieIcon]: learn/introduction/genie/media/Loop_Genie_Button.png
[LoopGenieDialog]: learn/introduction/genie/media/Loop_Genie_Dialog.png
[PlanMetric]: learn/introduction/media/LoopHome_Plan_metrics.png
[BuildMetric]: learn/introduction/media/LoopHome_Build_Metrics.png
[DeployMetric]: learn/introduction/media/LoopHome_Deploy_Metrics.png
[ControlMetric]: learn/introduction/media/LoopHome_Control_metrics.png
[LeadTime]: learn/introduction/media/LoopHome_LeadTime.png
[CycleTime]: learn/introduction/media/LoopHome_CycleTime.png
[PlanTile]: learn/introduction/media/Loop_switch_to_Plan.png

<!-- PLAN -->
[PLANopen]: learn/plan/index.md#how-to-switch-to-plan-from-home-page
[ShowMyBoard]: learn/plan/boards/index.md#project-board
[MyWorkBoard]: learn/plan/boards/media/Plan_ProjectBoard_myBoard.png
[ProjectBoardsIcon]: learn/plan/boards/media/Plan_ProjectBoard_Icon.png
[SideBarBoardIcon]: learn/plan/boards/media/Plan_ProjectBoard_Icon.png
[SideBar]: learn/plan/media/Plan_Sidebar_ProjectBoards.png
[BoardMyBoardwithoneentry]: learn/plan/boards/media/Plan_ProjectBoard_myBoard.png
[HowToFilter]: learn/plan/boards/index.md#filter-epics
[FilterBar]: learn/plan/boards/media/Plan_ProjectBoard_Filterbar.png
[ButtonClearFilter]: learn/plan/boards/media/Plan_ProjectBoard_ClearFilterButton.png
[FilterUncheckEpic]: learn/plan/boards/media/Plan_ProjectBoard_Filterbar_UncheckEpic.png
[BoardFiltered]: learn/plan/boards/media/Plan_ProjectBoard_WorkItemsFiltered.png
[WorkItems]: learn/plan/boards/index.md#work-items
[ProjectBoardWorkItems]: learn/plan/boards/media/Plan_ProjectBoard_WorkItems.png
[SelectWorkItem]: learn/plan/boards/index.md#workitem
[BoardSelectWorkItem]: learn/plan/boards/media/PLAN_Boards_SelectWI.png
[BoardShowWorkItemDetail]: learn/plan/workitems/media/PLAN_Board_ShowWI_Detail.png
[ShowCommit]: learn/plan/workitems/index.md#show-commit
[REFWIuseAI]: learn/plan/workitems/index.md#use-ai-in-workitem
[PlanShowCommit]: learn/plan/media/PLAN_Show_GitCommit.png
[PlanShowSCMEntryDetails]: learn/plan/media/Plan_Show_SCM_Entry_Details.png

<!-- PLAN AI -->
[PlanAI]: learn/plan/index.md#ai-assistant
[PlanAIIcon]: learn/plan/ai_assistant/media/PLAN_AI_assistant_Icon.png
[PlanSidebar]: learn/plan/media/PLAN_Sidebar.png
[AcceptTerms]: learn/plan/ai_assistant/media/PLAN_AI_accept_Terms.png
[AIAssistantDialog]: learn/plan/ai_assistant/media/PLAN_AI_Dialog1.png
[AIEnterPrompt]: learn/plan/ai_assistant/media/PLAN_AI_enter_prompt.png
[AINextButton]: learn/plan/ai_assistant/media/PLAN_AI_NextButton.png
[AIGenerateActionItems]: learn/plan/ai_assistant/media/PLAN_AI_Generate_Action_Items.png
[AIApplyingPromptsType]: learn/plan/ai_assistant/media/PLAN_AI_UserInputType.png
[AIResponses]: learn/plan/ai_assistant/media/PLAN_AI_to_create_Items.png
[AISelectButtonBreakDownintoTitles]: learn/plan/ai_assistant/media/PLAN_AI_SelectButton_List.png
[AIResponsesWithCheckboxes]: learn/plan/ai_assistant/media/PLAN_AI_select_items.png
[AISelectedResponses]: learn/plan/ai_assistant/media/PLAN_AI_select_items2.png
[AISelectRecordTypeButton]: learn/plan/ai_assistant/media/PLAN_AI_select_record_type.png
[AISelectWorkitemRecordtype]: learn/plan/ai_assistant/media/PLAN_AI_recordtype_workitem.png
[AIRecordCreationDialogEmpty]: learn/plan/ai_assistant/media/PLAN_AI_recordtype_Dialog1.png
[AIRecordCreationDialogFilled]: learn/plan/ai_assistant/media/PLAN_AI_recordtype_Dialog2.png
[AICreateRecordsButton]: learn/plan/ai_assistant/media/PLAN_AI_create_records_button.png
[AINewlyCreatedRecords]: learn/plan/ai_assistant/media/PLAN_AI_records_created.png
[AIDoneButton]: learn/plan/ai_assistant/media/PLAN_AI_done.png
[AIChatDialog]: learn/plan/ai_assistant/index.md#ai-assistant-chat-dialog
[AIPagewithPrompttypes]: learn/plan/ai_assistant/index.md#ai-assistant-type-of-output
[PlanAICreateRecords]: learn/plan/ai_assistant/index.md#ai-assistant-create-records-from-responses

<!-- CODE -->
[CODEopen]: learn/code/index.md#how-to-switch-to-code-from-home-page
[WCAxExplain1]: learn/code/media/CODE_WCAx_Explain1.png
[WCAExplain2]: learn/code/media/CODE_WCAx_Explain2.png
[CommitWithWI]: learn/code/media/CODE_CommitWithWI.png
[CODEWcaX]: learn/code/index.md#watsonx-code-assistant
[CODEcommitWI]: learn/code/index.md#commit-code-with-wi
[CodeWithWIcommit]: learn/code/media/CODE_CommitWithWI.png
[CommitAndPush]: learn/code/media/Code_Commit_and_Push.png
[GitStagingQuestion]: learn/code/media/Code_Git_Stage_Question.png
[GitFetchQuestion]: learn/code/media/Code_Git_Fetch_Question.png
[CodeGitCloneSuccess]: learn/code/media/Code_Git_Clone_Success.png
[CodeDevContainerView]: learn/code/media/Code_Dev_Container_two_tabs.png
[NoRunningDevContainer]: learn/code/media/Code_No_running_dev_containers.png
[ListOfRunningDevContainer]: learn/code/media/Code_Running_Dev_Containers.png
[LetsGoButton]: learn/code/media/Code_Dev_Container_LetsGo.png
[TerminateButton]: learn/code/media/Code_Dev_Container_Terminate.png
[ListOfAvailableDevContainer]: learn/code/media/Code_Dev_Container_Overview_Page.png
[SettingUpEnv]: learn/code/media/Code_Setting_Up_Environment.png
[WCAxNoRepo]: learn/code/media/Code_WatsonX_Dev_Container_no_Rep.png

<!-- CONTROL -->
[ControlOPEN]: learn/control/index.md#how-to-switch-to-control-from-home-page
[ControlShowUpdate]: learn/control/index.md#show-activity-report
[ControlShowLastCommit]: learn/control/media/CONTROL_ShowLastCommit.png
[ControlListOrgsRepos]: learn/control/media/Control_List_Repo_and_Org.png
[ControlHomePage]: learn/control/media/CONTROL_HomePage_of_DemoEchoLogic.png
[ControlListPullRequests]: learn/control/media/Control_List_Pulls.png
[ControlAllRepoIcon]: learn/control/media/Control_SidebarRepos.png
[ControlExploreOtherOrgRepo]: learn/control/media/Control_List_Explore_Repo_orgs_etc.png
[ControlLearningRepo]: learn/control/media/Control_LearningDataRepo.png
[ControlShowCommit]: learn/control/media/CONTROL_ShowGitCommit.png
[REFControlOpenWithCode]: learn/control/index.md#open-repo-with-code
[ButtonCode]: learn/control/media/Control_CodeButton.png
[ButtonCodeExpanded]: learn/control/media/Control_CodeButtonExpanded.png
[OpenWithCode]: learn/control/media/Control_Open_with_DevOps_Code.png
[SelectFromListDC1]: learn/control/media/Control_Dev_Container_select_from_list.png
[SelectFromListDC2]: learn/control/media/Control_Dev_Container_select_from_list2.png
[CloneButton]: learn/control/media/Control_Code_Clone_Button.png

<!-- BUILD -->
[BuildProcessDetail]: learn/build/media/BUILD_Process_Runs_Details.png
[BuildProcessTemplates]: learn/build/media/BUILD_Template_Process.png
[BuildShowBuildProcess]: learn/build/index.md#build-process-detail
[BuildOpen]: learn/build/index.md#how-to-switch-to-build-from-home-page
[BuildOverviewRunsResults]: learn/build/index.md#build-project-runs
[BuildProjectRunsResults]: learn/build/media/BUILD_Process_Runs_results.png
[BuildProcessTemplatesDetail]: learn/build/media/BUILD_Templates_Process_Detail.png
[BuildProcessTemplatesDefinition]: learn/build/media/BUILD_Templates_Process_Def.png
[BuildShowTemplates]: learn/build/index.md#templates
[BuildShowTemplateDetail]: learn/build/index.md#process-template-detail
[BuildShowTemplateDefinition]: learn/build/media/BUILD_Templates_Process_Def.png
[BuildMetrics]: learn/build/media/Build_Metrics.png
[Build3Buttons]: learn/build/media/Build_3Buttons.png
[BuildProcDetails]: learn/build/media/Build_ProcessLink_in_ProjectsView.png
[BuildRecentRunsMetricsFilter]: learn/build/media/Build_Process_runs_details_metrics_and_filter.png
[BuildTimePeriodFilter]: learn/build/media/Build_Metrics_TimePeriodfilter.png

<!-- DEPLOY -->
[DeployOpen]: learn/deploy/index.md#how-to-switch-to-deploy-from-home-page
[REFDeployOverview]: learn/deploy/index.md#overview
[DeployShowLandingPage]: learn/deploy/index.md#deploy-landing-page
[DeployDashboard]: learn/deploy/media/dashboard.png
[DeployShowProcessWithTest]: learn/deploy/processes/index.md#adding-version-statuses
[DeployComponentProcessPassingTest]: learn/deploy/processes/media/DEPLOY_ComponentProcessFinalWithPassingTest.png
[DeployComponentFinalProcesWithVersionStatus]: learn/deploy/processes/media/DEPLOY_Component_VersionList_withStatus.png
[DeployShowApp]: learn/deploy/applications/media/Deploy_Applications_View.png
[DeployAppEnvList]: learn/deploy/media/DEPLOY_Application_Environmentlist.png
[DeployAppRequestProcessButton]: learn/deploy/media/DEPLOY_Application_RequestProcess.png
[DeployAppProcessRequestSelectProcess]: learn/deploy/media/DEPLOY_Application_Runappprocessdialog1_SelectDeploymentProcess.png
[DeployAppProcessRequestOnlyChanged]: learn/deploy/media/DEPLOY_Application_Runappprocessdialog3_OnlyChanged.png
[DeployAppPocessRequestChooseCompVersionButton]: learn/deploy/media/DEPLOY_Application_Runappprocessdialog4_ChooseCompVersionButton.png
[DeployAppPocessRequestSelectCompVersion1]: learn/deploy/media/DEPLOY_Application_Runappprocessdialog5_SelectCompVersion.png
[DeployAppPocessRequestSelectCompVersion2]: learn/deploy/media/DEPLOY_Application_Runappprocessdialog6_SelectCompVersion.png
[DeployAppPocessRequestSubmitButton]: learn/deploy/media/DEPLOY_Application_Runappprocessdialog7_Submit.png
[DeployRunaDeployment]: learn/deploy/index.md#run-a-deployment
[DeployRequestAprocess]: learn/deploy/index.md#request-a-process
[DeployAppDevEnv]: learn/deploy/media/DEPLOY_AppEnv_DEV.png
[DeployProcessRunning]: learn/deploy/media/DEPLOY_RunningProcess1.png
[DeployProcessRunningExpandAllButton]: learn/deploy/media/DEPLOY_RunningProcess2_ExpandAll.png
[DeployProcessRunning3DotsofStep]: learn/deploy/media/DEPLOY_RunningProcess3_Stepdetails.png
[DeployProcessRunningStepOutputDetails]: learn/deploy/media/DEPLOY_RunningProcess4_StepDetails.png
[DeployViewRunningProcess]: learn/deploy/index.md#view-of-running-process
[DeployAppProcessRunSuccess]: learn/deploy/media/DEPLOY_AppProcessFinishedSuccess.png
[DeployAppEnvwithDeployedVersions]: learn/deploy/media/DEPLOY_Application_EnvironmentResultVersions.png
[DeployResultofRun]: learn/deploy/index.md#result-of-run
[DeployShowPluginsPage]: learn/deploy/index.md#settings
[DeploySettingsIcon]: learn/deploy/media/DEPLOY_SettingsIcon.png
[DeploySettingsAutomationPlugins]: learn/deploy/settings/media/DEPLOY_Settings_AutomationSection.png
[DeploySettingsPluginsList]: learn/deploy/settings/media/DEPLOY_PluginsList.png
[DeploySettingsAutomationSection]: learn/deploy/settings/index.md#plugins
[DeployPlugin3DotsMenue]: learn/deploy/media/DEPLOY_PluginList_3DotsMenue.png
[SBApplicationsIcon]: learn/deploy/media/Deploy_Sidebar_AppIcon.jpg
[APPSallView]: learn/deploy/applications/media/Deploy_Applications_View.png
[AppViewWEnv]: learn/deploy/applications/media/Deploy_Application_View_WithEnv.png
[SwitchToProcessView]: learn/deploy/applications/index.md#show-processes
[AppProcessesTab]: learn/deploy/applications/media/Deploy_Application_ProcessesTab.png
[AppProcessesView]: learn/deploy/applications/media/Deploy_App_Processes_view.png
[AppViewProcess]: learn/deploy/applications/media/Deploy_AppDeploymentProcess.png
[REFSwitchToCompView]: learn/deploy/components/index.md#switch-to-components-view
[SBCompIcon]: learn/deploy/media/Deploy_Sidebar_ComponentsIcon.png
[CompView]: learn/deploy/media/DEPLOY_Components_List.png
[CompDetails]: learn/deploy/components/media/Component_Imported.png
[CompProcessTab]: learn/deploy/components/media/Component_Tabbar_Processes.png
[CompProcesses]: learn/deploy/components/media/Component_Processlist_withentries.png
[REFUseGenie]: learn/deploy/index.md#use-the-deployment-genie
[RunSelectFailingDeployment]: learn/deploy/media/Deploy_RunProc_FailingDeploy.png
[REFRequestAProcess]: learn/deploy/index.md#request-a-process
[RunFailSelectCompVersions]: learn/deploy/media/Deploy_AppRun_SelectedCompVersions.png
[RunFailed]: learn/deploy/media/Deploy_AppRun_ResultFailed.png
[GenieAnalysis]: learn/deploy/media/Deploy_AppProcess_AI_Analysis.png
[Step3DotsMenueWithGenie]: learn/deploy/media/Deploy_AppRun_ResultFailed_Step_3Dots.png
[REFAppProcessView]: learn/deploy/processes/index.md#view-application-processes
[REFCompProcessView]: learn/deploy/processes/index.md#view-component-processes
[REFAppProcesses]: learn/deploy/processes/index.md#application-processes

<!-- TEST -->
[TestOpen]: learn/test/index.md#how-to-switch-to-test-from-home-page
[SectionExecute]: learn/test/media/Test_Sidebar_ExecuteSection.png
[ExecuteScriptList]: learn/test/media/Test_Execute_ScriptList.png
[ButtonRun]: learn/test/media/Test_RunButton.png
[CreateTicketIcon]: learn/test/media/Test_ResultView_FailedTest_CreateTicket.png
[Projecttile]: learn/test/media/Test_Project_Tile.png
[ProjectHomePage]: learn/test/media/Test_Project_Homepage.png
[RunDialog]: learn/test/media/Test_Run_Dialog.png
[ButtonExecute]: learn/test/media/Test_ExecuteButton.png
[RunningScript]: learn/test/media/Test_Execute_ScriptList_runningScript.png
[SectionAnalyze]: learn/test/media/Test_Sidebar_Analyze_Section.png
[ResultsOverview]: learn/test/media/Test_Analyze_ResultOverview.png
[SectionAuthor]: learn/test/media/Test_Sidebar_AuthorSection.png
[TestEditorView]: learn/test/media/Test_TestEditor_View.png
[TestScriptEditor]: learn/test/media/Test_TestEditor_ScriptOpened.png
[TestScriptStepDetails]: learn/test/media/Test_TestEditor_StepDetails.png
[MenueAnalyze]: learn/test/media/Test_Sidebar_Analyze_Menue.png
[ResultsFailedTest]: learn/test/media/Test_ResultView_FailedTest.png
[WICreatedialog]: learn/test/media/Test_Plan_WI_Dialog1.png
[WICreateDetails]: learn/test/media/Test_Plan_WI_Dialog2.png
[ResultLinked]: learn/test/media/Test_Result_Details_with_PlanLink.png
[REFSwitchTestTS]: learn/test/index.md#switch-teamspace-and-project-if-needed
[TestPrjList]: learn/test/media/Test_Show_ProjectList.png
[SwitchTestTS]: learn/test/media/Test_SwitchTS.png
[DataDefView]: learn/test/media/Test_Author_DataDefView.png
[DataSchemas]: learn/test/media/Test_Author_Schemas.png
[DataSchemaView]: learn/test/media/Test_Author_Schema_View.png
[DataPreviewIcon]: learn/test/media/Test_Data_PreviewIcon.png
[DataPreview]: learn/test/media/Test_Data_Preview.png
[GenerateIcon]: learn/test/media/Test_Data_GenerateIcon.png
[GenerateDialog]: learn/test/media/Test_Data_GenerateDialog.png
[ButtonDownload]: media/Button_Download.png
[TestDataFolder]: learn/test/media/Test_Data_DownloadedUnzipped.png
[TestDataFiles]: learn/test/media/Test_Data_DownloadedFiles.png
[TestDataGenerated]: learn/test/media/Test_Data_GeneratedData.png

<!-- MEASURE -->
[MeasureOpen]: learn/measure/index.md#how-to-switch-to-measure-from-home-page
[MeasureEnv3DotsMenue]: learn/measure/media/Measure_Pipeline_Env_3Dotsmenue.png
[MeasureGateDialog1]: learn/measure/media/Measure_Pipeline_Env_CreateGatedialog1.png
[MeasureGateDialog2]: learn/measure/media/Measure_Pipeline_Env_CreateGatedialog2.png
[MeasureTabs]: learn/measure/media/VSM_Tabs.png
[REFMeasurePipelines]: learn/measure/index.md#pipeline
[REFMeasureGates]: learn/measure/index.md#quality-gates
[REFMeasureVSM]: learn/measure/index.md#have-a-look-at-the-value-stream
[VSMEchoLogic]: learn/measure/media/Measure_VSM_EchoLogic.png
[VSMSelectDot]: learn/measure/media/VSM_ViewDot.png
[TabSwimlane]: learn/measure/media/Measure_Swimlane_Tab.png
[SwimlaneView]: learn/measure/media/Measure_Swimlane_view.png
[TabPipeline]: learn/measure/media/Measure_Pipeline_Tab.png
[PipelineView]: learn/measure/media/Measure_PipelineView.png

<!-- RELEASE -->
[ReleaseOpen]: learn/release/index.md#how-to-switch-to-release-from-home-page
[ReleaseViewasList]: learn/release/media/Release_View_asList.png
[ReleaseSwitchToTiles]: learn/release/media/Release_Switch_To_TilesView.png
[ReleaseViewasTiles]: learn/release/media/Release_View_asTiles.png
<!-- [OpenWithVSCode]: learn/control/media/Control_Open_with_VSCode.png
[AllowToOpenVSCode]: learn/control/media/Control_AllowOpenVSCode.png
[SelectTargetFolderforCloning]: learn/code/media/Code_VSCode_clone_targetfolder.png
[CodeEnterUserID]: learn/code/media/Code_VSCode_enterGitUser.png
[CodeEnterPAT]: learn/code/media/Code_VSCode_Enter_PAT.png
[REFPATSection]: learn/control/index.md#access-token
 -->
