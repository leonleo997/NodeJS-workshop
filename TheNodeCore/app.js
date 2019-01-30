var person = {
    firstname: 'Yesid',
    lastname: 'López',
    greet: function() {
        console.log('Hello, ', this.firstname, this.lastname);
    }
}

person.greet();
console.log(person['firstname']);