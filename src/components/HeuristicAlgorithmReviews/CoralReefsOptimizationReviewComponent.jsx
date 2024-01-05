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

const CoralReefsOptimizationReviewComponent = ({ data, index }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeAlgorithm(index))
    }

    return (
        <Card raised sx={{ margin: 2 }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    Coral Reefs Optimization
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary='Dimension'
                            secondary={data.nVars}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Lower Bound, Upper Bound'
                            secondary={`${data.lb}, ${data.ub}`}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Name' secondary={data.name} />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Min/Max'
                            secondary={data.minmax}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Benchmark Function'
                            secondary={data.objFunc}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Epoch' secondary={data.epoch} />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Population Size'
                            secondary={data.popSize}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='PO, FB, FA, FD, PD, GCR'
                            secondary={`${data.po}, ${data.Fb}, ${data.Fa}, ${data.Fd}, ${data.Pd}, ${data.GCR}`}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='gamma_min'
                            secondary={data.gamma_min}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='gamma_max'
                            secondary={data.gamma_max}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='n_trials'
                            secondary={data.n_trials}
                        />
                    </ListItem>
                </List>
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-start' }}>
                <Button
                    sx={{ width: '45%', marginX: '5%', borderRadius: 0 }}
                    variant='contained'
                    color='error'
                    onClick={handleRemove}
                >
                    REMOVE
                </Button>
                <Button
                    component={Link}
                    to={`/cro/edit/${index}`}
                    sx={{ width: '45%', marginX: '5%', borderRadius: 0 }}
                    variant='contained'
                    color='info'
                >
                    EDIT
                </Button>
            </CardActions>
        </Card>
    )
}

export default CoralReefsOptimizationReviewComponent
