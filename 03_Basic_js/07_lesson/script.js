const user = {
  name: "John",
  lastName: "Doe",
  age: 30,
  email: "jd@mail.com",
  accessLevel: "junior",
  
  getFullname: function () {
    return this.lastName + " " + this.name;
  },
  
  changeAccessLevel: function (newValue) {
    this.accessLevel = newValue;
  },
};

user.name;

const x = "email";

console.log(user[x]);

console.log(user.getFullname());
user.changeAccessLevel("middle");

console.log(user)