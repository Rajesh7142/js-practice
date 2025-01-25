/* const numbers = [1,2,3,4,5];

const double = numbers.map(num => num *2);

const div = numbers.map(num => num%2 === 0);
const num = numbers.filter(num => num%2===0);

console.log("Orginal numbers : " , numbers );
console.log("doubled numbers : " ,double);
console.log("divisible by 2 numbers : ",div);
console.log("here print numbers : ",num); */

/* const movieList = [
    {title:"RRR" , price : 300},
    {title : "Pushpa" , price : 250},
    {title : "Nani" , price : 150}
];

console.log(movieList);
// here format price to include "$" symbol 

const formattedPrice = movieList.map(movie => {
    return {
        title : movie.title,
        formattedPrice : `₹${movie.price}`
    };
});

console.log("formatted Movies : ",formattedPrice);


// BookMyShow Scenario 

const showTiming = [
    { time : "10:00 AM", seats : 50},
    {time : "6:00 PM" , seats : 0}
];

// create avaliability status 

const avaliabilityStatus = showTiming.map( show =>{
    return {
        time : show.time,
        status : show.seats > 0 ? "Available" : "Housefull",
        seatsLeft : show.seats
    };
});

console.log("show Availability : " , avaliabilityStatus);
 */

// My tasks :

// 1. create an array of 5 movies objects with , title , rating , price .
// 2 . use map to create a "premimum" price
// (orginal price + 100).
// 3. use map to create movie recommendations based on rating.

/* const movies = [
    {
        title: "RRR",
        rating: 4.8,
        price: 200
    },
    {
        title: "Pushpa-2",
        rating: 4.5,
        price: 250
    },
    {
        title: "Salar",
        rating: 4.3,
        price: 300
    },
    {
        title: "Kalki",
        rating: 4.7,
        price: 320
    },
    {
        title: "Sankrathiki Vasthunam",
        rating: 3.9,
        price: 280
    }
];

const premium = movies.map(movie => {
    return {
       title: movie.title,
        rating:movie.rating,
       price : movie.price,
        premiumPrice: movie.price + 100 // Add the new premiumPrice property
    };
});

 console.log(premium);

const recommenditions = movies.map ( movie => {
    let recommendation ;
    if(movie.rating > 4.5){
        recommendation = "Highly Recommended";
    }
    else if (movie.rating  > 4.0){
        recommendation = "Recommended";
    }
    else {
        recommendation  = "not Recommended";
    }
    return {
        title: movie.title,
        rating:movie.rating,
       price : movie.price,
       recommendation : recommendation
    };
});
 console.log(recommenditions);

 console.log(movies); */
/*
const discountedMovies = movies.map(movie => ({
    discountedPrice: movie.price > 250 ? movie.price * 0.9 : movie.price
}));
console.log("Movies with Discounts:", discountedMovies); */


// final project 

// creating a array of movie ojects

const movieCollection = [
    {name : "Pushpa", price : 200 , seatAvailable : 30 , rating : 8.0},
    {name : "RRR", price : 250 , seatAvailable : 19 , rating : 8.5},
    {name : "Ui" , price : 300 , seatAvailable : 15 , rating : 8.0},
    {name : "game changer" , price : 150 , seatAvailable : 0 , rating : 5.0},
    {name : "kha" , price : 100 , seatAvailable : 23 , rating : 7.5},
    {name : "Lucky Basker" , price : 300 , seatAvailable : 5 , rating : 9.0}
];

// Use map to display all movies with their details

const display = movieCollection.map(movie => {
    return {
        name : movie.name,
        price : movie.price,
        seatAvailable : movie.seatAvailable,
        rating : movie.rating
    };
});

console.log(display);

// Use map to show only available movies

const avalableSeat = movieCollection.map(movie =>  {

    return {
        title : movie.name,
        available :movie.seatAvailable > 0
    };
});
console.log(avalableSeat);

const weekendMovies = movieCollection.map(movie =>{
    return{
        weekendPricing : movie.price * 1.2
    };
});
console.log(weekendMovies);