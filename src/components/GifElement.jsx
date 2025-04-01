export const GifElement = (props) => {
  return (
    <div className="GifElement">
      <img src={props.url} alt={props.title} />
      <p>{props.title}</p>
    </div>
  );
};