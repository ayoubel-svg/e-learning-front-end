import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
    const { id } = props
    const [open, setOpen] = React.useState(props.open);

    React.useEffect(() => {
        setOpen(open)
    }, [open, props.open])
    console.log(id)



    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <form>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Update Cours
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <div>
                            <div className="part1">
                                <label htmlFor="title">
                                    Title <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Title *"

                                />
                            </div>
                            <div className="part2">
                                <label htmlFor="category">
                                    Category <span style={{ color: "red" }}>*</span>
                                </label>
                                <select name="category" id="category" >
                                    <option disabled>
                                        Choose Course Category
                                    </option>
                                    <option value="web developement">Web Developement</option>
                                    <option value="design">design</option>
                                </select>
                            </div>
                        </div>
                        <div className="box2">
                            <label htmlFor="description">
                                Description <span style={{ color: "red" }}>*</span>
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                cols="100"
                                rows="5"
                                placeholder="Description *"

                            ></textarea>
                        </div>
                        <div className="box3">
                            <div className="part1">
                                <label htmlFor="price">
                                    Price <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    placeholder="Price *"
                                />
                            </div>
                            <div className="part2">
                                <label htmlFor="duration">
                                    Duration <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="number"
                                    id="duration"
                                    name="duration"
                                    placeholder="Duration *"
                                />
                            </div>
                        </div>
                        <div className="box4">
                            <div className="part1">
                                <label htmlFor="language">
                                    Cours Language <span style={{ color: "red" }}>*</span>
                                </label>
                                <select name="language" id="language">
                                    <option disabled >Choose Language</option>
                                    <option value="english">English</option>
                                    <option value="arabic">Arabic</option>
                                    <option value="francais">Francais</option>
                                </select>
                            </div>
                            <div className="part2">
                                <label htmlFor="image">
                                    Course Thumbnail <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    placeholder="Thumbnail *"
                                    className="image-input"
                                />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Save changes
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </form>
        </div>
    );
}