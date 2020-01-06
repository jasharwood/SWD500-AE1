# About My Project

![Dogue Logo](images/dogue.png "Dogue Logo")

"Dogue." is a high-end/luxury dog fashion website which utilises a minimalist design trend. The site was developed using HTML5, SCSS, CSS3 and Javascript and has 6 pages; a landing page, product page, blog page, contact page, accessories page and a meet the designers page. The site utilises simplicity, a minimal colour palette and plenty of whitespace. The site aims to solve the issue of a lack of luxury dog fashion available online. 


### Coding Style Guide

The coding style guide created for this project can be viewed [here](styleguide.md).

### My GitHub Repo 

My GitHub repository can be found [here](https://github.com/jasharwood/dogue).

### My Hosted Website

A link to my hosted website can be found [here](https://jasharwood.github.io/dogue).

## How To Build My Website:

1. Run npm init
2. A package.json file should have been created
2. To install my package, run the following command: 
```
npm install --save jasharwood/dogue.git
```
3. Next, run
```
npm install
```
4. Then, to install sass watch, run
```
npm run sass-watch
```
5. You should then have all the git dependencies and folders to build my website.

## Completed Test Plans 

A link to my completed test plans can be found [here](testplans.md).

## Responsiveness

Screenshots of my website laid out on different viewport sizes can be found [here](viewportsizes.md).

## Reflective Account 

Overall, this project was a learning experience for me. This project encouraged me to go beyond simply creating a website and instead I had to use a more advanced development process and a modern workflow. Throughout the process, I gained a greater understanding of grid systems, npm and SASS - all tools I had not used before. 

VS Code was used throughout development due to familiarity and simplicity. Live Server was used during the coding process so I could view every change in real time instead of refreshing the page every time. This made the process much quicker and more efficient.

I believe I gained a firm grip on SASS and I even went beyond my planning for this project (where I intended to only use CSS). I used multiple folders and SCSS files to keep my code organised and this made it much easier to manage my work. Abstracts, components, layout and code for different pages were all separated and imported into one main.scss file. I also experimented with variables and mixins with the overall aim of creating re-usable snippets of code to condense my code as much as possible. I am extremely pleased with my use and understanding of SCSS.

I encountered problems at the beginning of the project when trying to create a grid system. I intended to create my own fluid grid with CSS however, after various attempts, I could not get this to work with my website. I decided to use CSS grid as a fallback which I found much easier to use. The downside of this is that the compatibility is not great on all browsers as the techincal test plan demonstrated. However, the website works perfectly on Firefox, Edge, Chrome and Safari. Despite not using my own grid, the site still lays out on a 12 column grid and re-sizes effectively.

I found npm hard to understand however I managed to understand how to install it and run sass-watch so my SCSS compiled into my main.css file.

I felt very confident using HTML and CSS, however Javascript was much more difficult as I have the least experience with it. Despite this, I managed to create a pop up which encourages users to sign up to the mailing list, and this appears when the window has finished loading. I also added various "onclick" events e.g. for the navigation. I feel I now have a basic understanding of Javascript and feel motivated to learn more.

Although not all areas were met on the technical test plan (browser compatibility), the feedback received from users for my user test plan was excellent. A modern contemporary design was utilised and the users I interviewed agreed with this. The site was made responsive with media queries/breakpoints set for both tablet and mobile sizes. I am happy with the way content was re-organised and re-sized for each device. Users also agreed that there was a good visual layout on all screen sizes.

Overall, I'm proud of the progress I've made during this project and the knowledge I have gained. The design of the site was modern, coding standards were adhered to, and I now feel very confident in using SASS. I need to improve my understanding of npm and Javascript in the future so I can experiment with more features. Later, I'd like to re-create this project with my own custom grid to ensure it is compatible with all browsers.

Other features I'd like to add in the future include:

- A pop up calculator made with Javascript so users can enter their dog breed, length and height etc, and the calculator returns the size of clothing most suitable for their dog.
- A loading page which consists of paw prints travelling across the screen.
- Make it so products can actually be added to the cart.