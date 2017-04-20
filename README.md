# gameofbrain

At the Start of the game, Ask the User Input of the Size of the Grid (Like the Grid size in the Below picture is 4 X 4) Each Tile 

will have a Number assigned to it Randomly. Different numbers assigned to the grid will be half of the total Grid Size and shall be 

assigned twice
( In case of a 4x4 grid, The Total Grid size is 16, Hence, Assign Numbers from 1 to 8 randomly TWICE !) (E.g.. for a 4x4, you would 

assigned 1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8, .. 16 Tiles in Totally, Assigned Randomly) All Tiles must to Hidden Initially. At any given 

point the user can select and Reveal TWO Tiles. If these TWO selected tiles and Identical, Then you mark both the Tiles as a Win and 

change there state to FROM HIDDEN TO VISIBLE. When the user Successful REVEALS all the Tiles, He/She Wins.

---------------------------------------------------Prerequisites---------------------------------------------------------------------

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Javascript<<<<<<<<<<<<<<<<<<<<<<<<<<<<

Javascript must be enabled in your browser.

Workings of the application

The application filesystem layout structure is based on the single page application.
There is no dynamic backend (no application server) for this application. I have used a simple HTML, CSS and Javascript.
Run the application

Download the repo and open game.html in your browser. Application will be start.
Application Directory Layout

images          --> images
game.html      --> the main html template file of the app
style.css        --> stylesheet file 
script.js         --> application logic written in javascript
Readme.md       --> Application description
