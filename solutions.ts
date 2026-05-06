const filterEvenNumbers = (numsArr: number[]): number[] => {
  const evenArray = numsArr.filter((num) => num % 2 === 0);

  return evenArray;
};


const reverseString = (str: string): string => {
  const reverseString = str.split("").reverse().join("");

  return reverseString;
};


type StringOrNumber = string | number;

const checkType =(prop:StringOrNumber): string=>{
    if (typeof prop  ===  "string") {
        return "String";
    } else {
        return "Number"
    }
}


const getProperty = <T, K extends keyof T>(obj: T, key: K) : T[K]=>{
    return obj[key];
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true
  };
};


class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string

    constructor (name:string, age:number, grade:string){
        super(name, age)
        this.grade = grade
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}


type arrayOfNumber = number[]

const getIntersection = (arr1: arrayOfNumber, arr2: arrayOfNumber): arrayOfNumber => {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(item => set2.has(item)))];
};