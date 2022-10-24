function generateHTML(data) {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
            crossorigin="anonymous" />
        <title>Portfolio</title>
    </head>
    <body>
        <div class="container">
            <h1>Hello, my name is ${data.name}</h1>
            <ul>
                <li>Location: ${data.location}</li>
                <li>About Me: ${data.bio}</li>
                <li>My Github Username: ${data.github}</li>
                <li>My LinkedIn Profile: ${data.linkedin}</li>
            </ul>
        </div>
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
            crossorigin="anonymous"></script>
    </body>
</html>
`
}

module.exports = generateHTML;