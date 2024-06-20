import { useFormik } from "formik";
import { validation } from "./validationRules1";


const Validation1 = () => {
    const initialData = {
        name: '',
        age: ''
    };
    const formik = useFormik({
        initialValues: initialData,
        validationSchema: validation,
        onSubmit: (data, action) => {
            console.log(data);
            action.resetForm();
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input placeholder="your full name" type="text" id="name" value={formik.values.name} onChange={formik.handleChange} /><br />
                <span style={{ color: 'red' }}>
                    {
                        formik?.errors && formik?.touched?.name && formik?.errors?.name
                    }
                </span><br /> <br />
                <label htmlFor="age">Age: </label>
                <input type="number" id="age" placeholder="your email id" value={formik.values.age} onChange={formik.handleChange} /> <br />
                <span style={{ color: 'red' }}>
                    {
                        formik?.errors && formik?.touched?.age && formik?.errors?.age
                    }
                </span><br /> <br />
                <input type="submit" value="REGISTER" /> <br />
                <input type="button" onClick={formik.handleReset} value='RESET' />
            </form>
        </>
    )
}

export default Validation1;