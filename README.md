# SSJI-Testbed
A collection of Server Side JavaScript Injection Scenarios for **Node.js** applications that can be used with vulnerability detection tools to study Command Injection.

This is a on-purpose vulnerable Node/Express.js application that contains various exploitable use cases of the **exec()**, **eval()** and **funtion()** JavaScript methods. The original idea for this application is the [Commix-Testbed](https://github.com/commixproject/commix-testbed) collection of PHP Command Injection Scenarios.

## Installation

* Installing latest Node.js - In Ubuntu 18 you can use:
```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash
sudo apt-get install -y nodejs
``` 
* Now check your Node and npm versions:
```bash
>node -v
v10.15.1

>npm -v
6.4.1
```
* Clone the SSJI-Testbed repository and `cd` into it.
* Now to install all required dependencies:
```bash
> npm install
```

And you are done!

## Running the SSJI-Testbed

From inside the *SSJI-Testbed* folder simply run:
```bash
DEBUG=SSJI-Testbed:* npm start
```

This will boot the SSJI-Testbed Node.js app with in Debug mode and listening to port `3000`.

If you wish to change the **port** you can use:
```bash
sudo PORT=80 DEBUG=SSJI-Testbed:* npm start
```
