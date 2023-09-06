import { useState } from 'react'

export default function Contact() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    let [validationMessage, setValidation] = useState({email: '', name: '', comment: ''})


    // handles values for inputs
    const handleInput = (event)=>{
        const {id, value} = event.target
        switch(id) {
            case 'emailInput':
                setEmail(value)
                break;
            case 'nameInput':
                setName(value)
                break;
            case 'commentInput':
                setComment(value)
                break;
        }
        
    }

    // validation for input fields
    const checkValidation = (event) => {
        const {id, value} = event.target
        const newValidation = {...validationMessage}
        if(!value) {
            if (id == 'emailInput') {
                newValidation.email = 'Email required '
            }
            else if (id == 'nameInput') {
                newValidation.name = 'Name required '
            }
            else if (id == 'commentInput') {
                newValidation.comment = 'Comment required '
            }

        } else {
            if (id == 'emailInput') {
                newValidation.email = ''
            }
            else if (id == 'nameInput') {
                newValidation.name = ''
            }
            else if (id == 'commentInput') {
                newValidation.comment = ''
            }
        }
        setValidation(newValidation)
    }

    // form submit event handler
    const handleFormSubmit = (event) => {
        event.preventDefault()
        setEmail('');
        setName('');
        setComment('');
        const newValidation = {}
        if(email && name && comment) {
            setValidation(newValidation)
            return
        } else {
            newValidation.email = 'Please enter all fields '
            setValidation(newValidation)
            return
        }
    }
    // jsx returned for form
    return (
        <div className='row justify-content-center my-3'>
            <form className='col-5' onSubmit={handleFormSubmit} onBlur={checkValidation}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="emailInput">Email address</label>
                    <input id="emailInput" className="form-control" value={email} onChange={handleInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Name</label>
                    <input value={name} className="form-control" id="nameInput" onChange={handleInput}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="commentInput">Comment</label>
                    <textarea id="commentInput" className="form-control" value={comment} onChange={handleInput}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

                {validationMessage && (
                    <div className='form-text'>
                        {validationMessage.name}
                        {validationMessage.email}
                        {validationMessage.comment}
                    </div>
                )}
            </form>
            
        </div>
    )
}