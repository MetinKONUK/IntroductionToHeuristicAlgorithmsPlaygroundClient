import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

const GeneticAlgorithmDetails = ({ selectedExecution }) => {
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
                Genetic Algorithm Details
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
                        primary='Mutation Probability:'
                        secondary={
                            selectedExecution.algorithmData.mutationProbability
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Crossover Type:'
                        secondary={
                            selectedExecution.algorithmData.crossoverType
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='Selection Type:'
                        secondary={
                            selectedExecution.algorithmData.selectionType
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

export default GeneticAlgorithmDetails
