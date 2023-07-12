export default function html([first, ...strings],...values) {
    return `
         ${values.reduce((acc, cur) =>  acc.concat(cur.shift(), strings.shift()) ,[first])
        // .filter((item) => item && item !== true || item === 0)
    }
    `
}