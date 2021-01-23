import React from 'react';
import clsx from 'clsx';
import { makeStyles, AppBar, Toolbar, List, Typography, IconButton } from '@material-ui/core';
import {ListItem, ListItemIcon, ListItemText, SwipeableDrawer} from '@material-ui/core';
import {ShoppingCart, Home, Person, Menu} from '@material-ui/icons';
import {CredentialContext} from "../../context/CredentialContext";
import {CredentialDialog} from "../entrance/CredentialDialog";
import {useHistory} from "react-router-dom";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const {credentials} = React.useContext(CredentialContext);
    const [cdialog, setCdialog] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    React.useEffect(() => {
        setCdialog(true);
    }, [])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar variant="dense">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Shopping App
                    </Typography>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor={'left'}
                open={open}
                onClose={handleDrawerClose}
                onOpen={handleDrawerOpen}
            >
                <List className={classes.drawer}>
                    <ListItem key={'credentials'}>
                        <ListItemIcon><Person/></ListItemIcon>
                        <ListItemText primary={credentials.name} secondary={credentials.email}/>
                    </ListItem>
                    <ListItem button key={'home'} onClick={() => history.push('/')}>
                        <ListItemIcon><Home/></ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <ListItem button key={'cart'} onClick={() => history.push('/cart')}>
                        <ListItemIcon><ShoppingCart/></ListItemIcon>
                        <ListItemText primary={'Shopping Cart'} />
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <CredentialDialog open={cdialog} setOpen={setCdialog}/>
        </div>
    );
}

export default Navbar;
