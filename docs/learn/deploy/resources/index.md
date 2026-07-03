# Resources

## Go to Resources

--8<-- [start:GoToResources]

| Step | Details                                             | Additional Information                          |
|:----:|:----------------------------------------------------|:------------------------------------------------|
|  1   | Switch to Resources View by clicking on the Sidebar |                                                 |
|      |                                                     | ![Sidebar Resources][SBResourcesIcon]           |
|      |                                                     | ![Sidebar Resources with Text][SBResourcesText] |
|      | View for all Resources                              | ![All Resources Tabs][ResAllTabs]               |

--8<-- [end:GoToResources]

## Agent Pools

--8<-- [start:AgentPools]

| Step | Details                              | Additional Information                                                    |
|:----:|:-------------------------------------|:--------------------------------------------------------------------------|
|  1   | Switch to AgentPools View            | ![Agent Pools Tab][ResAPTab]                                              |
|  2   | In this view                         | ![AgentPool View][ResAPView]{: style="height:50%;width:50%"}              |
|  3   | click on                             | ![Create AP Button][ResAPCreateButton]                                    |
|  4   | In the **Create Agent Pool** Dialog  | ![AP Creation Dialog][ResAPCreateDialog]{: style="height:50%;width:50%"}  |
|      | 4.1 Enter "demo" in the name field   |                                                                           |
|      | 4.2 Select all agents                | ![Select Agents][ResAPCreateSelectAgents]{: style="height:50%;width:50%"} |
|      | 4.3 Click on **Save** Button         | ![Save Button][ButtonSave]                                                |
|  5   | New Agent Pool is listed in the View | ![Agent Pool List][ResAPList]{: style="height:50%;width:50%"}             |

--8<-- [end:AgentPools]

## Resource Tree

--8<-- [start:ResourceTree]

| Step | Details                                                                 | Additional Information                         |
|:----:|:------------------------------------------------------------------------|:-----------------------------------------------|
|  1   | Switch to Resource Tree View                                            | ![Resource Tree Tab][ResTreeTab]               |
|  2   | In this view                                                            | ![Resourcetree view][ResTreeView]              |
|  3   | Create a **Top-Level** Group                                            |                                                |
|      | 3.1click on **Create Top-Level Group** button                           | ![Create Top Level Button][ResButtonCreateTop] |
|      | 3.2 The **Create Resource** Dialog appears                              | ![Create Resource Dialog][ResCreateResDialog]  |
|      | 3.3 Enter "EchoLogic" in the name field                                 | ![Enter Name][ResCreateDialogEnterName]        |
|      | 3.4 click on **Save** Button                                            | ![Save Button][ButtonSave]                     |
|      | 3.5 Top Level Group created                                             | ![Top Level Created][ResTopLevelCreated]       |
|  4   | Add Sub Groups for Environments                                         |                                                |
|      | 4.1 To add sub Groups to Top Level click on the 3 dots                  | ![3 Dots][3Dots]                               |
|      | 4.2 Menu is shown                                                       | ![3 Dots menue][Res3DotsMenu]                  |
|      | 4.3 Select **Add Group** from this menue                                | ![Add Group][ResAddGroup]                      |
|      | 4.4 Enter Sub Group name "DEV"                                          | ![Group Name][ResSubGroupName]                 |
|      | 4.5   Click on **Save** Button                                          | ![Save Button][ButtonSave]                     |
|      | 4.6 repeat this section to add additional Groups for "QA" and "PROD"    | ![All SubGroups added][ResSubGroups]           |
|  5   | Add an Agent Pool to Environment Sub Groups                             |                                                |
|      | 5.1 To add Agent Pool to Sub Group click on the 3 dots of the sub group | ![3 Dots][3Dots]                               |
|      | 5.2 Menu is shown                                                       | ![3 Dots menue][Res3DotsMenu]                  |
|      | 5.3 Select **Add Agent Pool**                                           | ![Add Agent Pool menue][ResAddAgentPool]       |
|      | 5.4 Select "demo" from list of Agent Pools and enter "demo" as name     | ![Add Agent Pool Dialog][AddAgentPoolDialog]   |
|      | 5.5 Click on **Save** Button                                            | ![Save Button][ButtonSave]                     |
|      | 5.6 repeat this section to add an Agent pool to Groups "QA" and "PROD"  |                                                |
|  6   | Add a Component Tag |                                                |
|      | 6.1 To add a Component Tag to the Agent Pools click on the 3 dots on the right side of it| ![3 Dots][3Dots]   |
|      | 6.2 Menu is shown                                                       | ![Agent/Pool 3 Dots menue][Agent3DotsMenu]  |
|      | 6.3 Select **Add Component Tag** | ![Add Component Tag][AgentAddCompTag]  |
|      | 6.4 Select "EchoLogicComponents" from List of Tags and use same as Name| ![Select Component Tag][CompTagDialog]  |
|      | 6.5 Click on **Save** Button                                            | ![Save Button][ButtonSave]                     |
|      | 6.6 repeat this section to add a Component Tag to other 2 Sub Groups/Environments|  |
|  7   | Final Resource Tree View | ![Final Resource Tree][ResTreeFinal]  |

--8<-- [end:ResourceTree]

---

[SBResourcesIcon]: ../media/deploy-deploy-side-bar-1-resources-icon.png
[SBResourcesText]: ../media/deploy-deploy-side-bar-1-resources-icon-with-text.png
[ResAPTab]: media/deploy-res-deploy-resources-agent-pools-tab.png
[ResAPView]: media/deploy-res-deploy-resources-agent-pools-view.png
[ResAPCreateButton]: media/deploy-res-deploy-resources-agent-pools-create-agent-pool-button.png
[ResAPCreateDialog]: media/deploy-res-deploy-resources-agent-pools-create-dialog.png
[ResAPCreateSelectAgents]: media/deploy-res-deploy-agent-pool-select-from-list-of-agents.png
[ButtonSave]: ../../../media/common-button-save.png
[ResAPList]: media/deploy-res-deploy-resources-agent-pool-list.png
[ResTreeTab]: media/deploy-res-deploy-resources-resource-tree-tab.png
[ResAllTabs]: media/deploy-res-deploy-resources-all-tab-view.png
[ResTreeView]: media/deploy-res-deploy-resource-tree-view.png
[ResButtonCreateTop]: media/deploy-res-deploy-resources-create-top-level.png
[ResCreateResDialog]: media/deploy-res-deploy-resource-tree-create-dialog.png
[ResCreateDialogEnterName]: media/deploy-res-deploy-resource-tree-create-dialog-enter-name.png
[ResTopLevelCreated]: media/deploy-res-deploy-resource-tree-top-level-created.png
[Res3DotsMenu]: media/deploy-res-deploy-resource-tree-3-dots-menu.png
[3Dots]: ../media/deploy-deploy-3-dots.png
[ResAddGroup]: media/deploy-res-deploy-resource-tree-3-dots-add-group.png
[ResSubGroupName]: media/deploy-res-deploy-resource-tree-sub-group-name.png
[ResSubGroups]: media/deploy-res-deploy-resource-tree-sub-groups.png
[ResAddAgentPool]: media/deploy-res-deploy-resource-tree-3-dots-add-agent-pool.png
[AddAgentPoolDialog]: media/deploy-res-deploy-resource-tree-add-agent-pool-dialog.png
[Agent3DotsMenu]: media/deploy-res-deploy-resources-agentand-pools-3-dots-menu.png
[AgentAddCompTag]: media/deploy-res-deploy-resource-tree-3-dots-add-comp-tag.png
[CompTagDialog]: media/deploy-res-deploy-resource-tree-create-resouce-dialog-component-tag.png
[ResTreeFinal]: media/deploy-res-deploy-resource-tree-final.png
