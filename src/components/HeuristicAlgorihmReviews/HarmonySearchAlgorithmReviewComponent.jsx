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

const HarmonySearchAlgorithmReviewComponent = ({ data, index }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeAlgorithm(index))
    }
    return (
        <Card raised sx={{ margin: 2 }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    Harmony Search Algorithm
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary='HMS' secondary={data.HMS} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='BW' secondary={data.BW} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='HMCR' secondary={data.HMCR} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='PAR' secondary={data.PAR} />
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
                    to={`/hs/edit/${index}`}
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

export default HarmonySearchAlgorithmReviewComponent
