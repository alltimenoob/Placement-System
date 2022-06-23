# Placement-System

 Placement System By Team Placement Valley @SmartIndiaHackathon2022


## How to use work on this project?

 - Fork this repository.
 - Setup the project. (Read setup part)
 - Then add it to the origin upstream
 - Make changes.
 - Create a pull request. (~Mention the work in comment)

**[Refer to this article](https://www.dataschool.io/how-to-contribute-on-github/)**

## Setup 💻

#### Using Docker 🐳

   - Clone the repository

         https://github.com/your_username/Placement-System.git
      


   - Install Docker (Make sure you have supporting operating system and virtualizaiton is turned on)  [Installation On Windows](https://www.youtube.com/watch?v=5nX8U8Fz5S0) 

   - Open the repository folder and write these two commands in the terminal 
         
         docker pull solomihir/placement-system-server:latest
         docker pull solomihir/placement-system-client:latest

   - Run Docker Compose (Make sure you are in directory same as docker-compose.yml file) 

        docker-compose up

   - Now you are ready to go!
         
         #Port may differ
         React.js   : localhost:3000
         Express.js : localhost:4000

    

#### Using Vanilla Command Line (Not Recommended) 


   - Install Node.js 🍃 [Download](https://nodejs.org/en/download/)
      
      ``` 
      #Make Sure You have the versions correct ✔️
      
      Run npm version
      
      npm: '8.3.1'
      node: '16.14.0'
      ```
   - Go to client folder
      
      ```
      npm install
      ```
      *same for server folder*
      
   - For Front-End (Client/React)
   
      ```
      npm start
      ```
   * For Back-End (Server/Node-Express)
      ```
      npm install nodemon
      nodemon server.js
      ```
   * Now you are ready to go!
    
      ```
      #Port may differ
      React.js   : localhost:3000
      Express.js : localhost:4000
      ```


## Database Notes 🧮

-  Database should be perfectly analyzed first.
-  Back-end developer should follow ODM rules . `i.e. mognoose`
-  For each collection there must exist exactly one model.

<sub>I have added each group memeber to the MongoDB project with database admin access 
if you are not enrolled yet please check your email.</sub>

## Naming Convention 📌 

 - Front-End Examples : 
   
   ```
   # State for a tag

   Ex.
      <Alert> Alert </div>

      const [alertState , setAlertState //function name]

   # Storing data

   Ex. 
      var person;
         or 
      const [person , setPerson]

   # If two variable name conflicts (Recommended)

      var personLocal; // Give context
      var personRemote; 
   ```

- Back-End Examples:

   ```
   #Strictly provide context
      
      var personModel;
      const databaseURL;
      var reportPDF;
      var personSchema;
      
      getReportPDF();  //function names
      getPersonModel();
      setPersonModel();
      setPersonSchema();

   ```
## Work Distribution 👨‍💼 

**You may work on the module of your choice, One module includes front-end and back-end both.
Theme for the front-end will be decided among team members and each member will commit to 
decided theme for rest of the project.**

*if any query, it will be discussed among team members.*


