# Applications

## Switch to Applications View

| Step | Details                                                | Additional Information                                |
|:----:|:-------------------------------------------------------|:------------------------------------------------------|
|  1   | Switch to Applications View by clicking on the Sidebar |                                                       |
|      |                                                        | ![Sidebar Applications][SBApplicationsIcon]           |
|      |                                                        | ![Sidebar Applications with Text][SBApplicationsText] |
|      | View for all Applications                              | ![All Applications View][APPSallView]                 |
|      |                                                        |                                                       |

## Create or Import Application

### Create New Application

#### Create Application

| Step | Details                                        | Additional Information                                |
|:----:|:-----------------------------------------------|:------------------------------------------------------|
|      | If no Applications are available               | ![Empty Applications View][APPSallViewEmpty]          |
|      | Click on the **Create Application** Button     | ![Create App Button][ButtonCreateApp]                 |
|      | Select **New Application** from Menu           | ![Select New App from Menu][CreateAppMenu]            |
|      | The **Create Application** Dialog is shown     | ![Create App Dialog][CreateAppDialog]                 |
|      | Select "Demo"                                  | ![Select Loop and add Name][CreateAppDialogEnterInfo] |
|      | click on the **Save** Button to create new App | ![Save Button][ButtonSave]                            |
|      | Application is shown                           | ![Application View][AppView]                          |

#### Add Environments to Application

| Step | Details                                                   | Additional Information                                            |
|:----:|:----------------------------------------------------------|:------------------------------------------------------------------|
|      | Click on the **Create Environment** Button                | ![Create Environment Button][ButtonCreateEnv]                     |
|      | In the Dialog enter "DEV" as Name                         | ![Create Env Dialog][CreateEnvDialog]                             |
|      | Scroll down and click on Color                            | ![Create Env Dialog Color][CreateEnvDialogColor]                  |
|      | to select the color for your environment                  | ![Create Env Dialog Selected Color][CreateEnvDialogSelectedConor] |
|      | click on the **Save** Button to create new Environment    | ![Save Button][ButtonSave]                                        |
|      | Repleat this section and add "QA" and "PROD" environments |                                                                   |
|      | List of all Environments                                  | ![Final Environment List][AppEnvironmentsView]                    |

#### Assign Resources to Environments

| Step | Details                                                         | Additional Information                      |
|:----:|:----------------------------------------------------------------|:--------------------------------------------|
|      | In the Environments List click on the "DEV" entry               | ![Click on Env][ENVselect]                  |
|      | The Environment View is shown                                   | ![Environment View][ENVView]                |
|      | click on the **Add Base Resources** button                      | ![Add Base Resources Button][ENVAddBaseRes] |
|      | In the Dialog select the Resource with same name as Environment | ![Add Resource Dialog][ENVAddResDialog]     |
|      |                                                                 | ![Resource Selected][EnvAddResSelected]     |
|      | Click on **Save** Button                                        | ![Save Button][ButtonSave]                  |
|      | Repeat this section for "QA" and "PROD" Environments            |                                             |

### Import Application

| Step | Details                                                       | Additional Information                       |
|:----:|:--------------------------------------------------------------|:---------------------------------------------|
|      | If no Applications are available                              | ![Empty Applications View][APPSallViewEmpty] |
|      | click on the **Import Applications** Button                   | ![Import App Button][ButtonImportApps]       |
|      | If necessary change the settings in the Dialog                | ![Import App dialog][ImportAppsDialog]       |
|      | Click on the **Choose File** Button to select App Import file | ![Choose File][ButtonChooseFile]             |
|      | Select file "" in your file explorer                          | ![Select Import File][FileSelect]            |
|      | click on **Submit** Button to start Import                    | ![Submit Button][ButtonSubmit]               |
|      | Application is shown                                          | ![Application View with Env][AppViewWEnv]    |

## View Application

| Step | Details                              | Additional Information                    |
|:----:|:-------------------------------------|:------------------------------------------|
|  1   | From the list of Applications        |                                           |
|  2   | Click on the "EchoLogic" Application | ![All Applications][APPSallView]          |
|  3   | First View is the Environments view  | ![Application View with Env][AppViewWEnv] |
|      |                                      |                                           |

## Add Components to Application

| Step | Details                                 | Additional Information                        |
|:----:|:----------------------------------------|:----------------------------------------------|
|      | Click on **Components** Tab             | ![App Components Tab][AppCompTab]             |
|      | Components View is shown                | ![App Components View][AppCompView]           |
|      | Click on **Add Components** Button      | ![Add Comp Button][ButtonAddComp]             |
|      | In the Dialog select "Echo" and "Logic" | ![Select Components to add][SelectCompToAdd]  |
|      | Click on **Save** Button                | ![Save Button][ButtonSave]                    |
|      | Components View with added Components   | ![App Comp View with Comps][AppCompViewFinal] |

## Import Processes

| Step | Details                                             | Additional Information                                 |
|:----:|:----------------------------------------------------|:-------------------------------------------------------|
|      | click on "Processes" Tab                            | ![App Processes Tab][AppProcessesTab]                  |
|      | List of all Application Processes will be shown.    | ![Application Processes][AppProcessesView]             |
|      | Click on **Import Process** Button                  | ![Import App Process Button][AppImportProcessButton]   |
|      | The Import Process Dialog opens                     | ![Import Dialog][ImportProcessDialog]                  |
|      | click on **Choose File** Button                     | ![Import Dialog Select File][ImpProcessChooseFile]     |
|      | From the artifact list select **App_Processes.yml** | ![Import Dialog List of Files][ImpProcessFileList]     |
|      | File is selected                                    | ![Import Dialog File Selected][ImpProcessFileSelected] |
|      | click on **Submit** Button to start import          | ![Submit Button][ButtonSubmit]                         |
|      | Imported Application Process are shown              | ![Application Processes List][AppProcessList]          |

---

[SBApplicationsIcon]: ../media/Deploy_Sidebar_AppIcon.jpg
[SBApplicationsText]: ../media/Deploy_SideBar_AppIconWithText.png
[APPSallView]: media/Deploy_Applications_View.png
[AppView]: media/Deploy_Application_View.png
[AppProcessesTab]: media/Deploy_Application_ProcessesTab.png
[AppProcessesView]: media/Deploy_App_Processes_view.png
[AppImportProcessButton]: media/Deploy_Application_ImportProcessButton.png
[ImportProcessDialog]: media/Deploy_ImportAppProcess_Dialog1.png
[ImpProcessChooseFile]: media/Deploy_ImportAppProcess_Dialog2.png
[ImpProcessFileList]: media/Deploy_ImportAppProcess_Dialog3.png
[ImpProcessFileSelected]: media/Deploy_ImportAppProcess_Dialog4.png
[ButtonSubmit]: ../../../media/Button_Submit.png
[AppProcessList]: media/Deploy_AppProcess_ListFinal.png
[APPSallViewEmpty]: media/Deploy_Applications_View_Empty.png
[ButtonCreateApp]: media/Deploy_App_CreateAppButton.png
[CreateAppMenu]: media/Deploy_App_CreateAppMenue.png
[CreateAppDialog]: media/DevOps_App_CreateApp_Dialog1.png
[CreateAppDialogEnterInfo]: media/DevOps_App_CreateApp_Dialog2.png
[ButtonImportApps]: ../media/Deploy_Import_Apps_Button.png
[ImportAppsDialog]: ../media/Deploy_Import_Apps_Dialog.png
[ButtonChooseFile]: ../../../media/Button_ChooseFile.png
[FileSelect]: ../media/Deploy_Import_Apps_SelectFile.png
[ButtonSave]: ../../../media/Button_Save.png
[AppCompTab]: media/Deploy_Apps_ComponentsTab.png
[AppCompView]: media/Deploy_Apps_Components_View.png
[ButtonAddComp]: media/Deploy_Apps_AddComponents_Button.png
[SelectCompToAdd]: media/Deploy_Apps_AddComponents_Dialog.png
[AppCompViewFinal]: media/Deploy_Apps_Components_View_Final.png
[AppViewWEnv]: media/Deploy_Application_View_WithEnv.png
[ButtonCreateEnv]: media/Deploy_App_CreateEnv_Button.png
[CreateEnvDialog]: media/Deploy_App_CreateEnv_Dialog1.png
[CreateEnvDialogColor]: media/Deploy_App_CreateEnv_Dialog2.png
[CreateEnvDialogSelectedConor]: media/Deploy_App_CreateEnv_Dialog3.png
[AppEnvironmentsView]: media/Deploy_App_EnvironmentList.png
[ENVselect]: media/Deploy_App_Environment_select.png
[ENVView]: media/Deploy_Env_View.png
[ENVAddBaseRes]: media/Deploy_Env_AddBaseRes_Button.png
[ENVAddResDialog]: media/Deploy_Env_AddRes_Dialog.png
[EnvAddResSelected]: media/Deploy_Env_AddRes_Selected.png
