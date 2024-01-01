import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const WildebeestHerdOptimizationDetails = ({ selectedExecution }) => {
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
                Wildebeest Herd Optimization Details
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
                        primary='Explore Steps:'
                        secondary={selectedExecution.algorithmData.n_explore_step}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Exploit Steps:'
                        secondary={selectedExecution.algorithmData.n_exploit_step}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Eta Value:'
                        secondary={selectedExecution.algorithmData.eta}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='p_hi Value:'
                        secondary={selectedExecution.algorithmData.p_hi}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Local Alpha:'
                        secondary={selectedExecution.algorithmData.local_alpha}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Local Beta:'
                        secondary={selectedExecution.algorithmData.local_beta}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Global Alpha:'
                        secondary={selectedExecution.algorithmData.global_alpha}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Global Beta:'
                        secondary={selectedExecution.algorithmData.global_beta}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Delta W:'
                        secondary={selectedExecution.algorithmData.delta_w}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Delta C:'
                        secondary={selectedExecution.algorithmData.delta_c}
                    />
                </ListItem>
                {/* Include other fields as needed */}
            </List>
        </Paper>
    );
};

export default WildebeestHerdOptimizationDetails;
