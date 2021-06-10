import React, {useState} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'
import PetForm from '../components/PetForm';


const Create = props =>{
    const [errors, setErrors] = useState([]);

    const addHandler = pet =>
    {
        axios.post('http://localhost:8000/api/pets/new', pet)
        .then(res => navigate('/'))
        .catch(err => {
            const errRes = err.response.data.errors;
            const errArr = [];
            for (const key of Object.keys(errRes)){
                errArr.push(errRes[key].message);
            }
            setErrors(errArr);
        })

    }
    return(
        <div>
            <Link to='/'>Back to Home</Link>
            <p>Know a pet needing a home</p><br/>
            {errors.map((err, idx) => {
                return(
                    <p key={idx} style={{color: 'red'}}>{err}</p>
                )
            })}
            <PetForm onSubmit={addHandler} 
            name=""
            type=""
            desc=""
            skill1=""
            skill2=""
            skill3=""
            formSelect=" Add"/>
        </div>
    )
}

export default Create;