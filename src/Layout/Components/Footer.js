import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography"
import "./Footer.css";

export default class Footer extends React.Component {


    render() {
        return (
            <Paper className="footer">
                <Typography className="text-start instructions" component="li">
                    Click on Status and Stars column labels, to sort by those 2 columns. Sorting by name has been disabled.
                    Given more time, an css animation might have been added, to function as call to action, to underline that the labels are clickable.
                </Typography>
                <Typography className="text-start instructions" component="li">
                    Type in the search box above Status column the status you want to filter by. Generally it can be implemented for example with checkbox,
                    that would display only the rows with status="active".
                </Typography>
            </Paper>
        );
    }
}
