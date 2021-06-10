import React, {useState, UseEffect} from 'react'
import {Link} from '@reach/router'
import {Table} from 'react-bootstrap'


const PetList = ({pets, removeFromDom}) =>{

    return(
        <div>
            <Link to="/pets/new">Add a pet to the shelter</Link>
            <h4>These pets are looking for a good home </h4>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            pets.sort((a, b) => (a.type.localeCompare(b.type))).map((pet, idx) => {
                                return( 
                                    <tr key={idx}>
                                        <td> {pet.name}</td>
                                        <td> {pet.type}</td>
                                        <td>  <Link to={`/pets/${pet._id}/edit`}>Edit </Link>  | 
                                        <Link to={`/pets/${pet._id}`} >Details</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    
                </tbody>
            </Table>
        </div>
    )
}

export default PetList;