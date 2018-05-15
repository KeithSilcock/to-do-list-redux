import React from 'react';

class SingleItem extends React.Component{

    componentDidMount(){
        console.log(this.props)
        
    }

    render(){
        return(
            <div>
                <h1>Your mom's a single item</h1>
            </div>
        )
    }
}

export default SingleItem;