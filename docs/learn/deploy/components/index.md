# Components

## Switch to Components View

--8<-- [start:SwitchToCompView]

| Step | Details                                       | Additional Information { width="50%" }         |
|:----:|:----------------------------------------------|:-----------------------------------------------|
|  1   | In the sidebar select the **Components** Icon | ![Sidebar Components Icon][SBCompIcon]         |
|      |                                               | ![Sidebar ComponentsIcon Text][SBCompIconText] |
|  2   | Components View                               | ![Components View][CompView]                   |

--8<-- [end:SwitchToCompView]

## View Component Processes

--8<-- [start:ViewCompProcesses]

| Step | Details                                               | Additional Information { width="50%" } |
|:----:|:------------------------------------------------------|:---------------------------------------|
|      | [Switch to Components View][SwitchToCompView]         |                                        |
|      | List of Components is shown                           | ![List of Comps][CompsList]            |
|      | click on **Echo** component to view details           | ![Open Echo Component][CompDetails]    |
|      | ![Switch to Component processes View][CompProcessTab] |                                        |
|      | Available Component processes are shown               | ![Component Processes][CompProcesses]  |

--8<-- [end:ViewCompProcesses]

## Creating or Importing Components

--8<-- [start:CreateOrImportComp]

### Creating Components

--8<-- [start:CreateComponent]

--8<-- [start:CreateNewComponent]

| Step | Details                                                                                | Additional Information { width="50%" }                                                    |
|:----:|:---------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------|
|      | Press Create new Component Button: ![Component - Create new][DeployComponentCreateNew] |                                                                                           |
|      | Enter the name of the component (for example Echo) and a Description                   | ![Component - Create Dialog 1][DeployComponentCreateNewDialog1]                           |
|      | Select Version Source Configuration (use file system versioned for this step)          | ![Component - Create Dialog 2][DeployComponentCreateNewDialog2]                           |
|      | Provide the base path from where to import versions for this component                 | ![Component - Create Dialog 3][DeployComponentCreateNewDialog3]                           |
|      | use "home/echologic/echo" for this example                                             | `home/echologic/echo`                                                                     |
|      | select "copy to Codestation" if not selected automatically                             | ![Component - Create Dialog 4][DeployComponentCreateNewDialog4]                           |
|      | Component successful created, first view is the Versions view                          | ![Component - Newly Created Comp first view versions ][DeployComponentNewVersionView]     |
|      | have a look at the Components configuration, you can change it here if needed          | ![Component - Newly Created Comp configuration view][DeployComponentNewConfigurationView] |
|      | have a look at the processes of the component, which are empty too                     | ![Component - Newly Created Comp Processes view][DeployComponentNewProcessesView]         |
|      | We will add processes later in this lab                                                |                                                                                           |

--8<-- [end:CreateNewComponent]

--8<-- [end:CreateComponent]

--8<-- [end:CreateOrImportComp]

## Importing Components

--8<-- [start:ImportComponents]

| Step | Details                                    | Additional Information { width="50%" }         |
|:----:|:-------------------------------------------|:-----------------------------------------------|
|      | click on **Import Component** Button       | ![Import Component Button][ButtonImportComps]  |
|      | Import Dialog opens                        | ![Import Dialog][CompImportDialog]             |
|      | click on **Choose File** Button            | ![Choose File Button][CompImpChooseFileButton] |
|      | Switch to folder with files and select one | ![Files to choose][Filestochoose]              |
|      | File is selected                           | ![File is selected][FileChoosen]               |
|      | click the **Submit** Button                | ![Submit Button][ButtonSubmit]                 |
|      | Result is component imported               | ![Component Imported][CompImported]            |
|      | Repeat Import for second component         |                                                |

--8<-- [end:ImportComponents]

---

[SBCompIcon]: ../media/deploy-deploy-sidebar-components-icon.png
[SBCompIconText]: ../media/deploy-deploy-sidebar-components-icon-with-text.png
[CompView]: ../media/deploy-components-list.png
[ButtonImportComps]: media/deploy-comp-component-import-components-button.png
[CompImportDialog]: media/deploy-comp-component-import-dialog.png
[CompImpChooseFileButton]: media/deploy-comp-component-import-dialog-choose-file.png
[Filestochoose]: media/deploy-comp-component-import-files.png
[ButtonSubmit]: media/deploy-comp-component-import-submit-button.png
[FileChoosen]: media/deploy-comp-component-import-dialog-file-chosen.png
[CompImported]: media/deploy-comp-component-imported.png
[SwitchToCompView]: #switch-to-components-view
[CompsList]: ../media/deploy-components-list.png
[CompDetails]: media/deploy-comp-component-imported.png
[CompProcessTab]: media/deploy-comp-component-tabbar-processes.png
[CompProcesses]: media/deploy-comp-component-processlist-withentries.png

[DeployComponentCreateNew]: media/deploy-comp-components-create-component-button.png
[DeployComponentCreateNewDialog1]: media/deploy-comp-components-create-dialog-01.png
[DeployComponentCreateNewDialog2]: media/deploy-comp-components-create-dialog-02.png
[DeployComponentCreateNewDialog3]: media/deploy-comp-components-create-dialog-03.png
[DeployComponentCreateNewDialog4]: media/deploy-comp-components-create-dialog-04.png
[DeployComponentNewVersionView]: media/deploy-comp-component-versions-view-empty.png
[DeployComponentNewConfigurationView]: media/deploy-comp-component-config.png
[DeployComponentNewProcessesView]: media/deploy-comp-component-tabbar-processes.png
