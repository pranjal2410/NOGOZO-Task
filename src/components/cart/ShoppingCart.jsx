import React from 'react';
import {makeStyles, Typography, Toolbar, Grid, Card, CardMedia, CardActionArea, CardHeader, CardActions, Button} from "@material-ui/core"
import {CartContext} from "../../context/CartContext";

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

const CartProducts = () => {
    const classes = useStyles();
    const {cart, setCart, removeItem} = React.useContext(CartContext);

    const handleClick = (e) => {
        setCart([]);
    }

    const handleRemove = (id) => (e) => {
        removeItem(id);
    }

    return (
        <Grid container alignItems="center" direction="column">
            <Grid item xs={12}>
                <Typography className={classes.title} variant="h3" component="h1">
                    Product in your Cart
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleClick} margin="normal" disabled={cart.length === 0}>
                    Clear Cart
                </Button>
            </Grid>
            <Toolbar variant='dense'/>
            <Grid container spacing={1}>
                {
                    cart.map((item, index) =>
                        <Grid key={index} item xs={12} md={4}>
                            <Card style={{
                                height: '100%',
                                width: '100%',
                                backgroundColor: 'rgba(255,255,255,0.5)'
                            }}>
                                <CardActionArea
                                    id={index}
                                >
                                    <CardMedia
                                        style={{
                                            height: 300
                                        }}
                                        image={item.image}
                                    />
                                    <CardHeader
                                        title={item.title}
                                        subheader={item.description}
                                        action={item.price+'$'}
                                    />
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={handleRemove(item.id)}>
                                        REMOVE ITEM
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}

export default CartProducts;