import React from 'react';
import {
    makeStyles,
    Typography,
    Divider,
    Grid,
    Card,
    CardMedia,
    CardActionArea,
    CardHeader,
    Button, CardActions
} from "@material-ui/core"
import {CategoryContext} from "../../context/CategoryContext";
import axios from 'axios';
import {CartContext} from "../../context/CartContext";
import {useSnackbar} from "notistack";

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

const ShopProducts = () => {
    const classes = useStyles();
    const {category} = React.useContext(CategoryContext);
    const {addItem} = React.useContext(CartContext);
    const [products, setProducts] = React.useState([]);
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    React.useEffect(() => {
        let url = 'https://fakestoreapi.com/products/category/'
        if( category === 'Jewellery')
            url += 'jewelery'
        else
            url += category.toLowerCase();
        axios.get(url)
            .then(res => {
                setProducts(res.data)
            })

    }, [category])

    const handleClick = (i) => (e) => {
        addItem(products[i]);
        enqueueSnackbar('Added item to cart', {variant: 'success', key: 'add'});
        setTimeout(() => closeSnackbar('add'), 2000);
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography className={classes.title} variant="h3" component="h1">
                    Products available in {category}
                </Typography>
            </Grid>
            <Divider/>
            <Grid container spacing={1}>
                {
                    products.map((product, index) =>
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
                                        image={product.image}
                                    />
                                    <CardHeader
                                        title={product.title}
                                        subheader={product.description}
                                        action={product.price+'$'}
                                    />
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={handleClick(index)}>
                                        ADD TO CART
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

export default ShopProducts;