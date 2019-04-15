import React, { Component } from 'react';
import { fetchScrapeResults } from '../data/actions/SearchActions.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Home extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            searchWord: '',
            searchUrl: ''
        };

        this.onChangeWord = this.onChangeWord.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
    }

    onChangeWord(e) {
        e.preventDefault();
            this.setState({ searchWord: e.target.value });
    
    }

    onChangeUrl(e) {
        e.preventDefault();
        this.setState({ searchUrl: e.target.value });

    }

    buttonClick = () => {
        this.props.handleClick(this.state.searchWord, this.state.searchUrl);
    };

    showResults() {
        console.log(this.props.scrapeResults);
    }

    

    render() {
        const displayScrapeResults = this.props.scrapeResults.map(ranking => (
            <p>{ranking}</p>
        )
        );
        return (
            <React.Fragment>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Rankings</h1>
                    </div>
                </div>
                <div class="container-fluid">
                   

                            <div class="row p-100 justify-content-center">
                                <div class="col-12 col-md-10 col-lg-8 p-100">
                                    <form class="card card-sm">
                                        <div class="card-body row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <i class="fas fa-search h4 text-body"></i>
                                            </div>
                                          
                                    <div class="col">
                                                <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" type="text"
                               
                                                    onChange={this.onChangeWord}
                                                    value={this.state.searchWord}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                               
                    </div>


                    <div class="row p-100 justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8 p-100">
                            <form class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <i class="fas fa-search h4 text-body"></i>
                                    </div>

                                    <div class="col">
                                        <input class="form-control form-control-lg form-control-borderless" type="search" type="text"
                                            placeholder="Find ranking of URL..."
                                            onChange={this.onChangeUrl}
                                            value={this.state.searchUrl}/>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div class="row p-100">
                        <div class="col-sm-6 p-100">
                    <button class="btn btn-primary" onClick={this.buttonClick}> Go </button>
                        </div>
                    
                <div>
                            {displayScrapeResults}
                        </div>      
            </div>
                </div>
                </React.Fragment>
        );
    }
}

Home.propTypes = {

    scrapeResults: PropTypes.array
};

const mapDispatchToProps = dispatch => ({
    handleClick: (searchWord, searchUrl) => {
        dispatch(fetchScrapeResults(searchWord, searchUrl));
    }
});


const mapStateToProps = state => ({
    scrapeResults: state.scrapeResultsList.scrapeResults
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
