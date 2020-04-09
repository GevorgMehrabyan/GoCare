export const validate = values => {
    const errors = {}

    //newPassword
    if (!values.newPassword) {
        errors.newPassword = 'Required'
    } else if (values.newPassword.length < 6) {
        errors.newPassword = 'Must be 6 characters'
    }

    //ConfirmPassword
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
    } else if (values.confirmPassword.length < 6) {
        errors.confirmPassword = 'Must be 6 characters'
    }else if( values.confirmPassword && values.newPassword) {
        let qty = 0;
        for (let i = 0; i < values.newPassword.length; ++i) {
            if (values.newPassword[i] === values.confirmPassword[i]) {
                qty++;
            }
        }
        if (qty !== values.newPassword.length) {
            errors.confirmPassword = 'Passwords dont match'
        }
    }

    return errors
}


