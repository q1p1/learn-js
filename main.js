/*
Logical Operators
! => not 
&& => and 
    || => or 

    Example :
    console.log(!true); => false
    It means a sign! It is equal to the inverse of the result 
     if true becomes false and vice versa
*/
console.log(!(10 == 10)); // => false
/*
To add two conditions together, we use && to mean and
All existing conditions must be implemented
Example:
console.log(10 == "10" && 10 > 5)
*/
console.log(10 == "10" && 10 > 5); // => true

/*
If he comes || Or means that it is sufficient if one condition is implemented,
 but all conditions must be implemented
 Example :
 consol.log(10 == 10 || 5 < 10 )
*/
console.log(10 == 10 || 5 < 10); // => true
