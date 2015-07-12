# gis_signup_frontend

## Abstract
This is the front end of GIS signup system, working with IthacaCow's [backend system](https://github.com/IthacaCow/signup-sheet-backend).
 
*[Here is demo on github](http://ctinray.github.io/gis_signup_frontend/public/sheet.html#/all)*

## Status
* The interface is not ready to work with the backend system. To we work with the backend, there are some modifications needed:
 * Make the front end system have the same domain name with the backend system. (For brower security policy).
  * (this can be solve by simply make the backend router script serve the static directory public. )  
 * Disable the auth system of the backend system. (The front end has not support login yet. )
 * Modify the API URLs in js/ng-controllers.js

## Frame Used
* Google material design lite package
* Angularjs

## Progress
* Basic functions
 * List users having signed up in specific event. 
* Appearance
 * Responsive web design using Google [material design lite](http://www.getmdl.io/index.html) package. 
 * Customize color theme for GIS.

## To Do
* Support of login system.
* Delete record.
* Fix inconvience of the drawer not drawing back after clicking the link.
* Link for *All* is missing in the drawer/sidebar

## Known Issues
* The table seems to be too wide when viewing users in specific event.
* No API to get event name. ( so the drawer/sidebar lists start and end time instead, and the title is event ID ) 
* No API to get sign up time. ( not appear )
 

## Files
* The directory public/ contains all the files needed.
* The directory public/mdl contains all the files from google material design lite.
* The directory public/js contains all the angular scripts.
* The directory public/css contains the style sheet. Some of them override the MDL style.
* The directory public/data contains the json files used for demo/test without backend system.
* The directory public/partials contains the ng-view templates used by angular.
