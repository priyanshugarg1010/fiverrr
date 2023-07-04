import React from "react";
import "./Add.scss";
const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add new gig</h1>
        <div className="section">
          <div className="left">
            <label htmlFor="">title</label>
            <input type="text" placeholder="eg. i will do something " />

            <label htmlFor="">category</label>
            <select name="cats" id="cats">
              <option value="design">design</option>
              <option value="web development">web development</option>
              <option value="animation">animation</option>
              <option value="music">music</option>
            </select>
            <label htmlFor="">cover image</label>
            <input type="file" />
            <label htmlFor="">upload image</label>
            <input type="file" multiple />
            <label htmlFor="">description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="give a description of you service"
            ></textarea>
            <button>create</button>
          </div>
          <div className="right">
            <label htmlFor="">service title</label>
            <input type="text" placeholder="eg. one page web design" />
            <label htmlFor="">short description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="short description of your service"
            ></textarea>
            <label htmlFor="">delivery time(eg. 3 days)</label>
            <input type="number" min={1} />
            <label htmlFor="">revision numbers</label>
            <input type="number" min={1} />
            <label htmlFor="">add features</label>
            <input type="text" placeholder="page design" />
            <input type="text" placeholder="upload" />
            <input type="text" placeholder="setting a domain" />
            <input type="text" placeholder="hosting" />
            <label htmlFor="">price</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
