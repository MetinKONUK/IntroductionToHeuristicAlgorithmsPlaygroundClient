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

import AfricanVulturesOptimizationDetails from './SelectedAlgorithmDetails/AfricanVulturesOptimizationDetails'
import ArithmeticOptimizationAlgorithmDetails from './SelectedAlgorithmDetails/ArithetmeticOptimizationAlgorithmDetails'
import ArtificialGorillaTroopsOptimizationDetails from './SelectedAlgorithmDetails/ArtificialGorillaTroopsOptimizationDetails'
import EquilibriumOptimizationDetails from './SelectedAlgorithmDetails/EquilibriumOptimizationDetails'
import GeneticAlgorithmDetails from './SelectedAlgorithmDetails/GeneticAlgorithmDetails'
import GreyWolfOptimizationDetails from './SelectedAlgorithmDetails/GreyWolfOptimizationDetails'
import HarmonySearchAlgorithmDetails from './SelectedAlgorithmDetails/HarmonySearchAlgorithmDetails'
import HenryGasSolubilityOptimizationDetails from './SelectedAlgorithmDetails/HenryGasSolubilityOptimizationDetails'
import MarinePredatorAlgorithmDetails from './SelectedAlgorithmDetails/MarinePredatorAlgorithmDetails'
import MountainGazelleOptimizationDetails from './SelectedAlgorithmDetails/MountainGazelleOptimizationDetails'
import ParticleSwarmOptimizationDetails from './SelectedAlgorithmDetails/ParticleSwarmOptimizationDetails'
import SimulatedAnnealingDetails from './SelectedAlgorithmDetails/SimulatedAnnealingDetails'

import BarnaclesMatingOptimizationDetails from './SelectedAlgorithmDetails/BarnaclesMatingOptimizationDetails'
import BiogeographyBasedOptimizationDetails from './SelectedAlgorithmDetails/BiogeographyBasedOptimizationDetails'
import BrownBearOptimizationDetails from './SelectedAlgorithmDetails/BrownBearOptimizationDetails'
import CoralReefsOptimizationDetails from './SelectedAlgorithmDetails/CoralReefsOptimizationDetails'
import DifferentialEvolutionDetails from './SelectedAlgorithmDetails/DifferentialEvolutionDetails'
import EarthwormOptimisationDetails from './SelectedAlgorithmDetails/EarthwormOptimisationDetails'
import EvolutionaryProgrammingDetails from './SelectedAlgorithmDetails/EvolutionaryProgrammingDetails'
import EvolutionStrategiesDetails from './SelectedAlgorithmDetails/EvolutionStrategiesDetails'
import FlowerPollinationAlgorithmDetails from './SelectedAlgorithmDetails/FlowerPollinationAlgorithmDetails'
import InvasiveWeedOptimizationDetails from './SelectedAlgorithmDetails/InvasiveWeedOptimizationDetails'
import MemeticAlgorithmDetails from './SelectedAlgorithmDetails/MemeticAlgorithmDetails'
import SatinBowerbirdOptimizerDetails from './SelectedAlgorithmDetails/SatinBowerbirdOptimizerDetails'
import SeagullOptimizationDetails from './SelectedAlgorithmDetails/SeagullOptimizationDetails'
import SlimeMouldAlgorithmDetails from './SelectedAlgorithmDetails/SlimeMouldAlgorithmDetails'
import SuccessHistoryAdaptationDEDetails from './SelectedAlgorithmDetails/SuccessHistoryAdaptationDEDetails'
import SymbioticOrganismsSearchDetails from './SelectedAlgorithmDetails/SymbioticOrganismsSearchDetails'
import TreePhysiologyOptimizationDetails from './SelectedAlgorithmDetails/TreePhysiologyOptimizationDetails'
import TunicateSwarmAlgorithmDetails from './SelectedAlgorithmDetails/TunicateSwarmAlgorithmDetails'
import VirusColonySearchAlgorithmDetails from './SelectedAlgorithmDetails/VirusColonySearchAlgorithmDetails'
import WildebeestHerdOptimizationDetails from './SelectedAlgorithmDetails/WildebeestHerdOptimizationDetails'

const ExecutionResultsDisplayComponent = () => {
    const [selectedExecution, setSelectedExecution] = useState(null)
    const [selectedLines, setSelectedLines] = useState([])
    const [chartWidth, setChartWidth] = useState(0)
    const [dialogOpen, setDialogOpen] = useState(false)

    const selectedAlgorithms = useSelector(
        state => state.algorithmSelection.algorithmsToExecute
    )
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
        ([index, execution]) => {
            let { executionId } = execution
            return {
                id: index,
                label: executionId.substring(0, 8), // Shortened label
                data: execution.results.map(result => ({
                    x: result.iterationNumber,
                    y: result.iterationFitnessScore,
                })),
            }
        }
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
        const algorithmData = selectedAlgorithms[point.serieId]
        setSelectedExecution({
            executionId: point.serieId,
            algorithmData, // Fallback to executionData.algorithmData if necessary
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

    const renderAlgorithmDetails = () => {
        if (!selectedExecution || !selectedExecution.algorithmData) {
            return (
                <Typography variant='subtitle1'>
                    No Details Available
                </Typography>
            )
        }

        switch (selectedExecution.algorithmData.algorithmCode) {
            case 'GA':
                return (
                    <GeneticAlgorithmDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'AVO':
                return (
                    <AfricanVulturesOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'AOA':
                return (
                    <ArithmeticOptimizationAlgorithmDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'AGTO':
                return (
                    <ArtificialGorillaTroopsOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'EO':
                return (
                    <EquilibriumOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'GWO':
                return (
                    <GreyWolfOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'HSA':
                return (
                    <HarmonySearchAlgorithmDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'HGSO':
                return (
                    <HenryGasSolubilityOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'MPA':
                return (
                    <MarinePredatorAlgorithmDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'MGO':
                return (
                    <MountainGazelleOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'PSO':
                return (
                    <ParticleSwarmOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'SA':
                return (
                    <SimulatedAnnealingDetails
                        selectedExecution={selectedExecution}
                    />
                )
            


                
            case 'BMO':
                return (
                    <BarnaclesMatingOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'BBO':
                return (
                    <BiogeographyBasedOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'BRBO':
                return (
                    <BrownBearOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'CRO':
                return (
                    <CoralReefsOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'DE':
                return (
                    <DifferentialEvolutionDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'EWO':
                return (
                    <EarthwormOptimisationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'EP':
                return (
                    <EvolutionaryProgrammingDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'ES':
                return (
                    <EvolutionStrategiesDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'FPA':
                return (
                    <FlowerPollinationAlgorithmDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'IWO':
                return (
                    <InvasiveWeedOptimizationDetails
                        selectedExecution={selectedExecution}   
                    />
                )
            case 'MA':
                return (
                    <MemeticAlgorithmDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'SBBO':
                return (
                    <SatinBowerbirdOptimizerDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'SOS':
                return (
                    <SeagullOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'SMA':
                return (
                    <SlimeMouldAlgorithmDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'SHADE':
                return (
                    <SuccessHistoryAdaptationDEDetails
                        selectedExecution={selectedExecution}
                    />  
                )
            case 'SMOS':
                return (
                    <SymbioticOrganismsSearchDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'TPO':
                return (
                    <TreePhysiologyOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'TSO':
                return (
                    <TunicateSwarmAlgorithmDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'VCS':
                return (
                    <VirusColonySearchAlgorithmDetails
                        selectedExecution={selectedExecution}
                    />
                )
            case 'WHO':
                return (
                    <WildebeestHerdOptimizationDetails
                        selectedExecution={selectedExecution}
                    />
                )
            default:
                return (
                    <Typography variant='subtitle1'>
                        Algorithm details not available.
                    </Typography>
                )
        }
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
                                anchor: 'top-left',
                                direction: 'column',
                                translateX: -70,
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
                                data: transformedData.map(line => {
                                    const isActive = selectedLines.includes(
                                        line.id
                                    )
                                    return {
                                        id: line.id,
                                        label: line.label,
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
                <DialogContent>{renderAlgorithmDetails()}</DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default ExecutionResultsDisplayComponent
