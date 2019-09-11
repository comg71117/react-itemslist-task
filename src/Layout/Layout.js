import React from 'react';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <div>{this.props.title}</div>
            </div>
            // <div>
            //     <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
            //     <Body />
            //     <Footer />
            // </div>
        );
    }
}
