"use strict";
// 40.	Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object 
// containing these two pieces of information. Use the function to make three dictionaries representing 
// different albums. 
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title) {
    let album = { artist, title };
    return album;
}
let rahat = make_album('Rahat Fathe Ali Khan', 'Ik khawab sunawan');
let nusrat = make_album('Nusrat Fathe Ali Khan', 'Dam mast qalandar');
let sahir = make_album('Sahir Ali Bagha', 'Malang');
console.log(`${rahat.artist} ${rahat.title}`);
console.log(`${nusrat.artist} ${nusrat.title}`);
console.log(`${sahir.artist} ${sahir.title}`);
