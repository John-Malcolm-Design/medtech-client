![alt text][logo]
[logo]: http://johnmalcolmdesign.com/benchmark.png "Benchmark preview"

# Medtech Client [![Build Status](https://travis-ci.com/johnmalcolm/medtech-client.svg?token=qM1R4xpKEnps8JFk5BZp&branch=master)](https://travis-ci.com/johnmalcolm/medtech-client)

Medtech is a webapp that will act both as a repo for quality assurance process documents and as a benchmarking tool for improving companies quality processes. 

This repo contains all the client side code that communicates with the [medtech RESTfull backend](https://github.com/johnmalcolm/medtech). 

Development URL - https://medtech-client.herokuapp.com

## UI Development
The Benchmarking tool is based on an excel spreadsheet which is a condensed form of a large QA standards book. We were tasked with converting this to a webapp.

We worked on the user interface design and research in parallel with development, sending concepts and mockups through in an Agile fashion. We used Balsamiq to create mockups, these allowed us to visually confirm the user requirements instead of getting straight into coding when the functionality was not locked down. 

Once we had the general functionality and flow locked down in the mockups we moved onto Adobe Photoshop to create realistic UI designs and come up with the general styleguide for the website - keeping it in tone with industry, minimal and intuitive.

**Links**
- [Orginial Brief] (http://johnmalcolmdesign.com/benchmark.docx)
- [Original Spreadsheet] (http://johnmalcolmdesign.com/benchmark.xlsx)
- [UI Mockups] (http://johnmalcolmdesign.com/benchmark-wireframe.pdf)
- [Website Designs Concept] (http://johnmalcolmdesign.com/concept_v1.pdf)

## Technologies

### Main
- **HTML5, CSS3 & Javascript:** Web development.
- **AngularJS:** Javascript SPA Framework.
- **Node & Express:** Tiny Server.  
- **Heroku:** Platform as a service (PaaS).

### Testing:
- **Jasmine:** Testing framework.
- **Karma:** Unit testing.
- **Travis CI:** Continuous integration platform.

### Tools
- **Yeoman:** Webapp scaffoling tool.
- **Grunt:** Javascript task runner.
- **NPM:** Project package management.
- **Bower:** Client side package manager.
- **Git:** Version control system

## System Architecture Diagram 
This diagram gives a high level overview of both medtech client and medtech api.


![alt text][system-architecture]
[system-architecture]: http://johnmalcolmdesign.com/system-architecture.png "System Architecture Diagram"

##  Main Files & Folders
| File/ Folder    | Description   | 
| :------------- |:-------------| 
| app.js | Express server | 
| app | AngularJS webapp files | 
| test | Jasmine & Karma test files |  
| dist | Deployment/ distribution code. Concatenated and minified | 
| package.json | NPM project file. Specifies project dependencies |  
| travis.yml | Travis Continuous integration config file |  
| Procfile | Heroku config file |  

## Issues & Future Development
So far working on this project we have designed a style guide, scaffolded out the system and set it up so it can now communicate with the Java backend. We spent a good bit of time leveraging lots of different technologies to scaffold out a robust and scalable client side architecture. Unit testing and continuous integration are built in from the start to facilitate an agile workflow that is robust. 

The only downside to a system designed with so many disperate packages and frameworks is troubleshooting and debugging can be a lot more complex. We have realised that logging and properly understanding the various configuration files is key. 


## Research
1. **Yo Generators:** http://johnlivingston.io/blog/yeoman-heroku
2. **Deployment:** http://awaxman11.github.io/blog/2014/07/13/how-to-create-an-angular-app-using-yeoman-and-deploy-it-to-heroku/
4. **Yeoman:** http://www.sitepoint.com/kickstart-your-angularjs-development-with-yeoman-grunt-and-bower/
5. **Heroku:** http://www.sitepoint.com/deploying-yeomanangular-app-heroku/
6. **REST & AngularJS:** https://www.youtube.com/watch?v=aGHzqwQU06g&t=1169s
7. **UI:** https://www.google.ie/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=smashing%20magazine%20ui%20design
