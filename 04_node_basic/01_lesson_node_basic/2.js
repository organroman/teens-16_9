const friends = [
  { name: "Jane", birthday: "07-19" },
  { name: "Max", birthday: "09-20" },
  { name: "John", birthday: "12-03" },
];

const today = new Date();

const todayStr = today.toISOString().slice(5, 10);


friends.forEach((friend) => {
  if (friend.birthday === todayStr) {
    console.log(`Happy birthday, ${friend.name}`);
  }
});
