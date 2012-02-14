describe("Contact", function () {
    var Contact = require('phonegap/plugin/Contact'),
        exec = require('phonegap/exec');

    describe("save", function () {
        it("calls exec when saving", function () {
            var c = new Contact(),
                s = jasmine.createSpy(),
                e = jasmine.createSpy();

            c.save(s, e);
            expect(exec).toHaveBeenCalledWith(s, e, "Contacts", "save", [c]);
        });
    });
});