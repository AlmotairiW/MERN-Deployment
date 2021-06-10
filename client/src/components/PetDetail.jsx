
import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'
import DeleteButton from './DeleteButton';


const PetDetail = props => {
    
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [desc, setDesc] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [lodaed, setLoaded] = useState(false);


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

    return (
        <div>
            <Link to='/'>Back to Home</Link>
            {
                lodaed && <h4> Details about:  {name}</h4>
            }
            <div style={{border: '2px solid black'}}>
                <h6>Pet type: {type}</h6>
                <h6>Description: {desc}</h6>
                <h6>Skills: {skill1}<br/>{skill2} <br/>{skill3}</h6>
                <DeleteButton petId={props.id} name = {name}/>
            </div>
        </div>
    )
    }

    export default PetDetail;

