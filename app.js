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

// const grades = [
//      { name: "Fizika", grade: 4, kredit: 6 },
//      { name: "Matematika", grade: 5, kredit: 6 },
//      { name: "Tarix", grade: 4, kredit: 4 },	
//      { name: "Dasturlash", grade: 5, kredit: 8 },
//      { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
//    ];
   
//    function calculateGPA(grades) {
//        let totalWeightedGrades = 0;
//        let totalCredits = 0;
//        for (let i = 0; i < grades.length; i++) {
//            totalWeightedGrades += grades[i].grade * grades[i].kredit; 
//            totalCredits += grades[i].kredit; 
//        }
//        return totalWeightedGrades / totalCredits; 
//    }
//    const gpa = calculateGPA(grades);
//    console.log("GPA: ", gpa.toFixed(2));

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

// let obj2 = [];
// const obj = { a: 2, b: 3, c: 4, d: 6 };
// let values = Object.values(obj); 
// for (let i = 0; i < values.length; i++) { 
//     obj2.push(values[i] * 3);
// }
// console.log(obj2); 


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

// const students = [
//      { name: "Ali", percent: 80 },
//      { name: "Vali", percent: 90 },
//      { name: "Hasan", percent: 70 },
//      { name: "Husan", percent: 85 }
//    ];
//    const avgPercent =
//      students.reduce((sum, student) => sum + student.percent, 0) / students.length;
//    const updatedStudents = students.map(student => {
//      return {
//        ...student,
//        status: student.percent >= 80 ? "Passed" : "Failed",
//        bonus: student.percent >= 90 ? student.percent + 5 : student.percent
//      };
//    });
//    console.log("O'rtacha foiz:", avgPercent);
//    console.log("Yangi massiv:", updatedStudents);

// 18
// const students = [
//      { name: "Ali", percent: 80 },
//      { name: "Vali", percent: 90 },
//      { name: "Hasan", percent: 70 },
//      { name: "Husan", percent: 85 }
//    ];
//    const avgPercent =
//      students.reduce((sum, student) => sum + student.percent, 0) / students.length;
//    const updatedStudents = students.map(student => {
//      return {
//        ...student,
//        status: student.percent >= 80 ? "Passed" : "Failed",
//        bonus: student.percent >= 90 ? student.percent + 5 : student.percent,
//        grade: student.percent >= 90 ? 5 :
//               student.percent >= 80 ? 4 :
//               student.percent >= 70 ? 3 : 2
//      };
//    });
//    console.log("O'rtacha foiz:", avgPercent);
//    console.log("Yangi massiv:", updatedStudents);

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

// const pupils = [
//      { name: "Elbek", protcent: 95 },
//      { name: "Zafar", protcent: 78 },
//      { name: "Aziz", protcent: 83 },
//      { name: "Jasur", protcent: 88 }
//    ];
//    for (let i = 0; i < pupils.length; i++) {
//      if (pupils[i].protcent >= 85) {
//        console.log(pupils[i].name, pupils[i].protcent);
//      }
//    }