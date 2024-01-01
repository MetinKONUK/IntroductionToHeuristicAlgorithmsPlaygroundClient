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

const HenryGasSolubilityOptimizationReviewComponent = ({ data, index }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeAlgorithm(index))
    }

    return (
        <Card raised sx={{ margin: 2 }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    Henry Gas Solubility Optimization
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary='n_vars' secondary={data.nVars} />
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
                            secondary={data.benchmarkFunction}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Epoch' secondary={data.epoch} />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Population Size'
                            secondary={data.populationSize}
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
                    to={`/hgso/edit/${index}`}
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

export default HenryGasSolubilityOptimizationReviewComponent
