import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

const AfricanVulturesOptimizationDetails = ({ selectedExecution }) => {
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
                African Vultures Optimization Details
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
                        primary='p1 Value:'
                        secondary={selectedExecution.algorithmData.p1}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='p2 Value:'
                        secondary={selectedExecution.algorithmData.p2}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='p3 Value:'
                        secondary={selectedExecution.algorithmData.p3}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Alpha Value:'
                        secondary={selectedExecution.algorithmData.alpha}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Gama Value:'
                        secondary={selectedExecution.algorithmData.gama}
                    />
                </ListItem>
                {/* Include other fields as needed */}
            </List>
        </Paper>
    )
}

export default AfricanVulturesOptimizationDetails
