class Weather {
    // create a constructor with default country, state and city value
    constructor(country, city) {
            this.apiKey = "c1679dde7922e10f";
            this.country = country;
            //this.state = state;
            this.city = city;
        }
        // fetch weather from api
        /* async getWeather() {
                const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

                const responseData = await response.json();

                return responseData.current_observation;
            } */
        // fetch weather for international locations
    async getInternationalWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/geolookup/conditions/forecast/q/${this.country}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    // change weather location
    changeLocation(country, city) {
        this.country = country;
        //this.state = state;
        this.city = city;
    }
}