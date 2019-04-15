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
                <div class="info-container">
                   <form>
                    <input class="form-control form-control-lg" type="text" placeholder="Search topics or keywords" onChange={this.onChangeWord} value={this.state.searchWord}/>
                           
                    <input class="form-control form-control-lg" type="text" placeholder="Find ranking of URL..." onChange={this.onChangeUrl} value={this.state.searchUrl}/>

                   
                    <button class="btn btn-primary" onClick={this.buttonClick}> Go </button>
                        
                </form>
                </div>
                           

                    <div>
                       {displayScrapeResults}
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
