let inputVal = document.getElementById("input-box");
let outputBox = document.getElementById("outbox");
let taxRate = document.getElementById("taxrate");
let monthVal = document.getElementById("monthicn");
let hourlyRate = document.getElementById("hourly-rate");
let countryName = document.getElementById("country");
let resetBtn = document.querySelector(".button-18");
let buttonDown = document.querySelector(".button8");
let excelDown = document.querySelector(".button7");


function calculateTax() {
  let income = inputVal.value;
  var table = document.getElementById("tablenow");
  if (income === 0 || isNaN(income) || income < 0) {
    table.style.display = "none";  // Hide the table if þ is empty or invalid
    outputBox.innerHTML = "";
    taxRate.innerHTML = "";
    monthVal.innerHTML = "";
resetBtn.classList.add("hidden");
buttonDown.classList.add("hidden1");
excelDown.classList.add("hidden2");

    return;
}

table.style.display = "table";  // Show the table if input is valid
if (countryName.value == "morocco") {
  if (income <= 30000 ) {
    result = Math.round(income - income * 0.10);
    outputBox.innerHTML = income + " Dhs";
    taxRate.innerHTML = "0%";
    monthyVal = Math.round(income / 12);
    monthVal.innerHTML = monthyVal + " Dhs";
    hourRate = monthyVal / 176;
    hourlyRate.innerHTML = String(hourRate.toFixed(1)) + " Dhs";
  } else if (income <= 50000) {
    result = Math.round(income - income * 0.10);
    outputBox.innerHTML = result + " Dhs";
    taxRate.innerHTML = "10%";
    monthyVal = Math.round(result / 12);
    monthVal.innerHTML = monthyVal + " Dhs";
    hourRate = monthyVal / 176;
    hourlyRate.innerHTML = String(hourRate.toFixed(1)) + " Dhs";
  } else if (income <= 60000) {
    result = Math.round(income - income * 0.20);
    outputBox.innerHTML = result + " Dhs";
    taxRate.innerHTML = "20%";
    monthyVal = Math.round(result / 12);
    monthVal.innerHTML = monthyVal + " Dhs";
    hourRate = monthyVal / 176;
    hourlyRate.innerHTML = String(hourRate.toFixed(1)) + " Dhs";
  } else if (income <= 80000) {
    result = Math.round(income - income * 0.30);
    outputBox.innerHTML = result + " Dhs";
    taxRate.innerHTML = "30%";
    monthyVal = Math.round(result / 12);
    monthVal.innerHTML = monthyVal + " Dhs";
    hourRate = monthyVal / 176;
    hourlyRate.innerHTML = String(hourRate.toFixed(1)) + " Dhs";
    
  } else if (income <= 180000) {
    result = Math.round(income - income * 0.34);
    outputBox.innerHTML = result + " Dhs";
    taxRate.innerHTML = "34%";
    monthyVal = Math.round(result / 12);
    monthVal.innerHTML = monthyVal + " Dhs";
    hourRate = monthyVal / 176;
    hourlyRate.innerHTML = String(hourRate.toFixed(1)) + " Dhs";
  } else {
    result = Math.round(income - income * 0.38);
    outputBox.innerHTML = result + " Dhs";
    taxRate.innerHTML = "38%";
    monthyVal = Math.round(result / 12);
    monthVal.innerHTML = monthyVal + " Dhs";
    hourRate = monthyVal / 176;
    hourlyRate.innerHTML = String(hourRate.toFixed(1)) + " Dhs";
  }
}

if (countryName.value == "usa") {
  if (income <= 11000) {
        result = Math.round(income - income * 0.10);
        outputBox.innerHTML = result + " USD";
        taxRate.innerHTML = "10%";
    } else if (income <= 44725) {
        result = Math.round(income - (11000 * 0.10 + (income - 11000) * 0.12));
        outputBox.innerHTML = result + " USD";
        taxRate.innerHTML = "12%";
    } else if (income <= 95375) {
        result = Math.round(income - (11000 * 0.10 + (44725 - 11000) * 0.12 + (income - 44725) * 0.22));
        outputBox.innerHTML = result + " USD";
        taxRate.innerHTML = "22%";
    } else if (income <= 182100) {
        result = Math.round(income - (11000 * 0.10 + (44725 - 11000) * 0.12 + (95375 - 44725) * 0.22 + (income - 95375) * 0.24));
        outputBox.innerHTML = result + " USD";
        taxRate.innerHTML = "24%";
    } else if (income <= 231250) {
        result = Math.round(income - (11000 * 0.10 + (44725 - 11000) * 0.12 + (95375 - 44725) * 0.22 + (182100 - 95375) * 0.24 + (income - 182100) * 0.32));
        outputBox.innerHTML = result + " USD";
        taxRate.innerHTML = "32%";
    } else if (income <= 578125) {
        result = Math.round(income - (11000 * 0.10 + (44725 - 11000) * 0.12 + (95375 - 44725) * 0.22 + (182100 - 95375) * 0.24 + (231250 - 182100) * 0.32 + (income - 231250) * 0.35));
        outputBox.innerHTML = result + " USD";
        taxRate.innerHTML = "35%";
    } else {
        result = Math.round(income - (11000 * 0.10 + (44725 - 11000) * 0.12 + (95375 - 44725) * 0.22 + (182100 - 95375) * 0.24 + (231250 - 182100) * 0.32 + (578125 - 231250) * 0.35 + (income - 578125) * 0.37));
        outputBox.innerHTML = result + " USD";
        taxRate.innerHTML = "37%";
    }

    monthlyVal = Math.round(result / 12);
    monthVal.innerHTML = monthlyVal + " USD";
    hourRate = monthlyVal / 176;
    hourlyRate.innerHTML = String(hourRate.toFixed(1)) + " USD";
}

if (countryName.value == "france") {
  if (income <= 0) {
        outputBox.innerHTML = "0 EUR";
        taxRate.innerHTML = "0%";
        monthVal.innerHTML = "0 EUR";
        hourlyRate.innerHTML = "0 EUR";
        return;
    }

    if (income <= 10777) {
        taxAmount = 0;
        result = income;
        outputBox.innerHTML = result + " EUR";
        taxRate.innerHTML = "0%";
    } else if (income <= 27478) {
        taxAmount = (income - 10777) * 0.11;
        result = income - taxAmount;
        outputBox.innerHTML = result + " EUR";
        taxRate.innerHTML = "11%";
    } else if (income <= 78570) {
        taxAmount = (27478 - 10777) * 0.11 + (income - 27478) * 0.30;
        result = income - taxAmount;
        outputBox.innerHTML = result + " EUR";
        taxRate.innerHTML = "30%";
    } else if (income <= 168994) {
        taxAmount = (27478 - 10777) * 0.11 + (78570 - 27478) * 0.30 + (income - 78570) * 0.41;
        result = income - taxAmount;
        outputBox.innerHTML = result + " EUR";
        taxRate.innerHTML = "41%";
    } else {
        taxAmount = (27478 - 10777) * 0.11 + (78570 - 27478) * 0.30 + (168994 - 78570) * 0.41 + (income - 168994) * 0.45;
        result = income - taxAmount;
        outputBox.innerHTML = result + " EUR";
        taxRate.innerHTML = "45%";
    }

    // Calculate the monthly income
    monthlyVal = Math.round(result / 12);
    monthVal.innerHTML = monthlyVal + " EUR";

    // Calculate the hourly rate based on a 176-hour work month
    hourRate = monthlyVal / 176;
    hourlyRate.innerHTML = hourRate.toFixed(2) + " EUR";
}

if (countryName.value == "italy") {
  
    // Italian Tax Brackets
    if (income <= 15000) {
        result = income - (income * 0.23);
        taxRate.innerHTML = "23%";
    } else if (income <= 28000) {
        result = income - ((15000 * 0.23) + ((income - 15000) * 0.25));
        taxRate.innerHTML = "25%";
    } else if (income <= 50000) {
        result = income - ((15000 * 0.23) + ((28000 - 15000) * 0.25) + ((income - 28000) * 0.35));
        taxRate.innerHTML = "35%";
    } else if (income <= 75000) {
        result = income - ((15000 * 0.23) + ((28000 - 15000) * 0.25) + ((50000 - 28000) * 0.35) + ((income - 50000) * 0.43));
        taxRate.innerHTML = "43%";
    } else {
        result = income - ((15000 * 0.23) + ((28000 - 15000) * 0.25) + ((50000 - 28000) * 0.35) + ((75000 - 50000) * 0.43) + ((income - 75000) * 0.45));
        taxRate.innerHTML = "45%";
    }

    // Update UI with results
    outputBox.innerHTML = Math.round(result) + " EUR";
    monthyVal = Math.round(result / 12);
    monthVal.innerHTML = monthyVal + " EUR";
    hourRate = monthyVal / 176;
    hourlyRate.innerHTML = hourRate.toFixed(1) + " EUR";

    resetBtn.classList.remove("hidden");
    buttonDown.classList.remove("hidden1");
    excelDown.classList.remove("hidden2");
}

if (countryName.value == "belgium") {
  if (income <= 13870) {
        result = income - (income * 0.25);
        taxRate.innerHTML = "25%";
    } else if (income <= 24480) {
        result = income - ((13870 * 0.25) + ((income - 13870) * 0.40));
        taxRate.innerHTML = "40%";
    } else if (income <= 42370) {
        result = income - ((13870 * 0.25) + ((24480 - 13870) * 0.40) + ((income - 24480) * 0.45));
        taxRate.innerHTML = "45%";
    } else {
        result = income - ((13870 * 0.25) + ((24480 - 13870) * 0.40) + ((42370 - 24480) * 0.45) + ((income - 42370) * 0.50));
        taxRate.innerHTML = "50%";
    }

    // Update UI with results
    outputBox.innerHTML = Math.round(result) + " EUR";
    monthyVal = Math.round(result / 12);
    monthVal.innerHTML = monthyVal + " EUR";
    hourRate = monthyVal / 176;
    hourlyRate.innerHTML = hourRate.toFixed(1) + " EUR";

    resetBtn.classList.remove("hidden");
    buttonDown.classList.remove("hidden1");
    excelDown.classList.remove("hidden2");
}

resetBtn.classList.remove("hidden");
resetBtn.classList.add("visible");
buttonDown.classList.remove("hidden1");
buttonDown.classList.add("visible1");
excelDown.classList.remove("hidden2");
excelDown.classList.add("visible2");
}
function reset() {
  
  location.reload();
  
  inputVal.value = '';
  outputBox.innerHTML = '';
  taxRate.innerHTML = '';
  monthVal.innerHTML = '';
  hourlyRate.innerHTML = '';
  
  let table = document.getElementById("tablenow");
  table.style.display = "none";
  
  resetBtn.classList.add("hidden");
  resetBtn.classList.remove("visible");
  buttonDown.classList.add("hidden1");
  buttonDown.classList.remove("visible1");
  excelDown.classList.add("hidden2");
  excelDown.classList.remove("visible2");
}

function tableToCSV() {
    // Define the expected structure of the table
    const tableStructure = [
        ["Full Overview Of Income", ""],
        ["Net Income", "outbox"],
        ["Monthly Income", "monthicn"],
        ["Hourly Rate / 8 hours", "hourly-rate"],
        ["Tax Rate", "taxrate"]
    ];

    // Initialize array to hold CSV data
    let csv_data = [];

    // Create CSV rows based on the defined structure
    for (let row of tableStructure) {
        let rowData = [];
        rowData.push(cleanData(row[0])); // Add the label

        if (row[1]) {
            // If there's an ID, get the content from the element
            let element = document.getElementById(row[1]);
            let content = element ? element.textContent.trim() : "";
            rowData.push(cleanData(content));
        } else {
            rowData.push(''); // Empty cell for the header row
        }

        csv_data.push(rowData.join(','));
    }

    // Join all rows into a single string with newline characters
    let csv_string = csv_data.join('\r\n'); // Use Windows-style line breaks

    // Call function to download CSV file
    downloadCSVFile(csv_string);
}

function cleanData(str) {
    // Remove non-printable and other non-valid JSON chars
    str = str.replace(/[^\x20-\x7E]/g, '');
    // Escape quotes
    str = str.replace(/"/g, '""');
    // Wrap in quotes
    return '"' + str + '"';
}

function downloadCSVFile(csv_data) {
    // Add BOM to string
    let universalBOM = "\uFEFF";
    csv_data = universalBOM + csv_data;

    // Create a Blob with the CSV data
    let blob = new Blob([csv_data], { type: 'text/csv;charset=utf-8;' });
    
    // Create a link element
    let link = document.createElement("a");
    
    if (navigator.msSaveBlob) { 
        // For IE 10+
        navigator.msSaveBlob(blob, "tax_calculation.csv");
    } else {
        // For other browsers
        link.href = URL.createObjectURL(blob);
        link.style.display = "none";
        link.download = "tax_calculation.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function tableToExcel() {
    // Define the expected structure of the table
    const tableStructure = [
        ["Full Overview Of Income", ""],
        ["Net Income", "outbox"],
        ["Monthly Income", "monthicn"],
        ["Hourly Rate / 8 hours", "hourly-rate"],
        ["Tax Rate", "taxrate"]
    ];

    // Create workbook and worksheet
    let wb = XLSX.utils.book_new();
    let ws_data = [];

    // Create Excel rows based on the defined structure
    for (let row of tableStructure) {
        let rowData = [row[0]];

        if (row[1]) {
            // If there's an ID, get the content from the element
            let element = document.getElementById(row[1]);
            let content = element ? element.textContent.trim() : "";
            rowData.push(content);
        } else {
            rowData.push(""); // Empty cell for the header row
        }

        ws_data.push(rowData);
    }

    let ws = XLSX.utils.aoa_to_sheet(ws_data);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Tax Calculation");

    // Generate Excel file and trigger download
    XLSX.writeFile(wb, "tax_calculation.xlsx");
}

// Add event listener to a new button for Excel download
document.querySelector("button[onclick='tableToExcel()']").addEventListener("click", tableToExcel);

// Add event listener to the download button
document.querySelector("button[onclick='tableToCSV()']").addEventListener("click", tableToCSV);
