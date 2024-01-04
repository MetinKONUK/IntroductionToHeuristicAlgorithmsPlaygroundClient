/*
Parameters:
Populatin Size: Integer,
Number of Generations: Integer,
*/
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import { benchmarkFunctionsList } from '../../data/BenchmarkFunctionsList'

const ParticleSwarmOptimizationComponent = () => {
    const { index } = useParams()
    const isEditMode = index !== undefined
    const algorithmsToExecute = useSelector(
        state => state.algorithmSelection.algorithmsToExecute
    )

    const dispatch = useDispatch()
    const [parameters, setParameters] = useState({
        algorithmCode: 'PSO',
        populationSize: '',
        numberOfGenerations: '',
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
                my: 10,
            }}
        >
            <Paper elevation={3} sx={{ padding: 3, margin: 2, width: '40%' }}>
                <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                    <Typography variant='h4' component='h2'>
                        Particle Swarm Optimization Parameters
                    </Typography>
                </Box>
                <FormGroup>
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
                        label='Number of Generations'
                        name='numberOfGenerations'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.numberOfGenerations}
                        onChange={handleInputChange}
                    />
                    <FormControl variant='outlined' margin='normal'>
                        <InputLabel>Function Type</InputLabel>
                        <Select
                            label='Function Type'
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

export default ParticleSwarmOptimizationComponent
