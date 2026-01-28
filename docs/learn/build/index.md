# Build Lab

## Introduction

## How to switch to Build from Home Page

--8<-- [start:SWITCH2Build]

| Step | Details                                                                                                   | Additional Information                                         |
|:----:|:----------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
|      | You can always switch using the central app switcher on the top left of your screen                       | ![Central App Switcher][CentralAppSwitcher]                    |
|      | Or You can switch directly to Build by using the button/link from What would you like to do today section | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |

--8<-- [end:SWITCH2Build]

## Overview

### Build Project Runs

--8<-- [start:ProjectBuildRunResults]

| Step | Details                                                                                             | Additional Information { width="50%" }                     |
|:----:|:----------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
|      | The initial page shown in Build is the Project build runs page                                      |                                                            |
|      | Click on *Triangle* to show results of most recent builds                                           | ![Project Build Runs and Results][BuildProjectRunsResults] |
|      | Additional metrics like Build & Source activities and Unit test results are shown on the right side | ![Show Build Metrics][BuildMetrics]                        |
|      | On top of the list 3 Buttons, **Create**, **Import** and **View Inactive/Active** are shown         | ![Create Import View Buttons][Build3Buttons]               |

--8<-- [end:ProjectBuildRunResults]

### Build Process Detail

--8<-- [start:BuildProcDetail]

| Step | Details                                                                                             | Additional Information { width="50%" }                                             |
|:----:|:----------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------|
|      | Click on one of the link to view the details of all runs                                            | ![Process details][BuildProcDetails]                                               |
|      | Shows overview on most recent build runs and their results                                          | ![Build Process Detail][BuildProcessDetail]                                        |
|      | additional information are the success rate of all builds, Build & Source activity and test results | ![Build Process recent runs and metrics with filter][BuildRecentRunsMetricsFilter] |
|      | The time period can be changed for the metrics using the filter control                             | ![Filter for Time Period to be shown][BuildTimePeriodFilter]                       |

--8<-- [end:BuildProcDetail]

## Templates

### Project Templates

--8<-- [start:ProjectTemplates]

![Templates - Projects][BuildProjectTemplates]

--8<-- [end:ProjectTemplates]

### Process Templates

--8<-- [start:ProcessTemplates]

| Step | Details                      | Additional Information { width="50%" }        |
|:----:|:-----------------------------|:----------------------------------------------|
|      | Show Build Process Templates | ![Templates - Process][BuildProcessTemplates] |

--8<-- [end:ProcessTemplates]

#### Process Template Detail

--8<-- [start:ProcessDetailsTemplates]

| Step | Details                            | Additional Information { width="50%" }                      |
|:----:|:-----------------------------------|:------------------------------------------------------------|
|      | Show Build Process Template Detail | ![Templates - Process Details][BuildProcessTemplatesDetail] |

--8<-- [end:ProcessDetailsTemplates]

#### Process Template Definition

--8<-- [start:ProcessDefTemplates]

| Step | Details                                | Additional Information { width="50%" }                             |
|:----:|:---------------------------------------|:-------------------------------------------------------------------|
|      | Show Build Process Template Definition | ![Templates - Process Definition][BuildProcessTemplatesDefinition] |

--8<-- [end:ProcessDefTemplates]

### Source Templates

--8<-- [start:TemplatesSource]

| Step | Details               | Additional Information { width="50%" }     |
|:----:|:----------------------|:-------------------------------------------|
|      | Show Source Templates | ![Templates - Source][BuildSoureTemplates] |

--8<-- [end:TemplatesSource]

### Job Templates

--8<-- [start:TemplatesJobs]

| Step | Details            | Additional Information { width="50%" } |
|:----:|:-------------------|:---------------------------------------|
|      | Show Job Templates | ![Templates - Jobs][BuildJobTemplates] |

--8<-- [end:TemplatesJobs]

#### Job Template Steps

--8<-- [start:TemplatesJobSteps]

| Step | Details        | Additional Information { width="50%" }            |
|:----:|:---------------|:--------------------------------------------------|
|      | Show Job Steps | ![Templates - Jobs Steps][BuildJobTemplatesSteps] |

--8<-- [end:TemplatesJobSteps]

#### Job Template Step Detail

--8<-- [start:TemplatesJobStepDetail]

| Step | Details               | Additional Information { width="50%" }                        |
|:----:|:----------------------|:--------------------------------------------------------------|
|      | Show Job Step Details | ![Templates - Jobs Step Detail][BuildJobTemplatesStepsDetail] |

--8<-- [end:TemplatesJobStepDetail]

## Access Token

Access Token (also known as Personal Access Token, short PAT) are needed for external access to DevOps Build to read, create and update data or run jobs.

--8<-- [start:PATBuild]

| Step | Details                                                                                                       | Additional Information                                    |
|:----:|:--------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|
|      | For external access to the build functions you need to provide an Access Token                                |                                                           |
|      | To create a new token please switch to the **System** ![System][BuildSideBarSystem] settings from the Sidebar | ![Build Sidebar][BuildSidebar]                            |
|      | System Settings view is shown.                                                                                | ![System Settings][BuildSystemSettings]                   |
|      | Click on **Auth token** ![auth Token][BuildPATSettings]                                                       | ![Security Settings][BuildSecuritySettings]               |
|      | A new view with existing Access tokens is shown                                                               | ![List of existing PAT][BuildPATList]                     |
|      | Click on **Create Auth token** ![Create PAT Button][BuildGeneratePATButton] Button and a new Dialog is shown  | ![Create PAT dialog][BuildPATDialog]                      |
|      | Fill in the required fields for User, Expiration and a comment then press the **Save** Button                 | ![Save Button][ButtonSave]                                |
|      | An updated Authorization Token List view is shown with new token                                              | ![Updated list][BuildPATListUpdated]                      |
|      | Copy new Access Token and use in external tool                                                                | ![New PAT details](media/Build_New_Authtoken_Details.png) |

--8<-- [end:PATBuild]

---

[WhatWouldYouLikeToDoToday]: ../introduction/media/Loop_whatwouldyouliketodotoday.png
[CentralAppSwitcher]: ../introduction/media/Loop_central_app_control.png
[BuildProjectRunsResults]: media/BUILD_Process_Runs_results.png
[BuildProcessDetail]: media/BUILD_Process_Runs_Details.png
[BuildProjectTemplates]: media/BUILD_Template_Process.png
[BuildProcessTemplates]: media/BUILD_Template_Process.png
[BuildProcessTemplatesDetail]: media/BUILD_Templates_Process_Detail.png
[BuildProcessTemplatesDefinition]: media/BUILD_Templates_Process_Def.png
[BuildSoureTemplates]: media/BUILD_Template_Source.png
[BuildJobTemplates]: media/BUILD_Template_Jobs.png
[BuildJobTemplatesSteps]: media/BUILD_Templates_Process_JobSteps.png
[BuildJobTemplatesStepsDetail]: media/BUILD_Templates_Process_JobStepDetail.png
[BuildMetrics]: media/Build_Metrics.png
[Build3Buttons]: media/Build_3Buttons.png
[BuildProcDetails]: media/Build_ProcessLink_in_ProjectsView.png
[BuildRecentRunsMetricsFilter]: media/Build_Process_runs_details_metrics_and_filter.png
[BuildTimePeriodFilter]: media/Build_Metrics_TimePeriodfilter.png
[BuildSidebar]: media/Build_Sidebar.png
[BuildSideBarSystem]: media/Build_Sidebar_System_Link.png
[BuildGeneratePATButton]: media/Build_Create_AuthToken_Button.png
[BuildSystemSettings]: media/Build_System_Settings.png
[BuildSecuritySettings]: media/Build_System_Security_Settings.png
[BuildPATList]: media/Build_AuthToken_List.png
[BuildPATDialog]: media/Build_Create_AuthToken_Dialog.png
[ButtonSave]: ../../media/Button_Save.png
[BuildPATListUpdated]: media/Build_AuthToken_List_Updated.png
[BuildPATSettings]: media/Build_Security_AuthToken_Settings.png