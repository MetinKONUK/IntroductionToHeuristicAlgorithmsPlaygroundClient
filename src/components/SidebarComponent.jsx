import React from 'react'
import {
    Box,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import ChromosomesIcon from '../assets/sidebarIcons/chromosomes.png'
import AnvilIcon from '../assets/sidebarIcons/anvil.png'
import WolfIcon from '../assets/sidebarIcons/wolf.png'
import SwarmIcon from '../assets/sidebarIcons/swarm.png'
import MusicIcon from '../assets/sidebarIcons/music.png'
import FlashIcon from '../assets/sidebarIcons/flash.png'
import ArithmeticsIcon from '../assets/sidebarIcons/arithmetics.png'
import EquilibriumIcon from '../assets/sidebarIcons/equilibrium.png'
import FlaskIcon from '../assets/sidebarIcons/flask.png'
import GazelleIcon from '../assets/sidebarIcons/gazelle.png'
import GorillaIcon from '../assets/sidebarIcons/gorilla.png'
import OrkaIcon from '../assets/sidebarIcons/orka.png'
import VultureIcon from '../assets/sidebarIcons/vulture.png'
import ChartIcon from '../assets/sidebarIcons/chart.png'

import BarnacleIcon from '../assets/sidebarIcons/goose-barnacle.png'
import BiogeographyIcon from '../assets/sidebarIcons/world.png'
import BrownBearIcon from '../assets/sidebarIcons/brown-bear.png'
import CoralReefIcon from '../assets/sidebarIcons/sea.png'
import DifferentialIcon from '../assets/sidebarIcons/arrows.png'
import EarthWormIcon from '../assets/sidebarIcons/planet-earth.png'
import EvolutionProgrammingIcon from '../assets/sidebarIcons/evolution.png'
import EvolutionStrategiesIcon from '../assets/sidebarIcons/evolutionstrategy.png'
import FlowerIcon from '../assets/sidebarIcons/flower.png'
import InvasiveIcon from '../assets/sidebarIcons/invasion.png'
import MemeticIcon from '../assets/sidebarIcons/memetic.png'
import SatinIcon from '../assets/sidebarIcons/satin.png'
import SeagullIcon from '../assets/sidebarIcons/seagull.png'
import SlimeIcon from '../assets/sidebarIcons/slime.png'
import SuccessIcon from '../assets/sidebarIcons/success.png'
import SymbioticIcon from '../assets/sidebarIcons/symbiotic.png'
import TreeIcon from '../assets/sidebarIcons/tree.png'
import TunicateIcon from '../assets/sidebarIcons/tunicate.png'
import VirusIcon from '../assets/sidebarIcons/virus.png'
import WildIcon from '../assets/sidebarIcons/wild.png'

const SidebarComponent = ({ open, toggleSidebar }) => {
    const sidebarAlgorithmItems = [
        {
            primaryText: 'African Vultures Optimization',
            secondaryText:
                'Configure & add african vultures algorithm to execution list.',
            to: '/avo',
            image: (
                <img
                    src={VultureIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Arithmetic Optimization Algorithm',
            secondaryText:
                'Configure & add arithmetic optimization algorithm to execution list.',
            to: '/aoa',
            image: (
                <img
                    src={ArithmeticsIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Artificial Gorilla Troops Optimization',
            secondaryText:
                'Configure & add artificial gorilla troops optimization to execution list.',
            to: '/agto',
            image: (
                <img
                    src={GorillaIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Equilibrium Optimization',
            secondaryText:
                'Configure & add equilibrium optimization to execution list.',
            to: '/eo',
            image: (
                <img
                    src={EquilibriumIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Genetic Algorithm',
            secondaryText:
                'Configure & add genetic algorithm to execution list.',
            to: '/ga',
            image: (
                <img
                    src={ChromosomesIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Grey Wolf Optimization',
            secondaryText:
                'Configure & add grey wolf optimization to execution list.',
            to: '/gwo',
            image: (
                <img src={WolfIcon} style={{ width: '24px', height: '24px' }} />
            ),
        },
        {
            primaryText: 'Harmony Search Algorithm',
            secondaryText:
                'Configure & add harmony search algorithm to execution list.',
            to: '/hs',
            image: (
                <img
                    src={MusicIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Henry Gas Solubility Optimization',
            secondaryText:
                'Configure & add Henry Gas solubility optimization to execution list.',
            to: '/hgso',
            image: (
                <img
                    src={FlaskIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Marine Predator Algorithm',
            secondaryText:
                'Configure & add marine predator algorithm to execution list.',
            to: '/mpa',
            image: (
                <img src={OrkaIcon} style={{ width: '24px', height: '24px' }} />
            ),
        },
        {
            primaryText: 'Mountain Gazelle Optimization',
            secondaryText:
                'Configure & add mountain gazelle optimization to execution list.',
            to: '/mgo',
            image: (
                <img
                    src={GazelleIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Particle Swarm Optimization',
            secondaryText:
                'Configure & add particle swarm optimization to execution list.',
            to: '/pso',
            image: (
                <img
                    src={SwarmIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Simulated Annealing Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/sa',
            image: (
                <img
                    src={AnvilIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },






        {
            primaryText: 'Barnacles Mating Optimization',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/bmo',
            image: (
                <img
                    src={BarnacleIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Biogeography Based Optimization',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/bbo',
            image: (
                <img
                    src={BiogeographyIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Brown Bear Optimization',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/brbo',
            image: (
                <img
                    src={BrownBearIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Coral Reefs Optimization',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/cro',
            image: (
                <img
                    src={CoralReefIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Differential Evolution Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/de',
            image: (
                <img
                    src={DifferentialIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Earthworm Optimisation Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/ewo',
            image: (
                <img
                    src={EarthWormIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Evolutionary Programming Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/ep',
            image: (
                <img
                    src={EvolutionProgrammingIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Evolution Strategies Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/es',
            image: (
                <img
                    src={EvolutionStrategiesIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Flower Pollination Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/fpa',
            image: (
                <img
                    src={FlowerIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Invasive Weed Optimization Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/ıwo',
            image: (
                <img
                    src={InvasiveIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Memetic Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/ma',
            image: (
                <img
                    src={MemeticIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'SatinBowerbird Optimizer',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/sbbo',
            image: (
                <img
                    src={SatinIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Seagull Optimization Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/sos',
            image: (
                <img
                    src={SeagullIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Slime Mould Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/sma',
            image: (
                <img
                    src={SlimeIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Success History Adaptation DE Component Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/shade',
            image: (
                <img
                    src={SuccessIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Symbiotic Organisms Search Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/smos',
            image: (
                <img
                    src={SymbioticIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Tree Physiology Optimization Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/tpo',
            image: (
                <img
                    src={TreeIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Tunicate Swarm Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/tso',
            image: (
                <img
                    src={TunicateIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Virus Colony Search Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/vcs',
            image: (
                <img
                    src={VirusIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText: 'Wildebeest Herd Algorithm',
            secondaryText:
                'Configure & add simulated annealing algorithm to execution list.',
            to: '/who',
            image: (
                <img
                    src={WildIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
    ]

    const sidebarActionItems = [
        {
            primaryText: 'Review & Execute Selected Algorithms',
            secondaryText: 'List, remove, edit & execute selected algorithms',
            to: '/run',
            image: (
                <img
                    src={FlashIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
        {
            primaryText:
                'Display & Inspect Execution Results of Selected Algorithms',
            secondaryText:
                'Display the execution results data in detailed charts',
            to: '/results',
            image: (
                <img
                    src={ChartIcon}
                    style={{ width: '24px', height: '24px' }}
                />
            ),
        },
    ]
    return (
        <SwipeableDrawer
            anchor='left'
            open={open}
            onClose={toggleSidebar}
            onOpen={toggleSidebar}
        >
            <Box sx={{ width: 400 }} role='presentation' mb={5}>
                <Box sx={{ padding: 2, textAlign: 'center' }}>
                    <Typography variant='h5'>Heuristic Algorithms</Typography>
                </Box>
                <Divider />
                <List>
                    {sidebarAlgorithmItems.map((item, index) => {
                        let { primaryText, secondaryText, to, image } = item
                        return (
                            <React.Fragment key={index}>
                                <ListItem
                                    disablePadding
                                    sx={{
                                        justifyContent: 'center',
                                        marginY: '0.75rem',
                                    }}
                                >
                                    <RouterLink
                                        to={to}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            width: '100%',
                                            display: 'block',
                                        }}
                                    >
                                        <ListItemButton>
                                            <ListItemIcon>{image}</ListItemIcon>
                                            <ListItemText
                                                primary={primaryText}
                                                secondary={secondaryText}
                                            />
                                        </ListItemButton>
                                    </RouterLink>
                                </ListItem>
                                {index < sidebarAlgorithmItems.length - 1 && (
                                    <Divider />
                                )}
                            </React.Fragment>
                        )
                    })}
                </List>
            </Box>
            <Divider />
            <Box sx={{ width: 400 }} role='presentation'>
                <Box sx={{ padding: 2, textAlign: 'center' }}>
                    <Typography variant='h5'>Operations</Typography>
                </Box>
                <Divider />
                <List>
                    {sidebarActionItems.map((item, index) => {
                        let { primaryText, secondaryText, to, image } = item
                        return (
                            <React.Fragment key={index}>
                                <ListItem
                                    disablePadding
                                    sx={{
                                        justifyContent: 'center',
                                        marginTop: '0.75rem',
                                        marginBottom: '2rem',
                                    }}
                                >
                                    <RouterLink
                                        to={to}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            width: '100%',
                                            display: 'block',
                                        }}
                                    >
                                        <ListItemButton>
                                            <ListItemIcon>{image}</ListItemIcon>
                                            <ListItemText
                                                primary={primaryText}
                                                secondary={secondaryText}
                                            />
                                        </ListItemButton>
                                    </RouterLink>
                                </ListItem>
                                {index < sidebarActionItems.length - 1 && (
                                    <Divider />
                                )}
                            </React.Fragment>
                        )
                    })}
                </List>
            </Box>
        </SwipeableDrawer>
    )
}

export default SidebarComponent
