const count: number = 10;
const myName: string = 'llself'
const xiaojiejie: {
    name: string,
    age: number,
} = {
    name: '白白',
    age: 14
}

console.log(xiaojiejie.name);

const xiaojiejies: String[] = ['谢大脚', '王笑笑', '黄阿黄']

const xiaojiejiess: String[] = ['谢大脚', '谢大脚213', '456']

class PersonZ {}
const dajiaoZ: PersonZ = new PersonZ()

const jiaoxiaojiejie:() => string = () => {
    return '大脚';
}

let testNumebr = 45646

function getTotal(one: number, two: number): number {
    return one +two;
}
const total = getTotal(1, 2)

function sayHello(){
    console.log('hello world');
}

function sayHello1():void{
    console.log('hello world');
}

function errotFuncion(): never {
    throw new Error();
    console.log("hello World");
}

function forNever(): never {
    while(true){}
    console.log('hello jspang');
}

function add({one, two}: {one: number, two: number}): number {
    return one + two;
}

const three = add({one: 1, two: 2})

function getNumber({one}: {one: number}): number {
    return one
}

const one = getNumber({one: 1})


const numberArr: number[] = [1,2,3]

const stringArr: string[] = ['a', 'b', 'c']

const undefinedArr: undefined[] = [undefined, undefined]

const arr: (number| string)[] = [1, 'string', 2]

const xiaoJiejiejies: {name: string, age: Number}[] =[
    {name: '刘英', age:18},
    {name: '谢大脚', age: 28}
]

type Lady = {name: string, age: Number};

const xiaojiejiejiejies: Lady[]= [
    {name: '刘英', age: 18},
    {name: '谢大脚', age: 26}
]

class Madam {
    name: string | undefined;
    age: number | undefined;
}

const xiaoxiaoxiao: Madam[]= [
    {name: '刘英', age: 45},
    {name: 'lasdf', age: 8}
]

const xiaojiexiao = ['dajiao', 'teacher', 45]

const xiaojiejiexiaoz: (string | number)[] = ['dajiao', 'teacher', 45]
// 数组
const xiaoxiaojiesz: (string| number)[] = ['xiaojie', 78, 'teacher']
// 元组
const xiaojiejieess: [string, string, number] = ['dajiao', 'teacher', 45]

const dajiejiea: [string, string, number][] = [
    ['da', 'da', 234],
    ['da', 'da', 234],
    ['da', 'da', 234],
    ['da', 'da', 234],
]

const screenResume = (name: string, age: number, bust: number) => {
    age< 24 && bust >= 90 && console.log(name + '进入面试');
    age>24 || (bust < 90 && console.log(name + '你被淘汰'))
}
screenResume('大脚', 18, 94)

const getResume = (name: string, age: number, bust: number) => {
    console.log(name + '年龄是：' + age );
    console.log(name + '胸围是：' + bust);
}

getResume('dajiao', 16, 99)

interface Girl{
    name: string;
    age: number;
    bust: number;
}

const screenResumes = (girl: Girl) => {
    girl.age < 24 && girl.bust >=90 && console.log(girl.name + 'J进去面试');
    girl.age > 24 || (girl.bust < 90 && console.log(girl.name + '你被淘汰'));
}

// 类型别名可以直接给类型， 比如String, 而接口必须代表对象
type Girl1 =string;

const girlZ = {
    name: '大师',
    age: 18,
    bust: 456,
}

interface Girls{
    name: string,
    age: string,
    bust: number,
    waistline?:number
}

const getResumeaaa = (girl: Girls) => {
    console.log(girl.name + '年龄是' + girl.age);
    console.log(girl.name + '身高是' + girl.bust);
    girl.waistline && console.log(girl.name + '腰围是' + girl.waistline)
}

interface Girlss {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
    [propname: string]: any;
}

const girla = {
    name: '大脚',
    age: 18,
    bust: 104,
    waistline: 21,
    sex: '女'
}

const getResumeResume = (girla: Girlss) => {
    console.log(girla.name + '年龄是' + girla.age);
    console.log(girla.name + '腿长是' + girla.bust);
    girla.waistline && console.log(girla.name + '腰围是' + girla.waistline);
    girla.sex && console.log(girla.name + '性别是' + girla.sex);
    
}

// [propname: string]:any;

interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline?:number;
    [propname: string]:any;
    say(): string;
}



const girlaa = {
    name: 'dajiao',
    age: 18,
    bust: 105,
    waistline: 456,
    sex: 'nv',
    say() {
        return 'sfsad'
    },
    teach() {
        return 'asfdasd'
    }
}

class LadyS {
    content="hi ,shuiage";
    sayHello() {
        return this.content
    }
}

const goddess = new LadyS();
console.log(goddess.sayHello);

class XiaojiejieZ extends LadyS {
    sayLove() {
        return 't love you'
    }
}

const goddesss = new XiaojiejieZ();
console.log(goddesss.sayHello());
console.log(goddesss.sayLove());

class AXiaojiejie extends LadyS {
    sayLove() {
        return 'l love you';
    }
    sayHello() {
        return 'hi, honey!'
    }
}

class AAXiaojiejie extends LadyS {
    sayLove() {
        return 'l love you'
    }
    sayHello() {
        return super.sayHello() + '.nihao'
    }
}


class APersonZ {
    name: string | undefined;
}

const personZ = new APersonZ();
personZ.name = "jspang.com";

console.log(personZ.name);



