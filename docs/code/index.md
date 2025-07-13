# Code Lab

TODO: update flow, app references and screenshots
_**TODO: update flow, app references from PIZZA to EchoLogic and screenshots**_

## Introduction

TODO: add here more about Code

## How to switch to Code from Home Page

You can switch to Code by either pressing "Let's go to Code" button on its tile:

![Code Tile lets go](../introduction/media/Loop_switch_to_Code.png)

Or you can always switch using the central app switcher on the top left of your screen:

![Central App Switcher](../introduction/media/Loop_central_app_control.png)

Note: it takes a few seconds till your environment is setup and running, please be patient.

## VSCode

<blockquote>
<p><strong>NOTE:</strong> To showcase WCAx you need to use external VSCode as DevOps CODE in actual version does not have WCAx available. Will be provided in next releases.</p>
</blockquote>

### WatsonX Code Assistant

![Explain code part 2](media/CODE_WCAx_Explain1.png)
![Explain code part 2](media/CODE_WCAx_Explain2.png)

### Commit Code with WI

![Commit Code with WI](media/CODE_CommitWithWI.png)

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