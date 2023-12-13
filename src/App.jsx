import { useState } from 'react';
import { Grid } from '@mui/material';
import ConfigurationsComponent from './components/ConfigurationsComponent';
function App() {
    /*
    {
        "name": "",
    }
    */
    const [selectedAlgorithms, setSelectedAlgorithms] = useState([]);

    return (
        <>
            {/* Main Wrapper Container*/}
            <Grid
                container
                sx={{
                    width: '100vw',
                    height: '100vh',
                }}
            >
                {/* Top Side Heuristic Algorithm Selection Component */}
                <ConfigurationsComponent
                    selectedAlgorithms={selectedAlgorithms}
                    setSelectedAlgorithms={setSelectedAlgorithms}
                />
                {/* Bottom Side Heuristic Algorithm Execution Results Component */}
                <Grid
                    container
                    direction={'row'}
                    sx={{
                        height: '60%',
                        backgroundColor: 'blue',
                    }}
                ></Grid>
            </Grid>
        </>
    );
}

export default App;
