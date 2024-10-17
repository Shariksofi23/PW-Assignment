// Function to calculate estimated delivery time based on package type
function calculateDeliveryTime(packageType) {
    let deliveryTime;

    // Use a switch statement to determine the delivery time
    switch (packageType.toLowerCase()) {
        case 'standard':
            deliveryTime = '3-5 days';
            break;
        case 'express':
            deliveryTime = '1-2 days';
            break;
        case 'overnight':
            deliveryTime = 'Next day';
            break;
        default:
            deliveryTime = 'Invalid package type';
            break;
    }

    // Return the estimated delivery time
    return deliveryTime;
}

// Test cases
const packageTypes = ['standard', 'express', 'overnight', 'invalid'];

// Running the tests
packageTypes.forEach((packageType) => {
    const deliveryTime = calculateDeliveryTime(packageType);
    console.log(`Package Type: ${packageType}, Estimated Delivery Time: ${deliveryTime}`);
});