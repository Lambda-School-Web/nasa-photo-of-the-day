import React from "react";
import DatePicker from "react-date-picker";
import {
  TitleH2,
  NasaImg,
  DescDiv,
  FooterDiv,
  ContainerDiv,
  NasaP,
  DescP
} from "../styles/components";

function APOD(props) {
  const youtubeEmbed = (url, title) => {
    return (
      <iframe
        title={title}
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };
  const renderContent = data => {
    const { copyright, explanation, media_type, title, url } = data;
    return (
      <>
        {media_type === "image" ? (
          <NasaImg src={url} alt={title} />
        ) : (
          youtubeEmbed(url, title)
        )}

        <TitleH2>{title}</TitleH2>
        <DescDiv>
          <DescP>{explanation}</DescP>
        </DescDiv>
        <FooterDiv>
          <DatePicker
            format="MM-dd-y"
            value={new Date(props.date)}
            clearIcon={null}
            onChange={e => props.callback(e)}
            maxDate={new Date()}
            minDate={new Date("June 16, 1995")}
          />
          {copyright && media_type === "image" ? (
            <NasaP className="copyright">
              Image Credit & Copyright: {copyright}
            </NasaP>
          ) : null}
          {copyright && media_type === "video" ? (
            <NasaP className="copyright">
              Video Credit & License: {copyright}
            </NasaP>
          ) : null}
        </FooterDiv>
      </>
    );
  };

  return <ContainerDiv>{renderContent(props.data)}</ContainerDiv>;
}

export default APOD;
