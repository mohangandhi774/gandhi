//class constructor

class bike
{
    constructor(name,price,speed,mileage)
    {
        this.name=name;
        this.price=price;
        this.speed=speed;
        this.mileage=mileage;
    }

    product(){

        console.log(`Name of the bike :${this.name}\n amount :${this.price}\n km/hr: ${this.speed}\n capacity: ${this.mileage}`);
        
    }
}

const total=new bike("hero honda","1 lakh",100,"good");
total.product();