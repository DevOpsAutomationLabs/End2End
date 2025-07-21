# Setup

Manual Setup of Demo Environment on top of pre-provided DevOps Loop Environment.

## TechZone

TODO: get more information which environment to use and how to use the "Frontend"

## Start Here

### How to log in

| Step | Details                                                                                                     | Additional Information                                       |
|:----:|:------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|
|  1   | [Open DevOps Loop in Browser][URLDevOpsLoop]                                                                | URL= 'https://devops.automation.techzone.ibm.com/automation' |
|  2   | Enter Your Credentials in the Login Screen <br> **User:** 'demo@devops.loop' <br>  **Password:** 'Passw0rd' | ![Login Screen][LoginDialog]                                 |
|  3   | Click on the Sign In Button                                                                                 | ![Sign In button][SignInButton]                              |

### The Home Page

| Step | Details                                                                                                              | Additional Information                             |
|:----:|:---------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
|  1   | **If no Teamspace is available** follow the steps to proceed with [setting up a Teamspace and Loop][SetupTSandLoop]  | ![No Teamspace available][NoTeamSpaceAvailable]    |
|  2   | **If a Teamspace is available** you will be directed to your homepage and it will provide you an overview your Loops |                                                    |
| 2.1  | If **no Loop** exists, proceed with [Setup a Loop][SetupLoop]                                                        | ![Empty Loops Homepage][LoopHomePageCreateNewLoop] |
| 2.2  | If your **loop is empty** proceed with [Setting up Demo Data][SetupDemoData]                                         | ![Home Page][LoopHomePageWithNoData]               |
| 2.3  | If your **loop has data** proceed with the [Demo Flow][GoToDemoFlow] or [Self Enablement][GoToSelfenablement]        | ![Home Page][LoopHomePageView]                     |

## Setup a Teamspace and Loop

### Setup a Teamspace

| Step | Details                                                                                           | Additional Information                                                  |
|:----:|:--------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|
|  1   | Click on the Teamspace icon ![TeamSpace Icon][TSIcon] to view your Teamspaces or create a new one | ![Teamspace menue][TSMenue]                                             |
|  2   | Click on **Create TeamSpace**                                                                     | ![TeamSpace menue - Create TeamSpace Link][TSCreateTSentry]             |
|  3   | Enter a name and a Description                                                                    |                                                                         |
|      | **Example Name: 'Demo'** <br>**Example Description: 'Teamspace for Demos'**                       | ![Teamspace - Create New][TSCreateNewDialog]                            |
|  4   | press **Next** Button to proceed                                                                  | ![Next Button][NextButton]                                              |
|  5   | You can search and **add** Teammembers to a Teamspace                                             | ![Teamspace - Create New - search Member][TSAddTeammember]              |
|  6   | Teammember is added to a list. Proceed to add more members if needed.                             | ![Teamspace - Create New - Member added][TSTeamMemberAdded]             |
|  7   | Press **Create** to proceed                                                                       | ![Create TeamSpace Button][TSCreateButton]                              |
|  8   | Teamspace creation will take a few moments, as soon as it finishes a success dialog will be shown | ![Teamspace - Create New - creation process started][TSCreationStarted] |
|  9   | Teamspace created. Click on **Go to Teamspace** for next steps                                    | ![Teamspace - Create New - creation successfull][TSCreateionFinished]   |
|  10  | When the creation of a TeamSpace is finished you will be forwarded                                |                                                                         |
|      | to your empty loops home page for your new TeamSpace                                              | ![Empty Loops Homepage][LoopHomePageCreateNewLoop]                      |
|      | Please proceed with [Setting up a Loop][SetupLoop]                                                |                                                                         |

### Setup a Loop

| Step | Details                                                                                     | Additional Information                                           |
|:----:|:--------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|
|  1   | Press the **Create Loop** Button                                                            | ![Create New Loop Button][CreateNewLoopButton]                   |
|  2   | In the Loop creation Dialog enter a name and a description                                  | ![Loops - Create New - Dialog][CreateNewDialog]                  |
|  3   | press the **Next** Button to proceed                                                        | ![Next Button][NextButton]                                       |
|  4   | You can search and add a Teammember to the Loop                                             | ![Loops - Create New - search Member][SearchAddMember]           |
|  5   | a new Member is added                                                                       | ![Loops - Create New - member added][AddedMember]                |
|  6   | Press the **Create** Button to start Loop creation                                          | ![Create Button][CreateButton]                                   |
|  7   | Loop creation can take a few moments, as soon as it finishes a Success screen will be shown | ![Loops - Create New - create process started][LoopCreation]     |
|  8   | Creation is successfull                                                                     | ![Loops - Create New - creation successfull][LoopCreatedSuccess] |
|  9   | Press now **Go to my Loops** Button to proceed                                              | ![Go to my Loop Button][GoToMyLoops]                             |
|  10  | As your Loop has no data please proceed with [Setting up Demo Data][SetupDemoData]          | ![Home Page][LoopHomePageWithNoData]                             |

## Setup Demo Data

### Importing Demo Data into Plan

| Step | Details                                                                      | Additional Information                                         |
|:----:|:-----------------------------------------------------------------------------|:---------------------------------------------------------------|
|  1   | Switch to [Plan](plan/index.md)                                              |                                                                |
|      | 1.1 by either pressing "Let's go to Plan" button on its tile                 | ![Plan Tile lets go][PlanTile]                                 |
|      | 1.2 by using the central app switcher on the top left of your screen         | ![Central App Switcher][AppSwitcher]                           |
|      | 1.3 by using the button/link from What would you like to do today section    | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |
|  2   | Click on **Let's Go** on the "EchoL" application                             | ![Application Page][AppPage]                                   |
|      | 2.1 if you get a *Welcome Screen* click to close to proceed with data import | ![Welcome Screen][PlanWelcomeScreen]                           |
|  3   | click in the **Sidebar**                                                     |                                                                |
|      | 3.1 on **Configuration**                                                     | ![Config Button][ConfigButton]                                 |
|      | 3.2 Use the **Import** Feature of plan to load sample data                   | ![Import Icon][ImportIcon]                                     |
|  4   | **NOTE** Download the Demo Data File onto your local drive                   |                                                                |
|      | 4.1 Click oon [EchoLogic Zip File from files section][EchoLogicZipFile]      |                                                                |
|      | 4.2 and save the file on your local drive (best into Downloads)              | ![Download Demo Data file][DownloadDemoDataFile]               |
|  5   | In the Dialog for importing record data                                      | ![Import Dialog][ImportDialog1]                                |
|      | 5.1 click the Choose File Button                                             | ![Choose File Button][ChooseFileDialog]                        |
|      | 5.2 select the sample data file (from Step 2) to be imported                 | ![Select the file][SelectZipFile]                              |
|      | 5.3 Now we have the file selected                                            | ![Import Dialog with selected File][ImportDialog2]             |
|      | 5.4 Press the Import Button to start                                         | ![Press Import Button][ImportButton]                           |
|  6   | The Import process starts.                                                   | ![Import Process starting][ImportStarts]                       |
|      | 6.1 By clicking on Details the process output can be viewed                  | ![Import running with Details][ImportRunningWithDetails]       |
|      | 6.2 Import has finished                                                      | ![Import Finished][ImportFinished]                             |
|      | 6.3 Press the close button (bottom right on the screen)                      | ![Close Button][ImportClose]                                   |
|  7   | verify that data has been loaded                                             |                                                                |
|      | 7.1 Click on **Project Board icon** on the Sidebar                           | ![Board Icon in sidebar][SideBarBoardIcon]                     |
|      |                                                                              | ![sidebar][SideBar]                                            |
|      | 7.2 Your board should look similar to this screenshot                        | ![My Board with imported data][MyBoardWithImportedData]        |

### Importing Demo Data into Control

Task: Copy files and folders from [Demo App repository](https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp.git "https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp.git") ```URL: https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp.git``` into target repository.

| Step | Details                                                                   | Additional Information                                         |
|:----:|:--------------------------------------------------------------------------|:---------------------------------------------------------------|
|  1   | Switch to [Control](control/index.md)                                     |                                                                |
|      | 1.1 by either pressing "Let's go to Control" button on its tile           | ![Control Tile lets go][ControlTile]                           |
|      | 1.2 by using the central app switcher on the top left of your screen      | ![Central App Switcher][AppSwitcher]                           |
|      | 1.3 by using the button/link from What would you like to do today section | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |

#### Setup a Personal Access Token

| Step | Details                                                          | Additional Information                                      |
|:----:|:-----------------------------------------------------------------|:------------------------------------------------------------|
|  1   | Click on the top right on Profile and Settings                   | ![Profile and Settigs][ControlProfileSettings]              |
|      | 1.1 Select **Settings**                                          | ![Settings][ProfileSettings]                                |
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
|  6   | Clone the source repository                                 | ![clone source repository][CloneSourceRepo]                                            |
|      | 6.1 Git Clone Command                                       | ```git clone https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp.git```          |
|      | 6.2 check Documents folder ```ls```                         | ![list all folders in Documents][LSDocs]                                               |
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

### Setup Demo Data in Deploy

| Step | Details                                                                   | Additional Information                                         |
|:----:|:--------------------------------------------------------------------------|:---------------------------------------------------------------|
|  1   | Switch to [Deploy](deploy/index.md)                                       |                                                                |
|      | 1.1 by either pressing "Let's go to Deploy" button on its tile            | ![Deploy Tile lets go][DeployTile]                             |
|      | 1.2 by using the central app switcher on the top left of your screen      | ![Central App Switcher][AppSwitcher]                           |
|      | 1.3 by using the button/link from What would you like to do today section | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |

#### Setup an Agent Pool

| Step | Details                                                     | Additional Information                          |
|:----:|:------------------------------------------------------------|:------------------------------------------------|
|  1   | Switch to [Resources](learn/deploy/resources/index.md) View |                                                 |
|      | by clicking on the Sidebar                                  | ![Sidebar Resources][SBResourcesIcon]           |
|      |                                                             | ![Sidebar Resources with Text][SBResourcesText] |
|  2   | Switch to AgentPools View                                   | ![Agent Pools Tab][ResAPTab]                    |
|  3   | In this view                                                | ![AgentPool View][ResAPView]                    |
|  4   | click on                                                    | ![Create AP Button][ResAPCreateButton]          |
|  5   | In the **Create Agent Pool** Dialog                         | ![AP Creation Dialog][ResAPCreateDialog]        |
|      | 5.1 Enter "demo" in the name field                          |                                                 |
|      | 5.2 Select all agents                                       | ![Select Agents][ResAPCreateSelectAgents]       |
|      | 4.3 Click on **Save** Button                                | ![Save Button][ButtonSave]                      |
|  6   | New Agent Pool is listed in the View                        | ![Agent Pool List][ResAPList]                   |

#### Importing Components

| Step | Details                                       | Additional Information                         |
|:----:|:----------------------------------------------|:-----------------------------------------------|
|  1   | In the sidebar select the **Components** Icon | ![Sidebar Components Icon][SBCompIcon]         |
|      |                                               | ![Sidebar ComponentsIcon Text][SBCompIconText] |
|  2   | Components View                               | ![Components View][CompView]                   |
|  3   | click on **Import Component** Button          | ![Import Component Button][ButtonImportComps]  |
|  4   | Import Dialog opens                           | ![Import Dialog][CompImportDialog]             |
|  5   | click on **Chose File** Button                | ![Choose File Button][CompImpChooseFileButton] |
|  6   | Switch to folder with files and select one    | ![Files to choose][Filestochoose]              |
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

| Step | Details                                                       | Additional Information                       |
|:----:|:--------------------------------------------------------------|:---------------------------------------------|
|      | If no Applications are available                              | ![Empty Applications View][APPSallViewEmpty] |
|      | click on the **Import Applications** Button                   | ![Import App Button][ButtonImportApps]       |
|      | If necessary change the settings in the Dialog                | ![Import App dialog][ImportAppsDialog]       |
|      | Click on the **Choose File** Button to select App Import file | ![Choose File][ButtonChooseFile]             |
|      | Select file "" in your file explorer                          | ![Select Import File][FileSelect]            |
|      | click on **Submit** Button to start Import                    | ![Submit Button][ButtonSubmit]               |
|      | Application is shown                                          | ![Application View][AppView]                 |

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

| Step | Details                                 | Additional Information                        |
|:----:|:----------------------------------------|:----------------------------------------------|
|      | Click on **Components** Tab             | ![App Components Tab][AppCompTab]             |
|      | Components View is shown                | ![App Components View][AppCompView]           |
|      | Click on **Add Components** Button      | ![Add Comp Button][ButtonAddComp]             |
|      | In the Dialog select "Echo" and "Logic" | ![Select Components to add][SelectCompToAdd]  |
|      | Click on **Save** Button                | ![Save Button][ButtonSave]                    |
|      | Components View with added Components   | ![App Comp View with Comps][AppCompViewFinal] |

##### Import Processes

| Step | Details                                             | Additional Information                                 |
|:----:|:----------------------------------------------------|:-------------------------------------------------------|
|  1   | From the list of Applications                       |                                                        |
|  2   | Click on the "EchoLogic" Application                | ![All Applications][APPSallView]                       |
|  3   | First View is the Environments view                 | ![Application View][AppView]                           |
|      | click on "Processes" Tab                            | ![App Processes Tab][AppProcessesTab]                  |
|      | List of all Application Processes will be shown.    | ![Application Processes][AppProcessesView]             |
|      | Click on **Import Process** Button                  | ![Import App Process Button][AppImportProcessButton]   |
|      | The Import Process Dialog opens                     | ![Import Dialog][ImportProcessDialog]                  |
|      | click on **Choose File** Button                     | ![Import Dialog Select File][ImpProcessChooseFile]     |
|      | From the artifact list select **App_Processes.yml** | ![Import Dialog List of Files][ImpProcessFileList]     |
|      | File is selected                                    | ![Import Dialog File Selected][ImpProcessFileSelected] |
|      | click on **Submit** Button to start import          | ![Submit Button][ButtonSubmit]                         |
|      | Imported Application Process are shown              | ![Application Processes List][AppProcessList]          |

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

[LoopHomePageView]: learn/introduction/media/Loop_Home_Page.png
[URLDevOpsLoop]: https://devops.automation.techzone.ibm.com/automation
[LoginDialog]: learn/introduction/media/Loop_Login_Page.png
[SignInButton]: learn/introduction/media/Loop_SignInButton.png
[NoTeamSpaceAvailable]: learn/introduction/media/INIT_1_NoTeamspace.png

[TSMenue]: learn/introduction/teamspace/media/Loop_Teamspace_01_Menue.png
[TSCreateNewDialog]: learn/introduction/teamspace/media/Loop_Teamspace_02_CreateNew_Dialog.png
[TSAddTeammember]: learn/introduction/teamspace/media/Loop_Teamspace_03_CreateNew_searchMember.png
[TSTeamMemberAdded]: learn/introduction/teamspace/media/Loop_Teamspace_04_CreateNew_MemberAdded.png
[TSCreationStarted]: learn/introduction/teamspace/media/Loop_Teamspace_05_CreateNew_creation.png
[TSCreateionFinished]: learn/introduction/teamspace/media/Loop_Teamspace_06_CreateNew_success.png
[TSIcon]: learn/introduction/teamspace/media/Loop_TeamSpaceIcon.png
[TSCreateTSentry]: learn/introduction/teamspace/media/Loop_CreateTeamSpace.png
[TSCreateButton]: learn/introduction/teamspace/media/Loop_Create_TS_Button.png
[NextButton]: media/Button_NEXT.png

[LoopHomePageCreateNewLoop]: learn/introduction/loops/media/Loop_Teamspace_07_CreateNewLoop_Home.png
[CreateNewDialog]: learn/introduction/loops/media/Loop_Teamspace_08_CreateNewLoop_Dialog.png
[CreateNewLoopButton]: learn/introduction/loops/media/Loop_CreateNewLoop_Button.png
[SearchAddMember]: learn/introduction/loops/media/Loop_Teamspace_09_CreateNewLoop_searchMember.png
[AddedMember]: learn/introduction/loops/media/Loop_Teamspace_10_CreateNewLoop_MemberAdded.png

[CreateButton]: learn/introduction/loops/media/Loop_CreateNewLoop_Button.png
[LoopCreation]: learn/introduction/loops/media/Loop_Teamspace_11_CreateNewLoop_creation.png
[LoopCreatedSuccess]: learn/introduction/loops/media/Loop_Teamspace_12_CreateNewLoop_success.png
[GoToMyLoops]: learn/introduction/loops/media/Loops_GoToMyLoops_Button.png
[LoopHomePageWithNoData]: learn/introduction/media/LOOP_Home_Page_WithNoData.png
[SetupLoop]: #setup-a-loop
[SetupDemoData]: #setup-demo-data
[GoToSelfenablement]: learn/index.md
[GoToDemoFlow]: demoflow.md
[SetupTSandLoop]: #setup-a-teamspace-and-loop
[PlanTile]: learn/introduction/media/Loop_switch_to_Plan.png
[AppSwitcher]: learn/introduction/media/Loop_central_app_control.png
[WhatWouldYouLikeToDoToday]: learn/introduction/media/Loop_whatwouldyouliketodotoday.png

[ChooseFileDialog]: learn/plan/setup/media/PLAN_Import_Dialog_ChooseFile.png
[ImportIcon]: learn/plan/setup/media/PLAN_Import_Icon.png
[ImportDialog1]: learn/plan/setup/media/PLAN_Import_Dialog1.png
[SelectZipFile]: learn/plan/setup/media/PLAN_Import_Select_ZipFile.png
[ImportDialog2]: learn/plan/setup/media/PLAN_Import_Dialog2.png
[ImportButton]: learn/plan/setup/media/PLAN_Import_Button.png
[ImportStarts]: learn/plan/setup/media/PLAN_Import_started.png
[ImportRunningWithDetails]: learn/plan/setup/media/PLAN_Import_running.png
[ImportClose]: learn/plan/setup/media/PLAN_Import_Close_dialog.png
[EchoLogicZIPFile]: https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/raw/main/files/plan/EchoLogic.zip
[ImportFinished]: learn/plan/setup/media/PLAN_Import_finished.png
[DownloadDemoDataFile]: learn/plan/setup/media/Download_PlanDemoDataFile.png

[AppPage]: learn/plan/media/Plan_Applications_Page.png
[PlanWelcomeScreen]: learn/plan/media/Plan_welcome_screen.png
[ConfigButton]: learn/plan/media/PLAN_Sidebar_ConfigurationButton.png

[SideBarBoardIcon]: learn/plan/boards/media/Plan_ProjectBoard_Icon.png
[SideBar]: learn/plan/media/Plan_Sidebar_ProjectBoards.png
[MyBoardWithImportedData]: learn/plan/boards/media/Plan_ProjectBoard_myBoard_with_imported_data.png

[ControlTile]: learn/introduction/media/Loop_switch_to_Control.png
[ControlProfileSettings]: learn/control/media/CONTROL_ProfileAndSettings1.png
[ProfileSettings]: learn/control/media/CONTROL_ProfileAndSettings2.png
[SettingsAccessTokens]: learn/control/media/CONTROL_ProfileAndSettings3.png
[PATSelectPermissions]: learn/control/media/CONTROL_PersonalAccessToken2.png
[PATGenerateToken]: learn/control/media/CONTROL_PersonalAccessToken1.png
[PATcreated]: learn/control/media/CONTROL_PersonalAccessToken3.png
[PATcopy4ref]: learn/control/media/CONTROL_PersonalAccessToken4.png
[OpenTerminal]: learn/control/media/Terminal_1_Open.png
[CDDocs]: learn/control/media/Terminal_2_cd_documents.png
[CloneTargetRepo]: learn/control/media/Terminal_3_clone_target_repo1.png
[ProvideGitUserName]: learn/control/media/Terminal_3_clone_target_repo2.png
[ProvidePAT]: learn/control/media/Terminal_3_clone_target_repo3.png
[TargetRepoCloned]: learn/control/media/Terminal_3_clone_target_repo4_cloned.png
[TargetRepoEmpty]: learn/control/media/Terminal_3_clone_target_repo5_empty.png
[CloneSourceRepo]: learn/control/media/Terminal_4_clone_source_repo1.png
[LSDocs]: learn/control/media/Terminal_4_clone_source_repo2.png
[CopyData]: learn/control/media/Terminal_5_copy_to_target.png
[LSTargetRepo]: learn/control/media/Terminal_6_target_new_data.png
[GitAddCommit]: learn/control/media/Terminal_7_git_add_commit.png
[GitPushDone]: learn/control/media/Terminal_8_git_push.png
[NewDataInRepo]: learn/control/media/CONTROL_Repo_New_Data.png

[DeployTile]: learn/introduction/media/Loop_switch_to_Deploy.png
[SBResourcesIcon]: learn/deploy/media/Deploy_SideBar_1_ResourcesIcon.png
[SBResourcesText]: learn/deploy/media/Deploy_SideBar_1_ResourcesIconWithText.png

[ResAPTab]: learn/deploy/resources/media/Deploy_Resources_AgentPoolsTab.png
[ResAPView]: learn/deploy/resources/media/Deploy_Resources_AgentPoolsView.png
[ResAPCreateButton]: learn/deploy/resources/media/Deploy_Resources_AgentPools_CreateAgentPoolButton.png
[ResAPCreateDialog]: learn/deploy/resources/media/Deploy_Resources_AgentPoolsCreateDialog.png
[ResAPCreateSelectAgents]: learn/deploy/resources/media/Deploy_AgentPool_SelectFromListOfAgents.png
[ButtonSave]: media/Button_Save.png
[ResAPList]: learn/deploy/resources/media/Deploy_Resources_AgentPool_list.png

[SBCompIcon]: learn/deploy/media/Deploy_Sidebar_ComponentsIcon.png
[SBCompIconText]: learn/deploy/media/Deploy_Sidebar_ComponentsIconWithText.png
[CompView]: learn/deploy/components/media/Components_View.png
[ButtonImportComps]: learn/deploy/components/media/Component_Import_Components_Button.png
[CompImportDialog]: learn/deploy/components/media/Component_Import_Dialog.png
[CompImpChooseFileButton]: learn/deploy/components/media/Component_Import_Dialog_ChooseFile.png
[Filestochoose]: learn/deploy/components/media/Component_Import_Files.png
[FileChoosen]: learn/deploy/components/media/Component_Import_Dialog_FileChosen.png
[CompImported]: learn/deploy/components/media/Component_Imported.png

[ResTreeTab]: learn/deploy/resources/media/Deploy_Resources_ResourceTreeTab.png
[ResTreeView]: learn/deploy/resources/media/Deploy_ResourceTree_View.png
[ResButtonCreateTop]: learn/deploy/resources/media/Deploy_Resources_CreateTopLevel.png
[ResCreateResDialog]: learn/deploy/resources/media/Deploy_ResourceTree_CreateDialog.png
[ResCreateDialogEnterName]: learn/deploy/resources/media/Deploy_ResourceTree_CreateDialog_EnterName.png
[ResTopLevelCreated]: learn/deploy/resources/media/Deploy_ResourceTree_TopLevelCreated.png
[Res3DotsMenu]: learn/deploy/resources/media/Deploy_ResourceTree_3DotsMenu.png
[3Dots]: learn/deploy/media/Deploy_3Dots.png
[ResAddGroup]: learn/deploy/resources/media/Deploy_ResourceTree_3Dots_addGroup.png
[ResSubGroupName]: learn/deploy/resources/media/Deploy_ResourceTree_SubGroupName.png
[ResSubGroups]: learn/deploy/resources/media/Deploy_ResourceTree_SubGroups.png
[ResAddAgentPool]: learn/deploy/resources/media/Deploy_ResourceTree_3Dots_addAgentPool.png
[AddAgentPoolDialog]: learn/deploy/resources/media/Deploy_ResourceTree_Add_AgentPoolDialog.png
[Agent3DotsMenu]: learn/deploy/resources/media/Deploy_Resources_AgentandPools_3DotsMenu.png
[AgentAddCompTag]: learn/deploy/resources/media/Deploy_ResourceTree_3Dots_addCompTag.png
[CompTagDialog]: learn/deploy/resources/media/Deploy_ResourceTree_CreateResouceDialog_ComponentTag.png
[ResTreeFinal]: learn/deploy/resources/media/Deploy_ResourceTree_Final.png

[SBApplicationsIcon]: learn/deploy/media/Deploy_SideBar_ApplicationsIcon.png
[SBApplicationsText]: learn/deploy/media/Deploy_SideBar_ApplicationsIconWithText.png
[APPSallView]: learn/deploy/applications/media/Deploy_Applications_View.png
[AppView]: learn/deploy/applications/media/Deploy_Application_View.png
[AppProcessesTab]: learn/deploy/applications/media/Deploy_Application_ProcessesTab.png
[AppProcessesView]: learn/deploy/applications/media/Deploy_App_Processes_view.png
[AppImportProcessButton]: learn/deploy/applications/media/Deploy_Application_ImportProcessButton.png
[ImportProcessDialog]: learn/deploy/applications/media/Deploy_ImportAppProcess_Dialog1.png
[ImpProcessChooseFile]: learn/deploy/applications/media/Deploy_ImportAppProcess_Dialog2.png
[ImpProcessFileList]: learn/deploy/applications/media/Deploy_ImportAppProcess_Dialog3.png
[ImpProcessFileSelected]:learn/deploy/applications/media/Deploy_ImportAppProcess_Dialog4.png
[ButtonSubmit]: media/Button_Submit.png
[AppProcessList]: learn/deploy/applications/media/Deploy_AppProcess_ListFinal.png
[SwitchToAppView]: learn/deploy/applications/index.md#switch-to-applications-view

[APPSallViewEmpty]: learn/deploy/applications/media/Deploy_Applications_View_Empty.png
[ButtonCreateApp]: learn/deploy/applications/media/Deploy_App_CreateAppButton.png
[CreateAppMenu]: learn/deploy/applications/media/Deploy_App_CreateAppMenue.png
[CreateAppDialog]: learn/deploy/applications/media/DevOps_App_CreateApp_Dialog1.png
[CreateAppDialogEnterInfo]: learn/deploy/applications/media/DevOps_App_CreateApp_Dialog2.png
[ButtonImportApps]: learn/deploy/media/Deploy_Import_Apps_Button.png
[ImportAppsDialog]: learn/deploy/media/Deploy_Import_Apps_Dialog.png
[ButtonChooseFile]: media/Button_ChooseFile.png
[FileSelect]: learn/deploy/media/Deploy_Import_Apps_SelectFile.png
[AppCompTab]: learn/deploy/applications/media/Deploy_Apps_ComponentsTab.png
[AppCompView]: learn/deploy/applications/media/Deploy_Apps_Components_View.png
[ButtonAddComp]: learn/deploy/applications/media/Deploy_Apps_AddComponents_Button.png
[SelectCompToAdd]: learn/deploy/applications/media/Deploy_Apps_AddComponents_Dialog.png
[AppCompViewFinal]: learn/deploy/applications/media/Deploy_Apps_Components_View_Final.png
