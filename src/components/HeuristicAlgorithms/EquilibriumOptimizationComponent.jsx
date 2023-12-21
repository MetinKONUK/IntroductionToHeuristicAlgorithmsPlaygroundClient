/*
    Parameters:
    n_vars: Float,
    Benchmark Function,
    Epoch: Integer,
    Population Size: Integer,
    Minmax: ["Min", "Max"]
*/

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    addAlgorithm,
    updateAlgorithm,
} from '../../redux/features/algorithmSelectionSlice'
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    FormGroup,
    Paper,
    Typography,
} from '@mui/material'

const EquilibriumOptimizationComponent = () => {
    const { index } = useParams()
    const isEditMode = index !== undefined
    const algorithmsToExecute = useSelector(
        state => state.algorithmSelection.algorithmsToExecute
    )
    const dispatch = useDispatch()

    const [parameters, setParameters] = useState({
        algorithmCode: 'EO',
        nVars: '',
        benchmarkFunction: '',
        epoch: '',
        populationSize: '',
        minmax: '',
        customFile: null,
        customFileContent: null,
    })

    useEffect(() => {
        if (isEditMode && algorithmsToExecute[index]) {
            setParameters(algorithmsToExecute[index])
        }
    }, [index, algorithmsToExecute, isEditMode])

    const handleInputChange = event => {
        const { name, value } = event.target
        setParameters(prevParams => ({
            ...prevParams,
            [name]: value,
        }))
    }

    const handleConfirm = () => {
        if (isEditMode) {
            dispatch(updateAlgorithm({ index, parameters }))
        } else {
            dispatch(addAlgorithm(parameters))
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Paper elevation={3} sx={{ padding: 3, margin: 2, width: '40%' }}>
                <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                    <Typography variant='h4' component='h2'>
                        Equilibrium Optimization Parameters
                    </Typography>
                </Box>
                <FormGroup>
                    <TextField
                        label='n_vars'
                        name='nVars'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.nVars}
                        onChange={handleInputChange}
                    />
                    <FormControl variant='outlined' margin='normal' fullWidth>
                        <InputLabel>Benchmark Function</InputLabel>
                        <Select
                            label='Benchmark Function'
                            name='benchmarkFunction'
                            value={parameters.benchmarkFunction}
                            onChange={handleInputChange}
                        >
                            <MenuItem value='Ackley'>Ackley</MenuItem>
                            <MenuItem value='Griewank'>Griewank</MenuItem>
                            <MenuItem value='Schwefel'>Schwefel</MenuItem>
                            <MenuItem value='Rastrigin'>Rastrigin</MenuItem>
                            <MenuItem value='Sphere'>Sphere</MenuItem>
                            <MenuItem value='Perm'>Perm</MenuItem>
                            <MenuItem value='Zakharov'>Zakharov</MenuItem>
                            <MenuItem value='Rosenbrock'>Rosenbrock</MenuItem>
                            <MenuItem value='Dixon-Price'>Dixon-Price</MenuItem>
                            <MenuItem value='Custom'>Custom</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label='Epoch'
                        name='epoch'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.epoch}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Population Size'
                        name='populationSize'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.populationSize}
                        onChange={handleInputChange}
                    />
                    <FormControl variant='outlined' margin='normal' fullWidth>
                        <InputLabel>Min/Max</InputLabel>
                        <Select
                            label='Min/Max'
                            name='minmax'
                            value={parameters.minmax}
                            onChange={handleInputChange}
                        >
                            <MenuItem value='Min'>Min</MenuItem>
                            <MenuItem value='Max'>Max</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant='contained'
                        color='primary'
                        sx={{ marginTop: 2 }}
                        onClick={handleConfirm}
                    >
                        {isEditMode
                            ? 'CONFIRM MODIFICATION'
                            : 'ADD TO EXECUTION LIST'}
                    </Button>
                </FormGroup>
            </Paper>
        </Box>
    )
}

export default EquilibriumOptimizationComponent
