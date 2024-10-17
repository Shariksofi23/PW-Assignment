function calculateTax(income) {
    // Define tax brackets and rates
    const taxBrackets = [
        { limit: 10000, rate: 0.1 },   // 10% for income up to $10,000
        { limit: 30000, rate: 0.15 },  // 15% for income between $10,001 and $30,000
        { limit: 100000, rate: 0.2 },  // 20% for income between $30,001 and $100,000
        { limit: Infinity, rate: 0.25 } // 25% for income above $100,000
    ];

    // Closure to calculate tax based on income
    return function() {
        let tax = 0;
        let previousLimit = 0;

        for (const bracket of taxBrackets) {
            if (income > previousLimit) {
                const taxableIncome = Math.min(income, bracket.limit) - previousLimit;
                tax += taxableIncome * bracket.rate;
                previousLimit = bracket.limit;
            } else {
                break;
            }
        }
        return tax;
    }();
}

// Testing the function with various incomes
console.log(calculateTax(5000));    // Expected output: 500 (10% of $5000)
console.log(calculateTax(15000));   // Expected output: 750 (10% of $10000 + 15% of $5000)
console.log(calculateTax(50000));   // Expected output: 6750 (10% of $10000 + 15% of $20000 + 20% of $20000)
console.log(calculateTax(120000));  // Expected output: 24500 (10% of $10000 + 15% of $20000 + 20% of $70000 + 25% of $20000)