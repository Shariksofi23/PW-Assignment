const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1. Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log("Sorted ages:", ages);
console.log("Min age:", minAge);
console.log("Max age:", maxAge);

// 2. Find the median age
let medianAge;
const midIndex = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
    // If even, average of two middle numbers
    medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2;
} else {
    // If odd, middle number
    medianAge = ages[midIndex];
}

console.log("Median age:", medianAge);

// 3. Find the average age
const totalAge = ages.reduce((acc, age) => acc + age, 0);
const averageAge = totalAge / ages.length;

console.log("Average age:", averageAge);

// 4. Find the range of the ages
const ageRange = maxAge - minAge;

console.log("Range of ages:", ageRange);

// 5. Compare the value of (min - average) and (max - average)
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

console.log("Absolute difference (min - average):", minAverageDiff);
console.log("Absolute difference (max - average):", maxAverageDiff);