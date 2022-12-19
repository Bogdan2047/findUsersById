const DB = {
  levels: [
    { id: "1", name: "junior" },
    { id: "2", name: "middle" },
    { id: "3", name: "senior" },
  ],
  skills: [
    { id: "1", name: "html/css" },
    { id: "2", name: "js" },
    { id: "3", name: "nodejs" },
    { id: "4", name: "react" },
    { id: "5", name: "TypeScript" },
  ],
  users: [
    {
      id: "1",
      levelId: "3",
      name: "Andriy Petrash",
      skills: ["1", "2", "3", "4", "5"],
    },

    {
      id: "2",
      levelId: "1",
      name: "Oleg",
      skills: ["1", "4"],
    },
  ],
};

function findName(id) {
  let user = {};
  
  let users = DB.users;
  let level = DB.levels;
  let skills = DB.skills;  
  let userSkills;
  let pos;


  users.forEach((item) => {
    if(item.id == id) {
      user.name = item.name;
      pos = item.levelId;
      userSkills = item.skills;
    }
  });


  level.forEach((item) => {
    if ((item.id = pos)) {
      user.position = item.name;
    }
    });

    user.skills = [];
    userSkills.forEach(item => {

        skills.forEach(value =>{
            if(item== value.id){
                user.skills.push(value.name)
            }

        })
    })

  
  console.log(user);
}

findName(1);
