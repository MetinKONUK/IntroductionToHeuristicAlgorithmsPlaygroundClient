import { useState } from 'react';
import { getRandomElement } from '../utils';
import {
    Grid,
    Select,
    MenuItem,
    FormControl,
    Chip,
    InputLabel,
} from '@mui/material';
import { toast } from 'react-toastify';
const ALGORITHM_NAMES = [
    'Genetic Algorithm',
    'Simulated Annealing',
    'Grey Wolf Optimization',
];

const CHIP_COLORS = [
    '#f4511e',
    '#fdd835',
    '#43a047',
    '#039be5',
    '#00acc1',
    '#00897b',
    '#1e88e5',
    '#3949ab',
    '#5e35b1',
    '#e53935',
    '#d81b60',
    '#8e24aa',
];

const AlgorithmSelectionComponent = ({
    selectedAlgorithms,
    setSelectedAlgorithms,
}) => {
    const [selectedAlgorithmName, setSelectedAlgorithmName] = useState('');

    const handleAlgorithmRemoval = indexToRemove => {
        setSelectedAlgorithms(currentAlgorithms =>
            currentAlgorithms.filter((_, index) => index !== indexToRemove)
        );
    };

    const handleAlgorithmSelection = event => {
        if (selectedAlgorithms.length === 5) {
            toast.error('You cannot select more than 5 algorithms!');
            return;
        }
        let algorithmName = event.target.value;
        let newAlgorithmObject = {
            name: algorithmName,
            chipColor: getRandomElement(CHIP_COLORS),
        };
        setSelectedAlgorithms(oldSelectedAlgorithms => [
            ...oldSelectedAlgorithms,
            newAlgorithmObject,
        ]);
    };

    return (
        <Grid
            item
            xs={4}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2,
            }}
        >
            <Grid container sx={{ height: '20%', width: '100%' }}>
                <FormControl variant='filled' fullWidth>
                    <InputLabel>Algorithm Selection</InputLabel>
                    <Select
                        value={selectedAlgorithmName}
                        onChange={handleAlgorithmSelection}
                    >
                        {ALGORITHM_NAMES.map((algorithmName, index) => (
                            <MenuItem key={index} value={algorithmName}>
                                {algorithmName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item sx={{ height: '80%', width: '100%' }}>
                {selectedAlgorithms &&
                    selectedAlgorithms.map((selectedAlgorithm, index) => (
                        <Chip
                            key={index}
                            onDelete={() => handleAlgorithmRemoval(index)}
                            sx={{
                                margin: 0.5,
                                color: 'white',
                                backgroundColor: selectedAlgorithm.chipColor,
                            }}
                            label={selectedAlgorithm.name}
                        />
                    ))}
            </Grid>
        </Grid>
    );
};

export default AlgorithmSelectionComponent;
