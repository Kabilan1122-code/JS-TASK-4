var count = 0;
var spend=0;
var highest=0;
function addexpense() {
    var name = document.getElementById("inputname").value;
    var amount = Number(document.getElementById("inputamount").value);
    var category = document.getElementById("inputcategory").value;
    var date = document.getElementById("inputdate").value;
    var table = document.getElementById("transactionList");
    count++;
    var row = table.insertRow();
    row.insertCell(0).innerHTML = count;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = amount;
    row.insertCell(3).innerHTML = category;
    row.insertCell(4).innerHTML = date;
    var action = row.insertCell(5);
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.onclick = function() {
        row.remove();
        count--;
        spend=spend-amount;
        var totalspend=document.getElementById("totalspendcount");
        totalspend.innerHTML=spend;
        document.getElementById("totalexpensecount");
        excount.innerHTML = count;
        var budget = Number(document.getElementById("inputbudget").value);
        document.getElementById("remainingbudgetcount").innerHTML = budget - spend;
        
    }
    action.appendChild(btn);
    var excount = document.getElementById("totalexpensecount");
    excount.innerHTML = count;
    var budget=Number(document.getElementById("inputbudget").value);
    if(spend + amount <= budget){
        spend=spend+amount;
        var totalspend=document.getElementById("totalspendcount");
        totalspend.innerHTML=spend;
        var remainbudget=budget-spend;
        var remainingbudget=document.getElementById("remainingbudgetcount");
        remainingbudget.innerHTML=remainbudget;
    }
    else{
        alert("Amount Exceeded!!")
    }
    if(amount>highest){
        highest=amount;
        document.getElementById("highestexpensecount").innerHTML=highest;
    }
}
function search(){
    var table = document.getElementById("transactionList");
    var search=document.getElementById("filterinput").value;
    var filtercategory=document.getElementById("filtercatinput").value;
    for (var i = 0; i < table.rows.length; i++){
        if(table.rows[i].cells[1].innerHTML==search && table.rows[i].cells[3].innerHTML==filtercategory){
        let result=table.rows[i];
        document.getElementById("searchresult").innerHTML=result.outerHTML;
        }
    }
}
function search1(){
    var table = document.getElementById("transactionList");
    var search=document.getElementById("filterinput").value;
    for (var i = 0; i < table.rows.length; i++){
        if(table.rows[i].cells[1].innerHTML==search){
        let result=table.rows[i];
        document.getElementById("searchresult").innerHTML=result.outerHTML;
        }
    }
}
