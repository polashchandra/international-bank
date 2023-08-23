document.getElementById('btn-deposit').addEventListener('click',function(){
    const inputFlid=document.getElementById('input-text');
    const input=inputFlid.value;
    const Newinput=parseFloat(input);
    
    const diposittotal=document.getElementById('deposit-viwe');
    const diposit=diposittotal.innerText;
    const newDiposit=parseFloat(diposit);

    const dipositfull= Newinput + newDiposit;
    diposittotal.innerText=dipositfull

    const balancefild=document.getElementById('balance-viwe');
    const balance=balancefild.innerText;
    const balanceParse=parseFloat(balance);

    const totalBalange= balanceParse + Newinput;
    balancefild.innerText= totalBalange;
});