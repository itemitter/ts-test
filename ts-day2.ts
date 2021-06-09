 class Person {
     public name: string | undefined;
     public sayHello() {
         console.log(this.name + 'say hello');
     }
 }

 const person = new Person()
 person.name = 'jspang.com'
 person.sayHello()
 console.log(person.name);

 class Persons {
     private name: string | undefined;
     public sayHello() {
         console.log(this.name + 'sayhello');
     }
 }

 const persons = new Persons()
//  person.name = 'jspang.com' 报错
 person.sayHello()

 class APerson {
     protected name!: string;
     public sayHello() {
        console.log(this.name + 'say hello');
     }
 }

 class Teacher extends Person {
     public sayHello() {
         this.name;
     }
 }


 class Personss {
     public name:string;
     constructor(name: string) {
         this.name = name 
     }
 }
 const personaa = new Personss('safd')
 console.log(person.name);
 
 class APersons {
     constructor(public name:string) {
     }
 }

 const aperson = new APersons('jspang')
console.log(aperson.name);


class PersonA {
    constructor(public name: string){}
}
class ATeacher extends PersonA {
    constructor(public age:number) {
        super('jspang')
    }
}
const teacher = new ATeacher(18)
console.log(teacher.age);
console.log(teacher.name);

class Personaa{}
class Techer extends Personaa {
    constructor(public age:number) {
        super()
    }
}
const techer = new Techer(16)
console.log(techer.age);


class Xiaojiejie {
    constructor(private _age:number){}
    get age() {
        return this._age - 10
    }
    set age(age: number) {
        this._age = age + 2
    }
}
const dajiao = new Xiaojiejie(28)
console.log(dajiao.age);
dajiao.age = 26
console.log(dajiao.age);

class Girl {
    sayLove() {
        return 'l love you'
    }
}
const girl = new Girl()
console.log(girl.sayLove());

class Girls {
    static sayLove(){
        return 'i love you'
    }
}
console.log(Girls.sayLove());

class aPerson {
    constructor(public name:string){}
}
const apersons = new aPerson('llself')
console.log(apersons.name);

class PersonPerson {
    public readonly _name :string
    constructor(name: string){
        this._name = name
    }
}
const personPerson = new PersonPerson('llself')
// personPerson._name = 'sdf' 只读属性不能修改



abstract class AGirl {
    abstract skill():any
}
class Waiter extends AGirl {
    skill() {
        console.log('daye, qingheshui');
    }
}
class BaseTeacher extends AGirl {
    skill() {
        console.log('daye, laigetaishianmoba');
    }
}
class seniorTeahcer extends Girl {
    skil(){
        console.log('daye, laige spa quanshenanmo');  
    }
}

