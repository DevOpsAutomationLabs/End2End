# Setting up the AI integrations

## [AI Integration on Teamspace level](learn/introduction/intro/index.md#integrations)

View or Create an Integration to an AI Provider

| Step | Details                                                                                             | Additional Information                                            |
|:----:|:----------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|
|  1   | Click on *Integrations* in the *Settings* menue to get the list of all integrations or create new one | ![Sidebar Settings][SBSettings]                                   |
|  2   | A list of integrations is shown if available.                                                       | ![Integrations View with Entry][IntegrationsView]                 |
|  3   | To create a new integration click the Button *New Integration*                                      | ![Create Integrations Button][ButtonCreateNewIntegration]         |
|  4   | A Dialog for the integration appears                                                                | ![New Integrations Dialog][NewIntegrationsDialog]                 |
| 4.1  | Enter a meaningful Name                                                                             | ![New Integration Name][NewIntegrationName]                       |
| 4.2  | Select the AI Provider                                                                              | ![Select AI Provider][NewIntegrationsSelectAIProvider]            |
| 4.3  | Enter your API Key and press *Next*                                                                 | ![Press Next][ButtonNext]                                         |
|  5   | Next page of dialog is shown                                                                        | ![New Integrations additional Details][NewIntegrationsDialogNext] |
| 5.1  | Enter the API endpoint                                                                              | [https://api.openai.com/v1](https://api.openai.com/v1)            |
| 5.2  | Select your prefered model and further configurations                                               | ![Enter more details][NewIntegrationsDialogNextDetails]           |
| 5.3  | click on *Save*                                                                                     | ![Click the Save button][ButtonSave]                              |
|  6   | The newly created AI integration is shown                                                           | ![List of Integrations][ListOfIntegrations]                       |

## [DevOps Plan AI integration setup](learn/plan/index.md#ai-assistant-integration-setup)

For easier management of AI access we need to create a Usergroup and add the eligible members to it.

| Step | Details                                                                                             | Additional Information                                            |
|:----:|:----------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|
|     | Click on *User Management* in the *3 Dots* menue in the sidebar  | ![UserManagement][PlanSideBarUserManagement]  |
|     | Click on the *Groups* tab in the User Management View | ![Click on Groups Tab][UserManagementGroups]  |
|     | Click on *Create Group* Button to create a new Group |  ![Click on Create Group Button][CreateNewGroupButton] |
|     | Enter a meaningful name for new Group | ![Enter a Name for new Group][NameForNewGroup]  |
|     | Click on the *Add User* section | ![Add a user to this group][GroupAddUserButton]  |
|     | Select the users by clicking on the *+* symbol | ![select the users for this group][GroupAddUserFromList]  |
|     | Click the *Add* Button to add selected Users to Group | ![Presss ADD button to add selected users][AddUserToGroupButton] |
|     | All Groupmemebers are now listed in Group | ![Group Member List][GroupUpdated]  |

Next configure the AI Integration

| Step | Details                                                                  | Additional Information                                                                   |
|:----:|:-------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------|
|      | Click on *Integrations* in the *Configuration* menue in the sidebar      | ![Sidebar Configuration Integration][PlanSidebarConfigIntegration]                       |
|      | The empty integrations view is shown                                     | ![Integrations View][PlanIntegrationsView]                                               |
|      | Click on *New Integration* Button                                        | ![New Integration Button][ButtonNewIntegration]                                          |
|      | Enter a meaningful name and select your AI Provider and API Key          | ![New Integration Dialog 1][NewIntegrationDialog]                                        |
|      | Press *Next* Button to enter more Details                                | ![Click Next Button][AINextButton]                                                       |
|      | Next dialog page opens                                                   | ![New Integration Dialog 2][NewIntegrationDialogAIProvider]                              |
|      | Enter API Endpoint if missing                                            | [https://api.openai.com/v1/chat/completions](https://api.openai.com/v1/chat/completions) |
|      | Select your prefered model                                               | ![Select a Model][SelectAIModelFromList]                                                 |
|      | Set your prefered LLM settings for temperature and more                  | ![Set your preferences for LLM][LLMSettings]                                             |
|      | Click on *Save*                                                          | ![Click Save Button][ButtonSave]                                                         |
|      | The new AI integration is created but no Groups are associated           | ![Newly created integration with no groups associated][NewIntegrationNoGroups]    |
|      | Press the Add Groups Button under Actions Column                         | ![Press Add Groups Button][NewIntegrationAddGroupButton]                                 |
|      | Select the new Group you created from above and additional ones you need | ![Select Groups][NewIntegrationSelectGroups]                                             |
|      | Click on *ADD* Button to save selection                                  | ![Press the Add Button to save selection][ButtonADD]                                     |
|      | Updated View                                                             | ![Final Integration view][NewIntegrationFinal]                                           |

Last step is for every enabled user (from selected groups) is to activate the access

| Step | Details                                                                      | Additional Information                                                              |
|:----:|:-----------------------------------------------------------------------------|:------------------------------------------------------------------------------------|
|      | Click on your *Profile* Icon in the Sidebar and select *Member Access*       | ![Sidebar Profile Member Access][PlanMemberAccessSelected]            |
|      | A list of integrations available for Member access is shown and their status | ![Integrations for Member Access][PlanMemberAccessList]                             |
|      | Click on the Integrationname to activate access                              | ![Check the newly created integration to get it activated][PlanMemberAccessChecked] |

---

[PlanSidebarConfigIntegration]: learn/plan/media/Plan_Sidebar_Config_Integrations.png
[PlanIntegrationsView]: learn/plan/media/Plan_IntegrationsView.png
[ButtonNewIntegration]: learn/plan/media/Plan_Integration_New_Button.png
[NewIntegrationDialog]: learn/plan/media/Plan_Integration_New_Dialog1.png
[NewIntegrationDialogAIProvider]: learn/plan/media/Plan_Integration_New_Dialog2.png
[PlanSideBarUserManagement]: learn/plan/media/Plan_SideBar_UserManagement.png
[UserManagementGroups]: learn/plan/media/Plan_User_Management_Groups.png
[CreateNewGroupButton]: learn/plan/media/Plan_Usermanagement_CreateGroup_Button.png
[NameForNewGroup]: learn/plan/media/Plan_Usermanagement_NewGroupName.png
[GroupAddUserButton]: learn/plan/media/Plan_Usermanagement_GroupAddUser.png
[GroupAddUserFromList]: learn/plan/media/Plan_Usermanagement_GroupAddUsersList.png
[AddUserToGroupButton]: learn/plan/media/Plan_Usermanagement_GroupAddUsersList_ButtonADD.png
[GroupUpdated]: learn/plan/media/Plan_Usermanagement_GroupAddUsersList_Updated.png

[SBSettings]: learn/introduction/intro/media/Loop_Sidebar_Settings.png
[IntegrationsView]: learn/introduction/intro/media/Loop_AI_Setup_empty_list.png
[ButtonCreateNewIntegration]:learn/introduction/intro/media/Loop_Settings_NewIntegrationsButton.png
[NewIntegrationsDialog]: learn/introduction/intro/media/Loop_Settings_IntegrationsNewDialog1.png
[NewIntegrationName]: learn/introduction/intro/media/Loop_AI_Setup_Name.png
[NewIntegrationsSelectAIProvider]: learn/introduction/intro/media/Loop_AI_setup_Select_Provider.png
[NewIntegrationsDialogNext]: learn/introduction/intro/media/Loop_Settings_IntegrationsNewDialog3.png
[NewIntegrationsDialogNextDetails]: learn/introduction/intro/media/Loop_AI_Setup_Page_2.png
[ListOfIntegrations]: learn/introduction/intro/media/Loop_Settings_Integrations.png
[ButtonNext]: media/Button_NEXT.png
[ButtonSave]: media/Button_Save.png
[AINextButton]: media/PLAN_AI_NextButton.png
[SelectAIModelFromList]: media/Plan_Integration_SelectAIModel.png
[LLMSettings]: media/Plan_Integration_LLMSettings.png
[NewIntegrationNoGroups]: media/Plan_Integration_New_created_no_Groups.png
[NewIntegrationAddGroupButton]: media/Plan_Integration_AddGroup.png
[NewIntegrationSelectGroups]: media/Plan_Integration_SelectGroups.png
[NewIntegrationFinal]: media/Plan_Integration_Final.png
[PlanMemberAccessList]: media/Plan_MemberAccess_Integrations_NotChecked.png
[PlanMemberAccessChecked]: media/Plan_MemberAccess_Integrations_Checked.png
[ButtonADD]: ../../media/Button_ADD.jpg
[PlanMemberAccessSelected]: media/Plan_SideBar_Profile_MemberAccess_Selected.png
