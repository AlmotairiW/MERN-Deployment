import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'
import PetForm from '../components/PetForm';


const Update = props =>{

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [desc, setDesc] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [lodaed, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + props.id)
        .then( res => {
            setName(res.data.name);
            setType(res.data.type);
            setDesc(res.data.desc);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
            setLoaded(true);
        })
        .catch( err => console.log(err));
    },[props.id]);

    const updateHandler = pet => {
        axios.put('http://localhost:8000/api/pets/update/' + props.id, pet)
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
            {errors.map((err, idx) => {
                return(
                    <p key={idx} style={{color: 'red'}}>{err}</p>
                )
            })}
            {
                lodaed && 
                <p>Edit {name}:</p>
            }
            {
                lodaed && 
                <PetForm onSubmit={updateHandler} 
                name= {name}
                type = {type}
                desc= {desc}
                skill1={skill1}
                skill2= {skill2}
                skill3={skill3}
                formSelect=" Edit"/>
            }
            
        </div>
    )
}

export default Update;