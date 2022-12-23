import {Form, Field, Formik, ErrorMessage} from "formik";
import * as Yup from 'yup';

const CustomForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(3, 'Minimum 3 symbols!')
                    .required('Name is required!'),
                email: Yup.string()
                    .email('Email is not valid!')
                    .required('Email is required!'),
                amount: Yup.number()
                    .min(5, 'At least 5')
                    .required('Amount is required!'),
                currency: Yup.string()
                    .required('Choose currency'),
                text: Yup.string()
                    .min(10, 'At least 10 symbols!'),
                terms: Yup.boolean()
                    .required('Need agreement!')
                    .oneOf([true], 'Need agreement!')
            })}
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2>Donation</h2>

                <label htmlFor="name">Your name</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <ErrorMessage className="error" name="name" component="div" />

                <label htmlFor="email">Your email</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className="error" name="email" component="div" />

                <label htmlFor="amount">Amount</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage className="error" name="amount" component="div" />

                <label htmlFor="currency">Currency</label>
                <Field
                    as="select"
                    id="currency"
                    name="currency"
                >
                    <option value="">Choose currency</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className="error" name="currency" component="div" />

                <label htmlFor="text">Your message</label>
                <Field
                    as="textarea"
                    id="text"
                    name="text"
                />
                <ErrorMessage className="error" name="text" component="div" />

                <label className="checkbox">
                    <Field
                        name="terms"
                        type="checkbox"
                    />
                    Do you agree to the privacy policy?
                </label>
                <ErrorMessage className="error" name="terms" component="div" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;