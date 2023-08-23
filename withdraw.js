document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputinbox=document.getElementById('input-documentation');
    const inputbalue=inputinbox.value;
    const inputparse=parseFloat(inputbalue);
    
    const withdrawFlid=document.getElementById('withdarw-viwe');
    const withdarw=withdrawFlid.innerText;
    const withdarwParse=parseFloat(withdarw);

    const totalwithdar=inputparse+withdarwParse;
    withdrawFlid.innerText=totalwithdar;

    const totalbalance=document.getElementById('balance-viwe');
    const totals=totalbalance.innerText;
    const totalparse=parseFloat(totals);

    const totalSubmition = inputparse - totalparse;
    totalbalance.innerText= totalSubmition;
    
    if( isNaN(inputparse)){
        alert(' number is noit valid');
        return;
    }
})