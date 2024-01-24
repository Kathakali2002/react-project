import { Link } from "react-router-dom";

function Card() {
  const teamInfo = [
    {
      name: "title1",
      photo:
        "https://art-u2.infcdn.net/articles_uploads/2/2094/Design%20Personal%20Logo%20Online.png",
      dept: "CSBS",
      rollNo: "142311-21-00",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
    {
      name: "title2",
      photo:
        "https://art-u2.infcdn.net/articles_uploads/2/2094/Design%20Personal%20Logo%20Online.png",
      dept: "CSBS",
      rollNo: "142311-21-00",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
    {
      name: "title3",
      photo:
        "https://art-u2.infcdn.net/articles_uploads/2/2094/Design%20Personal%20Logo%20Online.png",
      dept: "CSBS",
      rollNo: "142311-21-00",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
    {
      name: "title4",
      photo:
        "https://art-u2.infcdn.net/articles_uploads/2/2094/Design%20Personal%20Logo%20Online.png",
      dept: "CSBS",
      rollNo: "142311-21-00",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
  ];

  return teamInfo.map((student, index) => (
    <div className="card mt-4" key={index} style={{ width: "16rem" }}>
      <img src={student.photo} className="card-img-top" width="px" alt="photo" />
      <div className="card-body">
        <h5 className="card-title">Name: {student.name}</h5>
        <p className="card-text">
          <span className="d-block">Department: {student.dept}</span>

          <span className="d-block">Roll No: {student.rollNo}</span>

          <p>
            <span className="d-block">
              <span>Github: </span>
              <Link to={student.githubLink}>Github</Link>
            </span>
            <span>LinkedIn: </span>
            <Link to={student.linkedInLink}>LinkedIn</Link>
          </p>
        </p>
      </div>
    </div>
  ));
}

export default Card;
