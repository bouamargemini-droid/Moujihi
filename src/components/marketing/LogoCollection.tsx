import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

const schools = ['ENSA', 'ENCG', 'UIR', 'UM6P', 'EMSI'];

export default function LogoCollection() {
  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        Ecoles partenaires
      </Typography>
      <Grid container sx={{ justifyContent: 'center', mt: 1.5, gap: 2 }}>
        {schools.map((school) => (
          <Grid key={school}>
            <Chip
              icon={<SchoolRoundedIcon />}
              label={school}
              variant="outlined"
              sx={{ fontSize: '0.9rem', px: 1 }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
