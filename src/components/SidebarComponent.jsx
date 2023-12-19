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
import React from 'react'

const SidebarComponent = ({ open, toggleSidebar }) => {
    const sidebarAlgorithmItems = [
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
            primaryText: 'Grey Wolf Optimization',
            secondaryText:
                'Configure & add grey wolf optimization to execution list.',
            to: '/gwo',
            image: (
                <img src={WolfIcon} style={{ width: '24px', height: '24px' }} />
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
