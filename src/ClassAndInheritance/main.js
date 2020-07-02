class User {
  constructor(usrnm, email, pswd) {
    this.usrnm = usrnm;
    this.email = email;
    this.pswd = pswd;
  }

  static countUsers() {
    console.log('there are 50 users');
  }

  register() {
    console.log(this.usrnm + ' is registered');
  }
}

let bob = new User('bob', 'bob@email.com', '1234');
bob.register();
User.countUsers();

class Member extends User {
  constructor(usrnm, email, pswd, memberPkg) {
    super(usrnm, email, pswd);
    this.memberPkg = memberPkg;
  }

  getPacakage() {
    console.log(
      this.usrnm + ' is registered with ' + this.memberPkg + ' package'
    );
  }
}

let mike = new Member('Mike', 'mike@email.com', '1234', 'Standard');
mike.getPacakage();

mike.register();
