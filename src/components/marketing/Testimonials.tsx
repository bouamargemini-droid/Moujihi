import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const userTestimonials = [
  {
    avatar: <Avatar sx={{ bgcolor: '#6366f1' }}>YM</Avatar>,
    name: 'Youssef M.',
    occupation: 'Bachelier, Casablanca',
    testimonial:
      "Moujihi m'a aide a trouver ma voie en ingenierie. L'avatar IA etait incroyable, j'avais l'impression de parler a un vrai conseiller !",
  },
  {
    avatar: <Avatar sx={{ bgcolor: '#a855f7' }}>SR</Avatar>,
    name: 'Salma R.',
    occupation: 'Bacheliere, Rabat',
    testimonial:
      "Grace a la Bourse Moujihi, j'ai economise 3 000 MAD sur mes frais de scolarite. Le pack Premium s'est rembourse tout seul.",
  },
  {
    avatar: <Avatar sx={{ bgcolor: '#ec4899' }}>KB</Avatar>,
    name: 'Karim B.',
    occupation: 'Bachelier, Fes',
    testimonial:
      "Le bilan RIASEC m'a ouvert les yeux sur des filieres que je ne connaissais meme pas. Je suis maintenant en prepa et je kiffe.",
  },
  {
    avatar: <Avatar sx={{ bgcolor: '#f59e0b' }}>AT</Avatar>,
    name: 'Amina T.',
    occupation: 'Bacheliere, Marrakech',
    testimonial:
      "J'ai pu postuler a 8 ecoles en un seul clic. Moujihi a tout fait pour moi, je n'ai eu qu'a choisir ou aller.",
  },
  {
    avatar: <Avatar sx={{ bgcolor: '#10b981' }}>OL</Avatar>,
    name: 'Omar L.',
    occupation: 'Bachelier, Tanger',
    testimonial:
      "La session en darija etait top ! Je me suis senti a l'aise directement. Moujihi comprend vraiment les etudiants marocains.",
  },
  {
    avatar: <Avatar sx={{ bgcolor: '#3b82f6' }}>FZ</Avatar>,
    name: 'Fatima Z.',
    occupation: 'Parent, Agadir',
    testimonial:
      "En tant que parent, le rapport PDF m'a rassuree sur le choix de ma fille. Je pouvais suivre tout le processus en temps reel.",
  },
];

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Temoignages
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Decouvrez ce que les etudiants et parents pensent de Moujihi. Des milliers
          de bacheliers ont deja trouve leur voie grace a notre plateforme.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
