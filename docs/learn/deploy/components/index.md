# Components

## Switch to Components View

| Step | Details                                       | Additional Information { width="50%" }         |
|:----:|:----------------------------------------------|:-----------------------------------------------|
|  1   | In the sidebar select the **Components** Icon | ![Sidebar Components Icon][SBCompIcon]         |
|      |                                               | ![Sidebar ComponentsIcon Text][SBCompIconText] |
|  2   | Components View                               | ![Components View][CompView]                   |

## View Component Processes

| Step | Details                                               | Additional Information { width="50%" } |
|:----:|:------------------------------------------------------|:---------------------------------------|
|      | [Switch to Components View][SwitchToCompView]         |                                        |
|      | List of Components is shown                           | ![List of Comps][CompsList]            |
|      | click on **Echo** component to view details           | ![Open Echo Component][CompDetails]    |
|      | ![Switch to Component processes View][CompProcessTab] |                                        |
|      | Available Component processes are shown               | ![Component Processes][CompProcesses]  |

## Creating or Importing Components

### Creating Components

--8<-- [start:CreateNewComponent]

| Step | Details                                                                                | Additional Information { width="50%" }                                                    |
|:----:|:---------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------|
|      | Press Create new Component Button: ![Component - Create new][DeployComponentCreateNew] |                                                                                           |
|      | Enter the name of the component (for example Echo) and a Description                   | ![Component - Create Dialog 1][DeployComponentCreateNewDialog1]                           |
|      | Select Version Source Configuration (use file system versioned for this step)          | ![Component - Create Dialog 2][DeployComponentCreateNewDialog2]                           |
|      | Provide the base path from where to import versions for this component                 | ![Component - Create Dialog 3][DeployComponentCreateNewDialog3]                           |
|      | use "home/echologic/echo" for this example                                             | <home/echologic/echo>                                                                     |
|      | select "copy to Codestation" if not selected automatically                             | ![Component - Create Dialog 4][DeployComponentCreateNewDialog4]                           |
|      | Component successful created, first view is the Versions view                          | ![Component - Newly Created Comp first view versions ][DeployComponentNewVersionView]     |
|      | have a look at the Components configuration, you can change it here if needed          | ![Component - Newly Created Comp configuraiton view][DeployComponentNewConfigurationView] |
|      | have a look at the processes of the component, which are empty too                     | ![Component - Newly Created Comp Processes view][DeployComponentNewProcessesView]         |
|      | We will add processes later in this lab                                                |                                                                                           |

--8<-- [end:CreateNewComponent]

## Importing Components

| Step | Details                                    | Additional Information { width="50%" }         |
|:----:|:-------------------------------------------|:-----------------------------------------------|
|      | click on **Import Component** Button       | ![Import Component Button][ButtonImportComps]  |
|      | Import Dialog opens                        | ![Import Dialog][CompImportDialog]             |
|      | click on **Chose File** Button             | ![Choose File Button][CompImpChooseFileButton] |
|      | Switch to folder with files and select one | ![Files to choose][Filestochoose]              |
|      | File is selected                           | ![File is selected][FileChoosen]               |
|      | click the **Submit** Button                | ![Submit Button][ButtonSubmit]                 |
|      | Result is component imported               | ![Component Imported][CompImported]            |
|      | Repeat Import for second component         |                                                |

---

[SBCompIcon]: ../media/Deploy_Sidebar_ComponentsIcon.png
[SBCompIconText]: ../media/Deploy_Sidebar_ComponentsIconWithText.png
[CompView]: ../media/DEPLOY_Components_List.png
[ButtonImportComps]: media/Component_Import_Components_Button.png
[CompImportDialog]: media/Component_Import_Dialog.png
[CompImpChooseFileButton]: media/Component_Import_Dialog_ChooseFile.png
[Filestochoose]: media/Component_Import_Files.png
[ButtonSubmit]: media/Component_Import_SubmitButton.png
[FileChoosen]: media/Component_Import_Dialog_FileChosen.png
[CompImported]: media/Component_Imported.png
[SwitchToCompView]: #switch-to-components-view
[CompsList]: ../media/DEPLOY_Components_List.png
[CompDetails]: media/Component_Imported.png
[CompProcessTab]: media/Component_Tabbar_Processes.png
[CompProcesses]: media/Component_Processlist_withentries.png

[DeployComponentCreateNew]: media/DEPLOY_Components_CreateComponentButton.png
[DeployComponentCreateNewDialog1]: media/DEPLOY_Components_CreateDialog1.png
[DeployComponentCreateNewDialog2]: media/DEPLOY_Components_CreateDialog2.png
[DeployComponentCreateNewDialog3]: media/DEPLOY_Components_CreateDialog3.png
[DeployComponentCreateNewDialog4]: media/DEPLOY_Components_CreateDialog4.png
[DeployComponentNewVersionView]: media/Component_Versions_View_empty.png
[DeployComponentNewConfigurationView]: media/Component_Config.png
[DeployComponentNewProcessesView]: media/Component_Tabbar_Processes.png