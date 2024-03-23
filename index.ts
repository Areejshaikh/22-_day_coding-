console.log(" Day 22 Challenge:");
// Question 64:
// function text and number
 function combination(text: string , number: number): string {
// Joins the text and number into a single text
    return text + number;
 }
 console.log(combination("Age: ", 30));
 

  // Question 65:
  //creat function
   function reminderNumber(Num1:number,Num2:number) : number{
    return Num1 % Num2;
    
  }

  console.log(reminderNumber(5,4)); // return leftover, number

  //Question 66:

  
//   both inputs are true
  function checkBothTrue(value1: boolean , value2: boolean) :boolean {
    return  value1 && value2; //all values are true output is true
  }
console.log(checkBothTrue(true , false));
//any one value is false return false