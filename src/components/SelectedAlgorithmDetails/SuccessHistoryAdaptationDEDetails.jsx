import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const SuccessHistoryAdaptationDEDetails = ({ selectedExecution }) => {
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
                Success-History Adaptation Differential Evolution Details
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
                        primary='Miu_f Value:'
                        secondary={selectedExecution.algorithmData.miu_f}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Miu_cr Value:'
                        secondary={selectedExecution.algorithmData.miu_cr}
                    />
                </ListItem>
                {/* Include other fields as needed */}
            </List>
        </Paper>
    );
};

export default SuccessHistoryAdaptationDEDetails;
