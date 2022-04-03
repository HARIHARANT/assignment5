import React, { useState } from 'react';

export default function ControlledComponent() {
    const [stateKey, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        courses: 'react',
        error: {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
        },
    });
    
    const handleSubmit = (e) => {
        console.log(stateKey);
        e.preventDefault();
        var errKey = Object.keys(stateKey).filter((key) => {
            if (stateKey[key] === '' && key != 'error') {
                return key;
            }
        });
        if (errKey.length >= 1) console.error('Please fill all fields');
        else console.log(stateKey);
    };

    const handleChange = async (e) => {
        var error = { ...stateKey.error };
        if (e.target.value === '') {
            error[e.target.name] = `${e.target.name} is required`;           
        } else {
            error[e.target.name] = '';
        }

        await setState({ error, [e.target.name]: e.target.value });       
        //console.log(stateKey);
    };


    return (
        <>
            <h3> Controlled Form </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> First Name: </label>
                    <input
                        type="text"
                        name="firstName"
                        value={stateKey.firstName}
                        onChange={(e) => handleChange(e)}
                    />
                    <br />
                    <span style={{ color: 'red' }}> {stateKey.error.firstName}</span>
                </div>
                <br />
                <div>
                    <label> Last Name: </label>
                    <input
                        type="text"
                        name="lastName"
                        value={stateKey.lastName}
                        onChange={(e) => handleChange(e)}
                    />
                    <br />
                    <span style={{ color: 'red' }}> {stateKey.error.lastName}</span>
                </div>
                <br />
                <div>
                    <label> Email: </label>
                    <input
                        type="text"
                        name="email"
                        value={stateKey.email}
                        onChange={(e) => handleChange(e)}
                    />
                    <br />
                    <span style={{ color: 'red' }}> {stateKey.error.email}</span>
                </div>
                <br />
                <div>
                    <label> Gender: </label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={(e) => handleChange(e)}
                    />{' '}
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={(e) => handleChange(e)}
                    />{' '}
                    Male
                    <br />
                    <span style={{ color: 'red' }}> {stateKey.error.gender}</span>
                </div>
                <br />
                <div>
                    <label> Courses: </label>
                    <select
                        name="courses"
                        value={stateKey.courses}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="react"> React </option>
                        <option value="node"> Node </option>
                        <option value="mongo"> Mongo </option>
                    </select>
                </div>
                <br />
                <div>
                    <button type="submit"> Submit </button>&nbsp;
                    <button type="button"> Reset </button>&nbsp;
                </div>
            </form>
        </>
    );
}
