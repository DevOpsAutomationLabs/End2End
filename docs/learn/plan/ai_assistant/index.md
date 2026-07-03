# AI Assistant

For more details please have a look at the [AI integration documentation][DOCSPlanAIIntegration].

## Overview

--8<-- [start:Overview]

Please have a look at the [AI Assistant documentation][DOCSPlanAIAssistant] for more details.

--8<-- [end:Overview]

## AI Assistant integration setup

--8<-- [start:AIAssistantSetup]

### Create AI User Group

> NOTE: For easier management of AI access we need to create a Usergroup and add the eligible members to it.

--8<-- [start:PLANNewGroup]

| Step | Details                                                               | Additional Information                                           |
|:----:|:----------------------------------------------------------------------|:-----------------------------------------------------------------|
|      | Click on **User Management** in the **3 Dots** menue in the sidebar   | ![UserManagement][PlanSideBarUserManagement]                     |
|      | Click on the *Groups* tab in the User Management View                 | ![Click on Groups Tab][UserManagementGroups]                     |
|      | Click on **Create Group** Button to create a new Group                | ![Click on Create Group Button][CreateNewGroupButton]            |
|      | Enter a meaningful name for new Group                                 | ![Enter a Name for new Group][NameForNewGroup]                   |
|      | Click on the **Add User** section                                     | ![Add a user to this group][GroupAddUserButton]                  |
|      | Select the users by clicking on the ![Plus Symbol][PlusSymbol] symbol | ![select the users for this group][GroupAddUserFromList]         |
|      | Click the **Add** Button to add selected Users to Group               | ![Presss ADD button to add selected users][AddUserToGroupButton] |
|      | All Groupmemebers are now listed in Group                             | ![Group Member List][GroupUpdated]                               |

--8<-- [end:PLANNewGroup]

### Configure AI Integration

Next configure the AI Integration

--8<-- [start:PLANAIIntegration]

| Step | Details                                                                  | Additional Information                                                                   |
|:----:|:-------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------|
|      | Click on *Integrations* in the *Configuration* menue in the sidebar      | ![Sidebar Configuration Integration][PlanSidebarConfigIntegration]                       |
|      | The empty integrations view is shown                                     | ![Integrations View][PlanIntegrationsView]                                               |
|      | Click on **New Integration** Button                                      | ![New Integration Button][ButtonNewIntegration]                                          |
|      | Enter a meaningful name and select your AI Provider and API Key          | ![New Integration Dialog 1][NewIntegrationDialog]                                        |
|      | Press **Next** Button to enter more Details                              | ![Click Next Button][AINextButton]                                                       |
|      | Next dialog page opens                                                   | ![New Integration Dialog 2][NewIntegrationDialogAIProvider]                              |
|      | Enter API Endpoint if missing                                            | [https://api.openai.com/v1/chat/completions](https://api.openai.com/v1/chat/completions) |
|      | Select your prefered model                                               | ![Select a Model][SelectAIModelFromList]                                                 |
|      | Set your prefered LLM settings for temperature and more                  | ![Set your preferences for LLM][LLMSettings]                                             |
|      | Click on **Save**                                                        | ![Click Save Button][ButtonSave]                                                         |
|      | The new AI integration is created but no Groups are associated           | ![Newly created integration with no groups associated][NewIntegrationNoGroups]           |
|      | Press the Add Groups Button under Actions Column                         | ![Press Add Groups Button][NewIntegrationAddGroupButton]                                 |
|      | Select the new Group you created from above and additional ones you need | ![Select Groups][NewIntegrationSelectGroups]                                             |
|      | Click on *ADD* Button to save selection                                  | ![Press the Add Button to save selection][ButtonADD]                                     |
|      | Updated View                                                             | ![Final Integration view][NewIntegrationFinal]                                           |

--8<-- [end:PLANAIIntegration]

### Activate member access

Last step is for every enabled user (from selected groups) is to activate the access

--8<-- [start:PLANMemberAccess]

| Step | Details                                                                      | Additional Information                                                              |
|:----:|:-----------------------------------------------------------------------------|:------------------------------------------------------------------------------------|
|      | Click on your *Profile* Icon in the Sidebar and select **Member Access**     | ![Sidebar Profile Member Access][PlanMemberAccessSelected]                          |
|      | A list of integrations available for Member access is shown and their status | ![Integrations for Member Access][PlanMemberAccessList]                             |
|      | Click on the Integrationname to activate access                              | ![Check the newly created integration to get it activated][PlanMemberAccessChecked] |

--8<-- [end:PLANMemberAccess]

--8<-- [end:AIAssistantSetup]

## Using the Plan AI Assistant

--8<-- [start:UsingPlanAI]

### AI Assistant Chat Dialog

--8<-- [start:PlanAIAssistantChat]

| Step | Details                                                                        |          Additional Information           |
|:----:|:-------------------------------------------------------------------------------|:-----------------------------------------:|
|  1   | Select the AI Assistant Icon ![AI Assistant Icon][PlanAIIcon] from the Sidebar |          ![Sidebar][PlanSidebar]          |
|  2   | Accept the terms of service !                                                  |       ![Accept Terms][AcceptTerms]        |
|  3   | The AI Assistant Chat Dialog opens                                             | ![AI Assistant Dialog][AIAssistantDialog] |
|  4   | Enter Now a prompt, you can use the example prompts, or enter your prompt      |      ![Enter Prompt][AIEnterPrompt]       |
|  5   | Click on the Next Button                                                       |       ![Next Button][AINextButton]        |

--8<-- [end:PlanAIAssistantChat]

### AI Assistant Type of Output

--8<-- [start:PlanAIAssistantOutputType]

| Step | Details                                                                                                                      | Additional Information                                     |
|:----:|:-----------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
|  1   | Now select the type of Output:                                                                                               |                                                            |
|  2   | We will select **Generate Action Items** ![Generate Action Items][AIGenerateActionItems] <br> from the Applying Prompts page | ![Applying Prompts][AIApplyingPromptsType]                 |
|  3   | This will generate a set of responses                                                                                        | ![AI Responses][AIResponses]                               |
|  4   | Click the **Select** Button <br> and select **Break Down into Titles**                                                       | ![Select Button][AISelectButtonBreakDownintoTitles]        |
|  5   | This will convert the list of responses to a list with checkboxes:                                                           | ![AI Responses with Checkboxes][AIResponsesWithCheckboxes] |
|  6   | Select a few you like from the list                                                                                          | ![AI Responses selected][AISelectedResponses]              |

--8<-- [end:PlanAIAssistantOutputType]

### AI Assistant Create Records from Responses

--8<-- [start:PlanAIAssistantCreateRecords]

| Step | Details                                                               | Additional Information                                   |
|:----:|:----------------------------------------------------------------------|:---------------------------------------------------------|
|      | Click the **Select Record Type** Button                               | ![Select Record Type][AISelectRecordTypeButton]          |
|      | to select **Workitem** from the list                                  | ![Select Workitem][AISelectWorkitemRecordtype]           |
|      | In the next Dialog select the right **Project** and **Workitem Type** | ![Record Creation Dialog1][AIRecordCreationDialogEmpty]  |
|      | for example Project: Echologic and Type: Epic                         | ![Record Creation Dialog2][AIRecordCreationDialogFilled] |
|      | Press the **Create Records** Button to get the **Epics** created      | ![Create Records Button][AICreateRecordsButton]          |
|      | A few seconds later all newly created records are now created         | ![Newly created Records][AINewlyCreatedRecords]          |
|      | Press **Done** to finish using the AI Assistant                       | ![Done Button][AIDoneButton]                             |

--8<-- [end:PlanAIAssistantCreateRecords]

--8<-- [end:UsingPlanAI]

---

[PlanAIIcon]: media/plan-ai-assistant-icon.png
[PlanSidebar]: ../media/plan-sidebar.png
[AcceptTerms]: media/plan-ai-accept-terms.png
[AIAssistantDialog]: media/plan-ai-dialog-01.png
[AIEnterPrompt]: media/plan-ai-enter-prompt.png
[AINextButton]: media/plan-ai-next-button.png
[AIGenerateActionItems]: media/plan-ai-generate-action-items.png
[AIApplyingPromptsType]: media/plan-ai-user-input-type.png
[AIResponses]: media/plan-ai-to-create-items.png
[AISelectButtonBreakDownintoTitles]: media/plan-ai-select-button-list.png
[AIResponsesWithCheckboxes]: media/plan-ai-select-items.png
[AISelectedResponses]: media/plan-ai-select-items-02.png
[AISelectRecordTypeButton]: media/plan-ai-select-record-type.png
[AISelectWorkitemRecordtype]: media/plan-ai-recordtype-workitem.png
[AIRecordCreationDialogEmpty]: media/plan-ai-recordtype-dialog-01.png
[AIRecordCreationDialogFilled]: media/plan-ai-recordtype-dialog-02.png
[AICreateRecordsButton]: media/plan-ai-create-records-button.png
[AINewlyCreatedRecords]: media/plan-ai-records-created.png
[AIDoneButton]: media/plan-ai-done.png
[PlanSidebarConfigIntegration]: ../media/plan-plan-sidebar-config-integrations.png
[PlanIntegrationsView]: ../media/plan-plan-integrations-view.png
[ButtonNewIntegration]: ../media/plan-plan-integration-new-button.png
[NewIntegrationDialog]: ../media/plan-plan-integration-new-dialog-01.png
[NewIntegrationDialogAIProvider]: ../media/plan-plan-integration-new-dialog-02.png
[NewIntegrationNoGroups]: ../media/plan-plan-integration-new-created-no-groups.png
[NewIntegrationAddGroupButton]: ../media/plan-plan-integration-add-group.png
[NewIntegrationSelectGroups]: ../media/plan-plan-integration-select-groups.png
[NewIntegrationFinal]: ../media/plan-plan-integration-final.png
[PlanMemberAccessList]: ../media/plan-plan-member-access-integrations-not-checked.png
[PlanMemberAccessChecked]: ../media/plan-plan-member-access-integrations-checked.png

[PlanSideBarUserManagement]: ../media/plan-plan-side-bar-user-management.png
[UserManagementGroups]: ../media/plan-plan-user-management-groups.png
[CreateNewGroupButton]: ../media/plan-plan-usermanagement-create-group-button.png
[NameForNewGroup]: ../media/plan-plan-usermanagement-new-group-name.png
[GroupAddUserButton]: ../media/plan-plan-usermanagement-group-add-user.png
[GroupAddUserFromList]: ../media/plan-plan-usermanagement-group-add-users-list.png
[AddUserToGroupButton]: ../media/plan-plan-usermanagement-group-add-users-list-button-add.png
[GroupUpdated]: ../media/plan-plan-usermanagement-group-add-users-list-updated.png
[ButtonADD]: ../../../media/common-button-add.png
[PlanMemberAccessSelected]: ../media/plan-plan-side-bar-profile-member-access-selected.png

[SelectAIModelFromList]: ../media/plan-plan-integration-select-ai-model.png
[LLMSettings]: ../media/plan-plan-integration-llm-settings.png
[ButtonSave]: ../../../media/common-button-save.png
[PlusSymbol]: ../media/plan-plan-plus-symbol.png
[DOCSPlanAIIntegration]: https://www.ibm.com/docs/en/devops-plan/3.0.6?topic=packages-artificial-intelligence-integration
[DOCSPlanAIAssistant]: https://www.ibm.com/docs/en/devops-plan/3.0.6?topic=views-ai-assistant
