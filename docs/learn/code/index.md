# Code Lab

TODO: update flow, app references and screenshots

## Introduction

TODO: add here more about Code

## How to work with Code

### Switch to Code

--8<-- [start:Switch2Code]

| Step | Details                                                                                          | Additional Information { width="50%" }                                           |
|:----:|:-------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------|
|  1   | You can always switch using the central app switcher on the top left of your screen              | ![Central App Switcher][AppSwitcher]                                             |
|  2   | Overview Page of Code is shown with two tabs.                                                    | ![Two sub tabs][CodeDevContainerView]                           |
|  3   | One for Running Dev Containers                                                                   |                                                                                  |
| 3.1  | Which may be empty when no Dev Container has been started                                        | ![No running Dev Container][NoRunningDevContainer]            |
| 3.2  | Or all running Dev Containers with detailed Information is shown                                 | ![List of running Dev Container][ListOfRunningDevContainer]          |
| 3.3  | Open the running container by clicking on **Let's Go** Button                                    | ![Lets go with this container][LetsGoButton]              |
| 3.4  | If no more needed press **Terminate** button to shutdown and remove it                           | ![Terminate this container][TerminateButton]              |
|  4   | And another for all available types of Dev Container                                             | ![Available Dev Container][ListOfAvailableDevContainer]           |
| 4.1  | By clicking on **Let's Go** Button a Dev Container (for example WatsonX) it will be instantiated | ![Lets go with this container][LetsGoButton]              |
| 4.2  | and a message will be shown in a new window                                                      | ![Setting up a dev container environment][SettingUpEnv] |
| 4.3  | **it takes a few seconds till your environment is setup and running, please be patient**         |                                                                                  |
| 4.4  | Code is shown (example: WatsonX)                                                                 | ![Code is shown for WatsonX][WCAxNoRepo]        |

--8<-- [end:Switch2Code]

### How to use Code

--8<-- [start:UseCode]

| Step | Details                                                                            | Additional Information { width="50%" } |
|:----:|:-----------------------------------------------------------------------------------|:---------------------------------------|
|  1   | Explain that we showed the link between a work item and the code in control        |                                        |
|  2   | [Open the repository with Code from Control Repo view][REFControlOpenWithCode] |                                        |
|  3   | Use WCA to explain code and generate some new code                                 | ![Explain code part 1][WCAxExplain1]   |
|  3.1    | here an example | ![Explain code part 2][WCAExplain2]    |
| 4 | change some code and save the changes to be able to commit to Control | |
|  4.1   | Add comment with work item number                                    | ![Commit Code with WI][CommitWithWI]   |
| 4.2 | Click on **Commit&Push** by opening the **Commit Button** | ![Commit and push][CommitAndPush] |
| 4.3 | a message might appear about **staging** changes, press the **Always** button | ![asking about git staging][GitStagingQuestion] |
| 4.4 | a message might appear about **fetching** changes from git, press **Fetch** | ![periodially use Git Fetch][GitFetchQuestion] |

--8<-- [end:UseCode]

---
<!-- 

## Using Code

### First entry view, Toggle bar and Sidebars

Your first entry is a clean and empty workspace:

![First Entry](media/Code_FirstEntry.png)

You can open several additional views by using the Toggle bar on the top right corner of your screen:

![Toggle Bar](media/Code_ToggleBar.png)

Use the "Toggle Panel" Icon ![Panel Icon](media/Code_Toggle_Panel.png) to open the Panel View which provides different tabs of information like: Problems, Output, Debug Console, Terminal and Ports:

![Panel View](media/Code_PanelView.png)

Use the "Toggle Primary Sidebar" icon ![Primary Sidebar Icon](media/Code_Toggle_PrimarySidebar.png) to open the Primary Sidebar (right) which provides access to workspace and files:

![Primary Sidebar View](media/Code_PrimarySidebar_View.png)

Use the "Toggle Secondary Sidebar" icon ![Secondary Sidebar Icon](media/Code_Toggle_SecondarySidebar.png) to open the Secondary Sidebar (left) which provides additional views:

![Secondary Sidebar View](media/Code_SecondarySidebar_View.png)

### Clone a Repository

NOTE: Due the issue with integration (will be fixed in next release) we have to clone repository manualy and set some global settings for git.

1. Open the Panel view using the Toggle Panel icon and select the Terminal view.
2. In the Terminal View enter the git clone command using your username and previously created access token. Use the repository you have created in the Control lab. Then set global git settings:
    1. 'git config --global user.name "<your git studentid>"'
    2. 'git config --global user.email "<your studentid email>"`
    3. `git clone https://<your git studentid>:<your access token>@<repo url>`
3. Here an example with Student13:
    1. `git config --global user.name "student13-labs.com"`
    2. `git config --global user.email "student13@labs.com"`
    3. `git clone  https://student13-labs.com:cba1ae07eb42313eae4c27f953bfdddba235fb1e@devops101.eu-gb.containers.appdomain.cloud/control/student13-labs.com/PizzaApp.git`
4. Example Screenshots:
    1. ![Terminal set Git settings](media/Code_Terminal_SetGitSettings.png)
    2. ![Terminal clone repo](media/Code_Terminal_CloneRepo.png)

### Open the freshly cloned repository

Click on the Primary Sidebar on the Open Folder button:

![Open Folder](media/Code_OpenFolder.png)

Enter the location of your cloned repository:

![Select the Location](media/Code_OpenPizzaAppFolder.png)

Now you have access to the cloned repository:

![First look at folder](media/Code_PizzaApp_FirstView.png)

Look around and open the Mockup image to view the Design:

![Look around and open the image](media/Code_PizzaApp_View_Image.png)

### Edit a file and commit the changes

Open the README.md file and add some text. In this example added "Troubleshooting" at the end of the file then saved changes"

![File Changed](media/Code_NewFileChanges.png)

Now click on the Source Control icon ![Source Control Icon](media/Code_SourceControl_Icon.png) which shows the changed files and provide a good commit message and press commit:

![Changes View](media/Code_ChangesView.png)

Click on the triangle on the Commit Button to open the menue:

![Commit menue](media/Code_CommitChangesMenu.png)

Click on Commit and Push. A new popup will appear and ask how to stage the changes. Press on Always to proceed:

![Commit Stage Changes Popup](media/Code_CommitStageChangesPopup.png)

Congratulations you have commited your first change into your repository. In the Graph view you will see your commit message:

![Graph View](media/Code_GitGraphView.png)

Switch Back to Control and verify that in the activity view you have your commit visible:

![New Activity in Control](../Control/media/Control_NewActivity.png)

### Close and terminate Environment

Your development environment runs in it's own pod and uses resources. When you are finished with your work it is recommended to terminate the Environment.

NOTE: your session will not be terminated when you switch between capabilities or just close your browser!

Use the Logout icon ![Code Logout](media/Code_LogoutIcon.png) to get a popup which asks what to do with your running development environment:

![Code Environment Terminate or Not](media/Code_Terminate_Environment.png)

Click on "Yes, terminate it" to shutdown the pod, which will delete all unsaved or pushed changes! Or you can decide to keep it alive with "No, let it run" if you want to continue working later.

## Conclusio

Congratulations you have finished the Code Lab.
 -->

---

[AppSwitcher]: ../introduction/media/Loop_central_app_control.png
[WCAxExplain1]: media/CODE_WCAx_Explain1.png
[WCAExplain2]: media/CODE_WCAx_Explain2.png
[CommitWithWI]: media/CODE_CommitWithWI.png
[REFControlOpenWithCode]: ../control/index.md#open-repo-with-code
<!-- [CODEcommitWI]: index.md#commit-code-with-wi -->

[CodeDevContainerView]: media/Code_Dev_Container_two_tabs.png
[NoRunningDevContainer]: media/Code_No_running_dev_containers.png
[ListOfRunningDevContainer]: media/Code_Running_Dev_Containers.png
[LetsGoButton]: media/Code_Dev_Container_LetsGo.png
[TerminateButton]: media/Code_Dev_Container_Terminate.png
[ListOfAvailableDevContainer]: media/Code_Dev_Container_Overview_Page.png
[SettingUpEnv]: media/Code_Setting_Up_Environment.png
[WCAxNoRepo]: media/Code_WatsonX_Dev_Container_no_Rep.png
[CommitAndPush]: media/Code_Commit_and_Push.png
[GitStagingQuestion]: media/Code_Git_Stage_Question.png
[GitFetchQuestion]: media/Code_Git_Fetch_Question.png
