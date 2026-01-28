# Plan Lab

Please have a look at the [DevOps Plan documentation][DOCSPlan] for more details.

## Introduction

DevOps Plan is a low‑code, multi-tenant SaaS solution for comprehensive change and issue management, offering customizable workflow automation without requiring deep coding skills. The tool streamlines change tracking, improves issue resolution, and enhances operational efficiency by enabling organizations to tailor workflows and integrate seamlessly with their existing cloud environments.

To learn more about DevOps Plan please have a look at the [documentation][PlanDocumentation].

### How to switch to Plan from Home Page

--8<-- [start:SWITCH2Plan]

| Step | Details                                                                                                  | Additional Information                                         |
|:----:|:---------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
|  1   | You can always switch using the central app switcher on the top left of your screen                      | ![Central App Switcher][CentralAppSwitcher]                    |
|  2   | Or You can switch directly to Plan by using the button/link from What would you like to do today section | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |

--8<-- [end:SWITCH2Plan]

## Demo Data or New Application with Sample Data

--8<-- [start:PlanNewAppWithSample]

| Step | Details                                                                                    | Additional Information                                          |
|:----:|:-------------------------------------------------------------------------------------------|:----------------------------------------------------------------|
|  1   | [How to create a new Application](newapp/index.md)                                         |                                                                 |
|      | If you want to create a new Application and do not want to use the pre-created application |                                                                 |
|      | Please follow the instructions:                                                            | how to [create a new Application with Sample Data][GoToNewApp]  |
|  2   | [Setup Demo Data](setup/index.md)                                                          |                                                                 |
|      | You can use the pre-created Plan application from your Loop and add sample data:           | Follow [this document][GoToSetup] to import Demo data into Plan |

--8<-- [end:PlanNewAppWithSample]

## Let's go with Plan

--8<-- [start:LetsGoPlan]

| Step | Details                                                                                                                        | Additional Information                           |
|:----:|:-------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
|  1   | Select Plan application to use                                                                                                 |                                                  |
|      | If you have not set your default Plan application you will be provided with a screen with all applications you have access to. | ![Plan Applications Page][AppPage]               |
|      | If you have created additional Applications then you will get a list                                                           | ![Plan Applications Page with List][AppPageList] |
|      | Set the provided app as default and press "Let's go" to proceed.                                                               |                                                  |
|  2   | Welcome Page for first time users                                                                                              |                                                  |
|      | If you have logged in the first time into Plan you will get a Welcome Screen:                                                  | ![Welcome Screen][PlanWelcomeScreen]             |
|      | By pressing the button "Explore" a new page is shown which provides an Introduction                                            | ![Plan Introduction page][PlanIntroductionPage]  |
|      | to Plan and the used workflow model for the selected application:                                                              |                                                  |

--8<-- [end:LetsGoPlan]

### Use Home Button to switch to Plan Home Page

--8<-- [start:PlanSwitch2Homepage]

| Step | Details                                                                                                             | Additional Information                       |
|:----:|:--------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
|  1   | Please use the "Home" button on the left sidebar to switch to the Home page for Plan                                | ![Plan Home Page Button][PlanHomePageButton] |
|  2   | View basic information and also the means to switch between Plan applications (My Applications Button on the right) | ![Plan Home page][PlanHomePage]              |
|  3   | The explore options on this page will forward you to the Exploration page mentioned above.                          |                                              |

--8<-- [end:PlanSwitch2Homepage]

### Explore the technical worflow

--8<-- [start:ExploreTechFlow]

| Step | Details                                                                                         | Additional Information                      |
|:----:|:------------------------------------------------------------------------------------------------|:--------------------------------------------|
|  1   | Pressing the button "View"                                                                      | ![view schema button][PlanViewSchemaButton] |
|  2   | will open a new view to the technical details of the used workflow for the selected application | ![Schema Overview][PlanViewSchemaOverview]  |
|  3   | This view provides the used record types, fields, transition matrizes and more.                 |                                             |

--8<-- [end:ExploreTechFlow]

## [AI Assistant](ai_assistant/index.md)

Please follow [this steps for setting up the AI integration](ai_assistant/index.md#ai-assistant-integration-setup) in Plan.

[Learn more how to use the Plan AI Assistant](ai_assistant/index.md#using-the-plan-ai-assistant)

## Work with Boards

[Please follow these instructions to learn more about Boards][GoToPlanBoards].

## Create and customize a new Project

[Please follow these instructions to create a new Project][GoToPlanCreateNewProject].

## Work with Queries

[Please follow these instructions to show how to work with Queries][GoToWorkWithQueries]

## Integrations

### Control/GIT/SCM

- ![PLAN - Show Control/Git Commit Link][ShowCommitLink]

---

[ShowCommitLink]: media/PLAN_Show_GitCommit.png
[AppPage]: media/Plan_Applications_Page.png
[AppPageList]: newapp/media/PLAN_Tenant_AppListFinal.png
[CentralAppSwitcher]: ../introduction/media/Loop_central_app_control.png

 <!-- media/Plan_Applications_page.png -->

[GoToSetup]: setup/index.md
[GoToNewApp]: newapp/index.md
[PlanWelcomeScreen]: media/Plan_welcome_screen.png
[PlanIntroductionPage]: media/Plan_welcome_introduction_screen.png
[PlanHomePageButton]: media/Plan_Home_button.png
[PlanHomePage]: media/Plan_Home_page.png
[PlanViewSchemaButton]: media/Plan_app_view_flow.png
[PlanViewSchemaOverview]: media/Plan_app_view_details.png
[GoToPlanBoards]: boards/index.md
[GoToPlanCreateNewProject]: newproject/index.md
[GoToWorkWithQueries]: queries/index.md

[WhatWouldYouLikeToDoToday]: ../introduction/media/Loop_whatwouldyouliketodotoday.png
[DOCSPlan]: https://www.ibm.com/docs/en/devops-plan
[PlanDocumentation]: https://www.ibm.com/docs/en/devops-plan
