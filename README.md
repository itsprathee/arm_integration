
### Setup Guide   

### To Get Started

#### Pre-requisites
1.NodeJS installed globally in the system.

2.Chrome browsers installed.

#### Setup Scripts
* Clone the repository

git clone https://github.com/itsprathee/arm_integration.git

* Go to the 'arm_integrtion' folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json would be installed in node_modules folder.

#### Run Test

* First step Update Webdriver manager

```
node_modules/protractor/bin/webdriver-manager update
``` 

* Now just run the test command which launches the Chrome Browser and runs all feature files.

npm run test 
```

#### HTML Reports
End of test execution HTML report will be generated in the `.tmp/report` folder.
