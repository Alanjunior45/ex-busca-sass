


// Importar utilitariosListas

const { experiments } = require("webpack")



it("Deve retornar 'Encontrado' caso encontre o valor na lista", () => {
    //Given
    const lista = [1, 2, 3, 4]
    const valorBuscado = 7
    // When
    const resultado = encontrarValor(lista, valorBuscado)

    // Then
    expect(resultado).toBe("Encontrado")
})

it("Deve retornar 'Não Encontrado' caso não encontre o valor na lista", () => {
    //Given
    const lista = [1, 2, 3, 4]
    const valorBuscado = 2
    // When
    const resultado = filtrarValor(lista, valorBuscado)

    // Then
    expect(resultado).toBe("Não encontrados")
})

it("Deve retornar 'x Encontrados' caso não encontre o valor na lista x vezes", () => {
    //Given
    const lista = [1, 2, 3, 4]
    const valorBuscado = 7
   // When
   const resultado = encontrarValor(lista, valorBuscado)

  // Then
  expect(resultado).toBe("1 encontrado")
})

it("Deve retornar '0 Encontrados' caso não encontre o valor na lista", () => {
    //Given
    const lista = [1, 2, 3, 4]
    const valorBuscado = 8
   // When
   const resultado = encontrarValor(lista, valorBuscado)

  // Then
  expect(resultado).toBe("0 encontrado")
})


