module.exports = {
  name: 'angular-lab',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-lab',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
