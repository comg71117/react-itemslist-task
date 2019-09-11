import React from 'react';
import Layout from './Layout/Layout'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "the items datatable",
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <Layout title={this.state.title}/>

            // <div>
            //     <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
            //     <Body />
            //     <Footer />
            // </div>
        );
    }
}
