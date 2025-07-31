# Demo Flow

![Demo Flow][ChartFlowOfDemo]

## Overview

This Step by Step Demo Guide will give you compact Instructions how to demo DevOps Loop. For more detailed information about the Capabilities and Steps links to the indepth enablement Guide has been added.

## [Loop](learn/introduction/index.md)

| Step  | Details                                                                                          | Additional Information { width="50%" }                       |
|:-----:|:-------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|
|   1   | [Open DevOps Loop in Browser][URLDevOpsLoop]                                                     | URL= 'https://devops.automation.techzone.ibm.com/automation' |
|  1.1  | Enter Your Credentials in the Login Screen                                                       |                                                              |
|       | <br> **User:** 'demo@devops.loop' <br>  **Password:** 'Passw0rd'                                 | ![Login Screen][LoginDialog]                                 |
|  1.2  | Click on the **Sign In** Button                                                                  | ![Sign In button][SignInButton]                              |
|  1.3  | After login you will be on the [Home Page][LoopHomePage] of Loop                                 | ![Home Page][HomePage]{ width="50% }                         |
|  1.4  | If you are in a different TeamSpace                                                              |                                                              |
|       | click on **TeamSpace Icon** and switch to **Demo**                                               | ![Switch TeamSpace][SwitchToHome]                            |
|  1.5  | If you are not on the Home Page page,                                                            |                                                              |
|       | click on **Home Button** in the side bar to switch to the Home Page                              | ![Switch to Home][HomePageSideBar]                           |
|   2   | The Home Page provides metrics and dashboards over all of my accessible Loops                    |                                                              |
|  2.1  | Showing data from Plan - Ratio of Issues created versus closed                                   | ![Plan Metric][PlanMetric]                                   |
|  2.3  | Number of Build Jobs failed and successeful finished                                             | ![Build Metric][BuildMetric]                                 |
|  2.3  | Count of Deployments and how many of them were successfull or failed                             | ![Deploy Metric][DeployMetric]                               |
|  2.4  | Top contributors in Control                                                                      | ![Control Metric][ControlMetric]                             |
|  2.5  | Two DORA (DevOps Research and Assessment) metrics for                                            |                                                              |
| 2.5.1 | Lead Time: In general, reflects the time from the start of a project until its final disposition | ![Lead Time][LeadTime]                                       |
| 2.5.2 | Cycle Time: In general, reflects the time project elements take to resolve or complete           | ![Cycle Time][CycleTime]                                     |
| 2.5.3 | Find out more about:                                                                             | [DORA Metrics here][URLDoraMetrics]                          |

## [Plan](learn/plan/index.md)

### Plan Overview

| Step | Details                                                                                                 | Additional Information { width="50%" }                   |
|:----:|:--------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|
|  1   | [Open Plan][PLANopen]                                                                                   |                                                          |
|      | You can switch to Plan by either pressing "Let's go to Plan" button on its tile                         | ![Plan Tile lets go][PlanTile]                           |
|      | Or you can always switch using the central app switcher on the top left of your screen                  | ![Central App Switcher][AppSwitcher]                     |
|  2   | [Show My board][ShowMyBoard]                                                                            |                                                          |
|      | To open the board use the Project Board icon ![Board Icon in sidebar][ProjectBoardsIcon] on the sidebar | ![sidebar][SidebarBoardIcon]                             |
|      | The initial view is your My Board view which will show worktitems that are assigned to you              | ![myWork Board][MyWorkBoard]                             |
|  3   | [Show how to filter out Epics][HowToFilter]                                                             | ![Board filter][FilterBar]                               |
| 3.1  | Uncheck **Epic** from the list of Types                                                                 | ![Uncheck Epic][FilterUncheckEpic]                       |
| 3.2  | Click on an empty field to trigger filter                                                               |                                                          |
| 3.3  | Filtered Board (Epics are hidden) is shown                                                              | ![Filtered Board][BoardFiltered]                         |
| 3.4  | Clear the filter by pressing **Clear** Button                                                           | ![Clear Filter][ButtonClearFilter]                       |
|  4   | [Show all work items][WorkItems]                                                                        |                                                          |
| 4.1  | Click on the **Work Items** Tab to view all Work Items (WI) of the project                              | ![Board workitems][ProjectBoardWorkItems]                |
|  5   | [Select and Show the details of a work item][SelectWorkItem]                                            | ![Select WorkItem from Board][BoardSelectWorkItem]       |
|      |                                                                                                         | ![Show Workitem Details][BoardShowWorkItemDetail]        |
|  6   | [Scroll down to show SCM Events Section and click on it][ShowCommit]                                    | ![PLAN - Show Control/Git Commit Link][PlanShowCommit]   |
|      | Click on the first entry to show the link between work item to code changes                             | ![PLAN - Show SCM commit entry][PlanShowSCMEntryDetails] |
|      | and explain how easy it is to have traceability                                                         | ![CONTROL - Show Git Commit Details][ControlShowCommit]  |

### Use Plan AI Assistant

| Step | Details                                                                                    | Additional Information { width="50%" }                     |
|:----:|:-------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
|  1   | [More about AI Assistant][PlanAI]                                                          |                                                            |
|  2   | Select the AI Assistant Icon ![AI Assistant Icon][PlanAIIcon] from the Sidebar             | ![Sidebar][PlanSidebar]                                    |
|  3   | Accept the Terms of Service                                                                | ![Accept Terms][AcceptTerms]                               |
|  4   | [The AI Assistant Chat Dialog opens][AIChatDialog]                                         | ![AI Assistant Dialog][AIAssistantDialog]                  |
|  5   | Enter Now a prompt, you can use the example prompts or use the following one:              | ![Enter Prompt][AIEnterPrompt]                             |
|      | Provide the necessary steps to implement a Keycloak solution in our enterprise application |                                                            |
|  6   | Click on the **Next** Button to proceed                                                    | ![Next Button][AINextButton]                               |
|  7   | [The Applying Prompts page is shown with several types][AIPagewithPrompttypes]             | ![Applying Prompts][AIApplyingPromptsType]                 |
|  8   | Select **Generate Action Items** (click into the circle with the check mark)               | ![Generate Action Items][AIGenerateActionItems]            |
|  9   | This will generate a set of responses                                                      | ![AI Responses][AIResponses]                               |
|  10  | Click the **Select** Button and select **Break Down into Titles**                          | ![Select Button][AISelectButtonBreakDownintoTitles]        |
|  11  | This will convert the list of responses to a list with checkboxes                          | ![AI Responses with Checkboxes][AIResponsesWithCheckboxes] |
|  12  | Select a few you like from the list                                                        | ![AI Responses selected][AISelectedResponses]              |
|  14  | [Create Records from Responses][PlanAICreateRecords]                                       |                                                            |
|  15  | Click the **Select Record Type** Button                                                    | ![Select Record Type][AISelectRecordTypeButton]            |
|  16  | to select **Workitem** from the list                                                       | ![Select Workitem][AISelectWorkitemRecordtype]             |
|  17  | In the next Dialog  select the right **Project** and **Workitem Type**                     | ![Record Creation Dialog1][AIRecordCreationDialogEmpty]    |
|  18  | for example **Project**: Echologic and **Type**: Epic                                      | ![Record Creation Dialog2][AIRecordCreationDialogFilled]   |
|  19  | Press the **Create Records** Button to get the **Epics** created.                          | ![Create Records Button][AICreateRecordsButton]            |
|  20  | A few seconds later all newly created records are now created                              | ![Newly created Records][AINewlyCreatedRecords]            |
|  21  | Press **Done**  to finish using the AI Assistant                                           | ![Done Button][AIDoneButton]                               |

<!-- [Open a workitem and use AI to create description and exploratory test information](plan/boards/index.md#use-ai-in-workitem) -->

## [Control - Work with Repository](learn/control/index.md#open-repo-with-vscode)

| Step | Details                                                                               | Additional Information { width="50%" }                     |
|:----:|:--------------------------------------------------------------------------------------|:-----------------------------------------------------------|
|  1   | Click on **CODE** Button ![code button expaned][ButtonCode] to get an expanded Menue. | ![Code Button Expanded][ButtonCodeExpanded]                |
|  2   | Click on **Open with VSCode**                                                         | ![open with vscode][OpenWithVSCode]                        |
|  3   | In the following **Dialog Window** allow to open Link                                 | ![Allow to open VSCode by link][AllowToOpenVSCode]         |
|  4   | VSCode will ask you for a location to clone the folder                                | ![Target Folder for cloning][SelectTargetFolderforCloning] |
|  5   | VSCode will ask for Control Userid, enter **demo@devops.loop**                        | ![Code asking for Userid][CodeEnterUserID]                 |
|  6   | VSCode will ask for Control Token, enter your **Access Token**                        | ![Code asking for Password or Token][CodeEnterPAT]         |
|  7   | which you created in the [Access Token Section][REFPATSection]                        |                                                            |

## [Code](learn/code/index.md)

| Step | Details                                                                     | Additional Information { width="50%" }                                            |
|:----:|:----------------------------------------------------------------------------|:----------------------------------------------------------------------------------|
|  1   | Explain that we showed the link between a work item and the code in control |                                                                                   |
|  2   | [Switch to CODE][CODEopen] if it is not visible                             | **NOTE: use VScode for now, Switch to DevOps Code later when WCAx is integrated** |
|  3   | [Use WCA to explain code and generate some new code][CODEWcaX]              | ![Explain code part 1][WcaXexplain1]                                              |
|      |                                                                             | ![Explain code part 2][WcaXexplain2]                                              |
|  4   | [Push code and add comment with work item number][CODEcommitWI]             | ![Commit Code with WI][CodeWithWIcommit]                                          |
|  5   | [Open Control and show the update](#control)                                |                                                                                   |

## [Control](learn/control/index.md)

| Step | Details                                                                       | Additional Information { width="50%" }                  |
|:----:|:------------------------------------------------------------------------------|:--------------------------------------------------------|
|  1   | [Open Control][ControlOPEN]                                                   |                                                         |
|  2   | [Show the Update][ControlShowUpdate] in the activity report of the repository | ![Show Last Commit][ControlShowLastCommit]              |
|  3   | Git Commit Details                                                            | ![CONTROL - Show Git Commit Details][ControlShowCommit] |

## [Build](learn/build/index.md)

| Step | Details                                                             | Additional Information { width="50%" }                             |
|:----:|:--------------------------------------------------------------------|:-------------------------------------------------------------------|
|  1   | [Open Build][BuildOpen]                                             |                                                                    |
|  2   | [Show overview on build runs and results][BuildOverviewRunsResults] | ![Project Build Runs and Results][BuildProjectRunsResults]         |
|  3   | [Show build process][BuildShowBuildProcess]                         | ![Build Process Detail][BuildProcessDetail]                        |
|  4   | [Show Templates][BuildShowTemplates]                                | ![Templates - Process][BuildProcessTemplates]                      |
|  5   | [Show Build Template Detail][BuildShowTemplateDetail]               | ![Templates - Process Details][BuildProcessTemplatesDetail]        |
|  6   | [Show Build Template Definition][BuildShowTemplateDefinition]       | ![Templates - Process Definition][BuildProcessTemplatesDefinition] |
|      |                                                                     |                                                                    |

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

| Step | Details                                                                                                     | Additional Information { width="50%" }           |
|:----:|:------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
|  1   | Explain that you are now playing the role of a tester                                                       |                                                  |
|  2   | [Open Test][TestOpen]                                                                                       |                                                  |
| 2.1  | You can switch to Test by either pressing "Let's go to Test" button on its tile                             | ![Test Tile lets go][SwitchToTest]               |
| 2.2  | Or you can always switch using the central app switcher on the top left of your screen                      | ![Central App Switcher][CentralAppSwitcher]      |
|  3   | [Switch Teamspace and select Project if needed][REFSwitchTestTS]                                            |                                                  |
| 3.1  | Should you see a different Teamspace or Project than expected (Demo and EchoLogic), click on Teamspace Icon | ![Teamspace Switcher][SwitchTestTS]              |
| 3.2  | and Select **Demo**. A list of Projects is shown:                                                           | ![Projectlist is shown][TestPrjList]             |
| 3.3  | click on **EchoLogic** Project to open landing page                                                         | ![Open EchoLogic Project][Projecttile]           |
| 3.4  | Show the test landing page and metrics                                                                      | ![Test Landing Page][ProjectHomePage]            |
|  6   | Run a test                                                                                                  |                                                  |
| 6.1  | click on **Execute** Section in the Sidebar                                                                 | ![Test Exec Section][SectionExecute]             |
| 6.2  | List of Scripts is shown                                                                                    | ![List of executable Scripts][ExecuteScriptList] |
| 6.3  | click on **Run Button** on the right of Script **DemoTest**                                                 | ![Run Button][ButtonRun]                         |
| 6.4  | Dialog is opened to select a Browser, use the default settings                                              | ![Select Browser][RunDialog]                     |
| 6.5  | Click on **Execute** Button to start Test Execution                                                         | ![Execute Button][ButtonExecute]                 |
| 6.6  | Run will take a few moments                                                                                 | ![Running Script][RunningScript]                 |
|  7   | Show the analysis of the test results                                                                       |                                                  |
| 7.1  | click on **Analyze** section in Sidebar to get list of Menue                                                | ![Analyze Section][SectionAnalyze]               |
| 7.2  | click on **Results** to get Results View                                                                    | ![Results Overview][ResultsOverview]             |
|  8   | Show how we can create or edit a test                                                                       |                                                  |
| 8.1  | click on **Author** section on **Test Editor** menue entry                                                  | ![Test Author Section][SectionAuthor]            |
| 8.2  | Test Editor View opens and select the **DemoTestFail** script                                               | ![Test Editor View][TestEditorView]              |
| 8.3  | Test Script will be shown                                                                                   | ![Test Script][TestScriptEditor]                 |
| 8.4  | click on the **verification** step to view step details                                                     | ![Step Details][TestScriptStepDetails]           |
|  9   | Run a new test that will fail                                                                               |                                                  |
| 9.1  | click on **Execute** Section in the Sidebar                                                                 | ![Test Exec Section][SectionExecute]             |
| 9.2  | List of Scripts is shown                                                                                    | ![List of executable Scripts][ExecuteScriptList] |
| 9.3  | click on **Run Button** on the right of Script **DemoTestFail**                                             | ![Run Button][ButtonRun]                         |
| 9.4  | Testexecution will take a few moments.                                                                      |                                                  |
|  10  | Create a defect in Plan and show that is has all the data automatically                                     |                                                  |
| 10.1 | Switch to Results View using the **Analyze** Section menue                                                  | ![Analyze Section menue][MenueAnalyze]           |
| 10.2 | In the **Results** View select the **DemoTestFail** run                                                     | ![Results Overview][ResultsOverview]             |
| 10.3 | Click on **DevOps Plan** ![Create ticket icon][CreateTicketIcon] Icon on the right side of the row          | ![Failed Test][ResultsFailedTest]                |
| 10.4 | A WorkItem creation Dialog opens, select **Workitem** in the Type field                                     | ![CreateWI][WICreatedialog]                      |
| 10.5 | Select Project "EchoLogic",  Workitem Type "Defect" and enter a Title                                       | ![CreateWI Enter Title][WICreateDetails]         |
| 10.6 | In the **Results** View click on the **DemoTestFail** name to get a Detailed View                           | ![Result Details with Plan Link][ResultLinked]   |
|  11  | Generate test data                                                                                          |                                                  |
|  12  | Explain that everything is traceable                                                                        |                                                  |

## [Measure](learn/measure/index.md)

| Step | Details                                                                                                                  | Additional Information { width="50%" } |
|:----:|:-------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
|  1   | [Open Measure][MeasureOpen]                                                                                              |                                        |
|      | Explain that we have built, deployed and tested so now we need to coordinate releases                                    |                                        |
|      | Show and talk about pipeline(s) with environments and Gates                                                              |                                        |
|      | Create simple new gate to show usage of metrics                                                                          |                                        |
|      | Explain that we have been shoeing individual roles but we can look across roles and track the value of our delivery work |                                        |
|      | Open the VSM for the project                                                                                             |                                        |
|      | Show the audit information of a dot                                                                                      |                                        |
|      | Show the swimlane view.                                                                                                  |                                        |

## [Release](learn/release/index.md)

| Step | Details                                                                                                                                    | Additional Information { width="50%" }      |
|:----:|:-------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
|  1   | [Open Release][ReleaseOpen]                                                                                                                |                                             |
|      | You can switch to Release by either pressing "Let's go to Release" button on its tile                                                      | ![Release Tile lets go][ReleaseTile]        |
|      | Or you can always switch using the central app switcher on the top left of your screen:                                                    | ![Central App Switcher][CentralAppSwitcher] |
|      | Show release overview with calendar                                                                                                        |                                             |
|      | So how do we ensure everyone understands the state of our project.  Well we can generate a release readiness report. – Generate the report |                                             |

## Genie

Explain that we have covered a lot of roles and used a mixture of AI and automation but we can bring it all together with what we call our Loop Genie

| Step | Details                                                                    | Additional Information { width="50%" }                 |
|:----:|:---------------------------------------------------------------------------|:-------------------------------------------------------|
|      | [How to use Loop Genie][REFUseLoopGenie]                                   |                                                        |
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

[LoginDialog]: learn/introduction/media/Loop_Login_Page.png
[SignInButton]: learn/introduction/media/Loop_SignInButton.png
[URLDevOpsLoop]: https://devops.automation.techzone.ibm.com/automation

[LoopHomeLoopGenieIcon]: learn/introduction/intro/media/LOOP_HomePage_LoopGenieButton.png
[LoopGenieDialog]: learn/introduction/intro/media/LOOP_HomePage_LoopGenieDialog.png
[GoBackToDemoOverview]: index.md

[HomePage]: learn/introduction/media/Loop_Home_Page.png
[HomePageSideBar]: learn/introduction/media/Loop_Home_Page_SideBar.png
[SwitchToHome]: learn/introduction/media/Loop_Sidebar_SwitchTeamSpace.png
[PlanMetric]: learn/introduction/media/LoopHome_Plan_metrics.png
[BuildMetric]: learn/introduction/media/LoopHome_Build_Metrics.png
[DeployMetric]: learn/introduction/media/LoopHome_Deploy_Metrics.png
[ControlMetric]: learn/introduction/media/LoopHome_Control_metrics.png
[LeadTime]: learn/introduction/media/LoopHome_LeadTime.png
[CycleTime]: learn/introduction/media/LoopHome_CycleTime.png
[PLANopen]: learn/plan/index.md#how-to-switch-to-plan-from-home-page
[PlanTile]: learn/introduction/media/Loop_switch_to_Plan.png
[AppSwitcher]: learn/introduction/media/Loop_central_app_control.png
[ShowMyBoard]: learn/plan/boards/index.md#project-board
[MyWorkBoard]: learn/plan/boards/media/Plan_ProjectBoard_myBoard.png
[ProjectBoardsIcon]: learn/plan/boards/media/Plan_ProjectBoard_Icon.png
[SidebarBoardIcon]: learn/plan/media/Plan_Sidebar_ProjectBoards.png
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
[PlanShowCommit]: learn/plan/media/PLAN_Show_GitCommit.png
[PlanShowSCMEntryDetails]: learn/plan/media/Plan_Show_SCM_Entry_Details.png
[ControlShowCommit]: learn/control/media/CONTROL_ShowGitCommit.png

[PlanAI]: learn/plan/index.md#ai-assistant
[PlanAIIcon]: learn/plan/media/PLAN_AI_assistant_Icon.png
[PlanSidebar]: learn/plan/media/PLAN_Sidebar.png
[AcceptTerms]: learn/plan/media/PLAN_AI_accept_Terms.png
[AIAssistantDialog]: learn/plan/media/PLAN_AI_Dialog1.png
[AIEnterPrompt]: learn/plan/media/PLAN_AI_enter_prompt.png
[AINextButton]: learn/plan/media/PLAN_AI_NextButton.png
[AIGenerateActionItems]: learn/plan/media/PLAN_AI_Generate_Action_Items.png
[AIApplyingPromptsType]: learn/plan/media/PLAN_AI_UserInputType.png
[AIResponses]: learn/plan/media/PLAN_AI_to_create_Items.png
[AISelectButtonBreakDownintoTitles]: learn/plan/media/PLAN_AI_SelectButton_List.png
[AIResponsesWithCheckboxes]: learn/plan/media/PLAN_AI_select_items.png
[AISelectedResponses]: learn/plan/media/PLAN_AI_select_items2.png
[AISelectRecordTypeButton]: learn/plan/media/PLAN_AI_select_record_type.png
[AISelectWorkitemRecordtype]: learn/plan/media/PLAN_AI_recordtype_workitem.png
[AIRecordCreationDialogEmpty]: learn/plan/media/PLAN_AI_recordtype_Dialog1.png
[AIRecordCreationDialogFilled]: learn/plan/media/PLAN_AI_recordtype_Dialog2.png
[AICreateRecordsButton]: learn/plan/media/PLAN_AI_create_records_button.png
[AINewlyCreatedRecords]: learn/plan/media/PLAN_AI_records_created.png
[AIDoneButton]: learn/plan/media/PLAN_AI_done.png
[AIChatDialog]: learn/plan/index.md#ai-assistant-chat-dialog
[AIPagewithPrompttypes]: learn/plan/index.md#ai-assistant-type-of-output
[PlanAICreateRecords]: learn/plan/index.md#ai-assistant-create-records-from-responses
[CODEopen]: learn/code/index.md#how-to-switch-to-code-from-home-page
[CODEWcaX]: learn/code/index.md#watsonx-code-assistant
[WcaXexplain1]: learn/code/media/CODE_WCAx_Explain1.png
[WcaXexplain2]: learn/code/media/CODE_WCAx_Explain2.png
[CODEcommitWI]: learn/code/index.md#commit-code-with-wi
[CodeWithWIcommit]: learn/code/media/CODE_CommitWithWI.png
[ControlOPEN]: learn/control/index.md#how-to-switch-to-control-from-home-page
[ControlShowUpdate]: learn/control/index.md#show-activity-report
[ControlShowLastCommit]: learn/control/media/CONTROL_ShowLastCommit.png
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

[DeployOpen]: learn/deploy/index.md#how-to-switch-to-deploy-from-home-page
[REFDeployOverview]: learn/deploy/index.md#overview
[DeployShowLandingPage]: learn/deploy/index.md#deploy-landing-page
[DeployDashboard]: learn/deploy/media/dashboard.png
[DeployShowProcessWithTest]: learn/deploy/index.md#adding-version-statuses
[DeployComponentProcessPassingTest]: learn/deploy/media/DEPLOY_ComponentProcessFinalWithPassingTest.png
[DeployComponentFinalProcesWithVersionStatus]: learn/deploy/media/DEPLOY_Component_VersionList_withStatus.png
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
[DeploySettingsAutomationPlugins]: learn/deploy/media/DEPLOY_Settings_AutomationSection.png
[DeploySettingsPluginsList]: learn/deploy/media/DEPLOY_PluginsList.png
[DeploySettingsAutomationSection]: learn/deploy/index.md#plugins
[DeployPlugin3DotsMenue]: learn/deploy/media/DEPLOY_PluginList_3DotsMenue.png
[TestOpen]: learn/test/index.md#how-to-switch-to-test-from-home-page
[MeasureOpen]: learn/measure/index.md#how-to-switch-to-measure-from-home-page
[ReleaseOpen]: learn/measure/index.md#how-to-switch-to-measure-from-home-page
[ReleaseTile]: learn/introduction/media/Loop_switch_to_Release.png
[CentralAppSwitcher]: learn/introduction/media/Loop_central_app_control.png
[LoopHomePage]: learn/introduction/index.md#the-home-page
[IntroductionAboutBoxSidebarPlugins]: learn/introduction/intro/index.md
[ChartFlowOfDemo]: media/demoflow.png
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

[ButtonCode]: learn/control/media/Control_CodeButton.png
[ButtonCodeExpanded]: learn/control/media/Control_CodeButtonExpanded.png
[OpenWithVSCode]: learn/control/media/Control_Open_with_VSCode.png
[AllowToOpenVSCode]: learn/control/media/Control_AllowOpenVSCode.png
[SelectTargetFolderforCloning]: learn/code/media/Code_VSCode_clone_targetfolder.png
[CodeEnterUserID]: learn/code/media/Code_VSCode_enterGitUser.png
[CodeEnterPAT]: learn/code/media/Code_VSCode_Enter_PAT.png
[REFUseLoopGenie]: learn/introduction/index.md#how-to-use-loop-genie
[REFPATSection]: learn/control/index.md#access-token

[SwitchToTest]: learn/introduction/media/Loop_switch_to_Test.png
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
[URLDoraMetrics]: https://www.ibm.com/docs/en/devops-velocity/5.1.0?topic=metrics-dora
[REFAppProcessView]: learn/deploy/index.md#view-application-processes
[REFCompProcessView]: learn/deploy/index.md#view-component-processes
[REFAppProcesses]: learn/deploy/index.md#application-processes
