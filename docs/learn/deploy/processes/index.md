# Processes

## Overview

--8<-- [start:Overview]

TODO: talk about processes

### Types of Processes

--8<-- [start:TypesOfProcesses]

#### Generic Processes

--8<-- [start:GenericProcesses]

TODO: talk about generic processes and for what they are good for

--8<-- [end:GenericProcesses]

#### Application Processes

--8<-- [start:AppProcesses]

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

--8<-- [end:AppProcesses]

#### Component Processes

--8<-- [start:CompProcesses]

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

--8<-- [end:CompProcesses]

--8<-- [end:TypesOfProcesses]

--8<-- [end:Overview]

### Process Designer

--8<-- [start:ProcessDesigner]

It will show you the process designer for a new process:

![Process Designer][DeployProcessDesigner]

#### Process Designer Sidebar

--8<-- [start:ProcessDesignerSidebar]

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

--8<-- [end:ProcessDesignerSidebar]

#### Final Process Diagram

--8<-- [start:FinalProcessDiagram]

![Deploy Process Diagram Application Page][DeployComponentFinalProcess]

--8<-- [end:FinalProcessDiagram]

#### Adding Version Statuses

--8<-- [start:AddingVersionStatuses]

![Process Designer - sidebar add version status][DeployProcesDesignerSidebarAddVersionStatus]
![process designer - step added add version status][DeployProcessDesignerAddedVersionStatus]
![process designer - add version status properites][DeployProcessDesignerAddedVersionStatusProperties]

##### Final Process Diagrams (Passing and Failing tests)

--8<-- [start:FinalProcessDiagrams]

![Process Designer - Final Process with passed Test][DeployComponentProcessPassingTest]
![Process Designer - Final Process with failing Test][DeployComponentProcessFailingTest]

Now we have additional deployment processes. One for passing a test and one for failing a test. Both processes will set the appropiate version tag about status of test.

![Component with Deployment Process passing and failing][DeployComponentProcessesList]

Result in the Versionlist of the component:
![Status added to version][DeployComponentFinalProcesWithVersionStatus]

--8<-- [end:FinalProcessDiagrams]

--8<-- [end:AddingVersionStatuses]

--8<-- [end:ProcessDesigner]

---

[APPSallView]: ../applications/index.md#switch-to-applications-view

[DeployProcessDesigner]: media/deploy-proc-component-process-editor.png
[DeployComponentProcessDesignerSidebar]: media/deploy-proc-component-process-editor-sidebar.png
[DeployProcessDesignerAddStepp]: media/deploy-proc-component-process-add-step.png
[DeployProcessDesignerStepProperties1]: media/deploy-proc-component-process-step-properties-01.png
[DeployProcessDesignerStepProperties2]: media/deploy-proc-component-process-step-properties-02.png
[DeployComponentProcessesListEmpty]: media/deploy-proc-component-process-list.png
[DeployComponentProcessesList]: media/deploy-proc-component-with-process-list.png
[DeployComponentCreateNewProcessButton]: media/deploy-proc-component-create-process-button.png
[DeployComponentCreateProcessDialog]: media/deploy-proc-component-create-process-dialog.png
[DeployProcessDesignerStepShellScript1]: media/deploy-proc-component-process-step-shell-script-01.png
[DeployProcessDesignerStepShellScript2]: media/deploy-proc-component-process-step-shell-script-02.png
[DeployComponentFinalProcess]: media/deploy-proc-component-process-final.png
[DeployProcesDesignerSidebarAddVersionStatus]: media/deploy-proc-component-process-editor-sidebar-add-status.png
[DeployProcessDesignerAddedVersionStatus]: media/deploy-proc-component-process-editor-step-added-add-status.png
[DeployProcessDesignerAddedVersionStatusProperties]: media/deploy-proc-component-process-step-add-status-properties.png
[DeployComponentFinalProcesWithVersionStatus]: media/deploy-proc-component-version-list-with-status.png
[DeployComponentProcessPassingTest]: media/deploy-proc-component-process-final-with-passing-test.png
[DeployComponentProcessFailingTest]: media/deploy-proc-component-process-final-with-failing-test.png
[AppViewWithEnv]: ../applications/index.md#view-application
[SwitchToProcessView]: ../applications/index.md#show-processes
[AppProcessList]: ../applications/media/deploy-app-deploy-app-process-list-final.png
[REFSwitchToCompView]: ../components/index.md#switch-to-components-view
[REFCompProcessesView]: ../components/index.md#view-component-processes
[DOCAppProccesses]: https://www.ibm.com/docs/en/devops-deploy/8.1.2?topic=processes-application
