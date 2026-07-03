# Setting up MCP Server

MCP Server settings may vary between tools, please check documentation of the tool you want to use.

## VSCode and MCP Server

Please have a look how to use MCP Server with VSCode in this [documentation][VSCodeMCPServer]. More MCP Server for VSCode can be found in the [Marketplace][VSMarketplaceMCP]

## Adding MCP Server

### Using the Add MCP Server command

| Step | Details                                                                                           | Additional Information                                      |
|:----:|:--------------------------------------------------------------------------------------------------|:------------------------------------------------------------|
|      | Click on the **View** Menu and select **Command Palette**                                         | ![VSCode View Command Palette][VSCviewCP]                   |
|      | In the **Command View** search for **Add MCP Server** and click on it                             | ![VSCode Command Palette add MCP Server][VSCCPAddMCPServer] |
|      | From the listbox select **HTTP**                                                                  | ![Step 1][VSCAddMCPStep1]                                   |
|      | Enter the MCP Server URL (example for Control MCP server)                                         | ![Step 2][VSCAddMCPStep2]                                   |
|      | Enter the Name for this MCP Server section                                                        | ![Step 3][VSCAddMCPStep3]                                   |
|      | Decide where to store this configuration, for the demo use local **Workspace**                    | ![Step 4][VSCAddMCPStep4]                                   |
|      | Added MCP Servers will be shown in the **Extension View** under **MCP Server**                    | ![Updated MCP server list][VSCMCPList]                      |
|      | You can open the mcp.json to add more manualy (for example the Authorization key for Control MCP) | ![Updated mcp.json][VSCMCPjson]                             |

### Manualy editing the mcp.json file

To be able to manualy edit the mcp.json file you have to first let it be created by VSCode, easiest way is to use [Add MCP Server command](#using-the-add-mcp-server-command) to add an entry then open it from the MCP server settings for editing.

## Preparing the mcp.json file

> NOTE: Templates for `mcp.json`files with preprovided sections: [for local mcp server](templates/template_local_mcp.json) and [for remote mcp server](templates/template_mcp.json)

Add the MCP Servers into the mcp.json file in the "servers" section.

```json
{
  "servers": {
  },
  "inputs": []
}
```

### Loop MCP Server

The Loop MCP server uses single sign on for authentication so the setup is very simple. Please have a look at the [documentation for Loop MCP server usage](https://www.ibm.com/docs/en/devops-loop/2.0.2?topic=administration-devops-loop-mcp-server). There is no local MCP Server available.

#### Configure the MCP Server Section

```json
"Loop-MCP-Server": {
  "url": "https://<hostname>/loop/mcp",
  "type": "http"
}
```

### Control MCP Server

#### Configure Control MCP Server to use SSO

```json
"Control-MCP-Server": {
    "url": "https://<hostname>/control/mcp",
    "type": "http"
}
```

#### Configure the MCP Server with Access Token

##### Get the necessary Access Token

--8<--
learn/control/index.md:PATControl
--8<--

##### Use Access Token in MCP server settings

Use your token and replace the ```<control token>``` part with your token in the Control MCP Server section.

```json
"Control-MCP-Server": {
    "url": "https://<hostname>/control/mcp",
    "type": "http",
    "headers": {
    "Authorization": "token <control token>"
    }
}
```

### Test MCP Server

Please have a look at the [Testhub Documentation how to configure the MCP server](https://www.ibm.com/docs/en/devops-test-hub/11.0.7?topic=guide-configuring-mcp-server-endpoint-in-vs-code) for more details.

#### Get the necessary Offline User Token

--8<--
learn/test/index.md:PATTest
--8<--

#### Configure the Test MCP Server

Use your token and replace the ```<test token>``` part with your token in the Test MCP Server section.

```json
"Test-MCP-Server": {
    "url": "https://<hostname>/test/mcp/stream",
    "type": "http",
    "headers": {
    "Authorization": "Offline <test token>"
    }
}
```

### Deploy MCP Server

Deploy MCP Server requires a slightly different approach. Please have a look at the [documentation for Deploy MCP server usage](https://www.ibm.com/docs/en/devops-deploy/8.2.0?topic=function-devops-deploy-mcp-server) for more details.

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

#### Configure the Deploy MCP Server

Use the output and replace the ```<base64 encoded deploy token>``` part with it in the Deploy MCP Server section.

```json
"Deploy-MCP-Server": {
    "url": "https://<hostname>/deploy/mcp",
    "type": "http",
    "headers": {
    "Authorization": "Basic <base64 encoded deploy token>"
    }
}
```

### Measure/Release (Velocity) MCP Server

Measure and Release use the services of DevOps Velocity. Please have a look at the [DevOps Velocity documentation MCP section](https://www.ibm.com/docs/en/devops-velocity/5.2.x?topic=administering-devops-velocity-mcp-server) for more details.

#### Get the necessary User Access Key

--8<--
learn/measure/index.md:PATMeasure
--8<--

#### Configure the Velocity (Measure/Release) MCP Server

Use your User Access Key and replace the ```<velocity token>``` part with your token in the Velocity MCP Server section.

```json
"Velocity-MCP-Server": {
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

#### Configure the Plan MCP Server

Use your Personal Access token and replace the ```<plan token>``` part with your token in the Plan MCP Server section, replace the ```<teamspace id>```with the value of the DB ID.

```json
"plan-mcp-server": {
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
    "Loop-MCP-Server": {
      "url": "https://<hostname>/loop/mcp",
      "type": "http"
    },
    "Control-MCP-Server": {
      "url": "https://<hostname>/control-mcp",
      "type": "http",
      "headers": {
        "Authorization": "token <control token>"
      }
    },
    "Test-MCP-Server": {
      "url": "https://<hostname>/test/mcp/stream",
      "type": "http",
      "headers": {
        "Authorization": "Offline <test token>"
      }
    },
    "Deploy-MCP-Server": {
      "url": "https://<hostname>/deploy/mcp",
      "type": "http",
      "headers": {
        "Authorization": "Basic <base64 encoded deploy token>"
      }
    },
    "Velocity-MCP-Server": {
      "url": "https://<hostname>/velocity/mcp",
      "type": "http",
      "headers": {
        "Authorization": "UserAccessKey <velocity token>"
      }
    },
    "plan-mcp-server": {
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
    },
    "wait_server": {
      "command": "npx",
      "args": [
        "mcp-wait-server@latest"
      ],
      "env": {
        "MCP_WAIT_MAX_DURATION_SECONDS": "210",
        "MCP_WAIT_TOOL_DESCRIPTION": "Waits for a specified number of seconds. Use this to create a delay after starting a long-running operation (like a script or download via another tool), allowing it time to complete before you proceed or check its status."
      }
    }
  },
  "inputs": []
}
```

---

[VSCodeMCPServer]: https://code.visualstudio.com/docs/copilot/customization/mcp-servers
[VSMarketplaceMCP]: https://marketplace.visualstudio.com/search?term=%40mcp&target=VSCode&category=Other&sortBy=Relevance

[VSCviewCP]: media/demo-demo-vs-code-command-palette.png
[VSCCPAddMCPServer]: media/demo-demo-vs-code-command-add-mcp-server.png
[VSCAddMCPStep1]: media/demo-demo-vs-code-add-mcp-server-step-01.png
[VSCAddMCPStep2]: media/demo-demo-vs-code-add-mcp-server-step-02.png
[VSCAddMCPStep3]: media/demo-demo-vs-code-add-mcp-server-step-03.png
[VSCAddMCPStep4]: media/demo-demo-vs-code-add-mcp-server-step-04.png
[VSCMCPList]: media/demo-demo-mcp-server-list-view.png
[VSCMCPjson]: media/demo-demo-mcp-json-view.png
