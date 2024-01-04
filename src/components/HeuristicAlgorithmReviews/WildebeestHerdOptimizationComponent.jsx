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

const WildebeestHerdOptimizationReviewComponent = ({ data, index }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeAlgorithm(index))
    }

    return (
        <Card raised sx={{ margin: 2 }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    Wildebeest Herd Optimization
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary='n_vars' secondary={data.nVars} />
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
                            secondary={data.benchmarkFunction}
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
                            primary='N Explore Step, N Exploit Step'
                            secondary={`${data.nExploreStep}, ${data.nExploitStep}`}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='ETA, P-HI'
                            secondary={`${data.eta}, ${data.pHi}`}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Local Alpha, Local Beta, Global Alpha, Global Beta'
                            secondary={`${data.localAlpha}, ${data.localBeta}, ${data.globalAlpha}, ${data.globalBeta}`}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Delta W, Delta C'
                            secondary={`${data.deltaW}, ${data.deltaC}`}
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
                    to={`/who/edit/${index}`}
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

export default WildebeestHerdOptimizationReviewComponent
