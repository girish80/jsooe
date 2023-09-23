class Temperature {
    constructor (){
        this.celsius=0
    }
    get getCelsius(){
        return this.celsius
    }
    get getFahrenheit(){
        return (this.celsius*9/5)+32;
    }

    set setCalsius(value){
        this.celsius= value;
    }
    set setFahrenheit(value){
      this.celsius = (value-32)*5/9
    }
}

const temperature = new Temperature()

console.log(`Initianl Celsius: ${temperature.getCelsius}°C`); 
console.log(`Initianl Fahrenhite: ${temperature.getFahrenheit}°F`); 

temperature.setCalsius = 25;
console.log(`Celsius: ${temperature.getCelsius}°C`); 
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); 

temperature.setFahrenheit = 68;
console.log(`Celsius: ${temperature.getCelsius}°C`); 
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); 

