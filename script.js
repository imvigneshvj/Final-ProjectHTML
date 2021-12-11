function calInterest(){
    var amount1 = document.getElementById("amount").value;
    var year1 = document.getElementById("year").value;
    var percent1 = document.getElementById("percentage").value;

    var si = (amount1 *year1 *percent1)/100;


    alert("Simple Interest is "+si+" Dollers");
}