import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import proj1 from '../images/emoji_bot.PNG';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
});

const imageStyle = {
    imgStyle:{
        height: '100%',
    },

    descriptionBox:{
      // height: '100%',
      height: 125,
    },

    cardPadding: {
      padding: 10,
    }
}

const Project = ({projectName, description, imageSrc, githubURL}) => {
  const classes = useStyles();

  // Go to github page when image is clicked
  const linkToProfile = () => {
    // window.location.assign('https://github.com/mdu2017/')
  }

  return (
      <div style={imageStyle.cardPadding}>
      <Card className={classes.root} variant="outlined">
        <CardActionArea>

        {/* Image URL */}
        <CardMedia className={classes.media} title={projectName}>
          <img src={imageSrc} component="img" style={imageStyle.imgStyle} onClick={() => linkToProfile()}/>
        </CardMedia>

        {/* Project name and description */}
        <CardContent style={imageStyle.descriptionBox}>
          <Typography gutterBottom variant="h5" component="h2">
            {projectName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* Link to Github */}
      <CardActions>
        <Button size="small" variant="outlined" color="primary" href={githubURL}>
          View on GitHub
        </Button>
      </CardActions>

    </Card>
    </div>
  );
}

export default Project