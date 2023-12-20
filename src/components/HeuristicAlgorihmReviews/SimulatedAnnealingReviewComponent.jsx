import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    List,
    ListItem,
    ListItemText,
    Button,
} from '@mui/material'
import { removeAlgorithm } from '../../redux/features/algorithmSelectionSlice'

const SimulatedAnnealingReviewComponent = ({ data, index }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeAlgorithm(index))
    }
    return (
        <Card raised sx={{ margin: 2 }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    Simulated Annealing
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary='Initial Temperature'
                            secondary={data.initialTemperature}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Cool Down Factor'
                            secondary={data.coolDownFactor}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Temperature Decrease Type'
                            secondary={data.temperatureDecreaseType}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Selected Benchmark Function'
                            secondary={data.selectedBenchmarkFunction}
                        />
                    </ListItem>
                    {/* Add other parameters similarly */}
                </List>
                {data.selectedBenchmarkFunction === 'Custom' &&
                    data.customFile && (
                        <>
                            <Typography variant='subtitle1'>
                                Custom File:
                            </Typography>
                            <Typography variant='body2'>
                                {data.customFile.name}
                            </Typography>
                            {/* Optionally display file content if appropriate */}
                        </>
                    )}
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-start' }}>
                <Button
                    sx={{
                        width: '45%',
                        marginX: '5%',
                        borderRadius: 0,
                    }}
                    variant='contained'
                    color='error'
                    onClick={handleRemove}
                >
                    REMOVE
                </Button>
                <Button
                    component={Link}
                    to={`/sa/edit/${index}`}
                    sx={{
                        width: '45%',
                        marginX: '5%',
                        borderRadius: 0,
                    }}
                    variant='contained'
                    color='info'
                    // onClick={handleRemove}
                >
                    EDIT
                </Button>
            </CardActions>
        </Card>
    )
}

export default SimulatedAnnealingReviewComponent
