function addEmployee(employeeID,firstname,lastname,mobileno){
        var employeeID = document.getElementById("employeeID").value;
        var firstname = document.getElementById("fname").value;
        var lastname = document.getElementById("lname").value;
        var mobileno = document.getElementById("mobileno").value;   
        var table=document.getElementById("results");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = employeeID;
        cell2.innerHTML = firstname;
        cell3.innerHTML = lastname;        
        cell4.innerHTML = mobileno;  
        cell5.innerHTML = '<button type="button" onClick="editEmployee(\''+employeeID+'\', \''+firstname+'\', \''+lastname+'\', \''+mobileno+'\');"/>Edit</button>'; 
        cell6.innerHTML = '<button type="button" onClick="deleteEmployee(this);">Delete</button>';             
}

    function editEmployee(){
         employeeID = document.getElementById("employeeID").value;
         firstname = document.getElementById("fname").value;
         lastname = document.getElementById("lname").value;
        mobileno = document.getElementById("mobileno").value;      
 }
    function deleteEmployee(node){    
    r=node.parentNode.parentNode;
    r.parentNode.removeChild(r);
}
$(document).ready(function(){
    $("#mobileno").click(function(){
        alert("Mobile Number must be 10 digit")
    });
});