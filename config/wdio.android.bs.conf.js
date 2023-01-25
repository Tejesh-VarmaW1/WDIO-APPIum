import { config } from './wdio.shared.conf.js';

//
// ============
// BrowserStack Credentials
// ============
config.user = "rudrarajutejeshv_K3c1Y4";
config.key = "Z3JcVKaxzsiKwzRUKJMK";

//
// ============
// Specs
// ============
config.specs = [
  'C:/Cigna/wdio-appium-course/test/specs/android/delete-note.spec.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "12.0",
    "appium:deviceName": "Samsung Galaxy S22 Ultra",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://2d7c73b0caf75417d3e05ac00f8e17ff3dcae173",
    "appium:autoGrantPermissions": true
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

const _config = config;
export { _config as config };