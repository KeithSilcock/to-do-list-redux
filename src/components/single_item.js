import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingleItem} from '../actions'

class SingleItem extends React.Component{

    componentDidMount(){
        this.props.getItem(this.props.match.params.id)
    }

    render(){
        const {title, details} = this.props.item
        console.log(this.props)
        return(
            <div className="center">
                <h1>To Do Item</h1>
                <div className="row right-align">
                    <Link to='/' className='btn green darken-3'>Back to Full List</Link>
                </div>
                <h3>{title}</h3>
                <h4>{details}</h4>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, {getItem: getSingleItem})(SingleItem);