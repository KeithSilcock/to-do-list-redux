import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {getSingleItem, completeItem, deleteItem, clearSingleItem} from '../actions'
import * as actions from '../actions';

class SingleItem extends React.Component{

    componentDidMount(){
        console.log(this.props)
        this.props.getSingleItem(this.props.match.params.id)
    }
    componentWillUnmount(){
        this.props.clearSingleItem();
    }

    clickToggleComplete(){
        const _id= this.props.match.params.id;
        this.props.completeItem(_id);
    }

    async handleDeleteItem(){
        const _id= this.props.match.params.id;
        await this.props.deleteItem(_id);

        this.props.history.push(`/`);
    }


    render(){
        const {title, details, complete} = this.props.item;

        function completness(ifTrue, ifFalse){
            return complete ? ifTrue : ifFalse
        }

        if(!title){
            return <p>Loading...</p>
        }

        // challenge: display all available info to user
        // get time, date when created and when completed
        // add two buttons, one to toggle complete (change text on button)
        // one to delete item from list. Redirect you back to list
        console.log(this.props.item)

        return(
            <div>
                <h1 className="center">To Do Item</h1>
                <div className="row right-align">
                    <Link to='/' className='btn green darken-3'>Back to Full List</Link>
                </div>
                <h3>{title}</h3>
                <h4>{details}</h4>
                <button className='btn red darken-2 pull-right' onClick={this.handleDeleteItem.bind(this)}>
                    Delete Item
                </button>
                <p>Item is: {completness('complete', 'incomplete')}</p>
                <button className={`btn ${completness('green', 'red')} darken-2`}
                        onClick={this.clickToggleComplete.bind(this)}>{completness('Toggle Incomplete','Complete Task')}
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single,
        complete: state.list.complete
    }
}

export default connect(mapStateToProps, actions)(SingleItem);