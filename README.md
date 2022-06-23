# Placement-System
Placement System By Team Placement Valley @Hackathon2022


## How To Setup?

### There are two ways to setup this project on your machine.

1. Using Docker

    * Clone this repository


         ```
         https://github.com/alltimenoob/Placement-System.git
         ```


    * Install Docker ( Make sure you have supporting operating system and virtualizaiton is turned on)

        [Installation On Windows](https://www.youtube.com/watch?v=5nX8U8Fz5S0) 

    * Open the repository folder and write these two commands in the terminal
         
         ```
         docker push solomihir/placement-system-server:latest
         docker push solomihir/placement-system-client:latest
         ```

    * Run Docker Compose (Make sure you are in directory same as docker-compose.yml file)



        `docker-compose up`


2. Using Vanilla Command Line (Not Recommended)
