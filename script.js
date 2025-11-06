// Scheduling Form Submission
document.getElementById('scheduleForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const service = document.getElementById('service').value;
    if (name && email && date && service) {
        alert(`Appointment booked for ${name} on ${date} for ${service}. We'll email you at ${email}.`);
        // In production, send to backend
    } else {
        alert('Please fill all fields.');
    }
});

// Quote Form Submission
document.getElementById('quoteForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const vehicle = document.getElementById('vehicle').value;
    const accessories = document.getElementById('accessories').value;
    if (name && email && vehicle && accessories) {
        alert(`Quote request sent for ${name}. We'll email you at ${email} soon.`);
        // In production, send to backend
    } else {
        alert('Please fill all fields.');
    }
});