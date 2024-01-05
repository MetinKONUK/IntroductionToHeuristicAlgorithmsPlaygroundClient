import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ResponsiveLine } from '@nivo/line'
import {
    Box,
    Typography,
    Paper,
    // Dialog,
    // DialogContent,
    // DialogActions,
    // Button,
} from '@mui/material'

import NoDataIcon from '../assets/executionResultsIcons/no-data.png'

const ExecutionResultsDisplayCompactComponent = () => {
    // const [selectedExecution, setSelectedExecution] = useState(null)
    const [selectedLines, setSelectedLines] = useState([])
    const [chartWidth, setChartWidth] = useState('100vw')
    const [dialogOpen, setDialogOpen] = useState(false)

    // const selectedAlgorithms = useSelector(
    //     state => state.algorithmSelection.algorithmsToExecute
    // )
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
            const newChartWidth = Math.min(maxIterations * 2, 100)
            setChartWidth(`${newChartWidth}vw`)
        }
    }, [executionResults])

    const transformedData = Object.entries(executionResults).map(
        ([index, execution]) => ({
            id: index,
            label: execution.executionId.substring(0, 8),
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

    // const handlePointClick = point => {
    //     const algorithmData = selectedAlgorithms[point.serieId]
    //     setSelectedExecution({
    //         executionId: point.serieId,
    //         algorithmData,
    //     })
    //     setDialogOpen(true)
    // }

    // const handleCloseDialog = () => {
    //     setDialogOpen(false)
    // }

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

    const colorScheme = [
        '#76ff03',
        '#ff3d00',
        '#ff9100',
        '#ffea00',
        '#1de9b6',
        '#3d5afe',
        '#d500f9',
        '#f50057',
        '#009688',
        '#673ab7',
        '#880e4f',
    ]

    const getColorForLine = lineId => {
        const index = Object.keys(executionResults).indexOf(lineId)
        return colorScheme[index % colorScheme.length]
    }

    // const renderAlgorithmDetails = () => {
    //     // Implement your switch case or logic to render algorithm details
    // }

    return (
        <Box sx={{ height: '90vh' }}>
            <Box sx={{ flexGrow: 1, height: '100%', overflowX: 'hidden' }}>
                {Object.keys(executionResults).length !== 0 ? (
                    <Box sx={{ width: chartWidth, height: '100%' }}>
                        <ResponsiveLine
                            data={filteredData}
                            tooltip={CustomTooltip}
                            margin={{
                                top: 20,
                                right: 40,
                                bottom: 50,
                                left: 70,
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
                            pointSize={0}
                            pointColor={{ theme: 'background' }}
                            pointBorderWidth={2}
                            pointBorderColor={{ from: 'serieColor' }}
                            useMesh={true}
                            // onClick={handlePointClick}
                            legends={[
                                {
                                    anchor: 'top-left',
                                    direction: 'column',
                                    translateX: 40,
                                    translateY: 10,
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
                                    data: transformedData.map(line => ({
                                        id: line.id,
                                        label: line.label,
                                        color: selectedLines.includes(line.id)
                                            ? getColorForLine(line.id)
                                            : 'grey',
                                    })),
                                },
                            ]}
                        />
                    </Box>
                ) : (
                    <Box sx={{ textAlign: 'center' }}>
                        <img
                            src={NoDataIcon}
                            alt='No execution results to display!'
                            style={{
                                width: '30%',
                                height: 'auto',
                                marginBottom: '2rem',
                                marginTop: '10rem',
                            }}
                        />
                        <Typography variant='h6'>
                            No execution results to display!
                        </Typography>
                    </Box>
                )}
            </Box>
            {/* <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                <DialogContent>{renderAlgorithmDetails()}</DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                </DialogActions>
            </Dialog> */}
        </Box>
    )
}

export default ExecutionResultsDisplayCompactComponent
