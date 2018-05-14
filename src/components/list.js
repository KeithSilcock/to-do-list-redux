import React from 'react';
import {connect} from 'react-redux'; //higher order component
import {getListData} from '../actions'

class List extends React.Component{

    componentDidMount(){
        this.props.getListData();
    }

    render(){
        const {listData} = this.props;

        const listItems = listData.map( (item, index) => {
            return(
                <li className="collection-item" key={index}>{item.title}</li>
            )
        });

        return(
            <ul className="collection">{listItems}</ul>

        )
    }
}

function mapStateToProps(state) {
    return {
        listData: state.list.all,
    }
}

export default connect(mapStateToProps, {getListData})(List);