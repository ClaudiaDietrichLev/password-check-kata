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

        if (!checkIsPasswordsEqual(passwordTextOne, passwordTextTwo)) {
            const allErrors = document.querySelectorAll('.errors p');
            allErrors.forEach(function (errorElement) {
                errorElement.classList.add('has-error');
            })
        }
        else {
            const allErrors = document.querySelectorAll('.errors p');
            allErrors.forEach(function (errorElement) {
                errorElement.classList.add('has-error');
            })

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
        return password !== password.toLowerCase();
    }

    function checkContainsUpperCaseLetter(password) {
        return password !== password.toUpperCase();
    }

    function checkContainsNumber(password) {
        // https://stackoverflow.com/a/36077900
        var regex = /\d/g;
        return regex.test(password);
    }

    function checkCharacterLenght(password) {
        return password.length >= 10;
    }

})()