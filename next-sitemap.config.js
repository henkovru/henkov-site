/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://henkov.ru',
    generateRobotsTxt: true, // опционально, можно отключить
    // ...другие опции
  }