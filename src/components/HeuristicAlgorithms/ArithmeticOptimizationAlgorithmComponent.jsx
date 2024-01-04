/*
    Parameters:
    n_vars: Float,
    minmax: ["Min", "Max"],
    Benchmark Function,
    Epoch: Integer,
    Population Size: Integer,
    Alpha: Integer,
    Miu: Float,
    Moa Minimum: Float,
    Moa Maximum: Float
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
import { benchmarkFunctionsList } from '../../data/BenchmarkFunctionsList'

const ArithmeticOptimizationAlgorithmComponent = () => {
    const { index } = useParams()
    const isEditMode = index !== undefined
    const algorithmsToExecute = useSelector(
        state => state.algorithmSelection.algorithmsToExecute
    )
    const dispatch = useDispatch()

    const [parameters, setParameters] = useState({
        algorithmCode: 'AOA',
        nVars: '',
        minmax: '',
        benchmarkFunction: '',
        epoch: '',
        populationSize: '',
        alpha: '',
        miu: '',
        moaMin: '',
        moaMax: '',
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
                my: 10,
            }}
        >
            <Paper elevation={3} sx={{ padding: 3, margin: 2, width: '40%' }}>
                <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                    <Typography variant='h4' component='h2'>
                        Arithmetic Optimization Algorithm Parameters
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
                    <FormControl variant='outlined' margin='normal' fullWidth>
                        <InputLabel>Benchmark Function</InputLabel>
                        <Select
                            label='Benchmark Function'
                            name='benchmarkFunction'
                            value={parameters.benchmarkFunction}
                            onChange={handleInputChange}
                        >
                            {benchmarkFunctionsList.map(
                                (benchmarkFunction, index) => (
                                    <MenuItem
                                        key={index}
                                        value={benchmarkFunction}
                                    >
                                        {benchmarkFunction}
                                    </MenuItem>
                                )
                            )}
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
                    <TextField
                        label='Alpha'
                        name='alpha'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.alpha}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Miu'
                        name='miu'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.miu}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Moa Minimum'
                        name='moaMin'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.moaMin}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Moa Maximum'
                        name='moaMax'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.moaMax}
                        onChange={handleInputChange}
                    />
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

export default ArithmeticOptimizationAlgorithmComponent
