const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
const { createUser, getAllUsers, updateUser, deleteUser ,deleteexercices,updateexercices,getAllexercices,createexercices} = require("../server/database/mongodb/index");
app.use(express.json());
app.use(cors());



app.get("/get", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// app.get("/", async (req, res) => {
//   res.send('aaaaaaaaaaaaaa')
// });

app.post("/post", async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await deleteUser(userId);
    if (deletedUser) {
      res.json('User deleted successfully');
    }
  } catch (error) {
    res.status(500).json( error );
  }
});




app.put("/update/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const updatedUser = await updateUser(userId, req.body);
    if (updatedUser) {
      res.json(updatedUser);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
///////////////////////////////////////////////////////////////////////

app.get("/getexe", async (req, res) => {
  try {
    const exercices = await getAllexercices();
    res.json(exercices);
  } catch (error) {
    res.status(500).json(error);
  }
});


app.post("/postexe", async (req, res) => {
  try {
    const exercices = await createexercices(req.body);
    // console.log(exercices);
    res.json(exercices);
  } catch (error) {
    // console.log(error);
    res.status(500).json(error);
  }
});
app.delete("/deleteexe/:id", async (req, res) => {
  const exeID = req.params.id;
  try {
    const deleteexe = await deleteexercices(exeID);
    if (deleteexe) {
      res.json('User deleted successfully');
    }
  } catch (error) {
    res.status(500).json( error );
  }
});

app.put("/updateexe/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const updateexe = await updateexercices(userId, req.body);
    if (updateexe) {
      res.json(updateexe);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
