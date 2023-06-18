import * as React from 'react';
import { useEffect } from 'react';
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
import axios from 'axios';
import ErrorComponent from './ErrorComponent';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
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
    const [cours, setCours] = React.useState({})
    const [newError, setNewError] = React.useState("")
    const [values, setValues] = React.useState({
        title: "",
        category: "",
        description: "",
        duration: "",
        language: "",
        price: "",
        image: ""
    })
    const navigate = useNavigate()

    const theError = () => {
        toast.error("error occurd", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    const success = (message) => {
        toast.success(message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    useEffect(() => {
        setOpen(open)
    }, [open, props.open])
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        setValues({
            title: cours.title,
            description: cours.description,
            category: cours.category,
            duration: cours.Duration,
            language: cours.language,
            price: cours.Price,
        })
    }, [cours])
    useEffect(() => {
        const getData = async () => {
            const token = sessionStorage.getItem("token")
            try {
                const cour = await axios.get(`http://localhost:8000/api/cour/${id}`, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                setCours(cour.data.data)
            } catch (error) {
                console.log(error)
            }

        }
        getData()
    }, [id])
    function handleChange(e) {
        const { value, name, files } = e.target
        if (name === "image") {
            setValues({ ...values, image: files[0] })
        } else {
            setValues({ ...values, [name]: value })
        }
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const token = sessionStorage.getItem("token")
        try {
            const response = await axios.patch(`http://localhost:8000/api/cour/${id}`, values,
                {
                    headers:
                    {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
            response.status === 200 && success("votre course est modifie")
            setOpen(false)
        } catch (error) {
            setNewError(error)
            theError()
        }
    }
    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Cours
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    {newError && <ErrorComponent error={newError} />}
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div className='box1'>
                            <div className="part1">
                                <label htmlFor="title">
                                    Title <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Title *"
                                    value={values.title && values.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="part2">
                                <label htmlFor="category">
                                    Category <span style={{ color: "red" }}>*</span>
                                </label>
                                <select name="category" id="category" onChange={handleChange} >
                                    <option disabled>
                                        Choose Course Category
                                    </option>
                                    <option value="web developement" selected={values.category && values.category === "web developement" ? true : false}>Web Developement</option>
                                    <option value="design" selected={values.category && values.category === "design" ? true : false}>design</option>
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
                                value={values.description && values.description}
                                onChange={handleChange}
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
                                    value={values.price && values.price}
                                    onChange={handleChange}
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
                                    value={values.duration && values.duration}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="box4">
                            <div className="part1">
                                <label htmlFor="language">
                                    Cours Language <span style={{ color: "red" }}>*</span>
                                </label>
                                <select name="language" id="language" onChange={handleChange}>
                                    <option disabled >Choose Language</option>
                                    <option value="english" selected={values.language && values.language === "english" ? true : false}>English</option>
                                    <option value="arabic" selected={values.language && values.language === "arabic" ? true : false}>Arabic</option>
                                    <option value="francais" selected={values.language && values.language === "francais" ? true : false}>Francais</option>
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
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button>Save changes</button>
                    </form>
                </DialogContent>
            </BootstrapDialog>
            <ToastContainer />

        </div>
    );
}