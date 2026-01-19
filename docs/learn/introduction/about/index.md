# About Box, Sidebar and Plug-Ins

## About Box and Logging out

| Step | Details                                                                                                 | Additional Information                        |
|:----:|:--------------------------------------------------------------------------------------------------------|:----------------------------------------------|
|      | **About Loop**                                                                                          |                                               |
|      | On the above right side of your page you have the buttons for viewing the **About** box                 | ![About Button][AboutButton]                  |
|      | By pressing the About button the Information about the platform version and copyright will be presented | ![About Box][About]                           |
|      | Please close by clicking on the "x" symbol on popup                                                     |                                               |
|      | **Logging out**                                                                                         |                                               |
|      | You can always log out of the platform by pressing the user symbol                                      | ![User Symbol for Logging Out][LoggOutButton] |
|      | After a secure log out you will be presented with a new page which provides a login again               | ![Logged out][LoggedOut]                      |

## Sidebar

| Step | Details                                                                                         | Additional Information          |
|:----:|:------------------------------------------------------------------------------------------------|:--------------------------------|
|      | On the left side of the page you will have the side bar which will provide context related menu | ![Sidebar][SBIcons]             |
|      | You can expand the side bar with the expand button on the bottom left side of the page          | ![Sidebar expander][SBExpander] |
|      | Which will provide the sidebar items with text details                                          | ![Sidebar expanded][SBExpanded] |

### Plug-Ins

> NOTE: This page will provide you some information about available Plug-Ins, installing and configuring them needs to be done in the appropiate capabilities.

| Step | Details                                                                                                                                | Additional Information        |
|:----:|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|
|      | On the sidebar a view of slected plug-ins is available. By pressing on the Plug-Ins symbol the Featured Plugins page will be presented | ![Sidebar Plugins][SBPlugins] |

<!-- <img src="media/Loop_Sidebar_plugins.png" width="50%" height="50%"> -->

### Settings

| Step | Details                                                                                | Additional Information          |
|:----:|:---------------------------------------------------------------------------------------|:--------------------------------|
|      | The Settings Menue provides a view User Administration and managing the AI integration | ![Sidebar Settings][SBSettings] |

#### User Administration

| Step | Details                                                                                       | Additional Information              |
|:----:|:----------------------------------------------------------------------------------------------|:------------------------------------|
|      | This view will provide information about the Tenant and the users in this tenant              | ![User Admin View][UserAdminView]   |
|      | Detailed information about a user, which Teamspaces and Loops it has access to and gobal Role | ![User Detail][UserAdminUserDetail] |

#### Integrations

View or Create an Integration to an AI Provider

--8<-- [start:TSAIIntegrations]

| Step | Details                                                                                             | Additional Information                                            |
|:----:|:----------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|
|  1   | Click on *Integrations* in the Settings menue to get the list of all integrations or create new one | ![Sidebar Settings][SBSettings]                                   |
|  2   | A list of integrations is shown if available.                                                       | ![Integrations View with Entry][IntegrationsView]                 |
|  3   | To create a new integration click the Button *New Integration*                                      | ![Create Integrations Button][ButtonCreateNewIntegration]         |
|  4   | A Dialog for the integration appears                                                                | ![New Integrations Dialog][NewIntegrationsDialog]                 |
| 4.1  | Enter a meaningful Name                                                                             | ![New Integration Name][NewIntegrationName]                       |
| 4.2  | Select the AI Provider (for example OpenAI)                                                         | ![Select AI Provider][NewIntegrationsSelectAIProvider]            |
| 4.3  | Enter your API Key and press *Next*                                                                 | ![Press Next][ButtonNext]                                         |
|  5   | Next page of dialog is shown                                                                        | ![New Integrations additional Details][NewIntegrationsDialogNext] |
| 5.1  | Enter the API endpoint (for example for OpenAI)                                                     | [https://api.openai.com/v1](https://api.openai.com/v1)            |
| 5.2  | Select your prefered model and further configurations (for example from OpenAI models)              | ![Enter more details][NewIntegrationsDialogNextDetails]           |
| 5.3  | click on *Save*                                                                                     | ![Click the Save button][ButtonSave]                              |
|  6   | The newly created AI integration is shown                                                           | ![List of Integrations][ListOfIntegrations]                       |

--8<-- [end:TSAIIntegrations]

---

[SBSettings]: media/Loop_Sidebar_Settings.png
[SBPlugins]: media/Loop_Sidebar_plugins.png
[SBExpanded]: media/Loop_Sidebar_expanded.png
[SBExpander]: media/Loop_Sidebar_expand_button.png
[SBIcons]: media/Loop_Sidebar_small.png
[LoggedOut]: media/Loop_Logged_out.png
[LoggOutButton]: media/Loop_Logout_Button.png
[About]: media/Loop_About_box.png
[AboutButton]: media/Loop_About_Button.png
[UserAdminUserDetail]: media/Loop_Settings_UserAdmin_Users.png
[UserAdminView]: media/Loop_Settings_UserAdmin.png
[IntegrationsView]: media/Loop_AI_Setup_empty_list.png
[ButtonCreateNewIntegration]: media/Loop_Settings_NewIntegrationsButton.png
[NewIntegrationsDialog]: media/Loop_Settings_IntegrationsNewDialog1.png
[NewIntegrationName]: media/Loop_AI_Setup_Name.png
[NewIntegrationsSelectAIProvider]: media/Loop_AI_setup_Select_Provider.png
[NewIntegrationsDialogNext]: media/Loop_Settings_IntegrationsNewDialog3.png
[NewIntegrationsDialogNextDetails]: media/Loop_AI_Setup_Page_2.png
[ListOfIntegrations]: media/Loop_Settings_Integrations.png
[ButtonNext]: ../../../media/Button_NEXT.png
[ButtonSave]: ../../../media/Button_Save.png
