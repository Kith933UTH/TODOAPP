export default function html([first, ...strings],...values) {
    return `
         ${values.reduce((acc, cur) =>  acc.concat(cur, strings.shift()) ,[first])
        .filter((item) => item && item !== true || item === 0)
        .join("")
    }
    `
}