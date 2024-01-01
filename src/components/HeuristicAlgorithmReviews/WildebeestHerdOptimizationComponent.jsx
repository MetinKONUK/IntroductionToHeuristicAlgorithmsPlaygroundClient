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
                            primary='n_explore_step'
                            secondary={data.nExploreStep}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='n_exploit_step'
                            secondary={data.nExploitStep}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='eta' secondary={data.eta} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='p_hi' secondary={data.pHi} />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='local_alpha'
                            secondary={data.localAlpha}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='local_beta'
                            secondary={data.localBeta}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='global_alpha'
                            secondary={data.globalAlpha}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='global_beta'
                            secondary={data.globalBeta}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='delta_w' secondary={data.deltaW} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='delta_c' secondary={data.deltaC} />
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
