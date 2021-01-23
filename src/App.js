import React from "react";
import {createMuiTheme, CssBaseline, ThemeProvider, Toolbar} from "@material-ui/core";
import Navbar from "./components/navigation/Navbar";
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/home/Home";
import ShopProducts from "./components/products/ShopProducts";
import CartProducts from "./components/cart/ShoppingCart";

const App = () => {
    const theme = createMuiTheme();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar/>
            <main style={{ padding: '16px'}}>
                <Toolbar variant='dense'/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/category' component={ShopProducts}/>
                    <Route exact path='/cart' component={CartProducts}/>
                </Switch>
            </main>
        </ThemeProvider>
    )
}

export default App;