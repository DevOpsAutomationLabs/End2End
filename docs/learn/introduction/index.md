# Introduction

A very short introduction to DevOps Loop.

## Start Here

To use the platform you have to be onboarded onto it. This is normaly done by your administrators. URLs and User names are examples, please check with your admin about the information.

### How to log in

--8<-- [start:HowtoLogin]

| Step | Details                                                                                                                | Additional Information                                                 |
|:----:|:-----------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------|
|  1   | [Open DevOps Loop in Browser][URLDevOpsLoop]                                                                           | example URL= '<https://devops.automation.techzone.ibm.com/automation>' |
|  2   | Enter Your Credentials in the Login Screen <br> Example: **User:** '<demo@devops.loop>' <br>  **Password:** 'Passw0rd' | ![Login Screen][LoginDialog]                                           |
|  3   | Click on the Sign In Button                                                                                            | ![Sign In button][SignInButton]                                        |

--8<-- [end:HowtoLogin]

### The Home Page

--8<-- [start:TheHomePage]

| Step | Details                                                                                                                                        | Additional Information                          |
|:----:|:-----------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------:|
|  1   | After you have been logged in you will be directed to your homepage                                                                            |                                                 |
|  2   | If no **Teamspace** or **Loop** has been created follow: <br> [Creation of a Teamspace and Loops instructions](#setup-a-teamspace-and-loop) | ![No Teamspace available][NoTeamSpaceAvailable] |
|  3   | if a **Teamspace** and **Loop** exists it will provide you an overview about metrics from your Loops                                           | ![Home Page][LoopHomePageView]                  |
|  4   | If you are in a different TeamSpace, click on **TeamSpace Icon** and switch to **Demo**                                                        | ![Switch TeamSpace][SwitchToHome]               |
|  5   | If you are not on the Home Page page, click on **Home Button** in the side bar to switch to the Home Page                                      | ![Switch to Home][HomePageSideBar]              |

--8<-- [end:TheHomePage]

#### Dashboard and Metrics

| Step | Details                                                                                                       | Additional Information           |
|:----:|:--------------------------------------------------------------------------------------------------------------|:---------------------------------|
|  1   | The Home Page provides metrics and dashboards over all of my accessible Loops                                 |                                  |
|  2   | Showing data from Plan - Ratio of Issues created versus closed                                                | ![Plan Metric][MetricPlan]       |
|  3   | Number of Build Jobs failed and successeful finished                                                          | ![Build Metric][MetricBuild]     |
|  4   | Count of Deployments and how many of them were successfull or failed                                          | ![Deploy Metric][MetricDeploy]   |
|  5   | Top contributors in Control                                                                                   | ![Control Metric][MetricControl] |
|  6   | Two DORA (DevOps Research and Assessment) metrics for                                                         |                                  |
| 6.1  | Lead Time: In general, lead-time reflects the time from the start of a project until its final disposition    | ![Lead Time][KPIDoraLeadTime]    |
| 6.2  | Cycle Time: In general, cycle-time reflects the time project elements take to resolve or complete             | ![Cycle Time][KPIDoraCycleTime]  |
| 6.3  | Find out more about [DORA Metrics here](https://www.ibm.com/docs/en/devops-velocity/5.1.0?topic=metrics-dora) |                                  |

### Switching to Capabilities

|     | Details                                                                                                                   | Additional Information                                         |
|:---:|:--------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
|     | There are several ways to switch to the capabilites (Plan, _Model_, Control, Code, Build, Deploy, Test, Measure, Release) |                                                                |
|  1  | by using the central app switcher on the top left Central Solution/App Switcher                                           | ![Central App Switcher][CentralAppSwitcher]                    |
|  2  | by using the "What would you like to do today?" Menue on the botton of the Dashboard                                      | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |
| 2.1 | Only the capabilities fully integrated into Teamspaces and Loops are shown                                                |                                                                |

## How to use Loop Genie

--8<--
learn/introduction/genie/index.md:HowToUseLoopGenie
--8<--

## Setup a Teamspace and Loop

In the case of an empty environment you need to create a new Teamspace and at least one Loop.

### Create a TeamSpace

Please follow the [Instructions for creating Teamspace(s)][InstructionsCreateTeamSpace] for more details.

--8<--
learn/introduction/teamspace/index.md:CreateNewTS
--8<--

When the creation of a TeamSpace is finished you will be forwarded to your empty loops home page for your new TeamSpace.

![Empty Loops Homepage][LoopHomePageCreateNewLoop]

### Create a Loop

You need to create at least one Loop in your TeamSpace, please follow the [Instructions for creation of a new Loop][InstructionsCreateLoop] for more details.

--8<--
learn/introduction/loops/index.md:CreateNewLoop
--8<--

## Conclusio

Have a look at the [About Box, Sidebar, Plug-Ins and Settings][IntroAboutBoxSidebarPlugins] introduction which also gives information how setup Loop wide AI integration.

Go back to [Lab and Demo Overview][GoBackToDemoOverview]

---

[LoopHomePageView]: media/Loop_Home_Page.png
[LoopHomePageCreateNewLoop]: loops/media/NoLoops_inthis_TeamSpace.png
[HomePageSideBar]: media/Loop_Home_Page_SideBar.png
[InstructionsCreateTeamSpace]: teamspace/index.md
[InstructionsCreateLoop]: loops/index.md
[GoBackToDemoOverview]: ../index.md#introduction
[IntroAboutBoxSidebarPlugins]: about/index.md
[URLDevOpsLoop]: https://devops.automation.techzone.ibm.com/automation
[LoginDialog]: media/Loop_Login_Page.png
[SignInButton]: media/Loop_SignInButton.png
[MetricPlan]: media/LoopHome_Plan_metrics.png
[MetricBuild]: media/LoopHome_Build_Metrics.png
[MetricDeploy]: media/LoopHome_Deploy_Metrics.png
[MetricControl]: media/LoopHome_Control_metrics.png
[KPIDoraLeadTime]: media/LoopHome_LeadTime.png
[KPIDoraCycleTime]: media/LoopHome_CycleTime.png
[WhatWouldYouLikeToDoToday]: media/Loop_whatwouldyouliketodotoday.png
[CentralAppSwitcher]: media/Loop_central_app_control.png
[NoTeamSpaceAvailable]: media/INIT_1_NoTeamspace.png
[SwitchToHome]: media/Loop_Sidebar_SwitchTeamSpace.png

[TSMenue]: teamspace/media/Loop_Teamspace_01_Menue.png
[TSCreateNewDialog]: teamspace/media/Loop_Teamspace_02_CreateNew_Dialog.png
[TSAddTeammember]: teamspace/media/Loop_Teamspace_03_CreateNew_searchMember.png
[TSTeamMemberAdded]: teamspace/media/Loop_Teamspace_04_CreateNew_MemberAdded.png
[TSCreationStarted]: teamspace/media/Loop_Teamspace_05_CreateNew_creation.png
[TSCreateionFinished]: teamspace/media/Loop_Teamspace_06_CreateNew_success.png
[TSIcon]: teamspace/media/Loop_TeamSpaceIcon.png
[TSCreateTSentry]: teamspace/media/Loop_CreateTeamSpace.png
[TSCreateButton]: teamspace/media/Loop_Create_TS_Button.png
[GenieButton]: genie/media/Loop_Genie_Button.png
[GenieDialog]: genie/media/Loop_Genie_Dialog.png
[GenieFocusSelection]: genie/media/Loop_Genie_Dialog_FocusSelection.png

[LoopHome]: loops/media/NoLoops_inthis_TeamSpace.png
[CreateNewDialog]: loops/media/Create_New_Loop_Dialog.png
[WithLearningData]: loops/media/Create_New_Loop_with_Learning_Data.png
[CreateNewLoopButton]: loops/media/Loop_CreateNewLoop_Button.png
[NextButton]: ../../media/Button_NEXT.png
[SearchAddMember]: loops/media/Loop_Teamspace_09_CreateNewLoop_searchMember.png
[AddedMember]: loops/media/Loop_Teamspace_10_CreateNewLoop_MemberAdded.png
[CreateButton]: loops/media/Loop_CreateNewLoop_Button.png
[LoopCreation]: loops/media/New_Loop_Creation_Progress.png
[LoopCreatedSuccess]: loops/media/New_Loop_Creation_Success.png
[GoToMyLoops]: loops/media/Loops_GoToMyLoops_Button.png
