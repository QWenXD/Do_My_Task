import http from "./http-common";

class AppContextProvider {

  //Task routes
  async getAllTask() {
      const data = await http.get("/api/tasks/");
    return data;
  }

  getTask(id) { // accepts Task's id
      const data = http.get("/api/tasks/find/"+id).then(
        (res)=>{
          console.log(res)

        }
      );
    return data;
  }

  async createTask(data) { // JSON with user_id, title, description
    return http.post("/api/task/create", data);
  }

  async findTasks_user_id(id) { // accepts user ID
    let tasks =await http.get("/api/task/find/user/" + id);
    return tasks
  }

  async deleteTask(id){ //task's id
    let task =await http.delete("/api/task/delete/" + id);
    return task
  }

  // User routes
  async createUser(data) { // JSON with name, email, token
    let user =await http.post("/api/user/create", data);
    return user
  }

  async getAllUsers() { 
    let users = await http.get("/api/user/find")
    return users
  } 

  // Invitation routes
  async createInvitation(data) { // JSON with task_id, user_id
    let invitation =await http.post("/api/invitation/create/", data);
    return invitation
  }

  async findInvitation_user_id(id) { // accepts user ID
    let tasks =await http.get("/api/invitation/find/user/" + id);
    return tasks
  }

  

//   get(id) {
//     return http.get(/tutorials/${id});
//   }

//   update(id, data) {
//     return http.put(/tutorials/${id}, data);
//   }

//   delete(id) {
//     return http.delete(/tutorials/${id});
//   }

//   deleteAll() {
//     return http.delete(/tutorials);
//   }

//   findByTitle(title) {
//     return http.get(/tutorials?title=${title});
//   }
}

export default new AppContextProvider();