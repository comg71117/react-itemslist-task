import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <Button variant="outlined" />
            </div>
            // <div>
            //     <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
            //     <Body />
            //     <Footer />
            // </div>
        );
    }
}
