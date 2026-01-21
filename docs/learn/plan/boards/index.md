# Boards

## Work with Boards

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
|      | Click on the **Work Items** Tab to view all Work Items (WI) of the project                        | ![Board workitems][ProjectBoardWorkItems]                     |
|      | Let's view a Work Item and it's Details. Please select item in the **Closed** column of the board | ![Select WorkItem from Board][BoardSelectWorkItem]       |
|      |                                                                                                   | ![Show Workitem Details][BoardShowWorkItemDetail]        |
|      | [Scroll down to show SCM Events Section and click on it][ShowCommit]                              | ![PLAN - Show Control/Git Commit Link][PlanShowCommit]   |
|      | Click on the first entry to show the link between work item to code changes                       | ![PLAN - Show SCM commit entry][PlanShowSCMEntryDetails] |
|      | and explain how easy it is to have traceability                                                   | ![CONTROL - Show Git Commit Details][ControlShowCommit]  |
|      | *Optional:* [Use AI for Exploratory Test creation][REFWIuseAI]                                    |                                                          |

--8<-- [end:WorkItems]

#### Workitem

### Filter Projects

- ![Board Select Project][BoardSelectProject]

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

- ![Board Releases][BoardShowReleases]

### Show Sprints

- ![Board Sprint Board][BoardShowSprintBoard]

### Show Sprint Backlog

- ![Board Sprint Backlog][BoardShowSprintBacklog]

## Conclusio

Go back to [Plan][GoBackToParentIndex], [Lab and Demo Overview][GoBackToDemoOverview] or proceed with [Next Lab][NextLab]

---

[GoBackToDemoOverview]: ../../index.md
[GoBackToParentIndex]: ../index.md
[NextLab]: ../index.md#create-and-customize-a-new-project

[SideBarBoardIcon]: media/Plan_ProjectBoard_Icon.png
[SideBar]: ../media/Plan_Sidebar_ProjectBoards.png
[BoardMyBoardwithoneentry]: media/Plan_ProjectBoard_myBoard.png
[ProjectBoardWorkItems]: media/Plan_ProjectBoard_WorkItems.png
[BoardSelectWorkItem]: media/PLAN_Boards_SelectWI.png

[BoardSelectProject]: media/Plan_ProjectBoard_SelectProject.png
[FilterBar]: media/Plan_ProjectBoard_Filterbar.png
[BoardShowReleases]: media/Plan_ProjectBoard_Releases.png
[BoardShowSprintBoard]: media/Plan_ProjectBoard_SprintBoard.png
[BoardShowSprintBacklog]: media/Plan_ProjectBoard_SprintBacklog.png
[REFWIShowDetails]: ../workitems/index.md#show-workitem-details
[ShowCommit]: ../workitems/index.md#show-commit
[REFWIuseAI]: ../workitems/index.md#use-ai-in-workitem

[BoardShowWorkItemDetail]: ../workitems/media/PLAN_Board_ShowWI_Detail.png
[PlanShowSCMEntryDetails]: ../media/Plan_Show_SCM_Entry_Details.png
[PlanShowCommit]: ../media/PLAN_Show_GitCommit.png
[ControlShowCommit]: ../../control/media/CONTROL_ShowGitCommit.png
[WIExploratoryInEditMode]: ../workitems/media/Plan_WI_Exploratory_InEditMode.png
[WIExploratoryTestCreated]: ../workitems/media/Plan_WI_Exploratory_Generated.png
[FilterUncheckEpic]: media/Plan_ProjectBoard_Filterbar_UncheckEpic.png
[BoardFiltered]: media/Plan_ProjectBoard_WorkItemsFiltered.png
[ButtonClearFilter]: media/Plan_ProjectBoard_ClearFilterButton.png
