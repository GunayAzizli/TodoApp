import React, { useState } from 'react'
import "./Form.css"

function Form({ list, setList }) {
    const [value, setValue] = useState({ text: "", id: "" });
    const [err, setErr] = useState(false)

    const inputHandler = (e) => {
        setValue({ ...value, text: e.target.value })
        console.log(value.text);
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (value.text.trim() !== "") {
            setErr(false)
            setList([...list, { ...value, id: Date.now() }])
            setValue({ text: "", id: "" })
        } else {
            setErr(true)
        }


    }

    return (
        <div>

            <form onSubmit={submitHandler} id='Form' className='m-4 p-1  d-flex justify-content-between align-items-center ps-4 rounded'>
                <input value={value.text} onChange={inputHandler} type="text" className='border-0 input-w-80' />
                <button type='submit' className='btn btn-dark p-2'>add</button>
            </form>
            
        </div>
    )
}

export default Form