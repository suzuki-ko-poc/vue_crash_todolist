const pti = require('playwright-to-istanbul')
import { test, expect } from "./baseFixture"
// import { test, expect } from '@playwright/test'

test("AddTodoComponent", async ({ page }) => {
  // await Promise.all([
  //   page.coverage.startJSCoverage(),
  //   page.coverage.startCSSCoverage()
  // ]);
  await page.pause()
  await page.goto('/')
  await page.locator("input[type='text']").fill("hello")
  await page.locator("text='About'").click()
  // const [jsCoverage, cssCoverage] = await Promise.all([
  //   page.coverage.stopJSCoverage(),
  //   page.coverage.stopCSSCoverage(),
  // ]);
  // pti.write([...jsCoverage, ...cssCoverage], { includeHostname: true, storagePath: 'tests/.nyc_output' })

});