import React from 'react';
import {makeStyles, Typography, Divider, Grid, Card, CardMedia, CardActionArea, CardHeader} from "@material-ui/core"
import {CategoryContext} from "../../context/CategoryContext";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    title: {
        fontFamily: "'Open Sans', sans-serif",
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        margin: 'auto',
        padding: '20px',
        width: '75vw',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '5px',
        marginTop: '10px',
    }
}))

const HomePage = () => {
    const classes = useStyles();
    const categories = ['Electronics', 'Jewellery', 'Women Clothing', 'Men Clothing']
    const {setCategory} = React.useContext(CategoryContext);
    const history = useHistory();

    const handleClick = (i) => (e) => {
        setCategory(categories[i]);
        history.push('/category')
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography className={classes.title} variant="h3" component="h1">
                    Welcome to Shopping App!
                </Typography>
            </Grid>
            <Divider/>
            <Grid item xs={12}>
                <Typography className={classes.title} variant="h3" component="h1">
                    Categories available
                </Typography>
            </Grid>
            <Grid container spacing={1}>
                {
                    categories.map((category, index) =>
                        <Grid key={index} item xs={12} md={4}>
                            <Card style={{
                                height: '100%',
                                width: '100%',
                                backgroundColor: 'rgba(255,255,255,0.5)'
                            }}>
                                <CardActionArea
                                    id={index}
                                    onClick={handleClick(index)}
                                >
                                    <CardMedia
                                        style={{
                                            height: 300
                                        }}
                                        image={`https://picsum.photos/seed/${Math.random()}/500`}
                                    />
                                    <CardHeader
                                        title={category}
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}

export default HomePage;