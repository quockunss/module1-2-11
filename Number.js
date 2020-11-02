class Number{
    constructor(number,arr) {
        this.number = number;
        this.arr = arr;
    }

    inputN(){
        let num;
        do {
            num = +prompt('Nhập số N: ');
        } while (num % 2 === 0 || num < 0);
        this.number = num;
    }

    checkPrime(num){
        let i = 2;
        if (num < 2){
            return false;
        } else if ( num > 2){
            for (let i = 2; i <= Math.sqrt(num); i++){
                if (num % i == 0){
                    return false;
                }
            }
        }
        return true;
    }


    listPrime(){
        let count = 0;
        let i = 0;
        while (count < this.number){
            if (this.checkPrime(i) == true){
                document.getElementById("128").innerHTML += i + ' ';
                count++;
            }
            i++;
        }
    }

    createarr(arr){
        this.arr = arr
    }


    inputArray(){
        for ( let i = 0 ; i < this.number; i++){
            this.arr[i] = +prompt('nhap phan tu mang: ');
        }
    }


    checkPrimeArr(){
        for (let i = 0 ; i < this.arr.length; i++){
            if (this.checkPrime(this.arr[i])){
                document.getElementById('primearr').innerHTML += this.arr[i];
            }
        }
    }


    checkN(){
        let str = ""
        for (let i = 0; i < this.arr.length; i++){
            if (this.arr[i] == this.number){
                str += i + ', ';
            }
        }document.getElementById()
    }














}

let arr = new Array();
let number1 = new Number()

number1.createarr(arr);
number1.inputN();
number1.checkPrime(number1.number);
number1.listPrime();
number1.inputArray();


