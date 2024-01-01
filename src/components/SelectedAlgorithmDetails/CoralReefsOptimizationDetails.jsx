import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

const CoralReefsOptimizationDetails = ({ selectedExecution }) => {
    if (!selectedExecution || !selectedExecution.algorithmData) {
        return (
            <Typography variant='subtitle1'>
                No Algorithm Data Available
            </Typography>
        )
    }

    return (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant='h6' gutterBottom>
                Coral Reefs Optimization Details
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
                        primary='Lower Bound (lb):'
                        secondary={selectedExecution.algorithmData.lb}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Upper Bound (ub):'
                        secondary={selectedExecution.algorithmData.ub}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Name:'
                        secondary={selectedExecution.algorithmData.name}
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
                        primary='Benchmark Function:'
                        secondary={
                            selectedExecution.algorithmData.benchmarkFunction
                        }
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
                        primary='Po Value:'
                        secondary={selectedExecution.algorithmData.po}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Fb Value:'
                        secondary={selectedExecution.algorithmData.Fb}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Fa Value:'
                        secondary={selectedExecution.algorithmData.Fa}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Fd Value:'
                        secondary={selectedExecution.algorithmData.Fd}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Pd Value:'
                        secondary={selectedExecution.algorithmData.Pd}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='GCR Value:'
                        secondary={selectedExecution.algorithmData.GCR}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Gamma Min Value:'
                        secondary={selectedExecution.algorithmData.gamma_min}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Gamma Max Value:'
                        secondary={selectedExecution.algorithmData.gamma_max}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Number of Trials (n_trials):'
                        secondary={selectedExecution.algorithmData.n_trials}
                    />
                </ListItem>
                {/* Include other fields as needed */}
            </List>
        </Paper>
    )
}

export default CoralReefsOptimizationDetails
