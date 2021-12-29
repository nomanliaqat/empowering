import React from "react";
import Posts from "../components/posts";

function BlogInfo(props) {
  const authors = [
    {
      name: "Jean Paul Paulynice",
      link: "",
      post_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/960x0.jpg",
      profile_img:
        "https://secure.gravatar.com/avatar/8c0c145557c7f395543eeca41542d798?s=44&d=mm&r=g",
      brand_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2020/07/Forbes-Logo.png",
      title: "Three Key Principles For Becoming A Better Leader",
      desc: "I grew up in a world that looks much different than where I am right now. Here I have clean water at the turn of a knob, groceries",
    },
    {
      name: "Jean Paul Paulynice",
      link: "",
      post_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/01/14-Effective-Ways-To-Tie-A-Social-Mission-Into-Your-Business.jpg",
      profile_img:
        "https://secure.gravatar.com/avatar/8c0c145557c7f395543eeca41542d798?s=44&d=mm&r=g",
      brand_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2020/07/Forbes-Logo.png",
      title: "Three Key Principles For Becoming A Better Leader",
      desc: "I grew up in a world that looks much different than where I am right now. Here I have clean water at the turn of a knob, groceries",
    },
    {
      name: "Jean Paul Paulynice",
      link: "",
      post_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/01/15-Key-Considerations-Before-Expanding-Your-Product-Offering.jpg",
      profile_img:
        "https://secure.gravatar.com/avatar/8c0c145557c7f395543eeca41542d798?s=44&d=mm&r=g",
      brand_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2020/07/Forbes-Logo.png",
      title: "Three Key Principles For Becoming A Better Leader",
      desc: "I grew up in a world that looks much different than where I am right now. Here I have clean water at the turn of a knob, groceries",
    },
    {
      name: "Jean Paul Paulynice",
      link: "",
      post_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/960x0.jpg",
      profile_img:
        "https://secure.gravatar.com/avatar/8c0c145557c7f395543eeca41542d798?s=44&d=mm&r=g",
      brand_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2020/07/huffpost-logo.png",
      title: "Three Key Principles For Becoming A Better Leader",
      desc: "I grew up in a world that looks much different than where I am right now. Here I have clean water at the turn of a knob, groceries",
    },
  ];
  return (
    <div className="mt-120">
      <h1 className="press_title">Our Blogs</h1>
      <div className="row brand-content">
        {authors.map((_a, i) => (
          <Posts
            name={_a.name}
            link={_a.link}
            post_img={_a.post_img}
            profile_img={_a.profile_img}
            brand_img={_a.brand_img}
            title={_a.title}
            desc={_a.desc}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogInfo;
