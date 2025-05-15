
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


In order to deploy application, please download the Application file (https://github.com/DevOpsAutomationLabs/End2End/blob/main/PizzaApp.json) open it on your preferred editor, and update the following in the file. 
1. Search for `"name": "PizzaApp"` and replace it with your student code (xx appended to your email id. eg., `"name": "PizzaApp-01"`) 
2. Search for `"name": "PizzaApp-Container"` and replace it with your student code (xx appended to your email id. eg., `"name": "PizzaApp-Container-01"`) 
3. Search for `"commandOptions": "-d -p ${p:port}:8000"` and replace it with your student code (30xx appended with to email id. eg., `"commandOptions": "-d -p 3001:8000"`) . Troubleshooting: If you see any issue, try to update the port like 3070,3071, etc...
4. Save the file.
   

## Upload this to DevOps Deploy:

Go to DevOps Deploy > Applications > Import Application > (Scroll down) Choose File > Select your updated file > Submit

  <img width="1583" alt="Screenshot 2025-05-14 at 5 30 59 PM" src="https://github.com/user-attachments/assets/939471bf-8171-4051-8a74-eca65c756b0f" />

Once you import the application, you would be able to see additional application listes like:

  <img width="1525" alt="Screenshot 2025-05-14 at 5 52 46 PM" src="https://github.com/user-attachments/assets/969d235a-cfde-4abf-9dff-92bbf59aa1a4" />


## Build image and publish to Deploy

1. Open http://165.192.86.196:8080/
2. Click on New Item and provide description as : App-01 (01 is your student ID as mentioned in your email)
3. Choose `pipeline`, press Ok
4. Copy the content available on https://github.com/DevOpsAutomationLabs/End2End/blob/main/Jenkins 
5. Under Pipeline script, paste the content copied, and then update the component name with student code: (replace `XX` with student code, eg: `01`)

  <img width="1607" alt="Screenshot 2025-05-14 at 10 54 11 PM" src="https://github.com/user-attachments/assets/295a20ba-f036-48e1-906d-d6dbeff7549e" />


## Update the resource Tree:

Do not forget to do this important step once you can successfully run the Jenkins command:
Navigate to DevOps Devloy > Resources> Resource Tree > Click on 3 dots > Add Component (your component name: `PizzaApp-Container-01`) 

  <img width="1633" alt="Screenshot 2025-05-14 at 10 15 43 PM" src="https://github.com/user-attachments/assets/bb0c44e5-dd67-4f76-a1ea-7b0f42b223ff" />


## Final steps for Deployment:
1. Click on your Application
2. DEV  > Click `"Request Process"`
3. Click "Choose Component Version"`
   
   <img width="1671" alt="Screenshot 2025-05-14 at 5 57 00 PM" src="https://github.com/user-attachments/assets/016a3648-d6db-4aca-b59c-4be749cc9c60" />
   
5. A right panel will open, click on `Add` , the drop-down`"By Version Lookup"` Select the first available
6. Click on Submit
7. Expand the process and check the deployment process.

     <img width="1466" alt="Screenshot 2025-05-14 at 11 03 00 PM" src="https://github.com/user-attachments/assets/1eb06157-4748-46aa-acc2-50f590b0a293" />


## GO TO Test Section: [Click Here](https://github.com/DevOpsAutomationLabs/End2End/blob/main/docs/Test/index.md)

