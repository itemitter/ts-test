// 泛型中的继承

interface Girl{
    name: string;
}
class SelectGirl<T extends Girl> {
    constructor(private girls: T[]){}
    getGirl(index: number): string {
        return this.girls[index].name
    }
}
const selectGirl = new SelectGirl([
    {name: 'dajiao'},
    {name: 'liuying'},
    {name: 'xioahong'}
])

// 泛型约束

class SelectGirls<T>{
    constructor(private girls: T[]){}
    getGirl(index: number): T {
        return this.girls[index];
    }
}
const selectGirls = new SelectGirls<string>(['dajioa', 'sadf'])
console.log(selectGirls.getGirl(0));

class SelectGirla< T extends number |string> {}