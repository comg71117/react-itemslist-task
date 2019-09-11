import React from 'react';
import Layout from './Layout/Layout'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Items Datatable",
        };
    }
    
    render() {
        return (
            <Layout title={this.state.title}/>
        );
    }
}
