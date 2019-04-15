import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class Search extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            searchWord: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        this.setState({ searchWord: e.target.value });
    }

    buttonClick = () => {
        this.props.handleClick(this.state.searchWord);
    };


    render() {
        return (

            <div>
                
                <input
                    type="text"
                    placeholder="Start searching..."
                    onChange={this.onChange}
                    value={this.state.searchWord}
                />
                <button onClick={this.buttonClick}> Go </button>
                <br /><br /><br />
            </div>

        );
    }
}

Search.propTypes = {

    handleClick: PropTypes.func.isRequired
};

