import { Routes, Route } from 'react-router-dom'
import AfricanVulturesOptimizationComponent from './components/HeuristicAlgorithms/AfricanVulturesOptimizationComponent'
import ArithmeticOptimizationAlgorithmComponent from './components/HeuristicAlgorithms/ArithmeticOptimizationAlgorithmComponent'
import ArtificialGorillaTroopsOptimizationComponent from './components/HeuristicAlgorithms/ArtificialGorillaTroopsOptimizationComponent'
import EquilibriumOptimizationComponent from './components/HeuristicAlgorithms/EquilibriumOptimizationComponent'
import GeneticAlgorithmComponent from './components/HeuristicAlgorithms/GeneticAlgorithmComponent'
import GreyWolfOptimizationComponent from './components/HeuristicAlgorithms/GreyWolfOptimizationComponent'
import HarmonySearchAlgorithmComponent from './components/HeuristicAlgorithms/HarmonySearchAlgorithmComponent'
import HenryGasSolubilityOptimizationComponent from './components/HeuristicAlgorithms/HenryGasSolubilityOptimizationComponent'
import MarinePredatorAlgorithmComponent from './components/HeuristicAlgorithms/MarinePredatorAlgorithmComponent'
import MountainGazelleOptimizationComponent from './components/HeuristicAlgorithms/MountainGazelleOptimizationComponent'
import ParticleSwarmOptimizationComponent from './components/HeuristicAlgorithms/ParticleSwarmOptimizationComponent'
import SimulatedAnnealingComponent from './components/HeuristicAlgorithms/SimulatedAnnealingComponent'

import SidebarComponent from './components/SidebarComponent'
import FloatingButton from './components/FloatingButton'
import AlgorithmsReviewSlider from './components/AlgorithmsReviewSlider'
import ExecutionResultsDisplayComponent from './components/ExecutionResultsDisplayComponent'
import { useState } from 'react'

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen)
    }

    return (
        <>
            {!isSidebarOpen && <FloatingButton onClick={toggleSidebar} />}

            <SidebarComponent
                open={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            />
            <Routes>
                <Route
                    path='/avo'
                    element={<AfricanVulturesOptimizationComponent />}
                />
                <Route
                    path='/avo/edit/:index'
                    element={<AfricanVulturesOptimizationComponent />}
                />

                <Route
                    path='/aoa'
                    element={<ArithmeticOptimizationAlgorithmComponent />}
                />
                <Route
                    path='/aoa/edit/:index'
                    element={<ArithmeticOptimizationAlgorithmComponent />}
                />

                <Route
                    path='/agto'
                    element={<ArtificialGorillaTroopsOptimizationComponent />}
                />
                <Route
                    path='/agto/edit/:index'
                    element={<ArtificialGorillaTroopsOptimizationComponent />}
                />

                <Route
                    path='/eo'
                    element={<EquilibriumOptimizationComponent />}
                />
                <Route
                    path='/eo/edit/:index'
                    element={<EquilibriumOptimizationComponent />}
                />

                <Route path='/ga' element={<GeneticAlgorithmComponent />} />
                <Route
                    path='/ga/edit/:index'
                    element={<GeneticAlgorithmComponent />}
                />

                <Route
                    path='/gwo'
                    element={<GreyWolfOptimizationComponent />}
                />
                <Route
                    path='/gwo/edit/:index'
                    element={<GreyWolfOptimizationComponent />}
                />

                <Route
                    path='/hs'
                    element={<HarmonySearchAlgorithmComponent />}
                />
                <Route
                    path='/hs/edit/:index'
                    element={<HarmonySearchAlgorithmComponent />}
                />

                <Route
                    path='/hgso'
                    element={<HenryGasSolubilityOptimizationComponent />}
                />
                <Route
                    path='/hgso/edit/:index'
                    element={<HenryGasSolubilityOptimizationComponent />}
                />

                <Route
                    path='/mpa'
                    element={<MarinePredatorAlgorithmComponent />}
                />
                <Route
                    path='/mpa/edit/:index'
                    element={<MarinePredatorAlgorithmComponent />}
                />

                <Route
                    path='/mgo'
                    element={<MountainGazelleOptimizationComponent />}
                />
                <Route
                    path='/mpa/edit/:index'
                    element={<MountainGazelleOptimizationComponent />}
                />

                <Route
                    path='/pso'
                    element={<ParticleSwarmOptimizationComponent />}
                />
                <Route
                    path='/pso/edit/:index'
                    element={<ParticleSwarmOptimizationComponent />}
                />

                <Route path='/sa' element={<SimulatedAnnealingComponent />} />
                <Route
                    path='/sa/edit/:index'
                    element={<SimulatedAnnealingComponent />}
                />

                <Route path='/run' element={<AlgorithmsReviewSlider />} />
                <Route
                    path='/results'
                    element={<ExecutionResultsDisplayComponent />}
                />
            </Routes>
        </>
    )
}

export default App

