test('no deberia cambiar el contenido de la variable', () => {
    const str = 'inmutabilidad'

    expect(srt.toUpperCase()).toBe('INMUTABILIDAD')
    expect(str).toBe('inmutabilidad')
})