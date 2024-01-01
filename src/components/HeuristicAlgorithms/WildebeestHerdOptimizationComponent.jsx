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

const WildebeestHerdOptimizationComponent = () => {
    const { index } = useParams()
    const isEditMode = index !== undefined
    const algorithmsToExecute = useSelector(
        state => state.algorithmSelection.algorithmsToExecute
    )
    const dispatch = useDispatch()

    const [parameters, setParameters] = useState({
        algorithmCode: 'WHO',
        nVars: '',
        lb: '',
        ub: '',
        name: '',
        minmax: '',
        benchmarkFunction: '',
        epoch: '',
        popSize: '',
        nExploreStep: '',
        nExploitStep: '',
        eta: '',
        pHi: '',
        localAlpha: '',
        localBeta: '',
        globalAlpha: '',
        globalBeta: '',
        deltaW: '',
        deltaC: '',
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
                        Wildebeest Herd Optimization Parameters
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
                        name='popSize'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.popSize}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='n_explore_step'
                        name='nExploreStep'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.nExploreStep}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='n_exploit_step'
                        name='nExploitStep'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.nExploitStep}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='eta'
                        name='eta'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.eta}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='p_hi'
                        name='pHi'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.pHi}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='local_alpha'
                        name='localAlpha'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.localAlpha}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='local_beta'
                        name='localBeta'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.localBeta}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='global_alpha'
                        name='globalAlpha'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.globalAlpha}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='global_beta'
                        name='globalBeta'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.globalBeta}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='delta_w'
                        name='deltaW'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.deltaW}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='delta_c'
                        name='deltaC'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.deltaC}
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

export default WildebeestHerdOptimizationComponent
