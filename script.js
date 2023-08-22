// Define a function to handle showing train details
function showDetails(trainName) {
    // Redirect to the "single-train-details.html" page with the selected train name
    window.location.href = `single-train-details.html?train=${encodeURIComponent(trainName)}`;
}
// Define a function to handle booking a train
function bookTrain(trainName) {
    const selectedClass = document.querySelector('.class-select').value;
    
    // You can add logic here to book the train with the selected class
    console.log(`Booking ${trainName} in ${selectedClass} class.`);
}
