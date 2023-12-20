/*
Parameters:
HMS: Integer,
BW: Float,
HMCR: Float,
PAR: Float
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

const HarmonySearchAlgorithmComponent = () => {
    const { index } = useParams()
    const isEditMode = index !== undefined
    const algorithmsToExecute = useSelector(
        state => state.algorithmSelection.algorithmsToExecute
    )
    const dispatch = useDispatch()
    const [parameters, setParameters] = useState({
        algorithmCode: 'HSA',
        HMS: '',
        BW: '',
        HMCR: '',
        PAR: '',
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
            }}
        >
            <Paper elevation={3} sx={{ padding: 3, margin: 2, width: '40%' }}>
                <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                    <Typography variant='h4' component='h2'>
                        Harmony Search Algorithm Parameters
                    </Typography>
                </Box>
                <FormGroup>
                    <TextField
                        label='HMS'
                        name='HMS'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.HMS}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='BW'
                        name='BW'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.BW}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='HMCR'
                        name='HMCR'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.HMCR}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label='PAR'
                        name='PAR'
                        type='number'
                        variant='outlined'
                        margin='normal'
                        value={parameters.PAR}
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

export default HarmonySearchAlgorithmComponent
