<div className="ab">
          <div className="fn">First Name</div>
          <input
            className="one"
            type="text"
            name="firstName"
            // value={f}
            // onChange={(e) => setFirstName(e.target.value)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <div style={{ color: "red" }}>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <br />
        <br />
        <br />

        <div>
          <label>
            <div className="ln">Last Name:</div>
            <input
              className="two"
              name="lastName"
              type="text"
              // value={lastName}
              // onChange={(e) => setLastName(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.errors.lastName && formik.touched.lastName ? (
              <div style={{ color: "red" }}>{formik.errors.lastName}</div>
            ) : null}
          </label>
        </div>

        <br />
        <br />
        <br />

        <div>
          <label>
            <div className="en">
              Examination <br />
              Name:
            </div>

            <input
              className="three"
              name="examName"
              type="text"
              // value={examName}
              // onChange={(e) => setExamName(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.examName}
            />
            {formik.errors.examName && formik.touched.examName ? (
              <div style={{ color: "red" }}>{formik.errors.examName}</div>
            ) : null}
          </label>
        </div>

        <br />
        <br />
        <div>
          <label>
            <div className="pd"> Password:</div>

            <input
              className="four"
              name="password"
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </label>
        </div>

        <br />
        <br />
        <br />

        <div>
          <label>
            <div className="cp">
              Confirm <br />
              Password:
            </div>

            <input
              className="five"
              name="confirmPassword"
              type="password"
              // value={confirmPassword}
              // onChange={(e) => setConfirmPassword(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.confirmPassword}
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <div style={{ color: "red" }}>
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </label>
        </div>

        <br />
        <br />

        <div>
          <label>
            <div className="dob">
              Date of
              <br /> Birth:
            </div>

            <input
              className="six"
              name="dateOfBirth"
              type="date"
              // value={dob}
              // onChange={(e) => setDob(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.dateOfBirth}
            />
            {formik.errors.dateoOBirth && formik.touched.dateOfBirth ? (
              <div style={{ color: "red" }}>{formik.errors.dateOfBirth}</div>
            ) : null}
          </label>
        </div>

        <br />
        <div>
          {" "}
          <label>
            <div className="email"> Email:</div>

            <input
              className="seven"
              name="email"
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </label>
        </div>

        <br />
        <br />
        <br />
        <div>
          <label>
            <div className="gender">Gender:</div>
            <div>
              <div className="male">Male</div>
              <input
                className="nine"
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <br />
            <br />
            <div>
              <div className="female">Female</div>

              <input
                className="ten"
                type="radio"
                name="gender"
                value="other"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div>
              <div className="other">Other</div>
              <input
                className="eleven"
                type="radio"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </label>

          <div className="file">
            {" "}
            <label>
              Upload a <br />
              file
            </label>
            <input className="fil" type="file"></input>
          </div>
        </div>
        <br />
        <br />
        <br />

        <button className="but" type="submit">
          <p className="sub">Submit</p>
        </button>
        <br />
        <br />