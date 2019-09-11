import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography"
import "./Header.css";

export default class Header extends React.Component {


    render() {
        return (
            <Paper className="header">
                <Typography className="text-center" variant="h4" component="h4">
                    {this.props.title}
                </Typography>
            </Paper>
        );
    }
}
