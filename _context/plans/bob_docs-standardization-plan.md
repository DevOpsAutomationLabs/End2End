# Plan: Standardize Docs — Table Conversion + Snippet Wrappers

## Overview

Apply two structural improvements to all instructional markdown files under `docs/`:

1. **Table Conversion** — Convert prose/image-bullet-list sections into the standard  
   3-column table format (`Step | Details | Additional Information`).
2. **Snippet Wrappers** — Wrap every `##` and `###` (and deeper) section body in  
   `--8<-- [start:Name]` / `--8<-- [end:Name]` markers so content can be transcluded  
   from any other page.

Files that are configuration-only (`tags.md`, `abbreviations.md`), pure reference  
(`modernization-plan.md`), or have minimal/WIP content are noted below as lower priority.

---

## Conventions

### Snippet Naming

- CamelCase abbreviation of the section heading.
- Must be unique within the file.
- Examples: `## Introduction` → `Intro`, `### Request a Process` → `RequestProcess`.

### Table Format

```markdown
| Step | Details     | Additional Information |
|:----:|:------------|:-----------------------|
|  1   | Action text | ![Alt][RefName]        |
```

### Rules

- Every row gets a sequential step number.
- One image per row; multi-image sections get multiple rows.
- Text + inline image → one row: text in **Details**, image in **Additional Information**.
- All inline `media/...` paths must be converted to reference-style links appended at  
  the bottom of the file.
- Sections whose entire body is an `--8<-- include` directive are **skipped** (already  
  delegates to a sub-page snippet).
- Sections inside `<!-- ... -->` comment blocks are **skipped**.
- `# Title` (H1) headings are **never** wrapped — only `##` and deeper.

### Snippet Wrapper Pattern

```markdown
## Section Title

--8<-- [start:SectionName]

... section content ...

--8<-- [end:SectionName]
```

---

## Files In Scope

Files are grouped by priority. Each sub-task maps to one file.

### Priority 1 — Files with Prose+Image Bullet Lists (conversion + wrapping needed)

| File                                 | Sections to Convert                                                                                                                  | Snippet Wrappers Needed                          |
|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| `docs/learn/deploy/index.md`         | `### Request a Process`, `### View of Running Process`, `### Result of Run`, `### Create a Snapshot`, `### Use the Deployment Genie` | All unwrapped `##`/`###` sections                |
| `docs/learn/plan/index.md`           | `### Control/GIT/SCM` (single image bullet)                                                                                          | All unwrapped `##`/`###` sections                |
| `docs/learn/plan/boards/index.md`    | `### Filter Projects`, `### Show Releases`, `### Show Sprints`, `### Show Sprint Backlog`                                            | All unwrapped `##`/`###` sections                |
| `docs/learn/plan/workitems/index.md` | `### From Board` (mixed link+image bullets), `## Show Workitem Details`                                                              | All `##`/`###` sections (none currently wrapped) |

### Priority 2 — Files with no conversion needed, only snippet wrappers

| File                                         | Notes                                                                                                                                                                                                                                          |
|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `docs/learn/deploy/applications/index.md`    | Already well-wrapped; only unwrapped sections `## Switch to Applications View`, `## Create or Import Application`, `## View Application`, `### Show Components`, `### Show Processes` need outer wrappers — sub-sections already have wrappers |
| `docs/learn/deploy/components/index.md`      | `## Switch to Components View`, `## View Component Processes`, `## Importing Components` unwrapped                                                                                                                                             |
| `docs/learn/deploy/processes/index.md`       | Most sections unwrapped                                                                                                                                                                                                                        |
| `docs/learn/deploy/resources/index.md`       | All sections unwrapped                                                                                                                                                                                                                         |
| `docs/learn/deploy/settings/index.md`        | `## Automation Section`, `### Plugins`, `### How to upgrade a plugin`, `## Security Section`, `## System Section` unwrapped                                                                                                                    |
| `docs/learn/introduction/index.md`           | `## Start Here`, `## How to use Loop Genie`, `## Setup a Teamspace and Loop` unwrapped (sub-sections already wrapped)                                                                                                                          |
| `docs/learn/introduction/about/index.md`     | `## About Box and Logging out`, `## Sidebar`, `### Plug-Ins`, `### Settings`, `#### User Administration`, `#### Integrations` unwrapped                                                                                                        |
| `docs/learn/introduction/loops/index.md`     | `## Overview`, `## Create new Loop`, `### Step by Step instructions` (already wrapped inside)                                                                                                                                                  |
| `docs/learn/introduction/teamspace/index.md` | `## Overview`, `## Create new Teamspace` (already wrapped inside)                                                                                                                                                                              |
| `docs/learn/introduction/genie/index.md`     | `## Overview`, `## How to use Loop Genie` (already wrapped inside)                                                                                                                                                                             |
| `docs/learn/plan/newapp/index.md`            | All sections unwrapped                                                                                                                                                                                                                         |
| `docs/learn/plan/newproject/index.md`        | All sections unwrapped                                                                                                                                                                                                                         |
| `docs/learn/plan/queries/index.md`           | All sections unwrapped                                                                                                                                                                                                                         |
| `docs/learn/plan/setup/index.md`             | `## Create new Application`, `## Importing Sample Data`, `### Import Data`, `## Configuring` unwrapped                                                                                                                                         |
| `docs/learn/plan/ai_assistant/index.md`      | `## Overview`, `## AI Assistant integration setup`, `## Using the Plan AI Assistant` unwrapped                                                                                                                                                 |
| `docs/learn/code/index.md`                   | `## Introduction`, `## Close and terminate Environment` unwrapped                                                                                                                                                                              |
| `docs/learn/control/index.md`                | `## Introduction`, `## Explore Control`, `### Show Activity Report`, `### Show Git Commit Details` unwrapped                                                                                                                                   |
| `docs/learn/build/index.md`                  | `## Introduction`, `## Overview`, `## Templates`, `## Access Token` unwrapped                                                                                                                                                                  |
| `docs/learn/test/index.md`                   | `## Introduction`, `## Overview`, `### Switch teamspace and Project if needed`, `## TestScripts and Testruns`, `## Testdata`, `## Conclusion` unwrapped                                                                                        |
| `docs/learn/measure/index.md`                | Most `###`/`####` sections unwrapped                                                                                                                                                                                                           |
| `docs/learn/release/index.md`                | All sections unwrapped                                                                                                                                                                                                                         |
| `docs/learn/secure/index.md`                 | All sections unwrapped                                                                                                                                                                                                                         |
| `docs/ai_setup.md`                           | `## AI Integration for Loop Genie`, `## DevOps Plan AI integration setup`, `## Deploy AI Settings` outer wrappers missing                                                                                                                      |
| `docs/demo/mcp_setup.md`                     | Many `##`/`###`/`####` sections unwrapped                                                                                                                                                                                                      |

### Out of Scope (no structural changes)

| File                             | Reason                                                |
|----------------------------------|-------------------------------------------------------|
| `docs/index.md`                  | Root landing page; narrative prose only               |
| `docs/tags.md`                   | Tags index only                                       |
| `docs/includes/abbreviations.md` | Abbreviation definitions only                         |
| `docs/modernization-plan.md`     | Internal planning document, not instructional content |
| `docs/setup.md`                  | Setup/configuration reference, not step-by-step lab   |
| `docs/demo/demo_ai_first.md`     | WIP stub                                              |
| `docs/demo/demo_classic.md`      | Demo script, not lab content                          |
| `docs/demo/index.md`             | Index only                                            |
| `docs/learn/index.md`            | Index only                                            |

---

## Sub-Tasks

Each sub-task covers one file. Process in order within each priority group.

---

### Sub-Task 1 — `docs/learn/deploy/index.md` (Priority 1)

**Intent:** The primary file driving this plan. Convert 5 prose/bullet sections to tables and add snippet wrappers to all unwrapped sections.

**Expected Outcomes:**

- Sections `### Request a Process`, `### View of Running Process`, `### Result of Run`, `### Create a Snapshot`, `### Use the Deployment Genie` each become standard tables.
- 5 new image reference-style links added to the bottom reference list (for `### Create a Snapshot` inline paths).
- All `##`/`###` sections wrapped in snippets (see name map below).
- Commented-out block and include-delegate sections left unchanged.

**Snippet Name Map:**

| Section                                      | Snippet Name         | Action                                 |
|----------------------------------------------|----------------------|----------------------------------------|
| `## Introduction`                            | `Intro`              | Add wrapper                            |
| `## Overview`                                | `Overview`           | Add wrapper                            |
| `### How to switch to Deploy from Home Page` | `SWITCH2Deploy`      | **Already exists**                     |
| `### Deploy Landing Page`                    | `DeployLandingPage`  | Add wrapper                            |
| `## Applications`                            | `Applications`       | Add wrapper                            |
| `### Switch to Applications View`            | `SwitchToAppsView`   | Add wrapper                            |
| `### Create New Application`                 | —                    | **Skip** (include directive)           |
| `## Components`                              | `Components`         | Add wrapper                            |
| `### Create New Component`                   | —                    | **Skip** (include directive)           |
| `## Processes`                               | `Processes`          | Add wrapper                            |
| `## Environments`                            | `Environments`       | Add wrapper                            |
| `## Run a deployment`                        | `RunDeployment`      | Add wrapper (after sub-tasks complete) |
| `### Request a Process`                      | `RequestProcess`     | Convert + wrapper                      |
| `### View of Running Process`                | `ViewRunningProcess` | Convert + wrapper                      |
| `### Result of Run`                          | `ResultOfRun`        | Convert + wrapper                      |
| `### Create a Snapshot`                      | `CreateSnapshot`     | Convert + wrapper + new refs           |
| `### Use the Deployment Genie`               | `UseDeployGenie`     | Convert + wrapper                      |
| `## Settings`                                | `Settings`           | Add wrapper                            |
| `## Conclusion`                              | `Conclusion`         | Add wrapper                            |

**Conversion Detail — `### Request a Process`:**

| Step | Details                                     | Additional Information                             |
|:----:|:--------------------------------------------|:---------------------------------------------------|
|  1   | Click on **Request Process** Button         | `[DeployAppRequestProcessButton]`                  |
|  2   | On the DEV Environment                      | `[DeployAppDevEnv]`                                |
|  3   | Select Deployment Process                   | `[DeployAppProcessRequestSelectProcess]`           |
|  4   | Select Version or Snapshot                  | `[DeployAppProcessRequestSelectSnapsotOrVersions]` |
|  5   | Uncheck Deploy Only Changed                 | `[DeployAppProcessRequestOnlyChanged]`             |
|  6   | Click **Choose Versions** Button            | `[DeployAppPocessRequestChooseCompVersionButton]`  |
|  7   | Select Component Version (first component)  | `[DeployAppPocessRequestSelectCompVersion1]`       |
|  8   | Select Component Version (second component) | `[DeployAppPocessRequestSelectCompVersion2]`       |
|  9   | Press **Submit** to start the deployment    | `[DeployAppPocessRequestSubmitButton]`             |

**Conversion Detail — `### View of Running Process`:**

| Step | Details                                      | Additional Information                    |
|:----:|:---------------------------------------------|:------------------------------------------|
|  1   | The details of the running process are shown | `[DeployProcessRunning]`                  |
|  2   | Click on **Expand All** to see step details  | `[DeployProcessRunningExpandAllButton]`   |
|  3   | Click on **3 dots menu** of a step           | `[DeployProcessRunning3DotsofStep]`       |
|  4   | View the output of the step                  | `[DeployProcessRunningStepOutputDetails]` |

**Conversion Detail — `### Result of Run`:**

| Step | Details                                              | Additional Information               |
|:----:|:-----------------------------------------------------|:-------------------------------------|
|  1   | The deployment ran successfully                      | `[DeployAppProcessRunSuccess]`       |
|  2   | Environment updated with deployed component versions | `[DeployAppEnvwithDeployedVersions]` |

**Conversion Detail — `### Create a Snapshot` (new refs needed):**

New reference-style links to add at bottom:

- `[CreateSnapshotIcon]` → `media/DEPLOY_Application_Environment_CreateSnapshot.png`
- `[CreateSnapshotDialog]` → `media/DEPLOY_Application_Environment_CreateSnapshot_Dialog.png`
- `[CreateSnapshotDetail1]` → `media/DEPLOY_Application_Environment_CreateSnapshot_Detail1.png`
- `[CreateSnapshotDetail2]` → `media/DEPLOY_Application_Environment_CreateSnapshot_Detail2.png`
- `[SnapshotApplied]` → `media/DEPLOY_Application_Environment_SnapshotApplied.png`

| Step | Details                                                     | Additional Information    |
|:----:|:------------------------------------------------------------|:--------------------------|
|  1   | Select the **Create Snapshot** Icon                         | `[CreateSnapshotIcon]`    |
|  2   | The Create Snapshot dialog opens                            | `[CreateSnapshotDialog]`  |
|  3   | Review snapshot details (step 1)                            | `[CreateSnapshotDetail1]` |
|  4   | Review snapshot details (step 2)                            | `[CreateSnapshotDetail2]` |
|  5   | Environment configuration updated — Snapshot is now applied | `[SnapshotApplied]`       |

**Conversion Detail — `### Use the Deployment Genie`:**

| Step | Details                                                                      | Additional Information                                 |
|:----:|:-----------------------------------------------------------------------------|:-------------------------------------------------------|
|  1   | [Request a new deployment process][REFRequestAProcess] to simulate a failure |                                                        |
|  2   | Select Deployment Process **Failing Deployment**                             | `[RunSelectFailingDeployment]`                         |
|  3   | Select Versions: **Echo** → v1.0, **Logic** → v2.0.0                         | `[RunFailSelectCompVersions]`                          |
|  4   | The result will be a failed deployment                                       | `[RunFailed]`                                          |
|  5   | Click **3 dots** menu of the failing step to show menu                       | `[DeployPlugin3DotsMenue]` `[Step3DotsMenueWithGenie]` |
|  6   | Click **Deployment Genie** — results shown after analysis                    | `[GenieAnalysis]`                                      |

**Todo List:**

1. Add snippet wrappers to all sections listed in the name map above (non-conversion sections first).
2. Convert `### Request a Process` using the table above; wrap in `RequestProcess`.
3. Convert `### View of Running Process`; wrap in `ViewRunningProcess`.
4. Convert `### Result of Run`; wrap in `ResultOfRun`.
5. Convert `### Create a Snapshot` (preserve `!!! info` admonition above the table); add 5 new refs to bottom; wrap in `CreateSnapshot`.
6. Convert `### Use the Deployment Genie`; wrap in `UseDeployGenie`.
7. Add `RunDeployment` wrapper around `## Run a deployment` section (after steps 2–6).

**Status:** [x] done

---

### Sub-Task 2 — `docs/learn/plan/index.md` (Priority 1)

**Intent:** Convert the single image-bullet in `### Control/GIT/SCM` to a table row, and add snippet wrappers to all unwrapped sections.

**Expected Outcomes:**

- `### Control/GIT/SCM` section body converted to a table.
- All `##`/`###` sections wrapped in snippets.

**Snippet Name Map:**

| Section                                            | Snippet Name           | Action             |
|----------------------------------------------------|------------------------|--------------------|
| `## Introduction`                                  | `Intro`                | Add wrapper        |
| `### How to switch to Plan from Home Page`         | `SWITCH2Plan`          | **Already exists** |
| `## Demo Data or New Application with Sample Data` | `PlanNewAppWithSample` | **Already exists** |
| `## Let's go with Plan`                            | `LetsGoPlan`           | **Already exists** |
| `### Use Home Button to switch to Plan Home Page`  | `PlanSwitch2Homepage`  | **Already exists** |
| `### Explore the technical workflow`               | `ExploreTechFlow`      | **Already exists** |
| `## AI Assistant`                                  | `AIAssistant`          | Add wrapper        |
| `## Work with Boards`                              | `WorkWithBoards`       | Add wrapper        |
| `## Create and customize a new Project`            | `CreateNewProject`     | Add wrapper        |
| `## Work with Queries`                             | `WorkWithQueries`      | Add wrapper        |
| `## Integrations`                                  | `Integrations`         | Add wrapper        |
| `### Control/GIT/SCM`                              | `ControlGitSCM`        | Convert + wrapper  |

**Todo List:**

1. Add snippet wrappers to all sections in the name map that need it.
2. Convert `### Control/GIT/SCM` bullet image to a table row; wrap in `ControlGitSCM`.

**Status:** [x] done

---

### Sub-Task 3 — `docs/learn/plan/boards/index.md` (Priority 1)

**Intent:** Convert four sections with bare image-bullet lists to tables. Add snippet wrappers to all unwrapped sections.

**Expected Outcomes:**

- `### Filter Projects`, `### Show Releases`, `### Show Sprints`, `### Show Sprint Backlog` each converted to tables.
- All `##`/`###` sections wrapped.

**Snippet Name Map:**

| Section                   | Snippet Name        | Action             |
|---------------------------|---------------------|--------------------|
| `## Work with Boards`     | `WorkWithBoards`    | Add wrapper        |
| `### Project Board`       | `ProjectBoard`      | **Already exists** |
| `### Work Items`          | `WorkItems`         | **Already exists** |
| `#### Workitem`           | `Workitem`          | Add wrapper        |
| `### Filter Projects`     | `FilterProjects`    | Convert + wrapper  |
| `### Filter Epics`        | `FilterEpics`       | **Already exists** |
| `### Show Releases`       | `ShowReleases`      | Convert + wrapper  |
| `### Show Sprints`        | `ShowSprints`       | Convert + wrapper  |
| `### Show Sprint Backlog` | `ShowSprintBacklog` | Convert + wrapper  |
| `## Conclusion`           | `Conclusion`        | Add wrapper        |

**Todo List:**

1. Add snippet wrappers to sections listed above.
2. Convert `### Filter Projects`, `### Show Releases`, `### Show Sprints`, `### Show Sprint Backlog` to tables; wrap each.

**Status:** [x] done

---

### Sub-Task 4 — `docs/learn/plan/workitems/index.md` (Priority 1)

**Intent:** Convert mixed link+image bullet sections to table form. Add wrappers to all sections (currently none exist).

**Expected Outcomes:**

- `### From Board`, `### From Query`, and any other prose+image sections converted.
- All `##`/`###` sections wrapped.

**Snippet Name Map:**

| Section                                  | Snippet Name            | Action            |
|------------------------------------------|-------------------------|-------------------|
| `## What are Work Items`                 | `WhatAreWorkItems`      | Add wrapper       |
| `## Several Ways to find your Work Item` | `FindWorkItem`          | Add wrapper       |
| `### From Board`                         | `FindFromBoard`         | Convert + wrapper |
| `### From Query`                         | `FindFromQuery`         | Convert + wrapper |
| `## Show Workitem Details`               | `ShowWorkitemDetails`   | Add wrapper       |
| `### Show Commit`                        | `ShowCommit`            | Add wrapper       |
| `## Use AI in WorkItem`                  | `UseAIinWorkItem`       | Add wrapper       |
| `### Create Exploratory Test using AI`   | `CreateExploratoryTest` | Add wrapper       |

**Todo List:**

1. Convert `### From Board` and `### From Query` bullet content to table rows.
2. Add all snippet wrappers.

**Status:** [x] done

---

### Sub-Task 5 — `docs/learn/deploy/applications/index.md` (Priority 2)

**Intent:** Add outer snippet wrappers to the top-level sections that are currently unwrapped (their sub-sections already have wrappers).

**Sections to wrap:**

| Section                           | Snippet Name        |
|-----------------------------------|---------------------|
| `## Switch to Applications View`  | `SwitchToAppsView`  |
| `## Create or Import Application` | `CreateOrImportApp` |
| `## View Application`             | `ViewApplication`   |

**Todo List:**

1. Add wrapper for `## Switch to Applications View` (its body has prose + no existing wrapper at this level).
2. Add wrapper for `## Create or Import Application` (wraps sub-sections `CreateNewApplication`, `AddNewEnvironment`, `AddResources2Env`, `ImportApplication`).
3. Add wrapper for `## View Application` (wraps sub-sections `ViewApplications`, `ShowComponents`, etc.).

**Status:** [x] done

---

### Sub-Task 6 — `docs/learn/deploy/components/index.md` (Priority 2)

**Intent:** Add snippet wrappers to all currently unwrapped sections.

**Snippet Name Map:**

| Section                               | Snippet Name         | Action                                                                      |
|---------------------------------------|----------------------|-----------------------------------------------------------------------------|
| `## Switch to Components View`        | `SwitchToCompView`   | Add wrapper                                                                 |
| `## View Component Processes`         | `ViewCompProcesses`  | Add wrapper                                                                 |
| `## Creating or Importing Components` | `CreateOrImportComp` | Add wrapper                                                                 |
| `### Creating Components`             | `CreateComponent`    | Wrap (sub-section of existing `CreateNewComponent` snippet — check overlap) |
| `## Importing Components`             | `ImportComponents`   | Add wrapper                                                                 |

**Todo List:**

1. Add wrappers for each section in the name map.
2. Verify the `CreateNewComponent` snippet boundary does not conflict.

**Status:** [x] done

---

### Sub-Task 7 — `docs/learn/deploy/processes/index.md` (Priority 2)

**Intent:** Add snippet wrappers to all unwrapped sections (currently only 2 of ~12 sections are wrapped).

**Snippet Name Map:**

| Section                                                    | Snippet Name             | Action             |
|------------------------------------------------------------|--------------------------|--------------------|
| `## Overview`                                              | `Overview`               | Add wrapper        |
| `### Types of Processes`                                   | `TypesOfProcesses`       | Add wrapper        |
| `#### Generic Processes`                                   | `GenericProcesses`       | Add wrapper        |
| `#### Application Processes`                               | `AppProcesses`           | Add wrapper        |
| `##### View Application Processes`                         | `ViewAppProcesses`       | **Already exists** |
| `#### Component Processes`                                 | `CompProcesses`          | Add wrapper        |
| `##### View Component Processes`                           | `ViewCompProcesses`      | **Already exists** |
| `### Process Designer`                                     | `ProcessDesigner`        | Add wrapper        |
| `#### Process Designer Sidebar`                            | `ProcessDesignerSidebar` | Add wrapper        |
| `#### Final Process Diagram`                               | `FinalProcessDiagram`    | Add wrapper        |
| `#### Adding Version Statuses`                             | `AddingVersionStatuses`  | Add wrapper        |
| `##### Final Process Diagrams (Passing and Failing tests)` | `FinalProcessDiagrams`   | Add wrapper        |

**Todo List:**

1. Add wrappers for all sections listed above in heading order.

**Status:** [x] done

---

### Sub-Task 8 — `docs/learn/deploy/resources/index.md` (Priority 2)

**Intent:** Add snippet wrappers to all sections (currently none).

**Snippet Name Map:**

| Section              | Snippet Name    |
|----------------------|-----------------|
| `## Go to Resources` | `GoToResources` |
| `## Agent Pools`     | `AgentPools`    |
| `## Resource Tree`   | `ResourceTree`  |

**Status:** [x] done

---

### Sub-Task 9 — `docs/learn/deploy/settings/index.md` (Priority 2)

**Intent:** Add snippet wrappers to all currently unwrapped sections (3 of 9 sections already wrapped).

**Snippet Name Map:**

| Section                        | Snippet Name        | Action                                                                   |
|--------------------------------|---------------------|--------------------------------------------------------------------------|
| `## Automation Section`        | `AutomationSection` | Add wrapper                                                              |
| `### Plugins`                  | `Plugins`           | Add wrapper                                                              |
| `#### How to install a plugin` | `InstallPlugin`     | Add wrapper                                                              |
| `### How to upgrade a plugin`  | `UpgradePlugin`     | Add wrapper                                                              |
| `## Security Section`          | `SecuritySection`   | Add wrapper                                                              |
| `### Tokens`                   | `Tokens`            | Wrapper exists as `PATDeploy` — add outer `Tokens` wrapper               |
| `## System Section`            | `SystemSection`     | Add wrapper                                                              |
| `### AI Settings`              | `AISettings`        | Wrapper exists as `DeployAIIntegration` — add outer `AISettings` wrapper |

**Status:** [x] done

---

### Sub-Task 10 — `docs/learn/introduction/index.md` (Priority 2)

**Intent:** Add outer wrappers to the 3 top-level `##` sections whose sub-sections are already wrapped.

**Snippet Name Map:**

| Section                         | Snippet Name        | Action                       |
|---------------------------------|---------------------|------------------------------|
| `## Start Here`                 | `StartHere`         | Add wrapper                  |
| `## How to use Loop Genie`      | `HowToUseLoopGenie` | Add wrapper (wraps include)  |
| `## Setup a Teamspace and Loop` | `SetupTsAndLoop`    | Add wrapper (wraps includes) |

**Status:** [x] done

---

### Sub-Task 11 — `docs/learn/introduction/about/index.md` (Priority 2)

**Intent:** Add wrappers to all unwrapped sections.

**Snippet Name Map:**

| Section                        | Snippet Name       | Action             |
|--------------------------------|--------------------|--------------------|
| `## Switch to Loop Home page`  | `SWITCH2Loop`      | **Already exists** |
| `## About Box and Logging out` | `AboutBoxLogout`   | Add wrapper        |
| `## Sidebar`                   | `Sidebar`          | Add wrapper        |
| `### Plug-Ins`                 | `Plugins`          | Add wrapper        |
| `### Settings`                 | `Settings`         | Add wrapper        |
| `#### User Administration`     | `UserAdmin`        | Add wrapper        |
| `#### Integrations`            | `TSAIIntegrations` | **Already exists** |

**Status:** [x] done

---

### Sub-Task 12 — Introduction sub-pages (Priority 2)

**Intent:** For `loops/index.md`, `teamspace/index.md`, `genie/index.md` — each has an unwrapped `## Overview` section and a `## Create...` section whose inner step block is already wrapped. Add outer wrappers.

**Files and snippets:**

`docs/learn/introduction/loops/index.md`:

| Section              | Snippet Name                                                                  |
|----------------------|-------------------------------------------------------------------------------|
| `## Overview`        | `Overview`                                                                    |
| `## Create new Loop` | `CreateNewLoop` — inner already wrapped; add outer wrapper named `CreateLoop` |

`docs/learn/introduction/teamspace/index.md`:

| Section                   | Snippet Name                                         |
|---------------------------|------------------------------------------------------|
| `## Overview`             | `Overview`                                           |
| `## Create new Teamspace` | `CreateTeamspace` — inner already wrapped; add outer |

`docs/learn/introduction/genie/index.md`:

| Section                    | Snippet Name                                                             |
|----------------------------|--------------------------------------------------------------------------|
| `## Overview`              | `Overview`                                                               |
| `## How to use Loop Genie` | outer wrapper `UseLoopGenie` (inner `HowToUseLoopGenie` already wrapped) |

**Status:** [x] done

---

### Sub-Task 13 — Plan sub-pages (Priority 2)

**Intent:** Add snippet wrappers to all unwrapped sections in `newapp`, `newproject`, `queries`, `setup`, and `ai_assistant` files.

**`docs/learn/plan/newapp/index.md`:**

| Section                       | Snippet Name         |
|-------------------------------|----------------------|
| `## Switch to Tenant View`    | `SwitchToTenantView` |
| `## Create a new Application` | `CreateNewApp`       |
| `### Add a new Application`   | `AddNewApp`          |

**`docs/learn/plan/newproject/index.md`:**

| Section                       | Snippet Name           |
|-------------------------------|------------------------|
| `## Overview`                 | `Overview`             |
| `## Steps`                    | `Steps`                |
| `### Create a new Project`    | `CreateNewProject`     |
| `### Add Releases to Project` | `AddReleasesToProject` |
| `### Add Sprints to Project`  | `AddSprintsToProject`  |
| `### Configure Project`       | `ConfigureProject`     |
| `### Add Components`          | `AddComponents`        |
| `## Conclusion`               | `Conclusion`           |

**`docs/learn/plan/queries/index.md`:**

| Section                           | Snippet Name            |
|-----------------------------------|-------------------------|
| `## Work with Queries`            | `WorkWithQueries`       |
| `### Public and Personal Queries` | `PublicPersonalQueries` |
| `#### create new personal query`  | `CreatePersonalQuery`   |
| `#### Public Queries`             | `PublicQueries`         |
| `## Conclusion`                   | `Conclusion`            |

**`docs/learn/plan/setup/index.md`:**

| Section                     | Snippet Name       | Action             |
|-----------------------------|--------------------|--------------------|
| `## Create new Application` | `CreateNewApp`     | Add wrapper        |
| `## Importing Sample Data`  | `ImportSampleData` | Add wrapper        |
| `### Import Data`           | `ImportData`       | Add wrapper        |
| `## Configuring`            | `Configuring`      | Add wrapper        |
| `### Personal Access Token` | `PATPlan`          | **Already exists** |
| `### Get the DB ID`         | `PlanGetDBID`      | **Already exists** |

**`docs/learn/plan/ai_assistant/index.md`:**

| Section                                          | Snippet Name                   | Action             |
|--------------------------------------------------|--------------------------------|--------------------|
| `## Overview`                                    | `Overview`                     | Add wrapper        |
| `## AI Assistant integration setup`              | `AIAssistantSetup`             | Add wrapper        |
| `### Create AI User Group`                       | `PLANNewGroup`                 | **Already exists** |
| `### Configure AI Integration`                   | `PLANAIIntegration`            | **Already exists** |
| `### Activate member access`                     | `PLANMemberAccess`             | **Already exists** |
| `## Using the Plan AI Assistant`                 | `UsingPlanAI`                  | Add wrapper        |
| `### AI Assistant Chat Dialog`                   | `PlanAIAssistantChat`          | **Already exists** |
| `### AI Assistant Type of Output`                | `PlanAIAssistantOutputType`    | **Already exists** |
| `### AI Assistant Create Records from Responses` | `PlanAIAssistantCreateRecords` | **Already exists** |

**Status:** [x] done

---

### Sub-Task 14 — `docs/learn/code/index.md` (Priority 2)

**Intent:** Add wrappers to unwrapped sections.

**Snippet Name Map:**

| Section                              | Snippet Name   | Action             |
|--------------------------------------|----------------|--------------------|
| `## Introduction`                    | `Intro`        | Add wrapper        |
| `## How to work with Code`           | `HowToUseCode` | Add wrapper        |
| `### Switch to Code`                 | `Switch2Code`  | **Already exists** |
| `### How to use Code`                | `UseCode`      | **Already exists** |
| `## Close and terminate Environment` | `CloseEnv`     | Add wrapper        |

**Status:** [x] done

---

### Sub-Task 15 — `docs/learn/control/index.md` (Priority 2)

**Intent:** Add wrappers to unwrapped sections.

**Snippet Name Map:**

| Section                                      | Snippet Name           | Action                                                |
|----------------------------------------------|------------------------|-------------------------------------------------------|
| `## Introduction`                            | `Intro`                | Add wrapper                                           |
| `## How to switch to Control from Home Page` | `SWITCH2Control`       | **Already exists**                                    |
| `## Managing Repositories and Organizations` | `ManageRepoOrgs`       | **Already exists**                                    |
| `## Create a new Repository`                 | `CreateNewRepo`        | Add wrapper (sub-snippets already exist)              |
| `### Create New Repository`                  | `NewRepo`              | **Already exists**                                    |
| `### Fork a repository`                      | `ForkRepo`             | **Already exists**                                    |
| `### Migrate a repository`                   | `MigrateRepo`          | **Already exists**                                    |
| `## Access Token`                            | `AccessToken`          | Add wrapper (sub-snippet `PATControl` already exists) |
| `## Explore Control`                         | `ExploreControl`       | Add wrapper                                           |
| `### Open Repo with Code`                    | `OpenRepoWithCode`     | **Already exists**                                    |
| `### Show Activity Report`                   | `ShowActivityReport`   | Add wrapper                                           |
| `### Show Git Commit Details`                | `ShowGitCommitDetails` | Add wrapper                                           |

**Status:** [x] done

---

### Sub-Task 16 — `docs/learn/build/index.md` (Priority 2)

**Intent:** Add wrappers to unwrapped top-level sections.

**Snippet Name Map:**

| Section                                    | Snippet Name   | Action                                      |
|--------------------------------------------|----------------|---------------------------------------------|
| `## Introduction`                          | `Intro`        | Add wrapper                                 |
| `## How to switch to Build from Home Page` | `SWITCH2Build` | **Already exists**                          |
| `## Overview`                              | `Overview`     | Add wrapper (sub-snippets exist)            |
| `## Templates`                             | `Templates`    | Add wrapper (sub-snippets exist)            |
| `## Access Token`                          | `AccessToken`  | Add wrapper (sub-snippet `PATBuild` exists) |

**Status:** [x] done

---

### Sub-Task 17 — `docs/learn/test/index.md` (Priority 2)

**Intent:** Add wrappers to unwrapped sections.

**Snippet Name Map:**

| Section                                      | Snippet Name         | Action                                     |
|----------------------------------------------|----------------------|--------------------------------------------|
| `## Introduction`                            | `Intro`              | Add wrapper                                |
| `## Overview`                                | `Overview`           | Add wrapper                                |
| `### How to switch to Test from Home Page`   | `SWITCH2Test`        | **Already exists**                         |
| `### 3rd Party`                              | `Test3rdParty`       | **Already exists**                         |
| `### Switch teamspace and Project if needed` | `SwitchTSandProject` | Add wrapper                                |
| `## TestScripts and Testruns`                | `TestScriptsAndRuns` | Add wrapper                                |
| `## Testdata`                                | `Testdata`           | Add wrapper                                |
| `## Settings`                                | `Settings`           | Add wrapper (sub-snippet `PATTest` exists) |
| `## Conclusion`                              | `Conclusion`         | Add wrapper                                |

**Status:** [x] done

---

### Sub-Task 18 — `docs/learn/measure/index.md` (Priority 2)

**Intent:** Add wrappers to unwrapped `###`/`####` sections.

**Snippet Name Map:**

| Section                                      | Snippet Name      | Action                                        |
|----------------------------------------------|-------------------|-----------------------------------------------|
| `## Introduction`                            | `Intro`           | Add wrapper                                   |
| `## How to switch to Measure from Home Page` | `SWITCH2Measure`  | **Already exists**                            |
| `## Let's go with Measure`                   | `LetsGoMeasure`   | Add wrapper                                   |
| `### Value Stream List`                      | `ValueStreamList` | Add wrapper                                   |
| `### What is a Value Stream?`                | `WhatIsVSM`       | Add wrapper                                   |
| `### Have a look at the Value Stream`        | `LookAtVSM`       | Add wrapper                                   |
| `### Swimlanes`                              | `Swimlanes`       | Add wrapper                                   |
| `### Pipeline`                               | `Pipeline`        | Add wrapper                                   |
| `#### Quality Gates`                         | `QualityGates`    | Add wrapper                                   |
| `### Review VSM`                             | `ReviewVSM`       | Add wrapper                                   |
| `## Insight`                                 | `Insight`         | Add wrapper                                   |
| `## Settings and more`                       | `SettingsAndMore` | Add wrapper (sub-snippet `PATMeasure` exists) |
| `## Conclusion`                              | `Conclusion`      | Add wrapper                                   |

**Status:** [x] done

---

### Sub-Task 19 — `docs/learn/release/index.md` (Priority 2)

**Intent:** Add wrappers to all sections (currently none).

**Snippet Name Map:**

| Section                                      | Snippet Name     |
|----------------------------------------------|------------------|
| `## Introduction`                            | `Intro`          |
| `## How to switch to Release from Home Page` | `SWITCH2Release` |
| `## Releases View`                           | `ReleasesView`   |
| `## Conclusion`                              | `Conclusion`     |

**Status:** [x] done

---

### Sub-Task 20 — `docs/learn/secure/index.md` (Priority 2)

**Intent:** Add wrappers to all sections (currently none, minimal content).

**Snippet Name Map:**

| Section           | Snippet Name |
|-------------------|--------------|
| `## Introduction` | `Intro`      |
| `## Conclusion`   | `Conclusion` |

**Status:** [x] done

---

### Sub-Task 21 — `docs/ai_setup.md` (Priority 2)

**Intent:** Add outer wrappers for the 3 top-level `##` sections (inner snippets already transcluded from sub-pages).

**Snippet Name Map:**

| Section                               | Snippet Name        | Action      |
|---------------------------------------|---------------------|-------------|
| `## AI Integration for Loop Genie`    | `AIIntegrationLoop` | Add wrapper |
| `## DevOps Plan AI integration setup` | `PlanAISetup`       | Add wrapper |
| `## Deploy AI Settings`               | `DeployAISettings`  | Add wrapper |

**Status:** [x] done

---

### Sub-Task 22 — `docs/demo/mcp_setup.md` (Priority 2)

**Intent:** Add snippet wrappers to all `##`/`###`/`####`/`#####` sections (currently 6 inner snippets exist but outer sections are bare).

**Snippet Name Map (outer/unwrapped sections):**

| Section                                           | Snippet Name                                                        | Action      |
|---------------------------------------------------|---------------------------------------------------------------------|-------------|
| `## VSCode and MCP Server`                        | `VSCodeMCPServer`                                                   | Add wrapper |
| `## Adding MCP Server`                            | `AddingMCPServer`                                                   | Add wrapper |
| `### Using the Add MCP Server command`            | `AddMCPCommand`                                                     | Add wrapper |
| `### Manually editing the mcp.json file`          | `EditMCPJson`                                                       | Add wrapper |
| `## Preparing the mcp.json file`                  | `PrepareMCPJson`                                                    | Add wrapper |
| `### Loop MCP Server`                             | `LoopMCPServer`                                                     | Add wrapper |
| `#### Configure the MCP Server Section` (Loop)    | `ConfigLoopMCP`                                                     | Add wrapper |
| `### Control MCP Server`                          | `ControlMCPServer`                                                  | Add wrapper |
| `#### Configure Control MCP Server to use SSO`    | `ConfigControlMCPSSO`                                               | Add wrapper |
| `#### Configure the MCP Server with Access Token` | `ConfigControlMCPToken`                                             | Add wrapper |
| `##### Get the necessary Access Token` (Control)  | Inner already wrapped as `PATControl` — add outer `GetControlToken` | Add wrapper |
| `##### Use Access Token in MCP server settings`   | `UseControlToken`                                                   | Add wrapper |
| `### Test MCP Server`                             | `TestMCPServer`                                                     | Add wrapper |
| `#### Get the necessary Offline User Token`       | Inner wrapped as `PATTest` — add outer `GetTestToken`               | Add wrapper |
| `#### Configure the MCP Server Section` (Test)    | `ConfigTestMCP`                                                     | Add wrapper |
| `### Deploy MCP Server`                           | `DeployMCPServer`                                                   | Add wrapper |
| `#### Get the necessary Token` (Deploy)           | Inner wrapped as `PATDeploy` — add outer `GetDeployToken`           | Add wrapper |
| `#### Encrypt Token`                              | `EncryptToken`                                                      | Add wrapper |
| `#### Configure the MCP Server Section` (Deploy)  | `ConfigDeployMCP`                                                   | Add wrapper |
| `### Measure/Release (Velocity) MCP Server`       | `MeasureMCPServer`                                                  | Add wrapper |
| `#### Get the necessary User Access Key`          | Inner wrapped as `PATMeasure` — add outer `GetMeasureKey`           | Add wrapper |
| `#### Configure the MCP Server Section` (Measure) | `ConfigMeasureMCP`                                                  | Add wrapper |
| `### Plan MCP Server`                             | `PlanMCPServer`                                                     | Add wrapper |
| `#### Get the necessary Personal Access Token`    | Inner wrapped as `PATPlan` — add outer `GetPlanToken`               | Add wrapper |
| `#### Get the necessary Teamspace (DB) ID`        | Inner wrapped as `PlanGetDBID` — add outer `GetPlanDBID`            | Add wrapper |
| `#### Configure the MCP Server Section` (Plan)    | `ConfigPlanMCP`                                                     | Add wrapper |
| `## VSCode mcp.json template`                     | `MCPJsonTemplate`                                                   | Add wrapper |

**Status:** [x] done

---

## Implementation Order

Run sub-tasks in this order to avoid conflicts:

```tasks
1 → 2 → 3 → 4      (Priority 1: conversion + wrapping)
5 → 6 → 7 → 8 → 9  (Deploy sub-pages)
10 → 11 → 12        (Introduction pages)
13                  (Plan sub-pages)
14 → 15 → 16 → 17 → 18 → 19 → 20  (Other lab pages)
21 → 22             (Cross-cutting docs)
```

Each sub-task is independent and can be reviewed/approved before the next begins.

---

[REFRequestAProcess]: ../../docs/learn/deploy/index.md#request-a-process
