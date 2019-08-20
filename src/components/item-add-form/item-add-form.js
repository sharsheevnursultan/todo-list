import React, {Component} from "react";
import "./item-add-form.css"

class ItemAddForm extends Component {
    state = {
        oninput: ''
    };

    onHandleInput(event) {
        this.setState({oninput: event.target.value});
    };

    submitInput(event) {
        event.preventDefault();
        this.props.addItem(this.state.oninput);
        this.setState({oninput:""})
    }


    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.submitInput.bind(this)}
            >
                <input type="text"
                       className="form-control"
                       placeholder="What needs to be done"
                       onChange={this.onHandleInput.bind(this)}
                       value={this.state.oninput}
                />
                <button
                    className="btn btn-outline-success"

                >
                    Add Item
                </button>

            </form>
        );
    }
}


export default ItemAddForm;