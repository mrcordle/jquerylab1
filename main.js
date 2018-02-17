var open = $(".openTable");
var reserved = $("#reserve");
var resButton = $(".reserveButton");
var exitButton = $("#exit");
var tables = ["","","","","","","","","",""];
var tabNum = "";
var tableNumber = "";


var currentTable;
open.on('click', function(){
    reserved.fadeIn("slow");
    tableNumber = $(this).text();
    currentTable = $(this);
    $('#tableNum').text("Table Number: " + tableNumber);
    
});
$('.tableContainer').on('click', function(evt){
      tabNum = $(evt.target).attr('id');
});

resButton.on('click', function(){
    reserved.fadeOut("slow");
    var input1 = $("#name");
    var input2 = $("#number");
    var input3 = $("#size");
//     var newRes = {
//         name: input1.val(),
//         number: input2.val(),
//         size: input3.val()
//     }
// tables.splice(tableNumber, 1, newRes);
currentTable.append(`<div class="hidden"><p>Name: ${input1.val()} </p><p>Seats: ${input3.val()}</p></div>`)
input1.val('');
input2.val('');
input3.val('');
$(`#${tabNum}`).attr('class', 'reservedTable');
});


exitButton.on('click', function(){
    reserved.fadeOut("fast");
    
    
});
