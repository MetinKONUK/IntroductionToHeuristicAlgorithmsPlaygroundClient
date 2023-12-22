import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

const SimulatedAnnealingDetails = ({ selectedExecution }) => {
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
                Simulated Annealing Details
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary='Algorithm Code:'
                        secondary={
                            selectedExecution.algorithmData.algorithmCode
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Initial Temperature:'
                        secondary={
                            selectedExecution.algorithmData.initialTemperature
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Cooling Rate:'
                        secondary={selectedExecution.algorithmData.coolingRate}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Number of Iterations:'
                        secondary={
                            selectedExecution.algorithmData.numberOfIterations
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Selected Benchmark Function:'
                        secondary={
                            selectedExecution.algorithmData
                                .selectedBenchmarkFunction
                        }
                    />
                </ListItem>
                {/* Include other fields as needed */}
            </List>
        </Paper>
    )
}

export default SimulatedAnnealingDetails
