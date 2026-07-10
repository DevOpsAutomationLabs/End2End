# Control Lab

## Introduction

--8<-- [start:Intro]

DevOps Control is part of DevOps Loop, a platform for software development. DevOps Control provides Git hosting, code review, and team collaboration. It is similar to GitHub, Bitbucket and GitLab. DevOps Control is based on the open-source [Gitea][GiteaRepo] project.

To learn more about DevOps Control please have a look at the [documentation][ControlDocumentation].

--8<-- [end:Intro]

## How to switch to Control from Home Page

--8<-- [start:SWITCH2Control]

| Step | Details                                                                                                     | Additional Information                                         |
|:----:|:------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
|      | You can always switch using the central app switcher on the right side of your screen                       | ![Central App Switcher][CentralAppSwitcher]                    |
|      | Or You can switch directly to Control by using the button/link from What would you like to do today section | ![What would you like to do today?][WhatWouldYouLikeToDoToday] |

--8<-- [end:SWITCH2Control]

## Managing Repositories and Organizations

--8<-- [start:ManageRepoOrgs]

The home page for Control is the Repositories and Organizations view. In this view you will get a list of all your repositories and organizations.

| Step | Details                                                                                                                         | Additional Information                                      |
|:----:|:--------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|
|      | The first time you use Control with no "**Learning data**" used, an empty list is shown                                         | ![List my Repos and Orgs][ControlListOrgsRepos]             |
|      | If you have checked the "**Learning Data**" during Loop creation then the repo will be shown                                    | ![learning data repo][ControlLearningRepo]                  |
|      | By clicking on the **Home** Button ![HomePage Button][ControlHomeButton] all activities will be shown                           | ![Home Page Report][ControlHomePage]                        |
|      | click on the Pull request Icon ![List Pulls Icon][ControlListPullrequestsIcon] to view all pull requests                        | ![List my Pull Requests][ControlListPullRequests]           |
|      | Click on the List all Repositories Icon ![List all Repos Ico][ControlAllRepoIcon] to see all Repositories you can get access to | ![Explore other Repos and Orgs][ControlExploreOtherOrgRepo] |
|      |                                                                                                                                 |                                                             |

--8<-- [end:ManageRepoOrgs]

## Create a new Repository

--8<-- [start:CreateNewRepo]

### Create New Repository

--8<-- [start:NewRepo]

| Step | Details                                                                                                      | Additional Information              |
|:----:|:-------------------------------------------------------------------------------------------------------------|:------------------------------------|
|      | To create a fresh new repository or migrate an existing repository to Control, use the NEW button to proceed | ![New Button][ControlNewRepoButton] |
|      |                                                                                                              |                                     |

--8<-- [end:NewRepo]

### Fork a repository

--8<-- [start:ForkRepo]

| Step | Details                                                                               | Additional Information                        |
|:----:|:--------------------------------------------------------------------------------------|:----------------------------------------------|
|      | Select the source repository in Control, in this example we will fork this repository | ![Select PizzaApp Repo][ControlSelectAPPRepo] |
|      | In the repository click the Fork button on the top right left                         | ![Fork repo][ControlForkRepo]                 |
|      | Use the preprovided information and proceed by clicking "Fork ..."                    | ![Fork enter details][ControlForkDetails]     |
|      | Forked repository is shown                                                            | ![Newly forked repo][ControlForkedRepo]       |

--8<-- [end:ForkRepo]

### Migrate a repository

--8<-- [start:MigrateRepo]

| Step | Details | Additional Information |
|:----:|:--------|:-----------------------|
|      |         |                        |
|      |         |                        |

--8<-- [end:MigrateRepo]

--8<-- [end:CreateNewRepo]

## Access Token

--8<-- [start:AccessToken]

--8<-- [start:PATControl]

| Step | Details                                                                                                                  | Additional Information                             |
|:----:|:-------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
|      | For external access to the repositories you need to provide an Access Token                                              |                                                    |
|      | to create a new token, click on your **User Profile** and select **Settings**                                            | ![User Profile][ControlUserProfile]                |
|      | In the Settings view click on Access Tokens then enter a Token name to identify its purpose                              | ![Name for new PAT][ControlNewPATName]             |
|      | Click on **Select Permissions** to set the access rights, select **All** to cover all repositories                       | ![Open Select Permissions][ControlOpenPermissions] |
|      | You can set any permission setting as you need it. Please be aware to limit the access though to prevent security issues |                                                    |
|      | Example: Set **Repository** to *Read and Write* and Set **User** to *Read*                                               | ![Set Permissions][ControlPATSetPermissions]       |
|      | These settigs are the minimal needed to provide access to work with your repository through external tools               | ![Create AccessToken][ControlCreateAccesstoken]    |
|      | Press **Generate Token**                                                                                                 | ![Generate Token][ControlGeneratePATButton]        |
|      | Do not to forget to **Copy and Paste the token!**                                                                        | ![AccessToken][ControlAccessToken]                 |

--8<-- [end:PATControl]

--8<-- [end:AccessToken]

## Explore Control

--8<-- [start:ExploreControl]

### Open Repo with Code

--8<-- [start:OpenRepoWithCode]

| Step | Details                                                                                                  | Additional Information { width="50%" }              |
|:----:|:---------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
|  1   | Open the **Echologic** repository which has been created with the learning data                          | ![learning data repo][ControlLearningRepo]          |
|  2   | Click on **CODE** Button ![code button expaned][ButtonCode] to get an expanded Menu.                     | ![Code Button Expanded][ButtonCodeExpanded]         |
|  3   | Click on **Open with Code**                                                                              | ![open with Code][OpenWithCode]                     |
|  4   | A new dialog appears to select the right Dev Container for cloning the repository                        | ![Select from List][SelectFromListDC1]              |
| 4.1  | Scroll down to see more entries                                                                          | ![More Entries in List][SelectFromListDC2]          |
| 4.2  | use the default values for branch **main** and target folder **git**                                     |                                                     |
| 4.3  | If you want to use Watson Code Assistant then select the **WatsonX** Dev Container, else use **Starter** |                                                     |
|  5   | Press the **Clone** Button to proceed                                                                    | ![Clone the repo][CloneButton]                      |
|  6   | **it takes a few seconds till your environment is setup and running, please be patient**                 |                                                     |
|  7   | Code and a git clone success message is shown                                                            | ![Code with Git clone success][CodeGitCloneSuccess] |

--8<-- [end:OpenRepoWithCode]
<!-- 
### Open repo with VSCode

--8<-- [start:OpenRepoWithVSCode]

| Step | Details                                                                              | Additional Information { width="50%" }                     |
|:----:|:-------------------------------------------------------------------------------------|:-----------------------------------------------------------|
|  1   | Click on **CODE** Button ![code button expaned][ButtonCode] to get an expanded Menu. | ![Code Button Expanded][ButtonCodeExpanded]                |
|  2   | Click on **Open with VSCode**                                                        | ![open with vscode][OpenWithVSCode]                        |
|  3   | In the following **Dialog Window** allow to open Link                                | ![Allow to open VSCode by link][AllowToOpenVSCode]         |
|  4   | VSCode will ask you for a location to clone the folder                               | ![Target Folder for cloning][SelectTargetFolderforCloning] |
|  5   | VSCode will ask for Control Userid, enter **<demo@devops.loop>**                     | ![Code asking for Userid][CodeEnterUserID]                 |
|  6   | VSCode will ask for Control Token, enter your **Access Token**                       | ![Code asking for Password or Token][CodeEnterPAT]         |
|  7   | which you created in the [Access Token Section][REFPATSection]                       |                                                            |

--8<-- [end:OpenRepoWithVSCode]
 -->

### Show Activity Report

--8<-- [start:ShowActivityReport]

--8<-- [start:ShowLastCommits]

| Step | Details                                                  | Additional Information { width="50%" }     |
|:----:|:---------------------------------------------------------|:-------------------------------------------|
|      | Show the Update in the activity report of the repository | ![Show Last Commit][ControlShowLastCommit] |

--8<-- [end:ShowLastCommits]

--8<-- [end:ShowActivityReport]

### Show Git Commit Details

--8<-- [start:ShowGitCommitDetails]

| Step | Details                     | Additional Information { width="50%" }                  |
|:----:|:----------------------------|:--------------------------------------------------------|
|      | Show the Git Commit Details | ![CONTROL - Show Git Commit Details][ControlShowCommit] |

--8<-- [end:ShowGitCommitDetails]

--8<-- [end:ExploreControl]

---

[WhatWouldYouLikeToDoToday]: ../introduction/media/intro-loop-whatwouldyouliketodotoday.png
[CentralAppSwitcher]: ../introduction/media/intro-loop-central-app-control.png
[ControlListOrgsRepos]: media/control-control-list-repo-and-org.png
[ControlHomePage]: media/control-home-page-of-demo-echo-logic.png
[ControlListPullRequests]: media/control-control-list-pulls.png
[ControlAllRepoIcon]: media/control-control-sidebar-repos.png
[ControlExploreOtherOrgRepo]: media/control-control-list-explore-repo-orgs-etc.png
[ControlSelectAPPRepo]: media/control-control-select-pizza-app-repo.png
[ControlForkRepo]: media/control-control-fork.png
[ControlForkDetails]: media/control-control-fork-detail.png
[ControlForkedRepo]: media/control-control-new-forked-repo.png
[ControlNewRepoButton]: media/control-control-new-button.png
[ControlUserProfile]: media/control-control-user-profile.png
[ControlCreateAccesstoken]: media/control-control-create-access-token.png
[ControlAccessToken]: media/control-control-accesstoken.png
[ControlShowCommit]: media/control-show-git-commit.png
[ControlShowLastCommit]: media/control-show-last-commit.png
[ControlListPullrequestsIcon]: media/control-control-sidebar-pull.png
[ButtonCode]: media/control-control-code-button.png
[ButtonCodeExpanded]: media/control-control-code-button-expanded.png
[OpenWithCode]: media/control-control-open-with-dev-ops-code.png
[SelectFromListDC1]: media/control-control-dev-container-select-from-list.png
[SelectFromListDC2]: media/control-control-dev-container-select-from-list-02.png
[CloneButton]: media/control-control-code-clone-button.png
[CodeGitCloneSuccess]: ../code/media/code-code-git-clone-success.png
<!-- [OpenWithVSCode]: media/control-control-open-with-vs-code.png
[AllowToOpenVSCode]: media/control-control-allow-open-vs-code.png
[SelectTargetFolderforCloning]: ../code/media/code-code-vs-code-clone-targetfolder.png
[CodeEnterUserID]: ../code/media/code-code-vs-code-enter-git-user.png
[CodeEnterPAT]: ../code/media/code-code-vs-code-enter-pat.png
[REFPATSection]: index.md#access-token -->

[ControlLearningRepo]: media/control-control-learning-data-repo.png
[ControlHomeButton]: media/control-control-sidebar-home.png
[ControlNewPATName]: media/control-control-new-pat-name.png
[ControlPATSetPermissions]: media/control-control-new-pat-setpermissions-minimal.png
[ControlOpenPermissions]: media/control-control-new-pat-select-access-type-permissions.png
[ControlGeneratePATButton]: media/control-control-new-pat-generate-button.png
[ControlDocumentation]: https://www.ibm.com/docs/en/devops-plan/3.0.6?topic=function-devops-control
[GiteaRepo]: https://github.com/go-gitea/gitea
