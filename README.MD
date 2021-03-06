# Server Demo

## About
This project is a demonstration of a RESTful server. It is a basic RESTful API without validating data or unit tests. A good activity for students as they learn more would be to fork this project and add data validation and unit tests as well as additional functionality. For an added challenge you can connect this sever to the Angular or React Kayak project. Note, you will need to modify either the frontend model of backend model since the formats are different.

## Dependencies
The following are dependencies that need to be installed to run the project
* node
* mongoDB
To check if they are already installed on your computer run the following commands in the terminal:
* node --version
* mongod --version

### Installing and Running MongoDB on MAC
Details from MongoDB can be found [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/](here)
* Install x-code
    - xcode-select --install
* [https://brew.sh/#install](Install HomeBrew)
* Install MongoDB
    - brew tap mongodb/brew
    - brew install mongodb-community@5.0
* To start MongoDB:
    - brew services start mongodb-community@5.0
* To Stop MongoDB:
    - brew services stop mongodb-community@5.0
* To view what brew is running:
    - brew services 

### Installing and Running MongoDB on PC
* [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/](Install MongoDB)
* Create a directory to store the data:
    cd C:\
    md "\data\db"
* Run the following command to start the MongoDB:
    "C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath="c:\data\db"
* To stop MongoDB press ctrl + c

## Running the Project
After installing global dependencies and once you have mongoDB up and running, open the terminal and make sure your path is the main folder for this project. Then run the following commands:
- npm run install
- npm run start

The project will run on port 3000. [http://localhost:3000](http://localhost:3000)
