import { join } from 'path';
import { config } from './wdio.shared.conf.js';

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  'C:/Cigna/wdio-appium-course/test/specs/android/sample.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "Pixel 3 API 30",
    "appium:automationName": "UIAutomator2",
    "appium:app": join(process.cwd(), "./app/android/ColorNote Notepad.apk"),
    "appium:autoGrantPermissions": true
  }
]

config.services['appium'],


exports.config = config;