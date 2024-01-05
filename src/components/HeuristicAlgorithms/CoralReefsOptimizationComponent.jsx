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

const CoralReefsOptimizationComponent = () => {
    const { index } = useParams()
    const isEditMode = index !== undefined
    const algorithmsToExecute = useSelector(
        state => state.algorithmSelection.algorithmsToExecute
    )
    const dispatch = useDispatch()

    const [parameters, setParameters] = useState({
        algorithmCode: 'CRO',
        nVars: '',
        lb: '',
        ub: '',
        name: '',
        minmax: '',
        selectedBenchmarkFunction: '',
        epoch: '',
        popSize: '',
        po: '',
        Fb: '',
        Fa: '',
        Fd: '',
        Pd: '',
        GCR: '',
        gamma_min: '',
        gamma_max: '',
        nTrials: '',
        customFile: null,
        customFileContent: null,
    })

    useEffect(() => {
        if (isEditMode && algorithmsToExecute[index]) {
            setParameters(algorithmsToExecute[index])
        }
    }, [index, algorithmsToExecute, isEditMode])

    const handleInputChange = event => {
        const { name, value, files } = event.target

        if (name === 'customFile' && files.length > 0) {
            const file = files[0]
            const reader = new FileReader()

            reader.onload = e => {
                const fileContent = e.target.result
                // Do something with fileContent here
                setParameters(prevParams => ({
                    ...prevParams,
                    customFile: file,
                    customFileContent: fileContent,
                }))
            }

            reader.readAsText(file) // Read the file as text
        } else {
            setParameters(prevParams => ({
                ...prevParams,
                [name]: value,
            }))
        }
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
                my: 50,
            }}
        >
            <Paper elevation={3} sx={{ padding: 3, margin: 2, width: '40%' }}>
                <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                    <Typography variant='h4' component='h2'>
                        Coral Reefs Optimization Parameters
                    </Typography>
                </Box>
                <FormGroup>
                    <TextField
                        label='Dimension'
                        name='nVars'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.nVars}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Lower Bound'
                        name='lb'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.lb}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Upper Bound'
                        name='ub'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.ub}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Name'
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
                        label='PO'
                        name='po'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.po}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='FB'
                        name='Fb'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.Fb}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='FA'
                        name='Fa'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.Fa}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='FD'
                        name='Fd'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.Fd}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='PD'
                        name='Pd'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.Pd}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='GCR'
                        name='GCR'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.GCR}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Gamma Minimum'
                        name='gamma_min'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.gamma_min}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Gamma Maximum'
                        name='gamma_max'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.gamma_max}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='N Trials'
                        name='nTrials'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.nTrials}
                        onChange={handleInputChange}
                    />
                    <FormControl variant='outlined' margin='normal' fullWidth>
                        <InputLabel>Benchmark Function</InputLabel>
                        <Select
                            label='Benchmark Function'
                            name='selectedBenchmarkFunction'
                            value={parameters.selectedBenchmarkFunction}
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
                    {parameters.selectedBenchmarkFunction === 'Custom' && (
                        <TextField
                            type='file'
                            variant='outlined'
                            margin='normal'
                            InputLabelProps={{ shrink: true }}
                            name='customFile' // Add this line
                            onChange={handleInputChange}
                        />
                    )}
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

export default CoralReefsOptimizationComponent
