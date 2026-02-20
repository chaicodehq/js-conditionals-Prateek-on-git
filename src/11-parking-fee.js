/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial roundedhrs are rounded UP (e.g., 1.5 roundedhrs → 2 roundedhrs)
 *   - The fee should never exceed the daily maximum
 *   - If roundedhrs is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5      
 *      hrs = 20,
 *     expectFee =  min + (hrs-1)*fixed charge
 *      if DM>expect fee
 *      ret DM Fee
 *      else expect fee
 * 
 * 
 *   - car, 3 roundedhrs    → $5 + $3 + $3 = $11
 *   - car, 0.5 roundedhrs  → rounds up to 1 hour → $5
 *   - car, 24 roundedhrs   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} roundedhrs - Number of roundedhrs parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // Your code here

 const roundedhrs = Math.ceil(hours)
  let car, motorcycle,bus
  const firstHourrate = {
    car: 5,
    motorcycle: 3,
    bus: 10
  }

  const dailyMaxfee ={
    car: 30,
    motorcycle: 18,
    bus: 60
  }

  if(roundedhrs<=0 || (vehicleType !== "car" &&
    vehicleType !== "motorcycle" && vehicleType !== "bus")){
      return -1
    }

    else if(vehicleType =="car"){
      let expectFee = 5 + (roundedhrs-1)*3
      if(expectFee>30){
        return 30
      }else return expectFee
    }


    else if(vehicleType =="motorcycle"){
      let expectFee = 3 + (roundedhrs-1)*2
      if(expectFee>18){
        return 18
      }else return expectFee
    }


    else if(vehicleType =="bus"){
      let expectFee = 10 + (roundedhrs-1)*7
      if(expectFee>60){
        return 60
      }else return expectFee
    }

}
