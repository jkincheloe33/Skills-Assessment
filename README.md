# JLB Skills Assessment
Copyright © 2018 JLB All rights reserved.

Objective
---------
Develop a webpage that matches the mockup in `./assets/mock.jpg`.

Overview
---------

The success criteria requested that we design the web page for a screen width of 1920px. However, I do not own a monitor of that size, so my app performs best at 1280px.

For this project I used Bootstrap grids for the layout. I did this because, even though it was not required, it is one of the simplest ways to quickly create a responsive layout. I feel as being mobile-minded is a good practice that I like to uphold.

Technologies Used
---------

* HTML
* CSS
* Javascript
* jQuery
* Bootstrap

Hero Container
---------

Simple layout using absolute positioning to place the text in the center of the `div`. To randomly load a hero image, I created an `img` tag with no `src`. In scripts.js, I added each image to an array. When `$(document).ready` fires, using `Math.floor` and `Math.random`, the function selects an image and adds `src` to the `img` tag.

Collage
---------

On load, this section is hidden. Once the window scroll reaches 120, classes are added to the collage images to make them visible and animate. I used Bootstrap for the layout of the collage, and added different css properties to match the mockup.

Info
---------

As in the Collage section, the Info section is hidden on load and appears once the window scroll reaches 120. Again, used bootstrap for the layout.

Video
---------

For the video, I used absolute positioning to place it towards the center of the `body`. Again, even though it was not required, I wrapped the video in a `div` in order to make it responsive. A `box-shadow` was also applied to the video.