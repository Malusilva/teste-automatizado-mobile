describe('Primeiro teste', () => {
    it('Acessar o menu forms', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('Teste Automatizado')
        expect(await $('~text-input')).toBeDisplayed()
        await $('~Dropdown').click();
        await seletor.SelectDrop()
        await $('~button-Active').click()

    });
});