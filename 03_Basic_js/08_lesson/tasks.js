const favGames = ["Minecraft", "Among Us"];
const newGames = ["Roblox", "Fortnite"];
const allGames = [ ...favGames, ...newGames];
console.log("cdfdgffd", allGames);

const user2 = {
  name: "Leo",
  age: 30,
  email: "old@email.com",
};
const newUser = {...user2, email:"new@email.com" }
console.log(user2);
console.log(newUser);

const num = 2
const scores = [100, 98, 95, 88, 70];
const [topScore, ...anotherScores]= scores;

console.log ("topScore", topScore);
console.log ("anotherScores", anotherScores)

const playlist = ["song1", "song2", "song3"];
const newPlaylist = [...playlist, "song4", "song5"];
console.log ("allSongs", newPlaylist)