const management = await browser.management.get(browser.runtime.id)
const host = management.installType === 'development' ? 'http://localhost:3001' : 'https://todorist.com'

export default function() {
  return {
    host,        
  }
}

