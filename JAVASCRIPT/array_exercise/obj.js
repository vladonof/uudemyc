var movieDB = [
{
	title: "Mindhunters",
	rating: 5,
	hasWatched:true
},
{
	title:"Frozen",
	rating:3.5,
	hasWatched: false
},
{
	title:"Black Panther",
	rating:2.2,
	hasWatched: false
}
];

for(i = 0; i < movieDB.length; i++){
	if(movieDB[i].hasWatched == true)
		console.log("You have watched " + movieDB[i].title + " - " + movieDB[i].rating + " stars" );
	else
		console.log("You have not seen " + movieDB[i].title + " - " + movieDB[i].rating + " stars" );

}
