// *** 1. convert radian to degree ***

function radianToDegree(rad) {
    //Showing Error Alert!
    if(typeof(rad) === "string" || typeof(rad) === "undefined" ){
      return "Please Provide a Number!!";
  } else {
      const getDegree = rad * (180 / 3.1416);
      return Number.parseFloat(getDegree).toFixed(2);
      
    }  
  }
  
  const inputRadian = radianToDegree(5);
  console.log(inputRadian);
  
  // *** 2. check whether the given file name is a javascript or not ***
  
  function isJavaScriptFile(file) {
    //Showing Error Alert!
    if (typeof(file) === "number") {
      return "Please enter String";
    } else if (file.endsWith(".js")) {
      return true;
    } else {
      return false;
    }
  }
  
  const inputFile = isJavaScriptFile("str.js");
  console.log(inputFile);
  
  /*
  
  3. Calculate the total oil price that I have to Pay
  
  diesel ---> 114
  petrol ---> 130
  octane ---> 135
  
  */
  
  function oilPrice(oil1, oil2, oil3) {
    //Showing Error Alert!
    if(typeof(oil1) === "string" || typeof(oil2) === "string" || typeof(oil3) === "string" ) {
      return "Please, Input a Number";
    } else {
      const diesel = 114 * oil1;
      const petrol = 130 * oil2;
      const octane = 135 * oil3;
      const totalPrice = diesel + petrol + octane;
    
      return totalPrice;
  
    }
  
  }
  
  const inputOilPrice = oilPrice(2, 20, 10);
  console.log(inputOilPrice);
  
  /* 4.
  
  reserved bus ---> 50
  micro bus ---> 11
  rest people will go by public bus
  
  */
  
  function publicBusFare(allPeople) {
    //Showing Error Alert!
    if(typeof(allPeople) === "string"){
      return "Kindly, Input Number";
    } else {
      const publicBusRent = 250;
      const eachBusPeople = 50;
      const eachMicroBusPeople = 11;
      const remainMicroBusPeople = allPeople % eachBusPeople;
      const remainPublicBusPeople = remainMicroBusPeople % eachMicroBusPeople;
      const publicBusPeopleTicketPrice = remainPublicBusPeople * publicBusRent;
  
      return publicBusPeopleTicketPrice;
  
    }
    
  }
  
  const inputPeople = publicBusFare(3);
  console.log(inputPeople);
  
  /*
  5. There are best friend. find a value with boolean
  */
  
  function isBestFriend(inputName1, inputName2) {
    //Showing Error Alert!
    if (typeof(inputName1) !== "object" || typeof(inputName2) !== "object"){
      return "Please input an object";
    } else if (inputName1.name === inputName2.friend && inputName2.name === inputName1.friend) {
      return true;
    } else {
      return false;
    }
      
  }
  
  const obj1 = { name: "abdul", friend: "rock" };
  const obj2 = { name: "rock", friend: "abdul" };
  
  
  let inputName = isBestFriend(obj1, obj2);
  console.log(inputName);
  