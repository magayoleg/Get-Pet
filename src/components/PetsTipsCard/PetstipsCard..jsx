import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as endPoints from '../../config/endPoints';

import './PetstipsCard.sass';

export function PetsTipsCard({ id, image, title, tipText, webSite }) {
  return (
    <div className="PetsTipsCard__container">
      <Card
        sx={{ maxWidth: '100%', backgroundColor: '#dfe7f2' }}
        className="PetsTipsCard__wrapper"
      >
        <CardContent className="PetsTipsCard__content">
          <CardMedia
            component="img"
            alt={image}
            height="140"
            image={endPoints.getImagePet(image)}
          />
          <div className="PetsTipsCard__article">
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="PetsTipsCard__text"
            >
              {tipText}
            </Typography>
            <Button
              size="small"
              sx={{ position: 'absolute', bottom: 0, right: 50 }}
              className="PetsTipsCard__btn"
            >
              <a
                id={id}
                href={webSite}
                target="_blank"
              >
                ПОДРОБНЕЕ
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
