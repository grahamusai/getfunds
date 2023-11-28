import * as Yup from 'yup'

export const calculatorValidation = Yup.object({
    turnover: Yup.number()
    .min(9, "You can't enter a number above R100 million")
    .required("Please enter your monthly turnover"),
    amount: Yup.number().min(3).required("Please enter the amout you want"),
    duration: Yup.number().min(3).required('Please enter the duration')
})