
### Setup Guide   

### To Get Started

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.

#### Setup Scripts
* Clone the repository into a folder https://github.com/itsprathee/arm_integration.git
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json would be installed in node_modules folder.

#### Run Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager ** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
node_modules/protractor/bin/webdriver-manager update
``` 

* Now just run the test command which launches the Chrome Browser and runs the scripts.

npm test 
```

#### HTML Reports
End of test execution HTML report will be generated in the `.tmp/report` folder.
