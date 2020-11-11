// JS-02 homeowork;
/* date: 01.11.20;
student: Giorgi Gogichaishvili;
*/


// 1) გამოაცხადეთ მასივი.
// იპოვეთ მასივის ყველა იმ რიცხვის ჯამი რომელიც 5-ის ჯერადიცაა და კენტიც.


// let arr = [2, 33, 15, 20, 45, 90, 5, 17, 50, 75, 65, 25, 6, 105, 10];

// let sum = 0;

// for (let i = 0; i < arr.length; i++ ) {
//     if (arr[i] % 5 == 0 && arr[i] % 2 !== 0) {
        // if (arr[i] % 10 == 0) {
//         sum = sum + arr[i];
//     }
// } 
// console.log(sum);

// გაქვთ მასივი რომლის ყველა წევრი არის წინა ორი წევრის ჯამი. 
// (მაგალითისთვის [2,3,5,8,13,21]) ბოლოში დაამატეთ შესაბამისი ახალი ელემენტი 
// რომელსაც თქვენი დაწერილი პროგრამა თვითონ გამოიანგარიშებს ისე რომ გააგრძელოს ეს კანონზომიერება.


// let arr = [2, 3, 5, 8, 13, 21];

// arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
// console.log(arr);

// გაქვთ 3 გვერდი a,b და c. შეამოწმეთ ამ გვერდებისგან შედგენილი სამკუთხედი მართია თუ არა. 
// თუ მართია დაბეჭდეთ "მართია", თუ არა დაბეჭდეთ "არ არის მართი"

// let a = 3;
// let b = 4;
// let c = 5;

// if(a*a == b*b + c*c) {
//     console.log("მართია");
// } else if(b*b == a*a + c*c) {
//     console.log("მართია");
// } else if(c*c == a*a + b*b){
// console.log("მართია"); 
// } else {
//     console.log("არ არის მართი")
// }

/*

გაქვთ 3 გვერდი a,b და c. შეამოწმეთ ამ გვერდებისგან შედგენილი სამკუთხედი მართია თუ არა. 
თუ მართია დაბეჭდეთ "მართია", თუ არა დაბეჭდეთ "არ არის მართი"

let a = 3;
let b = 4;
let c = 5;

if(a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b) {
    console.log("მართია");
} else {
    console.log("არ არის მართი")
} */

// let მანქანა = {
// მარკა: "აუდი",
// ფერი: "თეთრი",
// მოდელი: "A4",
// გამოშვებიწელი: 2019,
// ცხენისძალა : 190,
// ფასი : '20 000 $'
// }
// console.log('ამ მანქანას აქვს შემდეგი მახასიათებლები {მანქანა}');

// let arr = [2, 3, 7, 9];


// console.log(i);

// let target = undefined;
// let target2 = null;

// if(target) {
//     console.log("this is truthy value")
// } else {
//     console.log("this is falsy value");
// }



// გამოაცხადეთ მასივი (მიანიჭეთ მნიშვნელობებიც) და დაბეჭდეთ ტექსტი : 
// "მასივის პირველი ელემენტი არის: " 
// და შემდეგ დაბეჭდეთ მასივის პირველი ელემენტი.

// let arr = ["სახელი", 5, "USA", "RHCP", 44, "1CF2"];

// let firstIndex = arr[0];

// console.log(`"მასივის პირველი ელემენტი არის - ${firstIndex}"`);

// გამოაცხადეთ მასივი (მიანიჭეთ მნიშვნელობებიც) 
// დაბეჭდეთ მასივის შუა ელემენტის ინდექსიც და ელემენტიც თვითონ.

// let arr = [2, 5, 21, 44, 01, 51, "USA"];

// let middleElement = arr[Math.round((arr.length-1)/2)];

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == middleElement) {
//     middleIndex = i;
//     }
// }

// console.log(middleIndex);
// console.log(middleElement);

// let arr = [2, 5, 21, 44, 01, 51, "USA"];

// let middleElement = arr[Math.round((arr.length-1)/2)];
// let middleIndex = Math.round((arr.length-1)/2);
// let i = middleIndex;

// console.log(${middleIndex});
// console.log(middleElement);


// let arr = [2, 5, 21, 44, 01, 51, "USA"];

// let middleElement = arr[Math.round((arr.length-1)/2)];
// let i = Math.round((arr.length-1)/2);

// console.log(i);
// console.log(middleElement);


// let arr = [2, 5, 21, 44, 01, 51, "USA"];

// let middleIndex = Math.round((arr.length-1)/2);
// let middleElement = arr[middleIndex];

// console.log(middleIndex);
// console.log(middleElement);

// ამოვაცხადოთ მასივი.
// ვიპოვოთ მასივის ყველა 3-ის ჯერადი რიცხვის ნამრავლი.

// let arr = [3, 6, 9, 15, 2, 7, 8, 13, 99, 51, 74, 100, 98];
// let multiplication = 1;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] %  3 == 0) {
//         multiplication = multiplication * arr[i];
//     }
// }  
// console.log(multiplication);


// 5) (კლასში დაწყებული ამოცანა დაასრულეთ)
// გამოვაცხადოთ მასივი.
// შემოვიტანოთ კიდევ 2 დამატებითი ცარიელი მასივი, 
// ერთი ლუწების და მ2 კენტების. 
// ძირითადი მასივიდან ლუწი რიცხვები დავამატოთ ლუწების მასივშ. 
// ხოლო კენტი რიცხვები კენტების მასივში.

// let arr = [3,4,6,9,1,17,19,77,101,44,32,33,12,55,72,89];

// let even1 = [];
// let odd1 = [];

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         even1.push(arr[i]);
//     } else {
//         odd1.push(arr[i]);
//     }
// }
//  console.log(arr);
//  console.log(even1);
//  console.log(odd1);
 
// 6) გამოვაცხადოთ მასივი,
// ყველა კენტ პოზიციაზე მდგომი ელემენტი გავაორმაგოთ.


// let arr = [1, 3, 9, 11, 4, 5, 12, 30, 7, 19, 6];

// for (let i = 0; i < arr.length; i++) {
//       if((i + 1) % 2 !==0) {
//           arr[i] = 2*arr[i];
//       }
//     }
//     console.log(arr);


    // let price = 12;

    // price = price % 5;
    // price += 5;

    // console.log(price);

    // let price = 1.3 + 1.1;

    // console.log(price);

    // let message = "Hello";
    // message = message + " world";
    // message = message.toLowerCase();
    // message = message.substring(1);
    // console.log(message);

    // let message = "123";
    // console.log(typeof message);
    // console.log(message + 2);

    // let number = 123;
    // number = number.toString();
    // console.log(typeof number);


    // let amount = "123.14";
    //  let amount = "A123.14";
    // let amount = "123.14A";
    //  amount = Number.parseFloat("123.14A");

    // console.log(amount);
    // console.log(typeof amount);

    // let saved = !true;
    // console.log(saved);
    // console.log(typeof saved);


    // let arr = [5, 99, 2, 4, 8, 45, 32, 40, 90, 88, 21, 33, 77, 52, 44];

    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] % 2 == 0) {
    //         arr[i] = arr[i]+1;
    //     }
    // }
    // console.log(arr);

    let car1 = {
        producer: `Audi`,
        color: `white`,
        model: `A4`,
        yearOfProduction: 2008,
        horsePower: 220,
        price: 5000,
    };
    
    // console.log(`"this car has following properties: 
    // producer - ${car.producer},
    // color - ${car.color},
    // model - ${car.model},
    // year of production - ${car.yearOfProduction},
    // horse power - ${car.horsePower},
    // price - ${car.price}".`); 
    
    let car2 = {
        producer: `BMW`,
        color: `black`,
        model: 323,
        yearOfProduction: 2008,
        horsePower: 220,
        price: 6000,
    };
    
    let car3 = {
        producer: `Mercedes`,
        color: `green`,
        model: `C-class`,
        yearOfProduction: 2012,
        horsePower: 220,
        price: 10000,
    };
    
    let car4 = {
        producer: `Tesla`,
        color: `silver`,
        model: `model 3`,
        yearOfProduction: 2018,
        horsePower: 150,
        price: 20000,
    };
      
    let car5 = {
        producer: `Toyota`,
        color: `red`,
        model: `RAV-4`,
        yearOfProduction: 2018,
        horsePower: 200,
        price: 30000,
    };
    
           
            let cars = [];
    
            cars.push(car1);
            cars.push(car2);
            cars.push(car3);
            cars.push(car4);
            cars.push(car5);
    
            // console.log(cars);
            // console.log(cars[0].model);
    
            for(i=0; i < cars.length; i++) {
                if(cars[i].price < 15000) {
                    console.log(cars[i].producer + "; " + cars[i].model);
                } else {
                    console.log(`სამწუხაროდ ამ ფასში მანქანას ვერ შეიძენთ :(`)
                }
            }
            
            // console.log(cars[0].price);

    