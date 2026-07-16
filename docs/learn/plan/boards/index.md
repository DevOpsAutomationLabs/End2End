# Boards

## Work with Boards

--8<-- [start:WorkWithBoards]

### Project Board

Project Boards provide a graphical Kanban style overview of worktitems.

TODO: add more text here

--8<-- [start:ProjectBoard]

| Step | Details                                                                                                                                         | Additional Information                    |
|:----:|:------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
|      | To open the board use the Project Board icon <br> ![Board Icon in sidebar][SideBarBoardIcon] <br> on the Sidebar                                | ![sidebar][SideBar]                       |
|      | The initial view is your **My Board** view which will show worktitems that are assigned to you. <br> As we newly started the board may be empty | ![myWork Board][BoardMyBoardwithoneentry] |

--8<-- [end:ProjectBoard]

TODO: Show the board with data and expain what it is good for and how to use it

### [Work Items](../workitems/index.md)

--8<-- [start:WorkItems]

| Step | Details                                                                                           | Additional Information                                   |
|:----:|:--------------------------------------------------------------------------------------------------|:---------------------------------------------------------|
|      | Click on the **Work Items** Tab to view all Work Items (WI) of the project                        | ![Board workitems][ProjectBoardWorkItems]                |
|      | Let's view a Work Item and it's Details. Please select item in the **Closed** column of the board | ![Select WorkItem from Board][BoardSelectWorkItem]       |
|      |                                                                                                   | ![Show Workitem Details][BoardShowWorkItemDetail]        |
|      | [Scroll down to show SCM Events Section and click on it][ShowCommit]                              | ![PLAN - Show Control/Git Commit Link][PlanShowCommit]   |
|      | Click on the first entry to show the link between work item to code changes                       | ![PLAN - Show SCM commit entry][PlanShowSCMEntryDetails] |
|      | and explain how easy it is to have traceability                                                   | ![CONTROL - Show Git Commit Details][ControlShowCommit]  |
|      | *Optional:* [Use AI for Exploratory Test creation][REFWIuseAI]                                    |                                                          |

--8<-- [end:WorkItems]

#### Workitem

--8<-- [start:Workitem]

--8<-- [end:Workitem]

### Filter Projects

--8<-- [start:FilterProjects]

| Step | Details                              | Additional Information                      |
|:----:|:-------------------------------------|:--------------------------------------------|
|  1   | Select Project from the Board filter | ![Board Select Project][BoardSelectProject] |

--8<-- [end:FilterProjects]

### Filter Epics

--8<-- [start:FilterEpics]

| Step | Details                                                   | Additional Information { width="50%" } |
|:----:|:----------------------------------------------------------|:---------------------------------------|
|  1   | Show how to filter out Epics by using the **Type** filter | ![Board filter][FilterBar]             |
|  2   | Uncheck **Epic** from the list of Types                   | ![Uncheck Epic][FilterUncheckEpic]     |
|  3   | Click on an empty field to trigger filter                 |                                        |
|  4   | Filtered Board (Epics are hidden) is shown                | ![Filtered Board][BoardFiltered]       |
|  5   | Clear the filter by pressing **Clear** Button             | ![Clear Filter][ButtonClearFilter]     |

--8<-- [end:FilterEpics]

### Show Releases

--8<-- [start:ShowReleases]

| Step | Details                    | Additional Information               |
|:----:|:---------------------------|:-------------------------------------|
|  1   | View Releases on the Board | ![Board Releases][BoardShowReleases] |

--8<-- [end:ShowReleases]

### Show Sprints

--8<-- [start:ShowSprints]

| Step | Details           | Additional Information                      |
|:----:|:------------------|:--------------------------------------------|
|  1   | View Sprint Board | ![Board Sprint Board][BoardShowSprintBoard] |

--8<-- [end:ShowSprints]

### Show Sprint Backlog

--8<-- [start:ShowSprintBacklog]

| Step | Details             | Additional Information                          |
|:----:|:--------------------|:------------------------------------------------|
|  1   | View Sprint Backlog | ![Board Sprint Backlog][BoardShowSprintBacklog] |

--8<-- [end:ShowSprintBacklog]

--8<-- [end:WorkWithBoards]

---

[GoBackToDemoOverview]: ../../index.md
[GoBackToParentIndex]: ../index.md
[NextLab]: ../index.md#create-and-customize-a-new-project

[SideBarBoardIcon]: media/plan-boards-plan-project-board-icon.png
[SideBar]: ../media/plan-plan-sidebar-project-boards.png
[BoardMyBoardwithoneentry]: media/plan-boards-plan-project-board-my-board.png
[ProjectBoardWorkItems]: media/plan-boards-plan-project-board-work-items.png
[BoardSelectWorkItem]: media/plan-boards-boards-select-wi.png

[BoardSelectProject]: media/plan-boards-plan-project-board-select-project.png
[FilterBar]: media/plan-boards-plan-project-board-filterbar.png
[BoardShowReleases]: media/plan-boards-plan-project-board-releases.png
[BoardShowSprintBoard]: media/plan-boards-plan-project-board-sprint-board.png
[BoardShowSprintBacklog]: media/plan-boards-plan-project-board-sprint-backlog.png
[ShowCommit]: ../workitems/index.md#show-commit
[REFWIuseAI]: ../workitems/index.md#use-ai-in-workitem

[BoardShowWorkItemDetail]: ../workitems/media/plan-workitems-board-show-wi-detail.png
[PlanShowSCMEntryDetails]: ../media/plan-plan-show-scm-entry-details.png
[PlanShowCommit]: ../media/plan-show-git-commit.png
[ControlShowCommit]: ../../control/media/control-show-git-commit.png
[FilterUncheckEpic]: media/plan-boards-plan-project-board-filterbar-uncheck-epic.png
[BoardFiltered]: media/plan-boards-plan-project-board-work-items-filtered.png
[ButtonClearFilter]: media/plan-boards-plan-project-board-clear-filter-button.png
