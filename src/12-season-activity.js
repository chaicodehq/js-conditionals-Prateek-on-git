/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temperature < 0     → "skiing"
 *   - Winter + temperature >= 0    → "ice skating"
 *   - Spring + temperature > 20    → "hiking"
 *   - Spring + temperature <= 20   → "museum visit"
 *   - Summer + temperature > 35    → "swimming"
 *   - Summer + temperature <= 35   → "cycling"
 *   - Autumn + temperature > 15    → "nature walk"
 *   - Autumn + temperature <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here

  if (month<1 || month>12){
    return null
  }

  const config = {
    Winter: {
      months: [12, 1, 2],
      activity: (t) => (t < 0 ? "skiing" : "ice skating")
    },
    Spring: {
      months: [3, 4, 5],
      activity: (t) => (t > 20 ? "hiking" : "museum visit")
    },
    Summer: {
      months: [6, 7, 8],
      activity: (t) => (t > 35 ? "swimming" : "cycling")
    },
    Autumn: {
      months: [9, 10, 11],
      activity: (t) => (t > 15 ? "nature walk" : "reading at a cafe")
    }
  };

  const season = Object.keys(config).find(key =>
    config[key].months.includes(month)
  );

  return {
    season,
    activity: config[season].activity(temperature)
  };


}
