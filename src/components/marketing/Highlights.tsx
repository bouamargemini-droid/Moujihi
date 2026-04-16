import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const items = [
  {
    icon: <RecordVoiceOverRoundedIcon />,
    title: 'IA conversationnelle',
    description:
      "Un vrai echange naturel avec un avatar intelligent. Pas de formulaire, pas de robot — une conversation qui te comprend.",
  },
  {
    icon: <TranslateRoundedIcon />,
    title: '5 langues',
    description:
      "Francais, arabe, darija, anglais, espagnol et tamazight. Parle dans la langue avec laquelle tu es a l'aise.",
  },
  {
    icon: <SavingsRoundedIcon />,
    title: 'Bourse Moujihi',
    description:
      "Economise jusqu'a 5 000 MAD sur tes frais de scolarite grace aux avantages exclusifs negocies avec les ecoles partenaires.",
  },
  {
    icon: <TrendingUpRoundedIcon />,
    title: 'Moujihi Predict',
    description:
      "Decouvre tes chances d'etre accepte dans chaque ecole, en temps reel. Le score evolue selon le nombre de candidats.",
  },
  {
    icon: <GroupsRoundedIcon />,
    title: 'Communaute',
    description:
      "Rejoins des cercles d'etudiants par filiere et par ville. Echange, compare et motive-toi avec les autres bacheliers.",
  },
  {
    icon: <SendRoundedIcon />,
    title: 'Candidature automatique',
    description:
      "Moujihi detecte les inscriptions, prepare ton dossier et postule a ta place. Zero stress, zero effort.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Pourquoi Moujihi ?
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Decouvrez ce qui fait de Moujihi la plateforme d&apos;orientation la plus
            complete pour les bacheliers marocains : IA conversationnelle, support
            multilingue, bourses exclusives et candidature automatisee.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
