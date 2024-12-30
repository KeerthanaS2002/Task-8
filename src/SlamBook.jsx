import React, { useState } from "react";

const SlamBook = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedActors, setSelectedActors] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState("");

  const handleCheckboxChange = (actor) => {
    setSelectedActors((prev) =>
      prev.includes(actor)
        ? prev.filter((item) => item !== actor)
        : [...prev, actor]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        backgroundImage: `url("bcg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <fieldset
        style={{
          border: "2px solid rgba(16, 15, 15, 0.7)",
          borderRadius: "10px",
          padding: "20px 30px",
          width: "500px",
          position: "relative",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          backgroundColor: "rgba(251, 239, 239, 0.6)",
          backdropFilter: "blur(5px)",
        }}
      >
        <legend
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#000000",
            fontFamily: "'Georgia', serif",
            padding: "0 10px",
          }}
        >
          SlamBook
        </legend>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>DOB:</label>
            <input type="date" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nick Name:</label>
            <input
              type="text"
              placeholder="Enter your nickname"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Address:</label>
            <input
              type="text"
              placeholder="Enter your address"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Memories:</label>
            <textarea
              placeholder="Write your memories"
              style={{ ...styles.input, height: "80px", resize: "vertical" }}
            ></textarea>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Gender:</label>
            <div style={styles.inlineGroup}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => setSelectedGender(e.target.value)}
                  style={styles.radioCheckbox}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => setSelectedGender(e.target.value)}
                  style={styles.radioCheckbox}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={(e) => setSelectedGender(e.target.value)}
                  style={styles.radioCheckbox}
                />
                Other
              </label>
            </div>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Favorite Actors:</label>
            <div style={styles.inlineGroup}>
              {["Thalapathy Vijay", "Thala Ajith", "Suriya"].map((actor) => (
                <label key={actor}>
                  <input
                    type="checkbox"
                    value={actor}
                    onChange={() => handleCheckboxChange(actor)}
                    style={styles.radioCheckbox}
                  />
                  {actor}
                </label>
              ))}
            </div>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>School:</label>
            <select
              style={styles.input}
              onChange={(e) => setSelectedSchool(e.target.value)}
            >
              <option value="">Select your school</option>
              <option value="school1">BVB</option>
              <option value="school2">CS Academy</option>
              <option value="school3">TIPS</option>
            </select>
          </div>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
};

const styles = {
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
    fontSize: "0.9rem",
    color: "#333",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  radioCheckbox: {
    marginRight: "5px",
    cursor: "pointer",
  },
  inlineGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "5px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default SlamBook;
