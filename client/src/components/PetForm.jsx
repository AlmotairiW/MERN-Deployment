import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import {navigate} from '@reach/router'


const PetForm = props =>{
    const {onSubmit} = props;
    const {formSelect} = props;
    const [name, setName] = useState(props.name);
    const [type, setType] = useState(props.type);
    const [desc, setDesc] = useState(props.desc);
    const [skill1, setSkill1] = useState(props.skill1);
    const [skill2, setSkill2] = useState(props.skill2);
    const [skill3, setSkill3] = useState(props.skill3);
    

    const formHandelr = e =>{
        e.preventDefault();
        onSubmit({
            name,
            type,
            desc,
            skill1,
            skill2,
            skill3});
    }
    return(
        <div>
            <div style= {{display:'inline-block'}}>
            <Form onSubmit={formHandelr}>
            <div>
                <Form.Group >
                    <Form.Label>Pet Name: </Form.Label>
                    <Form.Control type="text" value = {name} onChange={ (e) => setName(e.target.value) } />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Pet Type: </Form.Label>
                    <Form.Control type="text" value = {type} onChange={ (e) => setType(e.target.value) } />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Pet Description: </Form.Label>
                    <Form.Control type="text" value = {desc} onChange={ (e) => setDesc(e.target.value) } />
                </Form.Group>
            </div>

            <div>
                <Form.Group >
                    <Form.Label>Skills(Optional): </Form.Label> <br/><br/>
                    <Form.Label>Skill 1: </Form.Label>
                    <Form.Control type="text" value = {skill1} onChange={ (e) => setSkill1(e.target.value) } />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Skill2: </Form.Label>
                    <Form.Control type="text" value = {skill2} onChange={ (e) => setSkill2(e.target.value) } />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Skill3: </Form.Label>
                    <Form.Control type="text" value = {skill3} onChange={ (e) => setSkill3(e.target.value) } />
                </Form.Group>
            </div>

            <Button variant="primary" type="submit"> {formSelect} Pet </Button>| |<Button variant="primary" type="submit" onClick={e => {navigate('/')}}> Cancel </Button>

            </Form>
            </div>
        </div>
    )
}

export default PetForm;