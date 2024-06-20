import { useFormik } from "formik";
import validationrules from "./validationRules2";

export default function Validation2() {
    const formik = useFormik({
        initialValues: {
            uname: "",
            age: "",
            email: "",
            loc: "",
            gen: "",
            edu: [],
            job: []
        },
        validationSchema: validationrules,
        onSubmit: (data, action) => {
            console.log(data);
            action.resetForm();
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                ENTER USERNAME :
                <input type='text' name="uname" onChange={formik.handleChange} value={formik.values.uname} />
                <span style={{ color: 'red' }}>
                    {formik.errors.uname && formik.touched.uname ? formik.errors.uname : null}
                </span>
                <br></br>
                ENTER AGE :
                <input type='number' name='age' onChange={formik.handleChange} value={formik.values.age} />
                <span style={{ color: 'red' }}>
                    {formik.errors.age && formik.touched.age ? formik.errors.age : null}
                </span>
                <br></br>
                ENTER EMAIL :
                <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email} />
                <span style={{ color: 'red' }}>
                    {formik.errors.email && formik.touched.email ? formik.errors.email : null}
                </span>
                <br></br>
                SELECT LOCATION :
                <select name="loc" onChange={formik.handleChange} value={formik.values.loc}>
                    <option value="">select location</option>
                    <option value="shimla">shimla</option>
                    <option value="kolkata">kolkata</option>
                    <option value="howrah">howrah</option>
                    <option value="new jalpaiguri">njp</option>
                </select>
                <span style={{ color: 'red' }}>
                    {formik.errors.loc && formik.touched.loc ? formik.errors.loc : null}
                </span>
                <br></br>
                SELECT GENDER :
                <input type="radio" name="gen" value="MALE" checked={formik.values.gen === 'MALE'} onChange={formik.handleChange} />M
                <input type="radio" name="gen" value="FEMALE" checked={formik.values.gen === 'FEMALE'} onChange={formik.handleChange} />F
                <span style={{ color: 'red' }}>
                    {formik.errors.gen && formik.touched.gen ? formik.errors.gen : null}
                </span>
                <br></br>
                SELECT EDUCATION :
                <input type='checkbox' name='edu' checked={formik.values.edu.includes('graduate')} value="graduate" onChange={formik.handleChange} />Graduate
                <input type='checkbox' name='edu' checked={formik.values.edu.includes('postgraduate')} value="postgraduate" onChange={formik.handleChange} />Postgrad
                <input type='checkbox' name='edu' checked={formik.values.edu.includes('mca')} value="mca" onChange={formik.handleChange} />MCA
                <input type='checkbox' name='edu' checked={formik.values.edu.includes('btech')} value="btech" onChange={formik.handleChange} />B.Tech
                <span style={{ color: 'red' }}>
                    {formik.errors.edu && formik.touched.edu ? formik.errors.edu : null}
                </span>
                <br></br>
                SELECT JOB ROLE:
                <select name="job" onChange={formik.handleChange} value={formik.values.job} multiple>
                    <option value="faculty">faculty</option>
                    <option value="developer">developer</option>
                    <option value="doctor">doctor</option>
                    <option value="sales">sales</option>
                </select>
                <span style={{ color: 'red' }}>
                    {formik.errors.job && formik.touched.job ? formik.errors.job : null}
                </span>
                <br></br>
                <input type="submit" value="REGISTER" />
                <input type="reset" value="RESET" onClick={formik.handleReset} />
            </form>
        </>
    )
}