class Person {
    #firstName = "";
    #lastName = "";
    #age = 0;
    constructor(firstName, lastName, age){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
    }
    set firstName(val){
        if(val.length < 2){
            this.#firstName = "name too short";
        }else if (val.length > 10){
            this.#firstName = "name too long";
        }else{
            this.#firstName = val;
        }
    }
    set lastName(val){
        if(val.length < 2){
            this.#lastName = "last name too short";
        }else if (val.length > 10){
            this.#lastName = "last name too long";
        }else{
            this.#lastName = val;
        }
    }
    set age(val){
        if(val < 1){
            this.#age = 1;
        }else if (val > 120){
            this.#age = 120;
        }else{
            this.#age = val;
        }
    }
    get firstName(){
        return this.#firstName;
    }
    get lastName(){
        return this.#lastName;
    }
    get age(){
        return this.#age;
    }
    get fullName(){
        return this.#firstName + " " + this.#lastName;
    }
  }
  const person = new Person('Mario', 'Rossi', 25);
  console.log(person.fullName);
  
  person.firstName = 'Maria';
  person.lastName = 'Verdi';
  console.log(person.fullName);
  console.log(person.age);