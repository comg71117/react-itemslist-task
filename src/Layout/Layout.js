import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from "./Components/Header";
import Body from "./Components/Body";


export default class App extends React.Component {


    render() {
        return (
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Header title={this.props.title}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Body />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}
