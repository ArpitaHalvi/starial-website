export default function ApplyForm() {
  return (
    <section className="apply-section">
      <div className="apply-form">
        <h3>Apply Now!</h3>
        <form>
          <div className="input-container">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter fullname"
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone"
              name="phone"
              id="phone"
            />
          </div>
          <div className="input-container">
            <label htmlFor="resume">Drop your resume</label>
            <input type="file" id="resume" name="resume" />
          </div>
          <div className="input-container">
            <label htmlFor="role" className="select-role">
              Select internship role
            </label>
            <select name="role" id="role">
              <option value="social media manager">Social Media Manager</option>
              <option value="graphic designer">Graphic designer</option>
              <option value="product manager">Product Manager</option>
              <option value="web developer">Web Developer</option>
            </select>
          </div>
          <button type="submit">Apply</button>
        </form>
      </div>
    </section>
  );
}
