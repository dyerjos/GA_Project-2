![goat gif for panda prize](https://media3.giphy.com/media/Q6lrzliWvxS6c/source.gif)

# Project Overview


## Project Description

This app generate random cards. Each card will have a random image of a goat, a random dad joke, and a random male name assigned to each goat. It will have a means to favorite goats and possibly will have a feature to download the generated cards as jpeg files, time permitting. The purpose of this app is to help people have a good laugh.

## Wireframes

<INSERT WHITEBOARD PHOTOS HERE>

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

## API

Current API's being used

icanhazdadjoke API: https://icanhazdadjoke.com/api
![dad jokes](https://res.cloudinary.com/dldktffdd/image/upload/v1566584374/proj%202/project%20worksheet/api%20screenshots/Screen_Shot_2019-08-23_at_2.18.56_PM_kgd2i3.png)

Namefake API: https://uinames.com/api/?gender=male
![random male names](https://res.cloudinary.com/dldktffdd/image/upload/v1566584878/proj%202/project%20worksheet/api%20screenshots/Screen_Shot_2019-08-23_at_2.27.23_PM_tbjizd.png)


### MVP/PostMVP - 5min

#### MVP
- Be a working, interactive, React application.

- Include data from a third-party API.

- Pull data into the application using an API

- Use React Router installed using npm.

- Have at least 6 separate components, using a readable file structure.

- Be built using Create React App.

- Be styled with CSS.

- Use Flexbox or CSS Grid for layouts.

- Use functional components and class components appropriately.

- Be deployed via GitHub and Surge.

- Have jokes page that generates cards pairing goats with jokes

- Have inspirational page that generates cards pairing goats with inspirational quotes

- Have an About page that will introduce myself

- Have a Home page that will introduce the app

- Have a Favorites page that will hold a user's favorited cards


#### PostMVP (time permitting)

- Provide choice between goats, dogs, and cats for card generation

- Provide choice of joke type (chuck Norris jokes, general jokes, ect)

- Add sound effects like a goat scream to certain button clicks

- Add way to download or share generated cards to computer or friends


## React Component Hierarchy

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.


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

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

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
