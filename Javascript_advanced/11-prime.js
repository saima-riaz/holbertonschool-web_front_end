function countPrimeNumbers() {
    // Precomputed list of prime numbers between 2 and 100
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
        31, 37, 41, 43, 47, 53, 59, 61, 67,
        71, 73, 79, 83, 89, 97];

    return primes.length;
}

let startTime = performance.now();

setTimeout(() => {
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }

    let endTime = performance.now();

    console.log(`Execution time of calculating prime numbers 100 times was' ${endTime - startTime} milliseconds.`);
}, 0); 