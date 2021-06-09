interface Waiter {
    anjiao: boolean;
    say:() => {}
}

interface Teacher {
    anjiao: boolean;
    skill: () =>{};
}

//联合类型展示 类型保护 类型断言
function judgewho(animal: Waiter | Teacher){
    if(animal.anjiao) {
        (animal as Teacher).skill()
    } else {
        (animal as Waiter).say()
    }
}

function judgeWhoTwo(anmial: Waiter | Teacher) {
    if("skill" in anmial) {
        anmial.skill()
    } 
    if('say' in anmial) {
        anmial.say()
    }
}

function add(first: string | number, second: string | number) {
    if( typeof first === 'string' || typeof second === 'string') {
        
        return `${first}${second}`
    }
    return first + second
}

class NumberObj {
    count!: number;
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
    if(first instanceof  NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0
}

// Enum 枚举类型
enum Status {
    MASSAGE,
    SPA,
    DABAOJIAN,
}

enum Status2 {
    MASSAFGE = 1,
    SPA,
    DABAOJIAN
}

console.log(Status.MASSAGE, Status2[2]);

// 泛型 generic
function join<JSPang>(first: JSPang, second: JSPang) {
    return `${first}${second}`;
}
join <string>('jspang', '.com')

join <number> (1,2)

function myFun<ANY>(params: ANY[]){
    return params;
}
myFun<string>(["123", "456"])

function myFunFun<ANY>(params: Array<ANY>) {
    return params
}
myFunFun<number>([123, 456])
console.log(myFunFun<string>(["123", "456"]));



function joins<T, P>(first: T, second: P) {
    return `${first}${second}`
}
joins <number, string>(1, "2")

class SelectGirl {
    constructor(private girls: string[]){}
    getGirl(index: number): string {
        return this.girls[index]
    }
}

const selectGirl = new SelectGirl(['sdaf', 'sadf', 'wer']);

console.log(selectGirl.getGirl(1));

class SelectGirls {
    constructor(private girls: string[] | number[]){}
    getGirl(index: number): string | number {
        return this.girls[index]
    }
}

class SelectGirlss<T> {
    constructor(private girls: T[]) {}
    getGirl(index: number): T {
        return this.girls[index];
    }
}
const selectGirlss = new SelectGirlss(['456', '789', '963']);
console.log(selectGirl.getGirl(1));

const selectGirla = new SelectGirlss<string>(['456'])