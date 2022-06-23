# Placement-System
Placement System By Team Placement Valley @Hackathon2022


## How To Setup? 💻

### There are two ways to setup this project on your machine. 

1. Using Docker 🐳

    * Clone this repository


         ```
         https://github.com/alltimenoob/Placement-System.git
         ```


    * Install Docker (Make sure you have supporting operating system and virtualizaiton is turned on)  [Installation On Windows](https://www.youtube.com/watch?v=5nX8U8Fz5S0) 

    * Open the repository folder and write these two commands in the terminal 
         
         ```
         docker pull solomihir/placement-system-server:latest
         docker pull solomihir/placement-system-client:latest
         ```

    * Run Docker Compose (Make sure you are in directory same as docker-compose.yml file) 



        ```
        docker-compose up
        ```

    * Now you are ready to go!
    
         ```
         React.js   : localhost:3000
         Express.js : localhost:4000
         ```
    

2. Using Vanilla Command Line (Not Recommended)


   * Install Node.js 🍃
      
      ``` 
      #Make Sure You have the versions correct ✔️
      
      Run npm version
      
      npm: '8.3.1'
      node: '16.14.0'
      ```
