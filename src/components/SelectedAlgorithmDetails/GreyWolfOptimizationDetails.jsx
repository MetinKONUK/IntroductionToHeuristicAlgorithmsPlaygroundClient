import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

const GreyWolfOptimizationDetails = ({ selectedExecution }) => {
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
                Grey Wolf Optimization Details
            </Typography>
            <List>
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
                        primary='Number of Generations:'
                        secondary={
                            selectedExecution.algorithmData.numberOfGenerations
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Decrease From:'
                        secondary={selectedExecution.algorithmData.decreaseFrom}
                    />
                </ListItem>
                {/* Include other fields as needed */}
            </List>
        </Paper>
    )
}

export default GreyWolfOptimizationDetails
