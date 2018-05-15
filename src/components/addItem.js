import React from 'react';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {addToDoItem} from'../actions';

class AddItem extends React.Component{

    async handleAddItem(values){
        await this.props.addToDoItem(values);
        this.props.history.push('/');
    }
    
    renderInput({label, input, meta:{touched, error}}){
        return (
            <div>
                <label>{label}</label>
                <input {...input} type="text" autoComplete='off'/>
                <p className="red-text text-darken-2">{touched && error}</p>
            </div>
        )
    }

    render() {
        const {handleSubmit} = this.props;
        return(
            <div>
                <h1 className="center">Add To Do Item</h1>
                <div className="row right-align">
                    <Link className="btn blue-grey" to='/'>View List</Link>
                </div>
                <div className="row">
                    <form onSubmit={handleSubmit(this.handleAddItem.bind(this))} className="col s12 m8 offset-m2">

                        <Field name="title" label='Item Title' component={this.renderInput}></Field>
                        <Field name="details" label='Item Details' component={this.renderInput}></Field>

                        <button className="btn purple darken-2">Add Item</button>
                    </form>
                </div>
            </div>
        )
    }
}

function validate({title, details}) {
    const errors = {};

    if(!title){
        errors.title = 'You had must enter a title!';
    }
    if(!details){
        errors.details='You had must add details!';
    }

    return errors;
}

AddItem = reduxForm({
    form: 'add_item',
    validate: validate,
})(AddItem);

export default connect(null, {addToDoItem: addToDoItem})(AddItem);