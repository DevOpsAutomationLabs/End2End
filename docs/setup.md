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

### Setup a Teamspace and Loop

#### Setup a Teamspace

| Step | Details                                                                                                                                                                         | Additional Information                                                  |
|:----:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|
|  1   | Click on the Teamspace icon ![TeamSpace Icon][TSIcon] to view your Teamspaces or create a new one                                                                               | ![Teamspace menue][TSMenue]                                             |
|  2   | Click on **Create TeamSpace**                                                                                                                                                   | ![TeamSpace menue - Create TeamSpace Link][TSCreateTSentry]             |
|  3   | Enter a name and a Description <br>**Example Name: 'Demo'** <br>**Example Description: 'Teamspace for Demos'** <br>                                                             | ![Teamspace - Create New][TSCreateNewDialog]                            |
|  4   | press **Next** Button to proceed                                                                                                                                                | ![Next Button][NextButton]                                              |
|  5   | You can search and **add** Teammembers to a Teamspace                                                                                                                           | ![Teamspace - Create New - search Member][TSAddTeammember]              |
|  6   | Teammember is added to a list. Proceed to add more members if needed.                                                                                                           | ![Teamspace - Create New - Member added][TSTeamMemberAdded]             |
|  7   | Press **Create** to proceed                                                                                                                                                     | ![Create TeamSpace Button][TSCreateButton]                              |
|  8   | Teamspace creation will take a few moments, as soon as it finishes a success dialog will be shown                                                                               | ![Teamspace - Create New - creation process started][TSCreationStarted] |
|  9   | Teamspace created. Click on **Go to Teamspace** for next steps                                                                                                                  | ![Teamspace - Create New - creation successfull][TSCreateionFinished]   |
|  10  | When the creation of a TeamSpace is finished you will be forwarded to your empty loops home page for your new TeamSpace <br> Please proceed with [Setting up a Loop][SetupLoop] | ![Empty Loops Homepage][LoopHomePageCreateNewLoop]                      |

#### Setup a Loop

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

### Setup Demo Data

#### Importing Demo Data into Plan

| Step | Details                                                                                          | Additional Information                                         |
|:----:|:-------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
|  1   | Switch to PLAN                                                                                   |                                                                |
|      | 1.1 by either pressing "Let's go to Plan" button on its tile                                     | ![Plan Tile lets go][PlanTile]                                 |
|      | 1.2 by using the central app switcher on the top left of your screen                             | ![Central App Switcher][AppSwitcher]                           |
|      | 1.3 by using the button/link from What would you like to do today section                        | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |
|  1   | In the Side bar click on **Configuration** to use the Import Feature of plan to load sample data | ![Import Icon][ImportIcon]                                     |
|  2   | In the Dialog for importing record data                                                          | ![Import Dialog][ImportDialog1]                                |
|      | click the Choose File Button to select the sample data file to be imported                       | ![Choose File Button][ChooseFileDialog]                        |
|  3   | Select the [EchoLogic Zip File from files section][EchoLogicZipFile]                             | ![Select the file][SelectZipFile]                              |
|  4   | Now we have the file selected                                                                    | ![Import Dialog with selected File][ImportDialog2]             |
|  5   | Presss the Import Button to start                                                                | ![Press Import Button][ImportButton]                           |
|  6   | The Import process starts.                                                                       | ![Import Process starting][ImportStarts]                       |
|  7   | By clicking on Details the process output can be viewed                                          | ![Import running with Details][ImportRunningWithDetails]       |
|  8   | Import has finished                                                                              | ![Import Finished][ImportFinished]                             |
|  9   | Press the close button (bottom right on the screen)                                              | ![Close Button][ImportClose]                                   |
|      |                                                                                                  |                                                                |
|      |                                                                                                  |                                                                |
|      |                                                                                                  |                                                                |
|      |                                                                                                  |                                                                |
|      |                                                                                                  |                                                                |
|      |                                                                                                  |                                                                |
|      |                                                                                                  |                                                                |
|      |                                                                                                  |                                                                |
|      |                                                                                                  |                                                                |
|      |                                                                                                  |                                                                |

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
