// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Kunal"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regulator = {
    email: "jsja@gmail.com",
    fullname: {
        userfulllname: {
         firstname: "Jay",
         lastname: "Sonwane"
       }
    }
    
}
// console.log(regulator.fullname.userfulllname.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 = { obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} // mostly use syntax
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        upi: "adn@upi"
    },
    {
    },
    {
    }
]

// console.log(user);



user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ************ Distructure ************** //

const course = {
    courrsename: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// couse.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseinstructor);
console.log(instructor);

// const navbar = ({company}) => {
                                    // react 
// }
// (navbar(company = "Hitesh"));


// {
//     "name": "Jay",
//     "coursename": "js in hindi",         //json format
//     "price": "free"
// }