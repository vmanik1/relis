// Дані про автомобілі (можна замінити на API або базу даних)
const cars = [
    {
        id: 1,
        brand: 'BMW',
        model: 'X5',
        year: 2023,
        price: 65000,
        image: 'https://aktivist.in.ua/wp-content/uploads/2022/08/obnovljonnyj-bmw-x5-m-2023-avto-novosti-7ea7d97.jpg',
        description: 'Розкішний позашляховик з повним приводом, шкіряний салон, панорамний дах',
        specifications: {
            engine: {
                type: 'Бензиновий з турбонаддувом',
                volume: '3.0 л',
                power: '340 к.с.',
                torque: '450 Нм',
                acceleration: '5.5 сек до 100 км/год',
                fuelConsumption: '8.5 л/100 км'
            },
            transmission: {
                type: '8-ступінчата автоматична',
                driveType: 'Повний привід xDrive'
            },
            dimensions: {
                length: '4922 мм',
                width: '2004 мм',
                height: '1745 мм',
                wheelbase: '2975 мм',
                weight: '2135 кг'
            },
            interior: {
                seats: '5 місць',
                trunk: '650 л',
                upholstery: 'Шкіра Vernasca',
                multimedia: 'BMW Live Cockpit Professional з 12.3" дисплеєм'
            },
            features: [
                'Адаптивна M-підвіска',
                'Панорамний дах Sky Lounge',
                'Система кругового огляду',
                'Асистент паркування Plus',
                'Лазерні фари BMW Laserlight',
                'Система навігації Professional',
                '4-зонний клімат-контроль',
                'Вентиляція та підігрів сидінь',
                'Преміум аудіосистема Harman/Kardon',
                'Система безключового доступу'
            ],
            safety: [
                'Система попередження про зіткнення',
                'Активний круїз-контроль',
                'Асистент утримання смуги руху',
                'Система моніторингу сліпих зон',
                'Система нічного бачення',
                'Система автоматичного гальмування'
            ],
            colors: {
                exterior: ['Alpine White', 'Carbon Black', 'Mineral White', 'Phytonic Blue'],
                interior: ['Black', 'Coffee', 'Cognac']
            },
            warranty: '3 роки або 100,000 км пробігу'
        },
        detailedDescription: `
            BMW X5 2023 року - це втілення розкоші, потужності та інноацій. Цей SUV преміум-класу пропонує ідеальний баланс між комфортом та динамікою водіння.

            Екстер'єр автомобіля вражає своєю харизматичною присутністю на дорозі. Фірмова решітка радіатора BMW, елегантні лазерні фари та атлетичні пропорції створюють неповторний образ.

            Інтер'єр відрізняється винятковою якістю матеріалів та збірки. Шкіряна оббивка Vernasca, панорамний дах та преміальна аудіосистема Harman/Kardon створюють атмосферу розкоші та комфорту.

            Технологічне оснащення включає найсучасніші системи допомоги водію та розваг. BMW Live Cockpit Professional з двома 12.3-дюймовими дисплеями забезпечує інтуїтивне керування всіма функціями автомобіля.

            Потужний 3.0-літровий двигун з турбонаддувом забезпечує вражаючу динаміку, while система повного приводу xDrive гарантує відмінну керованість у будь-яких умовах.
        `
    },
    {
        id: 2,
        brand: 'Audi',
        model: 'Q7',
        year: 2023,
        price: 70000,
        image: 'https://www.topgear.com/sites/default/files/2024/09/35964-AUDIQ72024DEANSMITH10.jpg',
        description: 'Преміум SUV, 7 місць, матричні фари, адаптивна підвіска'
    },
    {
        id: 3,
        brand: 'Mercedes',
        model: 'E-Class',
        year: 2022,
        price: 55000,
        image: 'https://img.mercedes-benz-kiev.com/data/lineup/e-class-limousine/mercedes-benz-e-class-limousine-12.jpeg',
        description: 'Бізнес седан, максимальна комплектація, автопілот'
    },
    {
        id: 4,
        brand: 'Toyota',
        model: 'Camry',
        year: 2023,
        price: 35000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdh1A-taOET7ThU3twM0rxNx0EVIVCAEG8g&s',
        description: 'Надійний седан, гібридна установка, клімат-контроль'
    },
    {
        id: 5,
        brand: 'Volkswagen',
        model: 'Golf',
        year: 2022,
        price: 18000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Volkswagen_Golf_VI_%28front_quarter%29.JPG',
        description: 'Компактний хетчбек, економічний двигун, відмінна керованість'
    },
    {
        id: 6,
        brand: 'Tesla',
        model: 'Model 3',
        year: 2023,
        price: 45000,
        image: 'https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg',
        description: 'Електромобіль, автопілот, запас ходу 500 км'
    },
    {
        id: 7,
        brand: 'Porsche',
        model: 'Cayenne',
        year: 2023,
        price: 95000,
        image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
        description: 'Спортивний SUV, потужний двигун, преміум аудіосистема'
    },
    {
        id: 8,
        brand: 'Honda',
        model: 'CR-V',
        year: 2022,
        price: 32000,
        image: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg',
        description: 'Компактний кросовер, повний привід, система безпеки Honda Sensing'
    },
    {
        id: 9,
        brand: 'Lexus',
        model: 'RX',
        year: 2023,
        price: 62000,
        image: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg',
        description: 'Преміум кросовер, гібридна установка, максимальна комплектація'
    },
    {
        id: 10,
        brand: 'Ford',
        model: 'Mustang',
        year: 2023,
        price: 48000,
        image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg',
        description: 'Спортивне купе, V8 двигун, шкіряний салон'
    },
    {
        id: 11,
        brand: 'Hyundai',
        model: 'Tucson',
        year: 2023,
        price: 29000,
        image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg',
        description: 'Сучасний кросовер, панорамний дах, Apple CarPlay'
    },
    {
        id: 12,
        brand: 'Mazda',
        model: 'CX-5',
        year: 2022,
        price: 31000,
        image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg',
        description: 'Стильний кросовер, Bose аудіо, адаптивний круїз-контроль'
    }
];

// Перевірка завантаження DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM завантажено'); // для дебагу

    // Перевірка наявності елементів
    const carsGrid = document.querySelector('.cars-grid');
    if (!carsGrid) {
        console.error('Не знайдено елемент .cars-grid');
        return;
    }

    // Функція відображення автомобілів
    function displayCars(carsArray) {
        const carsGrid = document.querySelector('.cars-grid');
        carsGrid.innerHTML = '';

        carsArray.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            
            const imageUrl = car.image || 'default-car-image.jpg';
            
            carCard.innerHTML = `
                <div class="price-tag">$${car.price.toLocaleString()}</div>
                <div class="car-image-container">
                    <img src="${imageUrl}" alt="${car.brand} ${car.model}" class="car-image" 
                         onerror="this.src='https://via.placeholder.com/300x200?text=Авто'">
                </div>
                <div class="car-info">
                    <h3>${car.brand} ${car.model}</h3>
                    <p>Рік: ${car.year}</p>
                    <p>${car.description}</p>
                    <button onclick="openCarDetails(${car.id})" class="details-btn">
                        Детальніше
                    </button>
                </div>
            `;
            carsGrid.appendChild(carCard);
        });
    }

    // Функція фільтрації
    function filterCars() {
        const brand = document.getElementById('brand')?.value || '';
        const year = document.getElementById('year')?.value || '';
        const price = document.getElementById('price')?.value || '';

        let filteredCars = [...cars];

        if (brand) {
            filteredCars = filteredCars.filter(car => 
                car.brand.toLowerCase() === brand.toLowerCase()
            );
        }
        if (year) {
            filteredCars = filteredCars.filter(car => 
                car.year === parseInt(year)
            );
        }
        if (price) {
            const [min, max] = price.split('-').map(num => 
                num === '+' ? Infinity : parseInt(num) || 0
            );
            filteredCars = filteredCars.filter(car => 
                car.price >= min && (max === Infinity ? true : car.price < max)
            );
        }

        displayCars(filteredCars);
    }

    // Функція для зв'язку з продавцем
    window.contactSeller = function(carId) {
        const car = cars.find(c => c.id === carId);
        if (car) {
            alert(`Зв'язок з продавцем щодо ${car.brand} ${car.model}\nТелефонуйте: +380 XX XXX XX XX`);
        }
    };

    // Додаємо обробники подій
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredCars = cars.filter(car => 
                car.brand.toLowerCase().includes(searchTerm) ||
                car.model.toLowerCase().includes(searchTerm) ||
                car.description.toLowerCase().includes(searchTerm)
            );
            displayCars(filteredCars);
        });
    }

    // Додаємо обробники для фільтрів
    ['brand', 'year', 'price'].forEach(filterId => {
        const filter = document.getElementById(filterId);
        if (filter) {
            filter.addEventListener('change', filterCars);
        }
    });

    // Початкове відображення автомобілів
    displayCars(cars);
});

// Функція для відкриття деталей автомобіля
function openCarDetails(carId) {
    const car = cars.find(c => c.id === carId);
    if (car) {
        const carDetailsUrl = `car-details.html?id=${car.id}`;
        window.open(carDetailsUrl, '_blank');
    }
}
