# Applications

## [Switch to Applications View](../index.md#switch-to-applications-view)

--8<-- [start:SwitchToAppsView]

To switch to Applications View, click in the Sidebar on the **Applications** Icon ![Sidebar Applications][SBApplicationsIcon] / ![Sidebar App Expanded][SBApplicationsText]

--8<-- [end:SwitchToAppsView]

## Create or Import Application

--8<-- [start:CreateOrImportApp]

### Create New Application

#### Create Application

--8<-- [start:CreateNewApplication]

| Step | Details                                        | Additional Information                                |
|:----:|:-----------------------------------------------|:------------------------------------------------------|
|      | If no Applications are available               | ![Empty Applications View][APPSallViewEmpty]          |
|      | Click on the **Create Application** Button     | ![Create App Button][ButtonCreateApp]                 |
|      | Select **New Application** from Menu           | ![Select New App from Menu][CreateAppMenu]            |
|      | The **Create Application** Dialog is shown     | ![Create App Dialog][CreateAppDialog]                 |
|      | Select "Demo"                                  | ![Select Loop and add Name][CreateAppDialogEnterInfo] |
|      | click on the **Save** Button to create new App | ![Save Button][ButtonSave]                            |
|      | Application is shown                           | ![Application View][AppView]                          |

--8<-- [end:CreateNewApplication]

#### Add Environments to Application

--8<-- [start:AddNewEnvironment]

| Step | Details                                                   | Additional Information                                            |
|:----:|:----------------------------------------------------------|:------------------------------------------------------------------|
|      | Click on the **Create Environment** Button                | ![Create Environment Button][ButtonCreateEnv]                     |
|      | In the Dialog enter "DEV" as Name                         | ![Create Env Dialog][CreateEnvDialog]                             |
|      | Scroll down and click on Color                            | ![Create Env Dialog Color][CreateEnvDialogColor]                  |
|      | to select the color for your environment                  | ![Create Env Dialog Selected Color][CreateEnvDialogSelectedConor] |
|      | click on the **Save** Button to create new Environment    | ![Save Button][ButtonSave]                                        |
|      | Repleat this section and add "QA" and "PROD" environments |                                                                   |
|      | List of all Environments                                  | ![Final Environment List][AppEnvironmentsView]                    |

--8<-- [end:AddNewEnvironment]

#### Assign Resources to Environments

--8<-- [start:AddResources2Env]

| Step | Details                                                         | Additional Information                      |
|:----:|:----------------------------------------------------------------|:--------------------------------------------|
|      | In the Environments List click on the "DEV" entry               | ![Click on Env][ENVselect]                  |
|      | The Environment View is shown                                   | ![Environment View][ENVView]                |
|      | click on the **Add Base Resources** button                      | ![Add Base Resources Button][ENVAddBaseRes] |
|      | In the Dialog select the Resource with same name as Environment | ![Add Resource Dialog][ENVAddResDialog]     |
|      |                                                                 | ![Resource Selected][EnvAddResSelected]     |
|      | Click on **Save** Button                                        | ![Save Button][ButtonSave]                  |
|      | Repeat this section for "QA" and "PROD" Environments            |                                             |

--8<-- [end:AddResources2Env]

### Import Application

--8<-- [start:ImportApplication]

| Step | Details                                                             | Additional Information                       |
|:----:|:--------------------------------------------------------------------|:---------------------------------------------|
|      | If no Applications are available                                    | ![Empty Applications View][APPSallViewEmpty] |
|      | click on the **Import Applications** Button                         | ![Import App Button][ButtonImportApps]       |
|      | If necessary change the settings in the Dialog                      | ![Import App dialog][ImportAppsDialog]       |
|      | Click on the **Choose File** Button to select App Import file       | ![Choose File][ButtonChooseFile]             |
|      | Select file "App_EchoLogic_NoComponents.json" in your file explorer | ![Select Import File][FileSelect]            |
|      | click on **Submit** Button to start Import                          | ![Submit Button][ButtonSubmit]               |
|      | Application is shown                                                | ![Application View with Env][AppViewWEnv]    |

--8<-- [end:ImportApplication]

--8<-- [end:CreateOrImportApp]

## View Application

--8<-- [start:ViewApplication]

--8<-- [start:ViewApplications]

| Step | Details                              | Additional Information                    |
|:----:|:-------------------------------------|:------------------------------------------|
|  1   | From the list of Applications        |                                           |
|  2   | Click on the "EchoLogic" Application | ![All Applications][APPSallView]          |
|  3   | First View is the Environments view  | ![Application View with Env][AppViewWEnv] |
|      |                                      |                                           |

--8<-- [end:ViewApplications]

--8<-- [end:ViewApplication]

### Show Components

--8<-- [start:ShowComponents]

| Step | Details                     | Additional Information              |
|:----:|:----------------------------|:------------------------------------|
|      | Click on **Components** Tab | ![App Components Tab][AppCompTab]   |
|      | Components View is shown    | ![App Components View][AppCompView] |

--8<-- [end:ShowComponents]

#### How to Add Components to Application

--8<-- [start:AddComponent2App]

| Step | Details                                       | Additional Information                        |
|:----:|:----------------------------------------------|:----------------------------------------------|
|      | [Switch to Components View](#show-components) |                                               |
|      | Click on **Add Components** Button            | ![Add Comp Button][ButtonAddComp]             |
|      | In the Dialog select "Echo" and "Logic"       | ![Select Components to add][SelectCompToAdd]  |
|      | Click on **Save** Button                      | ![Save Button][ButtonSave]                    |
|      | Components View with added Components         | ![App Comp View with Comps][AppCompViewFinal] |

--8<-- [end:AddComponent2App]

### Show Processes

--8<-- [start:ShowProcesses]

| Step | Details                                          | Additional Information                     |
|:----:|:-------------------------------------------------|:-------------------------------------------|
|      | click on "Processes" Tab                         | ![App Processes Tab][AppProcessesTab]      |
|      | List of all Application Processes will be shown. | ![Application Processes][AppProcessesView] |

--8<-- [end:ShowProcesses]

#### Show an Application Process

--8<-- [start:ShowAppProcesses]

| Step | Details                                                   | Additional Information                        |
|:----:|:----------------------------------------------------------|:----------------------------------------------|
|      | [Switch to Processes View][SwitchToProcessView]           |                                               |
|      | Click on **Deploy** Process                               | ![Application Processes List][AppProcessList] |
|      | The Process Editor opens and shows the deployment process | ![App Deployment Process][AppViewProcess]     |

--8<-- [end:ShowAppProcesses]

#### How to Import Processes

--8<-- [start:ImportAppProcesses]

| Step | Details                                             | Additional Information                                 |
|:----:|:----------------------------------------------------|:-------------------------------------------------------|
|      | [Switch to Processes View][SwitchToProcessView]     |                                                        |
|      | Click on **Import Process** Button                  | ![Import App Process Button][AppImportProcessButton]   |
|      | The Import Process Dialog opens                     | ![Import Dialog][ImportProcessDialog]                  |
|      | click on **Choose File** Button                     | ![Import Dialog Select File][ImpProcessChooseFile]     |
|      | From the artifact list select **App_Processes.yml** | ![Import Dialog List of Files][ImpProcessFileList]     |
|      | File is selected                                    | ![Import Dialog File Selected][ImpProcessFileSelected] |
|      | click on **Submit** Button to start import          | ![Submit Button][ButtonSubmit]                         |
|      | Imported Application Process are shown              | ![Application Processes List][AppProcessList]          |

--8<-- [end:ImportAppProcesses]

---

[SBApplicationsIcon]: ../media/deploy-deploy-sidebar-app-icon.png
[SBApplicationsText]: ../media/deploy-deploy-sidebar-app-icon-with-text.png
[APPSallView]: media/deploy-app-deploy-applications-view.png
[AppView]: media/deploy-app-deploy-application-view.png
[AppProcessesTab]: media/deploy-app-deploy-application-processes-tab.png
[AppProcessesView]: media/deploy-app-deploy-app-processes-view.png
[AppImportProcessButton]: media/deploy-app-deploy-application-import-process-button.png
[ImportProcessDialog]: media/deploy-app-deploy-import-app-process-dialog-01.png
[ImpProcessChooseFile]: media/deploy-app-deploy-import-app-process-dialog-02.png
[ImpProcessFileList]: media/deploy-app-deploy-import-app-process-dialog-03.png
[ImpProcessFileSelected]: media/deploy-app-deploy-import-app-process-dialog-04.png
[ButtonSubmit]: ../../../media/common-button-submit.png
[AppProcessList]: media/deploy-app-deploy-app-process-list-final.png
[APPSallViewEmpty]: media/deploy-app-deploy-applications-view-empty.png
[ButtonCreateApp]: media/deploy-app-deploy-app-create-app-button.png
[CreateAppMenu]: media/deploy-app-deploy-app-create-app-menue.png
[CreateAppDialog]: media/deploy-app-deploy-app-create-app-dialog-01.png
[CreateAppDialogEnterInfo]: media/deploy-app-deploy-app-create-app-dialog-02.png
[ButtonImportApps]: ../media/deploy-deploy-import-apps-button.png
[ImportAppsDialog]: ../media/deploy-deploy-import-apps-dialog.png
[ButtonChooseFile]: ../../../media/common-button-choose-file.png
[FileSelect]: ../media/deploy-deploy-import-apps-select-file.png
[ButtonSave]: ../../../media/common-button-save.png
[AppCompTab]: media/deploy-app-deploy-apps-components-tab.png
[AppCompView]: media/deploy-app-deploy-apps-components-view.png
[ButtonAddComp]: media/deploy-app-deploy-apps-add-components-button.png
[SelectCompToAdd]: media/deploy-app-deploy-apps-add-components-dialog.png
[AppCompViewFinal]: media/deploy-app-deploy-apps-components-view-final.png
[AppViewWEnv]: media/deploy-app-deploy-application-view-with-env.png
[ButtonCreateEnv]: media/deploy-app-deploy-app-create-env-button.png
[CreateEnvDialog]: media/deploy-app-deploy-app-create-env-dialog-01.png
[CreateEnvDialogColor]: media/deploy-app-deploy-app-create-env-dialog-02.png
[CreateEnvDialogSelectedConor]: media/deploy-app-deploy-app-create-env-dialog-03.png
[AppEnvironmentsView]: media/deploy-app-deploy-app-environment-list.png
[ENVselect]: media/deploy-app-deploy-app-environment-select.png
[ENVView]: media/deploy-app-deploy-env-view.png
[ENVAddBaseRes]: media/deploy-app-deploy-env-add-base-res-button.png
[ENVAddResDialog]: media/deploy-app-deploy-env-add-res-dialog.png
[EnvAddResSelected]: media/deploy-app-deploy-env-add-res-selected.png
[SwitchToProcessView]: #show-processes
[AppViewProcess]: media/deploy-app-deploy-app-deployment-process.png
