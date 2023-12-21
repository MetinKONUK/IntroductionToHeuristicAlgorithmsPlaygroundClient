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

import React from 'react'

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
