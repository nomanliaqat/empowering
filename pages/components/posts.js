import React from "react";

function Posts(props) {
  const { post_img, brand_img, profile_img, name, title, desc } = props;
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
        <a href="javascript:void(0)">
          <img src={post_img} alt="main-pic" className="post_main_img" />
        </a>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 brand-post mb-5">
        <div className="text-end">
          <img src={brand_img} width={132} height={45} />
        </div>
        <div className="brand-info">
          <div className="w-100 d-inline-block">
            <img
              src={profile_img}
              width={48}
              height={48}
              className="author-img"
            />
            <p className="mt-1">{name}</p>
            <p style={{ marginTop: -13 }}>&lt; 5 min</p>
          </div>
          <div>
            <h2 className="author-title-wrapper">{title}</h2>
            <p className="author-content-wrapper">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
