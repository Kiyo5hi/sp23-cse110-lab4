let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const key in statistics) {
    if (Object.hasOwnProperty.call(statistics, key)) {
        const value = statistics[key];
        if (key.charAt(0).toLowerCase() === 'r' || value % 1 === 1) {
            console.log(value);
        }
    }
}
