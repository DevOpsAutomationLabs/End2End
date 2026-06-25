# Measure Lab

TODO: #34 update flow, app references and screenshots

## Introduction

--8<-- [start:Intro]

> NOTE: DevOps Measure is based on DevOps Velocity, please have a look at the [documentation][VelocityDocumentation] for more details.

Use DevOps Measure to  manage your DevOps value streams.

The value stream provides a strategic window into your life-cycle workflow while simultaneously enabling you to drill-down and monitor individual elements. The elements including builds, pull requests, issues, and tests that is collected from tools that you integrate into Measure. Individual elements are represented graphically by small circles called dots. Dots can provide information from logically related tools, such as issues linked to Source control management (SCM).

The pipeline feature enables you to drive releases by using application-focused methods. Add applications to logical environments and let Measure generate the deployment plans required to deploy the applications.

--8<-- [end:Intro]

## How to switch to Measure from Home Page

--8<-- [start:SWITCH2Measure]

| Step | Details                                                                                                     | Additional Information                                         |
|:----:|:------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
|  1   | You can always switch using the central app switcher on the top left of your screen                         | ![Central App Switcher][CentralAppSwitcher]                    |
|  2   | Or You can switch directly to Measure by using the button/link from What would you like to do today section | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |

--8<-- [end:SWITCH2Measure]

## Let's go with Measure

--8<-- [start:LetsGoMeasure]

### Value Stream List

--8<-- [start:ValueStreamList]

|   | Details                                                                                  | Additional Information           |
|:-:|:-----------------------------------------------------------------------------------------|:---------------------------------|
|   | Please select "All Value Streams" to get a list of all Value Streams you have access to: | ![List of all VSM][ListOfAllVSM] |

**_NOTE: Before we proceed here a short intro what a Value Stream is._**

--8<-- [end:ValueStreamList]

### What is a Value Stream?

--8<-- [start:WhatIsVSM]

A value stream represents the objects and activities that you employ to deliver customer value, from initial concept to final delivered project.

The value stream provides a strategic window into your project workflow and enables you to drill-down to individual objects. The objects, such as builds, pull requests, issues, and tests, come from tools that you integrate into the value stream. Individual objects are represented graphically by small circles called dots. Dots frequently provide information from logically related tools, such as issues linked to source control commits.

When you create a value stream, a minimal value stream is configured and displayed on the Value stream view. The highest level of a value stream is a phase.
Phases represent important, organizational parts of the value stream, such as "Planning," or "Development." On the Value stream view, processing is done in left-right order. For example, your first phase might be for planning and contain items created in an issue tracking system. Your next phase, used for development, can track source control activity related to the issues, and any builds triggered by the activity. Your final phase, used for deployment, might track the related build artifacts as they move through your testing environments toward production.

Phases contain stages that define process flow within a phase. A development phase that integrates a source control tool might contain an In Progress stage followed by In Review and Merged stages. When you customize a value stream, you define the phases and stages and their order.

Stages are containers for dots. Dots represent units of work from HCL Accelerate or tools that are integrated into the value stream. Git commits or Jira issues, to take just two, are represented by individual dots. Work items, such as commits and builds, can be combined into individual dots. A dot's position in the value stream conveys important information about the object. Dots in a stage named Merged might represent items merged into Git repositories. An item's shape and color convey information about the item's type and status. A dot outlined in red, for example, might mean the item is past schedule. When dots change state, they move to new stages in near-real time.

Finally, when you click on a dot, the displayed card provides information about the work items, including their history, and provides links to associated tools.

--8<-- [end:WhatIsVSM]

### Have a look at the Value Stream

--8<-- [start:LookAtVSM]

|   | Details                                                                                                                                                                                                   | Additional Information                                         |
|:-:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
|   | Please click on a VSM Link to open the value stream and explore the shown data, eg. ***Emerald..***. This will open the Dot View of the Emerald Product Team - Accounting VSM:                                  | ![Emerald Dot View][VSMEmerald]                                |
|   | The "Emerald .." VSM contains Demo Data to give you a good insight how Measure works. When you click on one Dot it will open a popup with additional informatio and a full history of changes (lifecycle) | ![Emerald Item Details][EmeraldItemDetails] |

--8<-- [end:LookAtVSM]

### Swimlanes

--8<-- [start:Swimlanes]

|   | Details                                                                                                | Additional Information                                    |
|:-:|:-------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|
|   | Click on the top right corner of your screen on the "Swimlane" link to get another view onto the data: | ![Emerald Swimlanes][measure-swimlanes] |

The Swimlane page displays the work items in a variety of ways allowing the team to view distribution of work by team members, priority of work, type of work, along with work items associated to a particular ownder, priority, type, release or sprint.

--8<-- [end:Swimlanes]

### Pipeline

--8<-- [start:Pipeline]

|   | Details                                                                                     | Additional Information                                  |
|:-:|:--------------------------------------------------------------------------------------------|:--------------------------------------------------------|
|   | Click on the top right corner of your screen on the "Pipeline" link to view your pipelines: | ![Emerald Pipeline][measure-pipeline] |

When you create a value stream, a corresponding pipeline is automatically configured. And a pipeline is a sequence of stages that retrieve input and run applications and jobs. Pipelines accept input from source control management (SCM) repositories or other external applications, such as DevOps Deploy, Azure DevOps as well as API driven which allows organizations to update the pipeline inventory using API calls, and more.

#### Quality Gates

--8<-- [start:QualityGates]

Gates ensure that releases cannot be executed in an environment until the gate rule is satisfied. A gate is a condition that determines whether an application version can be deployed into the environment based on some assessment criteria. A pipeline may have some environments with gates and some without gates. A gate condition (or the assessment criteria) is called a rule.

|   | Details                                                                    | Additional Information                                      |
|:-:|:---------------------------------------------------------------------------|:------------------------------------------------------------|
|   | Click on the Gate symbol on the QA column to view the criteria:            | ![Emerald Gates Prod][measure-gates-prod] |
|   | If you click on the Prod column additional gating criteria has been added: | ![Emerald Gates QA][measure-gates-qa]     |

--8<-- [end:QualityGates]

--8<-- [end:Pipeline]

### Review VSM

--8<-- [start:ReviewVSM]

|   | Details                                                                                                                                     | Additional Information                                  |
|:-:|:--------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|
|   | Now have a look at your Loops value stream view. If you have created a new workitem in Plan you will see it in the dot view. Search for it. | ![VSM Item Detail][measure-vsm-item] |
|   | If not, try it out and create a new Defect in Plan and then look for it in this VSM view                                                    |                                                         |

--8<-- [end:ReviewVSM]

--8<-- [end:LetsGoMeasure]

## Insight

--8<-- [start:Insight]

|   | Details                                                                                                                                                                                       | Additional Information                                     |
|:-:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
|   | Measure provides an Insight view (Dashboards) to gain additional information about your value streams. Click on the ![Insight Icon][measure-insight-icon] to open the Insight view: | ![Insight Home][measure-insight-home]            |
|   | Click on "All Dashboards" to view all available existing Dashboards to you:                                                                                                                   | ![All Dashboards][measure-all-dashboards] |
| | In this view you will see two existing dashboards. Click each tile and have a look at the provided graphics. |
| | Delivery Performance: | ![Delivery performance][measure-delivery-perf] |
| | Delivery Quality: | ![Delivery Quality][measure-delivery-quality] |

--8<-- [end:Insight]

## Settings and more

--8<-- [start:SettingsAndMore]

### Create User Access Key

An User Access Key, also known as Access Token, or Personal Access Token (short PAT) is needed to be able to access Measure data or capabilities.

--8<-- [start:PATMeasure]

| Step | Details                                                                                                    | Additional Information                              |
|:----:|:-----------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
|      | click on the **Settings** ![Settings][ButtonSettings] Link on the top right of your screen to get a menu  | ![Measure top right menubar][MeasureToprightMenue] |
|      | click on **My Profile** ![My Profile][MeasureMyProfileLink] to view the Profile settings                   | ![My Settings Menu][MeasureSettingsMenue]          |
|      | A list of User Access Keys (or PAT) is shown                                                               | ![Measure List of UAK or PAT][MeasurePATList]       |
|      | Click on the **Create User Access Key** ![Create UAK Button][MeasureNewPATButton] and a new Dialog appears | ![UAK Dialog][MeasureNewPATDialog]                  |
|      | Provide a name for the UAK/PAT and click **Create** Button to get the token                                | ![Measure New UAK][MeasureNewPATMessage]            |
|      | **COPY and PASTE** the key into a secure storage for further usage, then close the dialog                  |                                                     |
|      | The newly created UAK/PAT is shown                                                                         | ![new UAK is shown][MeasurePATListUpdated]          |

--8<-- [end:PATMeasure]

--8<-- [end:SettingsAndMore]

---

[GoBackToDemoOverview]: ../index.md
[GoBackToParentIndex]: ../index.md#measure
[NextLab]: ../index.md#release
[WhatWouldYouLikeToDoToday]: ../introduction/media/Loop_whatwouldyouliketodotoday.png
[CentralAppSwitcher]: ../introduction/media/Loop_central_app_control.png
[VSMEmerald]: media/Measure_Emerald_VSM_DotView.png
[VelocityDocumentation]: https://www.ibm.com/docs/en/devops-velocity
[MeasureToprightMenue]: media/Measure_Profile_Settings_Help_Bar.png
[ButtonSettings]: ../../media/Button_Settings.png
[MeasureMyProfileLink]: media/Measure_MyProfile_Link.png
[MeasureSettingsMenue]: media/Measure_Settings_Menue.png
[MeasurePATList]: media/Measure_PAT_List.png
[MeasureNewPATButton]: media/Measure_Create_User_Access_Key_Button.png
[MeasureNewPATDialog]: media/Measure_Create_PAT_Dialog.png
[MeasureNewPATMessage]: media/Measure_Create_PAT_Result_Message.png
[MeasurePATListUpdated]: media/Measure_PAT_newly_Created.png
[ListOfAllVSM]: media/Measure_AllVSM_List.png
[EmeraldItemDetails]: media/Measure_Emerald_ItemDetails.png
[measure-swimlanes]: media/Measure_Emerald_Swimlanes.png
[measure-pipeline]: media/Measure_Emerald_Pipeline.png
[measure-gates-prod]: media/Measure_Emerald_Gates_Prod.png
[measure-gates-qa]: media/Measure_Emerald_Gates_QA.png
[measure-vsm-item]: media/Measure_Pizza_ItemDetails.png
[measure-insight-icon]: media/Measure_Insight_Icon.png
[measure-insight-home]: media/Measure_Insight_Home.png
[measure-all-dashboards]: media/Measure_Insight_allDashboards.png
[measure-delivery-perf]: media/Measure_Insight_DeliveryPerformance.png
[measure-delivery-quality]: media/Measure_Insights_DeliveryQuality.png
