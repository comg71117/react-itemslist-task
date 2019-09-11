import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";


export default class App extends React.Component {


    render() {
        return (
            <Container maxWidth="md">
                <Paper className="header">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Header title={this.props.title}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Body/>
                        </Grid>
                        <Grid item xs={12}>
                            <Footer/>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        );
    }
}
