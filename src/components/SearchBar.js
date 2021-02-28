import React from 'react';

class SearchBar extends React.Component {
    state = { term: "" }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);

        this.setState ({ term: ""});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label className="form-label">Video Search</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={e => this.setState({ term: e.target.value })}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;





// <div className="form-group row">
//     <label className="col-sm-2 col-form-label">Video Search</label>
//     <div class="col-sm-10">
//         <input type="text" className="form-control" />
//     </div>
// </div>