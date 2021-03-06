import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     editItem: this.props.editItem
        // }
        
    }
    
    isChange = (event) => {
        var name = event.target.name;
        var value =  event.target.value;
        this.setState({
            [name] : value
        });   
    }

    addData = (title, content) => {
        var item = {};
        item.title = title;
        item.content = content;
        // console.log(item);
        // this.props.getData(item);
        // this.props.addDataGetFromStore(JSON.stringify(item));
        this.props.addDataGetFromStore(item);
        // console.log(JSON.stringify(item));

    }

    
    componentWillMount() {
        console.log(this.props.editItem);
        if (this.props.editItem) {
            this.setState({
                title: this.props.editItem.title,
                content: this.props.editItem.content,
                key: this.props.editItem.key
            });
        }
    }
    

    render() {
        return (
            <div className="col-4">
                <form>
                    <h3>Edit Note</h3>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" className="form-control"
                           defaultValue={this.props.editItem.title}
                           onChange= { (event) => this.isChange(event)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input type="text" name="content" id="content" className="form-control"
                            defaultValue={this.props.editItem.content}
                            onChange= { (event) => this.isChange(event)} 
                        />
                    </div>
                    <input type="reset" value="Add" className="btn btn-block btn-primary"
                        onClick={ (title, content) => this.addData(this.state.title, this.state.content)}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem
    }
}
// this.props.editItem

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataGetFromStore: (storeItem) => {
            dispatch({type: 'ADD_DATA', storeItem})
        }
    }
}
// this.props.addDataGetFromStore

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);