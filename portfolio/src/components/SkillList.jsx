function SkillList() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return(
    <section>
      <h2>My Skills</h2>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
          ))}
      </ul>
    </section>
  );
  
}

export default SkillList;