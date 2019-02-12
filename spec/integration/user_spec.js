const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;

describe("routes : static", () => {
    describe("GET /", () => {
        it("should return statuc code 200", (done) => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            })
        })
    })
    describe("POST /User", () => {
        beforeEach((done) => {
            sequelize.sync({force: true})
            .then(() => {
              done();
            })
            .catch((err) => {
              console.log(err);
              done();
            });
          });

        it("should create a user", (done)=> {
            const options = {
                url: `${base}user`,
                form: {
                    username: 'ryanmwb',
                    email: 'fake@email.com',
                    phoneNumber: '3175551324',
                    password: '123456',
                    passwordConfirmation: '123456'
                }
            }
            request.post(options, (err, res, body) => {
                User.findOne({where: {email: 'fake@email.com'}})
                .then((user) => {
                    expect(user).not.toBeNull();
                    expect(user.email).toBe("fake@email.com");
                    expect(user.id).toBe(1);
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                })
            })
        })
    })
    describe("GET /sign_in_form", () => {
        it("should render a view with sign in form", (done) => {
            request.get(`${base}sign_in_form`, (err, res, body) => {
                expect(err).toBeNull();
                expect(body).toContain("Sign-in")
                done();
            })
        })
    })
})