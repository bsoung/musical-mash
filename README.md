# SoundCloud Internship Challenge : Audio Story

Music is everywhere. From the background elevator tunes to the epic movie scores, to those passionate individuals humming as they go about their day. We regard the senses of sight and hearing as powerful forces, and continue to experiment, develope, and create new ways of exploring these senses. One particularly effect combination is the pairing between visual and auditory stimuli. We've all experienced it when we've gone to movies. They've captivated us, scared us, and made us laugh so hard we nearly grew abs overnight. When we layer music on top of a visual effect, we have a possibility of connecting to either or both mediums in ways we may not have been aware of. It is truly an awesome feeling to know that the music you love and listen to can sound so different depending on the visual stimuli. This is how the idea of Audio Story started!

## App Description

* A user enters a search word. If the search is successful, a randomly picked song and video will appear depending on what the search was about. The play button starts both the song and the song, and will also pause both the song and the video. Users can spam the same search for different video/song combinations. 

* The video is muted, without information, and cannot be interacted with. It serves as a visualizer for the song. If the Song ends before the video, the video ends as well. 

* If the video ends before the song, it will continue looping until the song ends as well. 

* The motivation for this is to have users discover interesting combinations and revisit their old music libraries with an interesting twist.

## Technologies

Frontend:
* React
* Redux

Backend:
* Node
* Express

Tools:
* Webpack
* Babel
* Gulp
* SASS

Tests:
* Enzyme
* Jest

## Wireframes

The wireframe is located in the wireframe folder in the root directory of the project. A difficult task was trying to plan out the interactions between the music data and the video data, and it was extremely helpful to have a visual aid to guide the project momentum.

## The Process

- I chose React and Redux because they are the libraries that I had been currently exploring, and wanted to have the opportunity to build a complete project using the stack from the ground up. Apart from that, Redux gave the opportunity to really dive into complex state management, especially with the nature of this project. I had to make sure I was able to have the listeners listen in at the right times to execute properly.

- The Node backend via Express was created to be able to consume those express routes later on the frontend.

- Webpack and Babel are used to parse the ES6 Javascript that React utilizes. I love Gulp for tidying up messy asset files, especially other JS and SASS files.

- This is the first time using Enzyme and Jest, but I have had experience with Mocha, Jasmine, and Chai (anyone thirsty?). It wasn't too big of a hurdle, and the snapshotting features of Jest sound incredible!

## Ideas for future mods

- Integrate a database
- Building on from the db - adding OAuth and storing new users in the db
- Allow users to save their favorite pairs of video/music (trying hard not to say music video)
- Allow users to search for music/video combinations near them using geolocation

- Give users the ability to to filter out combinations they do not enjoy
- Allow users to customize music/video results by adding UI that changes the Search API query options
- Add in voting system for the impressive music/video pairs
- Add in votes for the awesome and talented artists who bring entertainment and creativity to everyone
- Add a mini-comments section for the popular music/video pairs

- Have the SoundCloud artist's background picture fused with the music player in the app
- Create more animation effects where searches are being made
- Experiment with other color combinations and change up the color theme of the app

- Utilize API information on both ends to sync up the BPM of the song with the video.
- Match up video and song pairs using other kinds of statistics


## API Reference

* GET /api/music/:term :: consumes a query string and returns 50 songs from SoundCloud's Search API.

* GET /api/video/:term :: consumes a query string and returns 50 videos from Youtube's Search API.


## To Develop / Running the App Locally

For Github:

* Clone the repository.
* Make sure you have Webpack and Gulp installed globally, if not:
```
npm i -g webpack gulp
```
* Run npm install.
* Run the following npm script:
```
npm run dev
```
* Visit localhost:3000 

For Zipfile:
* Unzip file into desired directory
* Make sure Webpack and Gulp are installed globally on your computer
```
npm i -g webpack gulp
```
* If the Node_Modules folder is missing, run npm install.
* If the Node_Modules folder is present, run the following script:
```
npm run dev
```
* Wait for webpack and gulp to build, and express to start up via nodemon
* Visit localhost:3000

For Testing:
* All test files are located in a folder in the /src folder, called __tests__
* For more information regarding Redux testing, visit their awesome [documentation.](http://redux.js.org/docs/recipes/WritingTests.html)
* To start the tests, go to the root directory of the project folder and run:
```
npm run test:watch
```
* This will start the test watching!
* Cheers!























