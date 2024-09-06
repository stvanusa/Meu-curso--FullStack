document.getElementById('search').addEventListener('input', function(event) {
    let query = event.target.value.toLowerCase();
    let cars = document.querySelectorAll('.car-card');

    cars.forEach(function(car) {
        let title = car.querySelector('h3 a').textContent.toLowerCase();
        if (title.includes(query)) {
            car.style.display = '';
        } else {
            car.style.display = 'none';
        }
    });
});
