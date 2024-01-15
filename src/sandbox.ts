  class Invoice {
    // readonly client: string;
    // private details: string;
    // amount: number;

    constructor( 
     readonly client: string,
     private details: string,
     public amount: number,) {}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
  }

  const invOne = new Invoice('mario', 'work on the mario website', 250);
  const invTwo = new Invoice('luigi', 'work on the mario website', 300);

let invoices: Invoice[] = []
invoices.push(invOne);
invoices.push(invTwo);

  const form = document.querySelector('.nav-item-form') as HTMLFormElement;

//   inputs
const type = document.querySelector('.#type') as HTMLFormElement;
const toForm = document.querySelector('.#toForm') as HTMLFormElement;
const details = document.querySelector('.#details') as HTMLFormElement;
const amount = document.querySelector('.#amount') as HTMLFormElement;