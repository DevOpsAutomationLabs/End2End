# Setup

> **NOTE:** With the introduction of "Learning Data" in Loops this section is no more needed.
>
> **NOTE:** Keeping it for learning purposes only: Manual Setup of Demo Environment on top of pre-provided DevOps Loop Environment.

## Start Here

### How to log in

--8<--
learn/introduction/index.md:HowtoLogin
--8<--

### The Home Page

--8<--
learn/introduction/index.md:TheHomePage
--8<--

## Setup a Teamspace and Loop

--8<--
learn/introduction/index.md:SetupTsAndLoop
--8<--

## Setup AI Integrations

Please follow [this instructions](ai_setup.md)

## Setup Demo Data

> **NOTE**: All Files which are referenced here are available in the following GitHub Repository: [https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp](https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp)
> > Folowing options how you can use the data from the repo:
> > > Download latest <https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/releases/latest> source code zip file
> > > Unzip on your local drive
> > > Access the files from the provided links in the setup steps
> > > Clone to your local disc

### Download EchoLogic DemoApp files

| Step | Details                                                      | Additional Information                                   |
|:----:|:-------------------------------------------------------------|:---------------------------------------------------------|
|  1   | Click [URL to Latest Version][URLDemoAppLatestVersion]       |                                                          |
|  2   | The latest version will be shown                             | ![Latest Version of Demo App ZIPfile][LatestVersionView] |
|  3   | In the **Assets** section                                    | ![Assets section][AssetsSection]                         |
|  4   | Click on **Source Code Zip**                                 | ![File to download][LatestVersionZip]                    |
|  5   | Save into **Downloads Folder**                               | ![Into Downloads Folder][DownloadToFolder]               |
|  6   | Click on **Downloads Icon** of Browser                       | ![Downloads Icon][BrowserDLIcon]                         |
|  7   | Click on File to automatically unzip and show in Filemanager | ![open file in filemanager][BrowserDLdFile]              |
|  8   | The ZIP file should have been unzipped into a new folder     | ![Downloads Folder][DLwithUnzippedFile]                  |

### Importing Demo Data into Plan

| Step | Details                                                                      | Additional Information                                         |
|:----:|:-----------------------------------------------------------------------------|:---------------------------------------------------------------|
|  1   | Switch to [Plan][SwitchToPlan]                                               |                                                                |
|      | 1.1 by either pressing "Let's go to Plan" button on its tile                 | ![Plan Tile lets go][PlanTile]                                 |
|      | 1.2 by using the central app switcher on the right side of your screen       | ![Central App Switcher][CentralAppSwitcher]                    |
|      | 1.3 by using the button/link from What would you like to do today section    | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |
|  2   | Click on **Let's Go** on the "EchoL" application                             | ![Application Page][AppPage]                                   |
|      | 2.1 if you get a *Welcome Screen* click to close to proceed with data import | ![Welcome Screen][PlanWelcomeScreen]                           |
|  3   | click in the **Sidebar**                                                     |                                                                |
|      | 3.1 on **Configuration**                                                     | ![Config Button][ConfigButton]                                 |
|      | 3.2 Use the **Import** Feature of plan to load sample data                   | ![Import Icon][ImportIcon]                                     |
|  4   | In the Dialog for importing record data                                      | ![Import Dialog][ImportDialog1]                                |
|      | 4.1 click the Choose File Button                                             | ![Choose File Button][ChooseFileDialog]                        |
|      | 4.2 go into Downloads/EchoLogic_DemoApp-NN/files/plan folder                 | ![Plan folder][DLPlanFolder]                                   |
|      | 4.3 select the sample data file **EchoLogic.zip**  to be imported            | ![Select the file][SelectZipFile]                              |
|      | 4.4 Now we have the file selected                                            | ![Import Dialog with selected File][ImportDialog2]             |
|      | 4.5 Press the Import Button to start                                         | ![Press Import Button][ImportButton]                           |
|  6   | The Import process starts.                                                   | ![Import Process starting][ImportStarts]                       |
|      | 6.1 By clicking on Details the process output can be viewed                  | ![Import running with Details][ImportRunningWithDetails]       |
|      | 6.2 Import has finished                                                      | ![Import Finished][ImportFinished]                             |
|      | 6.3 Press the close button (bottom right on the screen)                      | ![Close Button][ImportClose]                                   |
|  7   | verify that data has been loaded                                             |                                                                |
|      | 7.1 Click on **Project Board icon** on the Sidebar                           | ![Board Icon in sidebar][SideBarBoardIcon]                     |
|      |                                                                              | ![sidebar][SideBar]                                            |
|      | 7.2 Your board should look similar to this screenshot                        | ![My Board with imported data][MyBoardWithImportedData]        |

### Importing Demo Data into Control

| Step | Details                                                                   | Additional Information                                         |
|:----:|:--------------------------------------------------------------------------|:---------------------------------------------------------------|
|  1   | Switch to [Control][SwitchToControl]                                      |                                                                |
|      | 1.1 by either pressing "Let's go to Control" button on its tile           | ![Control Tile lets go][ControlTile]                           |
|      | 1.2 by using the central app switcher on the right side of your screen    | ![Central App Switcher][CentralAppSwitcher]                    |
|      | 1.3 by using the button/link from What would you like to do today section | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |

#### Setup a Personal Access Token

| Step | Details                                                          | Additional Information                                      |
|:----:|:-----------------------------------------------------------------|:------------------------------------------------------------|
|  1   | Click on the top right on Profile and Settings                   | ![Profile and Settigs][ControlProfileSettings]              |
|      | 1.1 Provide a name for the token. Example **demostokenos**       |                                                             |
|      | 1.2 Select **Settings**                                          | ![Settings][ProfileSettings]                                |
|  2   | Click on **Access Tokens** in the menu                           | ![Access Token][SettingsAccessTokens]                       |
|      | 2.1 click on the **Select Permissions** section to open settings | ![PAT Select Permissions][PATSelectPermissions]             |
|      | 2.2 Set "issue" to "Read/Write"                                  |                                                             |
|      | 2.3 Set "repository" to "Read/Write"                             |                                                             |
|      | 2.4 Set "user" to "Read"                                         |                                                             |
|      | 2.5 Click on **Generate Token** Button                           | ![Create New Personal Access Token - PAT][PATGenerateToken] |
|  3   | The new Token is created and shown                               | ![PAT created and shown][PATcreated]                        |
|      | **NOTE:**                                                        |                                                             |
|      | 3.1 Copy and Paste the token into a text file for reference!     | ![copy PAT into a text file][PATcopy4ref]                   |

#### Clone Target Repository

| Step | Details                                                     | Additional Information                                                                 |
|:----:|:------------------------------------------------------------|:---------------------------------------------------------------------------------------|
|  1   | Open a Terminal to clone the target and source repositories | ![Open a Terminal][OpenTerminal]                                                       |
|  2   | cd into the Documents folder ```cd Documents```             | ![CD into Documents folder][CDDocs]                                                    |
|  3   | Clone the target repository                                 | ![Clone target repository][CloneTargetRepo]                                            |
|      | 3.1 Git Clone command                                       | ```git clone https://devops.automation.techzone.ibm.com/control/Demo/EchoLogic.git"``` |
|      | 3.2 Provide Username: ```demo-devops.loop```                | ![Provide Username for git clone][ProvideGitUserName]                                  |
|      | 3.3 Provide access token (copy from textfile)               | ![copy the referenced PAT from textfile][ProvidePAT]                                   |
|  4   | The target repository is cloned                             | ![Target Repo is cloned][TargetRepoCloned]                                             |
|      | 4.1 check the folder with ```ls EchoLogic```                | ![Target Repo is empty][TargetRepoEmpty]                                               |
|  5   | If needed Getting back to Documents                         | ```cd&cd Documents```                                                                  |
|  6   |                                                             |                                                                                        |
|  7   | Copy some folders and files from Source Repo to Target Repo | ![copy from source to target][CopyData]                                                |
|      | 7.1 Copy docs folder                                        | ```cp -r EchoLogic_DemoApp/docs EchoLogic/```                                          |
|      | 7.2 Copy files folder                                       | ```cp -r EchoLogic_DemoApp/files EchoLogic/```                                         |
|      | 7.3 Copy src folder                                         | ```cp -r EchoLogic_DemoApp/src EchoLogic/```                                           |
|      | 7.4 Copy the Readme file                                    | ```cp -r EchoLogic_DemoApp/README.md EchoLogic/```                                     |
|  8   | Check target repo folder ```ls EchoLogic```                 | ![ls target repo folder][LSTargetRepo]                                                 |
|  9   | Push changes                                                | ![git add commit][GitAddCommit]                                                        |
|      | 9.1 Add changes                                             | ```git add .```                                                                        |
|      | 9.2 Commit Message                                          | ```git commit -m "upload"```                                                           |
|      | 9.3 Push changes                                            | ```git push```                                                                         |
|      | 9.4 Provide username and token (same as with clone)         |                                                                                        |
|      | 9.4.1 ```demo-devops.loop```                                | ![Provide Username for git clone][ProvideGitUserName]                                  |
|      | 9.4.2 Provide access token (copy from textfile)             | ![copy the referenced PAT from textfile][ProvidePAT]                                   |
|      | 9.5 push finishes                                           | ![git push][GitPushDone]                                                               |
|  10  | Switch back to Control and view Repo                        | ![New data is shown in Control][NewDataInRepo]                                         |

<!-- |  6   | Clone the source repository                                 | ![clone source repository][CloneSourceRepo]                                            |
|      | 6.1 Git Clone Command                                       | ```git clone https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp.git```          |
|      | 6.2 check Documents folder ```ls```                         | ![list all folders in Documents][LSDocs]                                               | -->

### Setup Demo Data in Deploy

| Step | Details                                                                   | Additional Information                                         |
|:----:|:--------------------------------------------------------------------------|:---------------------------------------------------------------|
|  1   | Switch to [Deploy][SwitchToDeploy]                                        |                                                                |
|      | 1.1 by either pressing "Let's go to Deploy" button on its tile            | ![Deploy Tile lets go][DeployTile]                             |
|      | 1.2 by using the central app switcher on the right side of your screen    | ![Central App Switcher][CentralAppSwitcher]                    |
|      | 1.3 by using the button/link from What would you like to do today section | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |

#### Setup an Agent Pool

| Step | Details                                                            | Additional Information                          |
|:----:|:-------------------------------------------------------------------|:------------------------------------------------|
|  1   | Switch to [Resources][SwitchToRes] View by clicking on the Sidebar | ![Sidebar Resources][SBResourcesIcon]           |
|      |                                                                    | ![Sidebar Resources with Text][SBResourcesText] |
|  2   | Switch to AgentPools View                                          | ![Agent Pools Tab][ResAPTab]                    |
|  3   | In this view                                                       | ![AgentPool View][ResAPView]                    |
|  4   | click on                                                           | ![Create AP Button][ResAPCreateButton]          |
|  5   | In the **Create Agent Pool** Dialog                                | ![AP Creation Dialog][ResAPCreateDialog]        |
|      | 5.1 Enter "demo" in the name field                                 |                                                 |
|      | 5.2 Select all agents                                              | ![Select Agents][ResAPCreateSelectAgents]       |
|      | 4.3 Click on **Save** Button                                       | ![Save Button][ButtonSave]                      |
|  6   | New Agent Pool is listed in the View                               | ![Agent Pool List][ResAPList]                   |

#### Importing Components

> **NOTE:** Download the component JSON files which are used in this section
> >
> > [Echo Component](https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/raw/main/files/deploy/artifacts/Comp_Echo.json)
> >
> > [Logic Component](https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/raw/main/files/deploy/artifacts/Comp_Logic.json)

| Step | Details                                       | Additional Information                         |
|:----:|:----------------------------------------------|:-----------------------------------------------|
|  1   | In the sidebar select the **Components** Icon | ![Sidebar Components Icon][SBCompIcon]         |
|      |                                               | ![Sidebar ComponentsIcon Text][SBCompIconText] |
|  2   | Components View                               | ![Components View][CompView]                   |
|  3   | click on **Import Component** Button          | ![Import Component Button][ButtonImportComps]  |
|  4   | Import Dialog opens                           | ![Import Dialog][CompImportDialog]             |
|  5   | click on **Chose File** Button                | ![Choose File Button][CompImpChooseFileButton] |
|  6   | Switch to folder with files and select one    | ![Files to choose][Filestochoose]              |
|      | 6.1 - [Echo Component][FileComp_Echo]         |                                                |
|      | 6.2 - [Logic Component][FileComp_Logic]       |                                                |
|  7   | File is selected                              | ![File is selected][FileChoosen]               |
|  8   | click the **Submit** Button                   | ![Submit Button][ButtonSubmit]                 |
|  9   | Result is component imported                  | ![Component Imported][CompImported]            |
|  10  | Repeat Import for second component            |                                                |

#### Setup Resource Tree

| Step | Details                                                                                   | Additional Information                         |
|:----:|:------------------------------------------------------------------------------------------|:-----------------------------------------------|
|  1   | Switch to Resource Tree View                                                              | ![Resource Tree Tab][ResTreeTab]               |
|  2   | In this view                                                                              | ![Resourcetree view][ResTreeView]              |
|  3   | Create a **Top-Level** Group                                                              |                                                |
|      | 3.1click on **Create Top-Level Group** button                                             | ![Create Top Level Button][ResButtonCreateTop] |
|      | 3.2 The **Create Resource** Dialog appears                                                | ![Create Resource Dialog][ResCreateResDialog]  |
|      | 3.3 Enter "EchoLogic" in the name field                                                   | ![Enter Name][ResCreateDialogEnterName]        |
|      | 3.4 click on **Save** Button                                                              | ![Save Button][ButtonSave]                     |
|      | 3.5 Top Level Group created                                                               | ![Top Level Created][ResTopLevelCreated]       |
|  4   | Add Sub Groups for Environments                                                           |                                                |
|      | 4.1 To add sub Groups to Top Level click on the 3 dots                                    | ![3 Dots][3Dots]                               |
|      | 4.2 Menu is shown                                                                         | ![3 Dots menue][Res3DotsMenu]                  |
|      | 4.3 Select **Add Group** from this menue                                                  | ![Add Group][ResAddGroup]                      |
|      | 4.4 Enter Sub Group name "DEV"                                                            | ![Group Name][ResSubGroupName]                 |
|      | 4.5   Click on **Save** Button                                                            | ![Save Button][ButtonSave]                     |
|      | 4.6 repeat this section to add additional Groups for "QA" and "PROD"                      | ![All SubGroups added][ResSubGroups]           |
|  5   | Add an Agent Pool to Environment Sub Groups                                               |                                                |
|      | 5.1 To add Agent Pool to Sub Group click on the 3 dots of the sub group                   | ![3 Dots][3Dots]                               |
|      | 5.2 Menu is shown                                                                         | ![3 Dots menue][Res3DotsMenu]                  |
|      | 5.3 Select **Add Agent Pool**                                                             | ![Add Agent Pool menue][ResAddAgentPool]       |
|      | 5.4 Select "demo" from list of Agent Pools and enter "demo" as name                       | ![Add Agent Pool Dialog][AddAgentPoolDialog]   |
|      | 5.5 Click on **Save** Button                                                              | ![Save Button][ButtonSave]                     |
|      | 5.6 repeat this section to add an Agent pool to Groups "QA" and "PROD"                    |                                                |
|  6   | Add a Component Tag                                                                       |                                                |
|      | 6.1 To add a Component Tag to the Agent Pools click on the 3 dots on the right side of it | ![3 Dots][3Dots]                               |
|      | 6.2 Menu is shown                                                                         | ![Agent/Pool 3 Dots menue][Agent3DotsMenu]     |
|      | 6.3 Select **Add Component Tag**                                                          | ![Add Component Tag][AgentAddCompTag]          |
|      | 6.4 Select "EchoLogicComponents" from List of Tags and use same as Name                   | ![Select Component Tag][CompTagDialog]         |
|      | 6.5 Click on **Save** Button                                                              | ![Save Button][ButtonSave]                     |
|      | 6.6 repeat this section to add a Component Tag to other 2 Sub Groups/Environments         |                                                |
|  7   | Final Resource Tree View                                                                  | ![Final Resource Tree][ResTreeFinal]           |

#### [Application](learn/deploy/applications/index.md)

| Step | Details                                                                   | Additional Information                                |
|:----:|:--------------------------------------------------------------------------|:------------------------------------------------------|
|  1   | Switch to [Applications View][SwitchToAppView] by clicking on the Sidebar |                                                       |
|      |                                                                           | ![Sidebar Applications][SBApplicationsIcon]           |
|      |                                                                           | ![Sidebar Applications with Text][SBApplicationsText] |
|      | View for all Applications                                                 | ![All Applications View][APPSallView]                 |

##### [Import or Create App](learn/deploy/applications/index.md#create-or-import-application)

If no Application exists either import or create application

###### Import Application

<blockquote>
<p><strong>NOTE:</strong> Download <a href="https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/raw/main/files/deploy/artifacts/App_EchoLogic_NoComponents.json">App_EchoLogic_NoComponents.json</a> to your local file system.</p>
</blockquote>

| Step | Details                                                                                  | Additional Information                       |
|:----:|:-----------------------------------------------------------------------------------------|:---------------------------------------------|
|      | If no Applications are available                                                         | ![Empty Applications View][APPSallViewEmpty] |
|      | click on the **Import Applications** Button                                              | ![Import App Button][ButtonImportApps]       |
|      | If necessary change the settings in the Dialog                                           | ![Import App dialog][ImportAppsDialog]       |
|      | Click on the **Choose File** Button to select App Import file                            | ![Choose File][ButtonChooseFile]             |
|      | Select file **[App_EchoLogic_NoComponents.json][FileApp_NoComps]** in your file explorer | ![Select Import File][FileSelect]            |
|      | click on **Submit** Button to start Import                                               | ![Submit Button][ButtonSubmit]               |
|      | Application is shown                                                                     | ![Application View][AppView]                 |

###### Create New Application

| Step | Details                                        | Additional Information                                |
|:----:|:-----------------------------------------------|:------------------------------------------------------|
|      | If no Applications are available               | ![Empty Applications View][APPSallViewEmpty]          |
|      | Click on the **Create Application** Button     | ![Create App Button][ButtonCreateApp]                 |
|      | Select **New Application** from Menu           | ![Select New App from Menu][CreateAppMenu]            |
|      | The **Create Application** Dialog is shown     | ![Create App Dialog][CreateAppDialog]                 |
|      | Select "Demo"                                  | ![Select Loop and add Name][CreateAppDialogEnterInfo] |
|      | click on the **Save** Button to create new App | ![Save Button][ButtonSave]                            |
|      | Application is shown                           | ![Application View][AppView]                          |

##### Add Components to Application

<blockquote>
<p><strong>NOTE:</strong>If no components are associated to the new Application, add the imported components.</p>
</blockquote>
**[follow imported components step if not done yet](#importing-components)**

| Step | Details                                 | Additional Information                        |
|:----:|:----------------------------------------|:----------------------------------------------|
|      | Click on **Components** Tab             | ![App Components Tab][AppCompTab]             |
|      | Components View is shown                | ![App Components View][AppCompView]           |
|      | Click on **Add Components** Button      | ![Add Comp Button][ButtonAddComp]             |
|      | In the Dialog select "Echo" and "Logic" | ![Select Components to add][SelectCompToAdd]  |
|      | Click on **Save** Button                | ![Save Button][ButtonSave]                    |
|      | Components View with added Components   | ![App Comp View with Comps][AppCompViewFinal] |

##### Add Environments to Application

<blockquote>
<p><strong>NOTE:</strong>If no environments are available in the new Application, add them following this steps:</p>
</blockquote>

| Step | Details                                                   | Additional Information                                            |
|:----:|:----------------------------------------------------------|:------------------------------------------------------------------|
|      | Click on the **Create Environment** Button                | ![Create Environment Button][ButtonCreateEnv]                     |
|      | In the Dialog enter "DEV" as Name                         | ![Create Env Dialog][CreateEnvDialog]                             |
|      | Scroll down and click on Color                            | ![Create Env Dialog Color][CreateEnvDialogColor]                  |
|      | to select the color for your environment                  | ![Create Env Dialog Selected Color][CreateEnvDialogSelectedConor] |
|      | click on the **Save** Button to create new Environment    | ![Save Button][ButtonSave]                                        |
|      | Repleat this section and add "QA" and "PROD" environments | ![Save Button][ButtonSave]                                        |
|      | List of all Environments                                  | ![Final Environment List][AppEnvironmentsView]                    |

##### Assign Resources to Environments

<blockquote>
<p><strong>NOTE:</strong>If environments do not have a base resource associated follow this steps to add them:</p>
</blockquote>

| Step | Details                                                         | Additional Information                      |
|:----:|:----------------------------------------------------------------|:--------------------------------------------|
|      | In the Environments List click on the "DEV" entry               | ![Click on Env][ENVselect]                  |
|      | The Environment View is shown                                   | ![Environment View][ENVView]                |
|      | click on the **Add Base Resources** button                      | ![Add Base Resources Button][ENVAddBaseRes] |
|      | In the Dialog select the Resource with same name as Environment | ![Add Resource Dialog][ENVAddResDialog]     |
|      |                                                                 | ![Resource Selected][EnvAddResSelected]     |
|      | Click on **Save** Button                                        | ![Save Button][ButtonSave]                  |
|      | Repeat this section for "QA" and "PROD" Environments            |                                             |

##### Import Processes

<blockquote>
<p><strong>NOTE:</strong>If application has no applications processes, follow these steps to import them:</p>
</blockquote>

| Step | Details                                                                  | Additional Information                                 |
|:----:|:-------------------------------------------------------------------------|:-------------------------------------------------------|
|  1   | From the list of Applications                                            |                                                        |
|  2   | Click on the "EchoLogic" Application                                     | ![All Applications][APPSallView]                       |
|  3   | First View is the Environments view                                      | ![Application View][AppView]                           |
|      | click on "Processes" Tab                                                 | ![App Processes Tab][AppProcessesTab]                  |
|      | List of all Application Processes will be shown.                         | ![Application Processes][AppProcessesView]             |
|      | Click on **Import Process** Button                                       | ![Import App Process Button][AppImportProcessButton]   |
|      | The Import Process Dialog opens                                          | ![Import Dialog][ImportProcessDialog]                  |
|      | click on **Choose File** Button                                          | ![Import Dialog Select File][ImpProcessChooseFile]     |
|      | From the artifact list select **[App_Processes.yml][FileApp_Processes]** | ![Import Dialog List of Files][ImpProcessFileList]     |
|      | File is selected                                                         | ![Import Dialog File Selected][ImpProcessFileSelected] |
|      | click on **Submit** Button to start import                               | ![Submit Button][ButtonSubmit]                         |
|      | Imported Application Process are shown                                   | ![Application Processes List][AppProcessList]          |

### Importing Data into Test

| Step | Details | Additional Information |
|:----:|:--------|:-----------------------|
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |

### Importing Data into Build

| Step | Details | Additional Information |
|:----:|:--------|:-----------------------|
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |
|      |         |                        |

---

[URLDevOpsLoop]: https://devops.automation.techzone.ibm.com/automation
[LoginDialog]: learn/introduction/media/intro-loop-login-page.png
[SignInButton]: learn/introduction/media/intro-loop-sign-in-button.png
[SwitchToHome]: learn/introduction/media/intro-loop-sidebar-switch-team-space.png
[HomePageSideBar]: learn/introduction/media/intro-loop-home-page-side-bar.png

[LoopHomePageView]: learn/introduction/media/intro-loop-home-page.png
[NoTeamSpaceAvailable]: learn/introduction/media/intro-1-no-teamspace.png

[InstructionsCreateTeamSpace]: learn/introduction/teamspace/index.md
[TSMenue]: learn/introduction/teamspace/media/intro-teamspace-loop-teamspace-01-menue.png
[TSInitCreateButton]: learn/introduction/teamspace/media/intro-teamspace-loop-initial-create-ts-button.png
[TSCreateNewScreen]:learn/introduction/teamspace/media/intro-teamspace-create-ts-screen.png
[TSCreateTSIconColor]: learn/introduction/teamspace/media/intro-teamspace-create-ts-icon.png
[TSCreateNewDialog]: learn/introduction/teamspace/media/intro-teamspace-loop-teamspace-02-create-new-dialog.png
[TSAddTeammember]: learn/introduction/teamspace/media/intro-teamspace-loop-teamspace-03-create-new-search-member.png
[TSTeamMemberAdded]: learn/introduction/teamspace/media/intro-teamspace-loop-teamspace-04-create-new-member-added.png
[TSCreationStarted]: learn/introduction/teamspace/media/intro-teamspace-loop-teamspace-05-create-new-creation.png
[TSCreateionFinished]: learn/introduction/teamspace/media/intro-teamspace-loop-teamspace-06-create-new-success.png
[TSIcon]: learn/introduction/teamspace/media/intro-teamspace-loop-team-space-icon.png
[TSCreateTSentry]: learn/introduction/teamspace/media/intro-teamspace-loop-create-team-space.png
[TSCreateButton]: learn/introduction/teamspace/media/intro-teamspace-loop-create-ts-button.png
[NextButton]: media/common-button-next.png

[LoopHomePageCreateNewLoop]: learn/introduction/loops/media/intro-loops-loop-teamspace-07-create-new-loop-home.png
[CreateNewDialog]: learn/introduction/loops/media/intro-loops-loop-teamspace-08-create-new-loop-dialog.png
[CreateNewLoopButton]: learn/introduction/loops/media/intro-loops-loop-create-new-loop-button.png
[SearchAddMember]: learn/introduction/loops/media/intro-loops-loop-teamspace-10-create-new-loop-member-added.png
[AddedMember]: learn/introduction/loops/media/intro-loops-loop-teamspace-09-create-new-loop-search-member.png
[WithLearningData]: learn/introduction/loops/media/intro-loops-create-new-loop-with-learning-data.png

[InstructionsCreateLoop]: learn/introduction/loops/index.md
[CreateButton]: learn/introduction/loops/media/intro-loops-loop-create-new-loop-button.png
[LoopCreation]: learn/introduction/loops/media/intro-loops-loop-teamspace-11-create-new-loop-creation.png
[LoopCreatedSuccess]: learn/introduction/loops/media/intro-loops-loop-teamspace-12-create-new-loop-success.png
[GoToMyLoops]: learn/introduction/loops/media/intro-loops-loops-go-to-my-loops-button.png
[LoopHomePageWithNoData]: learn/introduction/media/intro-home-page-with-no-data.png
[SetupLoop]: #setup-a-loop
[SetupDemoData]: #setup-demo-data
[GoToSelfenablement]: learn/index.md
[GoToDemoFlow]: demoflow.md
<!--[SetupTSandLoop]: #setup-a-teamspace-and-loop-->
[PlanTile]: learn/introduction/media/intro-loop-switch-to-plan.png
[CentralAppSwitcher]: learn/introduction/media/intro-loop-central-app-control.png
[WhatWouldYouLikeToDoToday]: learn/introduction/media/intro-loop-whatwouldyouliketodotoday.png

[ChooseFileDialog]: learn/plan/setup/media/plan-setup-import-dialog-choose-file.png
[ImportIcon]: learn/plan/setup/media/plan-setup-import-icon.png
[ImportDialog1]: learn/plan/setup/media/plan-setup-import-dialog-01.png
[SelectZipFile]: learn/plan/setup/media/plan-setup-import-select-zip-file.png
[ImportDialog2]: learn/plan/setup/media/plan-setup-import-dialog-02.png
[ImportButton]: learn/plan/setup/media/plan-setup-import-button.png
[ImportStarts]: learn/plan/setup/media/plan-setup-import-started.png
[ImportRunningWithDetails]: learn/plan/setup/media/plan-setup-import-running.png
[ImportClose]: learn/plan/setup/media/plan-setup-import-close-dialog.png
[ImportFinished]: learn/plan/setup/media/plan-setup-import-finished.png

[AppPage]: learn/plan/media/plan-plan-applications-page.png
[PlanWelcomeScreen]: learn/plan/media/plan-plan-welcome-screen.png
[ConfigButton]: learn/plan/media/plan-sidebar-configuration-button.png

[SideBarBoardIcon]: learn/plan/boards/media/plan-boards-plan-project-board-icon.png
[SideBar]: learn/plan/media/plan-plan-sidebar-project-boards.png
[MyBoardWithImportedData]: learn/plan/boards/media/plan-boards-plan-project-board-my-board-with-imported-data.png

[ControlTile]: learn/introduction/media/intro-loop-switch-to-control.png
[ControlProfileSettings]: learn/control/media/control-profile-and-settings-01.png
[ProfileSettings]: learn/control/media/control-profile-and-settings-02.png
[SettingsAccessTokens]: learn/control/media/control-profile-and-settings-03.png
[PATSelectPermissions]: learn/control/media/control-personal-access-token-02.png
[PATGenerateToken]: learn/control/media/control-personal-access-token-01.png
[PATcreated]: learn/control/media/control-personal-access-token-03.png
[PATcopy4ref]: learn/control/media/control-personal-access-token-04.png
[OpenTerminal]: learn/control/media/control-terminal-1-open.png
[CDDocs]: learn/control/media/control-terminal-2-cd-documents.png
[CloneTargetRepo]: learn/control/media/control-terminal-3-clone-target-repo-01.png
[ProvideGitUserName]: learn/control/media/control-terminal-3-clone-target-repo-02.png
[ProvidePAT]: learn/control/media/control-terminal-3-clone-target-repo-03.png
[TargetRepoCloned]: learn/control/media/control-terminal-3-clone-target-repo-4-cloned.png
[TargetRepoEmpty]: learn/control/media/control-terminal-3-clone-target-repo-5-empty.png
[CopyData]: learn/control/media/control-terminal-5-copy-to-target.png
[LSTargetRepo]: learn/control/media/control-terminal-6-target-new-data.png
[GitAddCommit]: learn/control/media/control-terminal-7-git-add-commit.png
[GitPushDone]: learn/control/media/control-terminal-8-git-push.png
[NewDataInRepo]: learn/control/media/control-repo-new-data.png

[DeployTile]: learn/introduction/media/intro-loop-switch-to-deploy.png
[SBResourcesIcon]: learn/deploy/media/deploy-deploy-side-bar-1-resources-icon.png
[SBResourcesText]: learn/deploy/media/deploy-deploy-side-bar-1-resources-icon-with-text.png

[ResAPTab]: learn/deploy/resources/media/deploy-res-deploy-resources-agent-pools-tab.png
[ResAPView]: learn/deploy/resources/media/deploy-res-deploy-resources-agent-pools-view.png
[ResAPCreateButton]: learn/deploy/resources/media/deploy-res-deploy-resources-agent-pools-create-agent-pool-button.png
[ResAPCreateDialog]: learn/deploy/resources/media/deploy-res-deploy-resources-agent-pools-create-dialog.png
[ResAPCreateSelectAgents]: learn/deploy/resources/media/deploy-res-deploy-agent-pool-select-from-list-of-agents.png
[ButtonSave]: media/common-button-save.png
[ResAPList]: learn/deploy/resources/media/deploy-res-deploy-resources-agent-pool-list.png

[SBCompIcon]: learn/deploy/media/deploy-deploy-sidebar-components-icon.png
[SBCompIconText]: learn/deploy/media/deploy-deploy-sidebar-components-icon-with-text.png
[CompView]: learn/deploy/media/deploy-components-list.png
[ButtonImportComps]: learn/deploy/components/media/deploy-comp-component-import-components-button.png
[CompImportDialog]: learn/deploy/components/media/deploy-comp-component-import-dialog.png
[CompImpChooseFileButton]: learn/deploy/components/media/deploy-comp-component-import-dialog-choose-file.png
[Filestochoose]: learn/deploy/components/media/deploy-comp-component-import-files.png
[FileChoosen]: learn/deploy/components/media/deploy-comp-component-import-dialog-file-chosen.png
[CompImported]: learn/deploy/components/media/deploy-comp-component-imported.png

[ResTreeTab]: learn/deploy/resources/media/deploy-res-deploy-resources-resource-tree-tab.png
[ResTreeView]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-view.png
[ResButtonCreateTop]: learn/deploy/resources/media/deploy-res-deploy-resources-create-top-level.png
[ResCreateResDialog]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-create-dialog.png
[ResCreateDialogEnterName]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-create-dialog-enter-name.png
[ResTopLevelCreated]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-top-level-created.png
[Res3DotsMenu]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-3-dots-menu.png
[3Dots]: learn/deploy/media/deploy-deploy-3-dots.png
[ResAddGroup]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-3-dots-add-group.png
[ResSubGroupName]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-sub-group-name.png
[ResSubGroups]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-sub-groups.png
[ResAddAgentPool]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-3-dots-add-agent-pool.png
[AddAgentPoolDialog]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-add-agent-pool-dialog.png
[Agent3DotsMenu]: learn/deploy/resources/media/deploy-res-deploy-resources-agentand-pools-3-dots-menu.png
[AgentAddCompTag]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-3-dots-add-comp-tag.png
[CompTagDialog]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-create-resouce-dialog-component-tag.png
[ResTreeFinal]: learn/deploy/resources/media/deploy-res-deploy-resource-tree-final.png

[SBApplicationsIcon]: learn/deploy/media/deploy-deploy-sidebar-app-icon.png
[SBApplicationsText]: learn/deploy/media/deploy-deploy-sidebar-app-icon-with-text.png
[APPSallView]: learn/deploy/applications/media/deploy-app-deploy-applications-view.png
[AppView]: learn/deploy/applications/media/deploy-app-deploy-application-view.png
[AppProcessesTab]: learn/deploy/applications/media/deploy-app-deploy-application-processes-tab.png
[AppProcessesView]: learn/deploy/applications/media/deploy-app-deploy-app-processes-view.png
[AppImportProcessButton]: learn/deploy/applications/media/deploy-app-deploy-application-import-process-button.png
[ImportProcessDialog]: learn/deploy/applications/media/deploy-app-deploy-import-app-process-dialog-01.png
[ImpProcessChooseFile]: learn/deploy/applications/media/deploy-app-deploy-import-app-process-dialog-02.png
[ImpProcessFileList]: learn/deploy/applications/media/deploy-app-deploy-import-app-process-dialog-03.png
[ImpProcessFileSelected]:learn/deploy/applications/media/deploy-app-deploy-import-app-process-dialog-04.png
[ButtonSubmit]: media/common-button-submit.png
[AppProcessList]: learn/deploy/applications/media/deploy-app-deploy-app-process-list-final.png
[SwitchToAppView]: learn/deploy/applications/index.md#switch-to-applications-view

[APPSallViewEmpty]: learn/deploy/applications/media/deploy-app-deploy-applications-view-empty.png
[ButtonCreateApp]: learn/deploy/applications/media/deploy-app-deploy-app-create-app-button.png
[CreateAppMenu]: learn/deploy/applications/media/deploy-app-deploy-app-create-app-menue.png
[CreateAppDialog]: learn/deploy/applications/media/deploy-app-deploy-app-create-app-dialog-01.png
[CreateAppDialogEnterInfo]: learn/deploy/applications/media/deploy-app-deploy-app-create-app-dialog-02.png
[ButtonImportApps]: learn/deploy/media/deploy-deploy-import-apps-button.png
[ImportAppsDialog]: learn/deploy/media/deploy-deploy-import-apps-dialog.png
[ButtonChooseFile]: media/common-button-choose-file.png
[FileSelect]: learn/deploy/media/deploy-deploy-import-apps-select-file.png
[AppCompTab]: learn/deploy/applications/media/deploy-app-deploy-apps-components-tab.png
[AppCompView]: learn/deploy/applications/media/deploy-app-deploy-apps-components-view.png
[ButtonAddComp]: learn/deploy/applications/media/deploy-app-deploy-apps-add-components-button.png
[SelectCompToAdd]: learn/deploy/applications/media/deploy-app-deploy-apps-add-components-dialog.png
[AppCompViewFinal]: learn/deploy/applications/media/deploy-app-deploy-apps-components-view-final.png
[ButtonCreateEnv]: learn/deploy/applications/media/deploy-app-deploy-app-create-env-button.png
[CreateEnvDialog]: learn/deploy/applications/media/deploy-app-deploy-app-create-env-dialog-01.png
[CreateEnvDialogColor]: learn/deploy/applications/media/deploy-app-deploy-app-create-env-dialog-02.png
[CreateEnvDialogSelectedConor]: learn/deploy/applications/media/deploy-app-deploy-app-create-env-dialog-03.png
[AppEnvironmentsView]: learn/deploy/applications/media/deploy-app-deploy-app-environment-list.png
[ENVselect]: learn/deploy/applications/media/deploy-app-deploy-app-environment-select.png
[ENVView]: learn/deploy/applications/media/deploy-app-deploy-env-view.png
[ENVAddBaseRes]: learn/deploy/applications/media/deploy-app-deploy-env-add-base-res-button.png
[ENVAddResDialog]: learn/deploy/applications/media/deploy-app-deploy-env-add-res-dialog.png
[EnvAddResSelected]: learn/deploy/applications/media/deploy-app-deploy-env-add-res-selected.png
[SwitchToRes]: learn/deploy/resources/index.md
[SwitchToDeploy]: learn/deploy/index.md
[SwitchToPlan]: learn/plan/index.md
[FileApp_Processes]: https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/raw/main/files/deploy/artifacts/App_Processes.json
[FileComp_Echo]: https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/raw/main/files/deploy/artifacts/Comp_Echo.json
[FileComp_Logic]: https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/raw/main/files/deploy/artifacts/Comp_Logic.json
[FileApp_NoComps]: https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/raw/main/files/deploy/artifacts/App_EchoLogic_NoComponents.json
[ButtonAdd]: media/common-button-add.png
[URLDemoAppLatestVersion]: https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/releases/latest
[AssetsSection]: media/common-desktop-echo-logic-demo-app-latest-version-assets.png
[LatestVersionView]: media/common-desktop-echo-logic-demo-app-latest-version-view.png
[LatestVersionZip]: media/common-desktop-echo-logic-demo-app-latest-version-source-code-zip.png
[DownloadToFolder]: media/common-desktop-browser-save-to-downloads.png
[BrowserDLIcon]: media/common-desktop-browser-downloads-icon.png
[BrowserDLdFile]: media/common-desktop-browser-downloads-open-file.png
[DLwithUnzippedFile]: media/common-desktop-downloads-echo-logic-demo-app-zip.png
[DLPlanFolder]: media/common-desktop-downloads-echo-logic-app-zip-plan-folder.png
[SwitchToControl]: learn/control/index.md
