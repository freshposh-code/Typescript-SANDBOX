"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300);
console.log(invOne, invTwo);
const form = document.querySelector('.nav-item-form');
//   inputs
const type = document.querySelector('.#type');
const toForm = document.querySelector('.#toForm');
const details = document.querySelector('.#details');
const amount = document.querySelector('.#amount');
