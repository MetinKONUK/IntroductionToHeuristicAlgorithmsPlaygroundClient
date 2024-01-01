import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const MemeticAlgorithmDetails = ({ selectedExecution }) => {
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
                Memetic Algorithm Details
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
                        primary='Crossover Probability (pc):'
                        secondary={selectedExecution.algorithmData.pc}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Mutation Probability (pm):'
                        secondary={selectedExecution.algorithmData.pm}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Local Search Probability (p_local):'
                        secondary={selectedExecution.algorithmData.p_local}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Max Local Genes:'
                        secondary={selectedExecution.algorithmData.max_local_genes}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Bits per Parameter:'
                        secondary={selectedExecution.algorithmData.bits_per_param}
                    />
                </ListItem>
                {/* Include other fields as needed */}
            </List>
        </Paper>
    );
};

export default MemeticAlgorithmDetails;
