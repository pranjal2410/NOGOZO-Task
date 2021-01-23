import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useTheme from "@material-ui/core/styles/useTheme";
import { useSnackbar } from "notistack";
import {CredentialContext} from "../../context/CredentialContext";

export const CredentialDialog = ({ open, setOpen }) => {
    const theme = useTheme();
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const {credentials, setCredentials} = React.useContext(CredentialContext);
    const [errors, setErrors] = useState({
        emailError: false,
        nameError: false,
        loginError: false
    })

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.currentTarget.id]: e.currentTarget.value
        })
        if(e.currentTarget.id === 'email')
            setErrors({...errors, emailError: (credentials.email === null || credentials.email === '')});
        if(e.currentTarget.id === 'name')
            setErrors({...errors, nameError: (credentials.name === null || credentials.name === '')});
    }

    const handleSubmit = () => {
        if(credentials.email === null || !credentials.email.length){
            setErrors({...errors, emailError: true});
            return;
        }
        if(credentials.name === null || !credentials.name.length){
            setErrors({...errors, nameError: true});
            return;
        }

        if(!(errors.nameError || errors.emailError))
        {
            enqueueSnackbar('Setting data....', {variant: 'info', key: 'try_login'});
            setOpen(false);
            closeSnackbar('try_login')
            enqueueSnackbar('Set Credentials', {variant: 'success', key: 'set'});
            setTimeout(() => closeSnackbar('set'), 1000);
        }
    }

    return (
        <div>
            <Dialog open={open} aria-labelledby="form-dialog-credentials">
                <DialogTitle id="form-dialog-credentials">Credentials</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ color: theme.palette.text.primary }}>
                        You have to set your credentials to access this website
                    </DialogContentText>
                    <TextField
                        id="name"
                        variant="outlined"
                        label="Full Name"
                        margin="normal"
                        type={"text"}
                        helperText={errors.nameError?"Enter a valid name":errors.loginError?"Invalid credentials":null}
                        name="name"
                        onChange={handleChange}
                        error={errors.nameError || errors.loginError}
                        fullWidth
                        required
                    />
                    <TextField
                        id="email"
                        variant="outlined"
                        label="Email Address"
                        type="text"
                        name="email"
                        margin="normal"
                        onChange={handleChange}
                        helperText={errors.emailError?"Enter a valid email address":errors.loginError?"Invalid credentials":null}
                        error={errors.emailError || errors.loginError}
                        fullWidth
                        autoFocus
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} color="primary" variant="outlined">
                        SET CREDENTIALS
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}