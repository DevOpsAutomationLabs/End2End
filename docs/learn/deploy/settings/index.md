# Deploy Settings

Switch to Settings by using the Settings Icon: ![Deploy Settings Icon][DeploySettingsIcon]

## Automation Section

### Plugins

Plugins are listed in the Automation Section of the Settings pages.

- ![Automation Plugins][DeploySettingsAutomationPlugins]
- ![Plugin List][DeploySettingsPluginsList]

#### How to install a plugin

click on the **3 Dots** ![3 dots menue][DeployPlugin3DotsMenue] of the plugin you want to install and select install: ![Install plugin][DeployInstallPlugin]
An Installation Confirmation Dialog will pop up, click here on **Confirm** to proceed ![Plugin Installation Confirmation][DeployInstallPluginConfirmation]
Installation is Successfull Notification ![Plugin Installation Successfull][DeployPluginInstallSuccess]

### How to upgrade a plugin

Same procedure as installing a Plugin. Click on the 3 Dots menue and select **Upgrade**

## Security Section

## System Section

### AI Settings

Configuring the AI Integration is in the **Systems** Section

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

---

[DeploySettingsIcon]: ../media/DEPLOY_SettingsIcon.png
[DeploySettingsAutomationPlugins]: media/DEPLOY_Settings_AutomationSection.png
[DeploySettingsPluginsList]: media/DEPLOY_PluginsList.png
[DeployInstallPlugin]: media/DEPLOY_Plugins_Install.png
[DeployInstallPluginConfirmation]: media/DEPLOY_PluginInstallConfirmation.png
[DeployPluginInstallSuccess]: media/DEPLOY_PluginInstallSuccess.png
[DeployPlugin3DotsMenue]: ../media/DEPLOY_PluginList_3DotsMenue.png
[ModelSelected]: media/Deploy_AI_Settings_ModelName_Selected.png

[DeploySystemSection]: media/Deploy_Settings_SystemSection.png
[DeployAISettingsIcon]: media/Deploy_SystemSection_AI_Settings.png
[AISettings_Dialog]: media/Deploy_AI_Settings_Dialog.png
[AIProvider]: media/Deploy_AI_Settings_AIProviderSelection.png
[ModelName]: media/Deploy_AI_Settings_ModelName.png
[ModelList]: media/Deploy_AI_Settings_Model_AvailableList.png
[ButtonSave]: ../../../media/Button_Save.png
