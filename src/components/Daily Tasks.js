//purely for notes...
// TODO:
// √=[alt+v]
//(√) Create login/sign up page (potentially could be one component)
// ? Store token in state, not local storage -- page refresh will log out user, local storage later
//  - (√) Clicking login/signup on header will show form... Could Browser Router do this?
//  - (√) Store the login form input values as logged in user
//  - () If signing up, invoke createUser() with input values, and then store as logged in user

//? - Implement Browser Router

//*! - Figure out what view images is for? -> Bootstrap carousel?
//*  - form to paste in url of image, store in images array? Cloudinary?
//      (params => title, url, board_id)

// -> (motivational quote API, image uploading, slideshow/carousel)
//  - motivational quote, new every 24 hrs?

//  - track number of times user logs in? views the vision board(click's button, keeps a counter visible, days in a row... etc.)
//* TimeStamps readable or gone
//* Improve styling
//  - landing page/home, also routes for Resources/About
//  - Responsive page(view on big screen and resized window)
//  - Images

//? Stretch Goals:
// refactor code -> moving state to only component that needs it... example: Board.js has state of Goals and Images, fetch in './Board'
// Find a way to have cards stacked on each other, and when individual card is clicked, show the larger card(with goals and flippable) to the right
