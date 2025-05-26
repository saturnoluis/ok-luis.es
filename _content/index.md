---
title: wip
layout: layouts/window.njk
---

# GET handler

The first argument to Response can be a ReadableStream, making it possible to
stream large amounts of data or create server-sent events (unless deploying to
platforms that buffer responses, like AWS Lambda).

You can use the error, redirect and json methods from @sveltejs/kit for
convenience (but you don’t have to).

If an error is thrown (either error(...) or an unexpected error), the response
will be a JSON representation of the error or a fallback error page — which can
be customised via src/error.html — depending on the Accept header. The
+error.svelte component will not be rendered in this case. You can read more
about error handling here.
