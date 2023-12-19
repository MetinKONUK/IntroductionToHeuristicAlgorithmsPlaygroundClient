import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const FloatingButton = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
            sx={{
                position: 'fixed',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                zIndex: 1000,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                minWidth: 60,
                height: 60,
                padding: 0,
                borderRadius: '50%',
                color: 'black',
            }}
        >
            <ArrowForwardIosIcon sx={{ fontSize: '3rem' }} />
        </Button>
    )
}

export default FloatingButton
