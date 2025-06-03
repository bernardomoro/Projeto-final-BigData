// Utilizado para extrair os dados de
// https://www.contabilizei.com.br/contabilidade-online/cnae/

const dados = []
for (const child of body.children) {
    try {
        dados.push({
            cnae: child.children[0].children[0].innerText,
            descricao: child.children[1].children[0].innerText
        })
        console.log(`${child.children[0].children[0].innerText};${child.children[1].children[0].innerText}`)
    } catch {
    }
}
console.log(dados)