import React, { Component } from "react";
import helpers from "./utils/helpers.js"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Topic: "",
            startYear: "",
            endYear: ""
        };
    }

    _submit(event) {
        event.preventDefault();
        helpers.searchNYT(this.state.Topic, this.state.startYear, this.state.endYear).then((results) => {

            //pushing articles to the an array to be passed
            let articlesResult = [];
            for (var i = 0; i < results.data.response.docs.length; i++) {
                articlesResult.push(results.data.response.docs[i]);
            }
            this.props.searchResults(articlesResult);
        })
    }

    render () {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2 className="panel-heading text-center">Search</h2>
                </div>
                <div className="panel-body">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label >Article Topic</label>
                            <input type="text" className="form-control" value={this.state.searchTerm} onChange={this.handleSearchTerm} />
                        </div>
                        <div className="form-group">
                            <label >Start Year</label>
                            <input type="text" className="form-control" value={this.state.begin_date} onChange={this.handleStart} />
                        </div>
                        <div className="form-group">
                            <label >End Year</label>
                            <input type="text" className="form-control" value={this.state.end_date} onChange={this.handleEnd} />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <input className="btn btn-success" type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default Search;