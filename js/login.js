document.getElementById('submit-btn').addEventListener('click',function(){
    
      const emailField = document.getElementById('text-email');
      const email = emailField.value;
      emailField.value = '';

      const passwordField = document.getElementById('text-password');
      const password = passwordField.value;
       passwordField.value = '';
      
      if(email === 'bkash@gmail.com' && password === '12345'){
       window.location.href = 'bank.html'
      }
     else{
        alert('wrong email and password')
     }
      
          


} )