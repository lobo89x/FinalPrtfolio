import React from 'react';

export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: '', name: '', email: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeA = this.handleChangeA.bind(this);
        this.handleChangeB = this.handleChangeB.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form className="test-mailing"
            style={{backgroundColor: 'green'}}>
                <h1 style={{color: 'white'}}>Contact Me!</h1>
                <div>
                <textarea 
                    id="test-mailing"
                    name="test-mailing"
                    onChange={this.handleChangeB}
                    placeholder="Your Email"
                    required
                    value={this.state.email}
                    style={{width: '100%',
                    height: '15px'}}
                />
                <textarea 
                    id="test-mailing"
                    name="test-mailing"
                    onChange={this.handleChangeA}
                    placeholder="Full Name"
                    required
                    value={this.state.name}
                    style={{width: '100%',
                    height: '15px'}}
                />
                <textarea 
                    id="test-mailing"
                    name="test-mailing"
                    onChange={this.handleChange}
                    placeholder="Looking forward to hearing from you!"
                    required
                    value={this.state.message}
                    style={{width: '100%',
                    height: '150px'}}
                />
                </div>
                <input type='button' value='Submit' className='btn btn--submmit' onClick={this.handleSubmit} />
            </form>
        )
    }

    handleChange(event) {
        this.setState({message: event.target.value})
    }

    handleChangeA(event) {
        this.setState({name: event.target.value})
    }

    handleChangeB(event) {
        this.setState({email: event.target.value})
    }

    handleSubmit() {
        const templateId = 'contactme';
        this.sendMessage(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
        this.setState({ message: '', name: '', email: '' });
    }

    sendMessage (templateId, variables) {

        window.emailjs.send(
            'gmail', templateId, 
            variables
            ).then(res => {
                console.log('Email Successfully Sent!')
            })
            .catch(err => console.error('Email Send Failure::  ', err))
        }
}