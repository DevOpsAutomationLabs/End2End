# Deploy Lab

This lab provides a practical, hands-on experience in deploying an application to a target server.

  ![Deploy Applications Page](media/navigate.png)

Explore the comprehensive dashboard provided by DevOps Deploy, which displays key information about deployment successes and failures

   ![Deploy Dashboard Page](media/dashboard.png)

Note:

1. Agent-Based Installation Support: DevOps Deploy works on agent-based deployments, allowing you to deploy applications across various environments—including On-Premises, IBM Cloud, Microsoft Azure, AWS, Google Cloud Platform (GCP), Mainframes, and more.
2. Demo Environment: In this demonstration, the deployment agent is running on IBM Cloud. Therefore, the application will be deployed to an IBM Cloud environment.

## Configuration

DevOps Deploy is a rich tool and provides excellent mechanisms to control the deployment of application. A simple architecture is
Application > Environment(DEV, QA, PROD, etc.) > Components

  ![Deploy Environment Page](media/deploy_environment.png)

 **_Important Note: This is a shared lab environment. To ensure a smooth experience for everyone, please only modify the applications, components, or processes that you create during your lab session. Kindly avoid making changes to any existing applications or configurations visible in DevOps Deploy, as they may be in use by others_**

In order to deploy application, please download the [Application file](../../files/PizzaApp.json) directly (if you are using the repo localy) or from [GitHub Link](https://github.com/DevOpsAutomationLabs/End2End/blob/main/files/PizzaApp.json) (if you are using the web) open it on your preferred editor, and update the following in the file.

1. Search for `"name": "PizzaApp-01"` and replace it with your student code (xx appended to your email id. eg., `"name": "PizzaApp-02"`)
2. Search all the occurances for `PizzaApp-Container-01` and replace it with your student code (xx appended to your email id. eg., `PizzaApp-Container-02`)
3. Search for `"commandOptions": "-d -p 3001:8000"` and replace the `3002` with your student code (30xx appended with to email id. eg., `"commandOptions": "-d -p 3002:8000"`) . Troubleshooting: If you see any issue, try to update the port like 3016,3017, etc...
4. Save the file.

## Upload this to DevOps Deploy

Go to DevOps Deploy > Applications > Import Application > (Scroll down) Choose File > Select your updated file > Submit

  ![Deploy Import Application Page](media/import_application.png)


Once you import the application, you would be able to see additional application listes like:

  ![Deploy Updated Application](media/updated_application.png)

Now, Click on your application(PizzaApp-XX) > Switch Tab to Components > Click on PizzaApp-Container-XX > Switch tab to Process > Click on "Deploy PizzaApp"

It will show you the process designer:

![Deploy Process Diagram Application Page](media/process_diagram.png)

Now click on edit button available on the individual process:

![Deploy Edit Process Page](media/edit_process.png)

Now click edit on `Stop Docker Container` and change the Docker Container edit field from `pizzaapp` to : pizzaapp-01 (note: 01 should be replaced with you student id) and save it.

Now Edit `Remove Docker Container`: pizzaapp-01 (note: 01 should be replaced with you student id) and save it.

Now edit `Run Pizza App Container` :

 1. Update container name to `pizzaapp-01` (note: 01 should be replaced with you student id) and save it.
  ![Deploy Run Pizza Container Page](media/edit_pull_docker.png)

Now Click on save button on the screen.

## Build image and publish to Deploy

1. Open http://165.192.86.196:8080/
2. Click on New Item and fill `Enter an item name` with : App-01 (01 should be replaced with your student ID as mentioned in your email)
3. Choose `pipeline`, press Ok
4. Copy the content available on: https://github.com/DevOpsAutomationLabs/End2End/blob/main/files/Jenkins
5. Paste it to any editor and update the text as below:
     1. Search for `COMPONENT = "PizzaApp-Container-XX"` and Update XX with your student id. Eg. `COMPONENT = "PizzaApp-Container-02"`
     2. Search for all the occurances of `XX` and replace it with your student id. Eg. `02`
     3. Search for `<YOUR DEVOPS CONTROL EMAIL>"` and replace it with your email id shown in DevOps Control. Eg. `student02-labs.com`
        ![Control Email](media/control_email.png)

6. Now, switch back to Jenkins, and scroll down and find the pipeline script textbox.
7. Copy the upadted content and Paste the copied text in `pipeline script`
8. Click Save
9. Jenkins Credential Setup (Optional): This has been already configured. So skip it. If you face issue while running jenkins build, then follow the below steps} Go to Jenkins Dashboard → Manage Jenkins → Credentials.
    Choose the right scope (e.g., "Global").
    Click Add Credentials.
    Use these settings:
      * Kind: Username with password
      * Username: your Devops Control email id (Eg. student01-ibm.com)
      * Password: the GitHub token (paste it here) (Note: You can get this by opening `DevOps Control` > Click on `Profile` > `Settings` > On left  panel select `Access token` > Give token name : “labs” > Select all permissions (Read and Write) > `Generate Token` > Copy and paste in the password field in jenkins credentials)
      * ID: github-token-creds-xx (Note: xx is your student id ans should match with pipeline script)

10. Click `Build Now` on Jenkins and wait until the image link is pushed to DevOps Deploy
11. `Troubleshooting`: If your jenkins build fails, check if your control has the repository cloned or not. It is important to clone before you start build.

  ![Jenkins pipeline Page](media/jenkins_pipeline.png)

## Update the resource Tree

Do not forget to do this important step once you can successfully run the Jenkins command:

1. Navigate to DevOps Deploy > Find Resources on the left Pane and click on that > `Resource Tree` > Click on `Main` > locate row showing `online` > Click on 3 dots > `Add Component` (your component name. Eg. `PizzaApp-Container-02`)
2. Back to Deploy Dashboard.

  ![Add Component Page](media/add_component.png)

## Final steps for Deployment

1. Click on Application on the left panel
2. Click on your application. Eg. `PizzApp-02`
3. Switch Tab to Processes > Click on `Deploy App`
4. Click on Edit symbol on `install Component Install: "PizzaApp-Container-01"`
5. Under Component section, click the dopdown and Select your component. Eg. `PizzaApp-Container-02`
6. Click Ok and then Click Save.
7. Click on Application on the left panel again.
8. Click on your application. Eg. `PizzApp-02`
9. Locate DEV  > Request Process > Click `"Request Process"`
10. Click `"Choose Component Version"`
   ![Run Application pipeline Page](media/run_application_process.png)


11. A right panel will open, click on `Add` , the drop-down`"By Version Lookup"` Select the first available
12. Click on Submit
13. Expand the process and check the deployment process. Note: You might see failure in `Stop Docker Container` and `Remove Docker Container` those are fine as you are running this process for the first time and you don't have after we have the running container.
![Deployment process](media/deployment_process.png)
14. Check your running application at: http://165.192.86.196:30XX (Note: XX should be relaced with your student id)

## GO TO Test Section: [Click Here](https://github.com/DevOpsAutomationLabs/End2End/blob/main/docs/Test/index.md)
