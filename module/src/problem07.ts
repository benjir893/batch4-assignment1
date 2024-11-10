{
    // 
    /*
    Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.*/ 
    class Car {
        public make:string;
        public model:string;
        public year:number;
        constructor(make:string, model:string, year:number){
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getcar(){
            console.log(`${this.make} model : ${this.model} year: ${this.year}`)
        }
        getCarAge(currentYear:number ){
            
            const carage = currentYear - this.year;
            // console.log(carage)
            return carage;
        }
    }
    const car = new Car('Honda','civic', 2018)
    console.log(car)
    const age = car.getCarAge(2024)
    console.log(`Age is: ${age}`)



    // 
}