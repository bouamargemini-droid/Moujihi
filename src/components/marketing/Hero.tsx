import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
              textAlign: 'center',
            }}
          >
            Ton orientation,&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              guidee par l&apos;IA
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Parle avec un conseiller IA qui analyse ton profil, recommande les
            meilleures filieres et postule a ta place. En 30 minutes.
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ pt: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/inscription"
              sx={{ px: 4, py: 1.5, fontWeight: 700 }}
            >
              Commencer gratuitement
            </Button>
          </Stack>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            alignSelf: 'center',
            width: '100%',
            height: 400,
            mt: 8,
            borderRadius: `${theme.shape.borderRadius}px`,
            outline: '6px solid',
            outlineColor: 'hsla(220, 25%, 80%, 0.2)',
            border: '1px solid',
            borderColor: (theme.vars || theme).palette.grey[200],
            boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.up('sm')]: {
              mt: 10,
              height: 500,
            },
          })}
        >
          <Typography
            variant="h2"
            sx={{ color: '#fff', fontWeight: 900, opacity: 0.3, fontSize: '4rem' }}
          >
            Moujihi
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
