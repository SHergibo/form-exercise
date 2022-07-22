import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export interface SmallInfoCard {
  image: string;
  alt: string;
  title: string;
}

export function SmallInfoCard({ image, alt, title }: SmallInfoCard) {
  return (
    <Card>
      <CardMedia component="img" image={image} alt={alt} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card>
  );
}

export default SmallInfoCard;
