const courses = [
  {
    title: "Python негіздері",
    direction: "programming",
    major: "it",
    level: "beginner",
    goal: "skill",
    rating: 5,
    platform: "Coursera / Stepik"
  },
  {
    title: "HTML, CSS және JavaScript",
    direction: "web",
    major: "it",
    level: "beginner",
    goal: "career",
    rating: 5,
    platform: "Udemy / MDN"
  },
  {
    title: "Деректерді талдау негіздері",
    direction: "data",
    major: "it",
    level: "middle",
    goal: "science",
    rating: 4,
    platform: "Coursera"
  },
  {
    title: "Жасанды интеллектке кіріспе",
    direction: "ai",
    major: "it",
    level: "middle",
    goal: "science",
    rating: 5,
    platform: "edX / Coursera"
  },
  {
    title: "Академиялық ағылшын тілі",
    direction: "english",
    major: "language",
    level: "beginner",
    goal: "exam",
    rating: 4,
    platform: "Coursera"
  },
  {
    title: "Цифрлық педагогика негіздері",
    direction: "teaching",
    major: "pedagogy",
    level: "middle",
    goal: "skill",
    rating: 4,
    platform: "Moodle / OpenEdu"
  },
  {
    title: "Бизнес және кәсіпкерлік негіздері",
    direction: "business",
    major: "economy",
    level: "beginner",
    goal: "career",
    rating: 4,
    platform: "Udemy"
  },
  {
    title: "Веб-қосымша интерфейсін жобалау",
    direction: "web",
    major: "it",
    level: "middle",
    goal: "skill",
    rating: 5,
    platform: "Udemy / YouTube"
  }
];

function calculateScore(course, student) {
  let score = 0;

  if (course.major === student.major) score += 35;
  if (course.direction === student.interest) score += 25;
  if (course.level === student.level) score += 20;
  if (course.goal === student.goal) score += 10;

  score += course.rating * 2;

  return score;
}

function recommendCourses() {
  const student = {
    major: document.getElementById("major").value,
    level: document.getElementById("level").value,
    interest: document.getElementById("interest").value,
    goal: document.getElementById("goal").value
  };

  const recommended = courses
    .map(course => {
      return {
        ...course,
        score: calculateScore(course, student)
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const resultBox = document.getElementById("courseResults");
  resultBox.innerHTML = "";

  recommended.forEach(course => {
    resultBox.innerHTML += `
      <div class="course-card">
        <h3>${course.title}</h3>
        <p><strong>Платформа:</strong> ${course.platform}</p>
        <p><strong>Деңгей:</strong> ${translateLevel(course.level)}</p>
        <p class="score">Сәйкестік ұпайы: ${course.score}%</p>
      </div>
    `;
  });
}

function translateLevel(level) {
  if (level === "beginner") return "Бастапқы";
  if (level === "middle") return "Орта";
  if (level === "advanced") return "Жоғары";
  return level;
}

function showAllCourses() {
  const allCoursesBox = document.getElementById("allCourses");
  allCoursesBox.innerHTML = "";

  courses.forEach(course => {
    allCoursesBox.innerHTML += `
      <div class="course-card">
        <h3>${course.title}</h3>
        <p><strong>Платформа:</strong> ${course.platform}</p>
        <p><strong>Деңгей:</strong> ${translateLevel(course.level)}</p>
        <p><strong>Рейтинг:</strong> ${course.rating}/5</p>
      </div>
    `;
  });
}

showAllCourses();
