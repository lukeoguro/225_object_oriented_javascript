let Account = {
  init(email, password, firstName, lastName) {
    function anonymize() {
      const CHARS = [...'abcdefghijklmnopqrstuvwxyz1234567890'];
      const SEQ_LENGTH = 16;
      let sequence = '';
      for (let i = 0; i < SEQ_LENGTH; i += 1) {
        let randomIndex = Math.floor(Math.random() * CHARS.length);
        sequence += CHARS[randomIndex];
      }

      return sequence;
    }

    this.firstName = function (input) {
      if (input === password) {
        return firstName;
      } else {
        return "Invalid password";
      }
    };

    this.resetPassword = function (input, newPassword) {
      if (input === password) {
        password = newPassword;
        return true;
      } else {
        return "Invalid password";
      }
    };

    this.reanonymize = function (input) {
      if (input === password) {
        this.displayName = anonymize();
        return true;
      } else {
        return "Invalid password";
      }
    }

    this.displayName = anonymize();

    return this;
  },
}

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));            // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'foo'
