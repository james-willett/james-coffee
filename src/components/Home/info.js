import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ex
              hic necessitatibus harum maxime aut nobis doloremque possimus
              asperiores a laborum atque aspernatur sunt dolor, eveniet suscipit
              voluptatem? Sapiente, expedita.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
