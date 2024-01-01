import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

const EarthwormOptimisationDetails = ({ selectedExecution }) => {
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
                Earthworm Optimisation Algorithm Details
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
                        primary='Crossover Probability (p_c):'
                        secondary={selectedExecution.algorithmData.p_c}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Mutation Probability (p_m):'
                        secondary={selectedExecution.algorithmData.p_m}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Number of Best Individuals (n_best):'
                        secondary={selectedExecution.algorithmData.n_best}
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
                        primary='Beta Value:'
                        secondary={selectedExecution.algorithmData.beta}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Gamma Value:'
                        secondary={selectedExecution.algorithmData.gama}
                    />
                </ListItem>
                {/* Include other fields as needed */}
            </List>
        </Paper>
    )
}

export default EarthwormOptimisationDetails
