import StarIcon from "@mui/icons-material/Star";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

const Suite = ({ photo, superHost, type, rating, title }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className="c-card__stay" sx={{ maxWidth: 345 }}>
        <CardMedia
          className="c-card__img"
          component="img"
          height="140"
          image={photo}
          alt="green iguana"
        />
        <CardContent>
          <div className="c-card__desc">
            <span>
              {superHost ? (
                <Chip
                  className="super-host"
                  label="SUPER HOST"
                  variant="outlined"
                />
              ) : (
                ""
              )}
              <span className="type"> {type} </span>
            </span>
            <span className="rating">
              <StarIcon
                sx={{
                  color: "#EB5757",
                  fontSize: "16px",
                  paddingRight: "5px",
                }}
              />
              {rating}
            </span>
          </div>

          <p className="title"> {title}</p>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Suite;
