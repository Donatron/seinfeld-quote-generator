import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle
} from 'reactstrap';
import striptags from "striptags";

import { Episode } from '../../models';

interface Props {
  episode: Episode
}

const Synopsis: React.FC<Props> = ({ episode }) => {
  return (
    <div className="Synopsis synopsis-section">
      <Card>
        <img
          src={episode.image.original}
          width="100%"
          className="quote-image"
        />
        <CardBody>
          <CardTitle tag="h5">
            {episode.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            <em>Season {episode.season}, Episode {episode.number}</em>
          </CardSubtitle>
          <CardText>
            {striptags(episode.summary)}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Synopsis;
