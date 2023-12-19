import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { Box, Paper } from '@mui/material'
import GeneticAlgorithmReviewComponent from './HeuristicAlgorihmReviews/GeneticAlgorithmReviewComponent'
import SimulatedAnnealingReviewComponent from './HeuristicAlgorihmReviews/SimulatedAnnealingReviewComponent'
import GreyWolfOptimizationReviewComponent from './HeuristicAlgorihmReviews/GreyWolfOptimizationReviewComponent'
import ParticleSwarmOptimizationReviewComponent from './HeuristicAlgorihmReviews/ParticleSwarmOptimizationReviewComponent'
import HarmonySearchAlgorithmReviewComponent from './HeuristicAlgorihmReviews/HarmonySearchAlgorithmReviewComponent'

const AlgorithmsReviewSlider = () => {
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
                <Slider {...settings}>
                    {algorithmsToExecute.map((algorithm, index) => {
                        switch (algorithm.algorithmCode) {
                            case 'GA':
                                return (
                                    <GeneticAlgorithmReviewComponent
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
                            case 'GWO':
                                return (
                                    <GreyWolfOptimizationReviewComponent
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
                            case 'HSA':
                                return (
                                    <HarmonySearchAlgorithmReviewComponent
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
            </Paper>
        </Box>
    )
}

export default AlgorithmsReviewSlider
