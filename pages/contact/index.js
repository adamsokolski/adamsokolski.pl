const Contact = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const data = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (field.name) {
        data[field.name] = field.value;
      }
    });
    fetch("api/email", {
      method: "post",
      body: JSON.stringify(data),
    });
    console.log(data);
  }
  return (
    <div>
      <h2>Contact me.</h2>
      <form method="post" onSubmit={handleOnSubmit}>
        <p>
          <label htmlFor="name">name</label>
          <input type="text" name="name" />
        </p>
        <p>
          <label htmlFor="email">email</label>
          <input type="email" name="email" />
        </p>
        <p>
          <label htmlFor="text">message</label>
          <textarea name="text"></textarea>
        </p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
