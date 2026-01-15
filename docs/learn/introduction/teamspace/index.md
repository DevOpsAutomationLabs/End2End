# Teamspace

For more details please have a look at the [Teamspace management][DOCSLoopTS] documentation.

## Overview

A teamspace acts as a logical partition of larger system providing a secure and isolated "environment/workspace" for multiple teams to work independent.

## Create new Teamspace

--8<-- [start:CreateNewTS]

| Step | Details                                                                                           |                         Additional Information                          |
|:----:|:--------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------:|
|  1   | Click on the Teamspace icon ![TeamSpace Icon][TSIcon] to view your Teamspaces or create a new one |                       ![Teamspace menue][TSMenue]                       |
|      | Click on **Create TeamSpace**                                                                     |       ![TeamSpace menue - Create TeamSpace Link][TSCreateTSentry]       |
|  2   | Enter the name and a Description and press **Next** ![Next Button][NextButton]                    |              ![Teamspace - Create New][TSCreateNewDialog]               |
|  3   | You can search and **add** Teammembers to a Teamspace                                             |       ![Teamspace - Create New - search Member][TSAddTeammember]        |
|      | Teammember is added to a list. Proceed to add more members if needed.                             |       ![Teamspace - Create New - Member added][TSTeamMemberAdded]       |
|  4   | Press **Create** to proceed                                                                       |               ![Create TeamSpace Button][TSCreateButton]                |
|  5   | Teamspace creation will take a few moments, as soon as it finishes a success dialog will be shown | ![Teamspace - Create New - creation process started][TSCreationStarted] |
|  6   | Teamspace created. Click on **Go to Teamspace** for next steps                                    |  ![Teamspace - Create New - creation successfull][TSCreateionFinished]  |

--8<-- [end:CreateNewTS]

Please proceed with [creating a Loop][GoBackToCreateALoop]

---

[TSMenue]: media/Loop_Teamspace_01_Menue.png
[TSCreateNewDialog]: media/Loop_Teamspace_02_CreateNew_Dialog.png
[TSAddTeammember]: media/Loop_Teamspace_03_CreateNew_searchMember.png
[TSTeamMemberAdded]: media/Loop_Teamspace_04_CreateNew_MemberAdded.png
[TSCreationStarted]: media/Loop_Teamspace_05_CreateNew_creation.png
[TSCreateionFinished]: media/Loop_Teamspace_06_CreateNew_success.png
[TSIcon]: media/Loop_TeamSpaceIcon.png
[TSCreateTSentry]: media/Loop_CreateTeamSpace.png
[TSCreateButton]: media/Loop_Create_TS_Button.png
[NextButton]: ../../../media/Button_NEXT.png
[GoBackToCreateALoop]: ../index.md#create-a-loop
[DOCSLoopTS]: https://www.ibm.com/docs/en/devops-loop/2.0.0?topic=administration-teamspace-management
