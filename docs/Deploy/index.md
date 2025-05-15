
# Deploy Lab

This lab will provide you with a practical hands-on for deploying an application to target server.
  <img width="1627" alt="Screenshot 2025-05-14 at 11 14 21 PM" src="https://github.com/user-attachments/assets/5f642eb4-96b6-4efd-b31e-84db16a96364" />

Look at the comprehensive dashboard offered by DevOps Deploy providing the important information about deployment failures and successes.

  <img width="1723" alt="Screenshot 2025-05-14 at 5 30 00 PM" src="https://github.com/user-attachments/assets/7f9a31ee-11d1-4d3b-b450-b7e2c52dcb95" />

Note:

1. This supports agent-based installation so that you can install your application on any kind of environment, be it On-Prem, IBM Cloud, Azure, AWS, GCP, Mainframes, etc.
2. In this demo, our agent is running on the IBM cloud, so we will deploy our application on the IBM cloud

## Configuration

DevOps Deploy is a rich tool and provides excellent mechanisms to control the deployment of application. A simple architecture is
Application > Environment(DEV, QA, PROD, etc.) > Components

  <img width="1481" alt="Screenshot 2025-05-14 at 10 51 29 PM" src="https://github.com/user-attachments/assets/046cece0-bc4b-47d5-904f-eeabefe8a52b" />

In order to deploy application, please download the [Application file](../../files/PizzaApp.json) directly (if you are using the repo localy) or from [GitHub Link](https://github.com/DevOpsAutomationLabs/End2End/blob/main/files/PizzaApp.json) (if you are using the web) open it on your preferred editor, and update the following in the file.

1. Search for `"name": "PizzaApp-01"` and replace it with your student code (xx appended to your email id. eg., `"name": "PizzaApp-02"`) 
2. Search for `"name": "PizzaApp-Container-01"` and replace it with your student code (xx appended to your email id. eg., `"name": "PizzaApp-Container-02"`) 
3. Search for `"commandOptions": "-d -p ${p:port}:8000",` and replace the `${p:port}` with your student code (30xx appended with to email id. eg., `"commandOptions": "-d -p 3002:8000"`) . Troubleshooting: If you see any issue, try to update the port like 3016,3017, etc...
4. Save the file.

## Upload this to DevOps Deploy

Go to DevOps Deploy > Applications > Import Application > (Scroll down) Choose File > Select your updated file > Submit

  <img width="1583" alt="Screenshot 2025-05-14 at 5 30 59 PM" src="https://github.com/user-attachments/assets/939471bf-8171-4051-8a74-eca65c756b0f" />

Once you import the application, you would be able to see additional application listes like:

  <img width="1525" alt="Screenshot 2025-05-14 at 5 52 46 PM" src="https://github.com/user-attachments/assets/969d235a-cfde-4abf-9dff-92bbf59aa1a4" />

Now, Click on your application(PizzaApp-XX) > Switch Tab to Components > Click on PizzaApp-Container-XX > Switch tab to Process > Click on "Deploy PizzaApp" 

It will show you the process designer:

<img width="602" alt="Screenshot 2025-05-15 at 1 04 11 PM" src="https://github.com/user-attachments/assets/2f178fa9-4a1d-4880-9f5c-16cdfff5a91a" />


Now click on edit button available on the individual process:

<img width="243" alt="Screenshot 2025-05-15 at 12 57 44 PM" src="https://github.com/user-attachments/assets/a066fbb7-2f10-4f42-adb5-00f0951ec263" />

Now click edit on `Stop Docker Container` and change the Docker Container edit field from `pizzaapp` to : pizzaapp-01 (note: 01 should be replaced with you student id) and save it.

Now Edit `Remove Docker Container`: pizzaapp-01 (note: 01 should be replaced with you student id) and save it.

Now Edit `Pull Docker Image` : 
 1. Update Image name to `ankit6133/pizza-app-4:latest`

Now Do the same for `Run Pizz App Container` : 
 1. Update Image name to `ankit6133/pizza-app-4:latest`
 2. Update container name to `pizzaapp-01` (note: 01 should be replaced with you student id) and save it.

<img width="599" alt="Screenshot 2025-05-15 at 12 53 13 PM" src="https://github.com/user-attachments/assets/7a907125-068f-4b52-8f58-18fa50136f31" />

Now Click on save button on the screen.

## Build image and publish to Deploy

1. Open http://165.192.86.196:8080/
2. Click on New Item and fill `Enter an item name` with : App-01 (01 is your student ID as mentioned in your email)
3. Choose `pipeline`, press Ok
4. Now Scroll down and find the pipeline script text box.
5. Copy the content available on https://github.com/DevOpsAutomationLabs/End2End/blob/main/Jenkins
6. Paste it to any editor and search for `COMPONENT = "PizzaApp-Container-XX"` and update XX with your student id. Eg. ` COMPONENT = "PizzaApp-Container-02"`
7. Copy the upadted content and Paste the copied text in `pipeline script`
8. Click Save
9. Click Build Now and wait until the image link is pushed to DevOps Deploy

  <img width="1607" alt="Screenshot 2025-05-14 at 10 54 11 PM" src="https://github.com/user-attachments/assets/295a20ba-f036-48e1-906d-d6dbeff7549e" />

## Update the resource Tree

Do not forget to do this important step once you can successfully run the Jenkins command:
1. Navigate to DevOps Deploy > Find Resources on the left Pane and click on that > Resource Tree > Click on Main > Click on 3 dots > Add Component (your component name. Eg. `PizzaApp-Container-02`)
2. Click Save.

  <img width="1633" alt="Screenshot 2025-05-14 at 10 15 43 PM" src="https://github.com/user-attachments/assets/bb0c44e5-dd67-4f76-a1ea-7b0f42b223ff" />

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
   <img width="1671" alt="Screenshot 2025-05-14 at 5 57 00 PM" src="https://github.com/user-attachments/assets/016a3648-d6db-4aca-b59c-4be749cc9c60" />
11. A right panel will open, click on `Add` , the drop-down`"By Version Lookup"` Select the first available
12. Click on Submit 
13. Expand the process and check the deployment process. Note: You might see failure in `Stop Docker Container` and `Remove Docker Container` those are fine as you are running this process for the first time and you don't have any running container.

     <img width="1466" alt="Screenshot 2025-05-14 at 11 03 00 PM" src="https://github.com/user-attachments/assets/1eb06157-4748-46aa-acc2-50f590b0a293" />

## GO TO Test Section: [Click Here](https://github.com/DevOpsAutomationLabs/End2End/blob/main/docs/Test/index.md)
