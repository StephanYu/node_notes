let user = {
  name: 'Stephan',
  sayHi: () => {
    console.log(`Hi, I am ${this.name}`);
  },
  sayHi2: function() {
    console.log(`Hi, I am ${this.name}`);
  },
  sayHi3: function() {
    return function() {
      console.log(`Hi, I am ${this.name}`);
    }
  },
  sayHi4() {
    console.log(`Hi, I am ${this.name}`);
  }
}

user.sayHi4();