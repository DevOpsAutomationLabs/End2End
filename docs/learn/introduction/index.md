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
|  2   | If no Teamspace has been created follow the [Creation of a Teamspace and Loops instructions](#creation-of-a-teamspace-and-loops)      | ![No Teamspace available][NoTeamSpaceAvailable] |
|  3   | If a Teamspace is available with a precrated Loop, explore the Environment following the next sections                                |                                                 |

#### Dashboard and Metrics

| Step | Details | Additional Information           |
|:----:|:--------|:---------------------------------|
|      |         | ![Plan Metric][MetricPlan]       |
|      |         | ![Build Metric][MetricBuild]     |
|      |         | ![Deploy Metric][MetricDeploy]   |
|      |         | ![Control Metric][MetricControl] |
|      |         | ![Lead Time][KPIDoraLeadTime]    |
|      |         | ![Cycle Time][KPIDoraCycleTime]  |
|      |         |                                  |

#### What would you like to do today?

| Step | Details                                                                     | Additional Information                                         |
|:----:|:----------------------------------------------------------------------------|:---------------------------------------------------------------|
|      | You can switch directly to the capability/solution by using the button/link | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |
|      |                                                                             |                                                                |
|      |                                                                             |                                                                |
|      |                                                                             |                                                                |

#### Central Solution/App Switcher

| Step | Details                                              | Additional Information                      |
|:----:|:-----------------------------------------------------|:--------------------------------------------|
|      | or by using the central app switcher on the top left | ![Central App Switcher][CentralAppSwitcher] |
|      |                                                      |                                             |
|      |                                                      |                                             |
|      |                                                      |                                             |

## Creation of a Teamspace and Loops

In the case of an empty environment you need to create a new Teamspace and at least one Loop.

### Create a TeamSpace

Please follow the [Instructions for creating Teamspace(s)][InstructionsCreateTeamSpace]

When the creation of a TeamSpace is finished you will be forwarded to your empty loops home page for your new TeamSpace.

![Empty Loops Homepage][LoopHomePageCreateNewLoop]

### Create a Loop

You need to create at least one Loop in your TeamSpace, please follow the [Instructions for creation of a new Loop][InstructionsCreateLoop]

## How to use Loop Genie

![Loop Genie Icon on Home Page][LoopHomeLoopGenieIcon]
![Loop Genie Dialog][LoopGenieDialog]

## Conclusio

If you want to talk more about Loop please have a look at the [About Box, Sidebar and Plug-Ins][IntroAboutBoxSidebarPlugins] introduction.

Go back to [Lab and Demo Overview][GoBackToDemoOverview]

---

[LoopHomePageView]: media/Loop_Home_Page.png
[LoopHomePageCreateNewLoop]: loops/media/Loop_Teamspace_07_CreateNewLoop_Home.png
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
