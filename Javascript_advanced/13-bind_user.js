let user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer',
};

function logWelcomeUser(welcomeString) {
    // Use 'this' to access the properties of the bound object
    console.log(welcomeString + ', ' + this.firstName + '. Your occupation is ' + this.occupation);
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Welcome');
