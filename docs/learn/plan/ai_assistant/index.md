# AI Assistant

For more details please have a look at the [AI integration documentation][DOCSPlanAIIntegration].

## Overview

Please have a look at the [AI Assistant documentation][DOCSPlanAIAssistant] for more details.

## AI Assistant integration setup

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

## Using the Plan AI Assistant

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

---

[PlanAIIcon]: media/PLAN_AI_assistant_Icon.png
[PlanSidebar]: ../media/PLAN_Sidebar.png
[AcceptTerms]: media/PLAN_AI_accept_Terms.png
[AIAssistantDialog]: media/PLAN_AI_Dialog1.png
[AIEnterPrompt]: media/PLAN_AI_enter_prompt.png
[AINextButton]: media/PLAN_AI_NextButton.png
[AIGenerateActionItems]: media/PLAN_AI_Generate_Action_Items.png
[AIApplyingPromptsType]: media/PLAN_AI_UserInputType.png
[AIResponses]: media/PLAN_AI_to_create_Items.png
[AISelectButtonBreakDownintoTitles]: media/PLAN_AI_SelectButton_List.png
[AIResponsesWithCheckboxes]: media/PLAN_AI_select_items.png
[AISelectedResponses]: media/PLAN_AI_select_items2.png
[AISelectRecordTypeButton]: media/PLAN_AI_select_record_type.png
[AISelectWorkitemRecordtype]: media/PLAN_AI_recordtype_workitem.png
[AIRecordCreationDialogEmpty]: media/PLAN_AI_recordtype_Dialog1.png
[AIRecordCreationDialogFilled]: media/PLAN_AI_recordtype_Dialog2.png
[AICreateRecordsButton]: media/PLAN_AI_create_records_button.png
[AINewlyCreatedRecords]: media/PLAN_AI_records_created.png
[AIDoneButton]: media/PLAN_AI_done.png
[PlanSidebarConfigIntegration]: ../media/Plan_Sidebar_Config_Integrations.png
[PlanIntegrationsView]: ../media/Plan_IntegrationsView.png
[ButtonNewIntegration]: ../media/Plan_Integration_New_Button.png
[NewIntegrationDialog]: ../media/Plan_Integration_New_Dialog1.png
[NewIntegrationDialogAIProvider]: ../media/Plan_Integration_New_Dialog2.png
[NewIntegrationNoGroups]: ../media/Plan_Integration_New_created_no_Groups.png
[NewIntegrationAddGroupButton]: ../media/Plan_Integration_AddGroup.png
[NewIntegrationSelectGroups]: ../media/Plan_Integration_SelectGroups.png
[NewIntegrationFinal]: ../media/Plan_Integration_Final.png
[PlanMemberAccessList]: ../media/Plan_MemberAccess_Integrations_NotChecked.png
[PlanMemberAccessChecked]: ../media/Plan_MemberAccess_Integrations_Checked.png

[PlanSideBarUserManagement]: ../media/Plan_SideBar_UserManagement.png
[UserManagementGroups]: ../media/Plan_User_Management_Groups.png
[CreateNewGroupButton]: ../media/Plan_Usermanagement_CreateGroup_Button.png
[NameForNewGroup]: ../media/Plan_Usermanagement_NewGroupName.png
[GroupAddUserButton]: ../media/Plan_Usermanagement_GroupAddUser.png
[GroupAddUserFromList]: ../media/Plan_Usermanagement_GroupAddUsersList.png
[AddUserToGroupButton]: ../media/Plan_Usermanagement_GroupAddUsersList_ButtonADD.png
[GroupUpdated]: ../media/Plan_Usermanagement_GroupAddUsersList_Updated.png
[ButtonADD]: ../../../media/Button_ADD.jpg
[PlanMemberAccessSelected]: ../media/Plan_SideBar_Profile_MemberAccess_Selected.png

[SelectAIModelFromList]: ../media/Plan_Integration_SelectAIModel.png
[LLMSettings]: ../media/Plan_Integration_LLMSettings.png
[ButtonSave]: ../../../media/Button_Save.png
[PlusSymbol]: ../media/Plan_PlusSymbol.png
[DOCSPlanAIIntegration]: https://www.ibm.com/docs/en/devops-plan/3.0.6?topic=packages-artificial-intelligence-integration
[DOCSPlanAIAssistant]: https://www.ibm.com/docs/en/devops-plan/3.0.6?topic=views-ai-assistant
