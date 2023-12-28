import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ItemCardCharacter(data: {character:CharacterType}) {

  return (
    <Card className='border-2 border-white-500 ' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.character.image}
          alt="Humans image by AARON KUEHN"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.character.name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Sexo: <small>{data.character.gender}</small>
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Estado: <small>{data.character.status}</small>
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Origen: {data.character['origin'].name}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            Ultima ubicación: {data.character['location'].name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}