/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
 
  if (
    !["small","medium","large"].includes(size) || 
    !["regular", "latte","cappuccino","mocha"].includes(type)){
    return -1
  }
  let extraco = 0;
  if(extras.whippedCream) extraco = extraco+0.5;
  if(extras.extraShot) extraco = extraco + 0.75;

  let sizepr = 0;
  let typer = 0;
  switch(size){
    case("small"): sizepr =  3.00; break;
    case("medium"):sizepr =4.00; break;
    case("large"): sizepr =5.00; break;
  }
  

  switch(type){
    case("regular"):typer =  0.00; break;
    case("latte"):typer = 1.00; break;
    case("cappuccino"): typer = 1.50; break;
    case("mocha"):typer = 2.00; break;
  }


  let total = extraco+sizepr+typer;
  return Math.round(total*100)/100
}





