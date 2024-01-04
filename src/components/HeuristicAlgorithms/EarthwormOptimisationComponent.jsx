import React, { useEffect, useState } from 'react'
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

const EarthwormOptimisationComponent = () => {
    const { index } = useParams()
    const isEditMode = index !== undefined
    const algorithmsToExecute = useSelector(
        state => state.algorithmSelection.algorithmsToExecute
    )
    const dispatch = useDispatch()

    const [parameters, setParameters] = useState({
        algorithmCode: 'EOA',
        nVars: '',
        lb: '',
        ub: '',
        name: '',
        minmax: '',
        benchmarkFunction: '',
        epoch: '',
        popSize: '',
        pC: '',
        pM: '',
        nBest: '',
        alpha: '',
        beta: '',
        gamma: '',
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
                        Earthworm Optimisation Algorithm Parameters
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
                    <TextField
                        label='lb'
                        name='lb'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.lb}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='ub'
                        name='ub'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.ub}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='name'
                        name='name'
                        variant='outlined'
                        margin='normal'
                        value={parameters.name}
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
                        name='popSize'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.popSize}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='pC'
                        name='pC'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.pC}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='pM'
                        name='pM'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.pM}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='nBest'
                        name='nBest'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.nBest}
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
                        label='Beta'
                        name='beta'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.beta}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Gamma'
                        name='gamma'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.gamma}
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

export default EarthwormOptimisationComponent
