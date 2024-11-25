import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };
    console.log(name, email);

    fetch(`http://localhost:4000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          alert("User updated successfully");
        }
      });
  };
  return (
    <div>
      <h3>Update information of: {loadedUser.name}</h3>

      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedUser?.email}
          id=""
        />
        <br />
        <input type="submit" name="Update User" id="" />
      </form>
    </div>
  );
};

export default Update;
