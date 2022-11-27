console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.

//- Add a function named `addToCollection`. This function should:
//- Take in the album's `title`, `artist`, `yearPublished` as input parameters
//- Create a new object having the above properties
//- Add the new object to the end of the `collection` array
//- Return the newly created object 







let collection = [];

let collectionInfo = {
    title: " " ,
    artist: " ",
    yearPublished: " "



};

//- Test the `addToCollection` function:
 // - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
 // - Console.log each album as added using the returned value.
  // - After all are added, console.log the `collection` array.






function addToCollection (title, artist, yearPublished) { 
    collection.push({title, artist, yearPublished });
        return collectionInfo;
}
addToCollection("The Wall", "Pink Floyd", 1978);
addToCollection("Tezeta", "Mulatu Astatke", 1955);
addToCollection("Harder Than Ever", "Lil Baby", 2018);
addToCollection("My Turn ", "Lil Baby", 2020);
addToCollection("Bigger Than Life", "Lil Uzi Vert", 2020);
addToCollection("Yessirski", "Lil Uzi Vert", 2020);


    
console.log(collection);


// - Add a function named `showCollection`. This function should:
 // - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
 // - Console.log the number of items in the array.
 // - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

 function showCollection ( collection ){ 
    
  for ( let i =0; i < collection.length; i++)
 console.log(" TITLE by ARTIST " + collection[i].title + " published in YEAR " + collection[i].yearPublished);

 }
 showCollection(collection);
 console.log( collection.length );

 // - Add a function named `findByArtist`. This function should:
//- Take in `artist` (a string) parameter
//  - Create an array to hold any results, empty to start
//  - Loop through the `collection` and add any objects with a matching artist to the array.
// - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist(artist) {

    var matches = []; 
 
    for ( let i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
          matches.push(collection[i]); // add a match we've found
        } 
        
    }
    return matches;    

} 
//- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

console.log(findByArtist("Lil Baby"))
console.log(findByArtist("tecca"))
//> When testing your functions, write all tests in the JavaScript file!

// Create a function called `search`. This function should:
//- Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//```
//{ artist: 'Ray Charles', year: 1957 }
//```
//- The returned output from `search` should meet these requirements:
 // - Return a new array of all items in the `collection` matching *all* of the search criteria.
//- If no results are found, return an empty array.
 // - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.


function search(artist, year) {
    console.log('searching', artist, year);
     let searchArray = [];
    for (let i=0; i<collection.length; i++) {
        if (artist === collection[i].artist && year === collection[i].yearPublished){
            searchArray.push(collection[i]);
       
        }
    }
    return searchArray;
}



console.log(search('Lil Baby', '2020'));
console.log(searchArray);