import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import "./petstipscard.css";

export function PetsTipsCard() {
  return (
    <div className="PetsTipsCard__container">
      <Card sx={{ maxWidth: 345, backgroundColor: "#dfe7f2" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="./images/animals/1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small">Перейти на сайт</Button>
        </CardActions>
      </Card>
    </div>
  );
}
