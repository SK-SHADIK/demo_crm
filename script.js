"use strict";

console.log("Connection Test");
const ticketDropdownSelect = function (e) {
  let purchaseRequestForm = document.getElementById("purchaseRequestForm");
  let complainForm = document.getElementById("complainForm");
  let otherForm = document.getElementById("otherForm");
  let oneTimePaymentForm = document.getElementById("oneTimePaymentForm");
  let biddingForm = document.getElementById("biddingForm");
  let calculatorForm = document.getElementById("calculatorForm");
  const ticketDropdownValue = e.value;

  if (ticketDropdownValue) {
    purchaseRequestForm.style.display =
      ticketDropdownValue === "purchase_request" ? "block" : "none";
    complainForm.style.display =
      ticketDropdownValue === "complain" ? "block" : "none";
    oneTimePaymentForm.style.display =
      ticketDropdownValue === "one_time_payment" ? "block" : "none";
    otherForm.style.display =
      ticketDropdownValue === "others" ? "block" : "none";
    biddingForm.style.display =
      ticketDropdownValue === "bidding" ? "block" : "none";
    calculatorForm.style.display =
      ticketDropdownValue === "emi_calculator" ? "block" : "none";
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
    const emailCheckboxElement = document.getElementById(`email-check${section}`);
    const smsCheckboxElement = document.getElementById(`sms-check${section}`);
    const emailBody = document.getElementById(`email-body${section}`);
    const smsBody = document.getElementById(`sms-body${section}`);

    // Check if the elements exist before accessing their properties
    if (emailCheckboxElement && smsCheckboxElement && emailBody && smsBody) {
      const emailCheckbox = emailCheckboxElement.checked;
      const smsCheckbox = smsCheckboxElement.checked;

      emailBody.style.display = emailCheckbox ? "block" : "none";
      smsBody.style.display = smsCheckbox ? "block" : "none";
    }
  }
};


// FOR SERVICE SELECTION - ONE TIME PAYMENT
const serviceForm = function (e) {
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

const flatDetails = {
  a1: {
    flat: "A1",
    status: "Available",
    price: "900(sq ft)",
    size: "1800(sq ft)",
    details: "This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 veranda",
    parking: "1 parking available",
    bathroom: "2 attach and 1 common. 2 have high commode. 1 have bath tub."
  },
  a2: {
    flat: "A2",
    status: "Available",
    price: "850(sq ft)",
    size: "1750(sq ft)",
    details: "This is a north oriented flat. 2 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 2 bathroom, 2 veranda",
    parking: "2 parking available",
    bathroom: "1 attach and 1 common. Both have high commode."
  },
  a3: {
    flat: "A1",
    status: "Available",
    price: "900(sq ft)",
    size: "1800(sq ft)",
    details: "This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 veranda",
    parking: "1 parking available",
    bathroom: "2 attach and 1 common. 2 have high commode. 1 have bath tub."
  },
  a4: {
    flat: "A2",
    status: "Available",
    price: "850(sq ft)",
    size: "1750(sq ft)",
    details: "This is a north oriented flat. 2 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 2 bathroom, 2 veranda",
    parking: "2 parking available",
    bathroom: "1 attach and 1 common. Both have high commode."
  },
  b1: {
    flat: "A1",
    status: "Available",
    price: "900(sq ft)",
    size: "1800(sq ft)",
    details: "This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 veranda",
    parking: "1 parking available",
    bathroom: "2 attach and 1 common. 2 have high commode. 1 have bath tub."
  },
  b2: {
    flat: "A2",
    status: "Available",
    price: "850(sq ft)",
    size: "1750(sq ft)",
    details: "This is a north oriented flat. 2 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 2 bathroom, 2 veranda",
    parking: "2 parking available",
    bathroom: "1 attach and 1 common. Both have high commode."
  },
  b3: {
    flat: "A1",
    status: "Available",
    price: "900(sq ft)",
    size: "1800(sq ft)",
    details: "This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 veranda",
    parking: "1 parking available",
    bathroom: "2 attach and 1 common. 2 have high commode. 1 have bath tub."
  },
  b4: {
    flat: "A2",
    status: "Available",
    price: "850(sq ft)",
    size: "1750(sq ft)",
    details: "This is a north oriented flat. 2 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 2 bathroom, 2 veranda",
    parking: "2 parking available",
    bathroom: "1 attach and 1 common. Both have high commode."
  },
};

function updateFlatDetails(selectElement) {
  const selectedFlat = selectElement.value;
  const detailsContainer = document.getElementById("details-container");
  const emiDetailsContainer = document.getElementById("emi-details-container");

  if (selectedFlat === "-/") {
    detailsContainer.innerHTML = ""; // Clear details if "Select Flat/Plot" is selected
    return;
  }

  const details = flatDetails[selectedFlat];

  if (details) {
    detailsContainer.innerHTML = `
    <div class="flat-info">
    <h6 class="center"> Flat Details</h6>
      <div class="flat-desc"><strong>Flat:</strong> ${details.flat}</div>
      <div class="flat-desc"><strong>Status:</strong> ${details.status}</div>
      <div class="flat-desc"><strong>Price:</strong> ${details.price}</div>
      <div class="flat-desc"><strong>Size:</strong> ${details.size}</div>
      <div class="flat-desc"><strong>Details:</strong> ${details.details}</div>
      <div class="flat-desc"><strong>Parking:</strong> ${details.parking}</div>
      <div class="flat-desc"><strong>Bathroom:</strong> ${details.bathroom}</div>
      </div>
    `;
    emiDetailsContainer.innerHTML = `
    <div class="emiDetailsContainer" id="emiDetailsContainer">
    <div class="inbound-call-list">
            <table class="inbound-call-table">
                <tr class="table-row table-heading-row"> 
                <th>Cash</th>
                <th>EMI Amount</th>
                <th>EMI Duration</th>
                <th>Total EMI</th>
            </tr>
         <tr class="table-row table-data-row">
            <td>1,50,00,000</td>
            <td>1,90,00,000</td>
            <td>3 Year</td>
            <td>36</td>
            </tr>
            <tr class="table-row table-data-alt-row">
            <td>1,50,00,000</td>
            <td>2,00,00,000</td>
            <td>4 Year</td>
            <td>48</td>
            </tr>
        </tbody>
    </table>
</div>
    `;
  } else {
    detailsContainer.innerHTML = "<div>No details available for the selected flat.</div>";
  }
}

function updateBiddingDetails(selectElement) {
  const selectedFlat = selectElement.value;
  const detailsContainer = document.getElementById("details-containers");

  if (selectedFlat === "-/") {
    detailsContainer.innerHTML = ""; // Clear details if "Select Flat/Plot" is selected
    return;
  }

  const details = flatDetails[selectedFlat];

  if (details) {
    detailsContainer.innerHTML = `
    <div class="flat-info">
    <h6 class="center"> Flat Details</h6>
      <div class="flat-desc"><strong>Flat:</strong> ${details.flat}</div>
      <div class="flat-desc"><strong>Status:</strong> ${details.status}</div>
      <div class="flat-desc"><strong>Price:</strong> ${details.price}</div>
      <div class="flat-desc"><strong>Size:</strong> ${details.size}</div>
      <div class="flat-desc"><strong>Details:</strong> ${details.details}</div>
      <div class="flat-desc"><strong>Parking:</strong> ${details.parking}</div>
      <div class="flat-desc"><strong>Bathroom:</strong> ${details.bathroom}</div>
      </div>
    `;
  } else {
    detailsContainer.innerHTML = "<div>No details available for the selected flat.</div>";
  }
}


// EMI Calculator
function updateValue(id) {
  const value = document.getElementById(id + '-range').value;
  document.getElementById(id).value = value;
  if (id === 'loan-period') {
      document.getElementById('loan-period-output').innerText = value;
  }
}

function updateRange(id) {
  const value = document.getElementById(id.replace('-range', '')).value;
  document.getElementById(id).value = value;
}

function calculateLoan() {
  const totalPrice = parseFloat(document.getElementById('total-price').value);
  const loanPeriod = parseFloat(document.getElementById('loan-period').value);
  const downPaymentPercent = parseFloat(document.getElementById('down-payment').value);
  const interestRate = parseFloat(document.getElementById('interest-rate').value);

  const downPayment = totalPrice * (downPaymentPercent / 100);
  const loanAmount = totalPrice - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanPeriod * 12;

  const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  const totalPayable = monthlyPayment * numberOfPayments;

  const interestAmount = totalPayable - loanAmount;
  const interestPercent = (interestAmount / totalPayable) * 100;
  const principalPercent = 100 - interestPercent;

  document.getElementById('monthly-payment').innerText = 'BDT ' + monthlyPayment.toFixed(2);
  document.getElementById('total-payable').innerText = 'BDT ' + totalPayable.toFixed(2);
  document.getElementById('interest-bar').style.width = interestPercent + '%';
  document.getElementById('interest-bar').innerText = interestPercent.toFixed(2) + '%';
  document.getElementById('principal-bar').style.width = principalPercent + '%';
  document.getElementById('principal-bar').innerText = principalPercent.toFixed(2) + '%';
}
