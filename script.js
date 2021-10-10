(function () {

    // Init Function
    initEventListeners();

    function initEventListeners() {
        const passwordOneElement = document.querySelector('#passwordOne');
        const passwordTwoElement = document.querySelector('#passwordTwo');

        passwordOneElement.addEventListener('input', handlePasswordChangedEvent);
        passwordTwoElement.addEventListener('input', handlePasswordChangedEvent);

        const toggleButton = document.querySelector('form button');
        toggleButton.addEventListener('click', handleTogglePasswordVisibility);
    }

    function handleTogglePasswordVisibility() {
        const toggleButton = document.querySelector('form button');
        const passwordOneElement = document.querySelector('#passwordOne');
        const passwordTwoElement = document.querySelector('#passwordTwo');

        if (passwordOneElement.type === 'password') {
            toggleButton.textContent = "Hide Passwords";
            passwordOneElement.type = "text";
            passwordTwoElement.type = "text";
        }
        else {
            toggleButton.textContent = "Show Passwords";
            passwordOneElement.type = "password";
            passwordTwoElement.type = "password";
        }

    }

    function handlePasswordChangedEvent() {
        const passwordTextOne = document.querySelector('#passwordOne').value
        const passwordTextTwo = document.querySelector('#passwordTwo').value

        // start with all error-state
        const allErrors = document.querySelectorAll('.errors p');
        allErrors.forEach(function (errorElement) {
            errorElement.classList.add('has-error');
        })

        if (checkIsPasswordsEqual(passwordTextOne, passwordTextTwo)) {
            document.querySelector('.errors .equal').classList.remove('has-error');

            if (checkContainsLowerCaseLetter(passwordTextOne)) {
                document.querySelector('.errors .lowercase').classList.remove('has-error');
            }

            if (checkContainsUpperCaseLetter(passwordTextOne)) {
                document.querySelector('.errors .uppercase').classList.remove('has-error');
            }

            if (checkContainsNumber(passwordTextOne)) {
                document.querySelector('.errors .contains-number').classList.remove('has-error');
            }

            if (checkCharacterLenght(passwordTextOne)) {
                document.querySelector('.errors .min-characters').classList.remove('has-error');
            }

        }
    }

    /** Password Checks */
    function checkIsPasswordsEqual(password1, password2) {
        return password1 === password2;
    }

    function checkContainsLowerCaseLetter(password) {
        return password.match(/[a-z]/);
    }

    function checkContainsUpperCaseLetter(password) {
        return password.match(/[A-Z]/);
    }

    function checkContainsNumber(password) {
        return password.match(/[0-9]/);
    }

    function checkCharacterLenght(password) {
        return password.length >= 10;
    }

})()