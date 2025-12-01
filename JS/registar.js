 <script>
        // Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Header Scroll Effect
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Password Toggle
        const passwordToggle = document.getElementById('passwordToggle');
        const passwordInput = document.getElementById('password');
        const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        
        passwordToggle.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            passwordToggle.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
        });
        
        confirmPasswordToggle.addEventListener('click', () => {
            const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPasswordInput.setAttribute('type', type);
            confirmPasswordToggle.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
        });
        
        // Form Validation
        const registrationForm = document.getElementById('registration-form');
        
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Reset error states
            const inputs = registrationForm.querySelectorAll('.form-control');
            inputs.forEach(input => {
                input.classList.remove('error');
            });
            
            // Validate first name
            const firstName = document.getElementById('firstName');
            if (!firstName.value.trim()) {
                firstName.classList.add('error');
                isValid = false;
            }
            
            // Validate last name
            const lastName = document.getElementById('lastName');
            if (!lastName.value.trim()) {
                lastName.classList.add('error');
                isValid = false;
            }
            
            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.classList.add('error');
                isValid = false;
            }
            
            // Validate phone
            const phone = document.getElementById('phone');
            if (!phone.value.trim()) {
                phone.classList.add('error');
                isValid = false;
            }
            
            // Validate password
            const password = document.getElementById('password');
            if (password.value.length < 8) {
                password.classList.add('error');
                isValid = false;
            }
            
            // Validate confirm password
            const confirmPassword = document.getElementById('confirmPassword');
            if (confirmPassword.value !== password.value) {
                confirmPassword.classList.add('error');
                isValid = false;
            }
            
            // Validate terms
            const terms = document.getElementById('terms');
            if (!terms.checked) {
                alert('Por favor, aceite os Termos de Serviço e Política de Privacidade');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate successful registration
                alert('Conta criada com sucesso! Redirecionando para a página de login...');
                // In a real application, you would submit the form to the server
                // and redirect after successful registration
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            }
        });
        
        // Real-time validation for password confirmation
        const passwordField = document.getElementById('password');
        const confirmPasswordField = document.getElementById('confirmPassword');
        
        confirmPasswordField.addEventListener('input', () => {
            if (passwordField.value !== confirmPasswordField.value) {
                confirmPasswordField.classList.add('error');
            } else {
                confirmPasswordField.classList.remove('error');
            }
        });
    </script>