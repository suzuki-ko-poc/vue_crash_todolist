import { test } from '@playwright/test'



test.describe('APIリクエストをMock化してテストを実行する', () => {

  test('apiリクエストをMock化', async ({ page }) => {
    /**
     * 本来であれば、http://localhost:1111/helloなんてエンドポイントは存在しないが、page.routeでresponseをmock化することで、
     * この存在しないエンドポイントにアクセスした際に、mockを返すことができる。
     */
    await page.route('http://localhost:1111/hello', (route, request) => {
      if (request.method() === "GET") {
        route.fulfill({
          // path: 'xxx.json'  :    レスポンスボディが xxx.jsonの中身となる。
          path: "tests/api-mocks/getTodos.json"
        })
      } else {
        route.continue()
      }
    })

    await page.goto('http://localhost:8080/#/')
    await page.pause()
    await page.locator('id=todo-item0 >> button.del').click()
  })

  test('harファイルを使ってのmock化', async ({ page }) => {
    /**
     *  example.harは、harファイル生成時に実行したリクエストと、そのレスポンスを記録しており、routeFromHARを使うことにより、
     *  その時と同じレスポンスをmockとして再現することができる。
     **/ 
    await page.routeFromHAR('example.har')

    await page.goto('http://localhost:8080/#/')
    await page.pause()
    await page.locator('id=todo-item0 >> button.del').click()
  })
})