export const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    } else if (!/^[a-zA-Z]+$/i.test(values.name)) {
        errors.name = 'Should be only letters'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters'
    }

    if (!values.changePassword) {
        errors.changePassword = 'Required'
    } else if (values.changePassword.length < 6) {
        errors.changePassword = 'Must be 6 characters'
    }

    return errors
}
