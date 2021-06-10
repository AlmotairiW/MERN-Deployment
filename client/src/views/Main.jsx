import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PetList from '../components/PetList';


const Main = props =>{
    const [pets, setPets] = useState([]);
    const [lodaed, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/')
        .then(res => {setPets(res.data); setLoaded(true);})
        .catch(err => console.log(err))
    },[pets])

    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet._id !== petId));
    }
    return(
        <div>
            { lodaed &&
                <PetList pets={pets} removeFromDom={removeFromDom}/>
            }

        </div>
    )
}

export default Main;