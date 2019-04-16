import React, { Component } from 'react';
import { fetchScrapeResults } from '../data/actions/SearchActions.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


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

            <h2 >{ranking}</h2>
        )
        );
        return (

            <React.Fragment>
                <div class="header">
                    <div class="header-text">
                        SERP Ranker
                        </div>
                </div>

                <div class="info-container">


                    <div class="row p-100 justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8 p-100">
                            <form class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <i class="fas fa-search h4 text-body"></i>
                                    </div>

                                    <div class="col info-textbox">
                                        <label class="result-head"><h3>Search keywords</h3></label>
                                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" type="text"

                                            onChange={this.onChangeWord}
                                            value={this.state.searchWord} />
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

                                    <div class="col info-textbox">
                                        <label class="result-head"><h3>Website URL</h3></label>
                                        <input class="form-control form-control-lg form-control-borderless" type="search" type="text"
                                            placeholder="Find ranking of URL..."
                                            onChange={this.onChangeUrl}
                                            value={this.state.searchUrl} />
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div class="row p-100">
                        <div class="col-sm-6 btn-section">
                            <button class="info-btn btn btn-rounded btn-outline-primary" onClick={this.buttonClick}> Go </button>
                        </div>
                    </div>
                   
                        <label class="result-head"><h3>SERP rank</h3></label>
                        
                        <div class="row p-100">
                            <div class="col-sm-8 result-section">
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
