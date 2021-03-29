import React from "react";
import './SearchPanel.css'

class SearchPanel extends React.Component {
    state = {
        term: ''
    };

    onTermChange = (e) => {
        const {onSearchChange = () => {}} = this.props;
        this.setState({
            term: e.target.value
        });

        onSearchChange(e.target.value);
    };

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Type to search"
                   value={this.state.term}
                   onChange={ this.onTermChange } />
        );
    };
}

export default SearchPanel;