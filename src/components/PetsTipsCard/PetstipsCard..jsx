import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import './PetstipsCard.sass';

export function PetsTipsCard() {
  return (
    <div className="PetsTipsCard__container">
      <Card
        sx={{ maxWidth: '100%', backgroundColor: '#dfe7f2' }}
        className="PetsTipsCard__wrapper"
      >
        <CardContent className="PetsTipsCard__content">
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./images/animals/1.jpg"
          />
          <div className="PetsTipsCard__article">
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary" className='PetsTipsCard__text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
              quisquam. Asperiores rem voluptas laborum facilis, optio
              necessitatibus! Odio delectus perspiciatis quod minus et nulla
              provident hic alias, recusandae soluta beatae? Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Error, quisquam. Asperiores
              rem voluptas laborum facilis, optio necessitatibus! Odio delectus
              perspiciatis quod minus et nulla provident hic alias, recusandae
              soluta beatae? Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Error, quisquam. Asperiores rem voluptas laborum facilis,
              optio necessitatibus! Odio delectus perspiciatis quod minus et
              nulla provident hic alias, recusandae soluta beatae? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Error, quisquam.
              Asperiores rem voluptas laborum facilis, optio necessitatibus!
              Odio delectus perspiciatis quod minus et nulla provident hic
              alias, recusandae soluta beatae?
            </Typography>
              <Button size="small" sx={{ position: 'absolute', bottom: 0, right: 50}}className='PetsTipsCard__btn'>Подробнее...</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
