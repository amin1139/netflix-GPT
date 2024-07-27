export const isFormValid = (email, password) => {
    const eamilIsValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const passwordIsValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)

    if (!eamilIsValid) return 'Emali is Not Valid'
    if (!passwordIsValid) return 'password is Not Valid'
    
}