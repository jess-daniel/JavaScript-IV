// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase; 
    }
    demo(subject) {
        return `Toady we are learning about ${subject}`;
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    };
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.personAttributes;
        this.className = studentAttributes.className;
        this.favSubject = studentAttributes.favSubject;
    }
    listsSubjects() {
        for(let i = 0; i < this.favSubject.length; i++) {
            console.log(this.favSubject[i]);
        };
    };
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintAssignment(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
}

class ProjectManagers extends Instructor {
    constructor(projectManagersAttributes) {
        super(projectManagersAttributes);
        this.gradClassName = projectManagersAttributes.gradClassName;
        this.favInstructor = projectManagersAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times`;
    };
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
}

const ben = new Student({
    name: "Ben",
    location: 'LA',
    age: 20,
    previousBackground: "College",
    className: "WEBPT10",
    favSubject: ['Html', 'CSS', 'JavaScript']
})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const tom = new ProjectManagers({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'WEB20',
    favInstructor: 'Fred'
  })

  console.log(fred.catchPhrase);
  console.log(fred.demo('html'));
  console.log(fred.grade(ben, 'JavaScript'))
  console.log(ben.listsSubjects());
  console.log(ben.PRAssignment("HTML"));