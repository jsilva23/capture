import { useEffect, useState } from "react";
import Styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </HeadLine>

          <Awards>
            {movie.awards.map((award) => (
              <Award title={award.title} description={award.description} key={award.title} />
            ))}
          </Awards>

          <ImageDisplay>
              <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = Styled.div`
    color: white;
`;

const HeadLine = Styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = Styled.div`
    min-height: 80vh;
    margin: 5rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const AwardStyle = Styled.div`
    padding: 5rem;

    h3 {
        font-size: 2rem;
    }

    .line {
        width: 100%;
        height: 0.5rem;
        background: #23d997;
        margin: 1rem 0rem;
    }

    p {
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = Styled.div`
    min-height: 50vh;
    
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`

//Award component
const Award = ({title, description}) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
