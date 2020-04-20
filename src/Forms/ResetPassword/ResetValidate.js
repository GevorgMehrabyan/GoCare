export const validate = values => {
    const errors = {}

    //newPassword
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters'
    }

    //ConfirmPassword
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
    } else if (values.confirmPassword.length < 6) {
        errors.confirmPassword = 'Must be 6 characters'
    }else if( values.confirmPassword && values.password) {
        let qty = 0;
        for (let i = 0; i < values.password.length; ++i) {
            if (values.password[i] === values.confirmPassword[i]) {
                qty++;
            }
        }
        if (qty !== values.password.length) {
            errors.confirmPassword = 'Passwords dont match'
        }
    }

    return errors
}


