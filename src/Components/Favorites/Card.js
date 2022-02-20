import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

function favcard ({country})
{
    return (
    <Grid>
        <Card>
            <CardContent>
            <h4>country.name.common</h4>
            </CardContent>
        </Card>
    </Grid>
    )
    }

    export default favcard