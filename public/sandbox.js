"use strict";
class Invoice {
    // readonly client: string;
    // private details: string;
    // amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
const form = document.querySelector('.nav-item-form');
//   inputs
const type = document.querySelector('.#type');
const toForm = document.querySelector('.#toForm');
const details = document.querySelector('.#details');
const amount = document.querySelector('.#amount');
