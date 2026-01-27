# Setting Up and other Configurations

All about setting up for DevOps Plan and configure parts.

## [Create new Application](../newapp/index.md)

If you need a new app follow the instructions for [creating a new Application](../newapp/index.md).

## Importing Sample Data

How to import existing data (CSV file) into an application.

### Import Data

| Step | Details                                                                 | Additional Information                                   |
|:----:|:------------------------------------------------------------------------|:---------------------------------------------------------|
|  1   | Use the Import Feature of plan to load sample data                      | ![Import Icon][ImportIcon]                               |
|  2   | **NOTE** Downloade the Demo Data File onto your local drive             |                                                          |
|      | 2.1 Click oon [EchoLogic Zip File from files section][EchoLogicZipFile] |                                                          |
|      | 2.2 and save the file on your local drive (best into Downloads)         | ![Download Demo Data file][DownloadDemoDataFile]         |
|  3   | In the Dialog for importing record data                                 | ![Import Dialog][ImportDialog1]                          |
|      | 3.1 click the Choose File Button                                        | ![Choose File Button][ChooseFileDialog]                  |
|      | 3.2 select the sample data file (from Step 2) to be imported            | ![Select the file][SelectZipFile]                        |
|  4   | Now we have the file selected                                           | ![Import Dialog with selected File][ImportDialog2]       |
|  5   | Presss the Import Button to start                                       | ![Press Import Button][ImportButton]                     |
|  6   | The Import process starts.                                              | ![Import Process starting][ImportStarts]                 |
|  7   | By clicking on Details the process output can be viewed                 | ![Import running with Details][ImportRunningWithDetails] |
|  8   | Import has finished                                                     | ![Import Finished][ImportFinished]                       |
|  9   | Press the close button (bottom right on the screen)                     | ![Close Button][ImportClose]                             |
|      |                                                                         |                                                          |

## Configuring

### Personal Access Token

--8<-- [start:PATPlan]

| Step | Details                                                                                                     | Additional Information                    |
|:----:|:------------------------------------------------------------------------------------------------------------|:------------------------------------------|
|      | Click on your *Profile* Icon in the Sidebar and select **Personal Access Token**                            | ![Sidebar Profile][PlanSidebarProfile]    |
|      | A list of existing Personal Access Tokens (PAT) is shown                                                    | ![List of PATS][PlanListPATS]             |
|      | Click on **Create New API Token**                                                                           | ![Create PAT Button][PlanCreatePATButton] |
|      | a dialog is shown, please provide a name and a validity time                                                | ![PAT creation dialog][PlanPATDialog]     |
|      | PAT is created, press the **Copy** button ![Copy Button](media/Plan_Copy_Button.png) to copy into Clipboard | ![PAT is created][PlanPATCreated]         |
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

---

[ChooseFileDialog]: media/PLAN_Import_Dialog_ChooseFile.png
[ImportIcon]: media/PLAN_Import_Icon.png
[ImportDialog1]: media/PLAN_Import_Dialog1.png
[SelectZipFile]: media/PLAN_Import_Select_ZipFile.png
[ImportDialog2]: media/PLAN_Import_Dialog2.png
[ImportButton]: media/PLAN_Import_Button.png
[ImportStarts]: media/PLAN_Import_started.png
[ImportRunningWithDetails]: media/PLAN_Import_running.png
[ImportClose]: media/PLAN_Import_Close_dialog.png
[EchoLogicZIPFile]: https://github.com/DevOpsAutomationLabs/EchoLogic_DemoApp/raw/main/files/plan/EchoLogic.zip
[ImportFinished]: media/PLAN_Import_finished.png
[DownloadDemoDataFile]: media/Download_PlanDemoDataFile.png
[PlanSidebarProfile]: media/Plan_Profile_Menue.png
[PlanListPATS]: media/Plan_PAT_List.png
[PlanCreatePATButton]: media/Plan_Create_PAT_Button.png
[PlanPATDialog]: media/Plan_Create_Pat_Dialog.png
[PlanPATCreated]: media/Plan_PAT_created.png
[PlanPATCopied]: media/Plan_PAT_copied.png
[PlanListnewPATS]: media/Plan_PAT_list_updated.png
[PlanHomePageButton]: ../media/Plan_Home_button.png
[PlanMyApplicationButton]: ../media/Plan_MyApplications_Button.png
[PlanTMButton]: media/Plan_TenantManagement_Link.png
[PlanTMView]: media/Plan_Tenant_Management_View.png
[PlanTMDetailSwitch]: media/Plan_Tenant_Management_Details_Switch.png
[PlanTMDetails]: media/Plan_Tenant_Management_Details.png
[PlanDBID]: media/Plan_Database_ID.png
