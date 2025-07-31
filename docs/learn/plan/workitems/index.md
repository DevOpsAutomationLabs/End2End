# Work Items

In this section you will get more information about Work items.

## What are Work Items

TODO: More about Work Items

## Several Ways to find your Work Item

### From [Board](../boards/index.md#project-board)

- [Open Work items View][REFBoardWIview]
- ![Board workitems][BoardWorkItems]

### From [Query](../queries/index.md)

- Use existing [Public or Personal Queries][REFQueriesUseExisting] to list Work items.
- Or create a new [Personal Query][REFQueriesCreateNew] with your personal filters.

## Show Workitem Details

If you are viewing a Work Item in the Right Sidebar, click on the **Link with Work Item Number**

![Link with WI Number to open full detail][WIuseLinkWithNumber]

to open the full Details View.

- ![Show Workitem Details][BoardShowWIDetail]

### Show Commit

To view the details of commits (from source control systems like DevOps Control) scroll down in the Work Item Detail View and click on **SCM Events** section.

![PLAN - Show Control/Git Commit Link][PlanShowCommit]

Click on the first entry to view more detail about the commit.

![PLAN - Show SCM commit entry][PlanShowSCMEntryDetails]

By clicking on the **Link** in the **SCM Event Details** Section of the new view, [Control][OpenControl] is opened and the commit details are shown.

![CONTROL - Show Git Commit Details][ControlShowCommit]

## Use AI in WorkItem

TODO: Use Plan Genie to create description and explorative test information (need screenshots or animated gif)
<blockquote>
<p><strong>NOTE:</strong>If not integration has been configured, please follow the AI Assistant setup</p>
</blockquote>

**[AI Assistant Setup][AIAssistantSetup]**

### Create Exploratory Test using AI

Click on a Work item, scroll down to **Exporatory** section

![WI Exploratory Section][WIExploratorySection]

Switch to Edit Mode.

![In Edit Mode][WIExploratoryInEditMode]

click on the **Generate** button ![Generate Button][ButtonGenerateAIText]

![Exploratory Test created][WIExploratoryTestCreated]

[BoardShowWIDetail]: media/PLAN_Board_ShowWI_Detail.png
[PlanShowCommit]: ../media/PLAN_Show_GitCommit.png
[ControlShowCommit]: ../../control/media/CONTROL_ShowGitCommit.png
[OpenControl]: ../../control/index.md#how-to-switch-to-control-from-home-page
[PlanShowSCMEntryDetails]: ../media/Plan_Show_SCM_Entry_Details.png
[AIAssistantSetup]: ../index.md#ai-assistant-integration-setup
[WIExploratorySection]: media/Plan_WI_Exploratory_View.png
[WIExploratoryInEditMode]: media/Plan_WI_Exploratory_InEditMode.png
[ButtonGenerateAIText]: media/Plan_WI_Exploratory_GenerateButton.png
[WIExploratoryTestCreated]: media/Plan_WI_Exploratory_Generated.png

[BoardWorkItems]: ../boards/media/Plan_ProjectBoard_WorkItems.png
[REFBoardWIview]: ../boards/index.md#work-items
[REFQueriesUseExisting]: ../queries/index.md#public-and-personal-queries
[REFQueriesCreateNew]: ../queries/index.md#create-new-personal-query
[WIuseLinkWithNumber]: media/Plan_WI_Link_open_Detail.png
