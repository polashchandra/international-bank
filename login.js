document.getElementById('user-button').addEventListener('click',function(){
  const emailFlid=document.getElementById('user-email');
  const email=emailFlid.value;
  const passwordFlid=document.getElementById('user-password');
  const password=passwordFlid.value;
  if( email ==='p' && password === 'p'){
    window.location.href='bank.html'
  }
  else{
    alert('poshpa');
  }
});