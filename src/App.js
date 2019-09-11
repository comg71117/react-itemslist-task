import React from 'react';
import Layout from './Layout/Layout'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Items Datatable",
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <Layout title={this.state.title}/>
        );
    }
}
