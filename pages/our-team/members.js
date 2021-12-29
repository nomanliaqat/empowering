function Profile() {
  const members = [
    {
      name: "Jean Paul Paulynice, M.B.A",
      image:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/Team-CEO.png",
      designation: "Founder and CEO",
      introduction:
        "Jean Paul is a Business Strategist, Forbes-featured, Forbes Business Council member, 2020 IPPY Gold Book Award Winner, bestselling author, and a loving husband and father. He has a genuine passion for helping people build the lives of their dreams through personal growth and professional development. In his first book, It’s Time to Start Living with Passion! Your Journey to Self-Discovery, he shares the story of how he overcame his struggles and challenges to inspire readers to start living rewarding lives full of passion and purpose.",
    },
    {
      name: "Jennifer Sirrine",
      image:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/Team-2.png",
      designation: "General Counsel",
      introduction:
        "Attorney Jennifer Sirrine, owner of 21st Century Law, is proud to partner with Empowering Confident Youth to provide counsel relating to all business matters. After founding 21st Century Law, she has worked with many small businesses, both in the nonprofit and private sector, in addition to acquiring a great deal of experience in civil litigation, and so is well equipped to empower ECY to build long-lasting, secure relationships with its educational partners.",
    },
    {
      name: "Amy Jensen",
      image:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/Team-3.png",
      designation: "Director of Instructional Design",
      introduction:
        "Amy Jensen has spent over fifteen years as an educator, first as a classroom teacher and then in educational leadership. Amy has designed and authored several cross-disciplinary curricula and coached various nonprofits and schools in engagement and SEL. Her work includes contributing to a professional development book for educators, authoring a STEAM middle school program, writing several SEL-infused core courses for high schoolers and recently contributing to ECY’s curriculum.",
    },
    {
      name: "Jonna Rege",
      image:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/Team-4.png",
      designation: "SEL Consultant",
      introduction:
        "Jonna taught pre-k-6 and special education for 14 years. For the past two years, she has helped companies around the world develop strong educational programs, products, and curriculum. She has a BA in psychology, during which she studied life development with an emphasis in Child Development and Abnormal Psychology. She has also completed advanced studies in Early Childhood Development, Elementary Education, Mild to Moderate Disabilities, and Autism.Coming Soon Director of Business Development",
    },
    {
      name: "Coming Soon",
      image:
        "https://empoweringconfidentyouth.com/wp-content/uploads/2021/04/Team-5.png",
      designation: "Director of Business Development",
      introduction: "",
    },
  ];
  return (
    <div className="row profile-main">
      {members.map((_m, i) => (
        <div
          className="col-sm-12 col-md-4 col-lg-4 profile-column mt-3"
          key={i}
        >
          <div className="text-center">
            <img
              src={_m.image}
              alt="profile-image"
              height={280}
              width={"100%"}
            />
          </div>
          <div className="text-center profile-content">
            <h3>{_m.name}</h3>
            <p style={{ fontSize: "1.4rem" }}>{_m.designation}</p>
            <p>{_m.introduction}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;
