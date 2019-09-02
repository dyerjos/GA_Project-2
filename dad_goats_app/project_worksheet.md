
# Project Overview


## Project Description

This app generate random cards. Each card will have a random image of a goat, a random dad joke, and a random male name assigned to each goat. It will have a means to favorite goats. The purpose of this app is to help people have a good laugh.

## Wireframes

React component hierarchy rough-draft:
![component hierarchy](https://res.cloudinary.com/dldktffdd/image/upload/v1566589248/proj%202/project%20worksheet/wireframing/Image_from_iOS_2_sktsxn.jpg)

Page rough-drafts:
![pages](https://res.cloudinary.com/dldktffdd/image/upload/v1566589248/proj%202/project%20worksheet/wireframing/Image_from_iOS_1_owdoer.jpg)

![pages](https://res.cloudinary.com/dldktffdd/image/upload/v1566589248/proj%202/project%20worksheet/wireframing/Image_from_iOS_x7g7of.jpg)

Whiteboarding
![app pages](https://res.cloudinary.com/dldktffdd/image/upload/v1566589248/proj%202/project%20worksheet/wireframing/Image_from_iOS_3_rlbxej.jpg)

## API

Current API's being used

icanhazdadjoke API: https://icanhazdadjoke.com/api
![dad jokes](https://res.cloudinary.com/dldktffdd/image/upload/v1566913736/proj%202/project%20worksheet/api%20screenshots/Screen_Shot_2019-08-27_at_9.47.43_AM_xh1ozi.png)

Namefake API: https://randomuser.me/api/?gender=male&nat=us
![random male names](https://res.cloudinary.com/dldktffdd/image/upload/v1566913731/proj%202/project%20worksheet/api%20screenshots/Screen_Shot_2019-08-27_at_9.39.45_AM_zpqpvl.png)

Forismatic API: https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
![inspirational quotes](https://res.cloudinary.com/dldktffdd/image/upload/v1567427978/proj%202/project%20worksheet/api%20screenshots/Screen_Shot_2019-09-02_at_8.39.28_AM_czzthc.png)

### MVP/PostMVP

#### MVP

- Have a Home page that can generate cards pairing goats with jokes or inspirational quotes

- Have an About page that will introduce myself

- Have a Favorites page that will hold a user's favorited cards


#### PostMVP (time permitting)

- Provide choice between goats, dogs, and cats for card generation

- Provide choice of joke type (chuck Norris jokes, general jokes, ect)

- Add sound effects like a goat scream to certain button clicks

- Add way to download or share generated cards to computer or friends


## React Component Hierarchy

![component hierarchy](https://res.cloudinary.com/dldktffdd/image/upload/v1567429035/proj%202/project%20worksheet/wireframing/Image_from_iOS_4_trd2rt_plyf7a.jpg)

## Components

| Component | Description |
| --- | :---: |  
| App | This will be parent to Header, Footer, Card, and Main components. It will serve as the Router|
| Header | This will render the header include the nav |
| Footer | This will render the footer |
| Favorites Page | This will render the favorites page which includes favorited cards|
| About Page | This will render the about page |
| Home Page | This will render jokes and inspirational quotes |
| Card | This will render the randomly generated cards |
| Main | This will render the header include the nav |


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Design | H | 8hrs| 8hrs |
| Startup Code | H | 3hrs| 3hrs |
| App | H | 3hrs| 13hrs |
| Header | H | 2hrs| 0.5hrs |
| Footer | H | 1hrs| 0.1hrs |
| Favorites Page | H | 4hrs| 4hrs |
| About Page | H | 2hrs| 1hrs |
| Card | H | 4hrs| 4hrs |
| Main | H | 2hrs| 2hrs |
| Section | H | 1hrs| 1hrs |
| ImageType | M | 3hrs| 0hrs |
| JokeType | M | 3hrs| 0hrs |
| SoundEffect | L | 2hrs| 0hrs |
| Share | L | 2hrs| 0hrs |
| Total | -- | 35hrs| 37hrs |

## Additional Libraries
 N/A

## Code Snippet

I'm most proud of my code that renders each card. It required a lot of CSS as well to make text aquired from API pulls display properly on each generated card.
![code snippet](https://res.cloudinary.com/dldktffdd/image/upload/v1567429658/proj%202/project%20worksheet/Screen_Shot_2019-09-02_at_9.07.12_AM_lswhli.png)

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

**ERROR**: Tried to convert fetch api call to axios but couldn't figure out a solution to use axios with a header:           
**RESOLUTION**: https://github.com/axios/axios
https://stackoverflow.com/questions/44617825/passing-headers-with-axios-post-request

**ERROR**: Had to figure out how to overlay text onto an image. This url was referenced:                               
**RESOLUTION**: https://www.w3schools.com/howto/howto_css_image_text.asp

**ERROR**: Had trouble using two parameters in api url. also United States was a two word region for name api.               
**RESOLUTION**: found out by trial and error that i can type united%20States in url     

**ERROR**: Had trouble using forismatic api for inspirational quotes. This post helped me:                             
**RESOLUTION**: https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors

**ERROR**: Had trouble with keeping data in State with multiple api calls                            
**RESOLUTION**: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react 
