/*
Parameters:
Initial Temperature: Integer,
Cool Down Factor: Float,
Temperature Decrease Type: [Arithmetic, Geometric]
*/

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    addAlgorithm,
    updateAlgorithm,
} from '../../redux/features/algorithmSelectionSlice'
import { useParams } from 'react-router-dom'
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

const SimulatedAnnealingComponent = () => {
    const { index } = useParams()
    const isEditMode = index !== undefined
    const algorithmsToExecute = useSelector(
        state => state.algorithmSelection.algorithmsToExecute
    )
    const dispatch = useDispatch()
    const [parameters, setParameters] = useState({
        algorithmCode: 'SA',
        initialTemperature: '',
        coolDownFactor: '',
        temperatureDecreaseType: '',
        selectedBenchmarkFunction: '',
        customFile: null,
        customFileContent: null,
    })

    useEffect(() => {
        if (index !== undefined && algorithmsToExecute[index])
            setParameters(algorithmsToExecute[index])
    }, [index, algorithmsToExecute])

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
            dispatch(updateAlgorithm({ index, parameters })) // Handle update
        } else {
            dispatch(addAlgorithm(parameters)) // Handle add
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
                        Simulated Annealing Parameters
                    </Typography>
                </Box>
                <FormGroup>
                    <TextField
                        label='Initial Temperature'
                        name='initialTemperature'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.initialTemperature}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='Cool Down Factor'
                        name='coolDownFactor'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.coolDownFactor}
                        onChange={handleInputChange}
                    />
                    <FormControl variant='outlined' margin='normal' fullWidth>
                        <InputLabel>Temperature Decrease Type</InputLabel>
                        <Select
                            label='Temperature Decrease Type'
                            name='temperatureDecreaseType'
                            value={parameters.temperatureDecreaseType}
                            onChange={handleInputChange}
                        >
                            <MenuItem value='Arithmetic'>Arithmetic</MenuItem>
                            <MenuItem value='Geometric'>Geometric</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant='outlined' margin='normal' fullWidth>
                        <InputLabel>Function Type</InputLabel>
                        <Select
                            label='Function Type'
                            name='selectedBenchmarkFunction'
                            value={parameters.selectedBenchmarkFunction}
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
                    {parameters.selectedBenchmarkFunction === 'Custom' && (
                        <TextField
                            type='file'
                            variant='outlined'
                            margin='normal'
                            InputLabelProps={{ shrink: true }}
                            name='customFile'
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

export default SimulatedAnnealingComponent
