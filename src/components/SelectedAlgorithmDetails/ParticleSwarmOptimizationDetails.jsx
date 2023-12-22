import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

const ParticleSwarmOptimizationDetails = ({ selectedExecution }) => {
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
                Particle Swarm Optimization Details
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
                        primary='Swarm Size:'
                        secondary={selectedExecution.algorithmData.swarmSize}
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
                        primary='Inertia Weight:'
                        secondary={
                            selectedExecution.algorithmData.inertiaWeight
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Cognitive Coefficient:'
                        secondary={
                            selectedExecution.algorithmData.cognitiveCoefficient
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Social Coefficient:'
                        secondary={
                            selectedExecution.algorithmData.socialCoefficient
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

export default ParticleSwarmOptimizationDetails
