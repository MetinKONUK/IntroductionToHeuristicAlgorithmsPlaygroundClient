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

const FlowerPollinationAlgorithmReviewComponent = ({ data, index }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeAlgorithm(index))
    }

    return (
        <Card raised sx={{ margin: 2 }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    Flower Pollination Algorithm
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary='n_vars' secondary={data.nVars} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='lb' secondary={data.lb} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='ub' secondary={data.ub} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='name' secondary={data.name} />
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
                            primary='p_s'
                            secondary={data.p_s}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Levy Multiplier'
                            secondary={data.levy_multiplier}
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
                    to={`/fpa/edit/${index}`}
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

export default FlowerPollinationAlgorithmReviewComponent
