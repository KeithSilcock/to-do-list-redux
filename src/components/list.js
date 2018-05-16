import React from 'react';
import {connect} from 'react-redux'; //higher order component
import {Link} from 'react-router-dom';
import {getListData} from '../actions'

class List extends React.Component{

    componentDidMount(){
        this.props.getListData();
    }

    render(){
        const {listData} = this.props;

        //loading screen
        if(!listData.length){
            return <h1>Loading...</h1>
        }

        const listItems = listData.map( (item, index) => {
            return(
                <li className="collection-item" key={index}>
                    <Link to={`/item/${item._id}`}>
                        {item.title}
                    </Link>
                </li>
            )
        });

        return(
            <div>
                <h1 className="center">To Do List</h1>
                <div className="row right-align">
                    <Link className='btn blue-grey' to={"/add-item"}>Add Item</Link>
                </div>
                <ul className="collection">
                    {listItems}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listData: state.list.all,
    }
}

export default connect(mapStateToProps, {getListData})(List);