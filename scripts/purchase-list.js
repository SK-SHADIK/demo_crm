document.addEventListener('DOMContentLoaded', () => {
    // Sample data
    const paymentData = {
        1: [
            { collectedDate: " ", paymentDate: '05-Oct-2024', amount: '10,00,000', dueDate: " ", paymentMethod: " "},
            { collectedDate: " ", paymentDate: '05-Sep-2024', amount: '20,00,000', dueDate: " ", paymentMethod: " "},
            { collectedDate: " ", paymentDate: '05-Aug-2024', amount: '30,00,000', dueDate: " ", paymentMethod: " "},
            { collectedDate: " ", paymentDate: '05-Jul-2024', amount: '30,00,000', dueDate: " ", paymentMethod: " "},
            { collectedDate: '05-Jun-2024', paymentDate: '05-Jun-2024', amount: '20,00,000', dueDate: " ", paymentMethod: "Cash"},
            { collectedDate: '10-May-2024', paymentDate: '05-May-2024', amount: '20,00,000', dueDate: " ", paymentMethod: "Bank Transfer"}
        ],
        2: [
            { collectedDate: " ", paymentDate: '05-Aug-2024', amount: '20,00,000', dueDate: " ", paymentMethod: " "},
            { collectedDate: " ", paymentDate: '05-Jul-2024', amount: '20,00,000', dueDate: "05-Jul-2024", paymentMethod: " "},
            { collectedDate: '05-Jun-2024', paymentDate: '05-Jun-2024', amount: '40,00,000', dueDate: " ", paymentMethod: "Cash"},
            { collectedDate: '10-May-2024', paymentDate: '05-May-2024', amount: '40,00,000', dueDate: " ", paymentMethod: "Bank"},
            { collectedDate: '10-May-2024', paymentDate: '05-May-2024', amount: '40,00,000', dueDate: " ", paymentMethod: "Cash"}
        ],
        3: [
            { collectedDate: "23-Jan-2024", paymentDate: '23-Jan-2024', amount: '1,10,00,000', dueDate: " ", paymentMethod: "Bank Loan"}
        ],
        4: [
            { collectedDate: '15-Mar-2024', paymentDate: '15-Mar-2024', amount: '3,90,00,000', dueDate: " ", paymentMethod: "One Time Payment"}
        ]
    };

    // Add click event listener to each row
    document.querySelectorAll('.table-row').forEach(row => {
        row.addEventListener('click', () => {
            const dataId = row.getAttribute('data-id');

            // Remove any existing payment details section
            let existingSection = row.nextElementSibling;
            if (existingSection && existingSection.classList.contains('payment-details-section')) {
                existingSection.remove();
            } else {
                // Create a new section with the table
                const section = document.createElement('tr');

                // Generate table rows based on the data-id
                const tableRows = paymentData[dataId].map(payment => `
                <tr class="table-row table-data-row">
              <td>${payment.paymentDate}</td>
              <td>${payment.amount}</td>
              <td> ${payment.collectedDate}</td>
              <td class="due-color">${payment.dueDate}</td>
              <td>${payment.paymentMethod}</td>
            </tr>
          `).join('');

                section.innerHTML = `
            <td colspan="4">
            <div class="inbound-call-list">
            <table class="inbound-call-table">
            <tr class="table-row table-heading-row">

                      <th>Payment Collected Date</th>
                      <th>Amount</th>
                      <th>Payment Date</th>
                      <th>Due Date</th>
                      <th>Payment Method</th>
                    </tr>
                  <tbody>
                    ${tableRows}
                  </tbody>
                </table>
              </div>
            </td>
          `;
                row.insertAdjacentElement('afterend', section);
            }
        });
    });
});