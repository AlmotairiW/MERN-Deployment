import React from 'react'
import axios from 'axios';
import {Button} from 'react-bootstrap'
import {navigate} from '@reach/router'


const DeleteButton = props =>{
    const {petId, name} = props;

    const deletePet = e  =>
    {
        axios.delete('http://localhost:8000/api/pets/delete/' + petId)
        .then(res => navigate('/'));

    }

    return <Button variant="danger" onClick={deletePet}> Adopt {name} </Button>
    

}

export default DeleteButton;