# Introduction

TODO: update flow, app references and screenshots.
_**TODO: update flow, app references to EchoLogic and screenshots**_

## Start Here

To use the platform you have to be onboarded onto it. This is normaly done by your administrators. For this lab we have provided you with pre created accounts.

### How to log in

| Step | Details                                                                                                     | Additional Information                                       |
|:----:|:------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|
|  1   | [Open DevOps Loop in Browser][URLDevOpsLoop]                                                                | URL= 'https://devops.automation.techzone.ibm.com/automation' |
|  2   | Enter Your Credentials in the Login Screen <br> **User:** 'demo@devops.loop' <br>  **Password:** 'Passw0rd' | ![Login Screen][LoginDialog]                                 |
|  3   | Click on the Sign In Button                                                                                 | ![Sign In button][SignInButton]                              |

### The Home Page

| Step | Details                                                                                                                               | Additional Information                          |
|:----:|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
|  1   | After you have been logged in you will be directed to your homepage and it will provide you an overview about metrics from your Loops | ![Home Page][LoopHomePageView]                  |
| 1.1  | If you are in a different TeamSpace, click on **TeamSpace Icon** and switch to **Demo**                                               | ![Switch TeamSpace][SwitchToHome]               |
| 1.2  | If you are not on the Home Page page, click on **Home Button** in the side bar to switch to the Home Page                             | ![Switch to Home][HomePageSideBar]              |
|  2   | If no **Teamspace** or **Loop** has been created follow the [Creation of a Teamspace and Loops instructions](#creation-of-a-teamspace-and-loops)      | ![No Teamspace available][NoTeamSpaceAvailable] ![Empty Loops Homepage][LoopHomePageCreateNewLoop] |
|  3   | If a Teamspace is available with a precreated Loop, explore the Environment following the next sections                                |  [Next Section](#dashboard-and-metrics)  |

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

There are 3 ways to switch to the capabilites (Plan, Control, Code, Build, Deploy, Test, Measure, Release), via the [Solutions Tab](#solutions-tab), the [What would you like to do today?](#what-would-you-like-to-do-today) Menue on the botton of the Dashboard and the [Central App Switcher](#central-solutionapp-switcher)

#### Solutions Tab

Click on the Homepage on the **Solutions** Tab to view all Capabilities.

![Solutions View][SolutionsView]

#### What would you like to do today?

You can switch directly to the capability/solution by using the button/link.

![What would you like to do today?][WhatWouldYouLikeToDoToday]

Only the capabilities fully integrated into Teamspaces and Loops are shown

#### Central Solution/App Switcher

By using the central app switcher on the top left

![Central App Switcher][CentralAppSwitcher]

## How to use Loop Genie

![Loop Genie Icon on Home Page][LoopHomeLoopGenieIcon]
![Loop Genie Dialog][LoopGenieDialog]

## Creation of a Teamspace and Loops

In the case of an empty environment you need to create a new Teamspace and at least one Loop.

### Create a TeamSpace

Please follow the [Instructions for creating Teamspace(s)][InstructionsCreateTeamSpace]

When the creation of a TeamSpace is finished you will be forwarded to your empty loops home page for your new TeamSpace.

![Empty Loops Homepage][LoopHomePageCreateNewLoop]

### Create a Loop

You need to create at least one Loop in your TeamSpace, please follow the [Instructions for creation of a new Loop][InstructionsCreateLoop]

## Conclusio

Have a look at the [About Box, Sidebar, Plug-Ins and Settings][IntroAboutBoxSidebarPlugins] introduction which also gives information how setup Loop wide AI integration.

Go back to [Lab and Demo Overview][GoBackToDemoOverview]

---

[LoopHomePageView]: media/Loop_Home_Page.png
[LoopHomePageCreateNewLoop]: loops/media/Loop_Teamspace_07_CreateNewLoop_Home.png
[HomePageSideBar]: media/Loop_Home_Page_SideBar.png
[InstructionsCreateTeamSpace]: teamspace/index.md
[InstructionsCreateLoop]: loops/index.md
[GoBackToDemoOverview]: ../index.md#introduction
[LoopHomeLoopGenieIcon]: media/../intro/media/LOOP_HomePage_LoopGenieButton.png
[LoopGenieDialog]: intro/media/LOOP_HomePage_LoopGenieDialog.png
[IntroAboutBoxSidebarPlugins]: intro/index.md
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
[SolutionsView]: media/Loop_Home_Page_Solutions.png
