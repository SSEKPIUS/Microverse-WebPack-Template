# Microverse-WebPack-Template
Git/GitHub flow, webpack, linters, and workflows.

<a name="readme-top"> </a>

<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

After you're finished please remove all the comments and instructions!
-->

<div align="center">

  <img src="logo.png" alt="logo" width="140"  height="auto"/>
  <br/>

  <h3><b>Microverse README Template</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 [your_project_name] <a name="about-project"></a>

> Describe your project in 1 or 2 sentences.

**[your_project__name]** is a...

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> Describe the tech stack and include only the relevant sections that apply to your project.

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

> Describe between 1-3 key features of the application.

- **[key_feature_1]**
- **[key_feature_2]**
- **[key_feature_3]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> Add a link to your deployed project.

- [Live Demo Link](https://yourdeployedapplicationlink.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

> Describe how a new developer could make use of your project.

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need these, incase they are not already setup:

> 1. Set-up GitHub Actions
- create a .github/workflows folder and add a copy of .github/workflows/linters.yml (https://github.com/microverseinc/linters-config/blob/master/html-css/.github/workflows/linters.yml) to that folder.
- you need to initialize npm to create package.json file.
```sh
npm init -y
``` 

> 2. Set up Webhint
```sh
npm install --save-dev hint@7.x
``` 
- Copy .hintrc (https://github.com/microverseinc/linters-config/blob/master/html-css/.hintrc) to the root directory of your project.

> 3. Stylelint
- A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
```sh
  npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```
- Copy .stylelintrc.json (https://github.com/microverseinc/linters-config/blob/master/html-css/.stylelintrc.json) to the root directory of your project.

> 4. ESLint
```sh
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
- Copy .eslintrc.json(https://github.com/microverseinc/linters-config/blob/master/html-css-js/.eslintrc.json) to the root directory of your project.

> 5. WebPack
- install the webpack-cli (the tool used to run webpack on the command line):
```sh
 npm install webpack webpack-cli --save-dev
```
- find details here https://webpack.js.org/guides/getting-started/
- Installing CSS loaders
```sh
npm install --save-dev style-loader css-loader
```
- Loading Data formats
```sh
npm install --save-dev csv-loader xml-loader
```
- HtmlWebpackPlugin
```sh
npm install --save-dev html-webpack-plugin
```
- Using webpack-dev-server
```sh
npm install --save-dev webpack-dev-server 
npm install --save-dev express webpack-dev-middleware
```

### Setup

Clone this repository to your desired folder:
```sh
  mkdir my-folder
  cd my-folder
  git clone git@github.com:SSEKPIUS/Microverse-WebPack-Template.git  
```

### Install

Install this project with:
```sh
  npm install -force
```

### Usage

To run the project, execute the following command:

Example command:

```sh
  npm run start
```

### Run tests

To run tests, run the following command:

Example command:

```sh
  npm test
```

### Deployment

You can deploy this project using:

<!--
Example:

```sh

```
 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

> Mention all of the collaborators of this project.

👤 **Author 1**

1. Ssekweyama Pius

- GitHub: [@githubhandle](https://github.com/SSEKPIUS)
- Twitter: [@twitterhandle](https://twitter.com/SSEK_PIUS)
- LinkedIn: [LinkedIn](https://linkedin.com/in/pius-ssekweyama-23665794)

👤 **Author 2**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> Describe 1 - 3 features you will add to the project.

- [ ] **[new_feature_1]**
- [ ] **[new_feature_2]**
- [ ] **[new_feature_3]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Write a message to encourage readers to support your project

If you like this project...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

> Give credit to everyone who inspired your codebase.

I would like to thank...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

> Questions new developers would ask when they decide to use this project.

- **What is front-end, HTML, CSS and JavaScript**
  - The front end refers to the parts of the application that users (also known as "clients") interact with directly
  - As a front-end dev, you'll implement these tasks primarily using HTML to define the structure of web pages, CSS to add styling, and JavaScript to add interactivity.

- **[What is back-end and Full stack]**
  - The back end refers to the parts of the application that run behind the scenes and aren't presented directly to the user/client.
  - The back end typically includes a web server which handles HTTP connections received from the front-end client (usually a web browser)
  - Full stack simply includes both the front end AND back end!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

_NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). You can also use [any other license](https://choosealicense.com/licenses/) if you wish._

<p align="right">(<a href="#readme-top">back to top</a>)</p>
