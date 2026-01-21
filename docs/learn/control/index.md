# Control Lab

TODO: update flow, app references and screenshots - instead of VSCode use CODE

## Introduction

TODO: add here more about Control

## How to switch to Control from Home Page

You can switch to Control by either pressing "Let's go to Control" button on its tile:

![Control Tile lets go][ControlTile]

Or you can always switch using the central app switcher on the top left of your screen:

![Central App Switcher][CentralAppSwitcher]

## Managing Repositories and Organizations

The home page for Control is the Repositories and Organizations view. In this view you will get a list of all your repositories and organizations. If you have active repositories also a activity report will be shown. The first time you use Control an empty list is shown:

![List my Repos and Orgs][ControlListOrgsRepos]

After creation of a repository an activity dashboard will be added to it:

![Activity Report][ControlActivityReport]

On the left of your screen you can switch to the list of pulls by clicking on the Pull request Icon ![List Pulls Icon][ControlListPullrequestsIcon] a new view is provided with all your related (assigned to you, created by you, review needed by you or mentioning you) pull requests:

![List my Pull Requests][ControlListPullRequests]

Click on the List all Repositories Icon ![List all Repos Ico][ControlAllRepoIcon] to see all Repositories you can get access to:

![Explore other Repos and Orgs][ControlExploreOtherOrgRepo]

## Create a new Repository

### Fork a repository

In this lab we want to for an existing repository. To achieve this select the PizzaApp repository as shown below:

![Select PizzaApp Repo][ControlSelectAPPRepo]

In the repository click the Fork button on the top right left:

![Fork repo][ControlForkRepo]

Use the preprovided information and proceed by clicking "Fork ...":

![Fork enter details][ControlForkDetails]

Congratulations! You have now your own repository!

![Newly forked repo][ControlForkedRepo]

### Create New Repository

If you want to create a fresh new repository or migrate an existing repository to Control, use the NEW button to proceed:

![New Button][ControlNewRepoButton]

## Access Token

For external use of the repositories you need to provide an Access Token, for example to be able to clone and push changes to it.

Please clieck on your User Profile and select Settings:

![User Profile][ControlUserProfile]

In the Settings view click on Access Tokens then enter a Token name, use your StudentName (eg. Student13) and extend it with "AccessToken" and set the permissions:

- Set Repository to Read and Write
- Set User to Read

These settigs are the minimal needed to provide access to work with your repository through external tools:

![Create AccessToken][ControlCreateAccesstoken]

Press Generate Token and **SAVE your newly created Token**:

![AccessToken][ControlAccessToken]

## Explore Control

### Open repo with VSCode

--8<-- [start:OpenRepoWithVSCode]

| Step | Details                                                                               | Additional Information { width="50%" }                     |
|:----:|:--------------------------------------------------------------------------------------|:-----------------------------------------------------------|
|  1   | Click on **CODE** Button ![code button expaned][ButtonCode] to get an expanded Menue. | ![Code Button Expanded][ButtonCodeExpanded]                |
|  2   | Click on **Open with VSCode**                                                         | ![open with vscode][OpenWithVSCode]                        |
|  3   | In the following **Dialog Window** allow to open Link                                 | ![Allow to open VSCode by link][AllowToOpenVSCode]         |
|  4   | VSCode will ask you for a location to clone the folder                                | ![Target Folder for cloning][SelectTargetFolderforCloning] |
|  5   | VSCode will ask for Control Userid, enter **<demo@devops.loop>**                      | ![Code asking for Userid][CodeEnterUserID]                 |
|  6   | VSCode will ask for Control Token, enter your **Access Token**                        | ![Code asking for Password or Token][CodeEnterPAT]         |
|  7   | which you created in the [Access Token Section][REFPATSection]                        |                                                            |

--8<-- [end:OpenRepoWithVSCode]

### Show Git Commit Details

- ![CONTROL - Show Git Commit Details][ControlShowGitCommitDetails]

### Show Activity Report

![Show Last Commit][ControlShowLastCommit]

## Conclusio

Congratulations you have finished Control Lab and have created a new repository and an access token.

Go back to [Introduction][GoBackToParentIndex], [Lab and Demo Overview][GoBackToDemoOverview] or proceed with [Next Lab][NextLab]

---

[GoBackToDemoOverview]: ../index.md
[GoBackToParentIndex]: ../index.md#control
[NextLab]: ../index.md#code
[ControlTile]: ../introduction/media/Loop_switch_to_Control.png
[CentralAppSwitcher]: ../introduction/media/Loop_central_app_control.png
[ControlListOrgsRepos]: media/Control_List_Repo_and_Org.png
[ControlActivityReport]: media/Control_HomePage_ActivityReport.png
[ControlListPullRequests]: media/Control_List_Pulls.png
[ControlAllRepoIcon]: media/Control_SidebarRepos.png
[ControlExploreOtherOrgRepo]: media/Control_List_Explore_Repo_orgs_etc.png
[ControlSelectAPPRepo]: media/Control_SelectPizzaAppRepo.png
[ControlForkRepo]: media/Control_Fork.png
[ControlForkDetails]: media/Control_Fork_Detail.png
[ControlForkedRepo]: media/Control_NewForkedRepo.png
[ControlNewRepoButton]: media/Control_New_Button.png
[ControlUserProfile]: media/Control_UserProfile.png
[ControlCreateAccesstoken]: media/Control_Create_AccessToken.png
[ControlAccessToken]: media/Control_Accesstoken.png
[ControlShowGitCommitDetails]: media/CONTROL_ShowGitCommit.png
[ControlShowLastCommit]: media/CONTROL_ShowLastCommit.png
[ControlListPullrequestsIcon]: media/Control_SidebarPull.png
[ButtonCode]: media/Control_CodeButton.png
[ButtonCodeExpanded]: media/Control_CodeButtonExpanded.png
[OpenWithVSCode]: media/Control_Open_with_VSCode.png
[AllowToOpenVSCode]: media/Control_AllowOpenVSCode.png
[SelectTargetFolderforCloning]: ../code/media/Code_VSCode_clone_targetfolder.png
[CodeEnterUserID]: ../code/media/Code_VSCode_enterGitUser.png
[CodeEnterPAT]: ../code/media/Code_VSCode_Enter_PAT.png
[REFPATSection]: index.md#access-token
