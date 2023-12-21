import { useSelector, useDispatch } from 'react-redux'
import { initializeWebSocket, closeWebSocket } from '../utils/webSocketManager'
import Slider from 'react-slick'
import { Box, Paper, Typography, Button } from '@mui/material'
import GeneticAlgorithmReviewComponent from './HeuristicAlgorihmReviews/GeneticAlgorithmReviewComponent'
import SimulatedAnnealingReviewComponent from './HeuristicAlgorihmReviews/SimulatedAnnealingReviewComponent'
import GreyWolfOptimizationReviewComponent from './HeuristicAlgorihmReviews/GreyWolfOptimizationReviewComponent'
import ParticleSwarmOptimizationReviewComponent from './HeuristicAlgorihmReviews/ParticleSwarmOptimizationReviewComponent'
import HarmonySearchAlgorithmReviewComponent from './HeuristicAlgorihmReviews/HarmonySearchAlgorithmReviewComponent'
import NothingIcon from '../assets/sliderIcons/nothing.png'
import AfricanVulturesOptimizationReviewComponent from './HeuristicAlgorihmReviews/AfricanVulturesOptimizationReviewComponent'
import ArithmeticOptimizationAlgorithmReviewComponent from './HeuristicAlgorihmReviews/ArithmeticOptimizationAlgorithmReviewComponent'
import ArtificialGorillaTroopsOptimizationReviewComponent from './HeuristicAlgorihmReviews/ArtificialGorillaTroopsOptimizationReviewComponent'
import EquilibriumOptimizationReviewComponent from './HeuristicAlgorihmReviews/EquilibriumOptimizationReviewComponent'
import HenryGasSolubilityOptimizationReviewComponent from './HeuristicAlgorihmReviews/HenryGasSolubilityOptimizationReviewComponent'
import MarinePredatorAlgorithmReviewComponent from './HeuristicAlgorihmReviews/MarinePredatorAlgorithmReviewComponent'
import MountainGazelleOptimizationReviewComponent from './HeuristicAlgorihmReviews/MountainGazelleOptimizationReviewComponent'

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
