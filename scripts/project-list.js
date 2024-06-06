document.querySelectorAll('.table-row').forEach(row => {
    row.addEventListener('click', () => {
        // Remove any existing inserted rows
        document.querySelectorAll('.inserted').forEach(element => element.remove());

        // Insert details row after the clicked row
        const detailsRow = document.createElement('tr');
        detailsRow.classList.add('inserted');
        detailsRow.innerHTML = `
        <td colspan="9">
            <div class="flat-section">
                <div class="flat available"></br>Available</div> 
                <div class="flat booked"></br>Booked</div>
                <div class="flat ongoing"></br>Ongoing</div>
                <div class="flat incomplete"></br>Incomplete</div>
                <div class="flat proposed"></br>proposed</div>
                <div class="flat selected-tag"></br>Selected</div>
            </div>
            <div class="flat-details active">
                <div class="flat-map" id="flat-map-${row.dataset.id}">
                    ${getFlatMap(row.dataset.id)}
                </div>
                <div class="flat-info" id="flat-info">
                    <p>Select a flat to see flat details.</p>
                </div>
            </div>
        </td>
    `;
        row.insertAdjacentElement('afterend', detailsRow);

        // Add event listeners for the flats
        document.querySelectorAll('.flat').forEach(flat => {
            flat.addEventListener('click', () => {
                document.querySelectorAll('.flat').forEach(s => {
                    s.classList.remove('selected');
                });
                flat.classList.add('selected');

                // Update the flat-info section with the selected flat details
                const flatInfo = document.getElementById('flat-info');
                flatInfo.innerHTML = `
                <h6 class="center">Flat/Plot Details</h6>
                <p class="flat-desc"><span class="bold">Flat/Plot Number</span>: ${flat.dataset.flat}</p>
                <p class="flat-desc focused">Status: ${flat.dataset.status}</p>
                <p class="flat-desc focused">Size: ${flat.dataset.size} Taka</p>
                <p class="flat-desc focused">Price: ${flat.dataset.price} Taka</p>
                <p class="flat-desc"><span class="bold">Details</span>: ${flat.dataset.details}</p>
                ${flat.dataset.parking ? `<p class="flat-desc"><span class="bold">Parking</span>: ${flat.dataset.parking}</p>` : ''}
                ${flat.dataset.bathroom ? `<p class="flat-desc"><span class="bold">Bathroom</span>: ${flat.dataset.bathroom}</p>` : ''}
            `;
            });
        });
    });
});
function getFlatMap(id) {
    if (id === '1') {
        return `
      <div class="flat-container">
    <div class="flat-section">
        <div class="flat available" data-flat="A1" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A1</div>

        <div class="flat available" data-flat="A2" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A2</div>

        <div class="flat booked" data-flat="A3" data-status="Booked" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A3</div>

        <div class="flat available" data-flat="A4" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A4</div>
    </div>
    <div class="flat-section">
        <div class="flat available" data-flat="B1" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B1</div>

        <div class="flat available" data-flat="B2" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B2</div>

        <div class="flat available" data-flat="B3" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B3</div>

        <div class="flat available" data-flat="B4" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B4</div>
    </div>
    <div class="flat-section">
        <div class="flat available" data-flat="C1" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C1</div>

        <div class="flat available" data-flat="C2" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C2</div>

        <div class="flat booked" data-flat="C3" data-status="Booked" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C3</div>

        <div class="flat available" data-flat="C4" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C4</div>
    </div>
    <div class="flat-section">
        <div class="flat booked" data-flat="D1" data-status="Booked" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D1</div>

        <div class="flat booked" data-flat="D2" data-status="Booked" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D2</div>

        <div class="flat booked" data-flat="D3" data-status="Booked" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D3</div>

        <div class="flat booked" data-flat="D4" data-status="Booked" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D4</div>
    </div>
    <div class="flat-section">
        <div class="flat available" data-flat="E1" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">E1</div>

        <div class="flat ongoing" data-flat="E2" data-status="Ongoing" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">E2</div>

        <div class="flat booked" data-flat="E3" data-status="Booked" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">E3</div>

        <div class="flat available" data-flat="E4" data-status="Available" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">E4</div>
    </div>
    <div class="flat-section">
        <div class="flat booked" data-flat="F1" data-status="Booked" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">F1</div>

        <div class="flat booked" data-flat="F2" data-status="Booked" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">F2</div>

        <div class="flat ongoing" data-flat="F3" data-status="Ongoing" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">F3</div>

        <div class="flat booked" data-flat="F4" data-status="Booked" data-price="900(sq ft)" data-size="1800(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">F4</div>
    </div>
    <div class="flat-section">
    <div class="flat incomplete" data-flat="Roof Top" data-status="Incomplete" data-price="600(sq ft)" data-size="800(sq ft)" data-details="This is a south oriented flat. 2 bed rooms, 1 dining or drawing room, 1 small kitchen, 2 bathroom, 1 varenda" data-parking="No parking available" data-bathroom="1 attach and 1 common. 1 have high commode.">RT</div>
    </div>
    `;
    } else if (id === '2') {
        return `
      <div class="flat-container">
    <div class="flat-section">
        <div class="flat available" data-flat="A1" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A1</div>

        <div class="flat ongoing" data-flat="A2" data-status="Ongoing" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A2</div>

        <div class="flat booked" data-flat="A3" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A3</div>

        <div class="flat available" data-flat="A4" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A4</div>
    </div>
    <div class="flat-section">
        <div class="flat available" data-flat="B1" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B1</div>

        <div class="flat available" data-flat="B2" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B2</div>

        <div class="flat available" data-flat="B3" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B3</div>

        <div class="flat available" data-flat="B4" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B4</div>
    </div>
    <div class="flat-section">
        <div class="flat available" data-flat="C1" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C1</div>

        <div class="flat ongoing" data-flat="C2" data-status="Ongoing" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C2</div>

        <div class="flat booked" data-flat="C3" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C3</div>

        <div class="flat available" data-flat="C4" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C4</div>
    </div>
    <div class="flat-section">
        <div class="flat booked" data-flat="D1" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D1</div>

        <div class="flat booked" data-flat="D2" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D2</div>

        <div class="flat booked" data-flat="D3" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D3</div>

        <div class="flat booked" data-flat="D4" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D4</div>
    </div>
    <div class="flat-section">
        <div class="flat available" data-flat="E1" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">E1</div>

        <div class="flat ongoing" data-flat="E2" data-status="Ongoing" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">E2</div>

        <div class="flat booked" data-flat="E3" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">E3</div>

        <div class="flat available" data-flat="E4" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">E4</div>
    </div>
    <div class="flat-section">
        <div class="flat available" data-flat="F1" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B1</div>

        <div class="flat available" data-flat="F2" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B2</div>

        <div class="flat available" data-flat="F3" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B3</div>

        <div class="flat booked" data-flat="F4" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B4</div>
    </div>
    <div class="flat-section">
        <div class="flat available" data-flat="G1" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">G1</div>

        <div class="flat ongoing" data-flat="G2" data-status="Ongoing" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">G2</div>

        <div class="flat incomplete" data-flat="G3" data-status="Incomplete" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">G3</div>

        <div class="flat incomplete" data-flat="G4" data-status="Incomplete" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">G4</div>
    </div>
    <div class="flat available" data-flat="Roof Top" data-status="Available" data-price="700(sq ft)" data-size="1000(sq ft)" data-details="This is a south oriented flat. 2 bed rooms, 1 dining or drawing room, 1 small kitchen, 2 bathroom, 1 varenda" data-parking="No parking available" data-bathroom="1 attach and 1 common. 1 have high commode.">RT</div>
    </div>
    `;
    } else if (id === '3') {
        return `
        <div class="flat-container">
      <div class="flat-section">
          <div class="flat available" data-flat="A1" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A1</div>
  
          <div class="flat ongoing" data-flat="A2" data-status="Ongoing" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A2</div>
  
          <div class="flat booked" data-flat="A3" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A3</div>
  
          <div class="flat available" data-flat="A4" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">A4</div>
      </div>
      <div class="flat-section">
          <div class="flat available" data-flat="B1" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B1</div>
  
          <div class="flat ongoing" data-flat="B2" data-status="Ongoing" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B2</div>
  
          <div class="flat available" data-flat="B3" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B3</div>
  
          <div class="flat available" data-flat="B4" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">B4</div>
      </div>
      <div class="flat-section">
          <div class="flat available" data-flat="C1" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C1</div>
  
          <div class="flat ongoing" data-flat="C2" data-status="Ongoing" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C2</div>
  
          <div class="flat booked" data-flat="C3" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C3</div>
  
          <div class="flat available" data-flat="C4" data-status="Available" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">C4</div>
      </div>
      <div class="flat-section">
          <div class="flat booked" data-flat="D1" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D1</div>
  
          <div class="flat booked" data-flat="D2" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D2</div>
  
          <div class="flat booked" data-flat="D3" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a south oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D3</div>
  
          <div class="flat booked" data-flat="D4" data-status="Booked" data-price="1000(sq ft)" data-size="1900(sq ft)" data-details="This is a north oriented flat. 3 bed rooms, 1 dining room, 1 drawing room, 1 kitchen, 3 bathroom, 3 varenda" data-parking="1 parking available" data-bathroom="2 attach and 1 common. 2 have high commode. 1 have bath tab.">D4</div>
      </div>
      <div class="flat-section">
          <div class="flat available" data-flat="Roof Top 1" data-status="Available" data-price="400(sq ft)" data-size="600(sq ft)" data-details="This is a south oriented flat. 2 bed rooms, 1 dining or drawing room, 1 small kitchen, 2 bathroom, 1 varenda" data-parking="No parking available" data-bathroom="1 attach and 1 common. 1 have high commode.">RT1</div>
          <div class="flat available" data-flat="Roof Top 2" data-status="Available" data-price="400(sq ft)" data-size="600(sq ft)" data-details="This is a north oriented flat. 2 bed rooms, 1 dining or drawing room, 1 small kitchen, 2 bathroom, 1 varenda" data-parking="No parking available" data-bathroom="1 attach and 1 common. 1 have high commode.">RT2</div>
          </div>
      </div>
      `;
    }else if (id === '4') {
        return `
        <div class="flat-container">
      <div class="flat-section">
          <div class="flat available" data-flat="A1" data-status="Available" data-price="1,40,000(per Katha)" data-size="5(katha)" data-details="East South Facing Plot.">A1</div>
          <div class="flat available" data-flat="A2" data-status="Available" data-price="1,20,000(per Katha)" data-size="5(katha)" data-details="East Facing Plot.">A2</div>
          <div class="flat booked" data-flat="A3" data-status="booked" data-price="1,40,000(per Katha)" data-size="5(katha)" data-details="East North Facing Plot.">A3</div>

      </div>
      <div class="flat-section">
          <div class="flat available" data-flat="A4" data-status="Available" data-price="1,20,000(per Katha)" data-size="5(katha)" data-details="South Facing Plot.">A4</div>
          <div class="flat available" data-flat="A5" data-status="Available" data-price="1,00,000(per Katha)" data-size="5(katha)" data-details="Center Plot.">A5</div>
          <div class="flat available" data-flat="A6" data-status="Available" data-price="1,20,000(per Katha)" data-size="5(katha)" data-details="North Facing Plot.">A6</div>
          </div>
          <div class="flat-section">
          <div class="flat booked" data-flat="A7" data-status="Booked" data-price="1,40,000(per Katha)" data-size="5(katha)" data-details="West South Facing Plot.">A7</div>
          <div class="flat proposed" data-flat="A8" data-status="Proposed" data-price="1,20,000(per Katha)" data-size="5(katha)" data-details="West Facing Plot.">A8</div>
          <div class="flat available" data-flat="A9" data-status="Available" data-price="1,40,000(per Katha)" data-size="5(katha)" data-details="West North Facing Plot.">A9</div>

      </div>

      </div>
      `;
    }
    return '';
}