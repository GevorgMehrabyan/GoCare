export const validate = values => {
    const errors = {}

    //Username
    if (!values.userName) {
        errors.userName = 'Required'
    } else if (values.userName.length < 6) {
        errors.userName = 'Must be 6 characters'
    }

    //Password
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters'
    }

    return errors
}


