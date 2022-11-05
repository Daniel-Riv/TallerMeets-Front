import './title.css';

export const Title = ({ title }) => {
  return (
            <section className="container">
            <h2 className="container-title">{title}</h2>
            <hr />
            </section>
  );
};
