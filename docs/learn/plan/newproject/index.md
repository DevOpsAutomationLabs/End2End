# Create new Project

## Overview

--8<-- [start:Overview]

This schema uses Projects as high level seperators for workitem management.

--8<-- [end:Overview]

## Steps

--8<-- [start:Steps]

### Create a new Project

--8<-- [start:CreateNewProject]

To create a new Workitem you have to click on the triangle icon on the NEW button on the top right of your screen:

![Create new Workitem Button][plan-new-workitem]

![Create New Workitem List][plan-wi-list]

Select Project from the List. This will create a new Record from type "Project" and will show you its Main section first to provide Name and more Details:

![New Project Main][plan-new-project]

The name of our project is "EchoLogic", add a meaningful description too.

![Enter Project Name and Description][plan-project-data]

--8<-- [end:CreateNewProject]

### Add Releases to Project

--8<-- [start:AddReleasesToProject]

If you have saved the Project, you need to switch back to edit mode by using the Edit Button ![Switch to Edit mode by using the Edit Button on the top left][plan-edit-btn]

Switch to Releases Section and press the NEW button right of the Search field:

![Project - Releases Section][plan-releases-section]

![Project - Releases - New button][plan-releases-search]

Enter "Release 1" into the Release Name and add a meaningfull description, you can change the Start and End Date if you wish.

![Project - New Release][plan-new-release]

Press the SAVE button to save the new Release ![Project - Save Button](../media/plan-plan-save-button.png)

Please now repeat the steps to create "Release 2" which starts 1 day after "Release 1" ends and lasts for another 3 months.

In your release section you will now see your new releases:

![Project - releases list][plan-releases-list]

If the Save button is active for the project, please press it to save your changes!

--8<-- [end:AddReleasesToProject]

### Add Sprints to Project

--8<-- [start:AddSprintsToProject]

If you have saved the Project, you need to switch back to edit mode by using the Edit Button ![Switch to Edit mode by using the Edit Button on the top left][plan-edit-btn]

As no Sprints have been created and attached to this Project the Sprint section is empty.

![Sprint List][plan-sprint-list]

If you have saved the Project, you need to switch back to edit mode by using the Edit Button ![Switch to Edit mode by using the Edit Button on the top left][plan-edit-btn]

![Create new Sprint button][plan-sprint-list-new]

In the new Dialog/form enter the Sprint name "Sprint 1" and if necessary adjust the Start and End Date:

![Create new Sprint Dialog][plan-sprint-dialog]

Press the Save Button ![Project - Save Button](../media/plan-plan-save-button.png) to save this new Sprint. Now the Sprint is visible in the Sprintlist of the Project:

![Sprint List with newly created sprint][plan-sprint-added]

Repeat this steps and create more Sprints and adjust their Start and End Dates accordingly.

Example with two Sprints:

![Sprint list with two sprints][plan-sprint-more]

Please do not forget to save the project changes!

--8<-- [end:AddSprintsToProject]

### Configure Project

--8<-- [start:ConfigureProject]

If you have saved the Project, you need to switch back to edit mode by using the Edit Button ![Switch to Edit mode by using the Edit Button on the top left][plan-edit-btn]

Click on the sidebar on the "Configure" button/link:

![Project Configure first view][plan-configure]

This screen lets you customize your project with different values for Work Item Types, Priorities, Story Points, Severities, Resolutions, Tags and Release Types. New values can be added by clicking in the white space, typing in a value and clicking the Create link that appears below. Existing values can be removed by clicking the X beside the value

In the Workitem Types remove the Hill, SubHill and Scenario work item types. You can add or remove other items based on your requirements, the new configuraiton should look like this:

![Project new configuration][plan-project-configure]

Click the Save button on the lower right of the screen: ![Save Button](../media/plan-plan-save-button.png)

--8<-- [end:ConfigureProject]

### Add Components

--8<-- [start:AddComponents]

If you have saved the Project, you need to switch back to edit mode by using the Edit Button ![Switch to Edit mode by using the Edit Button on the top left][plan-edit-btn]

Click on the sidebar on the "Component" button/link:

![Component List][plan-component-list]

Click on the "NEW" button to create a new component "EcoDriver":

![Create a new Component][plan-component-create]

Save the component and create another one for "LogicDriver".

The new component list should look like this:

![Final Component List][plan-component-withdata]

Do not forget to save the project to keep the changes!

--8<-- [end:AddComponents]

--8<-- [end:Steps]

---

[GoBackToDemoOverview]: ../index.md
[GoBackToParentIndex]: ../index.md#work-with-boards
[NextLab]: ../index.md#work-with-queries
[plan-new-workitem]: media/plan-newproject-plan-new-work-item.png
[plan-wi-list]: media/plan-newproject-plan-new-wi-list.png
[plan-new-project]: media/plan-newproject-plan-new-project-main.png
[plan-project-data]: media/plan-newproject-plan-project-new-with-data.png
[plan-edit-btn]: media/plan-newproject-plan-project-edit-button.png
[plan-releases-section]: media/plan-newproject-plan-project-releases-section.png
[plan-releases-search]: media/plan-newproject-plan-project-releases-search.png
[plan-new-release]: media/plan-newproject-plan-project-releases-new-release.png
[plan-releases-list]: media/plan-newproject-plan-project-releaseslist.png
[plan-sprint-list]: media/plan-newproject-plan-project-sprintlist.png
[plan-sprint-list-new]: media/plan-newproject-plan-project-sprint-list-new.png
[plan-sprint-dialog]: media/plan-newproject-plan-project-sprint-new-dialog.png
[plan-sprint-added]: media/plan-newproject-plan-project-sprint-list-added.png
[plan-sprint-more]: media/plan-newproject-plan-project-sprint-list-moreadded.png
[plan-configure]: media/plan-newproject-plan-new-project-configure.png
[plan-project-configure]: media/plan-newproject-plan-project-configure.png
[plan-component-list]: media/plan-newproject-plan-project-component-list.png
[plan-component-create]: media/plan-newproject-plan-project-component-create.png
[plan-component-withdata]: media/plan-newproject-plan-project-component-list-withdata.png
