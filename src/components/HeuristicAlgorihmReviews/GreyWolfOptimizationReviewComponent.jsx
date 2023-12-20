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

const GreyWolfOptimizationReviewComponent = ({ data, index }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeAlgorithm(index))
    }
    return (
        <Card raised sx={{ margin: 2 }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    Grey Wolf Optimization
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary='Population Size'
                            secondary={data.populationSize}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Number of Generations'
                            secondary={data.numberOfGenerations}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Decrease From'
                            secondary={data.decreaseFrom}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Selected Benchmark Function'
                            secondary={data.selectedBenchmarkFunction}
                        />
                    </ListItem>
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
                    to={`/gwo/edit/${index}`}
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

export default GreyWolfOptimizationReviewComponent
