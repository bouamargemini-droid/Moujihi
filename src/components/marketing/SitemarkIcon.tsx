import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function MoujiihiIcon() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mr: 2,
      }}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#fff',
            fontWeight: 900,
            fontSize: '0.875rem',
            lineHeight: 1,
          }}
        >
          M
        </Typography>
      </Box>
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: '1.1rem',
          letterSpacing: '-0.02em',
          color: 'text.primary',
        }}
      >
        Moujihi
      </Typography>
    </Box>
  );
}
