 <script>
        
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
       
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
      
        const passwordToggle = document.getElementById('passwordToggle');
        const passwordInput = document.getElementById('password');
        
        passwordToggle.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            passwordToggle.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
        });
        
       
        const loginForm = document.getElementById('login-form');
        
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
           
            const inputs = loginForm.querySelectorAll('.form-control');
            inputs.forEach(input => {
                input.classList.remove('error');
            });
            
          
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.classList.add('error');
                isValid = false;
            }
            
         
            const password = document.getElementById('password');
            if (password.value.length < 6) {
                password.classList.add('error');
                isValid = false;
            }
            
            if (isValid) {
                
                alert('Login realizado com sucesso! Redirecionando...');
              
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }
        });
        
      
        const passwordModal = document.getElementById('passwordModal');
        const forgotPasswordLink = document.getElementById('forgotPassword');
        const closeModal = document.querySelector('.close-modal');
        
        
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            passwordModal.style.display = 'block';
        });
        
      
        closeModal.addEventListener('click', () => {
            passwordModal.style.display = 'none';
        });
        
      
        window.addEventListener('click', (e) => {
            if (e.target === passwordModal) {
                passwordModal.style.display = 'none';
            }
        });
        
        
        const passwordResetForm = document.getElementById('password-reset-form');
        
        passwordResetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const resetEmail = document.getElementById('reset-email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(resetEmail.value)) {
                resetEmail.classList.add('error');
                return;
            }
            
          
            alert(`Instruções de recuperação enviadas para ${resetEmail.value}`);
            passwordModal.style.display = 'none';
            passwordResetForm.reset();
        });
        
 
        const socialButtons = document.querySelectorAll('.social-btn');
        
        socialButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = button.classList.contains('facebook') ? 'Facebook' : 
                                button.classList.contains('google') ? 'Google' : 'Apple';
                alert(`Redirecionando para login com ${platform}`);
            });
        });
    </script>