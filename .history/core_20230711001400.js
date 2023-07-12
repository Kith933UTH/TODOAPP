export default function html([first, ...strings],...values) {
    return `
        ${values.reduce((acc, cur) =>  acc.concat(values.shift(), strings.shift())
        , first)
    }
    `
}