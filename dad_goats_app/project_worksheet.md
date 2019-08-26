
# Project Overview


## Project Description

This app generate random cards. Each card will have a random image of a goat, a random dad joke, and a random male name assigned to each goat. It will have a means to favorite goats and possibly will have a feature to download the generated cards as jpeg files, time permitting. The purpose of this app is to help people have a good laugh.

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
![dad jokes](https://res.cloudinary.com/dldktffdd/image/upload/v1566584374/proj%202/project%20worksheet/api%20screenshots/Screen_Shot_2019-08-23_at_2.18.56_PM_kgd2i3.png)

Namefake API: https://uinames.com/api/?gender=male
![random male names](https://res.cloudinary.com/dldktffdd/image/upload/v1566584878/proj%202/project%20worksheet/api%20screenshots/Screen_Shot_2019-08-23_at_2.27.23_PM_tbjizd.png)


### MVP/PostMVP

#### MVP

- Have a Jokes page that generates cards pairing goats with jokes

- Have an Inspiration page that generates cards pairing goats with inspirational quotes

- Have an About page that will introduce myself

- Have a Home page that will introduce the app

- Have a Favorites page that will hold a user's favorited cards


#### PostMVP (time permitting)

- Provide choice between goats, dogs, and cats for card generation

- Provide choice of joke type (chuck Norris jokes, general jokes, ect)

- Add sound effects like a goat scream to certain button clicks

- Add way to download or share generated cards to computer or friends


## React Component Hierarchy

![component hierarchy](https://res.cloudinary.com/dldktffdd/image/upload/v1566589248/proj%202/project%20worksheet/wireframing/Image_from_iOS_4_axlvc7.jpg)

## Components

| Component | Description |
| --- | :---: |  
| App | This will be parent to Header, Footer, Card, and Main components. It will serve as the Router|
| Header | This will render the header include the nav |
| Footer | This will render the footer |
| Favorites Page | This will render the favorites page which includes favorited cards|
| About Page | This will render the about page |
| Jokes Page | This will render Jokes page |
| Card | This will render the randomly generated cards |
| Image | This will render the animal image |
| Quotes | This will render the joke or quote text for the card |
| Name | This will render the random male name for the card |
| Inspiration Page | This will render the main landing page that will then route all other pages |
| Main | This will render the header include the nav |
| Section | This will render sections of a page |


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Design | H | 8hrs| 8hrs |
| Startup Code | H | 3hrs| 3hrs |
| App | H | 3hrs| #hrs |
| Header | H | 2hrs| #hrs |
| Footer | H | 1hrs| #hrs |
| Favorites Page | H | 4hrs| #hrs |
| About Page | H | 2hrs| #hrs |
| Jokes Page | H | 6hrs| #hrs |
| Card | H | 4hrs| #hrs |
| Image | H | 2hrs| #hrs |
| Quotes | H | 2hrs| #hrs |
| Name | H | 1hrs| #hrs |
| Inspirational Page | H | 3hrs| #hrs |
| Main | H | 2hrs| #hrs |
| Section | H | 1hrs| #hrs |
| ImageType | M | 3hrs| #hrs |
| ImageType | M | 3hrs| #hrs |
| JokeType | M | 3hrs| #hrs |
| SoundEffect | L | 2hrs| #hrs |
| Share | L | 2hrs| #hrs |
| Total | -- | 35hrs| #hrs |

## Additional Libraries
 Axios - for the api call

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
