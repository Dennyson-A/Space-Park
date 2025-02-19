document.addEventListener('DOMContentLoaded', function() {
    // Simulated parking details
    const parkingDetails = {
        name: 'City Center Parking',
        description: 'A spacious and secure parking facility with 24/7 access, located in the heart of the city.',
        location: 'https://www.google.com/maps?q=city+center+parking', // Link to the location
        image: 'https://via.placeholder.com/250', // Placeholder image URL (replace with actual image URL)
        priceDetails: [
            { vehicleType: 'Car', price: '$20 per hour' },
            { vehicleType: 'Bike', price: '$10 per hour' },
            { vehicleType: 'Truck', price: '$30 per hour' }
        ],
        totalSlots: 50,
        occupiedSlots: 20
    };

    // Get elements from the DOM
    const parkingNameElement = document.getElementById('parking-name');
    const parkingDescriptionElement = document.getElementById('parking-description');
    const parkingImageElement = document.getElementById('parking-image');
    const priceDetailsElement = document.getElementById('price-details');
    const availableSlotsElement = document.getElementById('available-slots');
    const occupiedSlotsElement = document.getElementById('occupied-slots');
    const viewLocationButton = document.getElementById('view-location');
    const bookingForm = document.getElementById('booking-form');
    const vehicleNumberInput = document.getElementById('vehicle-number');
    const ownerNameInput = document.getElementById('owner-name');

    // Set parking details
    parkingNameElement.textContent = parkingDetails.name;
    parkingDescriptionElement.textContent = parkingDetails.description;
    parkingImageElement.src = parkingDetails.image;
    availableSlotsElement.textContent = parkingDetails.totalSlots - parkingDetails.occupiedSlots;
    occupiedSlotsElement.textContent = parkingDetails.occupiedSlots;

    // Populate price table
    parkingDetails.priceDetails.forEach(price => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${price.vehicleType}</td>
            <td>${price.price}</td>
        `;
        priceDetailsElement.appendChild(row);
    });

    // View location button functionality
    viewLocationButton.addEventListener('click', function() {
        window.open(parkingDetails.location, '_blank');
    });

    // Handle form submission
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        const vehicleNumber = vehicleNumberInput.value.trim();
        const ownerName = ownerNameInput.value.trim();

        if (vehicleNumber === '' || ownerName === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Update the number of occupied slots
        parkingDetails.occupiedSlots += 1;
        occupiedSlotsElement.textContent = parkingDetails.occupiedSlots;

        // Show confirmation
        alert(`Booking confirmed for vehicle ${vehicleNumber}. Thank you, ${ownerName}!`);

        // Clear the form
        bookingForm.reset();
    });
});
