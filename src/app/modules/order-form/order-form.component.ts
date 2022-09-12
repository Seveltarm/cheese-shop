import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { DropdownItem } from 'src/app/interfaces/dropdown';

@Component({
  selector: 'cheese-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {

  public cheeseName: Array<DropdownItem>;
  public cheeseSize: Array<DropdownItem>;
  public cheeseType: Array<DropdownItem>;
  public addOnType: Array<DropdownItem>;
  constructor(
    private formBuilder: FormBuilder,
    public translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    this.cheeseName = [
      { id: 1, name: 'Oscypek', price: 15 },
      { id: 2, name: 'Bundz', price: 12 },
      { id: 3, name: 'Gołka', price: 14 }
    ];
    this.cheeseSize = [
      { id: 1, name: 'Small', price: 1 },
      { id: 2, name: 'Medium', price: 5 },
      { id: 3, name: 'Large', price: 7 }
    ];
    this.cheeseType = [
      { id: 1, name: 'Smoked', price: 2 },
      { id: 2, name: 'Not smoked', price: 1}
    ]
    this.addOnType = [
      { id: 1, name: 'Cranberries', price: 5 },
      { id: 2, name: 'Souce', price: 2 }
    ]
  }

  public cheeseOrderForm = this.formBuilder.group({
    personalInformation: this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]]
    }),
    address: this.formBuilder.group({
      city: ['', [Validators.required]],
      flatNumber: [''],
      houseNumber: ['', [Validators.required]],
      street: ['', [Validators.required]],
      zipCode: ['', [Validators.required]]
    }),
    cheeses: this.formBuilder.array([
      this.newCheese()
    ]),
    addOns: this.formBuilder.array([
      this.newAddOn()
    ]),
    totalPrice: [0, [Validators.required]],
    passToSummary: [false]
  });

  newCheese(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      size: ['', [Validators.required]],
      type: ['', [Validators.required]],
      itemsNumber: [1, [Validators.required]],
      cheesePrice: [0, [Validators.required]]
    });
  }

  addNewCheese(): void {
    this.cheeseOrderForm.controls.cheeses.push(this.newCheese());
  }

  removeCheese(index: number): void {
    this.cheeseOrderForm.controls.cheeses.removeAt(index);
    this.calculateTotalPrice()
  }

  newAddOn(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      itemsNumber: [1, [Validators.required]],
      addOnPrice: [0, [Validators.required]]
    });
  }

  addNewAddOn(): void {
    this.cheeseOrderForm.controls.addOns.push(this.newAddOn());
  }

  removeAddOn(index: number): void {
    this.cheeseOrderForm.controls.addOns.removeAt(index);
    this.calculateTotalPrice();
  }

  calculateCheesePrice(index: number): void {
    if (this.cheeseOrderForm.controls.cheeses.controls[index].valid) {
      this.cheeseOrderForm.controls.cheeses.controls[index].controls['cheesePrice'].setValue(
        ( 
          this.cheeseOrderForm.controls.cheeses.controls[index].controls['name'].value.price +
          this.cheeseOrderForm.controls.cheeses.controls[index].controls['size'].value.price +
          this.cheeseOrderForm.controls.cheeses.controls[index].controls['type'].value.price 
        ) * this.cheeseOrderForm.controls.cheeses.controls[index].controls['itemsNumber'].value
      );

      this.calculateTotalPrice();
    }  
  }

  calculateAddOnsPrice(index: number): void {
    if (this.cheeseOrderForm.controls.addOns.controls[index].valid) {
      this.cheeseOrderForm.controls.addOns.controls[index].controls['addOnPrice'].setValue(
        this.cheeseOrderForm.controls.addOns.controls[index].controls['name'].value.price * 
        this.cheeseOrderForm.controls.addOns.controls[index].controls['itemsNumber'].value
      );

      this.calculateTotalPrice();
    }
  }

  private calculateTotalPrice(): void {
    const totalCheesePrice = this.cheeseOrderForm.controls.cheeses.controls.reduce((previousCheeseValue, currentCheeseValue) => 
      previousCheeseValue + currentCheeseValue.controls['cheesePrice'].value
    , 0)

    const totalAddOnPrice = this.cheeseOrderForm.controls.addOns.controls.reduce((previousCheeseValue, currentCheeseValue) => 
      previousCheeseValue + currentCheeseValue.controls['addOnPrice'].value
    , 0)
  
    this.setTotalPriceValue(totalCheesePrice + totalAddOnPrice);
  }

  private setTotalPriceValue(price: number): void {
    this.cheeseOrderForm.controls.totalPrice.setValue(price);
  }

  save() {
    if (this.cheeseOrderForm.valid) {
      this.cheeseOrderForm.controls.passToSummary.setValue(true);
    } else {
      this.cheeseOrderForm.controls.passToSummary.setValue(false);
    }
  }
}
