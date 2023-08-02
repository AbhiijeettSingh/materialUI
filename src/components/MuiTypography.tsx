import { Typography } from '@mui/material';

export default function MuiTypography(){
    return(
        <>
            <Typography variant='h1'>Bro is h1</Typography>
            <Typography variant='h2'>Bro is h2</Typography>
            <Typography variant='h3'>Bro is h3</Typography>
            <Typography variant='h4'>Bro is h4</Typography>
            <Typography variant='h5'>Bro is h5</Typography>
            <Typography variant='h6'>Bro is h6</Typography>
            <Typography variant='subtitle1'>Bro is subtitle1</Typography>
            <Typography variant='subtitle2'>Bro is subtitle2</Typography>
            <Typography variant='body1'>Bro is body1</Typography>
            <Typography variant='body2'>Bro is body2</Typography>
            <Typography variant='body2' gutterBottom component={'h1'}>Bro is body2 but component h1</Typography>
            <Typography variant='body2' component={'h2'}>Bro is body2 but component h2</Typography>
            <Typography variant='body2' component={'h3'}>Bro is body2 but component h3</Typography>
            <Typography variant='body2' component={'h4'}>Bro is body3 but component h4</Typography>

        </>
    )
}