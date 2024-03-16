
class Person {
    _name:string
    constructor(name){
        this.name=typeof name==='string' ? name:'Anonymous'
    }
    set name(val){
        this._name=Person.capitalzeWord(val)
    }
    get name(){
        return this._name
    }
    printGreeting(){
        console.log(`Hi i am ${this.name}`);
        
    }
    static capitalzeWord(word){
        return word[0].toUpperCase() + word.slice(1)
    }
}
class Employee extends Person{
    job:string
    constructor(name,job='Working'){
        super(name)
        this.job=job
    }
    printGreeting(){
        console.log(`Hi i am ${this.name} and i am ${this.job}`);
    }
    callSuperMethod(){
        super.printGreeting()
    }
}
var p1= new Employee('joe');
p1.printGreeting()
p1.callSuperMethod()
var p2= new Person('newUser');
p2.name


