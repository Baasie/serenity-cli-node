import chai = require('chai');

chai.use(require('sinon-chai'));        // tslint:disable-line:no-var-requires
chai.use(require('chai-as-promised'));  // tslint:disable-line:no-var-requires
chai.use(require('chai-fs'));           // tslint:disable-line:no-var-requires

export = chai.expect;
