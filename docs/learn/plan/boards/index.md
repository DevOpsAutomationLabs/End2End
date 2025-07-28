# Boards

## Work with Boards

### Project Board

Project Boards provide a graphical Kanban style overview of worktitems.

TODO: add more text here

To open the board use the Project Board icon ![Board Icon in sidebar][SideBarBoardIcon] on the Sidebar ![sidebar][SideBar].

The initial view is your My Board view which will show worktitems that are assigned to you. As we newly started the board may be empty.
![myWork Board][BoardMyBoardwithoneentry]

TODO: Show the board with data and expain what it is good for and how to use it

### Work Items

Click on the **Work Items** Tab to view all Work Items (WI) of the project.

- ![Board workitems][BoardWorkItems]

#### Select Workitem

Let's view a Work Item and it's Details. Please select item in the **Closed** column of the board.

- ![Select WorkItem from Board][BoardSelectWI]

##### Show Workitem Details

Click on the Work Item Number (**EchoL00000004**) to view the Details.

- ![Show Workitem Details][BoardShowWIDetail]

##### Show Commit

To view the details of commits (from source control systems like DevOps Control) scroll down in the Work Item Detail View and click on **SCM Events** section.

![PLAN - Show Control/Git Commit Link][PlanShowCommit]

Click on the first entry to view more detail about the commit.

![PLAN - Show SCM commit entry][PlanShowSCMEntryDetails]

By clicking on the **Link** in the **SCM Event Details** Section of the new view, [Control][OpenControl] is opened and the commit details are shown.

![CONTROL - Show Git Commit Details][ControlShowCommit]

#### Use AI in WorkItem

TODO: Use Plan Genie to create description and explorative test information (need screenshots or animated gif)
<blockquote>
<p><strong>NOTE:</strong>If not integration has been configured, please follow the AI Assistant setup</p>
</blockquote>

**[AI Assistant Setup][AIAssistantSetup]**

### Filter Projects

- ![Board Select Project][BoardSelectProject]

### Filter Epics

- ![Board filter][BoardFilterWITypes]

### Show Releases

- ![Board Releases][BoardShowReleases]

### Show Sprints

- ![Board Sprint Board][BoardShowSprintBoard]

### Show Sprint Backlog

- ![Board Sprint Backlog][BoardShowSprintBacklog]

## Conclusio

Go back to [Plan][GoBackToParentIndex], [Lab and Demo Overview][GoBackToDemoOverview] or proceed with [Next Lab][NextLab]

---

[GoBackToDemoOverview]: ../index.md
[GoBackToParentIndex]: ../index.md#plan
[NextLab]: ../index.md#create-and-customize-a-new-project

[PlanShowCommit]: ../media/PLAN_Show_GitCommit.png
[ControlShowCommit]: ../../control/media/CONTROL_ShowGitCommit.png
[OpenControl]: control/index.md#how-to-switch-to-control-from-home-page
[SideBarBoardIcon]: media/Plan_ProjectBoard_Icon.png
[SideBar]: ../media/Plan_Sidebar_ProjectBoards.png
[BoardMyBoardwithoneentry]: media/Plan_ProjectBoard_myBoard.png
[BoardWorkItems]: media/Plan_ProjectBoard_WorkItems.png
[BoardSelectWI]: media/PLAN_Boards_SelectWI.png
[BoardShowWIDetail]: media/PLAN_Board_ShowWI_Detail.png
[BoardSelectProject]: media/Plan_ProjectBoard_SelectProject.png
[BoardFilterWITypes]: media/Plan_ProjectBoard_Filterbar.png
[BoardShowReleases]: media/Plan_ProjectBoard_Releases.png
[BoardShowSprintBoard]: media/Plan_ProjectBoard_SprintBoard.png
[BoardShowSprintBacklog]: media/Plan_ProjectBoard_SprintBacklog.png
[PlanShowSCMEntryDetails]: ../media/Plan_Show_SCM_Entry_Details.png
[AIAssistantSetup]: ../index.md#ai-assistant-integration-setup
