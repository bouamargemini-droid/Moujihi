import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      &copy; 2026 Moujihi. Tous droits reserves.
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
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
                <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: '0.875rem' }}>
                  M
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 800, fontSize: '1.1rem' }}>
                Moujihi
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Orientation post-bac par l&apos;IA pour les bacheliers marocains.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Produit
          </Typography>
          <Link variant="body2" href="#features" sx={{ color: 'text.secondary' }}>
            Orientation
          </Link>
          <Link variant="body2" href="#features" sx={{ color: 'text.secondary' }}>
            Candidature
          </Link>
          <Link variant="body2" href="#pricing" sx={{ color: 'text.secondary' }}>
            Bourse
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Entreprise
          </Typography>
          <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>
            A propos
          </Link>
          <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>
            Contact
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Legal
          </Typography>
          <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>
            CGU
          </Link>
          <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>
            Confidentialite
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>
            Confidentialite
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
            &nbsp;&bull;&nbsp;
          </Typography>
          <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>
            Conditions d&apos;utilisation
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        />
      </Box>
    </Container>
  );
}
