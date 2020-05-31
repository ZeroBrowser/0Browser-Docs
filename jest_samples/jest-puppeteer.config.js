module.exports = {
    connect: {
        browserWSEndpoint: 'wss://proxy.0browser.com?token={YOUR-API-KEY}&timeout=160000'       
    },
    browser: 'chromium',
    browserContext: 'default'
}