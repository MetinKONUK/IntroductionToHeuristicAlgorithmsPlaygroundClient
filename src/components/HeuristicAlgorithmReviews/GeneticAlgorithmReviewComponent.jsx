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

const GeneticAlgorithmReviewComponent = ({ data, index }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeAlgorithm(index))
    }
    return (
        <Card raised sx={{ margin: 2 }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    Genetic Algorithm
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
                            primary='Mutation Probability'
                            secondary={data.mutationProbability}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Crossover Type'
                            secondary={data.crossoverType}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Selection Type'
                            secondary={data.selectionType}
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
                    to={`/ga/edit/${index}`}
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

export default GeneticAlgorithmReviewComponent
