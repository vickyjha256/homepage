import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Ready to level up your team’s productivity?</h2>
          <Link to="/" className="btn btn-primary btn-lg">
            Start free trial
          </Link>
        </div>
      </section>
    </>
  );
};

export default Footer;
