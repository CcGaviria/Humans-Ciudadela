import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ItemCardEspecie(data: ItemCardEspecieType) {

    return (
      <Card className='border-2 border-white-500 ' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/Humans.jpg"
          alt="Humans image by AARON KUEHN"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href={data.linkTo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="small" color="primary">
            VER Registros
          </Button>
        </a>

      </CardActions>
    </Card>
    )
}