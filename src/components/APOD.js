import React from "react";
import DatePicker from "react-date-picker";

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
          <img src={url} alt={title} />
        ) : (
          youtubeEmbed(url, title)
        )}

        <h2>{title}</h2>
        <div className="desc">
          <p className="desc">{explanation}</p>
        </div>
        <div className="footer">
          <DatePicker
            format="MM-dd-y"
            value={new Date(props.date)}
            clearIcon={null}
            onChange={e => props.callback(e)}
            maxDate={new Date()}
            minDate={new Date("June 16, 1995")}
          />
          {copyright && media_type === "image" ? (
            <p className="copyright">Image Credit & Copyright: {copyright}</p>
          ) : null}
          {copyright && media_type === "video" ? (
            <p className="copyright">Video Credit & License: {copyright}</p>
          ) : null}
        </div>
      </>
    );
  };

  return (
    <div className="container">
      {props.data ? renderContent(props.data) : <p>Loading...</p>}
    </div>
  );
}

export default APOD;
