# Deploy Settings

--8<-- [start:DeploySettings]

| Step | Details                                                                                                            | Additional Information { width="50%" } |
|:----:|:-------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
|      | Switch to Settings by using the Settings Icon: ![Deploy Settings Icon][DeploySettingsIcon] from the Deploy Sidebar | ![Deploy Sidebar][DeploySidebar]       |

--8<-- [end:DeploySettings]

## Automation Section

--8<-- [start:AutomationSection]

### Plugins

--8<-- [start:Plugins]

Plugins are listed in the Automation Section of the Settings pages.

- ![Automation Plugins][DeploySettingsAutomationPlugins]
- ![Plugin List][DeploySettingsPluginsList]

#### How to install a plugin

--8<-- [start:InstallPlugin]

click on the **3 Dots** ![3 dots menu][DeployPlugin3DotsMenue] of the plugin you want to install and select install: ![Install plugin][DeployInstallPlugin]
An Installation Confirmation Dialog will pop up, click here on **Confirm** to proceed ![Plugin Installation Confirmation][DeployInstallPluginConfirmation]
Installation is Successfull Notification ![Plugin Installation Successfull][DeployPluginInstallSuccess]

--8<-- [end:InstallPlugin]

### How to upgrade a plugin

--8<-- [start:UpgradePlugin]

Same procedure as installing a Plugin. Click on the 3 Dots menue and select **Upgrade**

--8<-- [end:UpgradePlugin]

--8<-- [end:Plugins]

--8<-- [end:AutomationSection]

## Security Section

--8<-- [start:SecuritySection]

### Tokens

--8<-- [start:Tokens]

Access Token (also known as Personal Access Token, short PAT) are needed for external access to DevOps Deploy to read, create and update data or run deployments.

--8<-- [start:PATDeploy]

| Step | Details                                                                                                                           | Additional Information { width="50%" }        |
|:----:|:----------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
|      | click on **Tokens** ![Tokens][DeployPATLink] in the Security settings to view and create new PAT                                  | ![System Settings View][DeploySystemSettings] |
|      | A list of existing Tokens (PAT) is shown                                                                                          | ![List of PAT][DeployPATList]                 |
|      | Click on **Create Token** ![Create Token button][DeployCreatePATButton] and fill in the details in the new dialog                 | ![PAT Creation Dialog][DeployCreatePATDialog] |
|      | Provide a description, user, expiration and optional restrictions from where this PAT can be ued                                  |                                               |
|      | Click on **Save** ![Save][ButtonSave] and the new PAT will be shown                                                               | ![New PAT is shown][DeployNewPATInfo]         |
|      | Do not to forget to **COPY and PASTE** the PAT into a secure storage for furter usage, then click **Close** ![close][ButtonClose] |                                               |
|      | An updated PAT list is shown                                                                                                      | ![Updated PAT list][DeployPATListUpdated]     |

--8<-- [end:PATDeploy]

--8<-- [end:Tokens]

--8<-- [end:SecuritySection]

## System Section

--8<-- [start:SystemSection]

### AI Settings

--8<-- [start:AISettings]

Configuring the AI Integration is in the **Systems** Section

--8<-- [start:DeployAIIntegration]

| Step | Details                                                          | Additional Information { width="50%" }               |
|:----:|:-----------------------------------------------------------------|:-----------------------------------------------------|
|      | Scroll down in the System Section to view all sub sections       | ![System Section in Settings][DeploySystemSection]   |
|      | Click on the **AI Settings** icon                                | ![AI Icon][DeployAISettingsIcon]                     |
|      | The AI Integration configuration Dialog opens                    | ![AI Integration Settings Dialog][AISettings_Dialog] |
|      | In the **AI Provider** listbox select OpenAI                     | ![Select OpenAI as Provider][AIProvider]             |
|      | If **AI Provider Endpoint** is empty enter this URL              | [https://api.openai.com/](https://api.openai.com/)   |
|      | Enter your API Key in the **AI Provider API Key** field          |                                                      |
|      | Click on the **Model Name** Listbox to view all available Models | ![Model Name][ModelName]                             |
|      | Select your prefered moddel from list                            | ![Select Your Prefered Model][ModelList]             |
|      | Selected Model will be shown                                     | ![Selected Model][ModelSelected]                     |
|      | Click on **Save** to finish setup                                | ![Click on Save][ButtonSave]                         |

--8<-- [end:DeployAIIntegration]

--8<-- [end:AISettings]

--8<-- [end:SystemSection]

---

[DeploySettingsIcon]: ../media/deploy-settings-icon.png
[DeploySettingsAutomationPlugins]: media/deploy-settings-settings-automation-section.png
[DeploySettingsPluginsList]: media/deploy-settings-plugins-list.png
[DeployInstallPlugin]: media/deploy-settings-plugins-install.png
[DeployInstallPluginConfirmation]: media/deploy-settings-plugin-install-confirmation.png
[DeployPluginInstallSuccess]: media/deploy-settings-plugin-install-success.png
[DeployPlugin3DotsMenue]: ../media/deploy-plugin-list-3-dots-menue.png
[ModelSelected]: media/deploy-settings-deploy-ai-settings-model-name-selected.png

[DeploySystemSection]: media/deploy-settings-deploy-settings-system-section.png
[DeployAISettingsIcon]: media/deploy-settings-deploy-system-section-ai-settings.png
[AISettings_Dialog]: media/deploy-settings-deploy-ai-settings-dialog.png
[AIProvider]: media/deploy-settings-deploy-ai-settings-ai-provider-selection.png
[ModelName]: media/deploy-settings-deploy-ai-settings-model-name.png
[ModelList]: media/deploy-settings-deploy-ai-settings-model-available-list.png
[ButtonSave]: ../../../media/common-button-save.png
[DeploySidebar]: ../media/deploy-deploy-sidebar.png
[DeployPATLink]: media/deploy-settings-deploy-tokens-link.png
[DeploySystemSettings]: media/deploy-settings-deploy-settings.png
[DeployPATList]: media/deploy-settings-deploy-pat-list.png
[DeployCreatePATButton]: media/deploy-settings-deploy-create-token-button.png
[DeployCreatePATDialog]: media/deploy-settings-deploy-create-token-dialog.png
[DeployNewPATInfo]: media/deploy-settings-deploy-new-pat-message.png
[ButtonClose]: media/deploy-settings-deploy-close-button.png
[DeployPATListUpdated]: media/deploy-settings-deploy-pat-list-updated.png
