"use strict";

console.log("Connection Test");
const ticketDropdownSelect = function (e) {
  let complainForm = document.getElementById("complainForm");
  let purchaseRequestForm = document.getElementById("purchaseRequestForm");
  let otherForm = document.getElementById("otherForm");
  let covidFrom = document.getElementById("covidFrom");
  let oneTimePaymentForm = document.getElementById("oneTimePaymentForm");
  const ticketDropdownValue = e.value;

  if (ticketDropdownValue) {
   
    complainForm.style.display =
      ticketDropdownValue === "complain" ? "block" : "none";
      purchaseRequestForm.style.display =
      ticketDropdownValue === "purchase_request" ? "block" : "none";
    oneTimePaymentForm.style.display =
      ticketDropdownValue === "one_time_payment" ? "block" : "none";
    otherForm.style.display =
      ticketDropdownValue === "others" ? "block" : "none";
    
  }
};

// FOR SHOWING NPS RESPONSE Fo

const npsDropdownSelect = function (e) {
  const npsResponseYesContainer = document.getElementById(
    "nps-response-form-yes"
  );
  const npsDropdownValue = e.value;
  npsResponseYesContainer.style.display =
    npsDropdownValue === "yes" ? "block" : "none";
};
// covidDropdownSelect
const covidDropdownSelect = function (e) {
  const covidFormContainer = document.getElementById("questionsContainer");
  const covidDropdownValue = e.value;
  covidFormContainer.style.display =
    covidDropdownValue === "feedback" ? "block" : "none";
};

// For Showing Email/SMS Body

const notificationCheckbox = function () {
  const sections = ["", "-med", "-complain", "-service", "-others"]; // Suffixes for common patterns

  for (const section of sections) {
    const emailCheckbox = document.getElementById(
      `email-check${section}`
    ).checked;
    const smsCheckbox = document.getElementById(`sms-check${section}`).checked;
    const emailBody = document.getElementById(`email-body${section}`);
    const smsBody = document.getElementById(`sms-body${section}`);

    emailBody.style.display = emailCheckbox ? "block" : "none";
    smsBody.style.display = smsCheckbox ? "block" : "none";
  }
};

// FOR SERVICE SELECTION - ONE TIME PAYMENT
const purchaseRequestForm = function (e) {
  const serviceSection = document.getElementById("service-selection");
  const othersSection = document.getElementById("others-selection");
  const serviceValue = e.value;
  serviceSection.style.display = serviceValue === "service" ? "block" : "none";
  othersSection.style.display = serviceValue === "others" ? "block" : "none";
};

// const discountCalculationMedicine = function(e){
//     const totalPrice = 60;
//     const discountPercentageMedicine = e.value;
//     const discountMedicine = discountPercentageMedicine/100;
//     let discountedMedicinePrice = totalPrice - (totalPrice * discountMedicine);
//     document.getElementById('discountedPriceMedicine').value = discountedMedicinePrice;
// }
// const discountCalculationService = function(e){
//         const totalPrice = 6000;
//         const discountPercentageService = e.value;
//         const discountService = discountPercentageService/100;
//         let discountedServicePrice = totalPrice - (totalPrice * discountService);
//         document.getElementById('discountedPriceService').value = discountedServicePrice;
//     }

// FOR LAB TEST

function labTestSelection(selectElement) {
  const selectedOptions = Array.from(selectElement.selectedOptions);
  let totalValue = 0;

  selectedOptions.forEach((option) => {
    totalValue += parseFloat(option.value);
  });

  document.getElementById("totalPriceOfLabServices").value = totalValue;
  updateDiscountedPrice(document.getElementById("discountLabtest").value);
}

function updateDiscountedPrice(discountPercentage) {
  const totalPrice = parseFloat(
    document.getElementById("totalPriceOfLabServices").value
  );
  const discountLabTest = discountPercentage / 100;
  let discountAmount = totalPrice * discountLabTest;
  let discountedLabTestPrice = totalPrice - totalPrice * discountLabTest;
  document.getElementById("LabTestdiscountAmount").value = discountAmount;
  document.getElementById("discountedPriceLabTest").value =
    discountedLabTestPrice;
}

// FOR MEDICINE

function updateTotalPrice() {
  const selectedMedicinePrice = parseFloat(
    document.getElementById("medicineSelect").value
  );
  const quantity = parseInt(
    document.getElementById("medAvailableQuantity").value
  );

  console.log(selectedMedicinePrice);

  const totalPrice = selectedMedicinePrice * quantity;

  document.getElementById("totalPriceSingleMed").value = totalPrice.toFixed(2); // Display total price with 2 decimal places

}

function medSelection() {
  const medicineSelect = document.getElementById("medicineSelect");
  const selectedMedicine = medicineSelect.options[medicineSelect.selectedIndex].text;
  const unitPrice = parseFloat(medicineSelect.value);
  const quantity = parseInt(document.getElementById("medAvailableQuantity").value);
  const total = (unitPrice * quantity).toFixed(2);

  // Get the reference to the table
  const table = document.querySelector('.inbound-call-table');

  // Create a new row
  const newRow = table.insertRow(-1);
  newRow.classList.add('table-row', 'table-data-row');

  // Check if the number of existing rows is odd or even to determine the class
  const rowIsEven = table.rows.length % 2 === 0;

  if (!rowIsEven) {
    newRow.classList.add('table-data-alt-row');
  }

  // Insert cells with the respective data into the new row
  const cellMedicineName = newRow.insertCell(0);
  const cellUnitPrice = newRow.insertCell(1);
  const cellQuantity = newRow.insertCell(2);
  const cellTotalPrice = newRow.insertCell(3);

  // Add data to the cells
  cellMedicineName.innerHTML = `<p>${selectedMedicine}</p>`;
  cellUnitPrice.innerHTML = `<p>${unitPrice.toFixed(2)} BDT</p>`;
  cellQuantity.innerHTML = `<p>${quantity} Piece</p>`;
  cellTotalPrice.innerHTML = `<p>${total} BDT</p>`;

  // Update Sub Total
  updateSubTotal();
}

function updateSubTotal() {
  const table = document.querySelector('.inbound-call-table');
  const rows = table.getElementsByTagName('tr');
  let subTotal = 0;

  for (let i = 1; i < rows.length; i++) {
    const cell = rows[i].getElementsByTagName('td')[3];
    const cellText = cell.innerText || cell.textContent;
    const price = parseFloat(cellText.replace(' BDT', ''));
    subTotal += price;
  }

  document.getElementById('subTotal').value = subTotal.toFixed(2);
}

function discountCalculationMedicine(discountElement) {
  const discountPercentage = parseFloat(discountElement.value);
  const subTotal = parseFloat(document.getElementById("subTotal").value);

  const discountAmount = (subTotal * (discountPercentage / 100)).toFixed(2);
  const discountedPrice = (subTotal - discountAmount).toFixed(2);

  // Display the discount amount
  document.getElementById("discountedPriceMedicine").value = discountAmount;

  // Display the net amount (after discount)
  document.getElementById("netAmountMedicine").value = discountedPrice;
  
}






// FOR SERVICE

function serviceSelection(selectElement) {
  const selectedOptions = Array.from(selectElement.selectedOptions);
  let totalServicePrice = 0;

  selectedOptions.forEach((option) => {
    totalServicePrice += parseFloat(option.value);
  });

  document.getElementById("servicePrice").value = totalServicePrice;
  updateDiscountedPriceService(
    document.getElementById("discountService").value
  );
}

function updateDiscountedPriceService(discountPercentage) {
  const servicePrice = parseFloat(
    document.getElementById("servicePrice").value
  );
  const discount = parseFloat(discountPercentage);
  const discountAmount = (servicePrice * discount) / 100;
  const netAmount = servicePrice - discountAmount;

  document.getElementById("ServiceDiscountAmount").value = discountAmount;
  document.getElementById("discountedPriceService").value = netAmount;
}


// TEDST
