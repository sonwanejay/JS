const myObject = {
    js: 'javascrip',
    cpp: 'c++',
    rb: 'ruby',
    swift: ' swift by apple'
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('UN', "United Nation")
// map.set('FR', "France")
// map.set('CN', "China")

// for (const key in map) {
//     console.log(key);
        
// }  // map is not iterable error but wount show up // iteration can not be done on map

