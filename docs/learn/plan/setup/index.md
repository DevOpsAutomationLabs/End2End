# Setting Up and other Configurations

All about setting up for DevOps Plan and configure parts.

## [Create new Application](../newapp/index.md)

--8<-- [start:CreateNewApp]

If you need a new app follow the instructions for [creating a new Application](../newapp/index.md).

--8<-- [end:CreateNewApp]

## Importing Sample Data

--8<-- [start:ImportSampleData]

How to import existing data (CSV file) into an application.

### Import Data

--8<-- [start:ImportData]

| Step | Details                                                                 | Additional Information                                   |
|:----:|:------------------------------------------------------------------------|:---------------------------------------------------------|
|  1   | Use the Import Feature of plan to load sample data                      | ![Import Icon][ImportIcon]                               |
|  2   | **NOTE** Download the Demo Data File onto your local drive              |                                                          |
|      | 2.1 Click on [EchoLogic Zip File from files section][EchoLogicZipFile]  |                                                          |
|      | 2.2 and save the file on your local drive (best into Downloads)         | ![Download Demo Data file][DownloadDemoDataFile]         |
|  3   | In the Dialog for importing record data                                 | ![Import Dialog][ImportDialog1]                          |
|      | 3.1 click the Choose File Button                                        | ![Choose File Button][ChooseFileDialog]                  |
|      | 3.2 select the sample data file (from Step 2) to be imported            | ![Select the file][SelectZipFile]                        |
|  4   | Now we have the file selected                                           | ![Import Dialog with selected File][ImportDialog2]       |
|  5   | Press the Import Button to start                                        | ![Press Import Button][ImportButton]                     |
|  6   | The Import process starts.                                              | ![Import Process starting][ImportStarts]                 |
|  7   | By clicking on Details the process output can be viewed                 | ![Import running with Details][ImportRunningWithDetails] |
|  8   | Import has finished                                                     | ![Import Finished][ImportFinished]                       |
|  9   | Press the close button (bottom right on the screen)                     | ![Close Button][ImportClose]                             |
|      |                                                                         |                                                          |

--8<-- [end:ImportData]

--8<-- [end:ImportSampleData]

## Configuring

--8<-- [start:Configuring]

### Personal Access Token

--8<-- [start:PATPlan]

| Step | Details                                                                                                     | Additional Information                    |
|:----:|:------------------------------------------------------------------------------------------------------------|:------------------------------------------|
|      | Click on your *Profile* Icon in the Sidebar and select **Personal Access Token**                            | ![Sidebar Profile][PlanSidebarProfile]    |
|      | A list of existing Personal Access Tokens (PAT) is shown                                                    | ![List of PATS][PlanListPATS]             |
|      | Click on **Create New API Token**                                                                           | ![Create PAT Button][PlanCreatePATButton] |
|      | a dialog is shown, please provide a name and a validity time                                                | ![PAT creation dialog][PlanPATDialog]     |
|      | PAT is created, press the **Copy** button ![Copy Button][ButtonCopy] to copy into Clipboard | ![PAT is created][PlanPATCreated]         |
|      | PAT is copied, paste it into a secure storage for furter use                                                | ![PAT Copied][PlanPATCopied]              |
|      | Close the dialog and updated list is shown                                                                  | ![Updated PAT list][PlanListnewPATS]      |

--8<-- [end:PATPlan]

### Get the DB ID

This value is needed in the MCP setup.

--8<-- [start:PlanGetDBID]

| Step | Details                                                                                            | Additional Information                             |
|:----:|:---------------------------------------------------------------------------------------------------|:---------------------------------------------------|
|      | Please use the "Home" button on the left sidebar to switch to the Home page for Plan               | ![Plan Home Page Button][PlanHomePageButton]       |
|      | On the right side click on **My Applications**                                                     | ![My Applications Button][PlanMyApplicationButton] |
|      | Click on **Tenant Management** ![Tenant Management Button][PlanTMButton] to open a the Tenant View | ![Tenant Management View][PlanTMView]              |
|      | In this view select your Tenant (in this example **Demo**)                                         |                                                    |
|      | select the Details view tab and switch it on                                                       | ![Tenant Detail View][PlanTMDetailSwitch]          |
|      | more information is shown about the tenant                                                         | ![Tenant Details][PlanTMDetails]                   |
|      | The Database ID is shown, and copy it for further usage                                            | ![Plan Database ID][PlanDBID]                      |

--8<-- [end:PlanGetDBID]

--8<-- [end:Configuring]

---

[ChooseFileDialog]: media/plan-setup-import-dialog-choose-file.png
[ImportIcon]: media/plan-setup-import-icon.png
[ImportDialog1]: media/plan-setup-import-dialog-01.png
[SelectZipFile]: media/plan-setup-import-select-zip-file.png
[ImportDialog2]: media/plan-setup-import-dialog-02.png
[ImportButton]: media/plan-setup-import-button.png
[ImportStarts]: media/plan-setup-import-started.png
[ImportRunningWithDetails]: media/plan-setup-import-running.png
[ImportClose]: media/plan-setup-import-close-dialog.png
[EchoLogicZIPFile]: https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/raw/main/files/plan/EchoLogic.zip
[ImportFinished]: media/plan-setup-import-finished.png
[DownloadDemoDataFile]: media/plan-setup-download-plan-demo-data-file.png
[PlanSidebarProfile]: media/plan-setup-plan-profile-menue.png
[PlanListPATS]: media/plan-setup-plan-pat-list.png
[PlanCreatePATButton]: media/plan-setup-plan-create-pat-button.png
[PlanPATDialog]: media/plan-setup-plan-create-pat-dialog.png
[PlanPATCreated]: media/plan-setup-plan-pat-created.png
[PlanPATCopied]: media/plan-setup-plan-pat-copied.png
[PlanListnewPATS]: media/plan-setup-plan-pat-list-updated.png
[PlanHomePageButton]: ../media/plan-plan-home-button.png
[PlanMyApplicationButton]: ../media/plan-plan-my-applications-button.png
[PlanTMButton]: media/plan-setup-plan-tenant-management-link.png
[PlanTMView]: media/plan-setup-plan-tenant-management-view.png
[PlanTMDetailSwitch]: media/plan-setup-plan-tenant-management-details-switch.png
[PlanTMDetails]: media/plan-setup-plan-tenant-management-details.png
[PlanDBID]: media/plan-setup-plan-database-id.png
[ButtonCopy]: media/plan-setup-plan-copy-button.png
