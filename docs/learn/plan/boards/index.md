# Boards

## Work with Boards

### Project Board

Project Boards provide a graphical Kanban style overview of worktitems.

TODO: add more text here

To open the board use the Project Board icon ![Board Icon in sidebar][SideBarBoardIcon] on the Sidebar ![sidebar][SideBar].

The initial view is your My Board view which will show worktitems that are assigned to you. As we newly started the board may be empty.
![myWork Board][BoardMyBoardwithoneentry]

TODO: Show the board with data and expain what it is good for and how to use it

### [Work Items](../workitems/index.md)

Click on the **Work Items** Tab to view all Work Items (WI) of the project.

- ![Board workitems][BoardWorkItems]

#### Workitem

Let's view a Work Item and it's Details. Please select item in the **Closed** column of the board.

- ![Select WorkItem from Board][BoardSelectWI]
- [Show Work Item Details][REFWIShowDetails]
  - ![Show Workitem Details][BoardShowWIDetail]
- [Show commits][REFWIShowCommits]
  - ![PLAN - Show Control/Git Commit Link][PlanShowCommit]
- [Use AI for Exploratory Test creation][REFWIuseAI]
  - ![In Edit Mode][WIExploratoryInEditMode]
  - ![Exploratory Test created][WIExploratoryTestCreated]

### Filter Projects

- ![Board Select Project][BoardSelectProject]

### Filter Epics

- ![Board filter][BoardFilterWITypes]
- Uncheck **Epic** [Uncheck Epic][FilterUncheckEpic]
- Click on an empty field to trigger filter
- Filtered Board (Epics are hidden) is shown ![Filtered Board][BoardFiltered]
- Clear the filter by pressing **Clear** Button ![Clear Filter][ButtonClearFilter]

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
[BoardWorkItems]: media/Plan_ProjectBoard_WorkItems.png
[BoardSelectWI]: media/PLAN_Boards_SelectWI.png

[BoardSelectProject]: media/Plan_ProjectBoard_SelectProject.png
[BoardFilterWITypes]: media/Plan_ProjectBoard_Filterbar.png
[BoardShowReleases]: media/Plan_ProjectBoard_Releases.png
[BoardShowSprintBoard]: media/Plan_ProjectBoard_SprintBoard.png
[BoardShowSprintBacklog]: media/Plan_ProjectBoard_SprintBacklog.png
[REFWIShowDetails]: ../workitems/index.md#show-workitem-details
[REFWIShowCommits]: ../workitems/index.md#show-commit
[REFWIuseAI]: ../workitems/index.md#use-ai-in-workitem

[BoardShowWIDetail]: ../workitems/media/PLAN_Board_ShowWI_Detail.png
[PlanShowCommit]: ../media/PLAN_Show_GitCommit.png
[WIExploratoryInEditMode]: ../workitems/media/Plan_WI_Exploratory_InEditMode.png
[WIExploratoryTestCreated]: ../workitems/media/Plan_WI_Exploratory_Generated.png
[FilterUncheckEpic]: media/Plan_ProjectBoard_Filterbar_UncheckEpic.png
[BoardFiltered]: media/Plan_ProjectBoard_WorkItemsFiltered.png
[ButtonClearFilter]: media/Plan_ProjectBoard_ClearFilterButton.png