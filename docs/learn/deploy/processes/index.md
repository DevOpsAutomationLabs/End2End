# Processes

## Overview

TODO: talk about processes

### Types of Processes

#### Generic Processes

TODO: talk about generic processes and for what they are good for

#### Application Processes

[Detailed Documentation on Application Processes][DOCAppProccesses]

Application processes, like component processes, are created with the process editor. You use application processes to deploy or to roll back components, define the orchestration of the deployment of components. Means if there are dependencies between components deploy them sequentially, if no dependency exists do it in parallel.

##### View Application Processes

--8<-- [start:ViewAppProcesses]

| Step | Details                                         | Additional Information { width="50%" }   |
|:----:|:------------------------------------------------|:-----------------------------------------|
|      | [Switch to Applications View][APPSallView]      |                                          |
|      | [Open EchoLogic App][AppViewWithEnv]            |                                          |
|      | [Switch to Processes View][SwitchToProcessView] |                                          |
|      | Available application processes are shown       | ![Application Processes][AppProcessList] |
|      |                                                 |                                          |

--8<-- [end:ViewAppProcesses]

#### Component Processes

TODO: talk about component processes and what is it good for

##### View Component Processes

--8<-- [start:ViewComponentProcesses]

[Switch to Components View][REFSwitchToCompView]

[View Component Processes][REFCompProcessesView]

A freshly created component does not have any processes:

![component processes][DeployComponentProcessesListEmpty]

Every Component needs at least one (1) process. To create one press the Create Process Button ![Create new Process Button][DeployComponentCreateNewProcessButton]

![Component Process - Dialog][DeployComponentCreateProcessDialog]

TODO: talk about process details

--8<-- [end:ViewComponentProcesses]

### Process Designer

It will show you the process designer for a new process:

![Process Designer][DeployProcessDesigner]

#### Process Designer Sidebar

TODO: talk about sidebar

![Process Designer Sidebar][DeployComponentProcessDesignerSidebar]

Drag Drop a step onto the canvas.

![Dragged a Step onto the canvas][DeployProcessDesignerAddStepp]

Configure the step:

![Step properties 1][DeployProcessDesignerStepProperties1]
![Step properties 2][DeployProcessDesignerStepProperties2]

In this example the shell step requires to have some script/commands added into the shell script field:

![Shell Script1][DeployProcessDesignerStepShellScript1]
![Shell Script2][DeployProcessDesignerStepShellScript2]

#### Final Process Diagram

![Deploy Process Diagram Application Page][DeployComponentFinalProcess]

#### Adding Version Statuses

![Process Designer - sidebar add version status][DeployProcesDesignerSidebarAddVersionStatus]
![process designer - step added add version status][DeployProcessDesignerAddedVersionStatus]
![process designer - add version status properites][DeployProcessDesignerAddedVersionStatusProperties]

##### Final Process Diagrams (Passing and Failing tests)

![Process Designer - Final Process with passed Test][DeployComponentProcessPassingTest]
![Process Designer - Final Process with failing Test][DeployComponentProcessFailingTest]

Now we have additional deployment processes. One for passing a test and one for failing a test. Both processes will set the appropiate version tag about status of test.

![Component with Deployment Process passing and failing][DeployComponentProcessesList]

Result in the Versionlist of the component:
![Status added to version][DeployComponentFinalProcesWithVersionStatus]

---

[APPSallView]: ../applications/index.md#switch-to-applications-view

[DeployProcessDesigner]: media/DEPLOY_Component_ProcessEditor.png
[DeployComponentProcessDesignerSidebar]: media/DEPLOY_Component_ProcessEditor_Sidebar.png
[DeployProcessDesignerAddStepp]: media/DEPLOY_Component_Process_AddStep.png
[DeployProcessDesignerStepProperties1]: media/DEPLOY_Component_Process_Step_Properties1.png
[DeployProcessDesignerStepProperties2]: media/DEPLOY_Component_Process_Step_Properties2.png
[DeployComponentProcessesListEmpty]: media/DEPLOY_Component_ProcessList.png
[DeployComponentProcessesList]: media/DEPLOY_Component_WithProcessList.png
[DeployComponentCreateNewProcessButton]: media/DEPLOY_Component_CreateProcessButton.png
[DeployComponentCreateProcessDialog]: media/DEPLOY_Component_CreateProcessDialog.png
[DeployProcessDesignerStepShellScript1]: media/DEPLOY_Component_Process_Step_ShellScript1.png
[DeployProcessDesignerStepShellScript2]: media/DEPLOY_Component_Process_Step_ShellScript2.png
[DeployComponentFinalProcess]: media/DEPLOY_Component_Process_Final.png
[DeployProcesDesignerSidebarAddVersionStatus]: media/DEPLOY_Component_ProcessEditor_SidebarAddStatus.png
[DeployProcessDesignerAddedVersionStatus]: media/DEPLOY_Component_ProcessEditor_StepAdded_AddStatus.png
[DeployProcessDesignerAddedVersionStatusProperties]: media/DEPLOY_Component_Process_Step_AddStatusProperties.png
[DeployComponentFinalProcesWithVersionStatus]: media/DEPLOY_Component_VersionList_withStatus.png
[DeployComponentProcessPassingTest]: media/DEPLOY_ComponentProcessFinalWithPassingTest.png
[DeployComponentProcessFailingTest]: media/DEPLOY_ComponentProcessFinalWithFailingTest.png
[AppViewWithEnv]: ../applications/index.md#view-application
[SwitchToProcessView]: ../applications/index.md#show-processes
[AppProcessList]: ../applications/media/Deploy_AppProcess_ListFinal.png
[REFSwitchToCompView]: ../components/index.md#switch-to-components-view
[REFCompProcessesView]: ../components/index.md#view-component-processes
[DOCAppProccesses]: https://www.ibm.com/docs/en/devops-deploy/8.1.2?topic=processes-application
