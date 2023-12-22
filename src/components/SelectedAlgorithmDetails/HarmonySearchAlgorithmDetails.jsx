import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

const HarmonySearchAlgorithmDetails = ({ selectedExecution }) => {
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
                Harmony Search Algorithm Details
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary='Harmony Memory Size (HMS):'
                        secondary={selectedExecution.algorithmData.hms}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Bandwidth (BW):'
                        secondary={selectedExecution.algorithmData.bw}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Harmony Memory Considering Rate (HMCR):'
                        secondary={selectedExecution.algorithmData.hmcr}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Pitch Adjusting Rate (PAR):'
                        secondary={selectedExecution.algorithmData.par}
                    />
                </ListItem>
                {/* Include other fields as needed */}
            </List>
        </Paper>
    )
}

export default HarmonySearchAlgorithmDetails
