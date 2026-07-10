# Code Lab

## Introduction

--8<-- [start:Intro]

Code is a cloud-based integrated development environment (based on VSCode) on DevOps Loop, with which you can write, compile, build, and debug software applications in a so-called **dev container**, accessible directly from a web browser. The editor provides a completely configured development environment with preinstalled extensions, tools, and libraries. You can start coding without the need to set up the environment on your local machine.

To learn more about DevOps Code please have a look at the [documentation][CodeDocumentation].

--8<-- [end:Intro]

## How to work with Code

--8<-- [start:HowToUseCode]

### Switch to Code

--8<-- [start:Switch2Code]

| Step | Details                                                                                          | Additional Information { width="50%" }                      |
|:----:|:-------------------------------------------------------------------------------------------------|:------------------------------------------------------------|
|  1   | You can always switch using the central app switcher on the right side of your screen            | ![Central App Switcher][CentralAppSwitcher]                 |
|  2   | Overview Page of Code is shown with two tabs.                                                    | ![Two sub tabs][CodeDevContainerView]                       |
|  3   | One for Running Dev Containers                                                                   |                                                             |
| 3.1  | Which may be empty when no Dev Container has been started                                        | ![No running Dev Container][NoRunningDevContainer]          |
| 3.2  | Or all running Dev Containers with detailed Information is shown                                 | ![List of running Dev Container][ListOfRunningDevContainer] |
| 3.3  | Open the running container by clicking on **Let's Go** Button                                    | ![Lets go with this container][LetsGoButton]                |
| 3.4  | If no more needed press **Terminate** button to shutdown and remove it                           | ![Terminate this container][TerminateButton]                |
|  4   | And another for all available types of Dev Container                                             | ![Available Dev Container][ListOfAvailableDevContainer]     |
| 4.1  | By clicking on **Let's Go** Button a Dev Container (for example WatsonX) it will be instantiated | ![Lets go with this container][LetsGoButton]                |
| 4.2  | and a message will be shown in a new window                                                      | ![Setting up a dev container environment][SettingUpEnv]     |
| 4.3  | **it takes a few seconds till your environment is setup and running, please be patient**         |                                                             |
| 4.4  | Code is shown (example: WatsonX)                                                                 | ![Code is shown for WatsonX][WCAxNoRepo]                    |

--8<-- [end:Switch2Code]

### How to use Code

If Code has not been opened yet [Open the repository with Code from Control Repo view][REFControlOpenWithCode]

--8<-- [start:UseCode]

| Step | Details                                                                       | Additional Information { width="50%" }          |
|:----:|:------------------------------------------------------------------------------|:------------------------------------------------|
|  1   | Talk about Code                                                               |                                                 |
|  2   | change some code and save the changes to be able to commit to Control         |                                                 |
| 2.1  | TODO: add steps with screenshots here!                                        |                                                 |
|  3   | Or **optionaly** Use WCA to explain code and generate some new code           | ![Explain code part 1][WCAxExplain1]            |
| 3.1  | here an example                                                               | ![Explain code part 2][WCAExplain2]             |
|  4   | Add comment with work item number                                             | ![Commit Code with WI][CommitWithWI]            |
|  5   | Click on **Commit&Push** by opening the **Commit Button**                     | ![Commit and push][CommitAndPush]               |
| 5.1  | a message might appear about **staging** changes, press the **Always** button | ![asking about git staging][GitStagingQuestion] |
| 5.2  | a message might appear about **fetching** changes from git, press **Fetch**   | ![periodially use Git Fetch][GitFetchQuestion]  |

--8<-- [end:UseCode]

--8<-- [end:HowToUseCode]

## Close and terminate Environment

--8<-- [start:CloseEnv]

Your development environment runs in it's own pod and uses resources. When you are finished with your work it is recommended to terminate the Environment.

NOTE: your session will not be terminated when you switch between capabilities or just close your browser!

Use the Logout icon ![Code Logout][code-logout] to get a popup which asks what to do with your running development environment:

![Code Environment Terminate or Not][code-terminate]

Click on "Yes, terminate it" to shutdown the pod, which will delete all unsaved or pushed changes! Or you can decide to keep it alive with "No, let it run" if you want to continue working later.

--8<-- [end:CloseEnv]

<!--

### Edit a file and commit the changes

Open the README.md file and add some text. In this example added "Troubleshooting" at the end of the file then saved changes"

![File Changed][code-file-changed]

Now click on the Source Control icon ![Source Control Icon][code-sc-icon] which shows the changed files and provide a good commit message and press commit:

![Changes View][code-changes-view]

Click on the triangle on the Commit Button to open the menue:

![Commit menue][code-commit-menu]

Click on Commit and Push. A new popup will appear and ask how to stage the changes. Press on Always to proceed:

![Commit Stage Changes Popup][code-commit-popup]

Congratulations you have commited your first change into your repository. In the Graph view you will see your commit message:

![Graph View][code-graph-view]

Switch Back to Control and verify that in the activity view you have your commit visible:

![New Activity in Control](../Control/media/control-control-new-activity.png)

 -->

---

[CentralAppSwitcher]: ../introduction/media/intro-loop-central-app-control.png
[WCAxExplain1]: media/code-wc-ax-explain-01.png
[WCAExplain2]: media/code-wc-ax-explain-02.png
[CommitWithWI]: media/code-commit-with-wi.png
[REFControlOpenWithCode]: ../control/index.md#open-repo-with-code
<!-- [CODEcommitWI]: index.md#commit-code-with-wi -->

[CodeDevContainerView]: media/code-code-dev-container-two-tabs.png
[NoRunningDevContainer]: media/code-code-no-running-dev-containers.png
[ListOfRunningDevContainer]: media/code-code-running-dev-containers.png
[LetsGoButton]: media/code-code-dev-container-lets-go.png
[TerminateButton]: media/code-code-dev-container-terminate.png
[ListOfAvailableDevContainer]: media/code-code-dev-container-overview-page.png
[SettingUpEnv]: media/code-code-setting-up-environment.png
[WCAxNoRepo]: media/code-code-watson-x-dev-container-no-rep.png
[CommitAndPush]: media/code-code-commit-and-push.png
[GitStagingQuestion]: media/code-code-git-stage-question.png
[GitFetchQuestion]: media/code-code-git-fetch-question.png
[CodeDocumentation]: https://www.ibm.com/docs/en/devops-loop/2.0.2?topic=loop-code
[code-logout]: media/code-code-logout-icon.png
[code-terminate]: media/code-code-terminate-environment.png
[code-file-changed]: media/code-code-new-file-changes.png
[code-sc-icon]: media/code-code-source-control-icon.png
[code-changes-view]: media/code-code-changes-view.png
[code-commit-menu]: media/code-code-commit-changes-menu.png
[code-commit-popup]: media/code-code-commit-stage-changes-popup.png
[code-graph-view]: media/code-code-git-graph-view.png
