# Introduction

A very short introduction to DevOps Loop.

## Start Here

--8<-- [start:StartHere]

To use the platform you have to be onboarded onto it. This is normally done by your administrators. URLs and User names are examples, please check with your admin about the information.

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

| Step | Details                                                                                                                         |             Additional Information              |
|:----:|:--------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------:|
|  1   | After you have been logged in you will be directed to your homepage                                                             |                                                 |
|  2   | If no **Teamspace** or **Loop** has been created follow: <br> [Creation of a Teamspace and Loops instructions][CreateTSandLoop] | ![No Teamspace available][NoTeamSpaceAvailable] |
|  3   | if a **Teamspace** and **Loop** exists it will provide you an overview about metrics from your Loops                            |         ![Home Page][LoopHomePageView]          |
|  4   | To switch between Teamspaces follow this guide: [Switching between Teamspaces][SwitchTeamSpaces]                                |                                                 |

--8<-- [end:TheHomePage]

#### Switch between Teamspaces and back to Home

--8<-- [start:SwitchTS]

| Step | Details                                                                                                   |       Additional Information       |
|:----:|:----------------------------------------------------------------------------------------------------------|:----------------------------------:|
|      | If you are in a different teamspace, click on **teamspace Icon** and switch to **Demo**                   | ![Switch teamspace][SwitchToHome]  |
|      | If you are not on the Home Page page, click on **Home Button** in the side bar to switch to the Home Page | ![Switch to Home][HomePageSideBar] |

--8<-- [end:SwitchTS]

#### Dashboard and Metrics

--8<-- [start:DashboardMetrics]

| Step | Details                                                                                                       | Additional Information           |
|:----:|:--------------------------------------------------------------------------------------------------------------|:---------------------------------|
|  1   | The Home Page provides metrics and dashboards over all of accessible Loops                                    |                                  |
|  2   | Showing data from Plan - Ratio of Issues created versus closed                                                | ![Plan Metric][MetricPlan]       |
|  3   | Number of Build Jobs failed and successful finished                                                           | ![Build Metric][MetricBuild]     |
|  4   | Count of Deployments and how many of them were successfull or failed                                          | ![Deploy Metric][MetricDeploy]   |
|  5   | Top contributors in Control                                                                                   | ![Control Metric][MetricControl] |
|  6   | Two DORA (DevOps Research and Assessment) metrics for                                                         |                                  |
| 6.1  | Lead Time: In general, lead-time reflects the time from the start of a project until its final disposition    | ![Lead Time][KPIDoraLeadTime]    |
| 6.2  | Cycle Time: In general, cycle-time reflects the time project elements take to resolve or complete             | ![Cycle Time][KPIDoraCycleTime]  |
| 6.3  | Find out more about [DORA Metrics here](https://www.ibm.com/docs/en/devops-velocity/5.1.0?topic=metrics-dora) |                                  |

--8<-- [end:DashboardMetrics]

### Switching to Capabilities

--8<-- [start:SwitchingCapabilities]

|     | Details                                                                                                                   | Additional Information                                         |
|:---:|:--------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
|     | There are several ways to switch to the capabilites (Plan, _Model_, Control, Code, Build, Deploy, Test, Measure, Release) |                                                                |
|  1  | by using the central app switcher on the right side of your screen                                                        | ![Central App Switcher][CentralAppSwitcher]                    |
|  2  | by using the "What would you like to do today?" Menu on the bottom of the Dashboard                                       | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |
| 2.1 | Only the capabilities fully integrated into Teamspaces and Loops are shown                                                |                                                                |

--8<-- [end:SwitchingCapabilities]

--8<-- [end:StartHere]

## How to use Loop Genie

--8<-- [start:HowToUseLoopGenie]

--8<--
learn/introduction/genie/index.md:HowToUseLoopGenie
--8<--

--8<-- [end:HowToUseLoopGenie]

## Setup a Teamspace and Loop

--8<-- [start:SetupTsAndLoop]

In the case of an empty environment you need to create a new Teamspace and at least one Loop.

### Create a teamspace

Please follow the [Instructions for creating Teamspace(s)][InstructionsCreateTeamSpace] for more details.

--8<--
learn/introduction/teamspace/index.md:CreateTeamspace
--8<--

|   | Details                                                                                                                  | Additional Information                             |
|:-:|:-------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
|   | When the creation of a teamspace is finished you will be forwarded to your empty loops home page for your new teamspace. | ![Empty Loops Homepage][LoopHomePageCreateNewLoop] |

### Create a Loop

You need to create at least one Loop in your teamspace, please follow the [Instructions for creation of a new Loop][InstructionsCreateLoop] for more details.

--8<--
learn/introduction/loops/index.md:CreateNewLoop
--8<--

--8<-- [end:SetupTsAndLoop]

---

[LoopHomePageView]: media/intro-loop-home-page.png
[LoopHomePageCreateNewLoop]: loops/media/intro-loops-no-loops-inthis-team-space.png
[HomePageSideBar]: media/intro-loop-home-page-side-bar.png
[InstructionsCreateTeamSpace]: teamspace/index.md
[InstructionsCreateLoop]: loops/index.md
[URLDevOpsLoop]: https://devops.automation.techzone.ibm.com/automation
[LoginDialog]: media/intro-loop-login-page.png
[SignInButton]: media/intro-loop-sign-in-button.png
[MetricPlan]: media/intro-loop-home-plan-metrics.png
[MetricBuild]: media/intro-loop-home-build-metrics.png
[MetricDeploy]: media/intro-loop-home-deploy-metrics.png
[MetricControl]: media/intro-loop-home-control-metrics.png
[KPIDoraLeadTime]: media/intro-loop-home-lead-time.png
[KPIDoraCycleTime]: media/intro-loop-home-cycle-time.png
[WhatWouldYouLikeToDoToday]: media/intro-loop-whatwouldyouliketodotoday.png
[CentralAppSwitcher]: media/intro-loop-central-app-control.png
[NoTeamSpaceAvailable]: media/intro-1-no-teamspace.png
[SwitchToHome]: media/intro-loop-sidebar-switch-team-space.png
[TSInitCreateButton]: teamspace/media/intro-teamspace-loop-initial-create-ts-button.png
[TSMenue]: teamspace/media/intro-teamspace-loop-teamspace-01-menue.png
[TSCreateNewDialog]: teamspace/media/intro-teamspace-loop-teamspace-02-create-new-dialog.png
[TSCreateNewScreen]: teamspace/media/intro-teamspace-create-ts-screen.png
[TSCreateTSIconColor]: teamspace/media/intro-teamspace-create-ts-icon.png
[TSAddTeammember]: teamspace/media/intro-teamspace-loop-teamspace-03-create-new-search-member.png
[TSTeamMemberAdded]: teamspace/media/intro-teamspace-loop-teamspace-04-create-new-member-added.png
[TSCreationStarted]: teamspace/media/intro-teamspace-loop-teamspace-05-create-new-creation.png
[TSCreateionFinished]: teamspace/media/intro-teamspace-loop-teamspace-06-create-new-success.png
[TSIcon]: teamspace/media/intro-teamspace-loop-team-space-icon.png
[TSCreateTSentry]: teamspace/media/intro-teamspace-loop-create-team-space.png
[TSCreateButton]: teamspace/media/intro-teamspace-loop-create-ts-button.png
[NextButton]: ../../media/common-button-next.png
[GoBackToCreateALoop]: #create-a-loop
[DOCSLoopTS]: https://www.ibm.com/docs/en/devops-loop/2.0.2?topic=administration-teamspace-management

[GenieDialog]: genie/media/intro-genie-loop-genie-dialog.png
[GenieFocusSelection]: genie/media/intro-genie-loop-genie-dialog-focus-selection.png

[LoopHome]: loops/media/intro-loops-no-loops-inthis-team-space.png
[CreateNewDialog]: loops/media/intro-loops-create-new-loop-dialog.png
[WithLearningData]: loops/media/intro-loops-create-new-loop-with-learning-data.png
[CreateNewLoopButton]: loops/media/intro-loops-loop-create-new-loop-button.png
[SearchAddMember]: loops/media/intro-loops-loop-teamspace-09-create-new-loop-search-member.png
[AddedMember]: loops/media/intro-loops-loop-teamspace-10-create-new-loop-member-added.png
[CreateButton]: loops/media/intro-loops-loop-create-new-loop-button.png
[LoopCreation]: loops/media/intro-loops-new-loop-creation-progress.png
[LoopCreatedSuccess]: loops/media/intro-loops-new-loop-creation-success.png
[GoToMyLoops]: loops/media/intro-loops-loops-go-to-my-loops-button.png
[DOCSWorkWithLoops]: https://www.ibm.com/docs/en/devops-loop/2.0.2?topic=working-loops

[CreateTSandLoop]: #setup-a-teamspace-and-loop
[SwitchTeamSpaces]: #switch-between-teamspaces-and-back-to-home

[GenieButton]: genie/media/intro-genie-loop-genie-button.png
