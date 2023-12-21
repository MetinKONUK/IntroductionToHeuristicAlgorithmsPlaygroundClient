import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ResponsiveLine } from '@nivo/line'
import {
    Box,
    Typography,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material'

const ExecutionResultsDisplayComponent = () => {
    const [selectedExecution, setSelectedExecution] = useState(null)
    const [selectedLines, setSelectedLines] = useState([])
    const [chartWidth, setChartWidth] = useState(0)
    const [dialogOpen, setDialogOpen] = useState(false)

    const executionResults = useSelector(
        state => state.executionResults.executionResults
    )

    useEffect(() => {
        if (Object.keys(executionResults).length > 0) {
            const maxIterations = Math.max(
                ...Object.values(executionResults).map(
                    execution => execution.results.length
                )
            )
            const remInPixels = parseFloat(
                getComputedStyle(document.documentElement).fontSize
            )
            setChartWidth(maxIterations * 3 * remInPixels)
            setSelectedLines(Object.keys(executionResults))
        }
    }, [executionResults])

    const transformedData = Object.entries(executionResults).map(
        ([executionId, execution]) => ({
            id: executionId,
            data: execution.results.map(result => ({
                x: result.iterationNumber,
                y: result.iterationFitnessScore,
            })),
        })
    )

    const filteredData = transformedData.filter(line =>
        selectedLines.includes(line.id)
    )

    const handleLegendClick = legend => {
        setSelectedLines(prevSelectedLines =>
            prevSelectedLines.includes(legend.id)
                ? prevSelectedLines.filter(id => id !== legend.id)
                : [...prevSelectedLines, legend.id]
        )
    }

    const handlePointClick = point => {
        const executionData = executionResults[point.serieId]
        setSelectedExecution({
            executionId: point.serieId,
            algorithmData: executionData.algorithmData,
        })
        setDialogOpen(true)
    }

    const handleCloseDialog = () => {
        setDialogOpen(false)
    }

    const CustomTooltip = ({ point }) => (
        <Paper style={{ padding: '10px' }}>
            <Typography variant='body1'>
                <strong>Iteration:</strong> {point.data.xFormatted}
            </Typography>
            <Typography variant='body1'>
                <strong>Fitness Score:</strong> {point.data.yFormatted}
            </Typography>
        </Paper>
    )

    const colorScheme = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231']
    const getColorForLine = lineId => {
        const index = Object.keys(executionResults).indexOf(lineId)
        return colorScheme[index % colorScheme.length]
    }

    return (
        <Box sx={{ height: '100vh' }}>
            <Box sx={{ flexGrow: 1, height: '100%', overflowX: 'auto' }}>
                <Box sx={{ width: `${chartWidth}px`, height: '95%' }}>
                    <ResponsiveLine
                        data={filteredData}
                        tooltip={CustomTooltip}
                        margin={{
                            top: 40,
                            right: 80,
                            bottom: 50,
                            left: 80,
                        }}
                        xScale={{
                            type: 'linear',
                            min: 'auto',
                            max: 'auto',
                        }}
                        yScale={{
                            type: 'linear',
                            min: 'auto',
                            max: 'auto',
                            stacked: false,
                            reverse: false,
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: -20,
                            legend: 'Iteration Number',
                            legendOffset: 36,
                            legendPosition: 'middle',
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 1,
                            tickPadding: 5,
                            tickRotation: -10,
                            legend: 'Fitness Score',
                            legendOffset: -50,
                            legendPosition: 'middle',
                        }}
                        colors={line => getColorForLine(line.id)}
                        pointSize={8}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        useMesh={true}
                        onClick={handlePointClick}
                        legends={[
                            {
                                anchor: 'top-right',
                                direction: 'column',
                                translateX: -180,
                                translateY: 50,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 100,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground:
                                                'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                                onClick: handleLegendClick,
                                data: transformedData.map(line => {
                                    const isActive = selectedLines.includes(
                                        line.id
                                    )
                                    return {
                                        id: line.id,
                                        label: line.id,
                                        color: isActive
                                            ? getColorForLine(line.id)
                                            : 'grey',
                                    }
                                }),
                            },
                        ]}
                    />
                </Box>
            </Box>
            <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>Selected Algorithm Details</DialogTitle>
                <DialogContent>
                    {selectedExecution && (
                        <>
                            <DialogContentText>
                                Execution ID: {selectedExecution.executionId}
                            </DialogContentText>
                            <DialogContentText>
                                Algorithm Code:{' '}
                                {selectedExecution.algorithmData.AlgorithmCode}
                            </DialogContentText>
                            {/* Additional details can be displayed here */}
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default ExecutionResultsDisplayComponent
