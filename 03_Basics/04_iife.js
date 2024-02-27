// Immediately Invoked Functions Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})(); // semicolon is necessary to run code otherwise it will through error

( function aurcode(){
    console.log(`DB CONNECTED TWO`);
})(); // for writing two iife

( () => {
    console.log(`DB CONNECTED THREE`);
})();

( (name) => {
    console.log(`DB CONNECTED FOUR ${name}`);
})("Jay")
// how to push a code