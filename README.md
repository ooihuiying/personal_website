## What is this

* This repository contains the frontend code for the website.
* Developed using React JavaScript library. Note that we try to use function components instead of class components.

## How to start development

- To install all required dependencies `npm install`
- To start the local server running `npm start`

#### Icons used

https://react-icons.github.io/react-icons/

#### CSS

https://react.semantic-ui.com/

#### For Github Page Deployment
- This project is deployed using github page, and is publicly acccessible by: https://ooihuiying.github.io/personal_website
- Each time a push is made to the master branch, just need to run the following command locally: `npm run deploy` which will trigger automatic updates to the gh-page branch in gitlab.
- https://medium.com/mobile-web-dev/how-to-build-and-deploy-a-react-app-to-github-pages-in-less-than-5-minutes-d6c4ffd30f14
- https://daryllwong.medium.com/github-pages-does-not-work-for-me-f9d48fd44a5f


#### Storage
- Firebase RealtimeDatabase is used to store the articles data
- Cloudinary is used to store the images
- .env file contents is stored inside the github repository secrets tab.
- If .env file is lost, refer to Firebase console for retrieving the credentials for connecting to Firebase realtime db.

#### Others
- If you want to add a new article, go to another Gitlab project named `TextEditor` where I've created a separate UI.