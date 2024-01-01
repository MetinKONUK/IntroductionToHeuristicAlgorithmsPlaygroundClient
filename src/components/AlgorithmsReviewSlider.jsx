import { useSelector, useDispatch } from 'react-redux'
import { initializeWebSocket, closeWebSocket } from '../utils/webSocketManager'
import Slider from 'react-slick'
import { Box, Paper, Typography, Button } from '@mui/material'
import GeneticAlgorithmReviewComponent from './HeuristicAlgorithmReviews/GeneticAlgorithmReviewComponent'
import SimulatedAnnealingReviewComponent from './HeuristicAlgorithmReviews/SimulatedAnnealingReviewComponent'
import GreyWolfOptimizationReviewComponent from './HeuristicAlgorithmReviews/GreyWolfOptimizationReviewComponent'
import ParticleSwarmOptimizationReviewComponent from './HeuristicAlgorithmReviews/ParticleSwarmOptimizationReviewComponent'
import HarmonySearchAlgorithmReviewComponent from './HeuristicAlgorithmReviews/HarmonySearchAlgorithmReviewComponent'
import NothingIcon from '../assets/sliderIcons/nothing.png'
import AfricanVulturesOptimizationReviewComponent from './HeuristicAlgorithmReviews/AfricanVulturesOptimizationReviewComponent'
import ArithmeticOptimizationAlgorithmReviewComponent from './HeuristicAlgorithmReviews/ArithmeticOptimizationAlgorithmReviewComponent'
import ArtificialGorillaTroopsOptimizationReviewComponent from './HeuristicAlgorithmReviews/ArtificialGorillaTroopsOptimizationReviewComponent'
import EquilibriumOptimizationReviewComponent from './HeuristicAlgorithmReviews/EquilibriumOptimizationReviewComponent'
import HenryGasSolubilityOptimizationReviewComponent from './HeuristicAlgorithmReviews/HenryGasSolubilityOptimizationReviewComponent'
import MarinePredatorAlgorithmReviewComponent from './HeuristicAlgorithmReviews/MarinePredatorAlgorithmReviewComponent'
import MountainGazelleOptimizationReviewComponent from './HeuristicAlgorithmReviews/MountainGazelleOptimizationReviewComponent'
import BarnaclesMatingOptimizationReviewComponent from './HeuristicAlgorithmReviews/BarnaclesMatingOptimizationReviewComponent'
import BiogeographyBasedOptimizationReviewComponent from './HeuristicAlgorithmReviews/BiogeographyBasedOptimizationReviewComponent'
import BrownBearOptimizationReviewComponent from './HeuristicAlgorithmReviews/BrownBearOptimizationReviewComponent'
import CoralReefsOptimizationReviewComponent from './HeuristicAlgorithmReviews/CoralReefsOptimizationReviewComponent'
import DifferentialEvolutionReviewComponent from './HeuristicAlgorithmReviews/DifferentialEvolutionReviewComponent'
import EarthwormOptimisationReviewComponent from './HeuristicAlgorithmReviews/EarthwormOptimisationReviewComponent'
import EvolutionaryProgrammingReviewComponent from './HeuristicAlgorithmReviews/EvolutionaryProgrammingReviewComponent'
import EvolutionStrategiesReviewComponent from './HeuristicAlgorithmReviews/EvolutionStrategiesReviewComponent'
import FlowerPollinationAlgorithmReviewComponent from './HeuristicAlgorithmReviews/FlowerPollinationAlgorithmReviewComponent'
import InvasiveWeedOptimizationReviewComponent from './HeuristicAlgorithmReviews/InvasiveWeedOptimizationReviewComponent'
import MemeticAlgorithmReviewComponent from './HeuristicAlgorithmReviews/MemeticAlgorithmReviewComponent'
import SatinBowerbirdOptimizerReviewComponent from './HeuristicAlgorithmReviews/SatinBowerbirdOptimizerReviewComponent'
import SeagullOptimizationAlgorithmComponent from './HeuristicAlgorithmReviews/SeagullOptimizationAlgorithmComponent'
import SlimeMouldAlgorithmComponent from './HeuristicAlgorithmReviews/SlimeMouldAlgorithmComponent'
import SuccessHistoryAdaptationDEComponent from './HeuristicAlgorithmReviews/SuccessHistoryAdaptationDEComponent'
import SymbioticOrganismsSearchComponent from './HeuristicAlgorithmReviews/SymbioticOrganismsSearchComponent'
import TreePhysiologyOptimizationComponent from './HeuristicAlgorithmReviews/TreePhysiologyOptimizationComponent'
import TunicateSwarmAlgorithmComponent from './HeuristicAlgorithmReviews/TunicateSwarmAlgorithmComponent'
import VirusColonySearchComponent from './HeuristicAlgorithmReviews/VirusColonySearchComponent'
import WildebeestHerdOptimizationComponent from './HeuristicAlgorithmReviews/WildebeestHerdOptimizationComponent'

const AlgorithmsReviewSlider = () => {
    const dispatch = useDispatch()
    const algorithmsToExecute = useSelector(
        state => state.algorithmSelection.algorithmsToExecute
    )
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const handleSendToServer = () => {
        initializeWebSocket(dispatch, algorithmsToExecute)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Paper
                elevation={3}
                sx={{ padding: 3, margin: 2, width: '80%', maxWidth: '800px' }}
            >
                {algorithmsToExecute.length === 0 ? (
                    <Box sx={{ textAlign: 'center' }}>
                        <img
                            src={NothingIcon}
                            alt='No Algorithms Selected'
                            style={{
                                width: '30%',
                                height: 'auto',
                                marginBottom: '2rem',
                                marginTop: '2rem',
                            }}
                        />
                        <Typography variant='h6'>
                            No algorithms in the execution list!
                        </Typography>
                    </Box>
                ) : (
                    <>
                        <Slider {...settings}>
                            {algorithmsToExecute.map((algorithm, index) => {
                                switch (algorithm.algorithmCode) {
                                    case 'AVO':
                                        return (
                                            <AfricanVulturesOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'AOA':
                                        return (
                                            <ArithmeticOptimizationAlgorithmReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'AGTO':
                                        return (
                                            <ArtificialGorillaTroopsOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'EO':
                                        return (
                                            <EquilibriumOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'GA':
                                        return (
                                            <GeneticAlgorithmReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'GWO':
                                        return (
                                            <GreyWolfOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'HSA':
                                        return (
                                            <HarmonySearchAlgorithmReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'HGSO':
                                        return (
                                            <HenryGasSolubilityOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'MPA':
                                        return (
                                            <MarinePredatorAlgorithmReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'MGO':
                                        return (
                                            <MountainGazelleOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'PSO':
                                        return (
                                            <ParticleSwarmOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'SA':
                                        return (
                                            <SimulatedAnnealingReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )

                                    case 'BMO':
                                        return (
                                            <BarnaclesMatingOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'BBO':
                                        return (
                                            <BiogeographyBasedOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'BRBO':
                                        return (
                                            <BrownBearOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'CRO':
                                        return (
                                            <CoralReefsOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'DE':
                                        return (
                                            <DifferentialEvolutionReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'EWO':
                                        return (
                                            <EarthwormOptimisationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'EP':
                                        return (
                                            <EvolutionaryProgrammingReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'ES':
                                        return (
                                            <EvolutionStrategiesReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'FPA':
                                        return (
                                            <FlowerPollinationAlgorithmReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'IWO':
                                        return (
                                            <InvasiveWeedOptimizationReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'MA':
                                        return (
                                            <MemeticAlgorithmReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'SBBO':
                                        return (
                                            <SatinBowerbirdOptimizerReviewComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'SOS':
                                        return (
                                            <SeagullOptimizationAlgorithmComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'SMA':
                                        return (
                                            <SlimeMouldAlgorithmComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'SHADE':
                                        return (
                                            <SuccessHistoryAdaptationDEComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'SMOS':
                                        return (
                                            <SymbioticOrganismsSearchComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'TPO':
                                        return (
                                            <TreePhysiologyOptimizationComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'TSO':
                                        return (
                                            <TunicateSwarmAlgorithmComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'VCS':
                                        return (
                                            <VirusColonySearchComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    case 'WHO':
                                        return (
                                            <WildebeestHerdOptimizationComponent
                                                key={index}
                                                data={algorithm}
                                                index={index}
                                            />
                                        )
                                    default:
                                        return null
                                }
                            })}
                        </Slider>
                        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                            <Button
                                variant='contained'
                                color='success'
                                sx={{ width: '95%', marginTop: '2rem' }}
                                onClick={handleSendToServer}
                            >
                                Send To Server
                            </Button>
                        </Box>
                    </>
                )}
            </Paper>
        </Box>
    )
}

export default AlgorithmsReviewSlider
