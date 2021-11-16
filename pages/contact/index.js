const Contact = () => {
  return (
    <div>
      <h2>Contact me.</h2>
      <form action="" method="post">
        <p>
          <label htmlFor="name">name</label>
          <input type="text" name="name" />
        </p>
        <p>
          <label htmlFor="email">email</label>
          <input type="text" name="email" />
        </p>
        <p>
          <label htmlFor="text">message</label>
          <textarea name="text"></textarea>
        </p>
      </form>
    </div>
  );
};

export default Contact;
