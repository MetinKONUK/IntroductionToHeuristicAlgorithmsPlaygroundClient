import { Grid } from '@mui/material';
import AlgorithmSelectionComponent from './AlgorithmSelectionComponent';
import ParametersSelectionComponent from './ParametersSelectionComponent';
import ConfigurationReviewAndRunComponent from './ConfigurationReviewAndRunComponent';
const ConfigurationsComponent = ({
    selectedAlgorithms,
    setSelectedAlgorithms,
}) => {
    return (
        <Grid
            container
            sx={{
                height: '40%',
            }}
        >
            <AlgorithmSelectionComponent
                selectedAlgorithms={selectedAlgorithms}
                setSelectedAlgorithms={setSelectedAlgorithms}
            />
            <ParametersSelectionComponent />
            <ConfigurationReviewAndRunComponent />
        </Grid>
    );
};

export default ConfigurationsComponent;
