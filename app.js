// 11 Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.

// Input: const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// const products = [
//      { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//      { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//      { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//      { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//      { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//    ].map((Product) => {
//      return {...Product,
//           discoundPrice: (Product.price - (Product.price/100) * Product.discount) *Product.quantity
//      }
//    }).reduce((acc, curVal) => {
//      acc+=curVal.discoundPrice
//      return acc
//    },0);
   
//    console.log(products);

// 12 Objectning kalitlaridan va qiymatlaridan iborat bo'lgan massiv tuzing.

// Input: const obj = {
//   "it": 20,
//   "mushuk": 10,
//   "sigir": 200,
//   "tovuq": 2
// }
// Output: ["it", 20, "mushuk", 10, "sigir", 200, "tovuq", 2]
// let arr = [];
// let obj = {
//      "it": 20,
//      "mushuk": 10,
//      "sigir": 200,
//      "tovuq": 2
// };
// let key = Object.keys(obj)
// let value = Object.values(obj)
// for (let i=0; i< key.length; i++){
//      arr.push(key[i]);
//      arr.push(value[i]);
// }
// console.log(arr);

// 13 GPA ni hisoblovchi dastur tuzing. 

// GPA = (grade1 * kredit1 + grade2 * kredit2 + ...) / (kredit1 + kredit2 + ...)

// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },	
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];
// let Fizika = 0
// let Matematika = 0
// let Tarix = 0
// let Dasturlash = 0
// let Kibrxavfsizlik = 0
// let sum = 0
// let hammas = 0
// const grades = [
//      { name: "Fizika", grade: 4, kredit: 6 },
//      { name: "Matematika", grade: 5, kredit: 6 },
//      { name: "Tarix", grade: 4, kredit: 4 },	
//      { name: "Dasturlash", grade: 5, kredit: 8 },
//      { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
//    ];
//    for (let i=0; i<grades.length;i++){
//     sum+=grades[i].kredit
//     if(grades[i].name==="Fizika"){
//       Fizika+=grades[i].grade*grades[i].kredit
//     } else if (grades[i].name==="Matematika"){
//       Matematika+=grades[i].grade*grades[i].kredit
//     } else if(grades[i].name==="Tarix"){
//       Tarix+=grades[i].grade*grades[i].kredit
//     } else if(grades[i].name==="Dasturlash"){
//       Dasturlash+=grades[i].grade*grades[i].kredit
//     } else if (grades.name==="Kibrxavfsizlik"){
//       Kibrxavfsizlik+=grades[i].grade*grades[i].kredit
//     }
//    }
//    hammas+=Fizika+Matematika+Tarix+Dasturlash+Kibrxavfsizlik
//    console.log(hammas/sum);

// 14 const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };

// const myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};
// for (let)
// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: "D", 9: "A", 10: "B" };
// const myAnswers = { 1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C" };
// function countCorrectAnswers(rightAnswers, myAnswers) {
//     let correctCount = 0;
//     for (let key in rightAnswers) { 
//         if (rightAnswers[key] === myAnswers[key]) { 
//             correctCount++; // To‘g‘ri javob bo‘lsa, hisobni oshiramiz
//         }
//     }
//     return correctCount;
// }
// const correctCount = countCorrectAnswers(rightAnswers, myAnswers);
// console.log("Togri javoblar soni:", correctCount);




//  16 Quyidagi obyektdan destructing orqali barcha qiymatlarini oling.

// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };

// const product = {
//      name: "Iphone 14",
//      company: {
//        name: "Apple",
//        price: "200 mlrd",
//        founder: {
//          firstName: "Steve",
//          lastName: "Jobs",
//          birthDate: 1950,
//        },
//      },
//    };
   
//    let [names, comp] = Object.values(product)
//    let [nameI, price, founder] = Object.values(comp)
//    let [firstName, lastName, birthDate] = Object.values(founder)
//    console.log(names);
//    console.log(birthDate);
//    console.log(firstName);
//    console.log(nameI);
//    console.log(price);
//    console.log(lastName);
// 17 Quyidagi massivdagi barcha o'quvchilarni protcentlarining o'rtacha qiymatini toping, shuningdek, objectlarga quyidagi propertylarni qo'shib yangi massiv qaytaring.
// let sum = 0
// const students = [
//      { name: "Ali", percent: 80 },
//      { name: "Vali", percent: 90 },
//      { name: "Hasan", percent: 70 },
//      { name: "Husan", percent: 85 }
//    ];
//    for (let i=0; i<students.length; i++){
//     sum+=students[i].percent
//    }
//   console.log(sum/students.length);

// 18grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.
// let sum = 0
// let tort = 0
// let uch = 0
// const students = [
//      { name: "Ali", percent: 80 },
//      { name: "Vali", percent: 90 },
//      { name: "Hasan", percent: 70 },
//      { name: "Husan", percent: 85 }
//    ];
//    for (let i=0; i<students.length; i++){
//       if(students[i].percent>=90&&students[i].percent<=100){
//         sum++
//       } else if (students[i].percent>=80&&students[i].percent<=90){
//         tort++
//       } else if (students[i].percent>=70&&students[i].percent<=80) {
//         uch++
//       }
//    }
//    console.log(`"ta" ${sum} "besh", "ta" ${tort} "tort" "ta" ${uch}"uch"`);

// 19

// const students = [
//      { name: "Ali", percent: 80 },
//      { name: "Vali", percent: 90 },
//      { name: "Hasan", percent: 11 },
//      { name: "Husan", percent: 85 }
//    ];
//    for (let i=0; i<=students.length-1; i++){
//      if(students[i].percent>=70){
//          students[i].isPaced = true
//      }else{
//           students[i].isPaced=false
//      }
//    }
//    console.log(students);


//  20 Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang.

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
// let sum  = 0
// let ot = 0
// const pupils = [
//      { name: "Elbek", protcent: 95 },
//      { name: "Zafar", protcent: 78 },
//      { name: "Aziz", protcent: 83 },
//      { name: "Jasur", protcent: 88 }
//    ];
//    for (let i = 0; i < pupils.length; i++) {
//      if (pupils[i].protcent >= 85) {
//       sum++
//      } else{
//       ot++
//      }
//    }
//    console.log(`"ota odi ${sum}, "ota olmadi ${ot}`);
   