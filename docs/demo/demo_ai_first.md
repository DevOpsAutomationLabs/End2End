# AI First Demo Flow

For the AI First Demo you can use VSCode with Copilot or IBM Project Bob.

## VSCode and MCP Server

Please have a look how to use MCP Server with VSCode in this [documentation][VSCodeMCPServer]. More MCP Server for VSCode can be found in the [Marketplace][VSMarketplaceMCP]

## Preparing the mcp.json file

Add the MCP Servers into the mcp.json file in the "servers" section.

```json
{
  "servers": {
  },
  "inputs": []
}
```

### Loop MCP Server

The Loop MCP server uses single sign on for authentication so the setup is very simple.

```json
"Loop-mcp-server": {
  "url": "https://<hostname>/loop/mcp",
  "type": "http"
}
```

### Control MCP Server

#### Get the necessary Access Token

--8<--
learn/control/index.md:PATControl
--8<--

#### Configure the MCP Server Section

Use your token and replace the ```<control token>``` part with your token in the Control MCP Server section.

```json
"Control-mcp-server": {
    "url": "https://<hostname>/control-mcp",
    "type": "http",
    "headers": {
    "Authorization": "token <control token>"
    }
}
```

### Test MCP Server

#### Get the necessary Offline User Token

--8<--
learn/test/index.md:PATTest
--8<--

#### Configure the MCP Server Section

Use your token and replace the ```<test token>``` part with your token in the Test MCP Server section.

```json
"Test-mcp-server": {
    "url": "https://<hostname>/test/mcp/stream",
    "type": "http",
    "headers": {
    "Authorization2": "Offline <test token>"
    }
}
```

### Deploy MCP Server

Deploy MCP Server requires a slightly different approach.

#### Get the necessary Token

--8<--
learn/deploy/settings/index.md:PATDeploy
--8<--

#### Encrypt Token

You need to use base64 to encode the token with the Authentication Type string.

- Encrypt on MacOS or Linux

```bash
echo -n "PasswordIsAuthToken:<Your Deploy Token>" | base64
```

- Encrypt on Windows

```powershell
$encoded  = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes("PasswordIsAuthToken: <Your Deploy Token>"))
write-output $encoded
```

#### Configure the MCP Server Section

Use the output and replace the ```<base64 encoded deploy token>``` part with it in the Deploy MCP Server section.

```json
"Deploy-mcp-server": {
    "url": "https://<hostname>/deploy/mcp",
    "type": "http",
    "headers": {
    "Authorization": "Basic <base64 encoded deploy token>"
    }
}
```

### Measure/Release (Velocity) MCP Server

Measure and Release use the services of DevOps Velocity.

#### Get the necessary User Access Key

--8<--
learn/measure/index.md:PATMeasure
--8<--

#### Configure the MCP Server Section

Use your User Access Key and replace the ```<velocity token>``` part with your token in the Velocity MCP Server section.

```json
"Velocity-mcp-server": {
  "url": "https://<hostname>/velocity/mcp",
  "type": "http",
  "headers": {
    "Authorization": "UserAccessKey <velocity token>"
  }
```

### Plan MCP Server

In the actual Version of Loop the remote MCP Server for Plan is not available, it is planned to be delivered in the next release. We need to use the local MCP Server which requires the Personal Access token and a Teamspace ID (which is named Database ID in Plan)

#### Get the necessary Personal Access Token

--8<--
learn/plan/setup/index.md:PATPlan
--8<--

#### Get the necessagery Teamspace (DB) ID

--8<--
learn/plan/setup/index.md:PlanGetDBID
--8<--

#### Configure the MCP Server Section

Use your Personal Access token and replace the ```<plan token>``` part with your token in the Plan MCP Server section, replace the ```<teamspace id>```with the value of the DB ID.

```json
"plan": {
  "command": "npx",
  "args": [
    "-y",
    "@securedevops/mcp-devops-plan"
  ],
  "env": {
    "PLAN_ACCESS_TOKEN": "<plan token>",
    "PLAN_SERVER_URL": "https://<hostname>/plan",
    "PLAN_TEAMSPACE_ID": "<teamspace id>"
  },
  "type": "stdio"
}
```

## VSCode mcp.json template

Here the mcp.json template file using available remote MCP server and the local one for DevOps Plan (will be changed as soon as the remote one is available)

```json
{
  "servers": {
    "Loop-mcp-server": {
      "url": "https://<hostname>/loop/mcp",
      "type": "http"
    },
    "Control-mcp-server": {
      "url": "https://<hostname>/control-mcp",
      "type": "http",
      "headers": {
        "Authorization": "token <control token>"
      }
    },
    "Test-mcp-server": {
      "url": "https://<hostname>/test/mcp/stream",
      "type": "http",
      "headers": {
        "Authorization2": "Offline <test token>"
      }
    },
    "Deploy-mcp-server": {
      "url": "https://<hostname>/deploy/mcp",
      "type": "http",
      "headers": {
        "Authorization": "Basic <base64 encoded deploy token>"
      }
    },
    "Velocity-mcp-server": {
      "url": "https://<hostname>/velocity/mcp",
      "type": "http",
      "headers": {
        "Authorization": "UserAccessKey <velocity token>"
      }
    },
    "plan": {
      "command": "npx",
      "args": [
        "-y",
        "@securedevops/mcp-devops-plan"
      ],
      "env": {
        "PLAN_ACCESS_TOKEN": "<plan token>",
        "PLAN_SERVER_URL": "https://<hostname>/plan",
        "PLAN_TEAMSPACE_ID": "<teamspace id>"
      },
      "type": "stdio"
    }
  },
  "inputs": []
}
```

---

[VSCodeMCPServer]: https://code.visualstudio.com/docs/copilot/customization/mcp-servers
[VSMarketplaceMCP]: https://marketplace.visualstudio.com/search?term=%40mcp&target=VSCode&category=Other&sortBy=Relevance

[ButtonClose]: ../media/Button_Close.png

[ControlUserProfile]: ../learn/control/media/Control_UserProfile.png
[ControlCreateAccesstoken]: ../learn/control/media/Control_Create_AccessToken.png
[ControlAccessToken]: ../learn/control/media/Control_Accesstoken.png
[ControlNewPATName]: ../learn/control/media/Control_NewPAT_Name.png
[ControlPATSetPermissions]: ../learn/control/media/Control_NewPAT_setpermissions_minimal.png
[ControlOpenPermissions]: ../learn/control/media/Control_NewPat_SelectAccessTypePermissions.png
[ControlGeneratePATButton]: ../learn/control/media/Control_NewPAT_Generate_Button.png

[TestToprightMenue]: ../learn/test/media/Test_Profile_Notification_Settings_Help_Links.png
[TestProfileMenue]: ../learn/test/media/Test_Profile_Menue.png
[TestNewPAT]: ../learn/test/media/Test_Create_PAT_Dialog.png

[DeploySystemSettings]: ../learn/deploy/settings/media/Deploy_Settings.png
[DeploySystemSection]: ../learn/deploy/settings/media/Deploy_Settings_SystemSection.png
[DeployPATList]: ../learn/deploy/settings/media/Deploy_PAT_List.png
[DeployCreatePATButton]: ../learn/deploy/settings/media/Deploy_Create_Token_Button.png
[DeployCreatePATDialog]: ../learn/deploy/settings/media/Deploy_Create_Token_Dialog.png
[DeployNewPATInfo]: ../learn/deploy/settings/media/Deploy_NewPAT_Message.png
[ButtonClose]: ../learn/deploy/settings/media/Deploy_Close_Button.png
[DeployPATListUpdated]: ../learn/deploy/settings/media/Deploy_PAT_List_updated.png
[DeployPATLink]: ../learn/deploy/settings/media/Deploy_Tokens_Link.png

[MeasureToprightMenue]: ../learn/measure/media/Measure_Profile_Settings_Help_Bar.png
[ButtonSettings]: ../media/Button_Settings.png
[MeasureMyProfileLink]: ../learn/measure/media/Measure_MyProfile_Link.png
[MeasureSettingsMenue]: ../learn/measure/media/Measure_Settings_Menue.png
[MeasurePATList]: ../learn/measure/media/Measure_PAT_List.png
[MeasureNewPATButton]: ../learn/measure/media/Measure_Create_User_Access_Key_Button.png
[MeasureNewPATDialog]: ../learn/measure/media/Measure_Create_PAT_Dialog.png
[MeasureNewPATMessage]: ../learn/measure/media/Measure_Create_PAT_Result_Message.png
[MeasurePATListUpdated]: ../learn/measure/media/Measure_PAT_newly_Created.png

[PlanSidebarProfile]: ../learn/plan/setup/media/Plan_Profile_Menue.png
[PlanListPATS]: ../learn/plan/setup/media/Plan_PAT_List.png
[PlanCreatePATButton]: ../learn/plan/setup/media/Plan_Create_PAT_Button.png
[PlanPATDialog]: ../learn/plan/setup/media/Plan_Create_Pat_Dialog.png
[PlanPATCreated]: ../learn/plan/setup/media/Plan_PAT_created.png
[PlanPATCopied]: ../learn/plan/setup/media/Plan_PAT_copied.png
[PlanListnewPATS]: ../learn/plan/setup/media/Plan_PAT_list_updated.png
[PlanHomePageButton]: ../learn/plan/media/Plan_Home_button.png
[PlanMyApplicationButton]: ../learn/plan/media/Plan_MyApplications_Button.png
[PlanTMButton]: ../learn/plan/setup/media/Plan_TenantManagement_Link.png
[PlanTMView]: ../learn/plan/setup/media/Plan_Tenant_Management_View.png
[PlanTMDetailSwitch]: ../learn/plan/setup/media/Plan_Tenant_Management_Details_Switch.png
[PlanTMDetails]: ../learn/plan/setup/media/Plan_Tenant_Management_Details.png
[PlanDBID]: ../learn/plan/setup/media/Plan_Database_ID.png
[ButtonCopy]: ../learn/plan/setup/media/Plan_Copy_Button.png