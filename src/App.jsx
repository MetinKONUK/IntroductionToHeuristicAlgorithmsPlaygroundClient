import { Routes, Route } from 'react-router-dom'
import GeneticAlgorithmComponent from './components/HeuristicAlgorithms/GeneticAlgorithmComponent'
import SimulatedAnnealingComponent from './components/HeuristicAlgorithms/SimulatedAnnealingComponent'
import GreyWolfOptimizationComponent from './components/HeuristicAlgorithms/GreyWolfOptimizationComponent'
import ParticleSwarmOptimizationComponent from './components/HeuristicAlgorithms/ParticleSwarmOptimizationComponent'
import HarmonySearchAlgorithmComponent from './components/HeuristicAlgorithms/HarmonySearchAlgorithmComponent'
import SidebarComponent from './components/SidebarComponent'
import FloatingButton from './components/FloatingButton'
import AlgorithmsReviewSlider from './components/AlgorithmsReviewSlider'
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
                <Route path='/ga' element={<GeneticAlgorithmComponent />} />
                <Route
                    path='/ga/edit/:index'
                    element={<GeneticAlgorithmComponent />}
                />

                <Route path='/sa' element={<SimulatedAnnealingComponent />} />
                <Route
                    path='/sa/edit/:index'
                    element={<SimulatedAnnealingComponent />}
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
                    path='/pso'
                    element={<ParticleSwarmOptimizationComponent />}
                />
                <Route
                    path='/pso/edit/:index'
                    element={<ParticleSwarmOptimizationComponent />}
                />

                <Route
                    path='/hs'
                    element={<HarmonySearchAlgorithmComponent />}
                />
                <Route
                    path='/hs/edit/:index'
                    element={<HarmonySearchAlgorithmComponent />}
                />

                <Route path='/run' element={<AlgorithmsReviewSlider />} />
            </Routes>
        </>
    )
}

export default App

