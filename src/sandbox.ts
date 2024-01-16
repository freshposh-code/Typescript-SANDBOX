import {Invoice} from './classes/index'
import {Payment} from './classes/Payment'
import {HasFormatter} from './Interface/HasFormatter.js'

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250)
docTwo = new Payment('mario', 'plumbing work', 250)

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo)

console.log(docs)

const invOne = new Invoice('mario', 'work on the mario website', 250);
  const invTwo = new Invoice('luigi', 'work on the mario website', 300);

let invoices: Invoice[] = []
invoices.push(invOne);
invoices.push(invTwo);

  const form = document.querySelector('.nav-item-form') as HTMLFormElement;

//   inputs
const type = document.querySelector('#type') as HTMLFormElement;
const toForm = document.querySelector('#toForm') as HTMLFormElement;
const details = document.querySelector('#details') as HTMLFormElement;
const amount = document.querySelector('#amount') as HTMLFormElement;