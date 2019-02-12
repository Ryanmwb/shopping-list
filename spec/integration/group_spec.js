const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const Group = require("../../src/db/models").Group;

describe("routes : groups", () => {
    /*describe("POST - /groups/create", () => {
        beforeEach((done) => {
            sequelize.sync({force: true})
            .then(() => {
            })
        it("should create a new group", (done)=> {
            const options = {
                url: `${base}groups/create`,
                form: {
                    groupName: "test"
                }
            };
            request.post(options, (err, res, body) => {
                Group.findOne({where: {name: "test"}})
                .then((group) => {
                    console.log("group is......")
                    console.log(group)
                    expect(group).not.toBe(null);
                    expect(group.name).toBe("test");
                    expect(group.id).toBe(1);
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                })
            })
        })
    })*/
    describe("Edit = /groups/:groupId/update", () => {
        this.group;
        beforeEach((done) => {
            sequelize.sync({force: true})
            .then(() => {
                Group.create({
                    name: "test"
                })
                .then((group) => {
                    this.group = group;
                    done();
                })
                .catch((err) => {
                    console.log(err)
                    done();
                })
            })
        })
        it("should update group", () => {
            const options = {
                url: `${base}groups/${this.group.id}/update`,
                form: {
                    groupName: "test2"
                }
            };
            request.post(options, (err, res, body) => {
                expect(err).toBe(null)
                Group.findOne({where: {id: this.group.id}})
                .then((group) => {
                    expect(group).not.toBe(null);
                    expect(group.name).toBe("test2");
                })
            })
        })
    })
})