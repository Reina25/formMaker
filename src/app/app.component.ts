import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'formMaker';

  dynamicForm: FormGroup;
  formFields: any[] = []; // To store user-defined form fields

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({});
  }

  // Function to add fields dynamically
  addField(type: string, label: string, validation: any) {
    const control = this.formBuilder.control('', this.mapValidators(validation));
    this.dynamicForm.addControl(label, control);
    this.formFields.push({ type, label, validation });
  }


  addTextField() {
    // For demonstration purposes, let's say you have user inputs for type, label, and validation
    const type = 'text'; // Replace this with your user input
    const label = 'newTextField'; // Replace this with your user input
    const validation = { required: true }; // Replace this with your user input for validation rules

    this.addField(type, label, validation);
  }


  addRadioField() {
    // For demonstration purposes, let's say you have user inputs for type, label, and validation
    const type = 'radio'; // Replace this with your user input
    const label = 'newRdaioField'; // Replace this with your user input
    const validation = { required: false }; // Replace this with your user input for validation rules

    this.addField(type, label, validation);
  }

  addCheckboxField() {
    // For demonstration purposes, let's say you have user inputs for type, label, and validation
    const type = 'checkbox'; // Replace this with your user input
    const label = 'newCheckBoxField'; // Replace this with your user input
    const validation = { required: false }; // Replace this with your user input for validation rules

    this.addField(type, label, validation);
  }

  
  addDateField() {
    // For demonstration purposes, let's say you have user inputs for type, label, and validation
    const type = 'date'; // Replace this with your user input
    const label = 'newDateField'; // Replace this with your user input
    const validation = { required: false }; // Replace this with your user input for validation rules

    this.addField(type, label, validation);
  }



  // Helper function to map validators
  private mapValidators(validators: any) {
    const formValidators = [];
    if (validators.required) {
      formValidators.push(Validators.required);
    }
    // Add more validators as needed based on user input

    return formValidators;
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log('Form submitted with values:', this.dynamicForm.value);
      // You can handle the form submission logic here
    } else {
      console.log('Form is invalid. Please check fields.');
      // Handle invalid form
    }
  }

}
