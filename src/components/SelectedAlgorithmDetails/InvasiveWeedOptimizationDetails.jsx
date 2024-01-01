import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const InvasiveWeedOptimizationDetails = ({ selectedExecution }) => {
    if (!selectedExecution || !selectedExecution.algorithmData) {
        return (
            <Typography variant='subtitle1'>
                No Algorithm Data Available
            </Typography>
        );
    }

    return (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant='h6' gutterBottom>
                Invasive Weed Optimization Details
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary='Number of Variables (n_vars):'
                        secondary={selectedExecution.algorithmData.nVars}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Benchmark Function:'
                        secondary={
                            selectedExecution.algorithmData.benchmarkFunction
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Min/Max:'
                        secondary={selectedExecution.algorithmData.minmax}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Epoch:'
                        secondary={selectedExecution.algorithmData.epoch}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Population Size:'
                        secondary={
                            selectedExecution.algorithmData.populationSize
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Seed Min:'
                        secondary={selectedExecution.algorithmData.seed_min}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Seed Max:'
                        secondary={selectedExecution.algorithmData.seed_max}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Exponent:'
                        secondary={selectedExecution.algorithmData.exponent}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Sigma Start:'
                        secondary={selectedExecution.algorithmData.sigma_start}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Sigma End:'
                        secondary={selectedExecution.algorithmData.sigma_end}
                    />
                </ListItem>
                {/* Include other fields as needed */}
            </List>
        </Paper>
    );
};

export default InvasiveWeedOptimizationDetails;
