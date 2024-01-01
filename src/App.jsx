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


import BarnaclesMatingOptimizationComponent from './components/HeuristicAlgorithms/BarnaclesMatingOptimizationComponent'
import BiogeographyBasedOptimizationComponent from './components/HeuristicAlgorithms/BiogeographyBasedOptimizationComponent'
import BrownBearOptimizationComponent from './components/HeuristicAlgorithms/BrownBearOptimizationComponent'
import CoralReefsOptimizationComponent from './components/HeuristicAlgorithms/CoralReefsOptimizationComponent'
import DifferentialEvolutionComponent from './components/HeuristicAlgorithms/DifferentialEvolutionComponent'
import EarthwormOptimisationComponent from './components/HeuristicAlgorithms/EarthwormOptimisationComponent'
import EvolutionaryProgrammingComponent from './components/HeuristicAlgorithms/EvolutionaryProgrammingComponent'
import EvolutionStrategiesComponent from './components/HeuristicAlgorithms/EvolutionStrategiesComponent'
import FlowerPollinationComponent from './components/HeuristicAlgorithms/FlowerPollinationComponent'
import InvasiveWeedOptimizationComponent from './components/HeuristicAlgorithms/InvasiveWeedOptimizationComponent'
import MemeticAlgorithmComponent from './components/HeuristicAlgorithms/MemeticAlgorithmComponent'
import SatinBowerbirdOptimizerComponent from './components/HeuristicAlgorithms/SatinBowerbirdOptimizerComponent'
import SeagullOptimizationComponent from './components/HeuristicAlgorithms/SeagullOptimizationComponent'
import SlimeMouldAlgorithmComponent from './components/HeuristicAlgorithms/SlimeMouldAlgorithmComponent'
import SuccessHistoryAdaptationDEComponent from './components/HeuristicAlgorithms/SuccessHistoryAdaptationDEComponent'
import SymbioticOrganismsSearchComponent from './components/HeuristicAlgorithms/SymbioticOrganismsSearchComponent'
import TreePhysiologyOptimizationComponent from './components/HeuristicAlgorithms/TreePhysiologyOptimizationComponent'
import TunicateSwarmAlgorithmComponent from './components/HeuristicAlgorithms/TunicateSwarmAlgorithmComponent'
import VirusColonySearchComponent from './components/HeuristicAlgorithms/VirusColonySearchComponent'
import WildebeestHerdOptimizationComponent from './components/HeuristicAlgorithms/WildebeestHerdOptimizationComponent'



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





                <Route path='/bmo' element={<BarnaclesMatingOptimizationComponent />} />
                <Route
                    path='/bmo/edit/:index'
                    element={<BarnaclesMatingOptimizationComponent/>}
                />

                <Route path='/bbo' element={<BiogeographyBasedOptimizationComponent />} />
                <Route
                    path='/bbo/edit/:index'
                    element={<BiogeographyBasedOptimizationComponent />}
                />

                <Route path='/brbo' element={<BrownBearOptimizationComponent />} />
                <Route
                    path='/brbo/edit/:index'
                    element={<BrownBearOptimizationComponent />}
                />

                <Route path='/cro' element={<CoralReefsOptimizationComponent />} />
                <Route
                    path='/cro/edit/:index'
                    element={<CoralReefsOptimizationComponent />}
                />

                <Route path='/de' element={<DifferentialEvolutionComponent />} />
                <Route
                    path='/de/edit/:index'
                    element={<DifferentialEvolutionComponent />}
                />

                <Route path='/ewo' element={<EarthwormOptimisationComponent />} />
                <Route
                    path='/ewo/edit/:index'
                    element={<EarthwormOptimisationComponent />}
                />

                <Route path='/ep' element={<EvolutionaryProgrammingComponent />} />
                <Route
                    path='/ep/edit/:index'
                    element={<EvolutionaryProgrammingComponent />}
                />

                <Route path='/es' element={<EvolutionStrategiesComponent />} />
                <Route
                    path='/es/edit/:index'
                    element={<EvolutionStrategiesComponent />}
                />

                <Route path='/fpa' element={<FlowerPollinationComponent />} />
                <Route
                    path='/fpa/edit/:index'
                    element={<FlowerPollinationComponent />}
                />

                <Route path='/ıwo' element={<InvasiveWeedOptimizationComponent />} />
                <Route
                    path='/ıwo/edit/:index'
                    element={<InvasiveWeedOptimizationComponent />}
                />

                <Route path='/ma' element={<MemeticAlgorithmComponent />} />
                <Route
                    path='/ma/edit/:index'
                    element={<MemeticAlgorithmComponent />}
                />

                <Route path='/sbbo' element={<SatinBowerbirdOptimizerComponent />} />
                <Route
                    path='/sbbo/edit/:index'
                    element={<SatinBowerbirdOptimizerComponent />}
                />

                <Route path='/sos' element={<SeagullOptimizationComponent />} />
                <Route
                    path='/sos/edit/:index'
                    element={<SeagullOptimizationComponent />}
                />

                <Route path='/sma' element={<SlimeMouldAlgorithmComponent />} />
                <Route
                    path='/sma/edit/:index'
                    element={<SlimeMouldAlgorithmComponent />}
                />

                <Route path='/shade' element={<SuccessHistoryAdaptationDEComponent />} />
                <Route
                    path='/shade/edit/:index'
                    element={<SuccessHistoryAdaptationDEComponent />}
                />

                <Route path='/smos' element={<SymbioticOrganismsSearchComponent />} />
                <Route
                    path='/smos/edit/:index'
                    element={<SymbioticOrganismsSearchComponent />}
                />

                <Route path='/tpo' element={<TreePhysiologyOptimizationComponent />} />
                <Route
                    path='/tpo/edit/:index'
                    element={<TreePhysiologyOptimizationComponent />}
                />

                <Route path='/tso' element={<TunicateSwarmAlgorithmComponent />} />
                <Route
                    path='/tso/edit/:index'
                    element={<TunicateSwarmAlgorithmComponent />}
                />

                <Route path='/vcs' element={<VirusColonySearchComponent />} />
                <Route
                    path='/vcs/edit/:index'
                    element={<VirusColonySearchComponent />}
                />

                <Route path='/who' element={<WildebeestHerdOptimizationComponent />} />
                <Route
                    path='/who/edit/:index'
                    element={<WildebeestHerdOptimizationComponent />}
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

