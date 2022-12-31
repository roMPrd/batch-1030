// Octokit.js
// https://github.com/octokit/core.js#readme
console.log('Hello from home.js')

const octokit = new Octokit({
  auth: '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'
})

await octokit.request('GET /search/commits{?q=author:romprd}', {})
console.log(octokit)
