import { useState } from 'react';
const useForm = (callBack) => {

    const [values, setValues] = useState({});
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        callBack();
    };
    const handleChange = (event) => {
        event.persist();
        setTimeout({ ...values, [event.target.name]: event.targe.value })
    };

    return {
        handleChange,
        handleSubmit,
        values
    }

}