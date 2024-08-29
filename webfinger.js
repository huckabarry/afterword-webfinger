addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const url = new URL(request.url)
    
    if (url.pathname === '/.well-known/webfinger') {
        const webfinger = {
            "subject": "acct:bryan@afterword.blog",
            "links": [
                {
                    "rel": "self",
                    "type": "application/activity+json",
                    "href": "https://afterword.blog"
                }
            ]
        }
        return new Response(JSON.stringify(webfinger), {
            headers: { 'content-type': 'application/json' }
        })
    }

    // Fallback to your Ghost site
    return fetch(request)
}
