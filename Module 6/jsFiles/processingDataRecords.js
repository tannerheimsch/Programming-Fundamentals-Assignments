/*
    This is file /unit6/processingDataRecords.js 
    It contains the JavaScript code for
    
    "Processing Data Records" File: /unit6/processingDataRecords.html
*/
function processingDataRecords() {

  // Declare Variables
  var currentDescription;
  var currentNumber;
  var currentStockAmount;
  
  var itemRecords;
  
  // Open the Inventory Items Records and make them 
  // available to the script
  itemRecords = openInventoryItemsRecords();
  
  document.write("The Inventory Items Record Set:\n\n");
  
  // Read the next record, test to see if there 
  // is a next record and then output it
  while (itemRecords.readNextRecord()) {
    currentNumber      = itemRecords.getItemNumber();
    currentDescription = itemRecords.getItemDescription();
    currentStockAmount = itemRecords.getItemStockAmount();
    
    document.write(currentNumber + "\t" + currentDescription 
            + "\t" + currentStockAmount + "\n");
  } 
}