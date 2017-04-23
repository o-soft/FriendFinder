// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friendsData = require("../data/friends");

// ROUTING

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // 


	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
	app.post("/api/friends", function(req, res) {


  		friendsData.push(req.body);
      // store user response 

      var userSubmitted = req.body;


      // compare userResponseScore to score of all over users 
      // in the JSON file 

      for (var i = 0; i < friendsData.length; i++) {
        console.log('this is my friend data', friendsData[i]);
        
        //Compare user score with score of friendData
        for (var j = 0; j < friendsData[i].scores; j++) {
          console.log('this is my score data ', friendsData[i].scores[j]);
          //take the score or friendsData and compare it 
          // to the score of userSubmitted 

          // whatever has the smallest difference is 
          // the closest match 

        }



      }

        // your matched friend 
        res.json(true);
  	});



};