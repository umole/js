/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/
const billTotalInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
let numberOfPeople = document.getElementById("numberOfPeople")
let perPersonTotal = document.getElementById("perPersonTotal")
// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div



// Get number of people from number of people div
let peopleNumber = Number(numberOfPeople.innerText)


// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const billTotal = Number(billTotalInput.value)
  
  // get the tip from user & convert it into a percentage (divide by 100)
  const tip = Number(tipInput.value) / 100

  // get the total tip amount
  const tipAmount = billTotal * tip

  // calculate the total (tip amount + bill)
  const totalBill = tipAmount + billTotal

  // calculate the per person total (total divided by number of people)
  const totalAmountPerPerson = totalBill / peopleNumber

  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText = `$${totalAmountPerPerson.toFixed(2)}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  peopleNumber += 1

  // update the DOM with the new number of people
  numberOfPeople.innerText = peopleNumber

  // calculate the bill based on the new number of people
  calculateBill()

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (peopleNumber > 1) {
    peopleNumber -= 1
    numberOfPeople.innerText = peopleNumber
  }
  calculateBill()
  
  // decrement the amount of people


  // update the DOM with the new number of people


  // calculate the bill based on the new number of people

}