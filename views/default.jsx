const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.childeren}
            </body>
        </html>
    )
}

module.exports = Def