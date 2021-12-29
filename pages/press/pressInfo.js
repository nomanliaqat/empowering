import React from "react";
import Posts from "../components/posts";

function PressInfo(props) {
  const authors = [
    {
      name: "Jean Paul Paulynice",
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
      name: " Jean Paul Paulynice",
      post_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/01/14-Effective-Ways-To-Tie-A-Social-Mission-Into-Your-Business.jpg",
      profile_img:
        "https://secure.gravatar.com/avatar/8c0c145557c7f395543eeca41542d798?s=44&d=mm&r=g",
      brand_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2020/07/Forbes-Logo.png",
      title: "14 Effective Ways To Tie A Social Mission Into Your Business",
      desc: "Business has always been about providing customers with quality goods and services. In the past, customers may have been satisfied purchasing from companies that met their needs",
    },
    {
      name: "Jean Paul Paulynice",
      post_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/01/15-Key-Considerations-Before-Expanding-Your-Product-Offering.jpg",
      profile_img:
        "https://secure.gravatar.com/avatar/8c0c145557c7f395543eeca41542d798?s=44&d=mm&r=g",
      brand_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2020/07/Forbes-Logo.png",
      title: "15 Key Considerations Before Expanding Your Product Offering",
      desc: "Entrepreneurs are in a precarious position when it comes to expanding their product line. On the one hand, an expanded product offering means a better bottom line and",
    },
    {
      name: "Jean Paul Paulynice",
      post_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/960x0.jpg",
      profile_img:
        "https://secure.gravatar.com/avatar/8c0c145557c7f395543eeca41542d798?s=44&d=mm&r=g",
      brand_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2020/07/huffpost-logo.png",
      title: "Setting Up A Virtual Event? 15 Common Mistakes To Avoid",
      desc: "Organizing a virtual event may seem easier than a physical event as there are several items you don’t have to worry about, such as location, authorizations, catering, security",
    },
    {
      name: "Jean Paul Paulynice",
      post_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/960x0.jpg",
      profile_img:
        "https://secure.gravatar.com/avatar/8c0c145557c7f395543eeca41542d798?s=44&d=mm&r=g",
      brand_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2020/07/huffpost-logo.png",
      title: "14 Professional Tips For Networking During A Pandemic",
      desc: "Covid-19 has impacted society to a massive degree, changing how we behave and even interact with each other. Gone are the days where you could meet others at",
    },
    {
      name: "Jean Paul Paulynice",
      post_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/960x0.jpg",
      profile_img:
        "https://secure.gravatar.com/avatar/8c0c145557c7f395543eeca41542d798?s=44&d=mm&r=g",
      brand_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2020/07/huffpost-logo.png",
      title:
        "Start Locally While Growing Globally: The Smartest Way To Test And Build Your New Business Idea",
      desc: "Having a sense of passion and enthusiasm is essential to fueling and sustaining your new business venture, especially in uncertain times like these. However, more often than not,",
    },
    {
      name: "Jean Paul Paulynice",
      post_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/960x0.jpg",
      profile_img:
        "https://secure.gravatar.com/avatar/8c0c145557c7f395543eeca41542d798?s=44&d=mm&r=g",
      brand_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2020/07/huffpost-logo.png",
      title: "What tomorrow’s business leaders need most",
      desc: "When we think about what future business leaders will need to thrive in a world of constant change, we must consider empowering them with the personal skills to+",
    },

    {
      name: "Jean Paul Paulynice",
      post_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/960x0.jpg",
      profile_img:
        "https://secure.gravatar.com/avatar/8c0c145557c7f395543eeca41542d798?s=44&d=mm&r=g",
      brand_img:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2020/07/huffpost-logo.png",
      title:
        "Start Locally While Growing Globally: The Smartest Way To Test And Build Your New Business Idea",
      desc: "Having a sense of passion and enthusiasm is essential to fueling and sustaining your new business venture, especially in uncertain times like these. However, more often than not,",
    },
  ];
  return (
    <div className="mt-120">
      <h1 className="press_title">Our Press</h1>
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

export default PressInfo;
