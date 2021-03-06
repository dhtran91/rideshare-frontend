// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        // './src/**/*.e2e-spec.ts'
        //'./test/landingpage.spec.js',
        './test/signup-form.spec.ts',
        './test/landing-page-login.spec.ts',
        './test/nav.spec.ts',
        //'./test/register.spec.js',
        //'./test/usernav.spec.js',
        './test/profile-landing-page.spec.ts',
        './test/profile-contact-information.spec.ts',
        './test/profile-location.spec.ts',
        './test/profile-membership.spec.ts',
        './test/profile-car-information.spec.ts'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
};
