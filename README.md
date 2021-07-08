# YelpCamp
 
## About
A full-stack yelp-like application from a Udemy course, [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp/). The course covers AJAX and single page apps, Responsive Design, Database Associations, Schema Design, Authentication from Scratch, Common Security Issues (SQL Injection, XSS, etc.), Developer Best Practices, 

## Features
Features | Description
-------- | -----------
User Registration | Users are able to register and login/logout of the app. Registered users are able to post, edit, and delete their campground posts and reviews on campgrounds
Image Upload and Storage | Allows users to upload images of their campground experience to their posts
Maps and Geocoding | Users can see maps with pins of all the different campgrounds posted on the app 

## Tools and Technologies Used
Tools/Tech | Description
---------- | -----------
[Bootstrap5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) | Popular Front-End Open Source Toolkit for Responsive Design
[NodeJS](https://nodejs.org/en/) | A JavaScript runtime built on Chrome's V8 JavaScript engine
[ExpressJS](https://expressjs.com/) | Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications, including RESTful APIs.
[MongoDB Cloud (NoSQL)](https://www.mongodb.com/cloud) | MongoDB Atlas is a fully managed cloud database for modern applications. 
[EJS](https://ejs.co/) | A simple templating language that generates HTML markup with plain JavaScript.
[Cloudinary API](https://cloudinary.com/documentation/how_to_integrate_cloudinary) | Cloudinary provides an enterprise-grade, media experience platform for all rich media types where it's used in this project for image upload.
[Mapbox](https://www.mapbox.com/maps) | Mapbox provides some free quality maps to pinpoint locations around the world

## Design Patterns and Best Practices Used
* AJAX and single page app design
* Authentication and Authorization
* Protection against common security issues - SQL Injection, XSS
* Use of Cookies and Sessions

## Project Setup
To run locally, follow the steps below

### Prerequisites
* Node.js
* npm
* MongoDB
* Cloudinary API
* Mapbox API

### Installation
* Clone repo
```
git clone git@github.com:EdwardOlmos/YelpCamp.git
```
* Install dependencies
```
npm install
```
* Create a `.env` file containing the following:

Variable Name | Value
---------- | -----------
CLOUDINARY_CLOUD_NAME | Your Cloudinary Cloud Name
CLOUDINARY_KEY | Your Cloudinary API Key
CLOUDINARY_SECRET | Your Cloudinary API Secret
MAPBOX_TOKEN | Your Mapbox API Access Token - Default Public Token
DB_URL | Your MongoDB Cluster Config - E.g. mongodb+srv://user_01:<password>@cluster0.7qsrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

* To run application
```
node app.js
```
