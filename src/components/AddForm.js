import { connect } from 'react-redux';
import React from 'react';

import { addSmurf } from './../actions';

class AddForm extends React.Component {
    state = {
        name: "",
        position: "",
        nickname: "",
        description: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: "",
            position: "",
            nickname: "",
            description: ""
        });
    }

    render() {
        const { error } = this.props;

        return(<section>
            <h2>Add Smurf</h2>

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input value={this.state.name} onChange={this.handleChange} name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label><br/>
                    <input value={this.state.position} onChange={this.handleChange} name="position" id="position" />
                </div>
                <div className="form-group">
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input value={this.state.nickname} onChange={this.handleChange} name="nickname" id="nickname" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label><br/>
                    <input value={this.state.description} onChange={this.handleChange} name="description" id="description" />
                </div>
                {
                    error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {error}</div>
                }
                
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = state => {
    return ({
        error: state.error
    });
}
export default connect(mapStateToProps, {addSmurf})(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.