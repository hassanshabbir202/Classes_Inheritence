// class PersonAccount {
//     constructor (fname, lname, expencesProp, ttIncome, addIncome, addExpense, accountBalance) {
//     this.fname = "First Name : " + fname;
//     this.lname = "Last Name : " + lname;
//     this.expencesProp = expencesProp;
//     this.income = [];
//     this.income.push({myIncome : "100000",des : "remaining Balance 10,000"});
//     this.ttIncome = ttIncome;
//     this.addIncome = addIncome;
//     this.addExpense = addExpense;
//     this.accountBalance = accountBalance;
//     }
// }
// var getData = new PersonAccount("Hassan","Shabbir","50,000","100000","40,000","90,000","10,000",this.income);
// console.log(getData);



// class AutoMobile {
//     constructor (name,model,color,type , x , y) {
//         this.name = name;
//         this.model = model;
//         this.color = color;
//         this.type = type;
//         this.move(x,y);
//     }
//     move(x,y){
//         this.x = x;
//         this.y = y;
//     }
// }
// var automob = new AutoMobile("AutoMobile","1999","red","automatic",70,30);
// console.log(automob);


// class Car extends AutoMobile {
//     constructor (name,model,color,type,x,y, height , width) {
//       super(name,model,color,type,x,y)
//         this.height = height
//         this.width = width;
//     }
// }

// var car = new Car("Mehran",2000,"grey","maual",8,9,"300px","500px")
// console.log(car)


// class Truck extends AutoMobile {
//     constructor (name,model,color,type,x,y, height , width) {
//       super(name,model,color,type,x,y)
//         this.height = height
//         this.width = width;
//     }
// }

// var truck = new Truck("Truck",1998,"orange","maual",12,5,"1000px","700px")
// console.log(truck)



// class Bus extends AutoMobile {
//     constructor (name,model,color,type,x,y, height , width) {
//       super(name,model,color,type,x,y)
//         this.height = height
//         this.width = width;
//     }
// }

// var bus = new Bus("NBus",1995,"red","maual",10,15,"1000px","800px")
// console.log(bus)



var obj1 = {
    id : 0
}

var obj2 = {
    id : 1
}

var output = {...obj1,...obj2}
console.log(output)