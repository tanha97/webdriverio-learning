/**
 * Uploads a file to a hidden input element using WebDriverIO.
 * @param {string} selector - The selector of the file input element.
 * @param {string} fileName - The file name (must be in the project folder).
 */
async function uploadFile(selector, fileName) {
  const path = require('path')

  // Step 1: Get the absolute file path from your local project
  const filePath = path.join(__dirname, `../testData/${fileName}`)

  // Step 2: Upload the file to WebDriver's remote storage
  const remoteFilePath = await browser.uploadFile(filePath)

  // Step 3: Unhide the input element properly using browser.execute() to interact with the DOM
  await browser.execute((selector) => {
    const el = document.querySelector(selector)
    if (el) {
      el.removeAttribute('hidden')
      el.style.display = 'block'
    }
  }, selector)

  // Step 4: Set the uploaded file path to the input
  const fileInput = await $(selector)
  await fileInput.setValue(remoteFilePath)
}

module.exports = uploadFile
